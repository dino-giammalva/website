"use client";

import { House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/public/logo.png";

export default function NavBar() {
  const pathname = usePathname();
  const isWorkPage = pathname === "/work";

  return (
    <header className="absolute left-1/2 z-50 flex h-36 w-[calc(100%-3rem)] max-w-7xl -translate-x-1/2 items-center justify-between px-0">
      <Link
        className="text-base font-bold tracking-[0.14em] text-white"
        href="/"
      >
        <div className="flex flex-col items-start">
          <Image
            alt="Veloce Direct"
            className="h-24 w-44 object-cover"
            priority
            src={Logo}
          />
          <p className="mt-1 inline-flex w-fit items-center rounded-full border border-white/25 bg-black/20 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white/90 backdrop-blur-sm">
            Licensed &amp; Insured
          </p>
        </div>
      </Link>
      <nav className="flex items-center gap-2">
        {isWorkPage ? (
          <Link
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#2d6a4f] bg-[#2d6a4f] px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-[#2d6a4f]/25 transition hover:bg-[#24563f]"
            href="/"
          >
     
            Home
          </Link>
        ) : (
          <Link
            className="rounded-full border border-white/35 bg-white/10 px-4 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/18"
            href="/work"
          >
            Our Work
          </Link>
        )}
      </nav>
    </header>
  );
}
