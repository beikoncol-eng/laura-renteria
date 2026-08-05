import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * FieldShell — shared, presentational scaffolding for form controls.
 *
 * Owns the label-above-input structure, generous spacing, and the calm,
 * typographic error/hint messaging (never color alone) mandated by the docs.
 * Consumed by Input and Textarea; not used directly at call sites.
 */
export interface FieldShellProps {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  className?: string;
  children: ReactNode;
}

export function FieldShell({
  id,
  label,
  hint,
  error,
  className,
  children,
}: FieldShellProps) {
  return (
    <div className={cn('flex flex-col gap-[var(--space-8)]', className)}>
      <label
        htmlFor={id}
        className="font-body text-ink text-[0.875rem] font-medium"
      >
        {label}
      </label>
      {children}
      {hint && !error && (
        <p
          id={`${id}-hint`}
          className="font-body text-muted text-[0.875rem] leading-[1.6]"
        >
          {hint}
        </p>
      )}
      {error && (
        <p
          id={`${id}-error`}
          className="font-body text-ink text-[0.875rem] leading-[1.6]"
        >
          {error}
        </p>
      )}
    </div>
  );
}

/** Shared aria-describedby id resolution for a field's hint/error. */
export function describedBy(
  id: string,
  hint?: string,
  error?: string,
): string | undefined {
  if (error) return `${id}-error`;
  if (hint) return `${id}-hint`;
  return undefined;
}
