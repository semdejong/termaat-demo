"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks({
  items,
  variant,
}: {
  items: { label: string; href: string }[];
  variant: "bar" | "stack";
}) {
  const pathname = usePathname();
  return (
    <>
      {items.map((item) => {
        const active = pathname === item.href;
        const className =
          variant === "bar"
            ? `inline-flex min-h-11 items-center border-b-4 px-1 text-[1.0625rem] ${active ? "border-accent font-semibold" : "border-transparent"}`
            : `flex min-h-11 items-center border-l-4 px-3 ${active ? "border-accent font-semibold" : "border-transparent"}`;
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={className}
            onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}
