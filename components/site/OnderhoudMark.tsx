import Image from "next/image";
import { content } from "@/content";

export function OnderhoudMark() {
  return (
    <div className="flex flex-wrap items-center gap-5">
      <a
        href={content.onderhoudNl.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 items-center border-2 border-brand bg-background p-2"
      >
        <Image
          src={content.onderhoudNl.image}
          alt={content.onderhoudNl.alt}
          width={content.onderhoudNl.width}
          height={content.onderhoudNl.height}
        />
      </a>
      <p className="max-w-md text-ink-soft">
        {content.onderhoudNl.text}{" "}
        <a
          href={content.onderhoudNl.href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-brand/40 underline-offset-4"
        >
          Meer over OnderhoudNL
        </a>
        .
      </p>
    </div>
  );
}
