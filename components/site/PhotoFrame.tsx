import Image from "next/image";
import type { WorkPhoto } from "@/content";

export function PhotoFrame({
  photo,
  priority = false,
  sizes = "(min-width: 1024px) 720px, 100vw",
  className = "",
}: {
  photo: WorkPhoto;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className="border-[3px] border-brand p-1.5">
        <div className="border border-brand bg-muted">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes={sizes}
            priority={priority}
            className="h-auto w-full"
          />
          <div className="h-1.5 bg-accent" aria-hidden />
        </div>
      </div>
      <figcaption className="mt-3 max-w-[40rem] text-base text-ink-soft">{photo.caption}</figcaption>
    </figure>
  );
}
