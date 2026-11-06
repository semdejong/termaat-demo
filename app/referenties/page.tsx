import type { Metadata } from "next";
import { content } from "@/content";
import { ActionRow } from "@/components/site/Actions";
import { PageHero } from "@/components/site/PageHero";
import { PhotoFrame } from "@/components/site/PhotoFrame";

export const metadata: Metadata = {
  title: content.referenties.title,
  description: content.referenties.seo,
};

export default function ReferentiesPage() {
  const page = content.referenties;
  return (
    <>
      <PageHero title={page.title} lede={page.hero} photo={page.photo} />
      {page.groups.map((group) => (
        <section key={group.title} data-section={group.title === "Buitenwerk" ? "buitenwerk" : "binnenwerk"} className="border-t-2 border-brand px-6 py-16 lg:px-12 lg:py-20">
          <h2 className="text-[2.25rem] sm:text-[3rem]">{group.title}</h2>
          <p className="mt-4 max-w-[40rem] text-ink-soft">{group.intro}</p>
          <div className="mt-10 grid gap-12 lg:grid-cols-2">
            {group.photos.filter((photo) => photo.src !== page.photo.src).map((photo) => (
              <PhotoFrame
                key={photo.src}
                photo={photo}
                className={photo.width > photo.height ? "lg:col-span-2" : ""}
                sizes={photo.width > photo.height ? "(min-width: 1024px) 1040px, 100vw" : "(min-width: 1024px) 480px, 100vw"}
              />
            ))}
          </div>
        </section>
      ))}
      <section data-section="contact" className="border-t-2 border-brand px-6 py-16 lg:px-12">
        <h2 className="text-[2.25rem]">Ook voor uw huis?</h2>
        <p className="mt-4 max-w-[40rem]">Bel of mail voor een vrijblijvende offerte. Wij bespreken het werk daarna met u.</p>
        <div className="mt-8">
          <ActionRow />
        </div>
      </section>
    </>
  );
}
