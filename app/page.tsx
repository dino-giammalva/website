import { Check, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Logo from "@/public/logo.png"
import Link from "next/link";
const phoneDisplay = "(516) 250-6544";
const phoneHref = "tel:+15162506544";
const email = "Dgiammalva1@outlook.com";
const emailHref = `mailto:${email}`;

const included = [
  "Two coats of premium finish paint on all walls.",
  "Taping and floor protection handled before painting starts.",
  "Clean, efficient work with a spotless room when we leave.",
];

const details = [
  {
    label: "Price",
    value: "$350 flat rate for labor to paint walls only. Paint not included.",
  },
  {
    label: "Room size",
    value: "Valid for standard rooms up to 14x14 with 8ft Ceilings.",
  },
  // { label: "Scope", value: "Walls only, paint and materials not included" },
];

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Veloce Direct",
  founder: {
    "@type": "Person",
    name: "Dino Giammalva",
  },
  description:
    "Long Island home decor and interior painting service specializing in professional room painting, wall painting, trim refreshes, and residential paint prep.",
  telephone: "+15162506544",
  email,
  areaServed: {
    "@type": "Place",
    name: "Long Island, New York",
  },
  priceRange: "$$",
  serviceType: [
    "Interior painting",
    "Home decor painting",
    "Room painting",
    "Wall painting",
    "Trim and frame painting",
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f2e8] text-[#1f2428]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <section className="relative isolate min-h-[92vh] overflow-hidden bg-[#101820] text-white">
        <Image
          src="/room-painting-hero.jpg"
          alt="Freshly painted room with protected floors and painting supplies"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,13,18,0.72)_0%,rgba(7,13,18,0.56)_48%,rgba(7,13,18,0.44)_100%)] sm:bg-[linear-gradient(90deg,rgba(7,13,18,0.88)_0%,rgba(7,13,18,0.66)_38%,rgba(7,13,18,0.2)_72%,rgba(7,13,18,0.08)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[92vh] w-full max-w-7xl flex-col justify-between px-6 py-6 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between  h-24 mt-4">
            <a
              className="text-base font-bold tracking-[0.14em] text-white"
              href="#"
            >
              <Image
                src={Logo}
                alt="Freshly painted room with protected floors and painting supplies"
                priority
                width={170}
              />
            </a>
            <nav className="flex items-center gap-2">
              {/* <Link
                className="rounded-full border border-white/35 bg-white/10 px-4 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/18"
                href="/work"
              >
                Our Work
              </Link> */}
            </nav>
          </header>

          <div className="max-w-3xl py-20 sm:py-24">
            <p className="mb-5 inline-flex rounded-full border border-white/24 bg-white/14 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
              Limited Time Room Special
            </p>
            <h1 className="text-5xl font-black leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              Refresh Your Space for Less!
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-white/88">
              Transform your Long Island home with expert interior painting. We
              specialize in brightening your favorite spaces through
              high-quality craftsmanship, all offered at a transparent,
              flat-rate labor cost.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-full bg-[#2d6a4f] px-7 py-4 text-center text-base font-extrabold text-white shadow-xl shadow-black/20 transition hover:bg-[#24563f]"
                href={phoneHref}
              >
                Call {phoneDisplay}
              </a>
              <a
                className="rounded-full border border-white/45 bg-white/10 px-7 py-4 text-center text-base font-bold text-white backdrop-blur transition hover:bg-white/18"
                href={emailHref}
              >
                Email to Book
              </a>
            </div>
          </div>

          {/* <div className="grid gap-8 pb-4 sm:grid-cols-2">
            {details.map((item) => (
              <div
                className="rounded-3xl border border-white/18 bg-white/12 p-4 backdrop-blur-md"
                key={item.label}
              >
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-white/72">
                  {item.label}
                </p>
                <p className="mt-2 text-base font-semibold text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      <section
        className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-24"
        id="details"
      >
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#2d6a4f]">
            Long Island interior painting by Veloce Direct
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-[#17212b] sm:text-5xl">
            Bedrooms, home offices, nurseries or the rooms you keep meaning to
            finish.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#56616a]">
            Skip the DIY stress. For a flat labor fee of $350, Veloce Direct
            will give your room a fresh new look while you relax. From prep to
            the final coat, we take care of the hard work so you don't have to.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-[0_20px_60px_rgba(31,36,40,0.12)] sm:p-7">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#bd4f2d]">
              Limited time room special
            </p>
            <div className="mt-4 flex items-start flex-col justify-between gap-4 border-b border-[#eadfce] pb-6 md:flex-row">
              <div>
                <p className="text-lg font-black leading-none text-[#17212b]">
                  We provide the expert labor for a flat $350; you just provide
                  the paint!
                </p>
                {/* <p className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-[#56616a]">
                  Labor only
                </p> */}
              </div>
              <p className="md:max-w-42 md:text-right text-sm font-semibold leading-5 text-[#56616a]">
                Standard rooms up to 14x14 with 8ft ceiling.*
              </p>
            </div>
          </div>
          <ul className="mt-2 divide-y divide-[#eadfce]">
            {included.map((item) => (
              <li
                className="flex items-start gap-4 py-5 first:pt-4 last:pb-2"
                key={item}
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2d6a4f] text-sm font-bold text-white">
                  <Check
                    aria-hidden="true"
                    className="h-4 w-4"
                    strokeWidth={3}
                  />
                </span>
                <span className="text-base font-semibold leading-6 text-[#34404a]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <p className=" text-left text-[12px] font-thin  text-[#56616a]">
            * Rooms requiring primer will be an additional charge.
          </p>
        </div>
      </section>

      <section className="bg-[#17212b] px-6 py-16 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d77a61]">
              Custom touches
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight">
              Want that brand new look?
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-3xl border border-white/12 bg-white/8 p-6">
              <h3 className="text-2xl font-extrabold">Fresh Frame add-on</h3>
              <p className="mt-4 leading-7 text-white/78">
                Refresh your baseboards, window frames, and doors to match your
                new walls for a perfectly polished finish.
              </p>
            </article>
            <article className="rounded-3xl border border-white/12 bg-white/8 p-6">
              <h3 className="text-2xl font-extrabold">Detailed repairs</h3>
              <p className="mt-4 leading-7 text-white/78">
                If your room needs extra repair work before painting, we offer
                those fixes as easy add-ons.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border-2 border-[#2d6a4f] bg-white shadow-[0_14px_36px_rgba(31,36,40,0.10)]">
          <div className="grid items-center gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#bd4f2d]">
                Veloce Direct | Serving Long Island
              </p>
              <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-[#17212b] sm:text-4xl">
                Ready for a room that feels fresh again?
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-[#56616a]">
                Reach out to Veloce Direct to reserve your spot for the limited
                time room special. Quality you can see. Prices you&apos;ll love.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:w-72 lg:flex-col">
              <a
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#2d6a4f] px-7 py-4 text-center text-base font-extrabold text-white shadow-lg shadow-[#2d6a4f]/20 transition hover:bg-[#24563f]"
                href={phoneHref}
              >
                <Phone
                  aria-hidden="true"
                  className="h-5 w-5"
                  strokeWidth={2.4}
                />
                {phoneDisplay}
              </a>
              <a
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#dfd5c5] bg-[#fffaf1] px-7 py-4 text-center text-base font-extrabold text-[#17212b] transition hover:border-[#cfc1ae] hover:bg-[#f7f2e8]"
                href={emailHref}
              >
                <Mail
                  aria-hidden="true"
                  className="h-5 w-5"
                  strokeWidth={2.4}
                />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
