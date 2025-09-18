"use client";
import RelatedSales from "@/components/layout/RelatedSales";
import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { supabase, checkConnection } from "@/lib/supabaseClient";
import { formatPrice } from "@/lib/utils";
import { BedDouble, Bath, Car, DoorOpen, Droplet, Flame, Sun, Lock, ChefHat } from "lucide-react";

// Mock data para propriedades individuais
const mockPropertyData = {
  "1": {
    property_id: "1",
    title: "Casa Moderna em Condomínio",
    location: "Eusébio, CE",
    full_address: "Rua das Flores, 123 - Eusébio, CE",
    sale_price: 850000,
    financing_compatible: true,
    bedrooms: 4,
    suites: 2,
    bathrooms: 3,
    parking_spaces: 2,
    built_area_m2: 180,
    land_area_m2: 300,
    construction_year: 2020,
    ready_to_live: true,
    has_pool: true,
    has_gourmet_area: true,
    has_barbecue: true,
    has_solar_energy: false,
    closed_gate: true,
    description: "Linda casa moderna em condomínio fechado, com acabamentos de primeira qualidade. Possui 4 quartos sendo 2 suítes, sala ampla, cozinha planejada, área gourmet com churrasqueira e piscina. Localizada em uma das melhores regiões do Eusébio."
  },
  "2": {
    property_id: "2",
    title: "Apartamento Luxuoso",
    location: "Meireles, Fortaleza",
    full_address: "Av. Beira Mar, 456 - Meireles, Fortaleza, CE",
    sale_price: 650000,
    financing_compatible: true,
    bedrooms: 3,
    suites: 1,
    bathrooms: 2,
    parking_spaces: 2,
    built_area_m2: 120,
    land_area_m2: 0,
    construction_year: 2018,
    ready_to_live: true,
    has_pool: false,
    has_gourmet_area: false,
    has_barbecue: false,
    has_solar_energy: true,
    closed_gate: false,
    description: "Apartamento luxuoso com vista para o mar, localizado na melhor região de Fortaleza. Possui 3 quartos sendo 1 suíte, sala ampla com varanda, cozinha americana e 2 vagas de garagem."
  },
  "3": {
    property_id: "3",
    title: "Casa com Piscina",
    location: "Aldeota, Fortaleza",
    full_address: "Rua Santos Dumont, 789 - Aldeota, Fortaleza, CE",
    sale_price: 1200000,
    financing_compatible: false,
    bedrooms: 5,
    suites: 3,
    bathrooms: 4,
    parking_spaces: 3,
    built_area_m2: 250,
    land_area_m2: 400,
    construction_year: 2019,
    ready_to_live: true,
    has_pool: true,
    has_gourmet_area: true,
    has_barbecue: true,
    has_solar_energy: true,
    closed_gate: true,
    description: "Magnífica casa de alto padrão com piscina e área gourmet completa. Possui 5 quartos sendo 3 suítes, sala de estar e jantar, escritório, cozinha gourmet e amplo quintal com piscina."
  }
};

