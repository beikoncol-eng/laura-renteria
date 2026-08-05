'use client';

import { useId, useState, type ReactNode } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Accordion — used only where content requires it (FAQ). Container-less: items
 * are separated by a hairline, not boxed. Opening animates height + opacity,
 * simple and calm — no bounce, no exaggerated easing (Motion doc). One panel
 * open at a time. Fully keyboard + screen-reader accessible.
 */
export interface AccordionItemData {
  question: string;
  answer: ReactNode;
}

export interface AccordionProps {
  items: AccordionItemData[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className={cn('w-full', className)}>
      {items.map((item, index) => (
        <AccordionRow
          key={index}
          item={item}
          open={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}

function AccordionRow({
  item,
  open,
  onToggle,
}: {
  item: AccordionItemData;
  open: boolean;
  onToggle: () => void;
}) {
  const reduce = useReducedMotion();
  const uid = useId();
  const buttonId = `${uid}-button`;
  const panelId = `${uid}-panel`;

  return (
    <div className="border-line border-b">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-[var(--space-24)] py-[var(--space-24)] text-left transition-opacity duration-[var(--dur-fast)] hover:opacity-70"
        >
          <span className="font-display text-ink text-[1.25rem] leading-tight md:text-[1.5rem]">
            {item.question}
          </span>
          <span aria-hidden className="text-muted shrink-0">
            {open ? (
              <Minus size={20} strokeWidth={1.5} />
            ) : (
              <Plus size={20} strokeWidth={1.5} />
            )}
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: reduce ? 0 : 0.32,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="overflow-hidden"
          >
            <div className="max-w-[65ch] pb-[var(--space-24)]">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
