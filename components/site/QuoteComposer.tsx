"use client";

import { useId } from "react";

export function QuoteComposer({
  email,
  services,
  defaultService,
  title,
  text,
}: {
  email: string;
  services: readonly string[];
  defaultService?: string;
  title: string;
  text: string;
}) {
  const id = useId();

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `Dienst: ${String(data.get("dienst") ?? "")}`,
      `Postcode en plaats: ${String(data.get("plaats") ?? "")}`,
      `Naam: ${String(data.get("naam") ?? "")}`,
      `Gewenst contact: ${String(data.get("bereik") ?? "")}`,
      "",
      String(data.get("omschrijving") ?? ""),
    ].join("\n");
    const href = `mailto:${email}?subject=${encodeURIComponent("Vrijblijvende offerte")}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  return (
    <section id="offerte" data-section="offerte" className="px-6 py-16 lg:px-12 lg:py-20">
      <div className="border-[3px] border-brand p-1.5">
        <div className="border border-brand px-5 py-8 sm:px-8">
          <div className="h-3 w-3 bg-accent" aria-hidden />
          <h2 className="mt-4 text-[2.25rem] sm:text-[2.75rem]">{title}</h2>
          <p className="mt-4 max-w-[40rem] text-ink-soft">{text}</p>
          <form
            onSubmit={onSubmit}
            action={`mailto:${email}`}
            method="post"
            encType="text/plain"
            className="mt-8 grid max-w-3xl gap-5 sm:grid-cols-2"
          >
            <div className="sm:col-span-2">
              <label htmlFor={`${id}-dienst`} className="mb-1 block font-semibold">
                Dienst
              </label>
              <select
                id={`${id}-dienst`}
                name="dienst"
                required
                defaultValue={defaultService ?? services[0]}
                className="min-h-11 w-full border-2 border-brand bg-background px-3"
              >
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor={`${id}-plaats`} className="mb-1 block font-semibold">
                Postcode en plaats
              </label>
              <input
                id={`${id}-plaats`}
                name="plaats"
                required
                autoComplete="address-level2"
                className="min-h-11 w-full border-2 border-brand bg-background px-3"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor={`${id}-omschrijving`} className="mb-1 block font-semibold">
                Omschrijving van het werk
              </label>
              <textarea
                id={`${id}-omschrijving`}
                name="omschrijving"
                required
                rows={5}
                className="w-full border-2 border-brand bg-background px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor={`${id}-naam`} className="mb-1 block font-semibold">
                Uw naam
              </label>
              <input
                id={`${id}-naam`}
                name="naam"
                required
                autoComplete="name"
                className="min-h-11 w-full border-2 border-brand bg-background px-3"
              />
            </div>
            <div>
              <label htmlFor={`${id}-bereik`} className="mb-1 block font-semibold">
                Hoe mogen wij u bereiken?
              </label>
              <input
                id={`${id}-bereik`}
                name="bereik"
                required
                autoComplete="on"
                className="min-h-11 w-full border-2 border-brand bg-background px-3"
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                data-cta="offerte"
                className="inline-flex min-h-11 items-center bg-brand px-4 font-semibold text-brand-fg shadow-[inset_0_-4px_0_0_#F8D629] transition-colors duration-200 hover:bg-[#0b2544]"
              >
                Open dit bericht in uw e-mailprogramma
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
