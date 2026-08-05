'use client';

import type { ReactNode } from 'react';
import { Link, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

/**
 * NavLink — the single navigation link primitive.
 *
 * Wraps the locale-aware Link with the editorial underline-draw and active
 * state (persistent underline + aria-current). Typography is supplied via
 * `className` so the same link works small in the header and large in the
 * mobile menu, without duplicating logic.
 */
export interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive =
    href === '/'
      ? pathname === '/'
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'link-underline inline-block w-fit text-current',
        isActive && 'bg-[length:100%_1px]',
        className,
      )}
    >
      {children}
    </Link>
  );
}
