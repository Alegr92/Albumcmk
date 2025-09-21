import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardModal from "./components/CardModal";
import Album from "./components/Album";
import PlayerProfile from "./components/PlayerProfile";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import HeroImage from "./components/HeroImage";

// ------------------ DATA ------------------
const ALL_CARDS = [
  { id: 1, name: "Ruso", rarity: "epic", img: "/cards/Ruso.png" },
  { id: 2, name: "Matias", rarity: "epic", img: "/cards/Matias.png" },
  { id: 3, name: "Pako", rarity: "epic", img: "/cards/Pako.png" },
  { id: 4, name: "MP", rarity: "epic", img: "/cards/MP.png" },
  { id: 5, name: "Devin", rarity: "epic", img: "/cards/Devin.png" },
  { id: 6, name: "Jorge", rarity: "epic", img: "/cards/Jorge.png" },
  { id: 7, name: "Milanga", rarity: "epic", img: "/cards/Milanga.png" },
  { id: 8, name: "Khalesi", rarity: "epic", img: "/cards/Khalesi.png" },
  { id: 9, name: "Ollie", rarity: "epic", img: "/cards/Ollie.png" },
  { id: 10, name: "Pure", rarity: "epic", img: "/cards/Pure.png" },
  { id: 11, name: "Nutria", rarity: "epic", img: "/cards/Nutria.png" },
  { id: 12, name: "Lewis", rarity: "epic", img: "/cards/Lewis.png" },
  { id: 13, name: "Kobe", rarity: "epic", img: "/cards/Kobe.png" },
  { id: 14, name: "Cayden", rarity: "rare", img: "/cards/Cayden.png" },
  { id: 15, name: "Chino", rarity: "rare", img: "/cards/Chino.png" },
  { id: 16, name: "Axelito", rarity: "rare", img: "/cards/Axelito.png" },
  { id: 17, name: "Bianca", rarity: "rare", img: "/cards/Bianca.png" },
  { id: 18, name: "Phill", rarity: "rare", img: "/cards/Phill.png" },
  { id: 19, name: "Fachanta", rarity: "rare", img: "/cards/Fachanta.png" },
  { id: 20, name: "Sam", rarity: "rare", img: "/cards/Sam.png" },
  { id: 21, name: "Edu", rarity: "rare", img: "/cards/Edu.png" },
  { id: 22, name: "Bastian", rarity: "rare", img: "/cards/Bastian.png" },
  { id: 23, name: "Gato", rarity: "rare", img: "/cards/Gato.png" },
  { id: 24, name: "Randy", rarity: "rare", img: "/cards/Randy.png" },
  { id: 25, name: "Logan", rarity: "rare", img: "/cards/Logan.png" },
  { id: 26, name: "Amy", rarity: "rare", img: "/cards/Amy.png" },
  { id: 27, name: "Malik", rarity: "rare", img: "/cards/Malik.png" },
  { id: 28, name: "Naz", rarity: "rare", img: "/cards/Naz.png" },
  { id: 29, name: "Licha", rarity: "rare", img: "/cards/Licha.png" },
  { id: 30, name: "Supre", rarity: "rare", img: "/cards/Supre.png" },
  { id: 31, name: "Eminem", rarity: "rare", img: "/cards/Eminem.png" },
  { id: 32, name: "Alya", rarity: "rare", img: "/cards/Alya.png" },
  { id: 33, name: "Alex", rarity: "common", img: "/cards/Alex.png" },
  { id: 34, name: "Pancry", rarity: "common", img: "/cards/Pancry.png" },
  { id: 35, name: "Lala", rarity: "common", img: "/cards/Lala.png" },
  { id: 36, name: "Jabu", rarity: "common", img: "/cards/Jabu.png" },
  { id: 37, name: "Roman", rarity: "common", img: "/cards/Roman.png" },
  { id: 38, name: "Franco", rarity: "common", img: "/cards/Franco.png" },
  { id: 39, name: "Curry", rarity: "common", img: "/cards/Curry.png" },
  { id: 40, name: "Tyler", rarity: "common", img: "/cards/Tyler.png" },
  { id: 41, name: "Borra", rarity: "common", img: "/cards/Borra.png" },
  { id: 42, name: "Byte", rarity: "common", img: "/cards/Byte.png" },
  { id: 43, name: "Lucy", rarity: "common", img: "/cards/Lucy.png" },
  { id: 44, name: "Diego", rarity: "common", img: "/cards/Diego.png" },
  { id: 45, name: "Teo", rarity: "common", img: "/cards/Teo.png" },
  { id: 46, name: "Feli", rarity: "common", img: "/cards/Feli.png" },
  { id: 47, name: "Lux", rarity: "common", img: "/cards/Lux.png" },
  { id: 48, name: "Lukitas", rarity: "common", img: "/cards/Lukitas.png" },
  { id: 49, name: "Peru", rarity: "common", img: "/cards/Peru.png" },
  { id: 50, name: "Rusito", rarity: "common", img: "/cards/Rusito.png" },
  { id: 51, name: "Cmk", rarity: "epic", img: "/cards/Cmk.png" },
  { id: 52, name: "Camilo", rarity: "common", img: "/cards/Camilo.png" },
  { id: 53, name: "Viper", rarity: "common", img: "/cards/Viper.png" },
  { id: 54, name: "Jose", rarity: "common", img: "/cards/Jose.png" },
  { id: 55, name: "Kurt", rarity: "common", img: "/cards/Kurt.png" },
  { id: 56, name: "Viole", rarity: "common", img: "/cards/Viole.png" },
  { id: 57, name: "Adam", rarity: "common", img: "/cards/Adam.png" },
  { id: 58, name: "Valen", rarity: "common", img: "/cards/Valen.png" },
  { id: 59, name: "Vero", rarity: "rare", img: "/cards/Vero.png" },
  { id: 60, name: "Barrio", rarity: "epic", img: "/cards/Barrio.png" },
];

