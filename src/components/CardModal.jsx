import React from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

function CardModal({ selectedCard, onClose }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [15, -15]);
  const rotateY = useTransform(x, [-150, 150], [-15, 15]);
  const bgPosX = useTransform(x, [-150, 150], ["0%", "100%"]);
  const bgPosY = useTransform(y, [-150, 150], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(offsetX);
    y.set(offsetY);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <AnimatePresence>
      {selectedCard && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative"
            style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={(e) => e.stopPropagation()}
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: 90, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <img
              src={selectedCard.img}
              alt={selectedCard.name}
              className="w-full max-h-[80vh] object-contain rounded-xl shadow-lg relative z-10
                         max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[380px]"
            />

            {/* Holo para épicas */}
            {selectedCard.rarity === "epic" && (
              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none z-20"
                style={{
                  background: "linear-gradient(120deg, rgba(241,248,25,0.3), rgba(241,248,25,0), rgba(222,248,25,0.3))",
                  mixBlendMode: "screen",
                  backgroundPositionX: bgPosX,
                  backgroundPositionY: bgPosY,
                  backgroundSize: "200% 200%",
                }}
              />
            )}

            {/* Holo para raras */}
            {selectedCard.rarity === "rare" && (
              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none z-20"
                style={{
                  background: "linear-gradient(120deg, rgba(200,200,200,0.4), rgba(255,255,255,0), rgba(160,160,160,0.4))",
                  mixBlendMode: "screen",
                  backgroundPositionX: bgPosX,
                  backgroundPositionY: bgPosY,
                  backgroundSize: "200% 200%",
                }}
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CardModal;



