  "use client";

  export default function LeadSection() {
    return (
      <div className="relative overflow-hidden">
        {/* Seção principal */}
        <div className="relative">
          {/* Background elegante */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-charcoal/85 via-luxury-gray/75 to-luxury-charcoal/90" />
          
          <div className="relative z-10 p-5 pb-2 md:px-[15vw] lg:px-[20vw] md:pt-12 md:pb-4 w-full flex flex-col justify-center items-center pt-8 pb-2">
            <div className="w-px h-12 bg-warm-lamp mx-auto mb-6 lamp-glow"></div>
            
            <p className="text-pearl-white font-light text-base lg:text-lg w-full text-center leading-relaxed drop-shadow-lg text-luxury-light">
              "Uma imobiliária como nenhuma outra, a Alpha Imobiliária oferece os imóveis mais incríveis e bem localizados em Fortaleza e região metropolitana" — <span className="italic font-medium">Diário do Nordeste</span>
            </p>
            
            <a 
              className="btn-luxury px-6 py-3 btn-text-luxury mt-6"
              href="/dashboard/contact"
            >
              Avaliação gratuita do imóvel
            </a>
          </div>
        </div>

        {/* Divisor ondulado */}
        <div className="w-full">
          <svg 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg" 
          {/* Card com backdrop blur para máxima legibilidade */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-8 shadow-2xl max-w-4xl mx-auto">
            <blockquote className="text-white font-light text-lg lg:text-xl text-center leading-relaxed">
              <span className="text-2xl text-warm-lamp">"</span>
              <span className="px-2">
                Excelência em cada negócio, confiança em cada relacionamento. 
                A Alpha Imobiliária conecta você ao seu lar dos sonhos em Fortaleza 
                e região metropolitana.
              </span>
              <span className="text-2xl text-warm-lamp">"</span>
            </blockquote>
            <cite className="block text-center mt-4 text-warm-lamp/90 font-medium text-sm tracking-wide">
              — Sua nova jornada imobiliária começa aqui
            </cite>
          </div>
            height="100%" 
          <div className="mt-8">
            <a 
            className="inline-block bg-warm-lamp text-luxury-charcoal px-8 py-4 font-semibold text-sm uppercase tracking-widest hover:bg-warm-lamp/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            className="bg-muted w-full h-[50px]"
            <polygon 
              className="fill-luxury-cream hidden lg:block" 
              points="0,0 0,6.1 310.9,16.8 331,19.5 353,18.2 952.1,38.8 984.1,37.8 1047,43 1280,50 1280,0"
            />
            <polygon 
              className="fill-luxury-cream lg:hidden block" 
              points="0,0 0,3 310.9,8.4 331,9.75 353,9.1 952.1,19.4 984.1,18.9 1047,21.5 1280,25 1280,0"
            >
              Descubra o Valor do Seu Imóvel
            </a>
          </div>
        </div>
      </div>
    );
  }