const PROBABILITIES_NORMAL = { common: 0.6, rare: 0.3, epic: 0.1 };
const PROBABILITIES_EPIC = { common: 0.5, rare: 0.3, epic: 0.2 };
const STORAGE_KEY = "cmk_collection";
const COINS_KEY = "cmk_coins";

const XP_GAIN = { common: 10, rare: 25, epic: 50 };
const COINS_FROM_DUP = { common: 5, rare: 10, epic: 15 };

// ------------------ FUNCIONES ------------------
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
          setOpenedToday(data.openedToday || []);
          setCollection(data.collection || []);
          if (data.player) setPlayer(data.player);
          if ((data.openedToday || []).length > 0) setContainerVisible(true);
        } else {
          setOpenedToday([]);
        }
      } catch (e) {
        console.error("Error parsing STORAGE_KEY", e);
      }
    }
  }, []);

  // Guardar monedas
  useEffect(() => {
    localStorage.setItem(COINS_KEY, coins);
  }, [coins]);

  // Contador hasta medianoche
  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getMidnightRemaining()), 1000);
    return () => clearInterval(interval);
  }, []);

  // ------------------ FUNCIONES DE JUEGO ------------------
  const gainXp = (amount) => {
    setPlayer((prev) => {
      let { xp, level, xpToNextLevel } = prev;
      xp += amount;

      while (xp >= xpToNextLevel) {
        xp -= xpToNextLevel;
        level += 1;
        xpToNextLevel = Math.floor(xpToNextLevel * 1.2);
      }

      const updated = { xp, level, xpToNextLevel };
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          date: new Date().toDateString(),
          openedToday,
          collection,
          player: updated,
        })
      );

      return updated;
    });
  };

  const openPack = (typeOrIndex) => {
    let probabilities;
    let isDaily = false;
    let dailyIndex = null;

    if (typeof typeOrIndex === "string") {
      probabilities = typeOrIndex === "epic" ? PROBABILITIES_EPIC : PROBABILITIES_NORMAL;
    } else {
      const index = typeOrIndex;
      dailyIndex = index;
      isDaily = true;

      if (openedToday.includes(index) || openedToday.length >= 4) return;
      if (disabledPacks.includes(index)) return;

      setDisabledPacks((prev) => [...prev, index]);
      probabilities = index === 3 ? PROBABILITIES_EPIC : PROBABILITIES_NORMAL;
    }

    const pack = Array.from({ length: 4 }, () => sampleCard(probabilities));

    setRevealed([]);
    let tempCollection = [...collection];
    let i = 0;

 const interval = setInterval(() => {
  if (i < pack.length) {
    const card = pack[i];

    // mostrar carta
    setRevealed((prev) => [...prev, card]);

    // nueva o duplicada
    if (!tempCollection.some((c) => c.id === card.id)) {
      tempCollection.push(card); // nueva carta
    } else {
      // carta duplicada => recompensa en monedas
      const reward = COINS_FROM_DUP[card.rarity] || 1;
      setCoins((prev) => prev + reward);
      new Audio("/sounds/coin.mp3").play().catch(() => {});

      // popup animado sobre la carta duplicada usando cardId
      setRewardPopups((prev) => [
        ...prev,
        { id: Date.now() + Math.random(), reward, cardId: card.id },
      ]);
    }

    // XP por rareza
    gainXp(XP_GAIN[card.rarity]);

    // sonidos rareza
    if (card.rarity === "epic") new Audio("/sounds/epic.mp3").play().catch(() => {});
    if (card.rarity === "rare") new Audio("/sounds/rare.mp3").play().catch(() => {});

    i++;
  } else {
    clearInterval(interval);

    // Actualizo la colección en estado
    setCollection(tempCollection);

    const today = new Date().toDateString();

    if (isDaily) {
      setOpenedToday((prevOpened) => {
        const updatedOpened = [...prevOpened, dailyIndex];
        setContainerVisible(true);

        // Persistir datos
        setPlayer((currentPlayer) => {
          localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({
              date: today,
              openedToday: updatedOpened,
              collection: tempCollection,
              player: currentPlayer,
            })
          );
          return currentPlayer;
        });

        return updatedOpened;
      });
    } else {
      // Persistir datos para sobres comprados
      setPlayer((currentPlayer) => {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            date: today,
            openedToday,
            collection: tempCollection,
            player: currentPlayer,
          })
        );
        return currentPlayer;
      });
    }
  }
}, 1200);
};

  // ------------------ RENDER ------------------
  return (
    <div className="min-h-screen flex flex-col items-center p-4 md:p-6 relative overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-950 animate-pulse-slow -z-20" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.03),transparent_70%)] -z-10" />

      <HeroImage 
      image="avatars/cmk.png" 
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
          const isDisabled = disabledPacks.includes(index);

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
                className="w-full h-48 sm:h-60 md:h-60 xl:h-72 rounded-lg cursor-pointer relative shadow-md hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedCard(card)}
                initial={{ opacity: 0, y: 50, rotateY: 90 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.5 }}
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
                          setRewardPopups((prev) => prev.filter((p) => p.id !== popup.id))
                        }
                      >
                        <div className="bg-yellow-400 text-black px-2 py-1 rounded-md font-bold shadow-lg">
                          +{popup.reward} 💰
                        </div>
                      </motion.div>
                    ))}
                </AnimatePresence>

                {card.rarity === "epic" && (
                  <>
                    <div className="absolute inset-0 rounded-lg pointer-events-none z-20 shadow-[0_0_25px_10px_rgba(255,240,100,0.6)]"></div>
                    {[...Array(6)].map((_, idx) => (
                      <motion.div
                        key={idx}
                        className="absolute w-2 h-2 bg-yellow-300 rounded-full z-20"
                        initial={{ opacity: 0, y: 0, x: 0, scale: 0.5 }}
                        animate={{
                          opacity: [0, 1, 0],
                          y: [-10, -30, -50][Math.floor(Math.random() * 3)],
                          x: [-10, 0, 10][Math.floor(Math.random() * 3)],
                          scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                          repeat: Infinity,
                          repeatDelay: Math.random() * 2,
                          duration: 2 + Math.random(),
                        }}
                      />
                    ))}
                  </>
                )}

                {card.rarity === "rare" && (
                  <div className="absolute inset-0 rounded-lg pointer-events-none z-20 shadow-[0_0_25px_10px_rgba(255,255,255,0.5)]"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <CardModal selectedCard={selectedCard} onClose={() => setSelectedCard(null)} />

      <div className="my-6 z-10">
        <Shop
          onBuyPack={(type) => {
            if (type === "normal" && coins >= 50) {
              setCoins((c) => c - 50);
              openPack("normal");
            }
            if (type === "epic" && coins >= 100) {
              setCoins((c) => c - 100);
              openPack("epic");
            }
          }}
          coins={coins}
        />
      </div>

      <Album collection={collection} ALL_CARDS={ALL_CARDS} setSelectedCard={setSelectedCard} />
      
      <Footer/>

    </div> 
  );
}

