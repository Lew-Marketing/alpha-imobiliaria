"use client";
import { useState, useCallback } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";

const QUICK_FILTERS = [
  { value: "all", label: "Todos" },
  { value: "house", label: "Casas" },
  { value: "apartment", label: "Apartamentos" },
  { value: "luxury", label: "Luxo" },
];

const PRICE_RANGES = [
  { value: "all", label: "Qualquer valor" },
  { value: "0-500000", label: "Até 500k" },
  { value: "500000-1000000", label: "500k - 1M" },
  { value: "1000000+", label: "Acima de 1M" },
];

export default function PropertyFilter({ onFilterChange, totalProperties = 0 }) {
  const [filters, setFilters] = useState({
    search: "",
    type: "all",
    priceRange: "all",
  });

  const handleFilterChange = useCallback((key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  }, [filters, onFilterChange]);

  const clearFilters = useCallback(() => {
    const clearedFilters = {
      search: "",
      type: "all", 
      priceRange: "all",
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  }, [onFilterChange]);

  const hasActiveFilters = Object.values(filters).some(value => value !== "all" && value !== "");

  return (
    <div className="relative">
      {/* Background com overlay elegante */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-leather-dark/95 via-leather-medium/90 to-leather-light/85 backdrop-blur-sm" />
      
      {/* Conteúdo */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 py-16">
        
        {/* Header minimalista */}
        <div className="text-center mb-12">
          <div className="w-1 h-16 bg-cream mx-auto mb-6"></div>
          <h1 className="text-4xl font-light text-cream mb-4 tracking-tight">
            Encontre Seu Lar
          </h1>
          <p className="text-leather-light font-light">
            {totalProperties} imóveis disponíveis
          </p>
        </div>

        {/* Filtro principal simplificado */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8">
          
          {/* Busca principal */}
          <div className="relative mb-8">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-cream/70 w-5 h-5" />
            <input
              type="text"
              placeholder="Digite o que procura..."
              value={filters.search}
              onChange={(e) => handleFilterChange("search", e.target.value)}
              className="w-full pl-16 pr-8 py-6 bg-white/5 border border-white/30 text-cream placeholder-cream/60 focus:outline-none focus:border-cream/60 transition-all duration-300 text-lg font-light backdrop-blur-sm"
            />
          </div>

          {/* Filtros rápidos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {QUICK_FILTERS.map(filter => (
              <button
                key={filter.value}
                onClick={() => handleFilterChange("type", filter.value)}
                className={`py-4 px-6 border transition-all duration-300 font-light tracking-wide ${
                  filters.type === filter.value
                    ? "border-cream bg-cream/20 text-cream"
                    : "border-white/30 text-cream/80 hover:border-cream/60 hover:bg-white/5"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Faixa de preço */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {PRICE_RANGES.map(range => (
              <button
                key={range.value}
                onClick={() => handleFilterChange("priceRange", range.value)}
                className={`py-4 px-6 border transition-all duration-300 font-light tracking-wide ${
                  filters.priceRange === range.value
                    ? "border-cream bg-cream/20 text-cream"
                    : "border-white/30 text-cream/80 hover:border-cream/60 hover:bg-white/5"
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>

          {/* Limpar filtros */}
          {hasActiveFilters && (
            <div className="text-center mt-8">
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-2 text-cream/80 hover:text-cream transition-colors font-light"
              >
                <X className="w-4 h-4" />
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}