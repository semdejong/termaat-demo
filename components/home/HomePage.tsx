import { content } from "@/content";
import { ActionRow, TextLink } from "@/components/site/Actions";
import { ContactBlock } from "@/components/site/ContactBlock";
import { Faq } from "@/components/site/Faq";
import { GalleryWall } from "@/components/site/GalleryWall";
import { PhotoFrame } from "@/components/site/PhotoFrame";

export function HomePage() {
  const home = content.home;
  const phone = content.phones[0];

  return (
    <>
      <section data-section="hero" className="grid items-center lg:grid-cols-12">
        <div className="px-6 py-12 lg:col-span-7 lg:px-12 lg:py-16">
          <div className="border-l-[3px] border-brand pl-5">
            <div className="border-l border-brand pl-5">
              <p className="text-ink-soft">{home.hero.context}</p>
              <div className="mt-4 h-3 w-3 bg-accent" aria-hidden />
              <h1 className="mt-4 max-w-[14ch] text-[2.8rem] sm:text-[4.25rem]">{home.hero.title}</h1>
              <p className="mt-6 max-w-[38rem]">{home.hero.lede}</p>
              <div className="mt-8">
                <ActionRow />
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 pb-12 lg:col-span-5 lg:py-16 lg:pr-12 lg:pl-0">
          <PhotoFrame photo={home.hero.photo} priority sizes="(min-width: 1024px) 460px, 100vw" />
        </div>
      </section>

      <p data-section="krediet" className="bg-brand px-6 py-6 text-brand-fg lg:px-12">
        {home.credibility}
      </p>

      <section data-section="diensten" className="px-6 py-16 lg:px-12 lg:py-20">
        <h2 className="max-w-[16ch] text-[2.25rem] sm:text-[3rem]">{home.services.title}</h2>
        <p className="mt-4 max-w-[40rem] text-ink-soft">{home.services.intro}</p>
        <div className="mt-10 border-2 border-brand lg:grid lg:grid-cols-12">
          {home.services.items.map((item, index) => (
            <article
              key={item.href}
              className={`border-brand px-5 py-8 sm:px-6 ${index < home.services.items.length - 1 ? "border-b-2 lg:border-b-0 lg:border-r-2" : ""} ${index === 0 ? "lg:col-span-5" : index === 1 ? "lg:col-span-4" : "lg:col-span-3"}`}
            >
              <div className="h-3 w-3 bg-accent" aria-hidden />
              <h3 className="mt-4 text-[2rem]">{item.title}</h3>
              <p className="mt-4 text-ink-soft">{item.text}</p>
              <div className="mt-6 flex flex-col items-start">
                <TextLink href={item.href}>{item.link}</TextLink>
                <a href={phone.href} data-cta="bellen" className="inline-flex min-h-11 items-center underline decoration-brand/35 underline-offset-4">
                  Bel {phone.label}
                </a>
                <a
                  href={`mailto:${content.email}?subject=${encodeURIComponent("Vrijblijvende offerte " + item.title)}`}
                  data-cta="offerte"
                  className="inline-flex min-h-11 items-center underline decoration-brand/35 underline-offset-4"
                >
                  Offerte per e-mail
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section data-section="buitenwerk" className="px-6 pb-16 lg:px-12 lg:pb-20">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <PhotoFrame photo={home.exterior.photo} sizes="(min-width: 1024px) 760px, 100vw" />
          </div>
          <div className="lg:col-span-4 lg:pt-8">
            <h2 className="text-[2.25rem] sm:text-[3rem]">{home.exterior.title}</h2>
            <p className="mt-4 text-ink-soft">{home.exterior.text}</p>
            <div className="mt-6">
              <TextLink href="/referenties">{home.exterior.link}</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section data-section="houtrot" className="border-t-2 border-brand px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12">
          <h2 className="text-[2.25rem] sm:text-[3rem] lg:col-span-5">{home.wood.title}</h2>
          <div className="max-w-[40rem] space-y-4 lg:col-span-7">
            {home.wood.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ActionRow />
            <TextLink href="/schilderwerk">Houtrot en schilderwerk</TextLink>
          </div>
        </div>
      </section>

      <section data-section="wandafwerking" className="border-t-2 border-brand px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <PhotoFrame photo={home.interior.photo} sizes="(min-width: 1024px) 540px, 100vw" />
          </div>
          <div className="lg:col-span-6">
            <h2 className="text-[2.25rem] sm:text-[3rem]">{home.interior.title}</h2>
            <p className="mt-4 max-w-[38rem]">{home.interior.text}</p>
            <ul className="mt-6 border-t-2 border-brand">
              {home.interior.options.map((option) => (
                <li key={option} className="border-b border-brand/30 py-3">
                  {option}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-ink-soft">{home.interior.note}</p>
            <div className="mt-6 flex flex-col items-start">
              <TextLink href="/wandafwerking">{home.interior.link}</TextLink>
              <ActionRow />
            </div>
          </div>
        </div>
      </section>

      <section data-section="beglazing" className="border-t-2 border-brand px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-[2.25rem] sm:text-[3rem]">{home.glazing.title}</h2>
            <div className="mt-4 max-w-[40rem] space-y-4">
              {home.glazing.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-6 max-w-[40rem] border-l-[3px] border-brand pl-4">{home.glazing.notice}</p>
            <div className="mt-6 flex flex-col items-start">
              <TextLink href="/beglazing">{home.glazing.link}</TextLink>
              <ActionRow />
            </div>
          </div>
          <div className="lg:col-span-5">
            <PhotoFrame photo={home.glazing.photo} sizes="(min-width: 1024px) 420px, 100vw" />
          </div>
        </div>
      </section>

      <section data-section="aanpak" className="border-t-2 border-brand px-6 py-16 lg:px-12 lg:py-20">
        <h2 className="text-[2.25rem] sm:text-[3rem]">{home.begin.title}</h2>
        <p className="mt-4 max-w-[40rem]">{home.begin.intro}</p>
        <ol className="mt-10 border-t-2 border-brand lg:grid lg:grid-cols-4 lg:border-t-2">
          {home.begin.steps.map((step) => (
            <li key={step.title} className="border-b border-brand/30 py-6 lg:border-b-0 lg:border-l-2 lg:border-brand lg:px-5 lg:first:border-l-0 lg:first:pl-0">
              <p className="text-[1.75rem]">{step.title}</p>
              <p className="mt-3 text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <ActionRow />
        </div>
      </section>

      <section data-section="over-ons" className="border-t-2 border-brand px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-ink-soft">Sinds</p>
            <p className="font-display text-[6.5rem] leading-none text-brand">1961</p>
            <div className="mt-4 h-1.5 w-16 bg-accent" aria-hidden />
            <p className="mt-4">Halle, Achterhoek</p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="max-w-[14ch] text-[2.25rem] sm:text-[3rem]">{home.about.title}</h2>
            <div className="mt-4 max-w-[40rem] space-y-4">
              {home.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6">
              <TextLink href="/over-ons">{home.about.link}</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section data-section="binnenwerk" className="border-t-2 border-brand px-6 py-16 lg:px-12 lg:py-20">
        <h2 className="max-w-[14ch] text-[2.25rem] sm:text-[3rem]">Van deur tot trap</h2>
        <p className="mt-4 max-w-[40rem] text-ink-soft">
          Particulier binnenschilderwerk: deuren, een strook figuurglas, geschilderde wanden en een trap.
        </p>
        <div className="mt-10">
          <GalleryWall
            items={[
              { photo: content.photos.binnendeur, span: "lg:col-span-4", sizes: "(min-width: 1024px) 360px, 100vw" },
              { photo: content.photos.deurGlas, span: "lg:col-span-4", sizes: "(min-width: 1024px) 360px, 100vw" },
              { photo: content.photos.trap, span: "lg:col-span-4", sizes: "(min-width: 1024px) 360px, 100vw" },
            ]}
          />
        </div>
        <div className="mt-8">
          <TextLink href="/referenties">Alle foto&apos;s bekijken</TextLink>
        </div>
      </section>

      <Faq title={home.faq.title} items={home.faq.items} />

      <ContactBlock title={home.contact.title} text={home.contact.text} />
    </>
  );
}
