import { Mail, Phone } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const phoneDisplay = "(516) 250-6544";
const phoneHref = "tel:+15162506544";
const emailHref = "mailto:Dgiammalva1@outlook.com";

const workImages = [
  {
    src: "/room-painting-hero.jpg",
    alt: "Freshly painted Long Island room with protected floors",
    title: "Fresh Interior Room Refresh",
    location: "Long Island, NY",
  },
];

export const metadata: Metadata = {
  title: "Painting Work Gallery | Veloce Direct Long Island",
  description:
    "View interior painting and room refresh work from Veloce Direct, a Long Island home decor painting service by Dino Giammalva.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#f7f2e8] text-[#1f2428]">
      <section className="px-6 py-6 sm:px-8 lg:px-10">
        <header className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link
            className="text-base font-black tracking-[0.14em] text-[#17212b]"
            href="/"
          >
            Veloce Direct
          </Link>
          <nav className="flex items-center gap-2">
            <Link
              className="rounded-full border border-[#dfd5c5] bg-white px-4 py-3 text-sm font-bold text-[#17212b] shadow-sm transition hover:bg-[#fffaf1]"
              href="/"
            >
              Home
            </Link>
            <a
              className="rounded-full bg-[#2d6a4f] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#2d6a4f]/20 transition hover:bg-[#24563f]"
              href={phoneHref}
            >
              Call
            </a>
          </nav>
        </header>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10 pt-8 sm:px-8 lg:px-10 lg:pb-14 lg:pt-12">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#bd4f2d]">
            Our work
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-[#17212b] sm:text-5xl">
            Long Island room painting and refreshes.
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#56616a]">
            A look at completed room refreshes, interior wall painting, and home
            decor paint updates by Dino Giammalva at Veloce Direct.
          </p>
          <p className="mt-6 inline-flex rounded-full border border-[#dfd5c5] bg-white px-4 py-2 text-sm font-bold text-[#2d6a4f] shadow-sm">
            {workImages.length} project shown
          </p>
        </div>
      </section>

      <section className="px-6 pb-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          {workImages.map((item) => (
            <article
              className="overflow-hidden rounded-3xl border border-[#eadfce] bg-white shadow-[0_14px_36px_rgba(31,36,40,0.10)]"
              key={item.src}
            >
              <div className="relative aspect-[16/11]">
                <Image
                  alt={item.alt}
                  className="object-cover"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  src={item.src}
                />
              </div>
              <div className="flex items-start justify-between gap-4 p-5 sm:p-6">
                <h2 className="text-xl font-black leading-tight text-[#17212b]">
                  {item.title}
                </h2>
                <p className="shrink-0 rounded-full bg-[#f7f2e8] px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#2d6a4f]">
                  {item.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-3xl border-2 border-[#2d6a4f] bg-white p-8 shadow-[0_14px_36px_rgba(31,36,40,0.10)] sm:p-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#bd4f2d]">
              Like what you see?
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-[#17212b] sm:text-4xl">
              Bring the same clean finish to your home.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:w-72 lg:flex-col">
            <a
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#2d6a4f] px-7 py-4 text-center text-base font-extrabold text-white shadow-lg shadow-[#2d6a4f]/20 transition hover:bg-[#24563f]"
              href={phoneHref}
            >
              <Phone aria-hidden="true" className="h-5 w-5" strokeWidth={2.4} />
              {phoneDisplay}
            </a>
            <a
              className="inline-flex items-center justify-center gap-3 rounded-full border border-[#dfd5c5] bg-[#fffaf1] px-7 py-4 text-center text-base font-extrabold text-[#17212b] transition hover:border-[#cfc1ae] hover:bg-[#f7f2e8]"
              href={emailHref}
            >
              <Mail aria-hidden="true" className="h-5 w-5" strokeWidth={2.4} />
              Email Dino
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
