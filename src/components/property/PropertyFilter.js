"use client";
import { useState, useCallback } from "react";
import { Search } from "lucide-react";

const PROPERTY_TYPES = [
  { value: "all", label: "Todos" },
  { value: "house", label: "Casas" },
  { value: "apartment", label: "Apartamentos" },
  { value: "commercial", label: "Comercial" },
];

const PRICE_RANGES = [
  { value: "all", label: "Qualquer valor" },
  { value: "0-500000", label: "Até 500k" },
  { value: "500000-1000000", label: "500k - 1M" },
  { value: "1000000+", label: "Acima de 1M" },
];

const LOCATIONS = [
  { value: "all", label: "Todas regiões" },
  { value: "fortaleza", label: "Fortaleza" },
  { value: "eusebio", label: "Eusébio" },
  { value: "aquiraz", label: "Aquiraz" },
];

export default function PropertyFilter({ onFilterChange, totalProperties = 0 }) {
  const [filters, setFilters] = useState({
    search: "",
    type: "all",
    priceRange: "all",
    location: "all",
  });

  const handleFilterChange = useCallback((key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  }, [filters, onFilterChange]);

  return (
    <div className="relative overflow-hidden">
      {/* Background elegante */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-charcoal/90 via-luxury-gray/85 to-luxury-charcoal/90" />
      
      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        
        {/* Header minimalista */}
        <div className="text-center mb-12">
          <div className="w-px h-12 bg-warm-lamp mx-auto mb-6 lamp-glow"></div>
          <h1 className="text-4xl font-display font-light text-pearl-white mb-3 tracking-wide">
            Encontre Seu Lar Ideal
          </h1>
          <p className="text-luxury-light-gray font-light text-lg">
            {totalProperties} imóveis selecionados
          </p>
        </div>

        {/* Filtro linear horizontal */}
        <div className="bg-white/95 backdrop-blur-lg border border-warm-lamp/20 rounded-xl p-8 shadow-2xl max-w-6xl mx-auto">
          
          {/* Busca principal */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-luxury-gray w-5 h-5" />
            <input
              type="text"
              placeholder="Digite o que procura... (ex: casa, apartamento, Eusébio)"
              value={filters.search}
              onChange={(e) => handleFilterChange("search", e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-white/80 border border-luxury-gray/30 rounded-lg text-luxury-charcoal placeholder-luxury-gray focus:outline-none focus:border-warm-lamp focus:ring-2 focus:ring-warm-lamp/20 transition-all duration-300 font-light text-base"
            />
          </div>

          {/* Filtros horizontais */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Tipo de imóvel */}
            <div>
              <label className="block text-luxury-charcoal font-medium text-sm uppercase tracking-widest mb-4">
                Tipo de Imóvel
              </label>
              <div className="flex flex-wrap gap-2">
                {PROPERTY_TYPES.map(type => (
                  <button
                    key={type.value}
                    onClick={() => handleFilterChange("type", type.value)}
                    className={`px-4 py-2.5 rounded-lg font-light text-sm transition-all duration-300 ${
                      filters.type === type.value
                        ? "bg-warm-lamp text-luxury-charcoal shadow-lg transform scale-105"
                        : "bg-luxury-cream text-luxury-gray hover:bg-warm-lamp/20 hover:text-luxury-charcoal"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Faixa de preço */}
            <div>
              <label className="block text-luxury-charcoal font-medium text-sm uppercase tracking-widest mb-4">
                Faixa de Preço
              </label>
              <div className="flex flex-wrap gap-2">
                {PRICE_RANGES.map(range => (
                  <button
                    key={range.value}
                    onClick={() => handleFilterChange("priceRange", range.value)}
                    className={`px-4 py-2.5 rounded-lg font-light text-sm transition-all duration-300 ${
                      filters.priceRange === range.value
                        ? "bg-warm-lamp text-luxury-charcoal shadow-lg transform scale-105"
                        : "bg-luxury-cream text-luxury-gray hover:bg-warm-lamp/20 hover:text-luxury-charcoal"
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Localização */}
            <div>
              <label className="block text-luxury-charcoal font-medium text-sm uppercase tracking-widest mb-4">
                Localização
              </label>
              <div className="flex flex-wrap gap-2">
                {LOCATIONS.map(location => (
                  <button
                    key={location.value}
                    onClick={() => handleFilterChange("location", location.value)}
                    className={`px-4 py-2.5 rounded-lg font-light text-sm transition-all duration-300 ${
                      filters.location === location.value
                        ? "bg-warm-lamp text-luxury-charcoal shadow-lg transform scale-105"
                        : "bg-luxury-cream text-luxury-gray hover:bg-warm-lamp/20 hover:text-luxury-charcoal"
                    }`}
                  >
                    {location.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Detalhe decorativo */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-warm-lamp to-transparent opacity-60"></div>
          </div>
        </div>
      </div>
    </div>
  );
}