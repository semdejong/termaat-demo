import type { Metadata } from "next";
import { content } from "@/content";
import { ActionRow, TextLink } from "@/components/site/Actions";
import { Faq } from "@/components/site/Faq";
import { GalleryWall } from "@/components/site/GalleryWall";
import { OnderhoudMark } from "@/components/site/OnderhoudMark";
import { PageHero } from "@/components/site/PageHero";
import { QuoteComposer } from "@/components/site/QuoteComposer";

export const metadata: Metadata = {
  title: content.schilderwerk.title,
  description: content.schilderwerk.seo,
};

export default function SchilderwerkPage() {
  const page = content.schilderwerk;
  return (
    <>
      <PageHero title={page.title} lede={page.hero} photo={page.photo} />
      <section data-section="uitleg" className="border-t-2 border-brand px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          {page.blocks.map((block) => (
            <article key={block.title} className="flex h-full flex-col border-t-[3px] border-brand pt-5">
              <div className="h-3 w-3 bg-accent" aria-hidden />
              <h2 className="mt-4 text-[2rem]">{block.title}</h2>
              <p className="mt-4 text-ink-soft">{block.text}</p>
              <div className="mt-auto pt-6" aria-hidden>
                <div className="h-1.5 w-14 bg-accent" />
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-[40rem]">{page.materials}</p>
        <div className="mt-8">
          <ActionRow />
        </div>
      </section>

      <section data-section="werk" className="border-t-2 border-brand px-6 py-16 lg:px-12 lg:py-20">
        <h2 className="text-[2.25rem] sm:text-[3rem]">Werk aan huis</h2>
        <p className="mt-4 max-w-[40rem] text-ink-soft">
          Buiten een opknapbeurt van muren, kozijnen en deuren. Binnen deuren, een kozijn en een trap.
        </p>
        <div className="mt-10">
          <GalleryWall
            items={page.photos.map((photo) => ({
              photo,
              span: photo.width > photo.height ? "lg:col-span-12" : "lg:col-span-6",
              sizes: photo.width > photo.height ? "(min-width: 1024px) 1040px, 100vw" : "(min-width: 1024px) 520px, 100vw",
            }))}
          />
        </div>
        <div className="mt-8">
          <TextLink href="/referenties">Alle foto&apos;s op referenties</TextLink>
        </div>
      </section>

      <section data-section="zorg" className="border-t-2 border-brand px-6 py-16 lg:px-12 lg:py-20">
        <h2 className="max-w-[16ch] text-[2.25rem] sm:text-[3rem]">{page.care.title}</h2>
        <div className="mt-4 max-w-[40rem] space-y-4">
          {page.care.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-8 max-w-[40rem] border-l-[3px] border-brand pl-4">{page.btw}</p>
        <div className="mt-10">
          <OnderhoudMark />
        </div>
        <div className="mt-10">
          <ActionRow />
        </div>
      </section>

      <section data-section="samen" className="border-t-2 border-brand px-6 py-16 lg:px-12 lg:py-20">
        <h2 className="max-w-[16ch] text-[2.25rem] sm:text-[3rem]">In hetzelfde gesprek</h2>
        <p className="mt-4 max-w-[40rem]">
          Schilderen, houtrot, wanden en glas vraagt u bij hetzelfde bedrijf aan. Na het offertetraject geven wij graag een kleuradvies.
        </p>
        <div className="mt-8 border-[3px] border-brand p-1.5">
          <div className="grid gap-px bg-brand lg:grid-cols-2">
            <a href="/wandafwerking" className="bg-background px-6 py-8">
              <div className="h-3 w-3 bg-accent" aria-hidden />
              <h3 className="mt-4 text-[1.75rem]">Wandafwerking</h3>
              <p className="mt-3 text-ink-soft">Muurverf, behang, vinylbehang, vliesbehang, glasvezelbehang en Systexx.</p>
            </a>
            <a href="/beglazing" className="bg-background px-6 py-8">
              <div className="h-3 w-3 bg-accent" aria-hidden />
              <h3 className="mt-4 text-[1.75rem]">Beglazing</h3>
              <p className="mt-3 text-ink-soft">Isolerend glas, enkel glas, figuurglas, glaswanden, schuifpuien en voorzetramen. Geen 24-uursservice.</p>
            </a>
          </div>
        </div>
      </section>

      <Faq title="Vragen over schilderwerk" items={page.faq} />
      <QuoteComposer
        email={content.email}
        services={content.quoteServices}
        defaultService="Schilderwerk"
        title="Vrijblijvende offerte aanvragen"
        text={content.contactPage.composerText}
      />
    </>
  );
}
