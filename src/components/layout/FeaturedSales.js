"use client";
import { useState, useEffect } from "react";
import { supabase, checkConnection } from "@/lib/supabaseClient";
import PropertyCard from "@/components/property/PropertyCard";

// Mock data para fallback
const mockProperties = [
  {
    property_id: "1",
    title: "Casa Moderna em Condomínio",
    location: "Eusébio, CE",
    sale_price: 850000,
    financing_compatible: true,
    bedrooms: 4,
    bathrooms: 3,
    parking_spaces: 2,
    built_area_m2: 180,
    has_photos: true,
    photos_highlight: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800"
    ]
  },
  {
    property_id: "2",
    title: "Apartamento Luxuoso",
    location: "Meireles, Fortaleza",
    sale_price: 650000,
    financing_compatible: true,
    bedrooms: 3,
    bathrooms: 2,
    parking_spaces: 2,
    built_area_m2: 120,
    has_photos: true,
    photos_highlight: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800"
    ]
  },
  {
    property_id: "3",
    title: "Casa com Piscina",
    location: "Aldeota, Fortaleza",
    sale_price: 1200000,
    financing_compatible: false,
    bedrooms: 5,
    bathrooms: 4,
    parking_spaces: 3,
    built_area_m2: 250,
    has_photos: true,
    photos_highlight: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800"
    ]
  }
];

export default function FeaturedSales() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [useSupabase, setUseSupabase] = useState(true);

  useEffect(() => {
    const fetchFeaturedProperties = async () => {
      try {
        // Verifica se Supabase está disponível
        const isConnected = await checkConnection();
        
        if (isConnected) {
          const { data, error } = await supabase
            .from("properties")
            .select("*")
            .eq("has_photos", true)
            .order("created_at", { ascending: false })
            .limit(6);

          if (error) throw error;

          if (data && data.length > 0) {
            // Processa dados do Supabase
            const processed = data.map(p => ({
              ...p,
              photos_highlight: p.photos_highlight || [
                `https://ijmupkeqsqxrtbdidovc.supabase.co/storage/v1/object/public/imoveis-alpha/photos_highlight/${p.property_id}/fachada.jpg`,
                `https://ijmupkeqsqxrtbdidovc.supabase.co/storage/v1/object/public/imoveis-alpha/photos_highlight/${p.property_id}/sala.jpg`
              ]
            }));
            setProperties(processed);
          } else {
            // Usa mock data se não há dados no Supabase
            setProperties(mockProperties);
          }
        } else {
          // Usa mock data se Supabase não está disponível
          setUseSupabase(false);
          setProperties(mockProperties);
        }
      } catch (err) {
        console.warn("Erro ao buscar imóveis, usando dados mock:", err);
        setUseSupabase(false);
        setProperties(mockProperties);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProperties();
  }, []);

  const renderSkeleton = () => (
    <div className="w-full max-w-screen-2xl mx-auto px-5 md:px-10 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="space-y-4 animate-pulse">
          <div className="aspect-[3/2] bg-border rounded-lg" />
          <div className="h-4 bg-border w-3/4 rounded" />
          <div className="h-4 bg-border w-1/2 rounded" />
        </div>
      ))}
    </div>
  );

  if (loading) return renderSkeleton();

  if (properties.length === 0)
    return (
      <div className="w-full h-full flex justify-center items-center py-20">
        <p className="text-muted-foreground text-center">Nenhum imóvel em destaque.</p>
      </div>
    );

  return (
    <div className="bg-secondary-greige w-full py-8 md:py-12 flex flex-col items-center">
      <div className="w-full max-w-screen-2xl px-5 md:px-10 flex flex-col">
        
        <div className="flex justify-between items-center mb-8">
          <p className="text-primary font-sans uppercase tracking-wide text-sm md:text-base">
            Featured Sales
          </p>
          <a
            href="/dashboard/properties"
            className="hidden lg:inline-flex items-center justify-center h-10 px-4 border border-primary text-primary font-sans uppercase text-sm hover:bg-primary hover:text-primary-foreground transition duration-300"
          >
            View All Sales
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {properties.map((property, index) => (
            <PropertyCard key={property.property_id} property={property} isNew={index < 3} />
          ))}
        </div>

        <div className="flex justify-center mt-8 lg:hidden">
          <a
            href="/dashboard/properties"
            className="inline-flex items-center justify-center h-10 px-4 border border-primary text-primary font-sans uppercase text-sm hover:bg-primary hover:text-primary-foreground transition duration-300"
          >
            View All Sales
          </a>
        </div>

        {!useSupabase && (
          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground">
              Dados de demonstração - Configure Supabase para dados reais
            </p>
          </div>
        )}
      </div>
    </div>
  );
}