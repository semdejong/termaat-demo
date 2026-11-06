import type { Metadata } from "next";
import { content } from "@/content";
import { ActionRow, TextLink } from "@/components/site/Actions";
import { PageHero } from "@/components/site/PageHero";
import { PhotoFrame } from "@/components/site/PhotoFrame";

export const metadata: Metadata = {
  title: content.wandafwerking.title,
  description: content.wandafwerking.seo,
};

export default function WandafwerkingPage() {
  const page = content.wandafwerking;
  return (
    <>
      <PageHero title={page.title} lede={page.hero} photo={page.photo} />
      <section data-section="mogelijkheden" className="border-t-2 border-brand px-6 py-16 lg:px-12 lg:py-20">
        <p className="max-w-[40rem] text-[1.35rem] leading-snug">{page.lead}</p>
        <div className="mt-10 border-t-2 border-brand">
          {page.options.map((option) => (
            <article key={option.title} className="grid gap-2 border-b border-brand/30 py-6 lg:grid-cols-12">
              <h2 className="text-[1.75rem] lg:col-span-4">{option.title}</h2>
              <p className="text-ink-soft lg:col-span-8">{option.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-[40rem]">
          {page.systexx}{" "}
          <a
            href={content.systexx.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-brand/40 underline-offset-4"
          >
            {content.systexx.name}
          </a>
          .
        </p>
        <p className="mt-6 max-w-[40rem] text-ink-soft">
          Wandafwerking sluit aan op het schilderwerk. Beglazing vraagt u bij hetzelfde bedrijf aan.
        </p>
        <div className="mt-8 flex flex-col items-start gap-2">
          <ActionRow />
          <TextLink href="/schilderwerk">Naar schilderwerk</TextLink>
          <TextLink href="/beglazing">Naar beglazing</TextLink>
        </div>
      </section>
      <section data-section="werk" className="border-t-2 border-brand px-6 py-16 lg:px-12 lg:py-20">
        <h2 className="text-[2.25rem] sm:text-[3rem]">Binnen, aan de wand</h2>
        <p className="mt-4 max-w-[40rem] text-ink-soft">
          Particulier binnenschilderwerk. Op de foto&apos;s geschilderde wanden, een kozijn en een trap.
        </p>
        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          {page.photos.filter((photo) => photo.src !== page.photo.src).map((photo) => (
            <PhotoFrame
              key={photo.src}
              photo={photo}
              className={photo.width > photo.height ? "lg:col-span-2" : ""}
              sizes="(min-width: 1024px) 720px, 100vw"
            />
          ))}
        </div>
        <p className="mt-10 max-w-[40rem]">{page.close}</p>
        <div className="mt-6">
          <ActionRow />
        </div>
      </section>
    </>
  );
}
