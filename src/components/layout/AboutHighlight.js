export default function AboutHighlight() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Fundo luxuoso com gradientes premium */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50"></div>
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(101, 67, 33, 0.06) 0%, transparent 50%),
            linear-gradient(45deg, rgba(212, 175, 55, 0.03) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(184, 134, 11, 0.03) 25%, transparent 25%)
          `,
          backgroundSize: '80px 80px, 120px 120px, 60px 60px, 60px 60px'
        }}
      ></div>
      
      {/* Overlay de luxo */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-stone-100/30 to-transparent"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Conteúdo Premium */}
          <div className="text-center lg:text-left">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-amber-100 to-yellow-50 border border-amber-200/50 rounded-full mb-8 shadow-sm">
              <span className="text-amber-900 text-sm font-medium tracking-widest uppercase">
                Tradição & Excelência
              </span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-serif font-light mb-8 leading-tight">
              <span className="block text-slate-800">Mais de</span>
              <span className="block text-amber-700 font-medium">10 Anos</span>
            </h2>
            
            <div className="w-20 h-0.5 bg-gradient-to-r from-amber-600 to-yellow-600 mb-8 mx-auto lg:mx-0 shadow-sm"></div>
            
            <p className="text-xl text-slate-700 mb-10 leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
              Referência em <strong className="text-slate-900 font-medium">transparência</strong> e 
              <strong className="text-slate-900 font-medium"> resultados excepcionais</strong> no mercado imobiliário.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/dashboard/about"
                className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-8 py-4 rounded-lg font-medium text-sm tracking-wide hover:from-amber-700 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Nossa História
              </a>
              <a
                href="/dashboard/contact"
                className="border-2 border-amber-600 text-amber-700 px-8 py-4 rounded-lg font-medium text-sm tracking-wide hover:bg-amber-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Fale Conosco
              </a>
            </div>
          </div>

          {/* Estatísticas Luxuosas */}
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center group">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-stone-200/50 hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                <div className="text-4xl font-light text-amber-700 mb-3">500+</div>
                <div className="text-slate-600 text-sm font-medium tracking-wide">Imóveis Vendidos</div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-stone-200/50 hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                <div className="text-4xl font-light text-amber-700 mb-3">1000+</div>
                <div className="text-slate-600 text-sm font-medium tracking-wide">Clientes Satisfeitos</div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-stone-200/50 hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                <div className="text-4xl font-light text-amber-700 mb-3">2014</div>
                <div className="text-slate-600 text-sm font-medium tracking-wide">Fundada</div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-stone-200/50 hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                <div className="text-4xl font-light text-amber-700 mb-3">98%</div>
                <div className="text-slate-600 text-sm font-medium tracking-wide">Aprovação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}