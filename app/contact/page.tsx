import type { Metadata } from "next";
import { content } from "@/content";
import { ActionRow } from "@/components/site/Actions";
import { PhotoFrame } from "@/components/site/PhotoFrame";
import { QuoteComposer } from "@/components/site/QuoteComposer";

export const metadata: Metadata = {
  title: content.contactPage.title,
  description: content.contactPage.seo,
};

export default function ContactPage() {
  const page = content.contactPage;
  return (
    <>
      <section data-section="hero" className="grid lg:grid-cols-12">
        <div className="px-6 py-14 lg:col-span-6 lg:px-12 lg:py-16">
          <p className="text-ink-soft">Halle, Achterhoek</p>
          <div className="mt-4 h-3 w-3 bg-accent" aria-hidden />
          <h1 className="mt-4 text-[2.75rem] sm:text-[4.25rem]">{page.title}</h1>
          <p className="mt-6 max-w-[38rem]">{page.hero}</p>
          <div className="mt-8">
            <ActionRow />
          </div>
        </div>
        <div className="px-6 pb-12 lg:col-span-6 lg:px-12 lg:py-16">
          <PhotoFrame photo={page.photo} priority sizes="(min-width: 1024px) 520px, 100vw" />
        </div>
      </section>

      <section data-section="contact" className="border-t-2 border-brand px-6 py-16 lg:px-12 lg:py-20">
        <div className="border-[3px] border-brand p-1.5">
          <div className="grid gap-px bg-brand lg:grid-cols-12">
            <div className="bg-background px-6 py-8 lg:col-span-7">
              <h2 className="text-[2rem]">{content.company.legalName}</h2>
              <address className="mt-4 not-italic text-[1.35rem] leading-snug">
                {content.address.street}
                <br />
                {content.address.postal} {content.address.city}
              </address>
              <div className="mt-6 h-1.5 w-16 bg-accent" aria-hidden />
              <p className="mt-6">{content.kvkLine}</p>
            </div>
            <div className="bg-background px-6 py-8 lg:col-span-5">
              <h2 className="text-[1.75rem]">Bereikbaar</h2>
              <p className="mt-4">
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
            </div>
            <div className="bg-brand px-6 py-8 text-brand-fg lg:col-span-12">
              <h2 className="text-[1.75rem] text-brand-fg">Route</h2>
              <p className="mt-3 max-w-[36rem] text-brand-fg">
                Dorpsstraat 73 in Halle. De kaart opent bij een externe dienst.
              </p>
              <p className="mt-4">
                <a
                  href={content.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center border-2 border-brand-fg px-4 font-semibold text-brand-fg hover:bg-[#18365c]"
                >
                  Open de route
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section data-section="vermelden" className="border-t-2 border-brand px-6 py-16 lg:px-12 lg:py-20">
        <h2 className="max-w-[16ch] text-[2.25rem] sm:text-[3rem]">Wat u kunt doorgeven</h2>
        <p className="mt-4 max-w-[40rem] text-ink-soft">
          Een telefoontje of een e-mail is genoeg. In het formulier hieronder staan dezelfde punten. Daarna bespreken wij het werk en ontvangt u een overzichtelijke offerte.
        </p>
        <ol className="mt-10 border-t-2 border-brand lg:grid lg:grid-cols-4">
          {page.mention.map((item) => (
            <li key={item.title} className="border-b border-brand/30 py-6 lg:border-b-0 lg:border-l-2 lg:border-brand lg:px-5 lg:first:border-l-0 lg:first:pl-0">
              <p className="text-[1.65rem]">{item.title}</p>
              <p className="mt-3 text-ink-soft">{item.text}</p>
            </li>
          ))}
        </ol>
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
