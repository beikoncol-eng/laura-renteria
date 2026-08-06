'use client';

import { useState, type FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/ui';
import { Button } from '@/components/buttons';
import { CONTACT } from '@/lib/domain';
import { Input } from './input';
import { Textarea } from './textarea';
import type { FieldVariant } from './input';

/**
 * ContactForm — the single, shared contact form (home section + contact page).
 *
 * Until a transactional backend (Resend) is wired, the submit is a real,
 * functional action: it composes a pre-filled email to the real address via a
 * `mailto:` link — no dead button, no lost intent. Fields reveal one after
 * another for a calm, premium entrance; the `variant` switches between the
 * boxed and underline field registers so each context keeps its own texture.
 */
export interface ContactFormProps {
  variant?: FieldVariant;
}

export function ContactForm({ variant = 'box' }: ContactFormProps) {
  const tForm = useTranslations('contact.form');
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    const subject = name
      ? `Inquiry from ${name}`
      : 'Inquiry from laurarenteria.com';
    const body = [message, '', `— ${name}${email ? ` · ${email}` : ''}`].join(
      '\n',
    );

    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form
      className="flex flex-col gap-[var(--space-48)]"
      onSubmit={onSubmit}
      noValidate
    >
      <div className="grid gap-[var(--space-48)] md:grid-cols-2">
        <Reveal>
          <Input
            variant={variant}
            label={tForm('name')}
            name="name"
            autoComplete="name"
            placeholder={tForm('namePlaceholder')}
            wrapperClassName="w-full"
          />
        </Reveal>
        <Reveal delay={0.08}>
          <Input
            variant={variant}
            label={tForm('email')}
            name="email"
            type="email"
            autoComplete="email"
            placeholder={tForm('emailPlaceholder')}
            wrapperClassName="w-full"
          />
        </Reveal>
      </div>
      <Reveal delay={0.16}>
        <Textarea
          variant={variant}
          label={tForm('message')}
          name="message"
          placeholder={tForm('messagePlaceholder')}
          wrapperClassName="w-full"
        />
      </Reveal>
      <Reveal delay={0.24} className="pt-[var(--space-16)]">
        <Button type="submit">{tForm('submit')}</Button>
        <span role="status" aria-live="polite" className={cnStatus(sent)}>
          {sent ? tForm('sent') : ''}
        </span>
      </Reveal>
    </form>
  );
}

/** Small helper: keep the status line out of the layout until it has content. */
function cnStatus(sent: boolean): string {
  return sent
    ? 'font-body text-muted mt-[var(--space-16)] block text-[0.875rem] leading-[1.6]'
    : 'sr-only';
}
