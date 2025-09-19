"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
    title: "Encontre Seu Lar Ideal",
    subtitle: "Imóveis exclusivos em Fortaleza e região metropolitana",
    cta: "Ver Imóveis"
  },
  {
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1920&q=80",
    title: "Excelência em Negociação",
    subtitle: "Mais de 10 anos conectando pessoas aos seus sonhos",
    cta: "Nossos Serviços"
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
    title: "Avaliação Gratuita",
    subtitle: "Descubra o valor real do seu imóvel com nossa equipe especializada",
    cta: "Avaliar Imóvel"
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
      ))}

      {/* Conteúdo */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="w-px h-16 bg-warm-lamp mb-8 lamp-glow"></div>
            <h1 className="text-5xl lg:text-6xl font-display font-light text-white mb-6 leading-tight">
              {heroSlides[current].title}
            </h1>
            <p className="text-xl text-white/90 mb-10 leading-relaxed font-light">
              {heroSlides[current].subtitle}
            </p>
            <Link
              href="/dashboard/properties"
              className="btn-luxury px-8 py-4 btn-text-luxury inline-flex items-center gap-2"
            >
              {heroSlides[current].cta}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-8 left-6 lg:left-8 flex gap-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-12 h-1 transition-all duration-300 ${
              index === current ? "bg-warm-lamp" : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Navegação */}
      <div className="absolute right-6 lg:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
        <button
          onClick={() => setCurrent(current === 0 ? heroSlides.length - 1 : current - 1)}
          className="w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300 flex items-center justify-center"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
        <button
          onClick={() => setCurrent((current + 1) % heroSlides.length)}
          className="w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300 flex items-center justify-center"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
}