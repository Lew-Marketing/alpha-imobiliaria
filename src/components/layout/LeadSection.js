"use client";

export default function LeadSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Seção principal */}
      <div className="relative bg-luxury-cream">
        
        <div className="relative z-10 p-5 pb-2 md:px-[15vw] lg:px-[20vw] md:pt-16 md:pb-8 w-full flex flex-col justify-center items-center pt-12 pb-8">
          <div className="w-px h-12 bg-warm-lamp mx-auto mb-8 lamp-glow"></div>
          
          {/* Card elegante com fundo claro */}
          <div className="bg-white/90 backdrop-blur-sm border border-warm-lamp/20 rounded-premium p-8 shadow-lg max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-px bg-warm-lamp mr-4 opacity-60"></div>
              <span className="text-warm-lamp font-medium label-luxury">Excelência Imobiliária</span>
              <div className="w-12 h-px bg-warm-lamp ml-4 opacity-60"></div>
            </div>
            <blockquote className="text-luxury-charcoal text-luxury text-lg lg:text-xl text-center leading-relaxed">
              <span className="text-2xl text-warm-lamp">"</span>
              <span className="px-2">
                Uma imobiliária como nenhuma outra, a Alpha Imobiliária oferece os imóveis 
                mais incríveis e bem localizados em Fortaleza e região metropolitana
              </span>
              <span className="text-2xl text-warm-lamp">"</span>
            </blockquote>
            <cite className="block text-center mt-4 text-warm-lamp font-medium text-sm tracking-wide">
              — Diário do Nordeste
            </cite>
          </div>
          
          <div className="mt-8">
            <a 
              className="btn-luxury px-8 py-4 btn-text-luxury"
              href="/dashboard/contact"
            >
              Avaliação Gratuita do Imóvel
            </a>
          </div>
        </div>
      </div>

      {/* Divisor ondulado */}
      <div className="w-full">
        <svg 
          version="1.1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1280 50"
          className="w-full h-[50px]"
        >
          <polygon 
            className="fill-white hidden lg:block" 
            points="0,0 0,6.1 310.9,16.8 331,19.5 353,18.2 952.1,38.8 984.1,37.8 1047,43 1280,50 1280,0"
          />
          <polygon 
            className="fill-white lg:hidden block" 
            points="0,0 0,3 310.9,8.4 331,9.75 353,9.1 952.1,19.4 984.1,18.9 1047,21.5 1280,25 1280,0"
          />
        </svg>
      </div>
    </div>
  );
}