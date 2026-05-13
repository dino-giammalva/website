"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

type InstagramWorkGridProps = {
  images: GalleryImage[];
};

export default function InstagramWorkGrid({ images }: InstagramWorkGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;
  const activeImage = activeIndex === null ? null : images[activeIndex];
  const hasMultipleImages = images.length > 1;

  const showPrevious = useCallback(() => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      return currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    });
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      return currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    });
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, showNext, showPrevious]);

  return (
    <>
      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-1 sm:gap-2 ">
        {images.map((image, index) => (
          <button
            aria-label={`Open photo ${index + 1} of ${images.length}`}
            className="group relative aspect-square overflow-hidden bg-[#17212b] rounded-md"
            key={image.src}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            <Image
              alt={image.alt}
              className="object-cover transition duration-300 group-hover:scale-105 "
              fill
              loading={index < 6 ? "eager" : "lazy"}
              quality={74}
              sizes="(min-width: 1280px) 410px, (min-width: 768px) calc((100vw - 4rem) / 3), calc((100vw - 2rem) / 3)"
              src={image.src}
            />
          </button>
        ))}
      </div>

      {isOpen && activeImage && (
        <div
          aria-label="Work photo viewer"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 px-4 py-5 sm:px-6"
          role="dialog"
        >
          <button
            aria-label="Close photo viewer"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-white backdrop-blur transition hover:bg-white/20"
            onClick={() => setActiveIndex(null)}
            type="button"
          >
            <X aria-hidden="true" className="h-6 w-6" />
          </button>

          {hasMultipleImages && (
            <button
              aria-label="Show previous photo"
              className="absolute left-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 touch-manipulation items-center justify-center rounded-full bg-white/12 text-white backdrop-blur transition hover:bg-white/20 sm:left-6"
              onClick={showPrevious}
              type="button"
            >
              <ChevronLeft aria-hidden="true" className="h-7 w-7" />
            </button>
          )}

          <div className="relative h-[78vh] w-full max-w-6xl sm:h-[84vh]">
            <Image
              alt={activeImage.alt}
              className="object-contain"
              fetchPriority="high"
              fill
              quality={86}
              sizes="100vw"
              src={activeImage.src}
            />
          </div>

          {hasMultipleImages && (
            <button
              aria-label="Show next photo"
              className="absolute right-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 touch-manipulation items-center justify-center rounded-full bg-white/12 text-white backdrop-blur transition hover:bg-white/20 sm:right-6"
              onClick={showNext}
              type="button"
            >
              <ChevronRight aria-hidden="true" className="h-7 w-7" />
            </button>
          )}

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/12 px-3 py-1 text-sm font-bold text-white backdrop-blur">
            {(activeIndex ?? 0) + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
