'use client';

import { forwardRef, useId, type TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { FieldShell, describedBy } from './field-shell';
import type { FieldVariant } from './input';

/**
 * Textarea primitive. Comfortable writing surface (180px min, vertical resize).
 * Shares the Input `box` / `underline` registers and focus treatment.
 */
const fieldVariant: Record<FieldVariant, string> = {
  box: 'rounded-[2px] border border-line px-4 py-3',
  underline: 'rounded-none border-0 border-b border-line px-0 py-3',
};

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  hint?: string;
  error?: string;
  variant?: FieldVariant;
  wrapperClassName?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      hint,
      error,
      id,
      variant = 'box',
      className,
      wrapperClassName,
      ...rest
    },
    ref,
  ) => {
    const generatedId = useId();
    const fieldId = id ?? generatedId;

    return (
      <FieldShell
        id={fieldId}
        label={label}
        hint={hint}
        error={error}
        className={wrapperClassName}
      >
        <textarea
          ref={ref}
          id={fieldId}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(fieldId, hint, error)}
          className={cn(
            'min-h-[var(--textarea-min-h)] w-full resize-y bg-transparent',
            'font-body text-ink placeholder:text-muted/60 text-[1rem] leading-[1.7]',
            'focus:border-ink transition-colors duration-[var(--dur-fast)] focus:outline-none',
            fieldVariant[variant],
            error && 'border-ink',
            className,
          )}
          {...rest}
        />
      </FieldShell>
    );
  },
);

Textarea.displayName = 'Textarea';
