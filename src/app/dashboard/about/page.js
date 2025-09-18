"use client";
import Image from "next/image";

const stats = [
  { number: "2014", label: "Fundada" },
  { number: "500+", label: "Imóveis" },
  { number: "1000+", label: "Clientes" },
  { number: "10+", label: "Anos" },
];

const values = [
  {
    title: "Ética",
    description: "Transparência em cada negociação"
  },
  {
    title: "Excelência",
    description: "Qualidade em todos os serviços"
  },
  {
    title: "Confiança",
    description: "Relacionamentos duradouros"
  },
  {
    title: "Inovação",
    description: "Tecnologia a seu favor"
  }
];

export default function Sobre() {
  return (
    <div className="min-h-screen bg-warm-white">
      
      {/* Hero elegante */}
      <section className="relative bg-gradient-to-b from-leather-dark via-leather-medium to-leather-light text-warm-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-8 py-40">
          <div className="max-w-3xl">
            <div className="w-1 h-20 bg-warm-white mb-12"></div>
            <h1 className="text-6xl md:text-7xl font-light tracking-tight mb-12 leading-tight">
              Alpha<br />Conceito
            </h1>
            <p className="text-xl font-light leading-relaxed opacity-90 max-w-2xl">
              Confiança e excelência no mercado imobiliário desde 2014
            </p>
          </div>
        </div>
      </section>

      {/* Stats minimalistas */}
      <section className="py-24 bg-cream/50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-light text-leather-dark mb-4 tracking-tight">
                  {stat.number}
                </div>
                <div className="text-leather-medium font-light tracking-widest uppercase text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* História elegante */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div>
                <div className="w-1 h-16 bg-accent mb-8"></div>
                <h2 className="text-4xl lg:text-5xl font-light text-leather-dark mb-8 leading-tight tracking-tight">
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
                
                <p>
                  Consolidamos nossa posição como uma das empresas mais respeitadas 
                  do setor imobiliário cearense.
                </p>
              </div>
            </div>

            <div className="relative">
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
      </section>

      {/* Valores minimalistas */}
      <section className="py-32 bg-gradient-to-b from-cream/30 to-soft-beige/30">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <div className="w-1 h-16 bg-accent mx-auto mb-8"></div>
            <h2 className="text-4xl lg:text-5xl font-light text-leather-dark mb-8 tracking-tight">
              Nossos Valores
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/80 backdrop-blur-sm p-8 border border-soft-beige hover:border-accent transition-all duration-500 h-full">
                  <div className="w-1 h-8 bg-accent mx-auto mb-6 group-hover:h-12 transition-all duration-300"></div>
                  <h3 className="text-xl font-light text-leather-dark mb-4 tracking-wide">
                    {value.title}
                  </h3>
                  <p className="text-leather-medium font-light leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA elegante */}
      <section className="py-32 bg-gradient-to-r from-leather-dark to-leather-medium text-warm-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="w-1 h-16 bg-warm-white mx-auto mb-12"></div>
          <h2 className="text-4xl lg:text-5xl font-light mb-8 tracking-tight">
            Vamos Conversar
          </h2>
          <p className="text-xl font-light mb-12 opacity-90 leading-relaxed max-w-2xl mx-auto">
            Entre em contato e descubra como podemos ajudar você
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/dashboard/contact"
              className="bg-warm-white text-leather-dark px-12 py-4 font-light hover:bg-cream transition-colors tracking-wide"
            >
              Contato
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5585996353513&text=Olá! Gostaria de mais informações."
              target="_blank"
              rel="noopener noreferrer"
              className="border border-warm-white text-warm-white px-12 py-4 font-light hover:bg-warm-white hover:text-leather-dark transition-colors tracking-wide"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}