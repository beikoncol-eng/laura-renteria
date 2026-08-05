import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

/**
 * Locale-aware navigation primitives.
 * Always import Link / useRouter / redirect / usePathname from here
 * (never from `next/navigation` directly) so locale prefixes are preserved.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
