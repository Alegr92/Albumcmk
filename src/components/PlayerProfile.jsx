import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PlayerStats from "./PlayerStats";

const avatarStages = [
  "/avatars/Avatar1.png",
  "/avatars/Avatar2.png",
  "/avatars/Avatar3.png",
  "/avatars/Avatar4.png",
  "/avatars/Avatar5.png",
];

// función que devuelve la imagen según el nivel
function getAvatarImage(level, stages) {
  const index = Math.min(Math.floor((level - 1) / 2), stages.length - 1);
  return stages[index];
}

export default function PlayerProfile({
  level = 1,
  xp = 0,
  xpToNextLevel = 100,
  collection = [],
}) {
  const [currentStage, setCurrentStage] = useState(null);
  const [previousLevel, setPreviousLevel] = useState(null);
  const [animateChange, setAnimateChange] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);

  // Inicializar desde localStorage
  useEffect(() => {
    const storedLevel = localStorage.getItem("playerLevel");
    const startLevel = storedLevel ? parseInt(storedLevel, 10) : level;

    setPreviousLevel(startLevel);
    setCurrentStage(getAvatarImage(startLevel, avatarStages));
    setInitialized(true);
  }, []);

  // Actualizar avatar y guardar en localStorage cuando cambia el nivel
  useEffect(() => {
    if (!initialized || previousLevel === null) return;

    if (level > previousLevel) {
      // animación de evolución
      setAnimateChange(true);
      setTimeout(() => setCurrentStage(getAvatarImage(level, avatarStages)), 100);

      const audio = new Audio("/sounds/up.mp3");
      audio.play();
    } else {
      // actualizar imagen aunque no haya evolución
      setCurrentStage(getAvatarImage(level, avatarStages));
    }

    setPreviousLevel(level);
    localStorage.setItem("playerLevel", level);
  }, [level, previousLevel, initialized]);

  const progress = Math.min((xp / xpToNextLevel) * 100, 100);

  return (
    <div className="flex flex-col items-center w-40 ">
      {/* Avatar clickeable para abrir PlayerStats */}
      <div
        className="w-40 h-40 relative flex items-center justify-center cursor-pointer"
        onClick={() => setIsStatsOpen(true)}
      >
        <AnimatePresence mode="wait">
          {currentStage && (
            <motion.div
              key={currentStage}
              className="absolute top-0 left-0 w-40 h-40 rounded-full"
            >
              {/* Glow de evolución */}
              {animateChange && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-yellow-400"
                  style={{ filter: "blur(25px)" }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: [0.8, 0.4, 0], scale: [1, 1.6, 2] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                />
              )}

              {/* Partículas de evolución */}
              {animateChange &&
                [...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-yellow-300"
                    initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                    animate={{
                      opacity: 0,
                      x: Math.cos((i / 12) * Math.PI * 2) * 60,
                      y: Math.sin((i / 12) * Math.PI * 2) * 60,
                      scale: 1,
                    }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                ))}

              {/* Imagen del avatar */}
              <motion.img
                src={currentStage}
                alt="Avatar"
                className="w-40 h-40rounded-full relative z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: animateChange ? [1.4, 0.9, 1] : 1,
                  opacity: 1,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: animateChange ? 1 : 0.6,
                  ease: "easeInOut",
                }}
                onAnimationComplete={() => setAnimateChange(false)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Nivel */}
      <p className="mt-2 w-full text-center text-white font-bold text-sm drop-shadow-lg">
        Nivel {level}
      </p>

      {/* Barra de XP */}
      <div className="w-full mt-1">
        <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-4 bg-green-400"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
        <p className="text-center text-xs text-white mt-1 mb-5">
          {xp} / {xpToNextLevel} XP
        </p>
      </div>

      {/* Modal de estadísticas */}
      <PlayerStats
        isOpen={isStatsOpen}
        onClose={() => setIsStatsOpen(false)}
        level={level}
        xp={xp}
        xpToNextLevel={xpToNextLevel}
        collection={collection}
      />
    </div>
  );
}















