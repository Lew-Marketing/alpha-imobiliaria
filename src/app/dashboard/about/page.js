"use client";
import Image from "next/image";
import { Award, Users, Home, TrendingUp, Shield, Heart, Star, CheckCircle } from "lucide-react";

const stats = [
  { number: "2014", label: "Fundada em", icon: Home },
  { number: "500+", label: "Imóveis vendidos", icon: TrendingUp },
  { number: "1000+", label: "Clientes satisfeitos", icon: Users },
  { number: "10+", label: "Anos de experiência", icon: Award },
];

const values = [
  {
    icon: Shield,
    title: "Ética e Transparência",
    description: "Baseamos cada negociação na integridade, honestidade e comunicação clara em todas as etapas do processo."
  },
  {
    icon: Heart,
    title: "Atendimento Personalizado",
    description: "Cada cliente é único. Oferecemos uma experiência sob medida para suas necessidades específicas."
  },
  {
    icon: Star,
    title: "Excelência em Serviços",
    description: "Busca contínua por qualidade e inovação em todos os nossos serviços imobiliários."
  },
  {
    icon: CheckCircle,
    title: "Segurança Jurídica",
    description: "Garantimos total segurança em todas as transações com documentação completa e regularizada."
  }
];

const team = [
  {
    name: "Maria Silva",
    role: "Diretora Comercial",
    experience: "15 anos de experiência",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "João Santos",
    role: "Corretor Senior",
    experience: "12 anos de experiência",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Ana Costa",
    role: "Especialista em Financiamento",
    experience: "8 anos de experiência",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
  }
];

const achievements = [
  "Melhor Imobiliária do Eusébio 2023",
  "Certificação CRECI em dia",
  "Parceria com principais bancos",
  "Atendimento 6 dias por semana",
  "Equipe especializada e qualificada",
  "Tecnologia de ponta em avaliações"
];

export default function Sobre() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <Image
          src="/images/about-background.jpg"
          alt="Alpha Conceito Imobiliária"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-8 leading-tight">
              Alpha Conceito
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90 mb-8">
              Confiança, transparência e excelência no mercado imobiliário desde 2014
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3">
                <span className="text-sm font-medium">CRECI 1167J</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3">
                <span className="text-sm font-medium">Eusébio, CE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl lg:text-4xl font-light text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
                  Nossa História
                </h2>
                <div className="w-20 h-1 bg-blue-600 mb-8"></div>
              </div>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  A <strong className="text-gray-900">Alpha Conceito</strong> iniciou suas atividades em 2014 
                  com uma visão clara: construir uma história sólida e confiável no mercado imobiliário 
                  de Fortaleza e região metropolitana.
                </p>
                
                <p>
                  Desde o início, nossa missão tem sido oferecer um atendimento diferenciado, baseado 
                  em ética, transparência e excelência. Cada negociação é conduzida com o máximo 
                  profissionalismo, garantindo segurança e satisfação para nossos clientes.
                </p>
                
                <p>
                  Nossa atuação dinâmica e comprometida nos tornou referência no mercado regional, 
                  consolidando a Alpha Conceito como uma das empresas mais respeitadas e eficientes 
                  do setor imobiliário cearense.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-light text-blue-600 mb-2">10+</div>
                  <div className="text-sm text-gray-600">Anos no mercado</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-light text-blue-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Imóveis vendidos</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-vertical.jpg"
                  alt="Equipe Alpha Conceito"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-2xl font-light">2014</div>
                  <div className="text-xs">Fundação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Os princípios que guiam cada decisão e cada relacionamento que construímos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <value.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Nossa Equipe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Profissionais experientes e qualificados, prontos para realizar seus sonhos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6">
                  <div className="aspect-square relative rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-1">
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm">
                  {member.experience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Nossos Diferenciais
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              O que nos torna únicos no mercado imobiliário
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                <span className="font-medium">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Entre em contato conosco e descubra como podemos ajudar você a realizar seus objetivos imobiliários
          </p>
          
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-light text-gray-900 mb-2">(85) 4141-3632</div>
                <div className="text-gray-600">Telefone fixo</div>
              </div>
              <div>
                <div className="text-2xl font-light text-gray-900 mb-2">(85) 99635-3513</div>
                <div className="text-gray-600">WhatsApp</div>
              </div>
              <div>
                <div className="text-2xl font-light text-gray-900 mb-2">comercialalphaconceito@gmail.com</div>
                <div className="text-gray-600">Email</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/dashboard/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Entre em Contato
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5585996353513&text=Olá! Gostaria de mais informações sobre os serviços da Alpha Conceito."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-green-600 transition-colors duration-200"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}