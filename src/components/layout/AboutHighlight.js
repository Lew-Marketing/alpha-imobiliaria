"use client";
import Link from "next/link";

export default function AboutHighlight() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Fundo madeirado fosco */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"></div>
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(160, 82, 45, 0.08) 0%, transparent 50%),
            linear-gradient(45deg, rgba(210, 180, 140, 0.05) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(222, 184, 135, 0.05) 25%, transparent 25%)
          `,
          backgroundSize: '60px 60px, 80px 80px, 40px 40px, 40px 40px'
        }}
      ></div>
      
      {/* Textura madeira sutil */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-100/20 to-transparent"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Conteúdo */}
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-amber-100/60 rounded-full mb-6">
              <span className="text-amber-800 text-sm font-medium tracking-wide uppercase">
                Tradição & Excelência
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-serif font-light mb-6 leading-tight text-amber-900">
              <span className="block">Mais de</span>
              <span className="block text-amber-700 font-medium">10 Anos</span>
            </h2>
            
            <div className="w-16 h-0.5 bg-amber-600 mb-6 mx-auto lg:mx-0"></div>
            
            <p className="text-lg text-amber-800/80 mb-8 leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
              Referência em <strong className="text-amber-900">transparência</strong> e 
              <strong className="text-amber-900"> resultados excepcionais</strong> no mercado imobiliário.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/dashboard/about"
                className="bg-amber-700 text-amber-50 px-6 py-3 rounded-lg font-medium text-sm tracking-wide hover:bg-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Nossa História
              </Link>
              <Link
                href="/dashboard/contact"
                className="border-2 border-amber-700 text-amber-700 px-6 py-3 rounded-lg font-medium text-sm tracking-wide hover:bg-amber-700 hover:text-amber-50 transition-all duration-300"
              >
                Fale Conosco
              </Link>
            </div>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-amber-200/50 hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-light text-amber-800 mb-2">500+</div>
                <div className="text-amber-700/80 text-sm font-medium">Imóveis Vendidos</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-amber-200/50 hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-light text-amber-800 mb-2">1000+</div>
                <div className="text-amber-700/80 text-sm font-medium">Clientes Satisfeitos</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-amber-200/50 hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-light text-amber-800 mb-2">2014</div>
                <div className="text-amber-700/80 text-sm font-medium">Fundada</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-amber-200/50 hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-light text-amber-800 mb-2">98%</div>
                <div className="text-amber-700/80 text-sm font-medium">Aprovação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}