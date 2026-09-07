import type { Metadata } from "next";
import { LegalPageShell } from "@/components/LegalPageShell";
import { formatCompanyAddress, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `Imprint | ${siteConfig.name}`,
  description: `Legal imprint for ${siteConfig.company.legalName}, operator of the ${siteConfig.name} website.`,
};

export default function ImprintPage() {
  const { company } = siteConfig;

  return (
    <LegalPageShell title="Imprint" updated="September 2026">
      <p>
        Information pursuant to applicable Spanish and EU information
        requirements for the website of {siteConfig.name}.
      </p>

      <h2>Website operator</h2>
      <p>
        <strong className="font-medium text-[var(--color-charcoal)]">
          {company.legalName}
        </strong>
        <br />
        Sociedad Limitada Unipersonal
        <br />
        NIF/CIF: {company.nif}
      </p>

      <h2>Registered seat</h2>
      <p>{formatCompanyAddress()}</p>

      <h2>Sole shareholder</h2>
      <p>{company.soleShareholder}</p>

      <h2>Administrator</h2>
      <p>
        {company.administrator}
        {!company.administratorVerified ? (
          <>
            <br />
            <span className="text-sm text-[var(--color-deep-olive)]/75">
              Status to be confirmed against the current Registro Mercantil
              extract before public launch.
            </span>
          </>
        ) : null}
      </p>

      <h2>Contact</h2>
      {company.email || company.phone ? (
        <p>
          {company.email ? (
            <>
              Email:{" "}
              <a
                href={`mailto:${company.email}`}
                className="underline underline-offset-4"
              >
                {company.email}
              </a>
              <br />
            </>
          ) : null}
          {company.phone ? (
            <>
              Phone:{" "}
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="underline underline-offset-4"
              >
                {company.phone}
              </a>
            </>
          ) : null}
        </p>
      ) : (
        <p className="text-sm text-[var(--color-deep-olive)]/75">
          Public contact email and telephone to be added before go-live.
          Enquiries may currently be submitted via the website form.
        </p>
      )}

      <h2>Brand / project</h2>
      <p>
        {siteConfig.name} ({siteConfig.descriptor}) is presented by{" "}
        {company.legalName} ({company.projectName}).
      </p>
    </LegalPageShell>
  );
}
