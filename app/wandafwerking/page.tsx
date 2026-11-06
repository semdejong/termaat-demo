import type { Metadata } from "next";
import { content } from "@/content";
import { ActionRow, TextLink } from "@/components/site/Actions";
import { Faq } from "@/components/site/Faq";
import { GalleryWall } from "@/components/site/GalleryWall";
import { PageHero } from "@/components/site/PageHero";
import { QuoteComposer } from "@/components/site/QuoteComposer";

export const metadata: Metadata = {
  title: content.wandafwerking.title,
  description: content.wandafwerking.seo,
};

const spans = ["lg:col-span-6", "lg:col-span-6", "lg:col-span-4", "lg:col-span-4", "lg:col-span-4"];

export default function WandafwerkingPage() {
  const page = content.wandafwerking;
  return (
    <>
      <PageHero title={page.title} lede={page.hero} photo={page.photo} />

      <section data-section="mogelijkheden" className="border-t-2 border-brand px-6 py-16 lg:px-12 lg:py-20">
        <p className="max-w-[38rem] text-[1.4rem] leading-snug">{page.lead}</p>
        <div className="mt-10 border-[3px] border-brand p-1.5">
          <div className="grid gap-px bg-brand lg:grid-cols-12">
            {page.options.map((option, index) => (
              <article key={option.title} className={`bg-background px-6 py-8 ${spans[index]}`}>
                <div className="h-3 w-3 bg-accent" aria-hidden />
                <h2 className="mt-4 text-[2rem]">{option.title}</h2>
                <p className="mt-3 text-ink-soft">{option.text}</p>
              </article>
            ))}
            <article className="bg-brand px-6 py-8 text-brand-fg lg:col-span-12">
              <h2 className="text-[2rem] text-brand-fg">Systexx van Vitrulan</h2>
              <p className="mt-3 max-w-[40rem] text-brand-fg">
                {page.systexx}{" "}
                <a
                  href={content.systexx.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-brand-fg/50 underline-offset-4"
                >
                  {content.systexx.name}
                </a>
                .
              </p>
            </article>
          </div>
        </div>
        <p className="mt-8 max-w-[40rem]">{page.together}</p>
        <div className="mt-6 flex flex-col items-start">
          <ActionRow />
          <TextLink href="/schilderwerk">Naar schilderwerk</TextLink>
          <TextLink href="/beglazing">Naar beglazing</TextLink>
        </div>
      </section>

      <section data-section="werk" className="border-t-2 border-brand px-6 py-16 lg:px-12 lg:py-20">
        <h2 className="text-[2.25rem] sm:text-[3rem]">Binnen, aan de wand</h2>
        <p className="mt-4 max-w-[40rem] text-ink-soft">
          Particulier binnenschilderwerk. Een trap met geschilderde wanden, en een binnendeur in lichte verf.
        </p>
        <div className="mt-10">
          <GalleryWall
            items={[
              { photo: content.photos.trap, span: "lg:col-span-6", sizes: "(min-width: 1024px) 520px, 100vw" },
              { photo: content.photos.binnendeur, span: "lg:col-span-6", sizes: "(min-width: 1024px) 520px, 100vw" },
            ]}
          />
        </div>
        <p className="mt-10 max-w-[40rem]">{page.close}</p>
      </section>

      <Faq title="Vragen over wandafwerking" items={page.faq} />
      <QuoteComposer
        email={content.email}
        services={content.quoteServices}
        defaultService="Wandafwerking"
        title="Vrijblijvende offerte aanvragen"
        text={content.contactPage.composerText}
      />
    </>
  );
}
