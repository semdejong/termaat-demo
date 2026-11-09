import Link from "next/link";
import Image from "next/image";
import { content } from "@/content";

export function SiteFooter() {
  const services = content.nav.filter((item) => item.href !== "/");
  return (
    <footer data-section="footer" className="border-t-[6px] border-accent bg-brand px-6 py-12 text-brand-fg lg:px-12">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-[2rem] leading-none">{content.company.legalName}</p>
          <p className="mt-4 text-brand-fg">
            {content.address.street}
            <br />
            {content.address.postal} {content.address.city}
          </p>
          <p className="mt-4">
            <a href={content.phones[0].href} data-cta="bellen" className="underline decoration-brand-fg/40 underline-offset-4">
              {content.phones[0].label}
            </a>
            <br />
            <a href={`mailto:${content.email}`} data-cta="mailen" className="underline decoration-brand-fg/40 underline-offset-4">
              {content.email}
            </a>
          </p>
          <p className="mt-4">{content.kvkLine}</p>
        </div>
        <div className="lg:col-span-4">
          <p className="font-semibold">Werkzaamheden</p>
          <ul className="mt-3">
            {services.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-11 items-center underline decoration-brand-fg/40 underline-offset-4">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <a
            href={content.onderhoudNl.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-background p-2"
          >
            <Image
              src={content.onderhoudNl.image}
              alt={content.onderhoudNl.alt}
              width={content.onderhoudNl.width}
              height={content.onderhoudNl.height}
            />
          </a>
          <p className="mt-3 max-w-[16rem] text-brand-fg">{content.onderhoudNl.text}</p>
        </div>
      </div>
      <div className="mt-10 border-t border-brand-fg/30 pt-6 text-brand-fg">
        <p>
          <a href="https://sleads.nl" target="_blank" rel="noopener noreferrer" className="underline decoration-brand-fg/40 underline-offset-4">
            Concept door Sleads
          </a>
          . Dit is een conceptwebsite en is niet bestemd voor indexering.
        </p>
      </div>
    </footer>
  );
}
