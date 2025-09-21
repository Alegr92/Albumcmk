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
          onClick={() => onBuyPack("normal")}
          disabled={coins < 50}
          whileHover={coins >= 50 ? { scale: 1.05 } : {}}
          whileTap={coins >= 50 ? { scale: 0.95 } : {}}
          className={`px-6 py-3 rounded-xl font-bold shadow-lg text-white ${
            coins >= 50
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-600 cursor-not-allowed"
          }`}
        >
          Comprar Sobre Normal (50💰)
        </motion.button>

        {/* Sobre Épico */}
        <motion.button
          onClick={() => onBuyPack("epic")}
          disabled={coins < 100}
          whileHover={coins >= 100 ? { scale: 1.05 } : {}}
          whileTap={coins >= 100 ? { scale: 0.95 } : {}}
          className={`px-6 py-3 rounded-xl font-bold shadow-lg text-white ${
            coins >= 100
              ? "bg-yellow-600 hover:bg-yellow-700"
              : "bg-gray-600 cursor-not-allowed"
          }`}
        >
          Comprar Sobre Épico (100💰)
        </motion.button>
      </div>
    </div>
  );
}




