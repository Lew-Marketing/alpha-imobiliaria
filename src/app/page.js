"use client";
import HeroCarousel from "../components/layout/HeroCarousel";
import FeaturedSales from "../components/layout/FeaturedSales";
import AboutHighlight from "../components/layout/AboutHighlight";
import AboutSectionPreview from "../components/layout/AboutSectionPreview";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroCarousel />
      <FeaturedSales />
      <AboutHighlight />
      <AboutSectionPreview />
    </div>
  );
}