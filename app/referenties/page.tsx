import type { Metadata } from "next";
import { content } from "@/content";
import { ActionRow, TextLink } from "@/components/site/Actions";
import { GalleryWall } from "@/components/site/GalleryWall";
import { PhotoFrame } from "@/components/site/PhotoFrame";

export const metadata: Metadata = {
  title: content.referenties.title,
  description: content.referenties.seo,
};

export default function ReferentiesPage() {
  const page = content.referenties;
  const [buiten, binnen] = page.groups;
  return (
    <>
      <section data-section="hero" className="px-6 py-14 lg:px-12 lg:py-16">
        <p className="text-ink-soft">Halle, Achterhoek</p>
        <div className="mt-4 h-3 w-3 bg-accent" aria-hidden />
        <h1 className="mt-4 max-w-[12ch] text-[2.75rem] sm:text-[4.25rem]">{page.title}</h1>
        <p className="mt-6 max-w-[40rem]">{page.hero}</p>
        <div className="mt-8">
          <ActionRow />
        </div>
      </section>

      <section data-section="buitenwerk" className="border-t-2 border-brand px-6 py-16 lg:px-12 lg:py-20">
        <h2 className="text-[2.25rem] sm:text-[3rem]">{buiten.title}</h2>
        <p className="mt-4 max-w-[40rem] text-ink-soft">{buiten.intro}</p>
        <div className="mt-10">
          <GalleryWall
            items={[
              { photo: buiten.photos[0], span: "lg:col-span-6", sizes: "(min-width: 1024px) 520px, 100vw", priority: true },
              { photo: buiten.photos[1], span: "lg:col-span-6", sizes: "(min-width: 1024px) 520px, 100vw" },
            ]}
          />
        </div>
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <PhotoFrame photo={buiten.photos[2]} sizes="(min-width: 1024px) 420px, 100vw" />
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-4">
            <h3 className="text-[2rem]">Vanaf het terras</h3>
            <p className="mt-4 max-w-[36rem]">
              Kozijnen en glas van de aanbouw, gezien vanaf het terras.
            </p>
          </div>
        </div>
      </section>

      <section data-section="binnenwerk" className="border-t-2 border-brand px-6 py-16 lg:px-12 lg:py-20">
        <h2 className="text-[2.25rem] sm:text-[3rem]">{binnen.title}</h2>
        <p className="mt-4 max-w-[40rem] text-ink-soft">{binnen.intro}</p>
        <div className="mt-10">
          <GalleryWall
            items={[
              { photo: binnen.photos[0], span: "lg:col-span-12", sizes: "(min-width: 1024px) 1040px, 100vw" },
              { photo: binnen.photos[1], span: "lg:col-span-4", sizes: "(min-width: 1024px) 340px, 100vw" },
              { photo: binnen.photos[2], span: "lg:col-span-4", sizes: "(min-width: 1024px) 340px, 100vw" },
              { photo: binnen.photos[3], span: "lg:col-span-4", sizes: "(min-width: 1024px) 340px, 100vw" },
            ]}
          />
        </div>
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <PhotoFrame photo={binnen.photos[4]} sizes="(min-width: 1024px) 420px, 100vw" />
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-4">
            <h3 className="text-[2rem]">De trap</h3>
            <p className="mt-4 max-w-[36rem]">
              Trap met geschilderde wanden, een houten leuning en een plafond.
            </p>
          </div>
        </div>
      </section>

      <section data-section="contact" className="border-t-2 border-brand px-6 py-16 lg:px-12 lg:py-20">
        <h2 className="max-w-[14ch] text-[2.25rem] sm:text-[3rem]">Ook voor uw huis?</h2>
        <p className="mt-4 max-w-[40rem]">
          Bel of mail voor een vrijblijvende offerte. Wij bespreken het werk daarna met u. Na het offertetraject geven wij graag een kleuradvies.
        </p>
        <div className="mt-8 flex flex-col items-start">
          <ActionRow />
          <TextLink href="/schilderwerk">Naar schilderwerk</TextLink>
          <TextLink href="/contact">Contact en route</TextLink>
        </div>
      </section>
    </>
  );
}
