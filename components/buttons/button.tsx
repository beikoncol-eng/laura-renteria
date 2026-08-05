'use client';

import { forwardRef, type ButtonHTMLAttributes } from 'react';
import {
  buttonClassName,
  type ButtonSize,
  type ButtonVariant,
} from './button-styles';

/**
 * Button primitive.
 *
 * Editorial, never SaaS. Hover is a soft opacity shift; the `text` variant
 * draws its underline left → right. Styling comes from `buttonClassName`
 * (button-styles.ts) so links can share it. forwardRef for RHF / focus.
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', type, className, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        type={type ?? 'button'}
        className={buttonClassName(variant, size, className)}
        {...rest}
      />
    );
  },
);

Button.displayName = 'Button';
