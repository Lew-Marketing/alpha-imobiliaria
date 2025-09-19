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

const BEDROOMS_OPTIONS = [
  { value: "all", label: "Qualquer" },
  { value: "1", label: "1 qto" },
  { value: "2", label: "2 qtos" },
  { value: "3", label: "3 qtos" },
  { value: "4+", label: "4+ qtos" },
];

const PARKING_OPTIONS = [
  { value: "all", label: "Qualquer" },
  { value: "1", label: "1 vaga" },
  { value: "2", label: "2 vagas" },
  { value: "3+", label: "3+ vagas" },
];

export default function PropertyFilter({ onFilterChange, totalProperties = 0 }) {
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

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4">
        
        {/* Header compacto */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-lg font-display font-light text-luxury-charcoal tracking-wide">
            Filtrar Imóveis
          </h1>
          <p className="text-sm text-luxury-gray font-light">
            {totalProperties} imóveis
          </p>
        </div>

        {/* Filtro completamente horizontal */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <div className="flex flex-wrap items-center gap-4">
            
            {/* Busca */}
            <div className="relative flex-1 min-w-[300px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-luxury-gray w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar imóveis..."
                value={filters.search}
                onChange={(e) => handleFilterChange("search", e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg text-luxury-charcoal placeholder-luxury-gray focus:outline-none focus:border-warm-lamp focus:ring-1 focus:ring-warm-lamp/20 transition-all duration-300 font-light text-sm"
              />
            </div>

            {/* Tipo */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-luxury-gray font-medium whitespace-nowrap">Tipo:</span>
              <div className="flex gap-1">
                {PROPERTY_TYPES.map(type => (
                  <button
                    key={type.value}
                    onClick={() => handleFilterChange("type", type.value)}
                    className={`px-3 py-1.5 rounded-md font-light text-xs transition-all duration-300 whitespace-nowrap ${
                      filters.type === type.value
                        ? "bg-warm-lamp text-luxury-charcoal"
                        : "bg-white text-luxury-gray hover:bg-warm-lamp/20 border border-gray-200"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Preço */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-luxury-gray font-medium whitespace-nowrap">Preço:</span>
              <div className="flex gap-1">
                {PRICE_RANGES.map(range => (
                  <button
                    key={range.value}
                    onClick={() => handleFilterChange("priceRange", range.value)}
                    className={`px-3 py-1.5 rounded-md font-light text-xs transition-all duration-300 whitespace-nowrap ${
                      filters.priceRange === range.value
                        ? "bg-warm-lamp text-luxury-charcoal"
                        : "bg-white text-luxury-gray hover:bg-warm-lamp/20 border border-gray-200"
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Localização */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-luxury-gray font-medium whitespace-nowrap">Local:</span>
              <div className="flex gap-1">
                {LOCATIONS.map(location => (
                  <button
                    key={location.value}
                    onClick={() => handleFilterChange("location", location.value)}
                    className={`px-3 py-1.5 rounded-md font-light text-xs transition-all duration-300 whitespace-nowrap ${
                      filters.location === location.value
                        ? "bg-warm-lamp text-luxury-charcoal"
                        : "bg-white text-luxury-gray hover:bg-warm-lamp/20 border border-gray-200"
                    }`}
                  >
                    {location.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quartos */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-luxury-gray font-medium whitespace-nowrap">Quartos:</span>
              <div className="flex gap-1">
                {BEDROOMS_OPTIONS.map(bedroom => (
                  <button
                    key={bedroom.value}
                    onClick={() => handleFilterChange("bedrooms", bedroom.value)}
                    className={`px-3 py-1.5 rounded-md font-light text-xs transition-all duration-300 whitespace-nowrap ${
                      filters.bedrooms === bedroom.value
                        ? "bg-warm-lamp text-luxury-charcoal"
                        : "bg-white text-luxury-gray hover:bg-warm-lamp/20 border border-gray-200"
                    }`}
                  >
                    {bedroom.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Vagas */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-luxury-gray font-medium whitespace-nowrap">Vagas:</span>
              <div className="flex gap-1">
                {PARKING_OPTIONS.map(parking => (
                  <button
                    key={parking.value}
                    onClick={() => handleFilterChange("parking", parking.value)}
                    className={`px-3 py-1.5 rounded-md font-light text-xs transition-all duration-300 whitespace-nowrap ${
                      filters.parking === parking.value
                        ? "bg-warm-lamp text-luxury-charcoal"
                        : "bg-white text-luxury-gray hover:bg-warm-lamp/20 border border-gray-200"
                    }`}
                  >
                    {parking.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Financiamento */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-luxury-gray font-medium whitespace-nowrap">Financ.:</span>
              <div className="flex gap-1">
                <button
                  onClick={() => handleFilterChange("financing", "all")}
                  className={`px-3 py-1.5 rounded-md font-light text-xs transition-all duration-300 whitespace-nowrap ${
                    filters.financing === "all"
                      ? "bg-warm-lamp text-luxury-charcoal"
                      : "bg-white text-luxury-gray hover:bg-warm-lamp/20 border border-gray-200"
                  }`}
                >
                  Todos
                </button>
                <button
                  onClick={() => handleFilterChange("financing", "yes")}
                  className={`px-3 py-1.5 rounded-md font-light text-xs transition-all duration-300 whitespace-nowrap ${
                    filters.financing === "yes"
                      ? "bg-warm-lamp text-luxury-charcoal"
                      : "bg-white text-luxury-gray hover:bg-warm-lamp/20 border border-gray-200"
                  }`}
                >
                  Sim
                </button>
                <button
                  onClick={() => handleFilterChange("financing", "no")}
                  className={`px-3 py-1.5 rounded-md font-light text-xs transition-all duration-300 whitespace-nowrap ${
                    filters.financing === "no"
                      ? "bg-warm-lamp text-luxury-charcoal"
                      : "bg-white text-luxury-gray hover:bg-warm-lamp/20 border border-gray-200"
                  }`}
                >
                  Não
                </button>
              </div>
            </div>

            {/* Limpar filtros */}
            <button
              onClick={() => {
                const resetFilters = {
                  search: "",
                  type: "all",
                  priceRange: "all",
                  location: "all",
                  bedrooms: "all",
                  parking: "all",
                  financing: "all",
                };
                setFilters(resetFilters);
                onFilterChange(resetFilters);
              }}
              className="px-4 py-2 text-xs text-luxury-gray hover:text-warm-lamp border border-gray-200 rounded-lg hover:border-warm-lamp transition-all duration-300 whitespace-nowrap"
            >
              Limpar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}