import Link from "next/link";
import { content } from "@/content";

export default function NotFound() {
  return (
    <section className="px-6 py-20 lg:px-12">
      <h1 className="text-[2.75rem] sm:text-[3.5rem]">Deze pagina bestaat niet</h1>
      <p className="mt-4 max-w-[36rem]">Het adres klopt niet. Ga terug naar de homepage, of bel {content.phones[0].label}.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="inline-flex min-h-11 items-center bg-brand px-4 font-semibold text-brand-fg shadow-[inset_0_-4px_0_0_#F8D629]">
          Naar de homepage
        </Link>
        <a href={content.phones[0].href} data-cta="bellen" className="inline-flex min-h-11 items-center border-2 border-brand px-4 font-semibold">
          Bel {content.phones[0].label}
        </a>
      </div>
    </section>
  );
}
