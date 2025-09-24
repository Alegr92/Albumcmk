import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardModal from "./components/CardModal";
import Album from "./components/Album";
import PlayerProfile from "./components/PlayerProfile";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import HeroImage from "./components/HeroImage";
import "./index.css"

// ------------------ DATA ------------------
const ALL_CARDS = [
  { id: 1, name: "Ruso", rarity: "epic", img: "/cards/Ruso.webp" },
  { id: 2, name: "Matias", rarity: "epic", img: "/cards/Matias.webp" },
  { id: 3, name: "Pako", rarity: "epic", img: "/cards/Pako.webp" },
  { id: 4, name: "MP", rarity: "epic", img: "/cards/MP.webp" },
  { id: 5, name: "Devin", rarity: "epic", img: "/cards/Devin.webp" },
  { id: 6, name: "Jorge", rarity: "epic", img: "/cards/Jorge.webp" },
  { id: 7, name: "Milanga", rarity: "epic", img: "/cards/Milanga.webp" },
  { id: 8, name: "Khalesi", rarity: "epic", img: "/cards/Khalesi.webp" },
  { id: 9, name: "Ollie", rarity: "epic", img: "/cards/Ollie.webp" },
  { id: 10, name: "Pure", rarity: "epic", img: "/cards/Pure.webp" },
  { id: 11, name: "Nutria", rarity: "epic", img: "/cards/Nutria.webp" },
  { id: 12, name: "Lewis", rarity: "epic", img: "/cards/Lewis.webp" },
  { id: 13, name: "Kobe", rarity: "epic", img: "/cards/Kobe.webp" },
  { id: 14, name: "Cayden", rarity: "rare", img: "/cards/Cayden.webp" },
  { id: 15, name: "Chino", rarity: "rare", img: "/cards/Chino.webp" },
  { id: 16, name: "Axelito", rarity: "rare", img: "/cards/Axelito.webp" },
  { id: 17, name: "Bianca", rarity: "rare", img: "/cards/Bianca.webp" },
  { id: 18, name: "Phill", rarity: "rare", img: "/cards/Phill.webp" },
  { id: 19, name: "Fachanta", rarity: "rare", img: "/cards/Fachanta.webp" },
  { id: 20, name: "Sam", rarity: "rare", img: "/cards/Sam.webp" },
  { id: 21, name: "Edu", rarity: "rare", img: "/cards/Edu.webp" },
  { id: 22, name: "Bastian", rarity: "rare", img: "/cards/Bastian.webp" },
  { id: 23, name: "Gato", rarity: "rare", img: "/cards/Gato.webp" },
  { id: 24, name: "Randy", rarity: "rare", img: "/cards/Randy.webp" },
  { id: 25, name: "Logan", rarity: "rare", img: "/cards/Logan.webp" },
  { id: 26, name: "Amy", rarity: "rare", img: "/cards/Amy.webp" },
  { id: 27, name: "Malik", rarity: "rare", img: "/cards/Malik.webp" },
  { id: 28, name: "Naz", rarity: "rare", img: "/cards/Naz.webp" },
  { id: 29, name: "Licha", rarity: "rare", img: "/cards/Licha.webp" },
  { id: 30, name: "Supre", rarity: "rare", img: "/cards/Supre.webp" },
  { id: 31, name: "Eminem", rarity: "rare", img: "/cards/Eminem.webp" },
  { id: 32, name: "Alya", rarity: "rare", img: "/cards/Alya.webp" },
  { id: 33, name: "Alex", rarity: "common", img: "/cards/Alex.webp" },
  { id: 34, name: "Pancry", rarity: "common", img: "/cards/Pancry.webp" },
  { id: 35, name: "Lala", rarity: "common", img: "/cards/Lala.webp" },
  { id: 36, name: "Jabu", rarity: "common", img: "/cards/Jabu.webp" },
  { id: 37, name: "Roman", rarity: "common", img: "/cards/Roman.webp" },
  { id: 38, name: "Franco", rarity: "common", img: "/cards/Franco.webp" },
  { id: 39, name: "Curry", rarity: "common", img: "/cards/Curry.webp" },
  { id: 40, name: "Tyler", rarity: "common", img: "/cards/Tyler.webp" },
  { id: 41, name: "Borra", rarity: "common", img: "/cards/Borra.webp" },
  { id: 42, name: "Byte", rarity: "common", img: "/cards/Byte.webp" },
  { id: 43, name: "Lucy", rarity: "common", img: "/cards/Lucy.webp" },
  { id: 44, name: "Diego", rarity: "common", img: "/cards/Diego.webp" },
  { id: 45, name: "Teo", rarity: "common", img: "/cards/Teo.webp" },
  { id: 46, name: "Feli", rarity: "common", img: "/cards/Feli.webp" },
  { id: 47, name: "Lux", rarity: "common", img: "/cards/Lux.webp" },
  { id: 48, name: "Lukitas", rarity: "common", img: "/cards/Lukitas.webp" },
  { id: 49, name: "Peru", rarity: "common", img: "/cards/Peru.webp" },
  { id: 50, name: "Rusito", rarity: "common", img: "/cards/Rusito.webp" },
  { id: 51, name: "Cmk", rarity: "epic", img: "/cards/Cmk.webp" },
  { id: 52, name: "Camilo", rarity: "common", img: "/cards/Camilo.webp" },
  { id: 53, name: "Viper", rarity: "common", img: "/cards/Viper.webp" },
  { id: 54, name: "Jose", rarity: "common", img: "/cards/Jose.webp" },
  { id: 55, name: "Kurt", rarity: "common", img: "/cards/Kurt.webp" },
  { id: 56, name: "Viole", rarity: "common", img: "/cards/Viole.webp" },
  { id: 57, name: "Adam", rarity: "common", img: "/cards/Adam.webp" },
  { id: 58, name: "Valen", rarity: "common", img: "/cards/Valen.webp" },
  { id: 59, name: "Vero", rarity: "rare", img: "/cards/Vero.webp" },
  { id: 60, name: "Barrio", rarity: "epic", img: "/cards/Barrio.webp" },
];

