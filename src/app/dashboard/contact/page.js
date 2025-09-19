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
      <section className="relative h-[70vh] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1920&q=80"
          alt="Contato Alpha Imobiliária"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 lg:px-6">
          <div className="max-w-2xl">
            <div className="w-px h-8 bg-warm-lamp mb-6"></div>
            <h1 className="text-4xl lg:text-5xl font-sans font-medium text-white mb-4 leading-tight">
              Entre em Contato
            </h1>
            <p className="text-lg text-white/90 leading-relaxed font-normal">
              Estamos prontos para ajudar você
            </p>
          </div>
        </div>
      </section>

      {/* Contatos Rápidos Profissionais */}
      <section className="relative -mt-20 z-20">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a
              href="tel:+5585996353513"
              className="bg-gray-900 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="w-12 h-12 bg-warm-lamp/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-warm-lamp/30 transition-colors">
                <span className="text-xl">📞</span>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Ligue Agora</h3>
              <p className="text-white/80 text-sm mb-3">Atendimento imediato</p>
              <div className="text-warm-lamp font-medium text-sm">(85) 99635-3513</div>
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=5585996353513&text=Olá! Gostaria de mais informações."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="w-12 h-12 bg-warm-lamp/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-warm-lamp/30 transition-colors">
                <span className="text-xl">💬</span>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">WhatsApp</h3>
              <p className="text-white/80 text-sm mb-3">Conversa rápida</p>
              <div className="text-warm-lamp font-medium text-sm">Conversar</div>
            </a>

            <a
              href="mailto:comercialalphaconceito@gmail.com"
              className="bg-gray-900 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="w-12 h-12 bg-warm-lamp/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-warm-lamp/30 transition-colors">
                <span className="text-xl">✉️</span>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Email</h3>
              <p className="text-white/80 text-sm mb-3">Mensagem detalhada</p>
              <div className="text-warm-lamp font-medium text-sm">Enviar Email</div>
            </a>
          </div>
        </div>
      </section>

      {/* Formulário e Informações */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Formulário */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-px h-8 bg-warm-lamp mx-auto mb-6"></div>
                  <div className="w-16 h-16 bg-warm-lamp/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">✓</span>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    Mensagem Enviada
                  </h3>
                  <p className="text-gray-600">
                    Retornaremos seu contato em breve.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <div className="w-px h-8 bg-warm-lamp mb-6"></div>
                    <h2 className="text-2xl font-medium text-gray-900 mb-3">
                      Envie sua Mensagem
                    </h2>
                    <p className="text-gray-600">
                      Preencha o formulário e entraremos em contato rapidamente
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-lamp focus:border-warm-lamp"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-lamp focus:border-warm-lamp"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Telefone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-lamp focus:border-warm-lamp"
                          placeholder="(85) 99999-9999"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Assunto *
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-lamp focus:border-warm-lamp"
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
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Mensagem *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-lamp focus:border-warm-lamp resize-none"
                        placeholder="Descreva como podemos ajudar você..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-warm-lamp text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-warm-lamp/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="w-px h-8 bg-warm-lamp mb-6"></div>
                <h2 className="text-2xl font-medium text-gray-900 mb-6">
                  Informações de Contato
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-warm-lamp/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">{info.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">{info.title}</h3>
                        <div className="text-gray-600 text-sm whitespace-pre-line">
                          {info.content}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mapa Placeholder */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="w-px h-8 bg-warm-lamp mb-6"></div>
                <h3 className="text-xl font-medium text-gray-900 mb-6">
                  Nossa Localização
                </h3>
                <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center border border-gray-200">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-warm-lamp/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🗺️</span>
                    </div>
                    <p className="text-gray-600 mb-2">
                      Mapa interativo será integrado em breve
                    </p>
                    <p className="text-sm text-gray-500">
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
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <div className="w-px h-8 bg-warm-lamp mx-auto mb-6"></div>
            <h2 className="text-2xl font-medium text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-medium text-gray-900 mb-2">
                Qual o horário de atendimento?
              </h3>
              <p className="text-gray-600 text-sm">
                Atendemos de segunda a sexta das 8h às 18h, e aos sábados das 8h às 12h. 
                Para emergências, entre em contato via WhatsApp.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-medium text-gray-900 mb-2">
                A avaliação do imóvel é realmente gratuita?
              </h3>
              <p className="text-gray-600 text-sm">
                Sim! Oferecemos avaliação gratuita e sem compromisso para todos os imóveis. 
                Nossa equipe especializada fará uma análise completa do mercado.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-medium text-gray-900 mb-2">
                Vocês trabalham com financiamento?
              </h3>
              <p className="text-gray-600 text-sm">
                Sim, temos parcerias com os principais bancos e facilitamos todo o processo 
                de financiamento imobiliário para nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Elegante */}
      <section className="relative py-16">
        <Image
          src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80"
          alt="Contato Final"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-6 text-center text-white">
          <div className="w-px h-8 bg-warm-lamp mx-auto mb-6"></div>
          <h2 className="text-2xl font-medium mb-6 text-white">
            Pronto para Encontrar seu Lar Ideal?
          </h2>
          <p className="text-lg mb-8 leading-relaxed max-w-2xl mx-auto text-white/90">
            Nossa equipe está pronta para ajudar você a realizar o sonho da casa própria
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/dashboard/properties"
              className="text-white hover:text-warm-lamp font-medium transition-colors duration-300 border-b border-white/30 hover:border-warm-lamp pb-1"
            >
              Ver Imóveis
            </Link>
            <a
              href="https://api.whatsapp.com/send?phone=5585996353513&text=Olá! Gostaria de mais informações."
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-warm-lamp font-medium transition-colors duration-300 border-b border-white/30 hover:border-warm-lamp pb-1"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}