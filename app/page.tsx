import { SwipeCarousel } from "@/components/SwipeCarousel";
import Features from "@/components/features";
import Hero from "@/components/hero";
import React from "react";
import Hero2 from "@/components/footer_page";
import HoverDevCards from "@/components/howercard";
import Products from "@/components/products";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { LayoutGridDemo } from "@/components/layout-card";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <div className="w-full items-center justify-center">
      <Hero />
      <InfiniteMovingCards
        items={[
          { imgSrc: "/buliding.png", companyName: "Company 1" },
          { imgSrc: "/logo.png", companyName: "Company 2" },
          { imgSrc: "/windows.jpeg", companyName: "Company 3" },
        ]}
        direction="left"
        speed="fast"
        pauseOnHover={true}
        className="additional-css-class"
      />
      <SwipeCarousel />
      <Features />
      {/* <LayoutGridDemo /> */}

      <Products />
      <Testimonial />
      <HoverDevCards />
      <Hero2 />
    </div>
  );
}
