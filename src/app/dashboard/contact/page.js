"use client";
import { useState } from "react";
import Image from "next/image";

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

const quickContacts = [
  {
    title: "Ligue Agora",
    subtitle: "Atendimento imediato",
    action: "tel:+5585996353513",
    label: "(85) 99635-3513",
    icon: "📞",
    color: "bg-blue-600 hover:bg-blue-700"
  },
  {
    title: "WhatsApp",
    subtitle: "Conversa rápida",
    action: "https://api.whatsapp.com/send?phone=5585996353513&text=Olá! Gostaria de mais informações.",
    label: "Conversar",
    icon: "💬",
    color: "bg-green-600 hover:bg-green-700"
  },
  {
    title: "Email",
    subtitle: "Mensagem detalhada",
    action: "mailto:comercialalphaconceito@gmail.com",
    label: "Enviar Email",
    icon: "✉️",
    color: "bg-purple-600 hover:bg-purple-700"
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
            <h1 className="text-6xl lg:text-7xl font-serif font-light text-white mb-8 leading-tight">
              Entre em
              <span className="block text-warm-lamp font-normal">Contato</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed font-light">
              Estamos aqui para ajudar você a encontrar o imóvel dos seus sonhos
            </p>
          </div>
        </div>
      </section>

      {/* Contatos Rápidos */}
      <section className="relative -mt-32 z-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {quickContacts.map((contact, index) => (
              <a
                key={index}
                href={contact.action}
                target={contact.action.startsWith('http') ? '_blank' : undefined}
                rel={contact.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`${contact.color} text-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center`}
              >
                <div className="text-4xl mb-4">{contact.icon}</div>
                <h3 className="text-xl font-serif font-light mb-2">{contact.title}</h3>
                <p className="text-white/80 text-sm mb-4 font-light">{contact.subtitle}</p>
                <div className="font-medium">{contact.label}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário e Informações */}
      <section className="py-24 bg-gradient-to-br from-stone-50 via-amber-50/30 to-yellow-50/20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Formulário */}
            <div className="bg-white/80 rounded-lg shadow-xl p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-px h-12 bg-warm-lamp mx-auto mb-8 lamp-glow"></div>
                  <div className="text-6xl mb-6">✅</div>
                  <h3 className="text-2xl font-serif font-light text-slate-800 mb-4">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-slate-600 font-light">
                    Retornaremos seu contato em breve.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <div className="w-px h-12 bg-warm-lamp mb-8 lamp-glow"></div>
                    <h2 className="text-3xl font-serif font-light text-slate-800 mb-4">
                      Envie sua Mensagem
                    </h2>
                    <p className="text-slate-600 font-light">
                      Preencha o formulário e entraremos em contato rapidamente
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 transition-all duration-300 font-light"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 transition-all duration-300 font-light"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Telefone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 transition-all duration-300 font-light"
                          placeholder="(85) 99999-9999"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Assunto *
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 transition-all duration-300 font-light"
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
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20 transition-all duration-300 resize-none font-light"
                        placeholder="Descreva como podemos ajudar você..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-amber-700 text-white px-8 py-4 rounded-lg font-serif font-light text-lg tracking-wide hover:bg-amber-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
              <div className="bg-white/80 rounded-lg p-10">
                <div className="w-px h-12 bg-warm-lamp mb-8 lamp-glow"></div>
                <h2 className="text-3xl font-serif font-light text-slate-800 mb-8">
                  Informações de Contato
                </h2>
                
                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="text-2xl">{info.icon}</div>
                      <div>
                        <h3 className="font-medium text-slate-800 mb-2">{info.title}</h3>
                        <div className="text-slate-600 font-light whitespace-pre-line">
                          {info.content}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mapa Placeholder */}
              <div className="bg-white/80 rounded-lg shadow-xl p-8">
                <div className="w-px h-8 bg-warm-lamp mb-6 lamp-glow"></div>
                <h3 className="text-xl font-serif font-light text-slate-800 mb-6">
                  Nossa Localização
                </h3>
                <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🗺️</div>
                    <p className="text-slate-600 font-light">
                      Mapa interativo será integrado em breve
                    </p>
                    <p className="text-sm text-slate-500 mt-2 font-light">
                      Av. Pacífico, 731, Sala 305 - Eusébio, CE
                    </p>
                  </div>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="bg-slate-800 text-white rounded-lg p-8">
                <div className="w-px h-8 bg-warm-lamp mb-6 lamp-glow"></div>
                <h3 className="text-xl font-serif font-light mb-6 text-white">
                  Siga-nos nas Redes Sociais
                </h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                    📘
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                    📷
                  </a>
                  <a href="#" className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                    🐦
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-px h-12 bg-warm-lamp mx-auto mb-8 lamp-glow"></div>
            <h2 className="text-4xl font-serif font-light text-slate-800 mb-6">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white/80 rounded-lg p-8 shadow-sm">
              <h3 className="font-medium text-slate-800 mb-3 font-serif">
                Qual o horário de atendimento?
              </h3>
              <p className="text-slate-600 font-light">
                Atendemos de segunda a sexta das 8h às 18h, e aos sábados das 8h às 12h. 
                Para emergências, entre em contato via WhatsApp.
              </p>
            </div>
            
            <div className="bg-white/80 rounded-lg p-8 shadow-sm">
              <h3 className="font-medium text-slate-800 mb-3 font-serif">
                A avaliação do imóvel é realmente gratuita?
              </h3>
              <p className="text-slate-600 font-light">
                Sim! Oferecemos avaliação gratuita e sem compromisso para todos os imóveis. 
                Nossa equipe especializada fará uma análise completa do mercado.
              </p>
            </div>
            
            <div className="bg-white/80 rounded-lg p-8 shadow-sm">
              <h3 className="font-medium text-slate-800 mb-3 font-serif">
                Vocês trabalham com financiamento?
              </h3>
              <p className="text-slate-600 font-light">
                Sim, temos parcerias com os principais bancos e facilitamos todo o processo 
                de financiamento imobiliário para nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-24">
        <Image
          src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80"
          alt="Contato Final"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-800/80" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
          <div className="w-px h-12 bg-warm-lamp mx-auto mb-8 lamp-glow"></div>
          <h2 className="text-4xl font-serif font-light mb-8 text-white">
            Pronto para Encontrar seu Lar Ideal?
          </h2>
          <p className="text-xl font-light mb-10 leading-relaxed max-w-2xl mx-auto">
            Nossa equipe está pronta para ajudar você a realizar o sonho da casa própria
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a
              href="/dashboard/properties"
              className="text-white hover:text-amber-700 font-serif text-lg tracking-wide transition-colors duration-300 border-b border-white/30 hover:border-amber-700 pb-1"
            >
              Ver Imóveis
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5585996353513&text=Olá! Gostaria de mais informações."
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-700 font-serif text-lg tracking-wide transition-colors duration-300 border-b border-white/30 hover:border-amber-700 pb-1"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}