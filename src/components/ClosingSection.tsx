"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Modal } from "@/components/ui/Modal";

export function ClosingSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[var(--color-charcoal)]">
      <div className="absolute inset-0">
        <ImagePlaceholder
          label="Photography to follow"
          alt="Late afternoon light across the Can Caramany estate"
          aspect="h-full min-h-[80vh] w-full"
          className="h-full min-h-[80vh] w-full"
          src={null}
          sizes="100vw"
          objectPosition="center 40%"
        />
        <div className="absolute inset-0 bg-[var(--color-charcoal)]/55" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-[1440px] flex-col justify-end px-5 py-24 sm:px-8 lg:px-12">
        <FadeIn>
          <p className="font-[family-name:var(--font-serif)] text-[clamp(2.5rem,6vw,4.5rem)] leading-none tracking-[0.06em] text-[var(--color-white)]">
            CAN CARAMANY
          </p>
          <p className="mt-8 max-w-xl font-[family-name:var(--font-serif)] text-[clamp(1.35rem,3vw,2rem)] leading-snug text-[var(--color-white)]/90">
            Four private worlds. One extraordinary piece of Mallorca.
          </p>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-12 inline-flex border border-[var(--color-white)]/40 px-7 py-3.5 text-[11px] uppercase tracking-[0.22em] text-[var(--color-white)] transition-colors hover:bg-[var(--color-white)] hover:text-[var(--color-charcoal)]"
          >
            Arrange a Private Conversation
          </button>
        </FadeIn>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Arrange a Private Conversation"
      >
        <EnquiryForm onSuccess={() => setOpen(false)} />
      </Modal>
    </section>
  );
}
