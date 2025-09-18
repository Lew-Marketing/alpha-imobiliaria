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

  return (
    <div className="relative">
      {/* Background elegante */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-charcoal/90 via-luxury-gray/80 to-luxury-charcoal/85" />
      
      {/* Conteúdo */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        
        {/* Header minimalista */}
        <div className="text-center mb-12">
          <div className="w-px h-12 bg-warm-lamp mx-auto mb-6 lamp-glow"></div>
          <h1 className="text-4xl font-light text-pearl-white mb-3 tracking-wide">
            Encontre Seu Lar
          </h1>
          <p className="text-luxury-light-gray font-light">
            {totalProperties} imóveis disponíveis
          </p>
        </div>

        {/* Filtro compacto e elegante */}
        <div className="card-luxury rounded-lg p-8">
          
          {/* Busca principal */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-luxury-gray w-5 h-5" />
            <input
              type="text"
              placeholder="Digite o que procura..."
              value={filters.search}
              onChange={(e) => handleFilterChange("search", e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-transparent border-b border-border text-luxury-charcoal placeholder-luxury-light-gray focus:outline-none focus:border-accent transition-all duration-300 text-base font-light"
            />
          </div>

          {/* Filtros em grid compacto */}
          <div className="grid grid-cols-2 gap-6">
            
            {/* Tipo de imóvel */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-luxury-gray mb-3 font-medium">
                Tipo
              </label>
              <div className="grid grid-cols-2 gap-2">
                {PROPERTY_TYPES.map(type => (
                  <button
                    key={type.value}
                    onClick={() => handleFilterChange("type", type.value)}
                    className={`py-3 px-4 text-sm font-light transition-all duration-300 ${
                      filters.type === type.value
                        ? "bg-accent text-luxury-charcoal shadow-md"
                        : "bg-secondary text-luxury-gray hover:bg-warm-lamp/20"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Faixa de preço */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-luxury-gray mb-3 font-medium">
                Preço
              </label>
              <div className="grid grid-cols-2 gap-2">
                {PRICE_RANGES.map(range => (
                  <button
                    key={range.value}
                    onClick={() => handleFilterChange("priceRange", range.value)}
                    className={`py-3 px-4 text-sm font-light transition-all duration-300 ${
                      filters.priceRange === range.value
                        ? "bg-accent text-luxury-charcoal shadow-md"
                        : "bg-secondary text-luxury-gray hover:bg-warm-lamp/20"
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Detalhe decorativo */}
          <div className="mt-8 flex justify-center">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}