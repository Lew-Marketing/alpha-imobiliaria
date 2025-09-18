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
    <div className="min-h-screen bg-warm-white">
      
      {/* Hero minimalista */}
      <section className="relative bg-gradient-to-b from-leather-dark to-leather-medium text-warm-white">
        <div className="max-w-4xl mx-auto px-8 py-32 text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-8 tracking-tight leading-tight">
            Contato
          </h1>
          <p className="text-xl font-light opacity-90 max-w-2xl mx-auto leading-relaxed">
            Vamos conversar sobre seu próximo lar
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          
          {/* Informações elegantes */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Endereço */}
            <div className="bg-white/80 backdrop-blur-sm p-8 border border-soft-beige">
              <div className="w-1 h-12 bg-accent mb-6"></div>
              <h3 className="text-lg font-light text-leather-dark mb-4 tracking-wide">Escritório</h3>
              <p className="text-leather-medium leading-relaxed">
                Av. Pacífico, 731<br />
                Cidade Alpha, Sala 305<br />
                Eusébio, CE
              </p>
              <p className="text-xs text-leather-light mt-4 tracking-widest uppercase">CRECI 1167J</p>
            </div>

            {/* Contatos */}
            <div className="bg-white/80 backdrop-blur-sm p-8 border border-soft-beige">
              <div className="w-1 h-12 bg-accent mb-6"></div>
              <h3 className="text-lg font-light text-leather-dark mb-6 tracking-wide">Fale Conosco</h3>
              <div className="space-y-4">
                <div>
                  <a href="tel:+558541413632" className="text-leather-medium hover:text-leather-dark transition-colors font-light">
                    (85) 4141-3632
                  </a>
                </div>
                <div>
                  <a href="tel:+5585996353513" className="text-leather-medium hover:text-leather-dark transition-colors font-light">
                    (85) 99635-3513
                  </a>
                </div>
                <div>
                  <a 
                    href="mailto:comercialalphaconceito@gmail.com" 
                    className="text-leather-medium hover:text-leather-dark transition-colors font-light"
                  >
                    comercialalphaconceito@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Horário */}
            <div className="bg-white/80 backdrop-blur-sm p-8 border border-soft-beige">
              <div className="w-1 h-12 bg-accent mb-6"></div>
              <h3 className="text-lg font-light text-leather-dark mb-6 tracking-wide">Horário</h3>
              <div className="space-y-2 text-leather-medium font-light">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
              </div>
            </div>

            {/* WhatsApp discreto */}
            <div className="bg-gradient-to-r from-accent to-leather-medium text-warm-white p-8">
              <h3 className="text-lg font-light mb-4 tracking-wide">WhatsApp</h3>
              <p className="font-light opacity-90 mb-6">Atendimento personalizado</p>
              <a
                href="https://api.whatsapp.com/send?phone=5585996353513&text=Olá! Gostaria de mais informações."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-warm-white text-leather-dark px-8 py-3 font-light hover:bg-cream transition-colors tracking-wide"
              >
                Conversar
              </a>
            </div>
          </div>

          {/* Formulário minimalista */}
          <div className="lg:col-span-3">
            <div className="bg-white/80 backdrop-blur-sm p-12 border border-soft-beige">
              
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-1 h-16 bg-accent mx-auto mb-8"></div>
                  <h3 className="text-2xl font-light text-leather-dark mb-4 tracking-wide">Mensagem Enviada</h3>
                  <p className="text-leather-medium font-light">
                    Retornaremos em breve.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-12">
                    <div className="w-1 h-16 bg-accent mb-8"></div>
                    <h2 className="text-2xl font-light text-leather-dark mb-4 tracking-wide">
                      Envie sua Mensagem
                    </h2>
                    <p className="text-leather-medium font-light">
                      Preencha os campos abaixo
                    </p>
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
                          className="w-full px-0 py-4 bg-transparent border-0 border-b border-soft-beige focus:outline-none focus:border-leather-medium transition-colors text-foreground placeholder-leather-light font-light"
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
                          className="w-full px-0 py-4 bg-transparent border-0 border-b border-soft-beige focus:outline-none focus:border-leather-medium transition-colors text-foreground placeholder-leather-light font-light"
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
                        className="w-full px-0 py-4 bg-transparent border-0 border-b border-soft-beige focus:outline-none focus:border-leather-medium transition-colors text-foreground placeholder-leather-light font-light"
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
                        className="w-full px-0 py-4 bg-transparent border-0 border-b border-soft-beige focus:outline-none focus:border-leather-medium transition-colors resize-none text-foreground placeholder-leather-light font-light"
                      />
                    </div>

                    <div className="pt-8">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-leather-dark text-warm-white px-12 py-4 font-light hover:bg-leather-medium transition-all duration-300 disabled:opacity-50 tracking-wide"
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
      </div>

      {/* Espaçamento final */}
      <div className="h-32"></div>
    </div>
  );
}