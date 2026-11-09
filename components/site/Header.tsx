import { content } from "@/content";
import { PhoneLink } from "@/components/site/Actions";
import { NavLinks } from "@/components/site/NavLinks";

export function SiteHeader() {
  const phone = content.phones[0];
  return (
    <header data-section="header" className="sticky top-0 z-40 bg-background">
      <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-12">
        <a href="/" className="inline-flex min-h-11 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={content.company.logo}
            alt="SchilderTERMAAT, naar de homepage"
            className="h-10 w-auto sm:h-12"
          />
        </a>
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <PhoneLink />
          </div>
          <a
            href={phone.href}
            data-cta="bellen"
            aria-label={`Bel ${phone.label}`}
            className="inline-flex min-h-11 items-center bg-brand px-3 font-semibold text-brand-fg shadow-[inset_0_-4px_0_0_#F8D629] sm:hidden"
          >
            Bel
          </a>
          <details className="lg:hidden">
            <summary className="flex min-h-11 cursor-pointer items-center gap-2 border-2 border-brand px-3 font-semibold">
              <span className="flex flex-col gap-1" aria-hidden>
                <span className="h-0.5 w-5 bg-brand" />
                <span className="h-0.5 w-5 bg-brand" />
                <span className="h-0.5 w-5 bg-brand" />
              </span>
              Menu
            </summary>
            <nav
              aria-label="Mobiel menu"
              className="absolute inset-x-0 top-full z-50 border-y-2 border-brand bg-background px-4 py-3"
            >
              <NavLinks items={content.nav} variant="stack" />
              <a
                href={phone.href}
                data-cta="bellen"
                className="flex min-h-11 items-center border-l-4 border-transparent px-3 font-semibold"
              >
                Bel {phone.label}
              </a>
            </nav>
          </details>
        </div>
      </div>
      <div className="px-4 sm:px-6 lg:px-12" aria-hidden>
        <div className="h-1 w-16 bg-accent" />
        <div className="h-[3px] bg-brand" />
        <div className="mt-px h-px bg-brand" />
      </div>
      <nav aria-label="Hoofdmenu" className="hidden flex-wrap gap-x-5 px-6 lg:flex lg:px-12">
        <NavLinks items={content.nav} variant="bar" />
      </nav>
    </header>
  );
}
