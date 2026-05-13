"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type WorkImage = {
  src: string;
  alt: string;
};

type WorkCardProps = {
  title: string;
  location: string;
  images: WorkImage[];
  preloadFirstImage?: boolean;
};

type SlideDirection = "previous" | "next";
type SlidePhase = "idle" | "starting" | "running";

export default function WorkCard({
  title,
  location,
  images,
  preloadFirstImage = false,
}: WorkCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slide, setSlide] = useState<{
    direction: SlideDirection;
    outgoingIndex: number | null;
    phase: SlidePhase;
  }>({
    direction: "next",
    outgoingIndex: null,
    phase: "idle",
  });
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    if (slide.phase !== "starting") {
      return;
    }

    const frame = requestAnimationFrame(() => {
      setSlide((currentSlide) =>
        currentSlide.phase === "starting"
          ? { ...currentSlide, phase: "running" }
          : currentSlide,
      );
    });

    return () => cancelAnimationFrame(frame);
  }, [slide.phase]);

  function showImage(nextIndex: number, direction: SlideDirection) {
    setSlide({
      direction,
      outgoingIndex: activeIndex,
      phase: "starting",
    });
    setActiveIndex(nextIndex);
  }

  function showPrevious() {
    showImage(
      activeIndex === 0 ? images.length - 1 : activeIndex - 1,
      "previous",
    );
  }

  function showNext() {
    showImage(activeIndex === images.length - 1 ? 0 : activeIndex + 1, "next");
  }

  return (
    <article
      aria-label={`${title}, ${location}`}
      className="overflow-hidden rounded-3xl border border-[#eadfce] bg-white shadow-[0_14px_36px_rgba(31,36,40,0.10)]"
    >
      <div className="relative aspect-[16/11] overflow-hidden bg-[#17212b]">
        {images.map((image, index) => {
          const isActive = index === activeIndex;
          const isOutgoing = index === slide.outgoingIndex;

          if (!isActive && !isOutgoing) {
            return null;
          }

          const enteringFrom =
            slide.direction === "next"
              ? "translate-x-full"
              : "-translate-x-full";
          const exitingTo =
            slide.direction === "next"
              ? "-translate-x-full"
              : "translate-x-full";
          let imagePosition = "translate-x-0 opacity-0";
          let transitionClass = "transition-none";

          if (isActive) {
            imagePosition =
              slide.phase === "starting"
                ? `${enteringFrom} opacity-100`
                : "translate-x-0 opacity-100";
            transitionClass =
              slide.phase === "running"
                ? "transition-transform duration-500 ease-out"
                : "transition-none";
          } else if (isOutgoing) {
            imagePosition =
              slide.phase === "starting"
                ? "translate-x-0 opacity-100"
                : `${exitingTo} opacity-100`;
            transitionClass =
              slide.phase === "running"
                ? "transition-transform duration-500 ease-out"
                : "transition-none";
          }

          return (
            <div
              className={`pointer-events-none absolute inset-0 ${transitionClass} ${imagePosition}`}
              key={`${image.src}-${index}`}
              onTransitionEnd={(event) => {
                if (event.propertyName !== "transform" || !isOutgoing) {
                  return;
                }

                setSlide((currentSlide) =>
                  currentSlide.outgoingIndex === index
                    ? { ...currentSlide, outgoingIndex: null, phase: "idle" }
                    : currentSlide,
                );
              }}
            >
              <Image
                alt={image.alt}
                className="object-cover"
                fetchPriority={
                  preloadFirstImage && index === 0 ? "high" : undefined
                }
                fill
                loading={preloadFirstImage && index === 0 ? "eager" : "lazy"}
                quality={78}
                sizes="(min-width: 1280px) 620px, (min-width: 1024px) calc((100vw - 5.5rem) / 2), calc(100vw - 3rem)"
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
      {/* <div className="flex items-start justify-between gap-4 p-5 sm:p-6">
        <h2 className="text-xl font-black leading-tight text-[#17212b]">
          {title}
        </h2>
        <p className="shrink-0 rounded-full bg-[#f7f2e8] px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#2d6a4f]">
          {location}
        </p>
      </div> */}
    </article>
  );
}
