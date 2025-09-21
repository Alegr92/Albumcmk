import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Album({ collection, ALL_CARDS, setSelectedCard }) {
  const pages = ["common", "rare", "epic"];
  const labels = { common: "Comunes", rare: "Raras", epic: "Épicas" };
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => setCurrentPage((p) => (p + 1) % pages.length);
  const prevPage = () => setCurrentPage((p) => (p - 1 + pages.length) % pages.length);

  const rarity = pages[currentPage];
  const totalCards = ALL_CARDS.filter((c) => c.rarity === rarity).length;
  const collectedCards = collection.filter((c) => c.rarity === rarity).length;

  const bgStyles = {
    common: "bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400",
    rare: "bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800",
    epic: "bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700",
  };

  const borderStyles = {
    common: "border-gray-500",
    rare: "border-blue-500",
    epic: "border-yellow-500",
  };

  return (
    <div className="relative w-full md:max-w-6xl md:mx-auto mt-4 sm:mt-10 p-2 sm:p-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: -90, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className={`album-page relative ${bgStyles[rarity]} rounded-3xl shadow-2xl p-4 sm:p-6 md:p-10 min-h-[500px] sm:min-h-[650px]`}
          style={{
            border: "10px solid #2c2c2c",
            boxShadow: "inset 0 0 30px rgba(0,0,0,0.3), 0 10px 20px rgba(0,0,0,0.5)",
            backgroundImage: "url('/cards/papel.png')",
            backgroundBlendMode: "overlay",
          }}
        >
          {/* Encabezado */}
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-2xl md:text-4xl font-bold text-black drop-shadow-lg">
              Álbum de Cartas {labels[rarity]}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-700">
              Cartas recolectadas: {collectedCards} / {totalCards}
            </p>
          </div>

          {/* Grid de cartas */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10 sm:gap-4 md:gap-6 justify-items-center">
            {ALL_CARDS.filter((c) => c.rarity === rarity).map((card) => {
              const hasCard = collection.some((col) => col.id === card.id);
              return (
                <div
                  key={card.id}
                  className={`relative aspect-[2/3] w-full max-w-[140px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[180px] rounded-lg flex items-center justify-center border-2 ${borderStyles[rarity]} shadow-lg transition-transform duration-300 ${
                    hasCard ? "bg-white hover:scale-105 hover:shadow-xl" : "bg-gray-200"
                  }`}
                  onClick={() => hasCard && setSelectedCard(card)}
                >
                  <img
                    src={hasCard ? card.img : "/cards/Hide.webp"}
                    alt={hasCard ? card.name : "Carta bloqueada"}
                    className={`w-full h-full object-cover rounded-md transition-all duration-300 ${
                      hasCard ? "" : "opacity-40 blur-sm"
                    }`}
                  />
                  {!hasCard && (
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
                      <img
                        src="/cards/lock.png"
                        alt="Falta"
                        className="w-6 h-6 sm:w-10 sm:h-10 opacity-50"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Botones navegación */}
      <button
        onClick={() => {
          new Audio("/sounds/libro.mp3").play().catch(() => {});
          prevPage();
        }}
        className="absolute left-10 top-20 -translate-y-1/2 bg-black/70 text-white text-xl sm:text-2xl w-8 h-8 sm:w-14 sm:h-14 rounded-full flex items-center justify-center hover:bg-black transition"
      >
        ←
      </button>

      <button
        onClick={() => {
          new Audio("/sounds/libro.mp3").play().catch(() => {});
          nextPage();
        }}
        className="absolute right-10 top-20 -translate-y-1/2 bg-black/70 text-white text-xl sm:text-2xl w-8 h-8 sm:w-14 sm:h-14  rounded-full flex items-center justify-center hover:bg-black transition"
      >
        →
      </button>

    </div>
  );
}









