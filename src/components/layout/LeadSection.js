"use client";

export default function LeadSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Seção principal */}
      <div className="relative bg-luxury-cream">
        
        <div className="relative z-10 p-5 pb-2 md:px-[15vw] lg:px-[20vw] md:pt-16 md:pb-4 w-full flex flex-col justify-center items-center pt-12 pb-4">
          <div className="w-px h-12 bg-warm-lamp mx-auto mb-8 lamp-glow"></div>
          
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

      {/* Faixa assimétrica com citação */}
      <div className="relative w-full overflow-hidden">
        {/* Faixa preta assimétrica */}
        <div 
          className="relative bg-luxury-charcoal text-white py-12 px-6"
          style={{
            clipPath: 'polygon(0 15%, 100% 0%, 100% 85%, 0% 100%)',
            transform: 'skewY(-1deg)',
          }}
        >
          {/* Conteúdo da faixa */}
          <div 
            className="max-w-5xl mx-auto text-center"
            style={{ transform: 'skewY(1deg)' }}
          >
            {/* Label superior */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-8 h-px bg-warm-lamp mr-3 opacity-80"></div>
              <span className="text-warm-lamp font-medium label-luxury tracking-widest">
                RECONHECIMENTO
              </span>
              <div className="w-8 h-px bg-warm-lamp ml-3 opacity-80"></div>
            </div>
            
            {/* Citação principal */}
            <blockquote className="text-white text-luxury text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto mb-6">
              <span className="text-3xl text-warm-lamp font-serif">"</span>
              <span className="font-light tracking-wide px-2">
                Uma imobiliária como nenhuma outra, a Alpha Imobiliária oferece os imóveis 
                mais incríveis e bem localizados em Fortaleza e região metropolitana
              </span>
              <span className="text-3xl text-warm-lamp font-serif">"</span>
            </blockquote>
            
            {/* Citação fonte */}
            <cite className="block text-warm-lamp font-medium text-base tracking-wide">
              — Diário do Nordeste
            </cite>
            
            {/* Elementos decorativos */}
            <div className="flex justify-center mt-8">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-warm-lamp to-transparent opacity-60"></div>
            </div>
          </div>
          
          {/* Efeitos visuais sutis */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-luxury-charcoal/90 via-luxury-charcoal to-luxury-charcoal/90 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-warm-lamp/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-warm-lamp/5 rounded-full blur-2xl"></div>
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