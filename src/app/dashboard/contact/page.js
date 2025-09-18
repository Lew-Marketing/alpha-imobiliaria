"use client";
import { useState } from "react";

export default function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero elegante */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-charcoal/85 via-luxury-gray/75 to-luxury-charcoal/90" />
        
        <div className="relative z-10 text-center text-pearl-white max-w-3xl mx-auto px-6">
          <div className="w-px h-16 bg-warm-lamp mx-auto mb-8 lamp-glow"></div>
          <h1 className="text-5xl title-display text-contrast-light mb-6">
            Contato
          </h1>
          <p className="text-lg text-luxury-light opacity-90 leading-relaxed">
            Vamos conversar sobre seu próximo lar
          </p>
        </div>
      </section>

      {/* Seção principal */}
      <section className="relative -mt-20 z-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Informações */}
            <div className="space-y-8">
              
              {/* Card principal */}
              <div className="card-luxury rounded-lg p-10">
                <div className="w-px h-12 bg-accent mb-6 lamp-glow"></div>
                <h2 className="text-2xl title-luxury text-contrast-high mb-8 alpha-brand">
                  <span className="alpha-a">A</span>lpha Conceito
                </h2>
                
                <div className="space-y-6 text-luxury-gray text-luxury">
                  <div>
                    <p className="label-luxury text-luxury-light-gray mb-2">Endereço</p>
                    <p className="text-luxury-light leading-relaxed">Av. Pacífico, 731, Sala 305<br />Cidade Alpha, Eusébio, CE</p>
                  </div>
                  
                  <div>
                    <p className="label-luxury text-luxury-light-gray mb-2">Telefones</p>
                    <a href="tel:+558541413632" className="block text-luxury hover:text-accent transition-colors">
                      (85) 4141-3632
                    </a>
                    <a href="tel:+5585996353513" className="block text-luxury hover:text-accent transition-colors">
                      (85) 99635-3513
                    </a>
                  </div>
                  
                  <div>
                    <p className="label-luxury text-luxury-light-gray mb-2">Email</p>
                    <a 
                      href="mailto:comercialalphaconceito@gmail.com" 
                      className="text-luxury hover:text-accent transition-colors"
                    >
                      comercialalphaconceito@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp card */}
              <div className="relative overflow-hidden rounded-lg">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&q=80')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-luxury-charcoal/90 to-luxury-gray/85" />
                
                <div className="relative z-10 p-10 text-pearl-white">
                  <div className="w-px h-8 bg-warm-lamp mb-4 lamp-glow"></div>
                  <h3 className="text-xl title-luxury text-contrast-light mb-3">WhatsApp</h3>
                  <p className="text-luxury-light opacity-90 mb-6 text-sm">Atendimento personalizado</p>
                  <a
                    href="https://api.whatsapp.com/send?phone=5585996353513&text=Olá! Gostaria de mais informações."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block btn-luxury px-6 py-3 btn-text-luxury"
                  >
                    Conversar
                  </a>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div className="card-luxury rounded-lg p-10">
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-px h-12 bg-accent mx-auto mb-6 lamp-glow"></div>
                  <h3 className="text-2xl title-luxury text-contrast-high mb-3">Mensagem Enviada</h3>
                  <p className="text-luxury-gray text-luxury-light">Retornaremos em breve.</p>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <div className="w-px h-12 bg-accent mb-6 lamp-glow"></div>
                    <h2 className="text-2xl title-luxury text-contrast-high mb-3">
                      Envie sua Mensagem
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Nome"
                          className="w-full px-0 py-3 bg-transparent border-b border-border focus:outline-none focus:border-accent transition-all duration-300 text-contrast-high placeholder-luxury-light-gray text-luxury"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Email"
                          className="w-full px-0 py-3 bg-transparent border-b border-border focus:outline-none focus:border-accent transition-all duration-300 text-contrast-high placeholder-luxury-light-gray text-luxury"
                        />
                      </div>
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Telefone"
                        className="w-full px-0 py-3 bg-transparent border-b border-border focus:outline-none focus:border-accent transition-all duration-300 text-contrast-high placeholder-luxury-light-gray text-luxury"
                      />
                    </div>

                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Mensagem"
                        className="w-full px-0 py-3 bg-transparent border-b border-border focus:outline-none focus:border-accent transition-all duration-300 resize-none text-contrast-high placeholder-luxury-light-gray text-luxury"
                      />
                    </div>

                    <div className="pt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-luxury px-8 py-3 btn-text-luxury disabled:opacity-50"
                      >
                        {isSubmitting ? "Enviando..." : "Enviar"}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Espaçamento */}
      <div className="h-20"></div>
    </div>
  );
}