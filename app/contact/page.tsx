import type { Metadata } from "next";
import { content } from "@/content";
import { ActionRow } from "@/components/site/Actions";
import { QuoteComposer } from "@/components/site/QuoteComposer";

export const metadata: Metadata = {
  title: content.contactPage.title,
  description: content.contactPage.seo,
};

export default function ContactPage() {
  const page = content.contactPage;
  return (
    <>
      <section data-section="hero" className="px-6 py-14 lg:px-12 lg:py-16">
        <p className="text-ink-soft">Halle, Achterhoek</p>
        <div className="mt-4 h-3 w-3 bg-accent" aria-hidden />
        <h1 className="mt-4 text-[2.75rem] sm:text-[4rem]">{page.title}</h1>
        <p className="mt-6 max-w-[38rem]">{page.hero}</p>
        <div className="mt-8">
          <ActionRow />
        </div>
      </section>

      <section data-section="contact" className="border-t-2 border-brand px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="border-[3px] border-brand p-1.5 lg:col-span-7">
            <div className="border border-brand px-5 py-8 sm:px-8">
              <h2 className="text-[2rem]">{content.company.legalName}</h2>
              <address className="mt-4 not-italic">
                {content.address.street}
                <br />
                {content.address.postal} {content.address.city}
              </address>
              <p className="mt-6">
                <a href={content.phones[0].href} data-cta="bellen" className="inline-flex min-h-11 items-center underline decoration-brand/40 underline-offset-4">
                  Telefoon {content.phones[0].label}
                </a>
              </p>
              <p>
                <span className="inline-flex min-h-11 items-center">Fax {content.fax}</span>
              </p>
              <p>
                <a href={`mailto:${content.email}`} data-cta="mailen" className="inline-flex min-h-11 items-center underline decoration-brand/40 underline-offset-4">
                  {content.email}
                </a>
              </p>
              <p className="mt-4">{content.kvkLine}</p>
              <div className="mt-4 h-1.5 w-16 bg-accent" aria-hidden />
            </div>
          </div>
          <div className="lg:col-span-5">
            <h2 className="text-[2rem]">Route</h2>
            <p className="mt-4 text-ink-soft">
              Dorpsstraat 73 in Halle. De kaart opent bij een externe dienst.
            </p>
            <p className="mt-4">
              <a
                href={content.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center border-2 border-brand px-4 font-semibold hover:bg-muted"
              >
                Open de route
              </a>
            </p>
          </div>
        </div>
      </section>

      <QuoteComposer
        email={content.email}
        services={content.quoteServices}
        title={page.composerTitle}
        text={page.composerText}
      />
    </>
  );
}
