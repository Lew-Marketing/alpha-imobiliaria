"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutSectionPreview() {
  return (
    <section className="w-full relative overflow-hidden">
      
      {/* Texto + Imagem */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-[12vw] py-20 bg-white">
        <div>
          <div className="w-px h-12 bg-warm-lamp mb-6 lamp-glow"></div>
          <p className="text-lg md:text-xl text-luxury-light text-luxury-charcoal leading-relaxed">
            "A Alpha Conceito nasceu em 2014 com o compromisso de oferecer um
            atendimento transparente, ético e personalizado no mercado
            imobiliário de Fortaleza. Nosso foco é garantir negociações seguras
            e sólidas, sempre com profissionalismo e dedicação aos clientes."
          </p>
          <p className="mt-8 label-luxury text-luxury-gray">
            — Alpha Conceito Imobiliária
          </p>
        </div>
        <div className="relative w-full h-[600px] rounded-premium overflow-hidden shadow-lg">
          <Image
            src="/images/about-vertical.jpg"
            alt="Equipe Alpha Conceito"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Faixa com fundo + texto */}
      <div className="relative w-full overflow-hidden">
        {/* Background com padrão diagonal sutil */}
        <div 
          className="relative py-24 px-6"
          style={{
            background: `linear-gradient(135deg, 
              #faf9f7 0%, 
              #f5f2ed 25%, 
              #faf9f7 50%, 
              #f0ede8 75%, 
              #faf9f7 100%
            )`,
          }}
        >
          {/* Padrão geométrico sutil */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 20px,
                #d4af37 20px,
                #d4af37 21px
              )`
            }}
          />
        
          <div className="relative z-10 text-center max-w-5xl mx-auto">
            {/* Design em camadas com cards sobrepostos */}
            <div className="relative">
              {/* Card principal com elevação */}
              <div className="bg-white/90 backdrop-blur-sm border-2 border-warm-lamp/20 rounded-premium-lg p-12 shadow-2xl relative overflow-hidden">
                {/* Elemento decorativo interno */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-warm-lamp/5 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-warm-lamp/5 rounded-full blur-xl"></div>
                
                {/* Linha superior com design único */}
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-warm-lamp to-warm-lamp rounded-full mr-4"></div>
                  <div className="w-3 h-3 bg-warm-lamp rounded-full lamp-glow"></div>
                  <div className="w-16 h-0.5 bg-gradient-to-l from-transparent via-warm-lamp to-warm-lamp rounded-full ml-4"></div>
                </div>
                
                {/* Label diferenciado */}
                <div className="inline-block bg-warm-lamp/10 border border-warm-lamp/30 rounded-premium px-6 py-2 mb-8">
                  <span className="text-warm-lamp font-medium label-luxury tracking-widest">
                    NOSSA ESSÊNCIA
                  </span>
                </div>
                
                {/* Citação com design em camadas */}
                <div className="relative">
                  {/* Aspas decorativas grandes */}
                  <div className="absolute -top-4 -left-4 text-6xl text-warm-lamp/20 font-serif leading-none">"</div>
                  <div className="absolute -bottom-8 -right-4 text-6xl text-warm-lamp/20 font-serif leading-none rotate-180">"</div>
                  
                  <blockquote className="relative text-luxury-charcoal text-luxury text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto mb-8">
                    <span className="font-light tracking-wide">
                      Confiança, transparência e excelência no mercado imobiliário desde 2014
                    </span>
                  </blockquote>
                </div>
                
                {/* Citação fonte com design especial */}
                <div className="flex items-center justify-center mb-8">
                  <div className="w-8 h-px bg-warm-lamp/40 mr-3"></div>
                  <cite className="text-warm-lamp font-medium text-base tracking-wide alpha-brand">
                    <span className="alpha-a">A</span>lpha Conceito Imobiliária
                  </cite>
                  <div className="w-8 h-px bg-warm-lamp/40 ml-3"></div>
                </div>
                
                {/* Botão com design único */}
                <div className="relative">
                  <Link
                    href="/dashboard/about"
                    className="inline-block relative group"
                  >
                    {/* Sombra do botão */}
                    <div className="absolute inset-0 bg-luxury-charcoal rounded-premium-lg transform translate-y-2 group-hover:translate-y-1 transition-transform duration-300"></div>
                    
                    {/* Botão principal */}
                    <div className="relative bg-white border-2 border-luxury-charcoal text-luxury-charcoal hover:bg-luxury-charcoal hover:text-white px-10 py-4 rounded-premium-lg font-medium text-base tracking-wide transition-all duration-300 transform group-hover:-translate-y-1">
                      Conheça Nossa História
                    </div>
                  </Link>
                </div>
              </div>
              
              {/* Cards decorativos menores */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-warm-lamp/10 rounded-premium rotate-12 hidden lg:block"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-warm-lamp/10 rounded-premium -rotate-12 hidden lg:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
          
          {/* Card elegante com fundo claro */}
          <div className="bg-white/80 backdrop-blur-sm border border-warm-lamp/20 rounded-premium p-8 shadow-lg max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-px bg-warm-lamp mr-4 opacity-60"></div>
              <span className="text-warm-lamp font-medium label-luxury">Nossa Essência</span>
              <div className="w-12 h-px bg-warm-lamp ml-4 opacity-60"></div>
            </div>
            <blockquote className="text-luxury-charcoal text-luxury text-xl lg:text-2xl text-center leading-relaxed">
              <span className="text-2xl text-warm-lamp">"</span>
              <span className="px-2">
                Confiança, transparência e excelência no mercado imobiliário desde 2014
              </span>
              <span className="text-2xl text-warm-lamp">"</span>
            </blockquote>
            <cite className="block text-center mt-4 text-warm-lamp font-medium text-sm tracking-wide">
              — Alpha Conceito Imobiliária
            </cite>
          </div>
          
          <Link
            href="/dashboard/about"
            className="btn-luxury px-8 py-4 btn-text-luxury"
          >
            Conheça Nossa História
          </Link>
        </div>
      </div>
    </section>
  );
}
