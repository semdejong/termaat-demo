import { content } from "@/content";
import { ActionRow } from "@/components/site/Actions";

export function ContactBlock({ title, text }: { title: string; text: string }) {
  return (
    <section data-section="contact" className="bg-brand px-6 py-16 text-brand-fg lg:px-12 lg:py-20">
      <h2 className="max-w-[14ch] text-[2.25rem] text-brand-fg sm:text-[3rem]">{title}</h2>
      <p className="mt-4 max-w-[38rem] text-brand-fg">{text}</p>
      <div className="mt-8">
        <ActionRow tone="dark" />
      </div>
      <address className="mt-10 not-italic">
        <span className="block font-semibold">{content.company.legalName}</span>
        {content.address.street}
        <br />
        {content.address.postal} {content.address.city}
      </address>
      <p className="mt-4">
        <a href={content.phones[0].href} data-cta="bellen" className="underline decoration-brand-fg/40 underline-offset-4">
          {content.phones[0].label}
        </a>
        <span aria-hidden> · </span>
        <a href={`mailto:${content.email}`} data-cta="offerte" className="underline decoration-brand-fg/40 underline-offset-4">
          {content.email}
        </a>
      </p>
      <p className="mt-4">
        <a
          href={content.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center underline decoration-brand-fg/40 underline-offset-4"
        >
          Route naar Dorpsstraat 73 in Halle
        </a>
      </p>
    </section>
  );
}
