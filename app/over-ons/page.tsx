import type { Metadata } from "next";
import { content } from "@/content";
import { ActionRow, TextLink } from "@/components/site/Actions";
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
        <div className="max-w-[40rem] space-y-4">
          {page.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-10">
          <OnderhoudMark />
        </div>
        <div className="mt-10 flex flex-col items-start">
          <ActionRow />
          <TextLink href="/contact">Contact en route</TextLink>
        </div>
      </section>
    </>
  );
}
