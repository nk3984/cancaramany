import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageShell } from "@/components/LegalPageShell";
import { siteDisclaimerParagraphs } from "@/data/content-facts";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `Legal Disclaimer | ${siteConfig.name}`,
  description: `Legal disclaimer for information published on the ${siteConfig.name} website.`,
};

export default function LegalDisclaimerPage() {
  return (
    <LegalPageShell title="Legal Disclaimer" updated="September 2026">
      <p className="rounded-none border border-[var(--color-warm-stone)] bg-[var(--color-white)] px-5 py-4 text-sm">
        Final wording subject to counsel approval before public go-live.
      </p>

      {siteDisclaimerParagraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
      ))}

      <h2>Operator</h2>
      <p>
        This website is operated by {siteConfig.company.legalName} (
        {siteConfig.company.projectName}). See the{" "}
        <Link href="/imprint" className="underline underline-offset-4">
          Imprint
        </Link>{" "}
        for company details and the{" "}
        <Link href="/privacy" className="underline underline-offset-4">
          Privacy
        </Link>{" "}
        notice for data protection information.
      </p>
    </LegalPageShell>
  );
}
