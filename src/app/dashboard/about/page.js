"use client";
import Image from "next/image";

const stats = [
  { number: "2014", label: "Fundada", description: "Início da nossa jornada" },
  { number: "500+", label: "Imóveis Vendidos", description: "Negócios realizados" },
  { number: "1000+", label: "Clientes Satisfeitos", description: "Relacionamentos construídos" },
  { number: "98%", label: "Aprovação", description: "Índice de satisfação" },
];

const team = [
  {
    name: "Maria Silva",
    role: "Diretora Comercial",
    experience: "15 anos de experiência",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
  },
  {
    name: "João Santos",
    role: "Corretor Senior",
    experience: "12 anos de experiência",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
  },
  {
    name: "Ana Costa",
    role: "Especialista em Avaliações",
    experience: "10 anos de experiência",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    fallback: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&q=80"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero */}
      <section className="relative h-screen flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1920&q=80"
          alt="Alpha Imobiliária"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-charcoal/90 via-luxury-charcoal/70 to-transparent" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="w-px h-16 bg-warm-lamp mb-10 lamp-glow"></div>
            <h1 className="text-6xl lg:text-7xl font-display font-light text-white mb-8 leading-tight">
              Alpha
              <span className="block text-warm-lamp">Imobiliária</span>
            </h1>
            <p className="text-2xl text-white/90 leading-relaxed font-light text-luxury-light">
              Excelência e confiança no mercado imobiliário desde 2014
            </p>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="relative -mt-32 z-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-2xl p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-display font-light text-warm-lamp mb-3">
                    {stat.number}
                  </div>
                  <div className="text-lg font-medium text-luxury-charcoal mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-luxury-gray font-light">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-px h-12 bg-warm-lamp mb-8 lamp-glow"></div>
              <h2 className="text-4xl title-luxury text-luxury-charcoal mb-8 leading-tight">
                Nossa História
              </h2>
              <div className="space-y-6 text-lg text-luxury-gray leading-relaxed text-luxury-light">
                <p>
                  A Alpha Imobiliária foi fundada em 2014 com uma visão clara: 
                  revolucionar o mercado imobiliário através da transparência, 
                  ética e excelência no atendimento.
                </p>
                <p>
                  Ao longo dos anos, construímos uma reputação sólida baseada 
                  em resultados excepcionais e relacionamentos duradouros com 
                  nossos clientes.
                </p>
                <p>
                  Hoje, somos reconhecidos como uma das principais imobiliárias 
                  de Fortaleza, com uma equipe especializada e comprometida em 
                  superar expectativas.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80"
                  alt="História Alpha Imobiliária"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-px h-12 bg-warm-lamp mx-auto mb-8 lamp-glow"></div>
            <h2 className="text-4xl title-luxury text-luxury-charcoal mb-6">
              Nossa Equipe
            </h2>
            <p className="text-xl text-luxury-gray text-luxury-light max-w-3xl mx-auto">
              Profissionais experientes e dedicados ao seu sucesso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative aspect-square mb-6 overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index === 0}
                    onError={(e) => {
                      if (e.target.src !== member.fallback) {
                        e.target.src = member.fallback;
                      } else {
                        // Fallback final com placeholder profissional
                        e.target.src = `https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&sig=${index}`;
                      }
                    }}
                  />
                </div>
                <h3 className="text-xl title-luxury text-luxury-charcoal mb-2">
                  {member.name}
                </h3>
                <div className="text-warm-lamp font-medium mb-2">{member.role}</div>
                <div className="text-luxury-gray text-luxury-light">{member.experience}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <Image
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80"
          alt="Contato Alpha Imobiliária"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-luxury-charcoal/80" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
          <div className="w-px h-12 bg-warm-lamp mx-auto mb-8 lamp-glow"></div>
          <h2 className="text-4xl title-luxury mb-8 text-white">
            Pronto para Encontrar seu Lar Ideal?
          </h2>
          <p className="text-xl text-luxury-light mb-10 leading-relaxed max-w-2xl mx-auto">
            Nossa equipe está pronta para ajudar você a realizar o sonho da casa própria
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/dashboard/contact"
              className="btn-luxury px-8 py-4 btn-text-luxury"
            >
              Entre em Contato
            </a>
            <a
              href="/dashboard/properties"
              className="border-2 border-white text-white px-8 py-4 btn-text-luxury hover:bg-white/10 transition-all duration-300"
            >
              Ver Imóveis
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}