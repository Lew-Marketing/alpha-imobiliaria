"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const contactInfo = [
  {
    title: "Endereço",
    content: "Av. Pacífico, 731, Sala 305\nCidade Alpha, Eusébio, CE"
  },
  {
    title: "Telefones",
    content: "(85) 4141-3632\n(85) 99635-3513"
  },
  {
    title: "Email",
    content: "comercialalphaconceito@gmail.com"
  },
  {
    title: "Horário",
    content: "Segunda a Sexta: 8h às 18h\nSábado: 8h às 12h"
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
      
      {/* Hero */}
      <section className="relative h-screen flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1920&q=80"
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
              Estamos prontos para ajudar você a encontrar o imóvel ideal
            </p>
          </div>
        </div>
      </section>

      {/* Contatos Rápidos */}
      <section className="relative -mt-32 z-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-2xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <a
                href="tel:+5585996353513"
                className="text-center group"
              >
                <div className="text-5xl font-display font-light text-warm-lamp mb-3">
                  Telefone
                </div>
                <div className="text-lg font-medium text-luxury-charcoal mb-2">
                  Atendimento Imediato
                </div>
                <div className="text-sm text-luxury-gray font-light">
                  (85) 99635-3513
                </div>
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=5585996353513&text=Olá! Gostaria de mais informações."
                target="_blank"
                rel="noopener noreferrer"
                className="text-center group"
              >
                <div className="text-5xl font-display font-light text-warm-lamp mb-3">
                  WhatsApp
                </div>
                <div className="text-lg font-medium text-luxury-charcoal mb-2">
                  Conversa Rápida
                </div>
                <div className="text-sm text-luxury-gray font-light">
                  Mensagem Instantânea
                </div>
              </a>

              <a
                href="mailto:comercialalphaconceito@gmail.com"
                className="text-center group"
              >
                <div className="text-5xl font-display font-light text-warm-lamp mb-3">
                  Email
                </div>
                <div className="text-lg font-medium text-luxury-charcoal mb-2">
                  Mensagem Detalhada
                </div>
                <div className="text-sm text-luxury-gray font-light">
                  Resposta em 24h
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário e Informações */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Formulário */}
            <div>
              <div className="w-px h-12 bg-warm-lamp mb-8 lamp-glow"></div>
              <h2 className="text-4xl title-luxury text-luxury-charcoal mb-8 leading-tight">
                Envie sua Mensagem
              </h2>
              
              {submitted ? (
                <div className="text-center py-8">
                  <h3 className="text-xl title-luxury text-luxury-charcoal mb-4">
                    Mensagem Enviada
                  </h3>
                  <p className="text-luxury-gray text-luxury-light">
                    Retornaremos seu contato em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-luxury-gray mb-2">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-premium w-full px-4 py-3 text-luxury-charcoal"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-luxury-gray mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-premium w-full px-4 py-3 text-luxury-charcoal"
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
                        className="input-premium w-full px-4 py-3 text-luxury-charcoal"
                        placeholder="(85) 99999-9999"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-luxury-gray mb-2">
                        Assunto
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="input-premium w-full px-4 py-3 text-luxury-charcoal"
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
                      Mensagem
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="input-premium w-full px-4 py-3 text-luxury-charcoal resize-none"
                      placeholder="Descreva como podemos ajudar você..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-luxury px-8 py-4 btn-text-luxury disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  </button>
                </form>
              )}
            </div>

            {/* Informações */}
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden rounded-lg shadow-xl mb-8">
                <Image
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
                  alt="Escritório Alpha Imobiliária"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index}>
                    <h3 className="title-luxury text-lg text-luxury-charcoal mb-2">
                      {info.title}
                    </h3>
                    <div className="text-luxury-gray text-luxury-light whitespace-pre-line">
                      {info.content}
                    </div>
                  </div>
                ))}
              </div>
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
            <Link
              href="/dashboard/properties"
              className="border-2 border-white text-white px-8 py-4 btn-text-luxury hover:bg-white/10 transition-all duration-300"
            >
              Ver Imóveis
            </Link>
            <a
              href="https://api.whatsapp.com/send?phone=5585996353513&text=Olá! Gostaria de mais informações."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury px-8 py-4 btn-text-luxury"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}