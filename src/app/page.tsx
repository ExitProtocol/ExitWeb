import Image from "next/image";
import { Header } from "@/app/sections/Header";
import { Hero } from "@/app/sections/Hero";
import { LogoTicker } from "@/app/sections/LogoTicker";
import { ProductShowcase } from "@/app/sections/ProductShowcase";
import { Pricing } from "@/app/sections/Pricing";
import { Testimonials } from "@/app/sections/Testimonials";
import { CallToAction } from "@/app/sections/CallToAction";
import { Footer } from "@/app/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}