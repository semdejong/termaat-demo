import type { WorkPhoto } from "@/content";
import { ActionRow } from "@/components/site/Actions";
import { PhotoFrame } from "@/components/site/PhotoFrame";

export function PageHero({
  title,
  lede,
  photo,
}: {
  title: string;
  lede: string;
  photo: WorkPhoto;
}) {
  return (
    <section data-section="hero" className="grid lg:grid-cols-12">
      <div className="px-6 py-12 lg:col-span-6 lg:px-12 lg:py-16">
        <p className="text-ink-soft">Halle, Achterhoek</p>
        <div className="mt-4 h-3 w-3 bg-accent" aria-hidden />
        <h1 className="mt-4 max-w-[12ch] text-[2.75rem] sm:text-[3.75rem]">{title}</h1>
        <div className="mt-5 h-1 w-14 bg-accent" aria-hidden />
        <p className="mt-6 max-w-[38rem]">{lede}</p>
        <div className="mt-8">
          <ActionRow />
        </div>
      </div>
      <div className="px-6 pb-12 lg:col-span-6 lg:px-12 lg:py-16">
        <PhotoFrame photo={photo} priority sizes="(min-width: 1024px) 520px, 100vw" />
      </div>
    </section>
  );
}
