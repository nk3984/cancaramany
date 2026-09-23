"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Modal } from "@/components/ui/Modal";
import { useDictionary } from "@/i18n/locale-context";

export function ClosingSection() {
  const dictionary = useDictionary();
  const copy = dictionary.closing;
  const [open, setOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[var(--color-charcoal)]">
      <div className="absolute inset-0">
        <ImagePlaceholder
          label="Late afternoon on the estate"
          alt="Late afternoon light across the Can Caramany estate"
          aspect="h-full min-h-[80vh] w-full"
          className="h-full min-h-[80vh] w-full"
          src="/images/can-caramany/investment/closing-estate-afternoon.jpg"
          sizes="100vw"
          objectPosition="center 40%"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/90 via-[var(--color-charcoal)]/55 to-[var(--color-charcoal)]/40 sm:from-[var(--color-charcoal)]/80 sm:via-[var(--color-charcoal)]/45 sm:to-[var(--color-charcoal)]/30" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-[1440px] flex-col justify-end px-5 py-24 sm:px-8 lg:px-12">
        <FadeIn className="[text-shadow:0_1px_18px_rgba(0,0,0,0.35)]">
          <p className="font-[family-name:var(--font-serif)] text-[clamp(2.5rem,6vw,4.5rem)] leading-none tracking-[0.06em] text-[var(--color-white)]">
            CAN CARAMANY
          </p>
          <p className="mt-8 max-w-xl font-[family-name:var(--font-serif)] text-[clamp(1.35rem,3vw,2rem)] leading-snug text-[var(--color-white)]">
            {copy.line}
          </p>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-12 inline-flex border border-[var(--color-white)]/70 px-7 py-3.5 text-[11px] uppercase tracking-[0.22em] text-[var(--color-white)] transition-colors hover:bg-[var(--color-white)] hover:text-[var(--color-charcoal)]"
          >
            {copy.cta}
          </button>
        </FadeIn>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title={copy.modalTitle}>
        <EnquiryForm onSuccess={() => setOpen(false)} />
      </Modal>
    </section>
  );
}
