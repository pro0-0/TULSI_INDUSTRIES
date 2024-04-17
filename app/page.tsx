import { SwipeCarousel } from "@/components/SwipeCarousel";
import Features from "@/components/features";
import Hero from "@/components/hero";
import React from "react";
import Hero2 from "@/components/footer_page";
import HoverDevCards from "@/components/howercard";
import Products from "@/components/products";

export default function Home() {
  return (
    <div className="w-full items-center justify-center">
      {/* <Carouselpage /> */}
      <Hero />
      {/* <Hero2 /> */}
      <SwipeCarousel />
      <Features />
      <Products />
      <HoverDevCards />
      <Hero2 />
    </div>
  );
}
