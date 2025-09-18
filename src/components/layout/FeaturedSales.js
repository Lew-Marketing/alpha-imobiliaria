"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase, checkConnection } from "@/lib/supabaseClient";
import PropertyCard from "@/components/property/PropertyCard";

// Função para verificar se o Supabase está configurado
const isSupabaseConfigured = () => {
  return process.env.NEXT_PUBLIC_SUPABASE_URL && 
         process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
};

export default function FeaturedSales() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dados mock para desenvolvimento
  const mockProperties = [
    {
      property_id: 1,
      title: "Casa Moderna em Condomínio",
      price: 850000,
      location: "Alphaville, Barueri",
      bedrooms: 4,
      bathrooms: 3,
      area: 280,
      image_url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      featured: true,
      type: "Casa"
    },
    {
      property_id: 2,
      title: "Apartamento Luxuoso Vista Mar",
      price: 1200000,
      location: "Riviera de São Lourenço",
      bedrooms: 3,
      bathrooms: 2,
      area: 150,
      image_url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      featured: true,
      type: "Apartamento"
    },
    {
      property_id: 3,
      title: "Sobrado Familiar Completo",
      price: 650000,
      location: "Vila Madalena, São Paulo",
      bedrooms: 3,
      bathrooms: 2,
      area: 200,
      image_url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      featured: true,
      type: "Sobrado"
    },
    {
      property_id: 4,
      title: "Cobertura Duplex Premium",
      price: 2500000,
      location: "Jardins, São Paulo",
      bedrooms: 4,
      bathrooms: 4,
      area: 350,
      image_url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      featured: true,
      type: "Cobertura"
    },
    {
      property_id: 5,
      title: "Casa de Campo Aconchegante",
      price: 450000,
      location: "Campos do Jordão",
      bedrooms: 2,
      bathrooms: 2,
      area: 120,
      image_url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      featured: true,
      type: "Casa"
    },
    {
      property_id: 6,
      title: "Loft Industrial Moderno",
      price: 380000,
      location: "Vila Olímpia, São Paulo",
      bedrooms: 1,
      bathrooms: 1,
      area: 80,
      image_url: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
      featured: true,
      type: "Loft"
    }
  ];

  const fetchFeaturedProperties = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Verificar se o Supabase está configurado
      if (isSupabaseConfigured()) {
        const isConnected = await checkConnection();
        
        if (isConnected) {
          const { data, error } = await supabase
            .from('properties')
            .select('*')
            .eq('featured', true)
            .limit(6);
          
          if (error) {
            console.warn('Supabase query error:', error.message);
            throw new Error(error.message);
          }
          
          if (data && data.length > 0) {
            setProperties(data);
            setLoading(false);
            return;
          }
        }
      }
      
      // Usar dados mock se Supabase não estiver disponível ou não retornar dados
      console.log('Using mock data for featured properties');
      // Simulate network delay for smoother loading
      await new Promise(resolve => setTimeout(resolve, 300));
      setProperties(mockProperties);
      
    } catch (error) {
      console.warn('Error fetching properties:', error.message);
      setError(error.message);
      // Fallback para dados mock em caso de erro
      setProperties(mockProperties);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeaturedProperties();
  }, []);

  // Loading skeleton
  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Imóveis em Destaque
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Carregando os melhores imóveis para você...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 will-change-transform">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse will-change-transform">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Imóveis em Destaque
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubra os melhores imóveis selecionados especialmente para você
          </p>
        </div>

        {/* Mostrar erro se houver, mas ainda exibir os dados mock */}
        {error && (
          <div className="mb-8 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-lg">
            <p className="text-sm">
              <strong>Aviso:</strong> Não foi possível conectar ao banco de dados. 
              Exibindo dados de exemplo. ({error})
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 will-change-transform">
          {properties.map((property) => (
            <PropertyCard key={property.property_id} property={property} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/dashboard/properties" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg will-change-transform"
          >
            Ver Todos os Imóveis
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}