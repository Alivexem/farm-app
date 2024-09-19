import type { Metadata } from "next";
import { Calistoga, Kanit } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const calistoga_init = Calistoga({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-calistoga'
});

const kanit_init = Kanit({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-kanit'
});

export const metadata: Metadata = {
  title: "Farm Dely",
  description: "The easiest way to buy and sell fresh farm produce",
  icons: {
    icon:[{
        url: 'fruitee.png'
    }]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${calistoga_init.variable} ${kanit_init.variable}`}>{children}</body>
    </html>
  );
}
