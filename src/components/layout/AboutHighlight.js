"use client";
import Link from "next/link";

export default function AboutHighlight() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-yellow-500/10 rounded-full blur-2xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Conteúdo */}
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-display font-light mb-6 leading-tight">
              <span className="block text-amber-400">10 Anos</span>
              <span className="block text-white">de Excelência</span>
            </h2>
            
            <div className="w-16 h-0.5 bg-amber-400 mb-6"></div>
            
            <p className="text-lg text-white/80 mb-8 leading-relaxed font-light max-w-lg">
              Referência em <strong className="text-amber-400">transparência</strong> e 
              <strong className="text-white"> resultados excepcionais</strong> no mercado imobiliário de Fortaleza.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/dashboard/about"
                className="bg-amber-400 text-black px-6 py-3 font-medium text-sm tracking-wide uppercase hover:bg-amber-300 transition-all duration-300"
              >
                Nossa História
              </Link>
              <Link
                href="/dashboard/contact"
                className="border border-amber-400/60 text-amber-400 px-6 py-3 font-medium text-sm tracking-wide uppercase hover:bg-amber-400/10 transition-all duration-300"
              >
                Fale Conosco
              </Link>
            </div>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-amber-400/20">
                <div className="text-4xl font-light text-amber-400 mb-2">500+</div>
                <div className="text-white/80 text-sm">Imóveis Vendidos</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-amber-400/20">
                <div className="text-4xl font-light text-amber-400 mb-2">1000+</div>
                <div className="text-white/80 text-sm">Clientes Satisfeitos</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-amber-400/20">
                <div className="text-4xl font-light text-amber-400 mb-2">2014</div>
                <div className="text-white/80 text-sm">Fundada</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-amber-400/20">
                <div className="text-4xl font-light text-amber-400 mb-2">98%</div>
                <div className="text-white/80 text-sm">Aprovação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}