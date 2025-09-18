"use client";
import { useState, useEffect } from "react";
import { supabase, checkConnection } from "@/lib/supabaseClient";
import PropertyCard from "@/components/property/PropertyCard";

// Mock data expandido para demonstração
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
  },
  {
    property_id: "4",
    title: "Cobertura Duplex",
    location: "Cocó, Fortaleza",
    sale_price: 980000,
    financing_compatible: true,
    bedrooms: 4,
    bathrooms: 3,
    parking_spaces: 2,
    built_area_m2: 200,
    has_photos: true,
    photos_highlight: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800",
      "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=800"
    ]
  },
  {
    property_id: "5",
    title: "Casa de Praia",
    location: "Porto das Dunas, Aquiraz",
    sale_price: 750000,
    financing_compatible: true,
    bedrooms: 3,
    bathrooms: 2,
    parking_spaces: 2,
    built_area_m2: 150,
    has_photos: true,
    photos_highlight: [
      "https://images.unsplash.com/photo-1600566753229-f8d4c57c7b8b?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
    ]
  },
  {
    property_id: "6",
    title: "Loft Moderno",
    location: "Centro, Fortaleza",
    sale_price: 450000,
    financing_compatible: true,
    bedrooms: 1,
    bathrooms: 1,
    parking_spaces: 1,
    built_area_m2: 80,
    has_photos: true,
    photos_highlight: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800"
    ]
  }
];

export default function Properties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [useSupabase, setUseSupabase] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const isConnected = await checkConnection();
        
        if (isConnected) {
          const { data, error } = await supabase
            .from("properties")
            .select("*")
            .eq("has_photos", true)
            .order("created_at", { ascending: false });

          if (error) throw error;

          if (data && data.length > 0) {
            const processed = data.map((p) => ({
              ...p,
              photos_highlight: p.photos_highlight || [
                `https://ijmupkeqsqxrtbdidovc.supabase.co/storage/v1/object/public/imoveis-alpha/photos_highlight/${p.property_id}/fachada.jpg`,
                `https://ijmupkeqsqxrtbdidovc.supabase.co/storage/v1/object/public/imoveis-alpha/photos_highlight/${p.property_id}/sala.jpg`
              ]
            }));
            setProperties(processed);
          } else {
            setProperties(mockProperties);
          }
        } else {
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

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <div className="bg-background min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-3xl lg:text-4xl font-light text-foreground">
              Todos os Imóveis
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4 animate-pulse">
                <div className="aspect-[4/3] bg-border rounded" />
                <div className="h-4 bg-border rounded w-1/2" />
                <div className="h-6 bg-border rounded w-3/4" />
                <div className="h-4 bg-border rounded w-1/4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="mb-16">
          <p className="text-xs text-muted-foreground/80 tracking-[0.2em] uppercase font-light mb-4">
            Nosso Portfólio
          </p>
          <h1 className="text-3xl lg:text-4xl font-light text-foreground">
            Todos os Imóveis
          </h1>
          {!useSupabase && (
            <p className="text-sm text-muted-foreground mt-2">
              Dados de demonstração - Configure Supabase para dados reais
            </p>
          )}
        </div>

        {properties.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground font-light text-lg">
              Nenhum imóvel encontrado.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {properties.map((property) => (
              <PropertyCard key={property.property_id} property={property} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}