export default function PropertyPage() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [useSupabase, setUseSupabase] = useState(true);
  const sobreRef = useRef(null);
  const relatedRef = useRef(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const isConnected = await checkConnection();
        
        if (isConnected) {
          const { data, error } = await supabase
            .from("properties")
            .select("*")
            .eq("property_id", id)
            .single();
            
          if (error) throw error;
          
          if (data) {
            setProperty(data);
          } else {
            // Usa mock data se não encontrar no Supabase
            setProperty(mockPropertyData[id] || mockPropertyData["1"]);
            setUseSupabase(false);
          }
        } else {
          // Usa mock data se Supabase não está disponível
          setProperty(mockPropertyData[id] || mockPropertyData["1"]);
          setUseSupabase(false);
        }
      } catch (error) {
        console.warn("Erro ao buscar imóvel, usando dados mock:", error);
        setProperty(mockPropertyData[id] || mockPropertyData["1"]);
        setUseSupabase(false);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProperty();
  }, [id]);

  // Adiciona aos recentemente vistos
  useEffect(() => {
    if (property && typeof window !== "undefined") {
      const stored = JSON.parse(localStorage.getItem("recentlyViewed") || "[]");
      const filtered = stored.filter((item) => (item.property_id || item.id) !== property.property_id);
      const updated = [
        {
          property_id: property.property_id,
          title: property.title,
          sale_price: property.sale_price,
          location: property.location,
          financing_compatible: property.financing_compatible,
          timestamp: new Date().toISOString(),
        },
        ...filtered,
      ].slice(0, 10);
      localStorage.setItem("recentlyViewed", JSON.stringify(updated));
    }
  }, [property]);

  if (loading)
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <p className="text-muted-foreground">Carregando imóvel...</p>
      </div>
    );

  if (!property)
    return (
      <div className="w-full h-[60vh] flex items-center justify-center">
        <p className="text-muted-foreground">Imóvel não encontrado.</p>
      </div>
    );

  // Gera URLs de imagens baseadas no ID
  const getPhotosHighlight = () => {
    const fallbackImages = [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80"
    ];
    
    const startIndex = parseInt(id) % fallbackImages.length;
    return [
      fallbackImages[startIndex],
      fallbackImages[(startIndex + 1) % fallbackImages.length],
      fallbackImages[(startIndex + 2) % fallbackImages.length],
      fallbackImages[(startIndex + 3) % fallbackImages.length],
      fallbackImages[(startIndex + 4) % fallbackImages.length]
    ];
  };

  const photosHighlight = getPhotosHighlight();
  const mapAddress = property.full_address || property.location || "Fortaleza, CE";

  return (
    <div className="w-full bg-background text-foreground">
      
      <div className={`${showMap ? 'bg-[#f5f0e5]' : 'bg-secondary-greige'} flex flex-col lg:flex-row w-full`}>
        <div className="relative w-full lg:w-3/5 aspect-[3/2] lg:h-[80vh]">
          {showMap ? (
            <div className="relative w-full h-full bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-600 mb-2">Mapa não disponível</p>
                <p className="text-sm text-gray-500">{mapAddress}</p>
              </div>
              <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-[#f5f0e5] via-[#f5f0e5]/60 to-transparent pointer-events-none"></div>
            </div>
          ) : (
            <Image 
              src={photosHighlight[0]} 
              alt={property.title || "Imóvel"} 
              fill 
              className="object-cover" 
              priority 
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          )}

          <Link
            href={`/dashboard/properties/${id}/photos`}
            className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 text-xs uppercase tracking-widest shadow-md hover:bg-gray-100 transition-all duration-300"
          >
            More Photos
          </Link>
        </div>

        <div className={`${showMap ? 'bg-[#f5f0e5]' : 'bg-secondary-greige'} flex justify-start items-start lg:items-center w-full lg:w-2/5 lg:sticky top-32`}>
          <div className="relative mx-6 lg:mx-20 py-10 lg:py-0 w-full">
            <p className="text-lg lg:text-xl font-serif leading-8 font-light text-foreground">
              {property.title || "Imóvel"}
            </p>
            <p className="text-base font-serif text-foreground">{property.location || "Localização"}</p>

            <div className="flex gap-6 justify-between lg:justify-start mt-4">
              <div>
                <p className="text-base font-serif text-foreground">{formatPrice(property.sale_price)}</p>
                <p className="text-base font-serif text-foreground">
                  {property.financing_compatible ? "Financiamento disponível" : "À Vista"}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <BedDouble className="w-5 h-5" />
                <span>{property.bedrooms || 0} Dormitórios</span>
              </div>
              <div className="flex items-center gap-2">
                <DoorOpen className="w-5 h-5" />
                <span>{property.suites || 0} Suítes</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="w-5 h-5" />
                <span>{property.bathrooms || 0} Banheiros</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-5 h-5" />
                <span>{property.parking_spaces || 0} Vagas</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 mt-4 text-sm text-gray-700">
              <span>🏠 {property.built_area_m2 || 0} m² construídos</span>
              <span>🌳 {property.land_area_m2 || 0} m² terreno</span>
              {property.construction_year && <span>📅 Ano: {property.construction_year}</span>}
              }
              {property.ready_to_live && <span>✅ Pronto para morar</span>}
              }
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {property.has_pool && (
                <span className="flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                  <Droplet className="w-3 h-3" /> Piscina
                </span>
              )}
              {property.has_gourmet_area && (
                <span className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">
                  <Flame className="w-3 h-3" /> Gourmet
                </span>
              )}
              {property.has_barbecue && (
                <span className="flex items-center gap-1 bg-red-100 text-red-700 px-2 py-1 rounded text-xs">
                  <ChefHat className="w-3 h-3" /> Churrasqueira
                </span>
              )}
              {property.has_solar_energy && (
                <span className="flex items-center gap-1 bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs">
                  <Sun className="w-3 h-3" /> Energia Solar
                </span>
              )}
              {property.closed_gate && (
                <span className="flex items-center gap-1 bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                  <Lock className="w-3 h-3" /> Condomínio Fechado
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-4 pt-6 text-sm font-sans tracking-widest uppercase">
              <button
                className="text-white bg-black px-4 py-2 transition-all duration-500 hover:bg-gray-800"
                onClick={() => sobreRef.current?.scrollIntoView({ behavior: "smooth" })}
              >
                Descrição
              </button>
              <button
                className="text-white bg-black px-4 py-2"
                onClick={() => setShowMap(!showMap)}
              >
                {showMap ? "Foto" : "Mapa"}
              </button>
              <button
                className="text-white bg-black px-4 py-2"
                onClick={() => relatedRef.current?.scrollIntoView({ behavior: "smooth" })}
              >
                Relacionados
              </button>
            </div>

            <div className="space-y-2 mt-6 flex flex-col">
              <a
                href={`https://api.whatsapp.com/send?phone=558586020514&text=${encodeURIComponent(
                  `Olá! Gostaria de agendar uma visita para este imóvel (ref: ${property?.property_id}).`
                )}`}
                target="_blank"
                className="bg-black text-white px-6 py-3 uppercase text-xs tracking-widest flex justify-center items-center"
              >
                Solicitar visita
              </a>

              <p className="text-sm font-serif text-foreground">{property.full_address || property.location}</p>

              <a href="tel:+55 85 8602-0514" className="font-medium cursor-pointer text-black underline">
                ou ligue para +55 (85) 8602-0514
              </a>
            </div>

            {!useSupabase && (
              <div className="mt-4">
                <p className="text-xs text-muted-foreground">
                  Dados de demonstração - Configure Supabase para dados reais
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div ref={sobreRef} className="bg-background px-6 md:px-[12vw] py-12 w-full">
        <h2 className="text-2xl font-bold mb-4">{property.title}</h2>
        <p className="text-lg md:text-xl font-light text-foreground leading-relaxed mb-4">
          {property.title || "Imóvel de alto padrão com excelente localização"}
        </p>
        <p
          className={`text-base md:text-lg text-muted-foreground mt-4 leading-relaxed transition-all duration-300 ${
            expanded ? "max-h-full" : "max-h-24 overflow-hidden"
          }`}
        >
          {property.description || "Este belo imóvel oferece conforto e elegância em uma localização privilegiada. Com acabamentos de primeira qualidade e uma arquitetura moderna, é perfeito para quem busca qualidade de vida e sofisticação."}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-6 px-6 py-3 border border-primary text-primary uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition"
        >
          {expanded ? "Ler menos" : "Ler mais"}
        </button>
      </div>

      <div className="max-w-screen-2xl mx-auto px-5 md:px-10 py-12 grid grid-cols-2 gap-6">
        {photosHighlight.slice(1, 5).map((photo, idx) => (
          <div key={idx} className="relative aspect-[4/3] w-full rounded-sm overflow-hidden">
            <Image 
              src={photo} 
              alt={`Foto do cômodo ${idx + 1}`} 
              fill 
              className="object-cover" 
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>

      <div ref={relatedRef}>
        <RelatedSales />
      </div>

      <footer className="w-full bg-primary text-primary-foreground px-6 py-6 flex flex-col lg:flex-row items-center justify-center gap-4">
        <a
          href={`https://api.whatsapp.com/send?phone=558586020514&text=${encodeURIComponent(
            `Olá! Gostaria de mais informações sobre este imóvel (ref: ${property?.property_id}).`
          )}`}
          target="_blank"
          className="bg-green-500 text-white px-4 py-2 rounded text-xs flex items-center gap-2"
        >
          Converse sobre este imóvel
        </a>
        <input type="email" placeholder="ex: joana@exemplo.com" className="p-2 pl-4 w-full lg:w-64 text-sm text-black" />
        <button className="bg-black text-white px-4 py-2 text-xs uppercase tracking-widest">
          Inscrever-se
        </button>
        <label className="text-xs flex items-center gap-2 opacity-70">
          <input type="checkbox" required className="w-4 h-4" />
          Aceito a Política de Privacidade e os Termos *
        </label>
      </footer>
    </div>
  );
}