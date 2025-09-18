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
    <div className="min-h-screen">
      
      {/* Hero com imagem de fundo sofisticada */}
      <section className="relative h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-leather-dark/90 via-leather-medium/70 to-transparent" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-8">
          <div className="max-w-3xl">
            <div className="w-1 h-24 bg-cream mb-12"></div>
            <h1 className="text-7xl md:text-8xl font-light tracking-tight mb-12 leading-tight text-cream">
              Alpha<br />Conceito
            </h1>
            <p className="text-xl font-light leading-relaxed opacity-90 max-w-2xl text-cream">
              Confiança e excelência no mercado imobiliário desde 2014
            </p>
          </div>
        </div>
      </section>

      {/* Stats com transparência */}
      <section className="relative -mt-32 z-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="bg-white/95 backdrop-blur-md border border-white/20 shadow-2xl p-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl lg:text-6xl font-light text-leather-dark mb-4 tracking-tight">
                    {stat.number}
                  </div>
                  <div className="text-leather-medium font-light tracking-widest uppercase text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* História com imagem de fundo */}
      <section className="relative py-32 mt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-leather-light/80 via-cream/90 to-white/95" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div>
                <div className="w-1 h-16 bg-accent mb-8"></div>
                <h2 className="text-5xl font-light text-leather-dark mb-8 leading-tight tracking-tight">
                  Nossa História
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-leather-medium leading-relaxed font-light">
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
              <div className="bg-white/90 backdrop-blur-md p-8 border border-white/20 shadow-xl">
                <div className="aspect-[3/4] relative">
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

      {/* Valores com overlay elegante */}
      <section className="relative py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-leather-dark/85 via-leather-medium/75 to-leather-light/70" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
          <div className="w-1 h-16 bg-cream mx-auto mb-8"></div>
          <h2 className="text-5xl font-light text-cream mb-16 tracking-tight">
            Nossos Valores
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Ética", desc: "Transparência em cada negociação" },
              { title: "Excelência", desc: "Qualidade em todos os serviços" },
              { title: "Confiança", desc: "Relacionamentos duradouros" },
              { title: "Inovação", desc: "Tecnologia a seu favor" }
            ].map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-8 border border-white/20">
                <div className="w-1 h-8 bg-cream mx-auto mb-6"></div>
                <h3 className="text-xl font-light text-cream mb-4 tracking-wide">
                  {value.title}
                </h3>
                <p className="text-cream/80 font-light leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final com transparência */}
      <section className="relative py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-leather-dark/90 to-leather-medium/80" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center text-cream">
          <div className="w-1 h-16 bg-cream mx-auto mb-12"></div>
          <h2 className="text-5xl font-light mb-8 tracking-tight">
            Vamos Conversar
          </h2>
          <p className="text-xl font-light mb-12 opacity-90 leading-relaxed max-w-2xl mx-auto">
            Entre em contato e descubra como podemos ajudar você
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/dashboard/contact"
              className="bg-cream text-leather-dark px-12 py-4 font-light hover:bg-white transition-colors tracking-wide"
            >
              Contato
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5585996353513&text=Olá! Gostaria de mais informações."
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cream text-cream px-12 py-4 font-light hover:bg-cream hover:text-leather-dark transition-colors tracking-wide"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}