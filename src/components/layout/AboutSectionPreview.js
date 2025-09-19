"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutSectionPreview() {
  return (
    <section className="py-24 bg-gradient-to-br from-amber-50/30 via-yellow-50/20 to-orange-50/25">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Imagem */}
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden rounded-lg shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80"
                alt="Alpha Imobiliária - Equipe"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-warm-lamp/20 rounded-lg -z-10"></div>
          </div>

          {/* Conteúdo */}
          <div>
            <div className="w-1 h-12 bg-warm-lamp mb-8"></div>
            <h2 className="text-4xl font-display font-light text-luxury-charcoal mb-8 leading-tight">
              Compromisso com a
              <span className="block text-warm-lamp">Excelência</span>
            </h2>
            <div className="space-y-6 text-lg text-luxury-gray leading-relaxed font-light">
              <p>
                A Alpha Imobiliária nasceu em 2014 com o compromisso de oferecer um
                atendimento transparente, ético e personalizado no mercado
                imobiliário de Fortaleza.
              </p>
              <p>
                Nosso foco é garantir negociações seguras e sólidas, sempre com
                profissionalismo e dedicação aos nossos clientes, construindo
                relacionamentos duradouros baseados na confiança.
              </p>
            </div>
            
            {/* Valores */}
            <div className="grid grid-cols-2 gap-6 mt-10 mb-10">
              <div className="text-center p-6 bg-white/60 rounded-lg">
                <div className="text-2xl font-display text-warm-lamp mb-2">Ética</div>
                <div className="text-sm text-luxury-gray font-light">Transparência total</div>
              </div>
              <div className="text-center p-6 bg-white/60 rounded-lg">
                <div className="text-2xl font-display text-warm-lamp mb-2">Confiança</div>
                <div className="text-sm text-luxury-gray font-light">Relacionamentos sólidos</div>
              </div>
            </div>

            <Link
              href="/dashboard/about"
              className="inline-flex items-center gap-3 text-luxury-charcoal hover:text-warm-lamp font-medium tracking-wide transition-colors duration-300 border-b border-luxury-charcoal hover:border-warm-lamp pb-1"
            >
              Conheça Nossa História Completa
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}