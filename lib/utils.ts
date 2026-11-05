import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge conditional class names and resolve Tailwind conflicts.
 * The single class-composition helper for the whole project.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Title-cases a kebab-case slug for display (structural, derived from the
 * domain — not authored copy). Localized display names can move to messages
 * later; this keeps area/capability names in lockstep with their slugs.
 */
export function humanizeSlug(slug: string): string {
  return slug
    .split('-')
    .map((word) =>
      ACRONYMS.has(word)
        ? word.toUpperCase()
        : word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join(' ')
    .replace('UX UI', 'UX/UI');
}

/** Slug words that display as acronyms. */
const ACRONYMS = new Set(['ux', 'ui', 'seo']);
