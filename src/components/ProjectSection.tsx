"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { useDictionary } from "@/i18n/locale-context";

export function ProjectSection() {
  const { project } = useDictionary();

  return (
    <section
      id="project"
      className="bg-[var(--color-white)] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-5">
            <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-[var(--color-terracotta)]">
              {project.eyebrow}
            </p>
            <h2 className="font-[family-name:var(--font-serif)] text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.15] text-[var(--color-charcoal)]">
              {project.headline}
            </h2>
            <p className="mt-8 text-base leading-[1.85] text-[var(--color-deep-olive)]">
              {project.lead}
            </p>
          </FadeIn>

          <div className="space-y-10 lg:col-span-7 lg:pt-2">
            {project.points.map((point, index) => (
              <FadeIn key={point.title} delay={0.06 * index}>
                <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-terracotta)]">
                  {point.title}
                </p>
                <p className="mt-3 max-w-2xl text-base leading-[1.85] text-[var(--color-deep-olive)]">
                  {point.copy}
                </p>
              </FadeIn>
            ))}
            <FadeIn delay={0.28}>
              <p className="max-w-2xl font-[family-name:var(--font-serif)] text-xl leading-snug text-[var(--color-charcoal)] sm:text-2xl">
                {project.closing}
              </p>
              <p className="mt-6 max-w-2xl text-[11px] leading-relaxed tracking-[0.04em] text-[var(--color-deep-olive)]/90">
                {project.footnote}
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
