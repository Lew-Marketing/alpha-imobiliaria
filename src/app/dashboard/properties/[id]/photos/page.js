"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export default function PropertyPhotosPage() {
  const { id } = useParams();
  const [current, setCurrent] = useState(0);

  // Gera fotos baseadas no ID da propriedade
  const generatePhotos = () => {
    const baseImages = [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753229-f8d4c57c7b8b?w=1200&q=80"
    ];

    const startIndex = parseInt(id) % baseImages.length;
    return baseImages.map((url, index) => ({
      id: `photo-${index}`,
      name: `Foto ${index + 1}`,
      url: baseImages[(startIndex + index) % baseImages.length]
    }));
  };

  const photos = generatePhotos();

  const colors = [
    "#1C1C1C", "#2E2B2B", "#3E2723", "#6D4C41",
    "#A1887F", "#D7CCC8", "#B0BEC5", "#CFD8DC",
    "#795548", "#FFEBCF", "#8D6E63", "#4E342E",
  ];
  const [bgColor, setBgColor] = useState(colors[0]);

  const handleClick = () => {
    setCurrent((c) => (c + 1) % photos.length);
    setBgColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  const radialBg = `radial-gradient(circle at center, ${bgColor} 0%, #000000 100%)`;

  return (
    <div className="p-8 font-serif bg-white text-gray-900">
      <div className="flex items-end gap-2 mb-4">
        <h1 className="text-lg md:text-xl font-light tracking-wide">
          Fotos do Imóvel
        </h1>
        <span className="text-[10px] md:text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded tracking-wide">
          Clique para alternar fotos
        </span>
      </div>

      <div className="border-t border-gray-200 mb-3" />

      <div
        className="flex justify-center items-center h-[80vh] p-4 transition-all duration-700 rounded-3xl shadow-[0_0_150px_50px_rgba(0,0,0,0.6)] overflow-hidden"
        style={{ background: radialBg }}
      >
        <div
          className="relative w-full max-w-4xl h-[70vh] cursor-pointer rounded-2xl overflow-hidden"
          onClick={handleClick}
        >
          {photos.map((photo, idx) => {
            const offset = idx - current;
            if (offset < -3 || offset > 0) return null;

            return (
              <div
                key={photo.id}
                className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden transition-all duration-500"
                style={{
                  transform: `translate(${offset * 10}px, ${Math.abs(offset) * 8}px) scale(${1 - Math.abs(offset) * 0.05}) rotate(${offset * 2}deg)`,
                  zIndex: 10 - Math.abs(offset),
                  opacity: offset === 0 ? 1 : 0.6,
                  filter: offset === 0 ? "none" : "brightness(0.8)",
                }}
              >
                <Image
                  src={photo.url}
                  alt={photo.name}
                  fill
                  className="object-cover rounded-lg shadow-2xl"
                  priority={offset === 0}
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Foto {current + 1} de {photos.length}
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Dados de demonstração - Configure Google Drive API para fotos reais
        </p>
      </div>
    </div>
  );
}