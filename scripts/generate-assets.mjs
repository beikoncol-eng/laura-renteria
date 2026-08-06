/**
 * Generates the production favicon package + the Open Graph social card from the
 * existing LR monogram and the studio portrait. Run: `node scripts/generate-assets.mjs`.
 * Outputs go to /public (served at the site root) — no design decisions here,
 * only rasterisation/composition of already-approved brand elements.
 */
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pub = join(root, 'public');

const INK = '#141414';
const PAPER = '#FAF9F6';
const CREAM = '#F4F1EA';
const MUTED = '#666666';

/* ── LR monogram (ink field, paper letters) ─────────────────────────────── */
const monogramSvg = (
  size,
) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 100 100">
  <rect width="100" height="100" fill="${INK}"/>
  <text x="50" y="68" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-weight="500" font-size="50" letter-spacing="1" fill="${PAPER}">LR</text>
</svg>`;

const png = (size) =>
  sharp(Buffer.from(monogramSvg(size)))
    .resize(size, size)
    .png()
    .toBuffer();

/* ── Minimal ICO encoder wrapping PNG entries (16 + 32) ─────────────────── */
function buildIco(entries) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(entries.length, 4);
  const dir = Buffer.alloc(16 * entries.length);
  let offset = 6 + dir.length;
  const bodies = [];
  entries.forEach((e, i) => {
    const b = i * 16;
    dir.writeUInt8(e.size >= 256 ? 0 : e.size, b);
    dir.writeUInt8(e.size >= 256 ? 0 : e.size, b + 1);
    dir.writeUInt8(0, b + 2);
    dir.writeUInt8(0, b + 3);
    dir.writeUInt16LE(1, b + 4);
    dir.writeUInt16LE(32, b + 6);
    dir.writeUInt32LE(e.data.length, b + 8);
    dir.writeUInt32LE(offset, b + 12);
    offset += e.data.length;
    bodies.push(e.data);
  });
  return Buffer.concat([header, dir, ...bodies]);
}

/* ── Open Graph card: portrait panel + editorial type on cream ──────────── */
async function buildOgCard() {
  const W = 1200;
  const H = 630;
  const panelW = 468;
  const portrait = await sharp(join(pub, 'assets/images/web/laura-3501.jpg'))
    .resize(panelW, H, { fit: 'cover', position: 'north' })
    .toBuffer();

  const textSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <rect width="${W}" height="${H}" fill="${CREAM}"/>
    <!-- LR monogram badge -->
    <rect x="84" y="72" width="52" height="52" fill="${INK}"/>
    <text x="110" y="107" text-anchor="middle" font-family="Georgia, serif" font-weight="500" font-size="26" fill="${PAPER}">LR</text>
    <!-- Name -->
    <text x="84" y="330" font-family="Georgia, 'Times New Roman', serif" font-size="72" fill="${INK}">Laura Rentería</text>
    <!-- rule -->
    <rect x="86" y="360" width="120" height="2" fill="${INK}"/>
    <!-- tagline -->
    <text x="84" y="410" font-family="Arial, Helvetica, sans-serif" font-size="21" letter-spacing="2" fill="${MUTED}">Brand Strategy · Creative Direction · Image Consulting</text>
    <!-- location -->
    <text x="84" y="556" font-family="Arial, Helvetica, sans-serif" font-size="19" letter-spacing="1" fill="${MUTED}">New York · Colombia</text>
  </svg>`;

  return sharp(Buffer.from(textSvg))
    .composite([{ input: portrait, left: W - panelW, top: 0 }])
    .jpeg({ quality: 86 })
    .toBuffer();
}

/* ── safari pinned tab: monochrome vector mask ──────────────────────────── */
const safariSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <text x="50" y="70" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-weight="500" font-size="54" letter-spacing="1" fill="#000000">LR</text>
</svg>`;

const out = (name, data) => {
  writeFileSync(join(pub, name), data);
  console.log('wrote', name, data.length, 'bytes');
};

const p16 = await png(16);
const p32 = await png(32);
out('favicon-16x16.png', p16);
out('favicon-32x32.png', p32);
out('apple-touch-icon.png', await png(180));
out('android-chrome-192x192.png', await png(192));
out('android-chrome-512x512.png', await png(512));
out('icon.svg', Buffer.from(monogramSvg(64)));
out('safari-pinned-tab.svg', Buffer.from(safariSvg));
out(
  'favicon.ico',
  buildIco([
    { size: 16, data: p16 },
    { size: 32, data: p32 },
  ]),
);
out('assets/images/og-default.jpg', await buildOgCard());
console.log('done');
