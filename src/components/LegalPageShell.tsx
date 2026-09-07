import Link from "next/link";
import { siteConfig } from "@/data/site";

type LegalPageShellProps = {
  title: string;
  children: React.ReactNode;
  updated?: string;
};

export function LegalPageShell({
  title,
  children,
  updated,
}: LegalPageShellProps) {
  return (
    <main className="bg-[var(--color-background)] px-5 pb-24 pt-28 sm:px-8 sm:pb-32 sm:pt-32 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-[var(--color-terracotta)]">
          {siteConfig.company.legalName}
        </p>
        <h1 className="font-[family-name:var(--font-serif)] text-[clamp(2.25rem,4.5vw,3.25rem)] leading-[1.12] text-[var(--color-charcoal)]">
          {title}
        </h1>
        {updated ? (
          <p className="mt-4 text-sm text-[var(--color-deep-olive)]/70">
            Last updated: {updated}
          </p>
        ) : null}

        <div className="mt-12 space-y-8 text-base leading-[1.85] text-[var(--color-deep-olive)] [&_h2]:mt-12 [&_h2]:font-[family-name:var(--font-serif)] [&_h2]:text-2xl [&_h2]:text-[var(--color-charcoal)] [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          {children}
        </div>

        <nav className="mt-16 flex flex-wrap gap-x-6 gap-y-3 border-t border-[var(--color-warm-stone)]/70 pt-8 text-[11px] uppercase tracking-[0.18em] text-[var(--color-deep-olive)]">
          {siteConfig.legal.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[var(--color-charcoal)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}
