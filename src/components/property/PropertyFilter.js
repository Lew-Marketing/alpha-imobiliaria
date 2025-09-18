"use client";
import { useState, useCallback } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";

const PROPERTY_TYPES = [
  { value: "all", label: "Todos" },
  { value: "house", label: "Casa" },
  { value: "apartment", label: "Apartamento" },
  { value: "condo", label: "Condomínio" },
  { value: "land", label: "Terreno" },
  { value: "commercial", label: "Comercial" },
];

const PRICE_RANGES = [
  { value: "all", label: "Qualquer valor" },
  { value: "0-300000", label: "Até 300k" },
  { value: "300000-500000", label: "300k - 500k" },
  { value: "500000-800000", label: "500k - 800k" },
  { value: "800000-1200000", label: "800k - 1.2M" },
  { value: "1200000+", label: "Acima de 1.2M" },
];

const LOCATIONS = [
  { value: "all", label: "Todas regiões" },
  { value: "fortaleza", label: "Fortaleza" },
  { value: "eusebio", label: "Eusébio" },
  { value: "aquiraz", label: "Aquiraz" },
  { value: "caucaia", label: "Caucaia" },
];

export default function PropertyFilter({ onFilterChange, totalProperties = 0 }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    type: "all",
    priceRange: "all",
    location: "all",
    bedrooms: "all",
    parking: "all",
    financing: "all",
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
      location: "all",
      bedrooms: "all",
      parking: "all",
      financing: "all",
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  }, [onFilterChange]);

  const hasActiveFilters = Object.values(filters).some(value => value !== "all" && value !== "");

  return (
    <div className="bg-warm-white/95 backdrop-blur-sm border-b border-soft-beige sticky top-20 z-40">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Barra principal minimalista */}
        <div className="py-8">
          <div className="flex items-center gap-6">
            
            {/* Campo de busca elegante */}
            <div className="flex-1 relative">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-leather-light w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar imóveis..."
                value={filters.search}
                onChange={(e) => handleFilterChange("search", e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-white/80 border border-soft-beige rounded-none focus:outline-none focus:border-leather-medium transition-all duration-300 text-foreground placeholder-leather-light font-light"
              />
            </div>

            {/* Filtros discretos */}
            <select
              value={filters.type}
              onChange={(e) => handleFilterChange("type", e.target.value)}
              className="px-6 py-4 bg-white/80 border border-soft-beige rounded-none focus:outline-none focus:border-leather-medium text-foreground font-light min-w-[120px]"
            >
              {PROPERTY_TYPES.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>

            <select
              value={filters.priceRange}
              onChange={(e) => handleFilterChange("priceRange", e.target.value)}
              className="px-6 py-4 bg-white/80 border border-soft-beige rounded-none focus:outline-none focus:border-leather-medium text-foreground font-light min-w-[140px]"
            >
              {PRICE_RANGES.map(range => (
                <option key={range.value} value={range.value}>{range.label}</option>
              ))}
            </select>

            {/* Botão filtros avançados */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`flex items-center gap-3 px-6 py-4 border transition-all duration-300 ${
                isExpanded || hasActiveFilters
                  ? "border-leather-medium bg-leather-dark text-warm-white"
                  : "border-soft-beige bg-white/80 text-foreground hover:border-leather-medium"
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="font-light text-sm tracking-wide">Filtros</span>
              {hasActiveFilters && (
                <span className="bg-accent text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  !
                </span>
              )}
            </button>
          </div>

          {/* Informações discretas */}
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-leather-light font-light tracking-wide">
              {totalProperties} {totalProperties === 1 ? 'imóvel' : 'imóveis'}
            </p>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 text-sm text-leather-light hover:text-leather-dark transition-colors font-light"
              >
                <X className="w-3 h-3" />
                Limpar
              </button>
            )}
          </div>
        </div>

        {/* Filtros expandidos minimalistas */}
        {isExpanded && (
          <div className="pb-8 border-t border-soft-beige/50">
            <div className="pt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
              
              <div>
                <label className="block text-xs text-leather-medium mb-3 font-light tracking-widest uppercase">
                  Localização
                </label>
                <select
                  value={filters.location}
                  onChange={(e) => handleFilterChange("location", e.target.value)}
                  className="w-full px-4 py-3 bg-white/80 border border-soft-beige rounded-none focus:outline-none focus:border-leather-medium text-foreground font-light"
                >
                  {LOCATIONS.map(location => (
                    <option key={location.value} value={location.value}>{location.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs text-leather-medium mb-3 font-light tracking-widest uppercase">
                  Quartos
                </label>
                <select
                  value={filters.bedrooms}
                  onChange={(e) => handleFilterChange("bedrooms", e.target.value)}
                  className="w-full px-4 py-3 bg-white/80 border border-soft-beige rounded-none focus:outline-none focus:border-leather-medium text-foreground font-light"
                >
                  <option value="all">Qualquer</option>
                  <option value="1">1 quarto</option>
                  <option value="2">2 quartos</option>
                  <option value="3">3 quartos</option>
                  <option value="4">4+ quartos</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-leather-medium mb-3 font-light tracking-widest uppercase">
                  Vagas
                </label>
                <select
                  value={filters.parking}
                  onChange={(e) => handleFilterChange("parking", e.target.value)}
                  className="w-full px-4 py-3 bg-white/80 border border-soft-beige rounded-none focus:outline-none focus:border-leather-medium text-foreground font-light"
                >
                  <option value="all">Qualquer</option>
                  <option value="1">1 vaga</option>
                  <option value="2">2 vagas</option>
                  <option value="3">3+ vagas</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-leather-medium mb-3 font-light tracking-widest uppercase">
                  Financiamento
                </label>
                <select
                  value={filters.financing}
                  onChange={(e) => handleFilterChange("financing", e.target.value)}
                  className="w-full px-4 py-3 bg-white/80 border border-soft-beige rounded-none focus:outline-none focus:border-leather-medium text-foreground font-light"
                >
                  <option value="all">Todos</option>
                  <option value="yes">Aceita</option>
                  <option value="no">À vista</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}