import React from "react";

export default function HeroImage({ image, title, subtitle }) {
  return (
    <section
      className="w-full h-[50vh] bg-cover bg-center relative mb-5"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenido */}
      <div className="relative flex flex-col items-center justify-center h-full  text-white px-4">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 text-sm sm:text-lg md:text-xl max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
