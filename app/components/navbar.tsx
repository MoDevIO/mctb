"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <>
      <nav
        className={`fixed bg-background w-full flex items-center justify-between px-8 py-4 border-b border-(--foreground-secondary)
        ${
          pathname.startsWith("/mc/") || pathname === "/mc"
            ? "border-[#7BD456]"
            : pathname.startsWith("/mcd/") || pathname === "/mcd"
              ? "border-[#E4730E]"
              : pathname.startsWith("/mcdii/") || pathname === "/mcdii"
                ? "border-[#FFED74]"
                : ""
        }`}
      >
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo_placeholder.png"
            alt="MCTB Logo"
            width={48}
            height={48}
          />
          <span className="text-2xl font-bold">MC-Toolbox</span>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className={`hover:text-[#7D7044] transition-colors ${pathname === "/" ? "text-[#7D7044]" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/mc"
            className={`hover:text-[#7BD456] transition-colors ${pathname === "/mc" ? "text-[#7BD456]" : pathname.startsWith("/mc/") ? "text-[color-mix(in_srgb,#7BD456,black_20%)]" : ""}`}
          >
            Minecraft
          </Link>
          <Link
            href="/mcd"
            className={`hover:text-[#E4730E] transition-colors ${pathname === "/mcd" ? "text-[#E4730E]" : pathname.startsWith("/mcd/") ? "text-[color-mix(in_srgb,#E4730E,black_20%)]" : ""}`}
          >
            Dungeons
          </Link>
          <Link
            href="/mcdii"
            className={`hover:text-[#FFED74] transition-colors ${pathname === "/mcdii" ? "text-[#FFED74]" : pathname.startsWith("/mcdii/") ? "text-[color-mix(in_srgb,#FFED74,black_20%)]" : ""}`}
          >
            Dungeons II
          </Link>
        </div>
      </nav>
      <div className="h-20" />
    </>
  );
}