const PROBABILITIES_NORMAL = { common: 0.6, rare: 0.3, epic: 0.1 };
const PROBABILITIES_EPIC = { common: 0.5, rare: 0.3, epic: 0.2 };
const STORAGE_KEY = "cmk_collection";
const COINS_KEY = "cmk_coins";

const XP_GAIN = { common: 10, rare: 25, epic: 50 };
const COINS_FROM_DUP = { common: 5, rare: 10, epic: 15 };
const CARD_REVEAL_DELAY = 1200;
const XP_COIN_DELAY = 300;
const FINAL_ANIMATION_DELAY = 1200; // Nuevo: retraso final para la animación

// ------------------ FUNCIONES AUXILIARES ------------------
function sampleCard(probabilities) {
  const r = Math.random();
  let threshold = 0;
  for (const [rarity, prob] of Object.entries(probabilities)) {
    threshold += prob;
    if (r <= threshold) {
      const pool = ALL_CARDS.filter((c) => c.rarity === rarity);
      return pool[Math.floor(Math.random() * pool.length)];
    }
  }
  return ALL_CARDS.filter((c) => c.rarity === "common")[0];
}

function getMidnightRemaining() {
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0);
  return midnight - now;
}

// ------------------ COMPONENTE ------------------
export default function PackOpener() {
  const [revealed, setRevealed] = useState([]);
  const [collection, setCollection] = useState([]);
  const [openedToday, setOpenedToday] = useState([]);
  const [disabledPacks, setDisabledPacks] = useState([]);
  const [containerVisible, setContainerVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(getMidnightRemaining());
  const [selectedCard, setSelectedCard] = useState(null);
  const [isOpeningPack, setIsOpeningPack] = useState(false);

  const [coins, setCoins] = useState(() => {
    const savedCoins = localStorage.getItem(COINS_KEY);
    return savedCoins ? parseInt(savedCoins, 10) : 0;
  });

  const [player, setPlayer] = useState({
    level: 1,
    xp: 0,
    xpToNextLevel: 100,
  });

  const [rewardPopups, setRewardPopups] = useState([]);

// Cargar localStorage
useEffect(() => {
  const raw = localStorage.getItem(STORAGE_KEY);
  const today = new Date().toDateString();

  if (raw) {
    try {
      const data = JSON.parse(raw);
      if (data.date === today) {
        // Día actual → restaurar todo
        setOpenedToday(data.openedToday || []);
        setCollection(data.collection || []);
        if (data.player) setPlayer(data.player);
        if ((data.openedToday || []).length > 0) setContainerVisible(true);
      } else {
        // Nuevo día → resetear sobres, mantener álbum y nivel
        setOpenedToday([]);
        setCollection(data.collection || []);
        if (data.player) setPlayer(data.player);
      }
    } catch (e) {
      console.error("Error parsing STORAGE_KEY", e);
    }
  }
}, []);

  // Contador hasta medianoche
  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getMidnightRemaining()), 1000);
    return () => clearInterval(interval);
  }, []);

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const gainXp = (amount) => {
    setPlayer((prev) => {
      let { xp, level, xpToNextLevel } = prev;
      xp += amount;
      while (xp >= xpToNextLevel) {
        xp -= xpToNextLevel;
        level += 1;
        xpToNextLevel = Math.floor(xpToNextLevel * 1.2);
      }
      return { xp, level, xpToNextLevel };
    });
  };

