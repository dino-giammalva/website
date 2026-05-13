"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/public/logo.png";

export default function NavBar(){
    const pathname = usePathname();
    const isWorkPage = pathname === "/work";

    return (
      <header className="absolute left-1/2 h-36 z-50 flex w-[calc(100%-3rem)] max-w-7xl -translate-x-1/2 items-center justify-between px-0 ">
        <Link
          className="text-base font-bold tracking-[0.14em] text-white"
          href="/"
        >
          <div className="flex flex-col items-start">
            <Image
              src={Logo}
              alt="Veloce Direct"
              priority
              // width={170}
              className="h-24 object-cover w-44"
            />
            <p className="mt-1 inline-flex w-fit items-center rounded-full border border-white/25 bg-black/20 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white/90 backdrop-blur-sm">
              Licensed &amp; Insured
            </p>
          </div>
        </Link>
        <nav className="flex items-center gap-2">
          {!isWorkPage && (
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
