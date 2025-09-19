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
      <div className="relative w-full py-20 flex items-center justify-center text-center px-6 overflow-hidden bg-luxury-cream">
        
        <div className="text-center">
          <div className="w-px h-12 bg-warm-lamp mx-auto mb-6 lamp-glow"></div>
          
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
