"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { supabase, checkConnection } from "@/lib/supabaseClient";

// Mock data para relacionados
const mockRelatedProperties = [
  {
    property_id: "4",
    title: "Cobertura Duplex",
    location: "Cocó, Fortaleza",
    sale_price: 980000,
    financing_compatible: true,
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
    photos_highlight: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800"
    ]
  }
];

export default function RelatedSales() {
  const [properties, setProperties] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [recentlyViewedLoading, setRecentlyViewedLoading] = useState(true);
  const [hoverIndex, setHoverIndex] = useState(null);
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
            .order("created_at", { ascending: false })
            .limit(3);

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
            setProperties(mockRelatedProperties);
          }
        } else {
          setUseSupabase(false);
          setProperties(mockRelatedProperties);
        }
      } catch (err) {
        console.warn("Erro ao buscar imóveis relacionados, usando dados mock:", err);
        setUseSupabase(false);
        setProperties(mockRelatedProperties);
      } finally {
        setLoading(false);
      }
    };

    const fetchRecentlyViewed = async () => {
      try {
        if (typeof window === 'undefined') {
          setRecentlyViewedLoading(false);
          return;
        }

        const stored = JSON.parse(localStorage.getItem("recentlyViewed") || "[]");
        
        if (stored.length === 0) {
          setRecentlyViewed([]);
          setRecentlyViewedLoading(false);
          return;
        }

        // Para mock data, usa os dados armazenados diretamente
        if (!useSupabase) {
          const mockRecentlyViewed = stored.slice(0, 3).map((item, index) => ({
            property_id: item.property_id,
            title: item.title || `Imóvel ${item.property_id}`,
            location: item.location || "Fortaleza, CE",
            sale_price: item.sale_price || 500000,
            financing_compatible: item.financing_compatible !== false,
            photos_highlight: [
              `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&sig=${index}`,
              `https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&sig=${index}`
            ]
          }));
          setRecentlyViewed(mockRecentlyViewed);
          setRecentlyViewedLoading(false);
          return;
        }

        // Busca os detalhes dos imóveis recentemente vistos no Supabase
        const propertyIds = stored.map(item => item.property_id || item.id);
        
        if (propertyIds.length === 0) {
          setRecentlyViewed([]);
          setRecentlyViewedLoading(false);
          return;
        }

        const isConnected = await checkConnection();
        
        if (isConnected) {
          const { data, error } = await supabase
            .from("properties")
            .select("*")
            .in("property_id", propertyIds)
            .eq("has_photos", true);

          if (error) throw error;

          const processed = data?.map((p) => ({
            ...p,
            photos_highlight: p.photos_highlight || [
              `https://ijmupkeqsqxrtbdidovc.supabase.co/storage/v1/object/public/imoveis-alpha/photos_highlight/${p.property_id}/fachada.jpg`,
              `https://ijmupkeqsqxrtbdidovc.supabase.co/storage/v1/object/public/imoveis-alpha/photos_highlight/${p.property_id}/sala.jpg`
            ]
          })) || [];

          const orderedRecent = [];
          stored.forEach(storedItem => {
            const found = processed.find(p => p.property_id === (storedItem.property_id || storedItem.id));
            if (found) orderedRecent.push(found);
          });

          setRecentlyViewed(orderedRecent.slice(0, 3));
        }
      } catch (err) {
        console.warn("Erro ao buscar imóveis recentemente vistos:", err);
        setRecentlyViewed([]);
      } finally {
        setRecentlyViewedLoading(false);
      }
    };

    fetchProperties();
    fetchRecentlyViewed();
  }, [useSupabase]);

  if (loading)
    return (
      <p className="py-10 text-center text-muted-foreground">
        Carregando imóveis em destaque...
      </p>
    );

  return (
    <div className="bg-secondary-greige py-10 w-full flex flex-col items-center tracking-wide">
      {/* Destaques */}
      <p className="text-primary font-sans font-normal text-base uppercase pb-10">
        Imóveis em Destaque
      </p>

      {properties.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-4 lg:px-10">
          {properties.map((property, index) => (
            <Link
              key={property.property_id}
              href={`/dashboard/properties/${property.property_id}`}
              className="cursor-pointer relative group max-w-[700px] w-full"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="relative aspect-[3/2] w-full rounded overflow-hidden">
                <Image
                  src={
                    hoverIndex === index && property.photos_highlight?.[1] 
                      ? property.photos_highlight[1] 
                      : property.photos_highlight?.[0] || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
                  }
                  alt={property.title || "Imóvel"}
                  fill
                  className="object-cover transition-opacity duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="mt-6">
                <div className="flex justify-between">
                  <p className="text-base font-serif">{property.title}</p>
                  <p className="text-base font-sans font-medium">
                    {property.sale_price?.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-base font-sans font-medium">
                    {property.financing_compatible
                      ? "Financiamento disponível"
                      : "À Vista"}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="py-10 text-center text-muted-foreground">
          Nenhum imóvel em destaque encontrado.
        </p>
      )}

      {/* Divider */}
      <hr className="border-t border-gray-300 my-10 w-full max-w-6xl" />

      {/* Recently Viewed */}
      <div className="w-full flex flex-col items-center tracking-wide">
        <p className="text-primary font-sans font-normal text-base uppercase pb-10">
          Vistos Recentemente
        </p>

        {recentlyViewedLoading ? (
          <p className="py-10 text-center text-muted-foreground">
            Carregando imóveis recentemente vistos...
          </p>
        ) : recentlyViewed.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-4 lg:px-10">
            {recentlyViewed.map((property) => (
              <Link
                key={property.property_id}
                href={`/dashboard/properties/${property.property_id}`}
                className="cursor-pointer relative group max-w-[700px] w-full"
              >
                <div className="relative aspect-[3/2] w-full rounded overflow-hidden">
                  <Image
                    src={property.photos_highlight?.[0] || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"}
                    alt={property.title || "Imóvel"}
                    fill
                    className="object-cover transition-opacity duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="mt-6">
                  <div className="flex justify-between">
                    <p className="text-base font-serif">{property.title}</p>
                    <p className="text-base font-sans font-medium">
                      {property.sale_price?.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-base font-sans font-medium">
                      {property.financing_compatible
                        ? "Financiamento disponível"
                        : "À Vista"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-center col-span-full">
            Nenhum imóvel visto recentemente.
          </p>
        )}
      </div>

      {!useSupabase && (
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            Dados de demonstração - Configure Supabase para dados reais
          </p>
        </div>
      )}
    </div>
  );
}