const openPack = async (typeOrIndex) => {
  if (isOpeningPack) return;
  setIsOpeningPack(true);

  let probabilities;
  let isDaily = false;
  let dailyIndex = null;

  let tempCollection = [...collection];
  let tempCoins = coins;

  if (typeof typeOrIndex === "string") {
    // Comprados en la tienda
    if (typeOrIndex === "epic") {
      if (tempCoins < 150) {
        setIsOpeningPack(false);
        return; // No hay monedas suficientes
      }
      tempCoins -= 150;
      probabilities = PROBABILITIES_EPIC;
    } else {
      if (tempCoins < 75) {
        setIsOpeningPack(false);
        return; // No hay monedas suficientes
      }
      tempCoins -= 75;
      probabilities = PROBABILITIES_NORMAL;
    }
  } else {
    // Sobres diarios gratis
    const index = typeOrIndex;
    dailyIndex = index;
    isDaily = true;
    if (openedToday.includes(index) || openedToday.length >= 4) {
      setIsOpeningPack(false);
      return;
    }
    setDisabledPacks((prev) => [...prev, index]);
    probabilities = index === 3 ? PROBABILITIES_EPIC : PROBABILITIES_NORMAL;
  }

  // Generar pack
  const pack = Array.from({ length: 4 }, () => sampleCard(probabilities));
  setRevealed([]);
  setContainerVisible(true);

  if (isDaily) {
    setOpenedToday((prev) => [...prev, dailyIndex]);
  }

  for (const card of pack) {
    await wait(CARD_REVEAL_DELAY);
    setRevealed((prev) => [...prev, card]);

    await wait(XP_COIN_DELAY);

    if (!tempCollection.some((c) => c.id === card.id)) {
      tempCollection.push(card);
    } else {
      const reward = COINS_FROM_DUP[card.rarity] || 1;
      tempCoins += reward;
      new Audio("/sounds/coin.mp3").play().catch(() => {});
      setRewardPopups((prev) => [
        ...prev,
        { id: Date.now() + Math.random(), reward, cardId: card.id },
      ]);
    }

    gainXp(XP_GAIN[card.rarity]);

    if (card.rarity === "epic") new Audio("/sounds/epic.mp3").play().catch(() => {});
    if (card.rarity === "rare") new Audio("/sounds/rare.mp3").play().catch(() => {});
  }

  // Esperar a que termine animación
  await wait(FINAL_ANIMATION_DELAY);

  // Guardar estado
  setCollection(tempCollection);
  setCoins(tempCoins);
  setIsOpeningPack(false);

  setPlayer((finalPlayerState) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        date: new Date().toDateString(),
        openedToday: isDaily ? [...openedToday, dailyIndex] : openedToday,
        collection: tempCollection,
        player: finalPlayerState,
      })
    );
    return finalPlayerState;
  });

  localStorage.setItem(COINS_KEY, tempCoins);
};


  // ------------------ RENDER ------------------
  return (
    <div className="min-h-screen flex flex-col items-center p-4 md:p-6 relative overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-950 animate-pulse-slow -z-20" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.03),transparent_70%)] -z-10" />

      <HeroImage
        image="avatars/cmk.webp"
        title="Album de cartas CMK"
        subtitle="Coleccion cyberpunk"
      />

      <PlayerProfile
        level={player.level}
        xp={player.xp}
        xpToNextLevel={player.xpToNextLevel}
        collection={collection}
      />

      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-8 z-10 mt-2">
        {[0, 1, 2, 3].map((index) => {
          const isEpic = index === 3;
          const isOpened = openedToday.includes(index);
          const isDisabled = disabledPacks.includes(index) || isOpeningPack;
          return (
            <motion.img
              key={index}
              src={isEpic ? "cards/Epico.png" : "cards/Comun.png"}
              alt={isEpic ? "Sobre Épico" : "Sobre"}
              onClick={() => !isOpened && !isDisabled && openPack(index)}
              className={`w-24 sm:w-32 md:w-40 h-auto object-contain cursor-pointer select-none ${
                isOpened || isDisabled ? "opacity-40 pointer-events-none" : ""
              }`}
              whileTap={!isOpened && !isDisabled ? { scale: 0.95 } : {}}
              whileHover={!isOpened && !isDisabled ? { scale: 1.05 } : {}}
              animate={
                !isOpened && !isDisabled
                  ? {
                      filter: isEpic
                        ? [
                            "drop-shadow(0 0 8px rgba(255,215,0,0.5))",
                            "drop-shadow(0 0 25px rgba(255,215,0,0.9))",
                            "drop-shadow(0 0 8px rgba(255,215,0,0.5))",
                          ]
                        : [
                            "drop-shadow(0 0 6px rgba(100,200,255,0.4))",
                            "drop-shadow(0 0 18px rgba(100,200,255,0.8))",
                            "drop-shadow(0 0 6px rgba(100,200,255,0.4))",
                          ],
                    }
                  : { filter: "none" }
              }
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          );
        })}
      </div>

      {openedToday.length >= 4 && (
        <p className="text-yellow-300 mb-3">
          Próximos sobres en: {Math.floor(timeLeft / 3600000)}h{" "}
          {Math.floor((timeLeft % 3600000) / 60000)}m
        </p>
      )}

