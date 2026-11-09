"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 border-b border-(--foreground-secondary) ">
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
          className={`hover:text-[#7BD456] transition-colors ${pathname === "/mc" ? "text-[#7BD456]" : ""}`}
        >
          Minecraft
        </Link>
        <Link
          href="/mcd"
          className={`hover:text-[#E4730E] transition-colors ${pathname === "/mcd" ? "text-[#E4730E]" : ""}`}
        >
          Dungeons
        </Link>
        <Link
          href="/mcdii"
          className={`hover:text-[#FFED74] transition-colors ${pathname === "/mcdii" ? "text-[#FFED74]" : ""}`}
        >
          Dungeons II
        </Link>
      </div>
    </nav>
  );
}
