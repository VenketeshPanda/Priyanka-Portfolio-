import type { Metadata } from "next";
import { Shantell_Sans, Murecho, Bagel_Fat_One, Mynerve, Caveat } from "next/font/google";
import "./globals.css";

const shantellSans = Shantell_Sans({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-shantell",
});

const murecho = Murecho({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-murecho",
});

const bagelFatOne = Bagel_Fat_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bagel",
});

const mynerve = Mynerve({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mynerve",
});

const caveat = Caveat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Priyanka - Product Designer",
  description: "I design data-heavy interfaces for complex digital products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${shantellSans.variable} ${murecho.variable} ${bagelFatOne.variable} ${mynerve.variable} ${caveat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
