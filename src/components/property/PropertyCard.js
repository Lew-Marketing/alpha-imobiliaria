"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { formatPrice } from "@/lib/utils";

export default function PropertyCard({ property, isNew = false }) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Fallback para imagens
  const getImageUrl = (index = 0) => {
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
  };

  const mainImage = getImageUrl(0);
  const hoverImage = getImageUrl(1);

  return (
    <section className="transition-opacity duration-900 ease-[cubic-bezier(0.17,0.55,0.55,1)] delay-200">
      <Link
        href={`/dashboard/properties/${property.property_id}`}
        className="cursor-pointer max-w-xl min-w-sm relative group block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-sm shadow-sm group-hover:shadow-md transition-shadow duration-300">
          <Image
            src={mainImage}
            alt={property.title || "Imóvel"}
            fill
            quality={80}
            className={`object-cover transition-opacity duration-500 absolute ${isHovered ? "opacity-0" : "opacity-100"}`}
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Image
            src={hoverImage}
            alt={property.title || "Imóvel"}
            fill
            quality={80}
            className={`object-cover transition-opacity duration-500 absolute hidden md:block ${isHovered ? "opacity-100" : "opacity-0"}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {isNew && (
          <div className="absolute top-0 left-0 h-10 w-full text-primary before:absolute before:inset-0 before:bg-primary-foreground before:opacity-40">
            <div className="relative h-full flex items-center px-4">
              <p className="text-xs md:text-sm font-sans uppercase font-medium tracking-wide">New</p>
            </div>
          </div>
        )}

        <div className="mt-4 flex justify-between items-start">
          <div className="flex flex-col max-w-[60%]">
            <p className="text-base font-serif tracking-normal text-gray-900 truncate">
              {property.title || "Imóvel"}
            </p>
            <p className="text-sm font-serif tracking-normal text-gray-500 mt-1 truncate">
              {property.location || "Localização"}
            </p>
          </div>

          <div className="flex flex-col items-end">
            <p className="text-base font-sans font-medium tracking-wider text-gray-900">
              {formatPrice(property.sale_price)}
            </p>
            <p className="text-sm font-sans text-gray-500 mt-1">
              {property.financing_compatible ? "Financiável" : "À Vista"}
            </p>
          </div>
        </div>
      </Link>
    </section>
  );
}