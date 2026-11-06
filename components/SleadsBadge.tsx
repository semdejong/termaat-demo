/** Subtiele badge: markeert de site als concept van Sleads. Niet verwijderen in demo's. */
export default function SleadsBadge() {
  return (
    <a
      href="https://sleads.nl"
      target="_blank"
      rel="noopener noreferrer"
      className="m-4 inline-flex min-h-11 items-center border border-brand/25 bg-background px-3 text-sm text-brand print:hidden xl:fixed xl:bottom-4 xl:left-4 xl:z-50 xl:m-0"
    >
      Concept door <span className="ml-1 font-semibold">Sleads</span>
    </a>
  );
}
