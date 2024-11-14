import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inerpulse LLP - Empowering SMBs with Seamless ERP Solutions",
  description: "Discover Odoo-powered ERP solutions tailored for small and medium businesses. Inerpulse LLP transforms operations with streamlined processes and enhanced efficiency.",
  keywords: "Odoo ERP, ERP solutions for SMBs, Inerpulse LLP, business automation, digital transformation, scalable ERP, efficient business solutions",
  author: "Inerpulse LLP",
  openGraph: {
    title: "Inerpulse LLP - Your Partner in Digital Transformation",
    description: "Unlock growth with Inerpulse LLP's custom ERP solutions, designed to scale with your business needs.",
    url: "https://inerpulse.com",
    type: "website",
    images: [
      {
        url: "https://www.inerpulse.com/images/logo/logo.png", // Use an appropriate OG image URL
        width: 1200,
        height: 630,
        alt: "Inerpulse LLP - ERP Solutions",
      },
    ],
  },
};


export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
}
