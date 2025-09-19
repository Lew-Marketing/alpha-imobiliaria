"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const contactInfo = [
  {
    title: "Endereço",
    content: "Av. Pacífico, 731, Sala 305\nCidade Alpha, Eusébio, CE",
    icon: "📍"
  },
  {
    title: "Telefones",
    content: "(85) 4141-3632\n(85) 99635-3513",
    icon: "📞"
  },
  {
    title: "Email",
    content: "comercialalphaconceito@gmail.com",
    icon: "✉️"
  },
  {
    title: "Horário",
    content: "Segunda a Sexta: 8h às 18h\nSábado: 8h às 12h",
    icon: "🕒"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset após 3 segundos
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero elegante */}
      <section className="relative h-screen flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1920&q=80"
          alt="Contato Alpha Imobiliária"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-charcoal/90 via-luxury-charcoal/70 to-transparent" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="w-px h-16 bg-warm-lamp mb-10 lamp-glow"></div>
            <h1 className="text-6xl lg:text-7xl font-display font-light text-white mb-8 leading-tight">
              Entre em
              <span className="block text-warm-lamp">Contato</span>
            </h1>
            <p className="text-2xl text-white/90 leading-relaxed font-light text-luxury-light">
              Estamos aqui para ajudar você a encontrar o imóvel dos seus sonhos
            </p>
          </div>
        </div>
      </section>

      {/* Contatos Rápidos Profissionais */}
      <section className="relative -mt-32 z-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <a
              href="tel:+5585996353513"
              className="bg-luxury-charcoal text-white p-8 rounded-premium shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center group"
            >
              <div className="w-16 h-16 bg-warm-lamp/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-warm-lamp/30 transition-colors">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl title-luxury text-white mb-2">Ligue Agora</h3>
              <p className="text-white/80 text-sm mb-4 text-luxury-light">Atendimento imediato</p>
              <div className="text-warm-lamp font-medium">(85) 99635-3513</div>
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=5585996353513&text=Olá! Gostaria de mais informações."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-luxury-charcoal text-white p-8 rounded-premium shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center group"
            >
              <div className="w-16 h-16 bg-warm-lamp/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-warm-lamp/30 transition-colors">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl title-luxury text-white mb-2">WhatsApp</h3>
              <p className="text-white/80 text-sm mb-4 text-luxury-light">Conversa rápida</p>
              <div className="text-warm-lamp font-medium">Conversar</div>
            </a>

            <a
              href="mailto:comercialalphaconceito@gmail.com"
              className="bg-luxury-charcoal text-white p-8 rounded-premium shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center group"
            >
              <div className="w-16 h-16 bg-warm-lamp/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-warm-lamp/30 transition-colors">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-xl title-luxury text-white mb-2">Email</h3>
              <p className="text-white/80 text-sm mb-4 text-luxury-light">Mensagem detalhada</p>
              <div className="text-warm-lamp font-medium">Enviar Email</div>
            </a>
          </div>
        </div>
      </section>

      {/* Formulário e Informações */}
      <section className="py-24 bg-gradient-to-br from-luxury-cream via-warm-white to-soft-beige">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Formulário */}
            <div className="card-luxury rounded-premium p-10 shadow-xl">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-px h-12 bg-warm-lamp mx-auto mb-8 lamp-glow"></div>
                  <div className="w-20 h-20 bg-warm-lamp/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">✓</span>
                  </div>
                  <h3 className="text-2xl title-luxury text-luxury-charcoal mb-4">
                    Mensagem Enviada
                  </h3>
                  <p className="text-luxury-gray text-luxury-light">
                    Retornaremos seu contato em breve.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <div className="w-px h-12 bg-warm-lamp mb-8 lamp-glow"></div>
                    <h2 className="text-3xl title-luxury text-luxury-charcoal mb-4">
                      Envie sua Mensagem
                    </h2>
                    <p className="text-luxury-gray text-luxury-light">
                      Preencha o formulário e entraremos em contato rapidamente
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-luxury-gray mb-2">
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="input-premium w-full px-4 py-3 text-luxury-charcoal placeholder-luxury-gray text-luxury"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-luxury-gray mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="input-premium w-full px-4 py-3 text-luxury-charcoal placeholder-luxury-gray text-luxury"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-luxury-gray mb-2">
                          Telefone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="input-premium w-full px-4 py-3 text-luxury-charcoal placeholder-luxury-gray text-luxury"
                          placeholder="(85) 99999-9999"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-luxury-gray mb-2">
                          Assunto *
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="input-premium w-full px-4 py-3 text-luxury-charcoal text-luxury"
                        >
                          <option value="">Selecione um assunto</option>
                          <option value="compra">Comprar Imóvel</option>
                          <option value="venda">Vender Imóvel</option>
                          <option value="avaliacao">Avaliação Gratuita</option>
                          <option value="locacao">Locação</option>
                          <option value="outros">Outros</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-luxury-gray mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="input-premium w-full px-4 py-3 text-luxury-charcoal placeholder-luxury-gray resize-none text-luxury"
                        placeholder="Descreva como podemos ajudar você..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-luxury px-8 py-4 btn-text-luxury disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Informações */}
            <div className="space-y-8">
              
              {/* Informações de Contato */}
              <div className="card-luxury rounded-premium p-10 shadow-xl">
                <div className="w-px h-12 bg-warm-lamp mb-8 lamp-glow"></div>
                <h2 className="text-3xl title-luxury text-luxury-charcoal mb-8">
                  Informações de Contato
                </h2>
                
                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-warm-lamp/10 rounded-premium flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">{info.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-luxury-charcoal mb-2 title-luxury">{info.title}</h3>
                        <div className="text-luxury-gray text-luxury-light whitespace-pre-line">
                          {info.content}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mapa Placeholder */}
              <div className="card-luxury rounded-premium p-8 shadow-xl">
                <div className="w-px h-8 bg-warm-lamp mb-6 lamp-glow"></div>
                <h3 className="text-xl title-luxury text-luxury-charcoal mb-6">
                  Nossa Localização
                </h3>
                <div className="bg-luxury-cream rounded-premium h-64 flex items-center justify-center border border-warm-lamp/20">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-warm-lamp/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🗺️</span>
                    </div>
                    <p className="text-luxury-gray text-luxury-light mb-2">
                      Mapa interativo será integrado em breve
                    </p>
                    <p className="text-sm text-luxury-gray text-luxury-light">
                      Av. Pacífico, 731, Sala 305 - Eusébio, CE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Elegante */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-px h-12 bg-warm-lamp mx-auto mb-8 lamp-glow"></div>
            <h2 className="text-4xl title-luxury text-luxury-charcoal mb-6">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-6">
            <div className="card-luxury rounded-premium p-8 shadow-sm">
              <h3 className="font-medium text-luxury-charcoal mb-3 title-luxury">
                Qual o horário de atendimento?
              </h3>
              <p className="text-luxury-gray text-luxury-light">
                Atendemos de segunda a sexta das 8h às 18h, e aos sábados das 8h às 12h. 
                Para emergências, entre em contato via WhatsApp.
              </p>
            </div>
            
            <div className="card-luxury rounded-premium p-8 shadow-sm">
              <h3 className="font-medium text-luxury-charcoal mb-3 title-luxury">
                A avaliação do imóvel é realmente gratuita?
              </h3>
              <p className="text-luxury-gray text-luxury-light">
                Sim! Oferecemos avaliação gratuita e sem compromisso para todos os imóveis. 
                Nossa equipe especializada fará uma análise completa do mercado.
              </p>
            </div>
            
            <div className="card-luxury rounded-premium p-8 shadow-sm">
              <h3 className="font-medium text-luxury-charcoal mb-3 title-luxury">
                Vocês trabalham com financiamento?
              </h3>
              <p className="text-luxury-gray text-luxury-light">
                Sim, temos parcerias com os principais bancos e facilitamos todo o processo 
                de financiamento imobiliário para nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Elegante */}
      <section className="relative py-24">
        <Image
          src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80"
          alt="Contato Final"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-luxury-charcoal/80" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
          <div className="w-px h-12 bg-warm-lamp mx-auto mb-8 lamp-glow"></div>
          <h2 className="text-4xl title-luxury mb-8 text-white">
            Pronto para Encontrar seu Lar Ideal?
          </h2>
          <p className="text-xl text-luxury-light mb-10 leading-relaxed max-w-2xl mx-auto text-white/90">
            Nossa equipe está pronta para ajudar você a realizar o sonho da casa própria
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link
              href="/dashboard/properties"
              className="text-white hover:text-warm-lamp title-luxury text-lg tracking-wide transition-colors duration-300 border-b border-white/30 hover:border-warm-lamp pb-1"
            >
              Ver Imóveis
            </Link>
            <a
              href="https://api.whatsapp.com/send?phone=5585996353513&text=Olá! Gostaria de mais informações."
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-warm-lamp title-luxury text-lg tracking-wide transition-colors duration-300 border-b border-white/30 hover:border-warm-lamp pb-1"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}