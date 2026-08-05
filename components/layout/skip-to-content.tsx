import { useTranslations } from 'next-intl';
import { MAIN_CONTENT_ID } from './main';

/**
 * Skip to Content — the first focusable element on the page. Visually hidden
 * until focused, then it reveals as an editorial pill and jumps keyboard/AT
 * users straight to the main landmark.
 */
export function SkipToContent() {
  const t = useTranslations('a11y');
  return (
    <a
      href={`#${MAIN_CONTENT_ID}`}
      className={
        'bg-ink font-body text-paper sr-only rounded-[2px] px-4 py-2 text-[0.875rem] ' +
        'focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-[100]'
      }
    >
      {t('skipToContent')}
    </a>
  );
}
