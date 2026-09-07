import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] px-5 py-16 text-[var(--color-white)] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 border-b border-[var(--color-white)]/10 pb-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="inline-flex h-16 items-center sm:h-[4.75rem]"
              aria-label="Can Caramany home"
            >
              <BrandLogo variant="light" />
            </Link>
            <p className="mt-6 text-sm text-[var(--color-white)]/60">
              Mallorca · Spain
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--color-white)]/55">
              {siteConfig.descriptor}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--color-white)]/45">
              The tortoise — a traditional Mallorcan symbol of fortune — is the
              mark of Can Caramany.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-white)]/45">
                Navigate
              </p>
              <ul className="mt-5 space-y-3">
                {siteConfig.footerNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-[var(--color-white)]/75 transition-colors hover:text-[var(--color-white)]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-white)]/45">
                Legal
              </p>
              <ul className="mt-5 space-y-3">
                {siteConfig.legal.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-[var(--color-white)]/75 transition-colors hover:text-[var(--color-white)]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 pt-8 text-xs text-[var(--color-white)]/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Can Caramany. All rights reserved.</p>
          <p>Private Estate · Eastern Mallorca</p>
        </div>
      </div>
    </footer>
  );
}
