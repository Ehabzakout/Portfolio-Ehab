import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const outFit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  variable: "--font-ovo",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Portfolio- Ehab Waleed",
  icons: {
    icon: "/profile-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outFit.variable} ${ovo.variable} mx-auto w-full overflow-x-hidden px-3 leading-8 antialiased md:max-w-7xl`}
      >
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
