import Image from "next/image";
import type { WorkPhoto } from "@/content";

export function GalleryWall({
  items,
}: {
  items: { photo: WorkPhoto; span?: string; sizes?: string; priority?: boolean }[];
}) {
  return (
    <div className="border-[3px] border-brand p-1.5">
      <div className="grid gap-px bg-brand lg:grid-cols-12">
        {items.map(({ photo, span = "lg:col-span-6", sizes = "(min-width: 1024px) 540px, 100vw", priority = false }) => (
          <figure key={photo.src} className={`bg-background ${span}`}>
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
            <figcaption className="px-4 py-4 text-ink-soft">{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
