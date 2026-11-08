import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const minecraftFont = localFont({
  src: "./fonts/Monocraft.ttf",
  variable: "--font-minecraft",
});

export const metadata: Metadata = {
  title: "MC-Toolbox",
  description:
    "A Toolbox filled with useful tools for Minecraft, Minecraft Dungeons, and Minecraft Dungeons II",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${minecraftFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
