import { content, type FaqItem } from "@/content";

function linkify(text: string) {
  const parts = text.split(/(0314-631420|info@schildertermaat\.nl)/g);
  return parts.map((part, index) => {
    if (part === "0314-631420") {
      return (
        <a key={index} href={content.phones[0].href} data-cta="bellen" className="underline decoration-brand/40 underline-offset-4">
          {part}
        </a>
      );
    }
    if (part === "info@schildertermaat.nl") {
      return (
        <a key={index} href={`mailto:${content.email}`} data-cta="mailen" className="underline decoration-brand/40 underline-offset-4">
          {part}
        </a>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

export function Faq({ title, items, section = "vragen" }: { title: string; items: FaqItem[]; section?: string }) {
  return (
    <section data-section={section} className="px-6 py-16 lg:px-12 lg:py-20">
      <h2 className="max-w-[16ch] text-[2.25rem] sm:text-[3rem]">{title}</h2>
      <dl className="mt-10 border-t-2 border-brand">
        {items.map((item) => (
          <div key={item.question} className="border-b border-brand/30 py-6">
            <dt className="text-[1.75rem]">{item.question}</dt>
            <dd className="mt-3 max-w-[40rem] text-ink-soft">{linkify(item.answer)}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
