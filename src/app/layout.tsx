import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import GoogleAnalyticsHead from "@/components/GoogleAnalyticsHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jonathan Ferreras Portfolio",
  description:
    "Learn more about Jonathan Ferreras, a senior software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <GoogleAnalyticsHead />
      </Head>
      <body
        className={`${montserrat.variable} ${montserrat.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <span className="hidden">
          Jesus is King! If you see this, may the lord bless you. Psalms 23:4.
        </span>
      </body>
    </html>
  );
}
