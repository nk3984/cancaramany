"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Modal } from "@/components/ui/Modal";

const documents = [
  "Cadastral information",
  "Former planning documentation",
  "Original architectural drawings",
  "Infrastructure information",
  "Technical documents",
  "Property documentation",
  "Investment material",
];

export function DataRoomCTA() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="private-access"
      className="bg-[var(--color-background)] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 border border-[var(--color-warm-stone)]/80 bg-[var(--color-white)] p-8 sm:p-12 lg:grid-cols-12 lg:gap-16 lg:p-16">
          <FadeIn className="lg:col-span-6">
            <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-[var(--color-terracotta)]">
              Private Data Room
            </p>
            <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2rem,4vw,3.25rem)] leading-[1.15] text-[var(--color-charcoal)]">
              For those who want to go deeper.
            </h2>
            <p className="mt-8 max-w-md text-base leading-[1.85] text-[var(--color-deep-olive)]">
              Plans, titles, infrastructure notes and the original architectural
              drawings are available to qualified buyers and their advisers —
              privately, and in full.
            </p>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="mt-10 inline-flex bg-[var(--color-charcoal)] px-7 py-3.5 text-[11px] uppercase tracking-[0.22em] text-[var(--color-white)] transition-colors hover:bg-[var(--color-deep-olive)]"
            >
              Request Private Access
            </button>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-6">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-deep-olive)]">
              Document categories
            </p>
            <ul className="mt-6 space-y-0 border-t border-[var(--color-warm-stone)]/70">
              {documents.map((doc) => (
                <li
                  key={doc}
                  className="border-b border-[var(--color-warm-stone)]/70 py-4 text-sm text-[var(--color-charcoal)]"
                >
                  {doc}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Request Private Access"
      >
        <EnquiryForm onSuccess={() => setOpen(false)} />
      </Modal>
    </section>
  );
}
