import type { Metadata } from "next";
import { content } from "@/content";
import { ActionRow, TextLink } from "@/components/site/Actions";
import { PageHero } from "@/components/site/PageHero";
import { PhotoFrame } from "@/components/site/PhotoFrame";

export const metadata: Metadata = {
  title: content.beglazing.title,
  description: content.beglazing.seo,
};

export default function BeglazingPage() {
  const page = content.beglazing;
  return (
    <>
      <PageHero title={page.title} lede={page.hero} photo={page.photo} />
      <section data-section="uitleg" className="border-t-2 border-brand px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="border-t-[3px] border-brand pt-5">
            <h2 className="text-[2rem]">Soorten glas</h2>
            <p className="mt-4 text-ink-soft">{page.paragraphs[0]}</p>
          </article>
          <article className="border-t-[3px] border-brand pt-5">
            <h2 className="text-[2rem]">Dubbel glas en comfort</h2>
            <p className="mt-4 text-ink-soft">{page.paragraphs[1]}</p>
          </article>
        </div>
        <p className="mt-10 max-w-[40rem] border-l-[3px] border-brand pl-4">{page.notice}</p>
        <p className="mt-6 max-w-[40rem]">{page.advice}</p>
        <div className="mt-8 flex flex-col items-start">
          <ActionRow />
          <TextLink href="/schilderwerk">Schilderwerk aan het kozijn</TextLink>
        </div>
      </section>
      <section data-section="werk" className="border-t-2 border-brand px-6 py-16 lg:px-12 lg:py-20">
        <h2 className="max-w-[16ch] text-[2.25rem] sm:text-[3rem]">Glas in het werk</h2>
        <p className="mt-4 max-w-[40rem] text-ink-soft">
          Een glazen aanbouw en de kozijnen daarvan. Het schilderwerk aan de gevel zit in hetzelfde beeld.
        </p>
        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          {page.photos.filter((photo) => photo.src !== page.photo.src).map((photo) => (
            <PhotoFrame key={photo.src} photo={photo} sizes="(min-width: 1024px) 520px, 100vw" />
          ))}
        </div>
        <div className="mt-10">
          <ActionRow />
        </div>
      </section>
    </>
  );
}
