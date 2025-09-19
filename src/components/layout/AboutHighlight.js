"use client";
import Link from "next/link";

export default function AboutHighlight() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-charcoal via-luxury-charcoal to-luxury-gray"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-warm-lamp/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-warm-lamp/10 rounded-full blur-2xl"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Conteúdo */}
          <div className="text-white">
            <div className="w-px h-12 bg-warm-lamp mb-8 lamp-glow"></div>
            <h2 className="text-4xl lg:text-5xl font-display font-light mb-8 leading-tight">
              Mais de 10 Anos de
              <span className="block text-warm-lamp">Excelência</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed font-light">
              Desde 2014, a Alpha Imobiliária tem sido referência em transparência, 
              ética e resultados excepcionais no mercado imobiliário de Fortaleza.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/dashboard/about"
                className="btn-luxury px-8 py-4 btn-text-luxury"
              >
                Nossa História
              </Link>
              <Link
                href="/dashboard/contact"
                className="border-2 border-white text-white px-8 py-4 btn-text-luxury hover:bg-white/10 transition-all duration-300"
              >
                Fale Conosco
              </Link>
            </div>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-5xl font-display font-light text-warm-lamp mb-4">500+</div>
              <div className="text-white/80 font-light tracking-wide">Imóveis Vendidos</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-display font-light text-warm-lamp mb-4">1000+</div>
              <div className="text-white/80 font-light tracking-wide">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-display font-light text-warm-lamp mb-4">10+</div>
              <div className="text-white/80 font-light tracking-wide">Anos de Mercado</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-display font-light text-warm-lamp mb-4">98%</div>
              <div className="text-white/80 font-light tracking-wide">Aprovação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}