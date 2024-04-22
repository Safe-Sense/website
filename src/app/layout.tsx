import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Safe Sense",
  description:
    "Making our roads safer using easy-to-install External Sensors and Machine Learning  ||  \
  Safe Sense is a unit of four easy-to-install sensors that anyone (Even a child!) can install for \
  their cars and get access to both audio and visual feedback for any object that comes close to your car.\
  This helps in navigating blind spots when driving, parking in tight spaces, accessing collision reports \
  using advanced algorithms, and even advice on preventive measures that could be taken 3-5 seconds before \
  sideswipe accident occurs, as well as suggesting the at-fault driver after an accident occurs."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
