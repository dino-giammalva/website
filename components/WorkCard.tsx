"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type WorkImage = {
  src: string;
  alt: string;
};

type WorkCardProps = {
  title: string;
  location: string;
  images: WorkImage[];
};

export default function WorkCard({ title, location, images }: WorkCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const hasMultipleImages = images.length > 1;

  function showPrevious() {
    setPreviousIndex(activeIndex);
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  }

  function showNext() {
    setPreviousIndex(activeIndex);
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  }

  return (
    <article className="overflow-hidden rounded-3xl border border-[#eadfce] bg-white shadow-[0_14px_36px_rgba(31,36,40,0.10)]">
      <div className="relative aspect-[16/11] overflow-hidden bg-[#17212b]">
        {images.map((image, index) => {
          const isActive = index === activeIndex;
          const isPrevious = index === previousIndex;
          const imagePosition = isActive
            ? "translate-x-0 opacity-100"
            : isPrevious
              ? "-translate-x-full opacity-100"
              : "translate-x-full opacity-0";
          const transitionClass =
            isActive || isPrevious
              ? "transition-all duration-500 ease-out"
              : "transition-none";

          return (
            <div
              className={`pointer-events-none absolute inset-0 ${transitionClass} ${imagePosition}`}
              key={`${image.src}-${index}`}
              onTransitionEnd={() => {
                if (isPrevious) {
                  setPreviousIndex(null);
                }
              }}
            >
              <Image
                alt={image.alt}
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                src={image.src}
              />
            </div>
          );
        })}

        {hasMultipleImages && (
          <div className="absolute inset-x-4 top-1/2 z-10 flex -translate-y-1/2 items-center justify-between">
            <button
              aria-label="Show previous project photo"
              className="inline-flex h-11 w-11 touch-manipulation items-center justify-center rounded-full border border-white/45 bg-black/35 text-white backdrop-blur transition hover:bg-black/50"
              onClick={showPrevious}
              type="button"
            >
              <ChevronLeft aria-hidden="true" className="h-6 w-6" />
            </button>
            <button
              aria-label="Show next project photo"
              className="inline-flex h-11 w-11 touch-manipulation items-center justify-center rounded-full border border-white/45 bg-black/35 text-white backdrop-blur transition hover:bg-black/50"
              onClick={showNext}
              type="button"
            >
              <ChevronRight aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
        )}

        {hasMultipleImages && (
          <p className="absolute bottom-4 right-4 z-10 rounded-full bg-black/45 px-3 py-1 text-xs font-bold text-white backdrop-blur">
            {activeIndex + 1} / {images.length}
          </p>
        )}
      </div>
      <div className="flex items-start justify-between gap-4 p-5 sm:p-6">
        <h2 className="text-xl font-black leading-tight text-[#17212b]">
          {title}
        </h2>
        <p className="shrink-0 rounded-full bg-[#f7f2e8] px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#2d6a4f]">
          {location}
        </p>
      </div>
    </article>
  );
}
