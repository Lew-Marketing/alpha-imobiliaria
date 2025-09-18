"use client";
import { useState, useCallback } from "react";
import { Search, SlidersHorizontal, X, MapPin, Home, DollarSign, Bed, Car } from "lucide-react";

const PROPERTY_TYPES = [
  { value: "all", label: "Todos os tipos" },
  { value: "house", label: "Casa" },
  { value: "apartment", label: "Apartamento" },
  { value: "condo", label: "Condomínio" },
  { value: "land", label: "Terreno" },
  { value: "commercial", label: "Comercial" },
];

const PRICE_RANGES = [
  { value: "all", label: "Qualquer preço" },
  { value: "0-300000", label: "Até R$ 300.000" },
  { value: "300000-500000", label: "R$ 300.000 - R$ 500.000" },
  { value: "500000-800000", label: "R$ 500.000 - R$ 800.000" },
  { value: "800000-1200000", label: "R$ 800.000 - R$ 1.200.000" },
  { value: "1200000+", label: "Acima de R$ 1.200.000" },
];

const LOCATIONS = [
  { value: "all", label: "Todas as regiões" },
  { value: "fortaleza", label: "Fortaleza" },
  { value: "eusebio", label: "Eusébio" },
  { value: "aquiraz", label: "Aquiraz" },
  { value: "caucaia", label: "Caucaia" },
  { value: "maracanau", label: "Maracanaú" },
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
    <div className="bg-white border-b border-gray-200 sticky top-20 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Barra de busca principal */}
        <div className="py-6">
          <div className="flex flex-col lg:flex-row gap-4">
            
            {/* Campo de busca */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por título, localização ou características..."
                value={filters.search}
                onChange={(e) => handleFilterChange("search", e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              />
            </div>

            {/* Filtros rápidos */}
            <div className="flex gap-3">
              <select
                value={filters.type}
                onChange={(e) => handleFilterChange("type", e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white min-w-[140px]"
              >
                {PROPERTY_TYPES.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>

              <select
                value={filters.priceRange}
                onChange={(e) => handleFilterChange("priceRange", e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white min-w-[160px]"
              >
                {PRICE_RANGES.map(range => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>

              {/* Botão de filtros avançados */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`flex items-center gap-2 px-4 py-3 border rounded-lg transition-all duration-200 ${
                  isExpanded || hasActiveFilters
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <SlidersHorizontal className="w-5 h-5" />
                <span className="hidden sm:inline">Filtros</span>
                {hasActiveFilters && (
                  <span className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    !
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Resultados e limpar filtros */}
          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-gray-600">
              {totalProperties} {totalProperties === 1 ? 'imóvel encontrado' : 'imóveis encontrados'}
            </p>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-4 h-4" />
                Limpar filtros
              </button>
            )}
          </div>
        </div>

        {/* Filtros avançados expandidos */}
        {isExpanded && (
          <div className="pb-6 border-t border-gray-100">
            <div className="pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Localização */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Localização
                </label>
                <select
                  value={filters.location}
                  onChange={(e) => handleFilterChange("location", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {LOCATIONS.map(location => (
                    <option key={location.value} value={location.value}>{location.label}</option>
                  ))}
                </select>
              </div>

              {/* Quartos */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Bed className="w-4 h-4 inline mr-1" />
                  Quartos
                </label>
                <select
                  value={filters.bedrooms}
                  onChange={(e) => handleFilterChange("bedrooms", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="all">Qualquer quantidade</option>
                  <option value="1">1 quarto</option>
                  <option value="2">2 quartos</option>
                  <option value="3">3 quartos</option>
                  <option value="4">4+ quartos</option>
                </select>
              </div>

              {/* Vagas */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Car className="w-4 h-4 inline mr-1" />
                  Vagas de garagem
                </label>
                <select
                  value={filters.parking}
                  onChange={(e) => handleFilterChange("parking", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="all">Qualquer quantidade</option>
                  <option value="1">1 vaga</option>
                  <option value="2">2 vagas</option>
                  <option value="3">3+ vagas</option>
                </select>
              </div>

              {/* Financiamento */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <DollarSign className="w-4 h-4 inline mr-1" />
                  Financiamento
                </label>
                <select
                  value={filters.financing}
                  onChange={(e) => handleFilterChange("financing", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="all">Todos</option>
                  <option value="yes">Aceita financiamento</option>
                  <option value="no">Apenas à vista</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}