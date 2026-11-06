import type { Metadata } from "next";
import { content } from "@/content";
import { ActionRow, TextLink } from "@/components/site/Actions";
import { Faq } from "@/components/site/Faq";
import { GalleryWall } from "@/components/site/GalleryWall";
import { PageHero } from "@/components/site/PageHero";
import { QuoteComposer } from "@/components/site/QuoteComposer";

export const metadata: Metadata = {
  title: content.beglazing.title,
  description: content.beglazing.seo,
};

const typeSpans = [
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
];

export default function BeglazingPage() {
  const page = content.beglazing;
  return (
    <>
      <PageHero title={page.title} lede={page.hero} photo={page.photo} />

      <section data-section="soorten" className="border-t-2 border-brand px-6 py-16 lg:px-12 lg:py-20">
        <h2 className="max-w-[16ch] text-[2.25rem] sm:text-[3rem]">Soorten glas</h2>
        <p className="mt-4 max-w-[40rem]">{page.paragraphs[0]}</p>
        <div className="mt-10 border-[3px] border-brand p-1.5">
          <div className="grid gap-px bg-brand lg:grid-cols-12">
            {page.types.map((type, index) => (
              <article key={type} className={`bg-background px-5 py-8 ${typeSpans[index]}`}>
                <div className="h-3 w-3 bg-accent" aria-hidden />
                <h3 className="mt-4 text-[1.65rem] leading-tight">{type}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-section="comfort" className="border-t-2 border-brand px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <h2 className="text-[2.25rem] sm:text-[3rem] lg:col-span-4">Dubbel glas en comfort</h2>
          <ul className="border-t-2 border-brand lg:col-span-8">
            {page.comfort.map((line) => (
              <li key={line} className="border-b border-brand/30 py-4">
                {line}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-10 max-w-[40rem] border-[3px] border-brand px-5 py-5">{page.notice}</p>
        <p className="mt-6 max-w-[40rem]">{page.advice}</p>
        <div className="mt-8 flex flex-col items-start">
          <ActionRow />
          <TextLink href="/schilderwerk">Schilderwerk aan het kozijn</TextLink>
        </div>
      </section>

      <section data-section="werk" className="border-t-2 border-brand px-6 py-16 lg:px-12 lg:py-20">
        <h2 className="max-w-[16ch] text-[2.25rem] sm:text-[3rem]">Glas in het werk</h2>
        <p className="mt-4 max-w-[40rem] text-ink-soft">
          Een glazen aanbouw aan een geschilderde gevel, en figuurglas in een binnendeur.
        </p>
        <div className="mt-10">
          <GalleryWall
            items={[
              { photo: content.photos.gevelAanbouw, span: "lg:col-span-8", sizes: "(min-width: 1024px) 720px, 100vw" },
              { photo: content.photos.deurGlas, span: "lg:col-span-4", sizes: "(min-width: 1024px) 360px, 100vw" },
            ]}
          />
        </div>
      </section>

      <Faq title="Vragen over beglazing" items={page.faq} />
      <QuoteComposer
        email={content.email}
        services={content.quoteServices}
        defaultService="Beglazing"
        title="Vrijblijvend advies per e-mail"
        text={content.contactPage.composerText}
      />
    </>
  );
}
