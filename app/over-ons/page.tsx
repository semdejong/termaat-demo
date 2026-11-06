import type { Metadata } from "next";
import { content } from "@/content";
import { ActionRow } from "@/components/site/Actions";
import { GalleryWall } from "@/components/site/GalleryWall";
import { OnderhoudMark } from "@/components/site/OnderhoudMark";
import { PageHero } from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: content.overOns.title,
  description: content.overOns.seo,
};

export default function OverOnsPage() {
  const page = content.overOns;
  return (
    <>
      <PageHero title={page.title} lede={page.hero} photo={page.photo} />

      <section data-section="bedrijf" className="border-t-2 border-brand px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="border-l-[3px] border-brand pl-6 lg:col-span-4">
            <p className="text-ink-soft">Sinds</p>
            <p className="font-display text-[6.5rem] leading-none">1961</p>
            <div className="mt-3 h-1.5 w-14 bg-accent" aria-hidden />
            <p className="mt-4 text-ink-soft">Halle, Achterhoek</p>
          </div>
          <div className="max-w-[40rem] space-y-4 lg:col-span-8">
            {page.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section data-section="werk" className="border-t-2 border-brand px-6 py-16 lg:px-12 lg:py-20">
        <h2 className="max-w-[16ch] text-[2.25rem] sm:text-[3rem]">Schilderen, wanden en glas</h2>
        <p className="mt-4 max-w-[40rem] text-ink-soft">
          Drie werkzaamheden, vanuit Halle. U herkent het werk en leest per onderdeel wat daarbij hoort.
        </p>
        <div className="mt-10 border-[3px] border-brand p-1.5">
          <div className="grid gap-px bg-brand lg:grid-cols-3">
            {content.home.services.items.map((item) => (
              <a key={item.href} href={item.href} className="bg-background px-6 py-8">
                <div className="h-3 w-3 bg-accent" aria-hidden />
                <h3 className="mt-4 text-[1.85rem]">{item.title}</h3>
                <p className="mt-3 text-ink-soft">{item.text}</p>
                <span className="mt-6 inline-flex min-h-11 items-center underline decoration-brand/40 underline-offset-4">{item.link}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section data-section="beelden" className="border-t-2 border-brand px-6 py-16 lg:px-12 lg:py-20">
        <h2 className="text-[2.25rem] sm:text-[3rem]">Buiten en binnen</h2>
        <p className="mt-4 max-w-[40rem] text-ink-soft">
          Buiten een opknapbeurt van muren, kozijnen en deuren. Binnen geschilderde wanden en een kozijn.
        </p>
        <div className="mt-10">
          <GalleryWall
            items={[
              { photo: content.photos.gevelAanbouw, span: "lg:col-span-7", sizes: "(min-width: 1024px) 640px, 100vw" },
              { photo: content.photos.venster, span: "lg:col-span-5", sizes: "(min-width: 1024px) 460px, 100vw" },
            ]}
          />
        </div>
      </section>

      <section data-section="zorg" className="border-t-2 border-brand px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <h2 className="text-[2.25rem] sm:text-[3rem] lg:col-span-4">In een bewoond huis</h2>
          <p className="max-w-[40rem] border-l-[3px] border-brand pl-5 lg:col-span-8">{page.safety}</p>
        </div>
        <div className="mt-12">
          <OnderhoudMark />
        </div>
      </section>

      <section data-section="plaats" className="border-t-2 border-brand bg-brand px-6 py-16 text-brand-fg lg:px-12 lg:py-20">
        <h2 className="text-[2.25rem] text-brand-fg sm:text-[3rem]">Aan de Dorpsstraat</h2>
        <p className="mt-4 max-w-[36rem] text-brand-fg">{page.place}</p>
        <address className="mt-6 not-italic">
          {content.company.legalName}
          <br />
          {content.address.street}
          <br />
          {content.address.postal} {content.address.city}
        </address>
        <p className="mt-4">{content.kvkLine}</p>
        <div className="mt-8 flex flex-col items-start">
          <ActionRow tone="dark" />
          <a
            href={content.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center underline decoration-brand-fg/40 underline-offset-4"
          >
            Route naar Dorpsstraat 73 in Halle
          </a>
          <a href="/contact" className="inline-flex min-h-11 items-center underline decoration-brand-fg/50 underline-offset-4">
            Contact en offerte
          </a>
        </div>
      </section>
    </>
  );
}
