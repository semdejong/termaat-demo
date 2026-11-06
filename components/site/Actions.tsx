import Link from "next/link";
import { content } from "@/content";

const tap =
  "inline-flex min-h-11 items-center justify-center px-4 text-base font-semibold transition-colors duration-200";

export function PhoneLink({ tone = "solid" }: { tone?: "solid" | "inverse" | "line" }) {
  const phone = content.phones[0];
  const cls =
    tone === "solid"
      ? `${tap} bg-brand text-brand-fg shadow-[inset_0_-4px_0_0_#F8D629] hover:bg-[#0b2544]`
      : tone === "inverse"
        ? `${tap} bg-background text-brand shadow-[inset_0_-4px_0_0_#F8D629] hover:bg-muted`
        : `${tap} border-2 border-brand bg-background text-brand hover:bg-muted`;
  return (
    <a href={phone.href} data-cta="bellen" className={cls}>
      Bel {phone.label}
    </a>
  );
}

export function QuoteMailLink({ tone = "line" }: { tone?: "solid" | "inverse" | "line" }) {
  const cls =
    tone === "inverse"
      ? `${tap} border-2 border-brand-fg text-brand-fg hover:bg-[#18365c]`
      : tone === "solid"
        ? `${tap} bg-brand text-brand-fg shadow-[inset_0_-4px_0_0_#F8D629] hover:bg-[#0b2544]`
        : `${tap} border-2 border-brand bg-background text-brand hover:bg-muted`;
  return (
    <a
      href={`mailto:${content.email}?subject=${encodeURIComponent("Vrijblijvende offerte")}`}
      data-cta="offerte"
      className={cls}
    >
      Offerte per e-mail
    </a>
  );
}

export function TextLink({
  href,
  children,
  cta,
}: {
  href: string;
  children: React.ReactNode;
  cta?: string;
}) {
  const className =
    "inline-flex min-h-11 items-center underline decoration-brand/35 underline-offset-4 transition-colors duration-200 hover:decoration-brand";
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className} data-cta={cta}>
        {children}
      </Link>
    );
  }
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={className}
      data-cta={cta}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export function ActionRow({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <div className="flex flex-wrap gap-3">
      <PhoneLink tone={tone === "dark" ? "inverse" : "solid"} />
      <QuoteMailLink tone={tone === "dark" ? "inverse" : "line"} />
    </div>
  );
}
