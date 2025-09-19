"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutSectionPreview() {
  return (
    <section className="w-full relative overflow-hidden">
      {/* Background elegante */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-luxury-cream/95 via-luxury-cream/90 to-luxury-cream/85" />
      
      {/* Texto + Imagem */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-[12vw] py-16">
        <div>
          <div className="w-px h-12 bg-warm-lamp mb-6 lamp-glow"></div>
          <p className="text-lg md:text-xl font-light text-luxury-charcoal leading-relaxed text-luxury-light">
            "A Alpha Conceito nasceu em 2014 com o compromisso de oferecer um
            atendimento transparente, ético e personalizado no mercado
            imobiliário de Fortaleza. Nosso foco é garantir negociações seguras
            e sólidas, sempre com profissionalismo e dedicação aos clientes."
          </p>
          <p className="mt-6 font-semibold text-sm uppercase tracking-widest text-luxury-gray label-luxury">
            — Alpha Conceito Imobiliária
          </p>
        </div>
        <div className="relative w-full h-[700px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/images/about-vertical.jpg"
            alt="Equipe Alpha Conceito"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Faixa com fundo + texto */}
      <div className="relative w-full h-[400px] flex items-center justify-center text-center px-6 overflow-hidden">
        <Image
          src="/images/about-background.jpg"
          alt="Fachada Alpha Conceito"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/85" />
        
        <div className="relative z-10 text-center">
          <div className="w-px h-12 bg-warm-lamp mx-auto mb-6 lamp-glow"></div>
          
          {/* Card com backdrop blur para máxima legibilidade */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-8 shadow-2xl max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-px bg-warm-lamp mr-4"></div>
              <span className="text-warm-lamp font-medium text-xs uppercase tracking-widest">Nossa Essência</span>
              <div className="w-12 h-px bg-warm-lamp ml-4"></div>
            </div>
            <blockquote className="text-white font-light text-xl lg:text-2xl text-center leading-relaxed">
              <span className="text-2xl text-warm-lamp">"</span>
              <span className="px-2">
                Confiança, transparência e excelência no mercado imobiliário desde 2014
              </span>
              <span className="text-2xl text-warm-lamp">"</span>
            </blockquote>
            <cite className="block text-center mt-4 text-warm-lamp/90 font-medium text-sm tracking-wide">
              — Alpha Conceito Imobiliária
            </cite>
          </div>
          
          <Link
            href="/dashboard/about"
            className="inline-block bg-warm-lamp text-luxury-charcoal px-8 py-4 font-semibold text-sm uppercase tracking-widest hover:bg-warm-lamp/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Conheça Nossa História
          </Link>
        </div>
      </div>
    </section>
  );
}
