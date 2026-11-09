import type { Metadata } from "next";
import { content } from "@/content";
import { ActionRow, TextLink } from "@/components/site/Actions";
import { Faq } from "@/components/site/Faq";
import { GalleryWall } from "@/components/site/GalleryWall";
import { PageHero } from "@/components/site/PageHero";
import { PhotoFrame } from "@/components/site/PhotoFrame";
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
              <article key={type} className={`flex h-full flex-col bg-background px-5 pt-8 ${typeSpans[index]}`}>
                <div className="h-3 w-3 bg-accent" aria-hidden />
                <h3 className="mt-4 text-[1.65rem] leading-tight">{type}</h3>
                <div className="mt-auto pt-8" aria-hidden>
                  <div className="-mx-5 h-1.5 bg-accent" />
                </div>
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
              { photo: content.photos.gevelAanbouw, span: "lg:col-span-12", sizes: "(min-width: 1024px) 1040px, 100vw" },
            ]}
          />
        </div>
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <PhotoFrame photo={content.photos.deurGlas} sizes="(min-width: 1024px) 340px, 100vw" />
          </div>
          <div className="lg:col-span-7 lg:col-start-6 lg:pt-4">
            <h3 className="text-[2rem]">Figuurglas in de deur</h3>
            <p className="mt-4 max-w-[36rem]">
              Een lichte binnendeur met een strook figuurglas in het bovenlicht. Figuurglas plaatsen wij naast enkel glas, glaswanden, schuifpuien en voorzetramen.
            </p>
          </div>
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
