"use client";
import Link from "next/link";

export default function AboutHighlight() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-charcoal via-gray-900 to-black"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-warm-lamp/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-warm-lamp/15 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Conteúdo */}
          <div className="text-white">
            <div className="flex items-center mb-8">
              <div className="w-16 h-px bg-warm-lamp mr-4 lamp-glow"></div>
              <span className="text-warm-lamp font-medium text-sm tracking-widest uppercase">
                Tradição & Confiança
              </span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-display font-light mb-6 leading-tight">
              <span className="block text-white/90">Mais de</span>
              <span className="block text-warm-lamp font-medium">10 Anos</span>
              <span className="block text-white/90">de Excelência</span>
            </h2>
            
            <div className="w-24 h-1 bg-warm-lamp mb-8 rounded-full"></div>
            
            <p className="text-xl text-white/80 mb-10 leading-relaxed font-light max-w-lg">
              Desde <strong className="text-warm-lamp">2014</strong>, a Alpha Imobiliária é 
              <strong className="text-white"> referência absoluta</strong> em transparência, 
              ética e resultados excepcionais no mercado imobiliário de Fortaleza e região metropolitana.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/dashboard/about"
                className="btn-luxury px-8 py-4 btn-text-luxury transform hover:scale-105 transition-all duration-300"
              >
                Conheça Nossa História
              </Link>
              <Link
                href="/dashboard/contact"
                className="border-2 border-white/80 text-white px-8 py-4 btn-text-luxury hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
              >
                Entre em Contato
              </Link>
            </div>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-2 gap-8 lg:gap-12">
            <div className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-warm-lamp/30 transition-all duration-500 group-hover:transform group-hover:scale-105">
                <div className="text-6xl font-display font-light text-warm-lamp mb-4 group-hover:text-white transition-colors duration-300">500+</div>
                <div className="text-white/70 font-light tracking-wide text-sm uppercase mb-2">Imóveis</div>
                <div className="text-white font-medium">Vendidos</div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-warm-lamp/30 transition-all duration-500 group-hover:transform group-hover:scale-105">
                <div className="text-6xl font-display font-light text-warm-lamp mb-4 group-hover:text-white transition-colors duration-300">1000+</div>
                <div className="text-white/70 font-light tracking-wide text-sm uppercase mb-2">Clientes</div>
                <div className="text-white font-medium">Satisfeitos</div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-warm-lamp/30 transition-all duration-500 group-hover:transform group-hover:scale-105">
                <div className="text-6xl font-display font-light text-warm-lamp mb-4 group-hover:text-white transition-colors duration-300">10+</div>
                <div className="text-white/70 font-light tracking-wide text-sm uppercase mb-2">Anos de</div>
                <div className="text-white font-medium">Mercado</div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-warm-lamp/30 transition-all duration-500 group-hover:transform group-hover:scale-105">
                <div className="text-6xl font-display font-light text-warm-lamp mb-4 group-hover:text-white transition-colors duration-300">98%</div>
                <div className="text-white/70 font-light tracking-wide text-sm uppercase mb-2">Taxa de</div>
                <div className="text-white font-medium">Aprovação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}