'use client';

import { forwardRef, useId, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { FieldShell, describedBy } from './field-shell';

/**
 * Input primitive.
 *
 * Architectural, minimal. 56px height, 1px hairline border, 2px radius, no
 * shadow. Focus resolves to a thin ink border only. forwardRef so React Hook
 * Form can register it directly.
 */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
  error?: string;
  /** Wrapper class; `className` styles the <input> itself. */
  wrapperClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, error, id, className, wrapperClassName, ...rest }, ref) => {
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
            'h-[var(--input-h)] w-full rounded-[2px] border bg-transparent px-4',
            'font-body text-ink placeholder:text-muted/60 text-[1rem]',
            'border-line transition-colors duration-[var(--dur-fast)]',
            'focus:border-ink focus:outline-none',
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
