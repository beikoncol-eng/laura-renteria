import { setRequestLocale } from 'next-intl/server';

/**
 * Placeholder route — scaffold only.
 *
 * This exists solely so the App Router has a valid entry point and the
 * architecture compiles and runs. The real Home experience (Hero → Manifesto
 * → … → Footer, per the approved IA) is composed from `features/home` in a
 * later phase, against the approved Copy Deck. No design lives here.
 */
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="container-editorial" style={{ paddingBlock: '4rem' }}>
      <p style={{ color: 'var(--color-muted)' }}>
        Architecture scaffold. Content pending Copy Deck.
      </p>
    </main>
  );
}
