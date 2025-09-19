"use client";
import { useState, useCallback, useRef, useEffect } from "react";
import { Search, ChevronDown } from "lucide-react";

const PROPERTY_TYPES = [
  { value: "all", label: "Todos os tipos" },
  { value: "house", label: "Casas" },
  { value: "apartment", label: "Apartamentos" },
  { value: "commercial", label: "Comercial" },
];

const PRICE_RANGES = [
  { value: "all", label: "Qualquer valor" },
  { value: "0-500000", label: "Até R$ 500k" },
  { value: "500000-1000000", label: "R$ 500k - R$ 1M" },
  { value: "1000000+", label: "Acima de R$ 1M" },
];

const LOCATIONS = [
  { value: "all", label: "Todas as regiões" },
  { value: "fortaleza", label: "Fortaleza" },
  { value: "eusebio", label: "Eusébio" },
  { value: "aquiraz", label: "Aquiraz" },
];

const BEDROOMS_OPTIONS = [
  { value: "all", label: "Qualquer quantidade" },
  { value: "1", label: "1 quarto" },
  { value: "2", label: "2 quartos" },
  { value: "3", label: "3 quartos" },
  { value: "4+", label: "4+ quartos" },
];

const PARKING_OPTIONS = [
  { value: "all", label: "Qualquer quantidade" },
  { value: "1", label: "1 vaga" },
  { value: "2", label: "2 vagas" },
  { value: "3+", label: "3+ vagas" },
];

const FINANCING_OPTIONS = [
  { value: "all", label: "Todos" },
  { value: "yes", label: "Com financiamento" },
  { value: "no", label: "Apenas à vista" },
];

function DropdownButton({ label, options, value, onChange, placeholder }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedOption = options.find(opt => opt.value === value) || options[0];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-luxury-charcoal hover:border-warm-lamp focus:outline-none focus:border-warm-lamp focus:ring-1 focus:ring-warm-lamp/20 transition-all duration-300 font-light text-sm min-w-[160px]"
      >
        <span className="truncate">
          {selectedOption.label}
        </span>
        <ChevronDown className={`w-4 h-4 text-luxury-gray transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                option.value === value
                  ? "bg-warm-lamp text-luxury-charcoal font-medium"
                  : "text-luxury-gray hover:bg-gray-50"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

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

  const resetFilters = () => {
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
  };

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4">
        
        {/* Header compacto */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-lg font-display font-light text-luxury-charcoal tracking-wide">
            Filtrar Imóveis
          </h1>
          <p className="text-sm text-luxury-gray font-light">
            {totalProperties} {totalProperties === 1 ? 'imóvel' : 'imóveis'}
          </p>
        </div>

        {/* Filtros horizontais com dropdowns */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <div className="flex flex-wrap items-center gap-4">
            
            {/* Busca */}
            <div className="relative flex-1 min-w-[280px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-luxury-gray w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar por título, localização..."
                value={filters.search}
                onChange={(e) => handleFilterChange("search", e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-luxury-charcoal placeholder-luxury-gray focus:outline-none focus:border-warm-lamp focus:ring-1 focus:ring-warm-lamp/20 transition-all duration-300 font-light text-sm"
              />
            </div>

            {/* Tipo */}
            <DropdownButton
              label="Tipo"
              options={PROPERTY_TYPES}
              value={filters.type}
              onChange={(value) => handleFilterChange("type", value)}
            />

            {/* Preço */}
            <DropdownButton
              label="Preço"
              options={PRICE_RANGES}
              value={filters.priceRange}
              onChange={(value) => handleFilterChange("priceRange", value)}
            />

            {/* Localização */}
            <DropdownButton
              label="Localização"
              options={LOCATIONS}
              value={filters.location}
              onChange={(value) => handleFilterChange("location", value)}
            />

            {/* Quartos */}
            <DropdownButton
              label="Quartos"
              options={BEDROOMS_OPTIONS}
              value={filters.bedrooms}
              onChange={(value) => handleFilterChange("bedrooms", value)}
            />

            {/* Vagas */}
            <DropdownButton
              label="Vagas"
              options={PARKING_OPTIONS}
              value={filters.parking}
              onChange={(value) => handleFilterChange("parking", value)}
            />

            {/* Financiamento */}
            <DropdownButton
              label="Financiamento"
              options={FINANCING_OPTIONS}
              value={filters.financing}
              onChange={(value) => handleFilterChange("financing", value)}
            />

            {/* Limpar filtros */}
            <button
              onClick={resetFilters}
              className="px-4 py-2.5 text-sm text-luxury-gray hover:text-warm-lamp border border-gray-200 rounded-lg hover:border-warm-lamp transition-all duration-300 whitespace-nowrap font-light"
            >
              Limpar Filtros
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}