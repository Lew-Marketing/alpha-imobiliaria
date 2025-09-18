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
    <div className="min-h-screen">
      
      {/* Hero com imagem de fundo elegante */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-leather-dark/80 via-leather-medium/70 to-leather-light/60" />
        
        <div className="relative z-10 text-center text-cream max-w-4xl mx-auto px-8">
          <div className="w-1 h-24 bg-cream mx-auto mb-12"></div>
          <h1 className="text-6xl md:text-7xl font-light mb-8 tracking-tight">
            Contato
          </h1>
          <p className="text-xl font-light opacity-90 leading-relaxed">
            Vamos conversar sobre seu próximo lar
          </p>
        </div>
      </section>

      {/* Seção principal com transparências */}
      <section className="relative -mt-32 z-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Informações com fundo transparente */}
            <div className="space-y-8">
              
              {/* Card principal */}
              <div className="bg-white/90 backdrop-blur-md p-12 border border-white/20 shadow-2xl">
                <div className="w-1 h-16 bg-accent mb-8"></div>
                <h2 className="text-2xl font-light text-leather-dark mb-8 tracking-wide">
                  Alpha Conceito
                </h2>
                
                <div className="space-y-6 text-leather-medium font-light">
                  <div>
                    <p className="text-sm uppercase tracking-widest text-leather-light mb-2">Endereço</p>
                    <p>Av. Pacífico, 731, Sala 305<br />Cidade Alpha, Eusébio, CE</p>
                  </div>
                  
                  <div>
                    <p className="text-sm uppercase tracking-widest text-leather-light mb-2">Telefones</p>
                    <a href="tel:+558541413632" className="block hover:text-leather-dark transition-colors">
                      (85) 4141-3632
                    </a>
                    <a href="tel:+5585996353513" className="block hover:text-leather-dark transition-colors">
                      (85) 99635-3513
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-sm uppercase tracking-widest text-leather-light mb-2">Email</p>
                    <a 
                      href="mailto:comercialalphaconceito@gmail.com" 
                      className="hover:text-leather-dark transition-colors"
                    >
                      comercialalphaconceito@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp destacado */}
              <div className="relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center rounded"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&q=80')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-leather-medium/80 rounded" />
                
                <div className="relative z-10 p-12 text-cream">
                  <div className="w-1 h-12 bg-cream mb-6"></div>
                  <h3 className="text-xl font-light mb-4">WhatsApp</h3>
                  <p className="font-light opacity-90 mb-8">Atendimento personalizado</p>
                  <a
                    href="https://api.whatsapp.com/send?phone=5585996353513&text=Olá! Gostaria de mais informações."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-cream text-leather-dark px-8 py-3 font-light hover:bg-white transition-colors tracking-wide"
                  >
                    Conversar
                  </a>
                </div>
              </div>
            </div>

            {/* Formulário com transparência */}
            <div className="bg-white/95 backdrop-blur-md p-12 border border-white/20 shadow-2xl">
              
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-1 h-16 bg-accent mx-auto mb-8"></div>
                  <h3 className="text-2xl font-light text-leather-dark mb-4">Mensagem Enviada</h3>
                  <p className="text-leather-medium font-light">Retornaremos em breve.</p>
                </div>
              ) : (
                <>
                  <div className="mb-12">
                    <div className="w-1 h-16 bg-accent mb-8"></div>
                    <h2 className="text-2xl font-light text-leather-dark mb-4">
                      Envie sua Mensagem
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Nome"
                          className="w-full px-0 py-4 bg-transparent border-0 border-b border-leather-light/30 focus:outline-none focus:border-leather-medium transition-colors text-leather-dark placeholder-leather-light font-light"
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
                          className="w-full px-0 py-4 bg-transparent border-0 border-b border-leather-light/30 focus:outline-none focus:border-leather-medium transition-colors text-leather-dark placeholder-leather-light font-light"
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
                        className="w-full px-0 py-4 bg-transparent border-0 border-b border-leather-light/30 focus:outline-none focus:border-leather-medium transition-colors text-leather-dark placeholder-leather-light font-light"
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
                        className="w-full px-0 py-4 bg-transparent border-0 border-b border-leather-light/30 focus:outline-none focus:border-leather-medium transition-colors resize-none text-leather-dark placeholder-leather-light font-light"
                      />
                    </div>

                    <div className="pt-8">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-leather-dark text-cream px-12 py-4 font-light hover:bg-leather-medium transition-all duration-300 disabled:opacity-50 tracking-wide"
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

      {/* Espaçamento final */}
      <div className="h-32"></div>
    </div>
  );
}