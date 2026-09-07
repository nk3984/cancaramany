"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { BrandLogo } from "@/components/BrandLogo";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Modal } from "@/components/ui/Modal";

export function Navigation() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [enquireOpen, setEnquireOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solidHeader = mounted && (scrolled || open);
  const logoOnLight = solidHeader;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solidHeader
            ? "bg-[var(--color-background)]/92 text-[var(--color-charcoal)] shadow-[0_1px_0_rgba(32,33,31,0.08)] backdrop-blur-md"
            : "bg-transparent text-[var(--color-white)]"
        }`}
      >
        <div className="mx-auto flex h-[4.75rem] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:h-[5.25rem] lg:px-12">
          <Link
            href="/"
            className="relative z-50 flex h-11 shrink-0 items-center sm:h-12 lg:h-[3.35rem]"
            aria-label="Can Caramany home"
          >
            <BrandLogo
              variant={logoOnLight ? "dark" : "light"}
              priority
              className="transition-opacity duration-500"
            />
          </Link>

          <nav className="hidden items-center gap-8 xl:flex">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[11px] uppercase tracking-[0.2em] opacity-85 transition-opacity hover:opacity-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setEnquireOpen(true)}
              className={`hidden text-[11px] uppercase tracking-[0.22em] transition-opacity hover:opacity-100 sm:inline-flex ${
                solidHeader
                  ? "border border-[var(--color-charcoal)]/20 px-5 py-2.5 opacity-100"
                  : "border border-[var(--color-white)]/35 px-5 py-2.5 opacity-90"
              }`}
            >
              Enquire
            </button>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative z-50 flex h-10 w-10 items-center justify-center xl:hidden"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">Menu</span>
              <span className="flex w-5 flex-col gap-1.5">
                <span
                  className={`h-px w-full transition-transform duration-300 ${
                    solidHeader
                      ? "bg-[var(--color-charcoal)]"
                      : "bg-[var(--color-white)]"
                  } ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
                />
                <span
                  className={`h-px w-full transition-opacity duration-300 ${
                    solidHeader
                      ? "bg-[var(--color-charcoal)]"
                      : "bg-[var(--color-white)]"
                  } ${open ? "opacity-0" : ""}`}
                />
                <span
                  className={`h-px w-full transition-transform duration-300 ${
                    solidHeader
                      ? "bg-[var(--color-charcoal)]"
                      : "bg-[var(--color-white)]"
                  } ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 bg-[var(--color-background)] xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex h-full flex-col justify-between px-6 pb-10 pt-28">
              <nav className="flex flex-col gap-6">
                {siteConfig.navigation.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="font-[family-name:var(--font-serif)] text-3xl text-[var(--color-charcoal)]"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setEnquireOpen(true);
                }}
                className="w-full border border-[var(--color-charcoal)] px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-[var(--color-charcoal)]"
              >
                Enquire
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Modal
        open={enquireOpen}
        onClose={() => setEnquireOpen(false)}
        title="Enquire Privately"
      >
        <EnquiryForm onSuccess={() => setEnquireOpen(false)} />
      </Modal>
    </>
  );
}
