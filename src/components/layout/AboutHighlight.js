"use client";
import Link from "next/link";

export default function AboutHighlight() {
  return (
    <section className="relative overflow-hidden">
      {/* Seção com fundo escuro assimétrico */}
      <div 
        className="relative bg-luxury-charcoal text-white py-20 px-6"
        style={{
          clipPath: 'polygon(0 10%, 100% 0%, 100% 90%, 0% 100%)',
        }}
      >
        {/* Efeitos visuais de fundo */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-warm-lamp/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-warm-lamp/5 rounded-full blur-2xl"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-charcoal via-luxury-charcoal/95 to-luxury-gray/90"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Linha decorativa superior */}
          <div className="w-px h-16 bg-warm-lamp mx-auto mb-8 lamp-glow"></div>
          
          {/* Label superior */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-px bg-warm-lamp mr-4 opacity-80"></div>
            <span className="text-warm-lamp font-medium label-luxury tracking-widest">
              RECONHECIMENTO
            </span>
            <div className="w-12 h-px bg-warm-lamp ml-4 opacity-80"></div>
          </div>
          
          {/* Citação principal com design elegante */}
          <div className="mb-10">
            <blockquote className="text-white text-luxury text-2xl lg:text-3xl leading-relaxed max-w-3xl mx-auto mb-6">
              <span className="text-4xl text-warm-lamp font-serif leading-none">"</span>
              <span className="font-light tracking-wide px-2">
                Referência em excelência imobiliária
              </span>
              <span className="text-4xl text-warm-lamp font-serif leading-none">"</span>
            </blockquote>
            
            {/* Citação fonte */}
            <cite className="block text-warm-lamp font-medium text-base tracking-wide">
              — Mercado Imobiliário CE
            </cite>
          </div>
          
          {/* Botão destacado */}
          <div className="pt-4">
            <Link
              href="/dashboard/sell"
              className="inline-block bg-warm-lamp text-luxury-charcoal hover:bg-warm-lamp/90 px-10 py-4 rounded-premium font-medium text-base tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Avalie Seu Imóvel Gratuitamente
            </Link>
          </div>
          
          {/* Linha decorativa inferior */}
          <div className="flex justify-center mt-10">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-warm-lamp to-transparent opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}