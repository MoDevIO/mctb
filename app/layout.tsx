import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const minecraftFont = localFont({
  src: [
    {
      path: "./fonts/monocraft/Monocraft.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/monocraft/Monocraft-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/monocraft/Monocraft-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/monocraft/Monocraft-Bold-Italic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/monocraft/Monocraft-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/monocraft/Monocraft-Black-Italic.ttf",
      weight: "900",
      style: "italic",
    },
    {
      path: "./fonts/monocraft/Monocraft-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/monocraft/Monocraft-Light-Italic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/monocraft/Monocraft-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/monocraft/Monocraft-ExtraLight-Italic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./fonts/monocraft/Monocraft-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/monocraft/Monocraft-SemiBold-Italic.ttf",
      weight: "600",
      style: "italic",
    },
  ],
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
