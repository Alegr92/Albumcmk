// components/Shop.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Shop({ onBuyPack, coins }) {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Saldo actual */}
      <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg shadow-md">
        <span className="text-yellow-400 text-xl font-bold">Tus monedas: {coins}💰</span>
      </div>

      {/* Botones de compra */}
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Sobre Normal */}
        <motion.button
          onClick={() => onBuyPack("normal",75)}
          disabled={coins < 75}
          whileHover={coins >= 75 ? { scale: 1.05 } : {}}
          whileTap={coins >= 75 ? { scale: 0.95 } : {}}
          className={`px-6 py-3 rounded-xl font-bold shadow-lg text-white ${
            coins >= 75
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-600 cursor-not-allowed"
          }`}
        >
          Comprar Sobre Normal (75💰)
        </motion.button>

        {/* Sobre Épico */}
        <motion.button
          onClick={() => onBuyPack("epic",150)}
          disabled={coins < 150}
          whileHover={coins >= 150 ? { scale: 1.05 } : {}}
          whileTap={coins >= 150 ? { scale: 0.95 } : {}}
          className={`px-6 py-3 rounded-xl font-bold shadow-lg text-white ${
            coins >= 150
              ? "bg-yellow-600 hover:bg-yellow-700"
              : "bg-gray-600 cursor-not-allowed"
          }`}
        >
          Comprar Sobre Épico (150💰)
        </motion.button>
      </div>
    </div>
  );
}




