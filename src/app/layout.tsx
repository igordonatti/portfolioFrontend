import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const Schibsted = Schibsted_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Igor Donatti",
  description: "Igor Donatti's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Schibsted.className} h-screen`}
      >
        {children}
      </body>
    </html>
  );
}

// como eu faco para ter duas linguagens no meu site?