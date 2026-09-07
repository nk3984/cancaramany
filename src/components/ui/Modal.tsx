"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  wide?: boolean;
};

export function Modal({ open, onClose, title, children, wide }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            type="button"
            aria-label="Close dialog"
            className="absolute inset-0 bg-[var(--color-charcoal)]/55 backdrop-blur-[2px]"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className={`relative z-10 max-h-[92vh] w-full overflow-y-auto bg-[var(--color-white)] shadow-[0_24px_80px_rgba(32,33,31,0.28)] ${
              wide ? "max-w-5xl" : "max-w-xl"
            }`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[var(--color-warm-stone)]/50 bg-[var(--color-white)] px-6 py-4 sm:px-8">
              <h2
                id="modal-title"
                className="font-[family-name:var(--font-serif)] text-2xl text-[var(--color-charcoal)]"
              >
                {title}
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-deep-olive)] transition-colors hover:text-[var(--color-charcoal)]"
              >
                Close
              </button>
            </div>
            <div className="px-6 py-8 sm:px-8 sm:py-10">{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
