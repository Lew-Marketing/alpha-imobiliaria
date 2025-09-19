"use client";
import Image from "next/image";

const testimonials = [
  {
    name: "Maria Silva",
    role: "vendedora",
    comment: "Eles fizeram tudo perfeitamente e ainda me deixaram confortável durante o processo.",
    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=80",
  },
  {
    name: "João & Ana Santos",
    role: "compradores",
    comment: "Um serviço rápido e fácil, respeitando nosso estilo de vida.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Carla Oliveira",
    role: "vendedora",
    comment: "Profissionalismo e atenção aos detalhes em cada etapa da venda.",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
];

export default function LookingToSell() {
  return (
    <div className="w-full bg-white text-foreground">
      
      {/* Hero elegante */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-charcoal/85 via-luxury-gray/75 to-luxury-charcoal/90" />
        
        <div className="relative z-10 text-center text-pearl-white max-w-4xl mx-auto px-6">
          <div className="w-px h-16 bg-warm-lamp mx-auto mb-8 lamp-glow"></div>
          <h1 className="text-5xl title-display text-contrast-light mb-6">
            Quer vender seu imóvel?
          </h1>
          <p className="text-lg text-luxury-light opacity-90 leading-relaxed max-w-3xl mx-auto">
            Desde 2014 ajudamos milhares de pessoas a venderem imóveis excepcionais. 
            O primeiro passo é uma avaliação de mercado gratuita.
          </p>
        </div>
      </section>

      {/* Formulário */}
      <section className="relative -mt-20 z-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="card-luxury rounded-premium p-10 shadow-xl">
            <div className="text-center mb-8">
              <div className="w-px h-12 bg-warm-lamp mx-auto mb-6 lamp-glow"></div>
              <h2 className="text-2xl title-luxury text-contrast-high mb-4">
                Avaliação Gratuita
              </h2>
              <p className="text-luxury-gray text-luxury-light">
                Conte-nos como entrar em contato e retornaremos com todos os detalhes.
              </p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-luxury-gray mb-2">Nome *</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-premium focus:outline-none focus:border-warm-lamp focus:ring-1 focus:ring-warm-lamp/20 transition-all duration-300 text-contrast-high text-luxury" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-luxury-gray mb-2">Sobrenome *</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-premium focus:outline-none focus:border-warm-lamp focus:ring-1 focus:ring-warm-lamp/20 transition-all duration-300 text-contrast-high text-luxury" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-luxury-gray mb-2">Telefone *</label>
                <input 
                  type="tel" 
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-premium focus:outline-none focus:border-warm-lamp focus:ring-1 focus:ring-warm-lamp/20 transition-all duration-300 text-contrast-high text-luxury" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-luxury-gray mb-2">Email *</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-premium focus:outline-none focus:border-warm-lamp focus:ring-1 focus:ring-warm-lamp/20 transition-all duration-300 text-contrast-high text-luxury" 
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-luxury-gray mb-2">Como prefere ser contatado? *</label>
                <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-premium focus:outline-none focus:border-warm-lamp focus:ring-1 focus:ring-warm-lamp/20 transition-all duration-300 text-contrast-high text-luxury">
                  <option>Selecione uma opção</option>
                  <option>Email</option>
                  <option>Telefone</option>
                  <option>WhatsApp</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-luxury-gray mb-2">Endereço do imóvel</label>
                <input 
                  type="text" 
                  placeholder="Rua, número, bairro, cidade"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-premium focus:outline-none focus:border-warm-lamp focus:ring-1 focus:ring-warm-lamp/20 transition-all duration-300 text-contrast-high text-luxury" 
                />
              </div>
              
              <p className="text-sm text-luxury-gray md:col-span-2 text-luxury-light">
                Usaremos essas informações apenas para responder sua solicitação (sem marketing, prometemos).
              </p>
              
              <button 
                type="submit" 
                className="md:col-span-2 btn-luxury px-8 py-3 btn-text-luxury w-full"
              >
                Solicitar Avaliação Gratuita
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-20 mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="w-px h-12 bg-warm-lamp mx-auto mb-6 lamp-glow"></div>
            <h2 className="text-3xl title-luxury text-contrast-high mb-6">
              Por que escolher a Alpha Conceito?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-16 h-16 bg-warm-lamp/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="title-luxury text-xl mb-4 text-contrast-high">Exposição Máxima</h3>
              <p className="text-luxury-gray text-luxury-light leading-relaxed">
                Seu imóvel será divulgado em múltiplas plataformas digitais e redes sociais, 
                garantindo máxima visibilidade.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-warm-lamp/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="title-luxury text-xl mb-4 text-contrast-high">Marketing Digital</h3>
              <p className="text-luxury-gray text-luxury-light leading-relaxed">
                Estratégias modernas de marketing digital para atrair os compradores certos 
                para seu imóvel.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-warm-lamp/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="title-luxury text-xl mb-4 text-contrast-high">Experiência Comprovada</h3>
              <p className="text-luxury-gray text-luxury-light leading-relaxed">
                Mais de 10 anos de experiência no mercado imobiliário com centenas de 
                vendas realizadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-cream/95 via-luxury-cream/90 to-luxury-cream/95" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="w-px h-12 bg-warm-lamp mx-auto mb-6 lamp-glow"></div>
            <h2 className="text-3xl title-luxury text-contrast-high mb-6">
              O que nossos clientes dizem
            </h2>
          </div>

          <div className="space-y-16">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="relative w-full md:w-1/2 h-80">
                  <Image 
                    src={testimonial.photo} 
                    alt={testimonial.name} 
                    fill 
                    className="object-cover rounded-premium shadow-lg" 
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="md:w-1/2">
                  <div className="card-luxury rounded-premium p-8">
                    <blockquote className="text-lg text-luxury-gray text-luxury-light leading-relaxed mb-6">
                      "{testimonial.comment}"
                    </blockquote>
                    <cite className="block">
                      <span className="title-luxury text-contrast-high font-semibold">
                        {testimonial.name}
                      </span>
                      <span className="text-luxury-gray text-luxury-light ml-2">
                        — {testimonial.role}
                      </span>
                    </cite>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-charcoal/90 to-luxury-gray/80" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <div className="w-px h-12 bg-warm-lamp mx-auto mb-8 lamp-glow"></div>
          <h2 className="text-4xl title-luxury text-white mb-6 drop-shadow-lg">
            Pronto para vender?
          </h2>
          <p className="text-lg text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto drop-shadow-md text-luxury-light">
            Entre em contato conosco hoje mesmo e descubra o valor real do seu imóvel
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/dashboard/contact"
              className="btn-luxury px-8 py-3 btn-text-luxury"
            >
              Solicitar Avaliação
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5585996353513&text=Olá! Gostaria de avaliar meu imóvel."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/80 text-white px-8 py-3 btn-text-luxury hover:bg-white/20 transition-all duration-300 backdrop-blur-sm rounded-premium"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}