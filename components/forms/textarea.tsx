'use client';

import { forwardRef, useId, type TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { FieldShell, describedBy } from './field-shell';

/**
 * Textarea primitive.
 *
 * Comfortable writing surface: 180px minimum height, hairline border, 2px
 * radius, vertical resize only. Matches the Input focus treatment.
 */
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  hint?: string;
  error?: string;
  wrapperClassName?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
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
        <textarea
          ref={ref}
          id={fieldId}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(fieldId, hint, error)}
          className={cn(
            'min-h-[var(--textarea-min-h)] w-full resize-y rounded-[2px] border bg-transparent px-4 py-3',
            'font-body text-ink placeholder:text-muted/60 text-[1rem] leading-[1.7]',
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

Textarea.displayName = 'Textarea';
