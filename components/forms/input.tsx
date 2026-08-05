'use client';

import { forwardRef, useId, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { FieldShell, describedBy } from './field-shell';

/**
 * Input primitive.
 *
 * Two registers: `box` (1px hairline box, 2px radius) and `underline` (borderless
 * except a bottom hairline) — the latter for premium, editorial forms. Focus
 * resolves to a thin ink border only. forwardRef for React Hook Form.
 */
export type FieldVariant = 'box' | 'underline';

const fieldVariant: Record<FieldVariant, string> = {
  box: 'rounded-[2px] border border-line px-4',
  underline: 'rounded-none border-0 border-b border-line px-0',
};

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
  error?: string;
  variant?: FieldVariant;
  /** Wrapper class; `className` styles the <input> itself. */
  wrapperClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
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
        <input
          ref={ref}
          id={fieldId}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(fieldId, hint, error)}
          className={cn(
            'h-[var(--input-h)] w-full bg-transparent',
            'font-body text-ink placeholder:text-muted/60 text-[1rem]',
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

Input.displayName = 'Input';
