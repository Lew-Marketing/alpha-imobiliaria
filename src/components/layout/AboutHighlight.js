export default function AboutHighlight() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-stone-50 via-amber-50/30 to-yellow-50/20">
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        
        {/* Texto Principal Elegante */}
        <div className="mb-16">
          <div className="text-sm font-medium text-amber-700 tracking-[0.2em] uppercase mb-8 font-serif">
            Tradição & Excelência
          </div>
          
          <h2 className="text-6xl lg:text-7xl font-serif font-light text-slate-800 mb-8 leading-tight">
            Mais de
            <span className="block text-amber-700 font-normal">10 Anos</span>
          </h2>
          
          <p className="text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Referência em <span className="text-slate-800 font-medium">transparência</span> e 
            <span className="text-slate-800 font-medium"> resultados excepcionais</span> no mercado imobiliário.
          </p>
        </div>

        {/* Botões Sutis */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
          <a
            href="/dashboard/about"
            className="text-slate-700 hover:text-amber-700 font-serif text-lg tracking-wide transition-colors duration-300 border-b border-slate-300 hover:border-amber-700 pb-1"
          >
            Nossa História
          </a>
          <a
            href="/dashboard/contact"
            className="text-slate-700 hover:text-amber-700 font-serif text-lg tracking-wide transition-colors duration-300 border-b border-slate-300 hover:border-amber-700 pb-1"
          >
            Fale Conosco
          </a>
        </div>

        {/* Estatísticas Elegantes */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="text-center">
            <div className="text-4xl font-serif font-light text-amber-700 mb-2">500+</div>
            <div className="text-sm text-slate-600 font-light tracking-wide">Imóveis Vendidos</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-serif font-light text-amber-700 mb-2">1000+</div>
            <div className="text-sm text-slate-600 font-light tracking-wide">Clientes Satisfeitos</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-serif font-light text-amber-700 mb-2">2014</div>
            <div className="text-sm text-slate-600 font-light tracking-wide">Fundada</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-serif font-light text-amber-700 mb-2">98%</div>
            <div className="text-sm text-slate-600 font-light tracking-wide">Aprovação</div>
          </div>
        </div>
      </div>
    </section>
  );
}