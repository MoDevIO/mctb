import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className="w-full flex items-center justify-between px-8 py-4 border-b border-gray-300">
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
          <a href="/" className="hover:text-[#7D7044] transition-colors">
            Home
          </a>
          <a href="/mc" className="hover:text-[#7BD456] transition-colors">
            Minecraft
          </a>
          <a href="/mcd" className="hover:text-[#E4730E] transition-colors">
            Dungeons
          </a>
          <a href="/mcdii" className="hover:text-[#FFED74] transition-colors">
            Dungeons II
          </a>
        </div>
      </nav>

      <main className="flex flex-col items-center gap-10 p-10">
        Hello World!
      </main>
    </>
  );
}