<AnimatePresence>
  {(revealed.length > 0 || containerVisible) && (
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 xl:grid-cols-4 sm:gap-6 mt-2 bg-gray-900/20 p-4 rounded-xl z-10 relative"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      transition={{ duration: 0.5 }}
    >
      {revealed.map((card, i) => (
        <motion.div
          key={`${card.id}-${i}`}
          className={`w-full h-48 sm:h-60 md:h-60 xl:h-72 rounded-lg cursor-pointer relative shadow-md hover:scale-105 transition-transform duration-300 card-glow ${card.rarity}`}
          onClick={() => setSelectedCard(card)}
          initial={{ opacity: 0, y: 50, rotateY: 90 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
        >
          <img
            src={card.img}
            alt={card.name}
            className="w-full h-full object-cover rounded-lg"
          />

          <AnimatePresence>
            {rewardPopups
              .filter((popup) => popup.cardId === card.id)
              .map((popup) => (
                <motion.div
                  key={popup.id}
                  className="absolute inset-0 flex items-center justify-center z-30"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1.4, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  onAnimationComplete={() =>
                    setRewardPopups((prev) =>
                      prev.filter((p) => p.id !== popup.id)
                    )
                  }
                >
                  <div className="bg-yellow-400 text-black px-2 py-1 rounded-md font-bold shadow-lg">
                    +{popup.reward} 💰
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  )}
</AnimatePresence>


      <CardModal selectedCard={selectedCard} onClose={() => setSelectedCard(null)} />

      <div className="my-6 z-10">
        <Shop
          onBuyPack={(type, cost) => {
            if (isOpeningPack) return;

            // 🔹 Restar monedas inmediatamente al comprar
            const newCoins = coins - cost;
            setCoins(newCoins);
            localStorage.setItem(COINS_KEY, newCoins);

            // 🔹 Ahora sí, abrir el sobre
            openPack(type);
          }}
          coins={coins}
        />
      </div>

      <Album collection={collection} ALL_CARDS={ALL_CARDS} setSelectedCard={setSelectedCard} />

      <Footer />
    </div>
  );
}

