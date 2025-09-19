"use client";
import Link from "next/link";

export default function AboutHighlight() {
  return (
    <section className="opacity-100 transition duration-[900ms] ease-[cubic-bezier(0.17,0.55,0.55,1)] delay-[200ms]">
      <div className="relative p-5 py-10 pb-8 lg:pb-10 flex items-center justify-center flex-col overflow-hidden">
        {/* Background elegante */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/80" />
        
        <div className="relative z-10 text-center">
          <div className="w-px h-8 bg-warm-lamp mx-auto mb-4 lamp-glow"></div>
          
          {/* Card com backdrop blur para destaque */}
          <div className="bg-white/15 backdrop-blur-lg border border-white/25 rounded-lg p-6 shadow-2xl max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-center mb-3">
              <div className="w-8 h-px bg-warm-lamp mr-3"></div>
              <span className="text-warm-lamp font-medium text-xs uppercase tracking-widest">Reconhecimento</span>
              <div className="w-8 h-px bg-warm-lamp ml-3"></div>
            </div>
            <blockquote className="text-white font-light text-lg lg:text-xl text-center leading-relaxed">
              <span className="text-xl text-warm-lamp">"</span>
              <span className="px-2">Referência em excelência imobiliária</span>
              <span className="text-xl text-warm-lamp">"</span>
            </blockquote>
            <cite className="block text-center mt-3 text-warm-lamp/90 font-medium text-sm">
              — Mercado Imobiliário CE
            </cite>
          </div>
          
          <Link
            href="/dashboard/sell"
            className="inline-block bg-white text-luxury-charcoal px-8 py-4 font-semibold text-sm uppercase tracking-widest hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Avalie Seu Imóvel Gratuitamente
          </Link>
        </div>
      </div>

      {/* Ondinha decorativa */}
      <div className="w-full">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100%"
          height="100%"
          viewBox="0 0 1280 50"
          preserveAspectRatio="none"
          className="bg-luxury-cream w-full h-[50px] will-change-transform"
        >
          <polygon
            className="fill-luxury-charcoal hidden lg:block"
            points="0,0 0,6.1 310.9,16.8 331,19.5 353,18.2 952.1,38.8 984.1,37.8 1047,43 1280,50 1280,0"
          ></polygon>
          <polygon
            className="fill-luxury-charcoal lg:hidden block"
            points="0,0 0,3 310.9,8.4 331,9.75 353,9.1 952.1,19.4 984.1,18.9 1047,21.5 1280,25 1280,0"
          ></polygon>
        </svg>
      </div>
    </section>
  );
}