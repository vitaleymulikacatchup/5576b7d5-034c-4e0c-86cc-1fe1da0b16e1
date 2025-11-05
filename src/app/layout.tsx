import type { Metadata } from "next";
import {
  Inter_Tight,
  Playfair_Display,
  Roboto,
  Open_Sans,
  Lato,
  Montserrat,
  Poppins,
  Raleway,
  Ubuntu,
  Nunito
} from "next/font/google";
import "./globals.css";
import { PostHogWrapper } from "@/components/PostHogWrapper";
import Tag from "@/tag/Tag";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Idan Zeidman - Full-Stack Developer & UI Designer",
  description: "Professional portfolio of Idan Zeidman - Expert full-stack developer and UI designer creating exceptional digital experiences with modern web technologies.",
  keywords: "Idan Zeidman, full-stack developer, UI designer, web development, React, Next.js, portfolio",
  metadataBase: new URL("https://idanzeidman.com"),
  alternates: {
    canonical: "https://idanzeidman.com"
  },
  openGraph: {
    title: "Idan Zeidman - Full-Stack Developer & UI Designer",
    description: "Professional portfolio showcasing web development and UI design expertise",
    url: "https://idanzeidman.com",
    siteName: "Idan Zeidman Portfolio",
    type: "website",
    images: [{
      url: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      alt: "Idan Zeidman's development workspace"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Idan Zeidman - Full-Stack Developer & UI Designer",
    description: "Professional portfolio showcasing web development and UI design expertise",
    images: ["https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"]
  },
  robots: {
    index: true,
    follow: true
  }
};