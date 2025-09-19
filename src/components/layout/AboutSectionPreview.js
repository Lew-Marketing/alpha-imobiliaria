"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutSectionPreview() {
  return (
    <section className="w-full relative overflow-hidden">
      
      {/* Linha separadora luxuosa */}
      <div className="w-full py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-center">
          <div className="flex items-center w-full max-w-md">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-luxury-gray/30 to-luxury-gray/60"></div>
            <div className="mx-6">
              <div className="w-2 h-2 bg-warm-lamp rounded-full lamp-glow"></div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-luxury-gray/60 via-luxury-gray/30 to-transparent"></div>
          </div>
        </div>
      </div>
      
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
      <div className="bg-white py-20 px-6">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Linha minimalista */}
          <div className="w-px h-16 bg-warm-lamp mx-auto mb-12 lamp-glow"></div>
          
          {/* Citação limpa */}
          <blockquote className="text-luxury-charcoal text-luxury text-2xl lg:text-3xl leading-relaxed mb-8">
            <span className="font-light tracking-wide">
              Confiança, transparência e excelência no mercado imobiliário desde 2014
            </span>
          </blockquote>
          
          {/* Fonte simples */}
          <cite className="block text-warm-lamp font-medium text-base tracking-wide alpha-brand mb-12">
            — <span className="alpha-a">A</span>lpha Conceito Imobiliária
          </cite>
          
          {/* Botão minimalista */}
          <Link
            href="/dashboard/about"
            className="inline-block text-luxury-charcoal hover:text-warm-lamp font-medium text-base tracking-wide transition-colors duration-300 border-b border-luxury-charcoal hover:border-warm-lamp pb-1"
          >
            Conheça Nossa História
          </Link>
          
        </div>
      </div>
    </section>
  );
}