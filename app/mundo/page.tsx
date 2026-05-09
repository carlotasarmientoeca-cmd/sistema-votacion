"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Trophy,
  Home,
  Store,
  User,
  Menu,
  Gem,
  Coins,
} from "lucide-react";

const islands = [
  {
    id: 1,
    slug: "deportes",
    name: "Isla de Deportes",
    image: "/islands/isla2-deporte.png",
    tasksDone: 0,
    competitions: 0,
  },
  {
    id: 2,
    slug: "medicina",
    name: "Isla de Medica",
    image: "/islands/isla-medica.png",
    tasksDone: 0,
    competitions: 0,
  },
  {
    id: 3,
    slug: "ingenieria",
    name: "Isla de Ingeniería",
    image: "/islands/isla-ingenieria.png",
    tasksDone: 0,
    competitions: 0,
  },
  {
    id: 4,
    slug: "sociales",
    name: "Isla de Sociales",
    image: "/islands/isla-sociales.png",
    tasksDone: 0,
    competitions: 0,
  },
];

export default function MundoPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const selectedIsland = islands[activeIndex];

  const nextIsland = () => {
    setActiveIndex((prev) => (prev + 1) % islands.length);
  };

  const prevIsland = () => {
    setActiveIndex((prev) => (prev - 1 + islands.length) % islands.length);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") nextIsland();
      if (event.key === "ArrowLeft") prevIsland();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
 <main className="relative h-screen overflow-hidden bg-[#07372f] text-white">
      <div className="absolute inset-0 bg-[url('/principal-bg.png')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#06231f]/30 via-[#0b6f62]/25 to-[#021917]/80" />

      <div className="absolute left-20 top-40 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="absolute right-36 bottom-32 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

      <header className="relative z-30 mx-auto mt-4 flex w-[92%] items-center justify-between rounded-3xl border-2 border-[#34d6c3] bg-[#dfe7d3]/85 px-7 py-4 text-[#5d5348] shadow-2xl backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="grid h-14 w-14 place-items-center rounded-xl border border-[#f4b83f] bg-[#1fc7ad] text-white shadow-lg">
            🛡️
          </div>

          <div>
            <div className="flex items-center gap-2 text-sm font-black">
            <span>NV. 0</span>
            <span className="text-yellow-500">⚡</span>
            <span>0/100 XP</span>
            </div>
            <div className="mt-2 h-2 w-40 rounded-full bg-[#9b9484]">
              <div className="h-full w-0 rounded-full bg-[#26d3bd]" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-xl bg-[#5b4a3d] px-5 py-3 font-black text-white shadow-lg">
            <Coins size={18} className="text-yellow-300" />
            0
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-[#5b4a3d] px-5 py-3 font-black text-white shadow-lg">
            <Gem size={18} className="text-cyan-300" />
            0
          </div>

          <button className="grid h-12 w-12 place-items-center rounded-xl bg-[#5b4a3d] text-white shadow-lg transition hover:scale-105">
            <Menu />
          </button>
        </div>
      </header>

      <section className="relative z-20 mt-3 text-center">
        <h1 className="text-3xl font-black uppercase tracking-[0.45em] text-[#ffd84a] drop-shadow-lg">
          Mundo de las Islas
        </h1>
        <p className="mt-2 text-lg font-bold text-emerald-50">
          Explora, aprende y conquista
        </p>
      </section>

      <section className="relative z-20 mx-auto mt-4 grid w-[92%] grid-cols-[1fr_390px] items-center gap-8">
     <div className="relative flex h-[500px] items-center justify-center overflow-hidden rounded-[2rem] px-24">
          <button
            onClick={prevIsland}
            className="absolute left-2 z-30 grid h-20 w-20 place-items-center rounded-full border-2 border-[#35e7d1] bg-[#0b8f7d]/80 text-white shadow-xl backdrop-blur-md transition hover:scale-110 hover:brightness-125"
          >
            <ChevronLeft size={46} />
          </button>

          <button
            onClick={nextIsland}
            className="absolute right-2 z-30 grid h-20 w-20 place-items-center rounded-full border-2 border-[#35e7d1] bg-[#0b8f7d]/80 text-white shadow-xl backdrop-blur-md transition hover:scale-110 hover:brightness-125"
          >
            <ChevronRight size={46} />
          </button>

          <motion.div
            className="relative h-[460px] w-full cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) nextIsland();
              if (info.offset.x > 80) prevIsland();
            }}
          >
            {islands.map((island, index) => {
              const total = islands.length;
              let offset = index - activeIndex;

              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const isActive = offset === 0;
              const isVisible = Math.abs(offset) <= 1;

              return (
                <motion.div
                  key={island.id}
                  animate={{
                    x: `${offset * 62}%`,
                    
                    opacity: isVisible ? (isActive ? 1 : 0.45) : 0,
                    zIndex: isActive ? 20 : 5,
                    filter: isActive ? "blur(0px)" : "blur(1px)",
                  }}
                  transition={{ type: "spring", stiffness: 130, damping: 20 }}
                  className="absolute left-1/2 top-1/2 flex w-[520px] -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                >
                  <button
                    onClick={() => {
                      if (isActive) {
                        window.location.href = `/mundo/${island.slug}`;
                      } else {
                        setActiveIndex(index);
                      }
                    }}
                    className="group relative"
                  >
                    {isActive && (
                      <div className="absolute inset-0 scale-125 rounded-full bg-yellow-300/25 blur-3xl" />
                    )}

                    <motion.div
                      animate={{ y: [0, -12, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative h-[470px] w-[470px]"
                    >
                      <Image
                        src={island.image}
                        alt={island.name}
                        fill
                        className="object-contain drop-shadow-2xl transition group-hover:brightness-125"
                        priority={isActive}
                      />
                    </motion.div>
                  </button>

                  <div
                    className={`-mt-10 rounded-2xl border px-8 py-3 text-center shadow-xl backdrop-blur-md ${
                      isActive
                        ? "border-yellow-300 bg-[#2f2b22]/90 text-white"
                        : "border-[#26d3bd] bg-[#173c36]/50 text-white/70"
                    }`}
                  >
                    <p className="text-sm font-bold">Isla de</p>
                    <h2 className="text-xl font-black">
                      {island.name.replace("Isla de ", "")}
                    </h2>
                  </div>

                  {isActive && (
                    <div className="mt-3 h-5 w-5 rotate-45 bg-yellow-300 shadow-[0_0_25px_rgba(253,224,71,0.8)]" />
                  )}
                </motion.div>
              );
            })}
          </motion.div>

        
         
        </div>

        <aside className="rounded-[2rem] border border-[#35e7d1]/40 bg-[#0d3f35]/80 p-7 shadow-2xl backdrop-blur-xl">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-yellow-300">
            Isla seleccionada
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIsland.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <h2 className="mt-5 text-4xl font-black text-white drop-shadow">
                {selectedIsland.name}
              </h2>

              <div className="mt-8 space-y-5">
                <InfoCard
                  icon={<CheckCircle2 className="text-emerald-300" size={34} />}
                  label="Tareas realizadas"
                  value={`${selectedIsland.tasksDone}`}
                />

                <InfoCard
                  icon={<Trophy className="text-yellow-300" size={34} />}
                  label="Competencias participadas"
                  value={`${selectedIsland.competitions}`}
                />
              </div>

              <p className="mt-7 text-center text-sm font-bold text-cyan-100">
                Haz clic en la isla seleccionada para ver sus tareas.
              </p>
            </motion.div>
          </AnimatePresence>
        </aside>
      </section>

      <nav className="relative z-30 mx-auto mt-6 mb-4 flex w-[92%] items-center justify-around rounded-3xl border-2 border-[#34d6c3] bg-[#dfe7d3]/85 px-6 py-5 text-[#5d5348] shadow-2xl backdrop-blur-md">
        <Link
          href="/principal"
          className="flex items-center gap-2 font-black text-[#0db7a0]"
        >
          <Home size={24} />
          Inicio
        </Link>

      <Link href="/tienda" className="flex items-center gap-2 font-black opacity-80">
  <Store size={24} />
  Tienda
</Link>

        <button className="flex items-center gap-2 font-black opacity-80">
          <User size={24} />
          Perfil
        </button>

        <button className="flex items-center gap-2 font-black opacity-80">
          <Trophy size={24} />
          Ranking
        </button>
      </nav>
    </main>
  );
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-[#4e473c]/90 p-5 shadow-xl">
      <div className="flex items-center gap-4">
        {icon}
        <div>
          <p className="text-base font-black text-white/70">{label}</p>
          <p className="text-3xl font-black text-white">{value}</p>
        </div>
      </div>
    </div>
  );
}