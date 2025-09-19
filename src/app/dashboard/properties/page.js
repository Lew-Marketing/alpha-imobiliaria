"use client";
import { useState, useEffect } from "react";
import { supabase, checkConnection } from "@/lib/supabaseClient";
import PropertyCard from "@/components/property/PropertyCard";
import PropertyFilter from "@/components/property/PropertyFilter";

// Função para verificar se o Supabase está configurado
const isSupabaseConfigured = () => {
  return process.env.NEXT_PUBLIC_SUPABASE_URL && 
         process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
};

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
  const [error, setError] = useState(null);
  const [useSupabase, setUseSupabase] = useState(false);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filters, setFilters] = useState({});

  const fetchProperties = async () => {
    setLoading(true);
    setError(null);

    try {
      // Verificar se o Supabase está configurado
      if (!isSupabaseConfigured()) {
        console.log("Supabase não configurado, usando dados mock");
        setUseSupabase(false);
        setProperties(mockProperties);
        return;
      }

      // Tentar conectar ao Supabase
      const isConnected = await checkConnection();
      
      if (isConnected) {
        const { data, error } = await supabase
          .from("properties")
          .select("*")
          .eq("has_photos", true)
          .order("created_at", { ascending: false });

        if (error) {
          console.warn("Erro na query Supabase:", error.message);
          throw new Error(error.message);
        }

        if (data && data.length > 0) {
          // Processar dados do Supabase
          const processed = data.map((property) => ({
            ...property,
            photos_highlight: property.photos_highlight || [
              `https://ijmupkeqsqxrtbdidovc.supabase.co/storage/v1/object/public/imoveis-alpha/photos_highlight/${property.property_id}/fachada.jpg`,
              `https://ijmupkeqsqxrtbdidovc.supabase.co/storage/v1/object/public/imoveis-alpha/photos_highlight/${property.property_id}/sala.jpg`
            ]
          }));
          
          setProperties(processed);
          setUseSupabase(true);
          console.log(`${processed.length} imóveis carregados do Supabase`);
        } else {
          // Supabase conectado mas sem dados
          console.log("Supabase conectado mas sem dados, usando mock");
          setUseSupabase(true);
          setProperties(mockProperties);
        }
      } else {
        // Supabase não conseguiu conectar
        throw new Error("Não foi possível conectar ao Supabase");
      }
    } catch (err) {
      console.warn("Erro ao buscar imóveis:", err.message);
      setError(err.message);
      setUseSupabase(false);
      setProperties(mockProperties);
    } finally {
      setLoading(false);
    }
  };

  // Função para filtrar propriedades
  const filterProperties = (properties, filters) => {
    return properties.filter(property => {
      // Filtro de busca por texto
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        const matchesSearch = 
          property.title?.toLowerCase().includes(searchTerm) ||
          property.location?.toLowerCase().includes(searchTerm) ||
          property.description?.toLowerCase().includes(searchTerm);
        if (!matchesSearch) return false;
      }

      // Filtro por tipo
      if (filters.type && filters.type !== "all") {
        if (property.type?.toLowerCase() !== filters.type) return false;
      }

      // Filtro por faixa de preço
      if (filters.priceRange && filters.priceRange !== "all") {
        const price = property.sale_price || 0;
        const [min, max] = filters.priceRange.split("-").map(p => p.replace("+", ""));
        const minPrice = parseInt(min) || 0;
        const maxPrice = max ? parseInt(max) : Infinity;
        
        if (price < minPrice || price > maxPrice) return false;
      }

      // Filtro por localização
      if (filters.location && filters.location !== "all") {
        const location = property.location?.toLowerCase() || "";
        if (!location.includes(filters.location.toLowerCase())) return false;
      }

      // Filtro por quartos
      if (filters.bedrooms && filters.bedrooms !== "all") {
        const bedrooms = property.bedrooms || 0;
        if (filters.bedrooms === "4+") {
          if (bedrooms < 4) return false;
        } else {
          const filterBedrooms = parseInt(filters.bedrooms);
          if (bedrooms !== filterBedrooms) return false;
        }
      }

      // Filtro por vagas
      if (filters.parking && filters.parking !== "all") {
        const parking = property.parking_spaces || 0;
        if (filters.parking === "3+") {
          if (parking < 3) return false;
        } else {
          const filterParking = parseInt(filters.parking);
          if (parking !== filterParking) return false;
        }
      }

      // Filtro por financiamento
      if (filters.financing && filters.financing !== "all") {
        const hasFinancing = property.financing_compatible;
        if (filters.financing === "yes" && !hasFinancing) return false;
        if (filters.financing === "no" && hasFinancing) return false;
      }

      return true;
    });
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    const filtered = filterProperties(properties, newFilters);
    setFilteredProperties(filtered);
  };
  
  useEffect(() => {
    fetchProperties();
  }, []);

  useEffect(() => {
    const filtered = filterProperties(properties, filters);
    setFilteredProperties(filtered);
  }, [properties, filters]);

  // Loading skeleton
  if (loading) {
    return (
      <div className="bg-background min-h-screen">
        <PropertyFilter onFilterChange={handleFilterChange} totalProperties={0} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="py-12 mb-12">
            <div className="h-4 bg-border rounded w-32 mb-4 animate-pulse"></div>
            <div className="h-8 bg-border rounded w-64 animate-pulse"></div>
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
    <div className="min-h-screen bg-white">
      <PropertyFilter 
        onFilterChange={handleFilterChange} 
        totalProperties={filteredProperties.length} 
      />
      
      {/* Seção principal com background elegante */}
      <section className="relative bg-luxury-cream">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-6">
          
          {/* Status do sistema compacto */}
          {(error || !useSupabase) && (
            <div className="mb-6 text-center">
              {error && !useSupabase && (
                <div className="inline-block p-2 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-xs text-luxury-gray text-luxury">
                    <span className="font-medium text-warm-lamp">Aviso:</span> Dados de demonstração
                  </p>
                </div>
              )}
              
              {!useSupabase && !error && (
                <p className="text-xs text-luxury-gray/80 text-luxury-light">
                  Configure Supabase para dados reais
                </p>
              )}
              
              {useSupabase && (
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 rounded-lg">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <p className="text-xs text-luxury-gray text-luxury">
                    Conectado ao banco de dados
                  </p>
                </div>
              )}
            </div>
          )}

          {useSupabase && !error && (
            <div className="mb-6 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 rounded-lg">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <p className="text-xs text-luxury-gray text-luxury">
                  Conectado ao banco de dados
                </p>
              </div>
            </div>
          )}

          {/* Lista de propriedades */}
          {filteredProperties.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-luxury-gray font-light text-lg text-luxury-light mb-6">
                {properties.length === 0 ? "Nenhum imóvel encontrado." : "Nenhum imóvel corresponde aos filtros selecionados."}
              </p>
              <button 
                onClick={fetchProperties}
                className="bg-warm-lamp text-luxury-charcoal px-6 py-2 rounded-lg hover:bg-warm-lamp/90 transition-colors"
              >
                Tentar novamente
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 pb-16">
                {filteredProperties.map((property) => (
                  <PropertyCard 
                    key={property.property_id || property.id} 
                    property={property} 
                  />
                ))}
              </div>
              
              {/* Footer com informações elegante */}
              <div className="pb-12 pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-luxury-gray">
                  <div className="text-luxury-light mb-2 sm:mb-0">
                    Exibindo <span className="font-medium text-luxury-charcoal">{filteredProperties.length}</span> de <span className="font-medium text-luxury-charcoal">{properties.length}</span> {filteredProperties.length === 1 ? 'imóvel' : 'imóveis'}
                  </div>
                  <div className="text-luxury-light">
                    {useSupabase ? (
                      <span className="inline-flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        Dados em tempo real
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-warm-lamp rounded-full"></div>
                        Dados de demonstração
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}

        </div>
      </section>
    </div>
  );
}