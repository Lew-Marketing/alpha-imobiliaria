"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg"
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload images for smoother transitions
    const preloadImages = () => {
      images.forEach((src) => {
        const img = new window.Image();
        img.src = src;
      });
      setIsLoaded(true);
    };
    
    preloadImages();
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // Slightly longer for smoother experience
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] max-h-[600px] overflow-hidden will-change-transform">
  
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1200 ease-in-out will-change-transform ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="flex flex-col lg:flex-row w-full h-full">
            <div className="lg:w-3/5 w-full h-1/2 lg:h-full relative">
              <Image
                src={src}
                alt={`Propriedade ${index + 1}`}
                fill
                className="object-cover will-change-transform"
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                quality={85}
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent lg:to-black/5"></div>

              {/* Indicators */}
              <div className="absolute bottom-6 left-6 flex gap-2 z-20">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-8 h-1 transition-all duration-500 ease-out ${
                      i === current ? "bg-white" : "bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Ir para slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

           
            <div className="lg:w-2/5 w-full h-1/2 lg:h-full flex flex-col justify-center bg-background px-8 lg:px-12 py-8">
              <div className="space-y-4 max-w-md">
                <p className="text-luxury-gray font-light text-sm uppercase tracking-widest">
                  Today at Alpha Imobiliária
                </p>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-light text-luxury-charcoal leading-tight tracking-wide">
                  Conte com a Alpha Imobiliária
                </h2>

                <p className="text-base lg:text-lg font-light text-luxury-gray leading-relaxed tracking-wide">
                  Compromisso em proporcionar a melhor moradia com o melhor preço para sua família.
                </p>

                <div className="pt-2">
                  <Link 
                    href="/dashboard/properties"
                    className="inline-flex items-center gap-2 bg-warm-lamp text-luxury-charcoal px-8 py-3 rounded-lg font-medium text-sm tracking-wide hover:bg-warm-lamp/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    Ver Imóveis
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}