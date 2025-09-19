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
    <div className="relative overflow-hidden bg-white border-b border-gray-200">
      {/* Background elegante */}
      
      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        
        {/* Header minimalista */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-display font-light text-luxury-charcoal mb-2 tracking-wide">
            Filtrar Imóveis
          </h1>
          <p className="text-luxury-gray font-light text-base">
            {totalProperties} imóveis selecionados
          </p>
        </div>

        {/* Filtro linear horizontal */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-6xl mx-auto">
          
          {/* Busca principal */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-luxury-gray w-5 h-5" />
            <input
              type="text"
              placeholder="Digite o que procura... (ex: casa, apartamento, Eusébio)"
              value={filters.search}
              onChange={(e) => handleFilterChange("search", e.target.value)}
              className="w-full pl-12 pr-6 py-3 bg-white border border-gray-300 rounded-lg text-luxury-charcoal placeholder-luxury-gray focus:outline-none focus:border-warm-lamp focus:ring-2 focus:ring-warm-lamp/20 transition-all duration-300 font-light text-sm"
            />
          </div>

          {/* Filtros horizontais */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            
            {/* Tipo de imóvel */}
            <div>
              <label className="block text-luxury-charcoal font-medium text-xs uppercase tracking-widest mb-3">
                Tipo de Imóvel
              </label>
              <div className="flex flex-wrap gap-2">
                {PROPERTY_TYPES.map(type => (
                  <button
                    key={type.value}
                    onClick={() => handleFilterChange("type", type.value)}
                    className={`px-3 py-2 rounded-lg font-light text-xs transition-all duration-300 ${
                      filters.type === type.value
                        ? "bg-warm-lamp text-luxury-charcoal shadow-md"
                        : "bg-white text-luxury-gray hover:bg-warm-lamp/20 hover:text-luxury-charcoal border border-gray-200"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Faixa de preço */}
            <div>
              <label className="block text-luxury-charcoal font-medium text-xs uppercase tracking-widest mb-3">
                Faixa de Preço
              </label>
              <div className="flex flex-wrap gap-2">
                {PRICE_RANGES.map(range => (
                  <button
                    key={range.value}
                    onClick={() => handleFilterChange("priceRange", range.value)}
                    className={`px-3 py-2 rounded-lg font-light text-xs transition-all duration-300 ${
                      filters.priceRange === range.value
                        ? "bg-warm-lamp text-luxury-charcoal shadow-md"
                        : "bg-white text-luxury-gray hover:bg-warm-lamp/20 hover:text-luxury-charcoal border border-gray-200"
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Localização */}
            <div>
              <label className="block text-luxury-charcoal font-medium text-xs uppercase tracking-widest mb-3">
                Localização
              </label>
              <div className="flex flex-wrap gap-2">
                {LOCATIONS.map(location => (
                  <button
                    key={location.value}
                    onClick={() => handleFilterChange("location", location.value)}
                    className={`px-3 py-2 rounded-lg font-light text-xs transition-all duration-300 ${
                      filters.location === location.value
                        ? "bg-warm-lamp text-luxury-charcoal shadow-md"
                        : "bg-white text-luxury-gray hover:bg-warm-lamp/20 hover:text-luxury-charcoal border border-gray-200"
                    }`}
                  >
                    {location.label}
                  </button>
                ))}
              </div>
            </div>

            
            {/* Botão limpar filtros */}
            <div className="flex items-end">
              <button
                onClick={() => {
                  const resetFilters = {
                    search: "",
                    type: "all",
                    priceRange: "all",
                    location: "all",
                  };
                  setFilters(resetFilters);
                  onFilterChange(resetFilters);
                }}
                className="px-4 py-2 text-xs text-luxury-gray hover:text-warm-lamp border border-gray-200 rounded-lg hover:border-warm-lamp transition-all duration-300"
              >
                Limpar Filtros
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}