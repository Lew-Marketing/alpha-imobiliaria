"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useCallback, useMemo } from "react";
import { formatPrice } from "@/lib/utils";

export default function PropertyCard({ property, isNew = false }) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Fallback para imagens
  const getImageUrl = useCallback((index = 0) => {
    if (property.photos_highlight && property.photos_highlight[index]) {
      return property.photos_highlight[index];
    }
    
    // URLs de fallback baseadas no property_id
    const fallbackImages = [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
    ];
    
    const imageIndex = (parseInt(property.property_id) + index) % fallbackImages.length;
    return fallbackImages[imageIndex];
  }, [property.photos_highlight, property.property_id]);

  const mainImage = useMemo(() => getImageUrl(0), [getImageUrl]);
  const hoverImage = useMemo(() => getImageUrl(1), [getImageUrl]);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <section className="group transition-all duration-500 ease-out will-change-transform">
      <Link
        href={`/dashboard/properties/${property.property_id}`}
        className="cursor-pointer relative block will-change-transform"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        
        {/* Card com background elegante */}
        <div className="bg-white/90 backdrop-blur-sm rounded-sm shadow-lg group-hover:shadow-xl transition-all duration-500 ease-out overflow-hidden">
          
          {/* Imagem */}
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-luxury-cream animate-pulse" />
            )}
            <Image
              src={mainImage}
              alt={property.title || "Imóvel"}
              fill
              quality={80}
              className={`object-cover transition-all duration-700 ease-out absolute will-change-transform group-hover:scale-105 ${
                isHovered ? "opacity-0" : "opacity-100"
              } ${imageLoaded ? "opacity-100" : "opacity-0"}`}
              onError={() => setImageError(true)}
              onLoad={() => setImageLoaded(true)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
            />
            <Image
              src={hoverImage}
              alt={property.title || "Imóvel"}
              fill
              quality={80}
              className={`object-cover transition-all duration-700 ease-out absolute hidden md:block will-change-transform group-hover:scale-105 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
            />
            
            {/* Overlay sutil */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {isNew && (
            <div className="absolute top-4 left-4 bg-warm-lamp text-luxury-charcoal px-3 py-1 text-xs font-medium tracking-wide uppercase shadow-sm">
              Novo
            </div>
          )}

          {/* Conteúdo */}
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg title-luxury text-luxury-charcoal font-medium group-hover:text-warm-lamp transition-colors duration-300">
                {property.title || "Imóvel"}
              </h3>
            </div>
            
            <p className="text-sm text-luxury-gray text-luxury-light mb-4">
              {property.location || "Localização"}
            </p>

            <div className="flex justify-between items-end">
              <div>
                <p className="text-xl font-medium text-luxury-charcoal">
                  {formatPrice(property.sale_price)}
                </p>
                <p className="text-xs text-luxury-gray text-luxury-light mt-1">
                  {property.financing_compatible ? "Financiamento disponível" : "À Vista"}
                </p>
              </div>
              
              {/* Detalhes do imóvel */}
              <div className="text-right">
                <div className="flex items-center gap-3 text-xs text-luxury-gray">
                  {property.bedrooms && (
                    <span>{property.bedrooms} qtos</span>
                  )}
                  {property.bathrooms && (
                    <span>{property.bathrooms} banheiros</span>
                  )}
                </div>
                {property.built_area_m2 && (
                  <p className="text-xs text-luxury-gray mt-1">
                    {property.built_area_m2}m²
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}