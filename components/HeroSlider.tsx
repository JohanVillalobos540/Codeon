"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/img/abstractheader.jpg",
  "/img/codigoheader.jpg",
  "/img/lapheader.jpg"
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Smooth gradient fade at the bottom to blend with the next section */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />

      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Background slide ${index + 1}`}
          fill
          unoptimized={true}
          quality={90}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          priority={index === 0}
        />
      ))}
    </div>
  );
}
