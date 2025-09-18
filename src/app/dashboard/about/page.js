"use client";
import Image from "next/image";

const stats = [
  { number: "2014", label: "Fundada" },
  { number: "500+", label: "Imóveis" },
  { number: "1000+", label: "Clientes" },
  { number: "10+", label: "Anos" },
];

export default function Sobre() {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero sofisticado */}
      <section className="relative h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-charcoal/90 via-luxury-gray/70 to-transparent" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="w-px h-20 bg-warm-lamp mb-10 lamp-glow"></div>
            <h1 className="text-6xl title-display text-contrast-light mb-8 leading-tight alpha-brand">
              <span className="alpha-a">A</span>lpha<br />Conceito
            </h1>
            <p className="text-xl text-luxury-light leading-relaxed opacity-90 text-pearl-white">
              Confiança e excelência no mercado imobiliário desde 2014
            </p>
          </div>
        </div>
      </section>

      {/* Stats elegantes */}
      <section className="relative -mt-24 z-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="card-luxury rounded-lg p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl title-luxury text-contrast-high mb-3 lamp-accent">
                    {stat.number}
                  </div>
                  <div className="text-luxury-gray label-luxury">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="relative py-24 mt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-luxury-gray/80 via-background/95 to-pearl-white" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div>
                <div className="w-px h-12 bg-accent mb-6 lamp-glow"></div>
                <h2 className="text-4xl title-luxury text-contrast-high mb-6 leading-tight">
                  Nossa História
                </h2>
              </div>
              
              <div className="space-y-4 text-base text-luxury-gray leading-relaxed text-luxury-light">
                <p>
                  A Alpha Conceito iniciou suas atividades em 2014 com uma visão clara: 
                  construir uma história sólida e confiável no mercado imobiliário.
                </p>
                
                <p>
                  Nossa missão tem sido oferecer um atendimento diferenciado, baseado 
                  em ética, transparência e excelência.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="card-luxury rounded-lg p-6">
                <div className="aspect-[3/4] relative overflow-hidden rounded">
                  <Image
                    src="/images/about-vertical.jpg"
                    alt="Alpha Conceito"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="relative py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="w-px h-12 bg-warm-lamp mx-auto mb-6 lamp-glow"></div>
          <h2 className="text-4xl title-luxury text-white mb-12 drop-shadow-lg">
            Nossos Valores
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Ética", desc: "Transparência em cada negociação" },
              { title: "Excelência", desc: "Qualidade em todos os serviços" },
              { title: "Confiança", desc: "Relacionamentos duradouros" },
              { title: "Inovação", desc: "Tecnologia a seu favor" }
            ].map((value, index) => (
              <div key={index} className="bg-white/95 backdrop-blur-sm rounded-lg p-6 text-center shadow-xl">
                <div className="w-px h-6 bg-accent mx-auto mb-4 lamp-glow"></div>
                <h3 className="text-lg title-luxury text-gray-900 mb-3 font-semibold">
                  {value.title}
                </h3>
                <p className="text-gray-700 text-luxury-light leading-relaxed text-sm">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/75" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <div className="w-px h-12 bg-warm-lamp mx-auto mb-8 lamp-glow"></div>
          <h2 className="text-4xl title-luxury text-white mb-6 drop-shadow-lg font-semibold">
            Vamos Conversar
          </h2>
          <p className="text-lg text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Entre em contato e descubra como podemos ajudar você
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/dashboard/contact"
              className="bg-white text-gray-900 px-8 py-3 btn-text-luxury hover:bg-gray-100 transition-all duration-300 shadow-lg font-medium"
            >
              Contato
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5585996353513&text=Olá! Gostaria de mais informações."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/80 text-white px-8 py-3 btn-text-luxury hover:bg-white/20 transition-all duration-300 backdrop-blur-sm font-medium"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}