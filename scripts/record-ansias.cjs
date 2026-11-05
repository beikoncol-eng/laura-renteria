// Records ansiastattoo.com navigating itself (desktop + mobile) for the Ansias case study.
// Deterministic capture: every frame sets an eased scroll position and takes a screenshot, so the
// motion is perfectly smooth; time-based entrance animations are warmed up before recording.
// Usage: node scripts/record-ansias.cjs   (needs ffmpeg on PATH and a local Chrome)
const { chromium } = require('C:/Users/pablo/Desktop/popular_web/interior_experience/node_modules/playwright-core');
const fs = require('fs');
const { execFileSync } = require('child_process');

const URL = 'https://www.ansiastattoo.com';
const TMP = 'C:/Users/pablo/Desktop/popular_web/video_caso/grabaciones/ansias';
const OUT = 'C:/Users/pablo/Desktop/Laura-web/public/assets/videos/work';
const FPS = 30;
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

function timeline(keys) {
  const ys = [];
  for (let i = 0; i < keys.length - 1; i++) {
    const [t0, y0] = keys[i];
    const [t1, y1] = keys[i + 1];
    const n = Math.round((t1 - t0) * FPS);
    for (let f = 0; f < n; f++) ys.push(y0 + (y1 - y0) * ease(f / n));
  }
  ys.push(keys.at(-1)[1]);
  return ys;
}

async function warm(p, path) {
  await p.goto(URL + path, { waitUntil: 'networkidle' });
  await p.addStyleTag({ content: 'html{scroll-behavior:auto!important}' });
  await p.waitForTimeout(4000); // opening scene
  const h = await p.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < h; y += 300) {
    await p.evaluate((y) => scrollTo(0, y), y);
    await p.waitForTimeout(140);
  }
  await p.evaluate(() => scrollTo(0, 0));
  await p.waitForTimeout(1800);
}

async function shoot(p, dir, keys, start) {
  const ys = timeline(keys);
  for (let i = 0; i < ys.length; i++) {
    await p.evaluate((y) => scrollTo(0, y), Math.round(ys[i]));
    await p.waitForTimeout(30); // let scroll-linked motion settle on this frame
    await p.screenshot({ path: `${dir}/f${String(start + i).padStart(5, '0')}.jpg`, type: 'jpeg', quality: 92 });
  }
  return start + ys.length;
}

function encode(dir, name, w, crf) {
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-framerate', String(FPS), '-i', `${dir}/f%05d.jpg`,
    '-vf', `scale=${w}:-2:flags=lanczos,format=yuv420p`, '-c:v', 'libx264', '-crf', String(crf),
    '-preset', 'slow', '-movflags', '+faststart', '-an', `${OUT}/${name}.mp4`]);
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', `${dir}/f00000.jpg`, '-vf', `scale=${w}:-2`, '-q:v', '3', `${OUT}/${name}.jpg`]);
}

(async () => {
  const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
  {
    const dir = `${TMP}/desk`;
    fs.rmSync(dir, { recursive: true, force: true });
    fs.mkdirSync(dir, { recursive: true });
    const c = await b.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
    const p = await c.newPage();
    await warm(p, '/');
    const n = await shoot(p, dir, [[0, 0], [1.6, 0], [4.6, 1100], [5.6, 1100], [8.6, 2300], [9.6, 2300], [12.6, 3400], [13.8, 3400]], 0);
    encode(dir, 'ansias-web-desktop', 1280, 25);
    console.log('desk', n, 'frames');
    await c.close();
  }
  {
    const dir = `${TMP}/mov`;
    fs.rmSync(dir, { recursive: true, force: true });
    fs.mkdirSync(dir, { recursive: true });
    const c = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
    const p = await c.newPage();
    await warm(p, '/');
    let n = await shoot(p, dir, [[0, 0], [1.4, 0], [3.8, 900], [4.6, 900]], 0);
    await warm(p, '/work');
    n = await shoot(p, dir, [[0, 0], [1.0, 0], [4.0, 1500], [4.8, 1500], [7.6, 3200], [8.4, 3200]], n);
    encode(dir, 'ansias-web-mobile', 600, 28);
    console.log('mov', n, 'frames');
    await c.close();
  }
  await b.close();
})();
