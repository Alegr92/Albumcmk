import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const milestones = [
  { count: 15, img: "/medals/plata.png", label: "Plata" },
  { count: 30, img: "/medals/oro.png", label: "Oro" },
  { count: 45, img: "/medals/platino.png", label: "Platino" },
  { count: 60, img: "/medals/diamante.png", label: "Diamante" },
];

// misma lógica que en PlayerProfile
function getAvatarImage(level) {
  const avatarStages = [
    "/avatars/Avatar1.png",
    "/avatars/Avatar2.png",
    "/avatars/Avatar3.png",
    "/avatars/Avatar4.png",
    "/avatars/Avatar5.png",
  ];
  const index = Math.min(Math.floor((level - 1) / 2), avatarStages.length - 1);
  return avatarStages[index];
}

export default function PlayerStats({
  isOpen,
  onClose,
  level = 1,
  xp = 0,
  xpToNextLevel = 100,
  collection = [],
}) {
  // cierre al clickear fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.id === "overlay") onClose();
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const progress = Math.min((xp / xpToNextLevel) * 100, 100);

  // calcular avatar actual según nivel
  const currentAvatar = getAvatarImage(level);

  // seleccionar medalla correspondiente (la más alta alcanzada)
  const unlockedMilestone =
    [...milestones].reverse().find((m) => collection.length >= m.count) || null;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          id="overlay"
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-900 text-white p-6 rounded-2xl w-80 shadow-lg relative flex flex-col items-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Avatar */}
            <img
              src={currentAvatar}
              alt="Avatar"
              className="w-30 h-30 rounded-full mb-4 shadow-lg"
            />

            {/* Nivel */}
            <h2 className="text-xl font-bold text-center mb-2">
              Estadísticas del Jugador
            </h2>
            <p className="text-center mb-2">Nivel {level}</p>

            {/* Barra XP */}
            <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden mb-2">
              <motion.div
                className="h-4 bg-green-400"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
            <p className="text-center text-sm mb-4">
              {xp} / {xpToNextLevel} XP
            </p>

            {/* Colección */}
            <p className="text-center mb-4">
              Cartas coleccionadas: {collection.length}
            </p>

            {/* Medalla actual */}
            {unlockedMilestone ? (
              <div className="flex flex-col items-center">
                <img
                  src={unlockedMilestone.img}
                  alt={unlockedMilestone.label}
                  className="w-20 h-20"
                />
                <p className="text-sm mt-2">{unlockedMilestone.label}</p>
              </div>
            ) : (
              <p className="text-sm text-center text-gray-400">Consigue 15 cartas para tu primera medalla!</p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}




