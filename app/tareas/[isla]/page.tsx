"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  Coins,
  Scroll,
  Shield,
  Star,
  Swords,
  User,
} from "lucide-react";
import { useState } from "react";

const islandNames: Record<string, string> = {
  deportes: "Deportes",
  medicina: "Medicina",
  medica: "Medicina",
  ingenieria: "Ingeniería",
  sociales: "Sociales",
};

export default function TareasPage() {
  const params = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"misiones" | "tareas">("misiones");

  const islaSlug = String(params.isla || "isla");
  const islandName = islandNames[islaSlug] || islaSlug;

  return (
    <main className="relative h-screen w-full overflow-hidden bg-black text-white">
      <Image
        src="/ftarea-bg.png"
        alt="Fondo tareas"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/25" />

      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
        transition={{
          opacity: { duration: 0.5 },
          scale: { duration: 0.5 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute left-1/2 top-[45%] z-10 h-[128vh] w-[128vw] -translate-x-1/2 -translate-y-1/2"
      >
        <Image
          src="/tlibro-bg.png"
          alt="Libro de tareas"
          fill
          priority
          className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.65)]"
        />
      </motion.div>

      {/* PÁGINA IZQUIERDA - se mueve independiente */}
      <section className="pointer-events-auto absolute left-[38.5%] top-[40%] z-20 w-[330px] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex w-full flex-col items-center"
        >
          <div className="mb-5 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-[4px] border-[#8b5a2b] bg-[#f2e6d0]/90 shadow-xl">
            <User size={58} className="text-[#8b5a2b] opacity-35" />
          </div>

          <div className="mb-7 h-6 w-44 rounded-full bg-[#3d2b1f]/20 shadow-inner" />

          <div className="mb-9 flex items-center gap-4 rounded-2xl border-2 border-[#8b5a2b]/30 bg-[#f2e6d0]/45 px-6 py-3 shadow-lg backdrop-blur-sm">
            <img src="/token.png" alt="Token" className="h-11 w-11 object-contain" />
            <span className="font-serif text-3xl font-black text-[#3d2b1f]">0</span>
          </div>

          <div className="w-full space-y-4 px-3">
            {["NIVEL", "EXP", "ENERGÍA"].map((label) => (
              <div key={label} className="w-full">
                <div className="mb-1.5 flex justify-between px-1 text-[11px] font-black tracking-widest text-[#3d2b1f]">
                  <span>{label}</span>
                  <span>0%</span>
                </div>

                <div className="flex items-center gap-2">
                  <Star size={14} className="fill-[#8b5a2b]/20 text-[#8b5a2b]" />
                  <div className="h-3 flex-1 overflow-hidden rounded-full border border-[#3d2b1f]/15 bg-[#3d2b1f]/10">
                    <div className="h-full w-0 bg-[#8b5a2b]/50" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* PÁGINA DERECHA - se mueve independiente */}
      <section className="pointer-events-auto absolute left-[63.5%] top-[44%] z-20 w-[380px] -translate-x-1/2 -translate-y-1/2">
        <div className="flex h-[520px] w-full flex-col pt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="flex h-full w-full flex-col"
            >
              <h3 className="mb-7 flex items-center justify-center gap-3 border-b-2 border-[#8b5a2b]/40 pb-3 text-center font-serif text-2xl font-black uppercase tracking-[0.2em] text-[#3d2b1f]">
                {activeTab === "misiones" ? <Swords size={24} /> : <Scroll size={24} />}
                {activeTab === "misiones" ? "Misiones" : "Tareas"}
              </h3>

              <div className="custom-scroll max-h-[420px] flex-1 space-y-5 overflow-y-auto pr-2">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex flex-col gap-3 rounded-2xl border-2 border-[#8b5a2b]/20 bg-[#f2e6d0]/30 p-4 shadow-md transition-colors hover:bg-[#f2e6d0]/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#8b5a2b]/10 bg-[#8b5a2b]/15">
                        <Shield size={20} className="text-[#8b5a2b] opacity-40" />
                      </div>

                      <div className="flex-1 space-y-2">
                        <div className="h-3.5 w-3/4 rounded bg-[#3d2b1f]/20" />
                        <div className="h-2.5 w-1/2 rounded bg-[#3d2b1f]/10" />
                      </div>
                    </div>

                    <div className="flex items-center justify-end gap-5 border-t border-[#8b5a2b]/10 pt-3">
                      <div className="flex items-center gap-1.5">
                        <Coins size={16} className="text-yellow-800" />
                        <span className="text-xs font-black text-[#3d2b1f]">+0</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <img src="/token.png" alt="Token" className="h-20 w-15 object-contain opacity-80" />
                        <span className="text-xs font-black text-[#3d2b1f]">+0</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Título isla */}
      <div className="absolute bottom-[3%] left-1/2 z-30 -translate-x-1/2 text-center">
        <div className="rounded-3xl border border-cyan-300/30 bg-black/30 px-10 py-4 shadow-[0_0_40px_rgba(34,211,238,0.25)] backdrop-blur-md">
          <p className="mb-1 text-xs font-black uppercase tracking-[0.7em] text-cyan-300">
            Isla
          </p>

          <h1 className="bg-gradient-to-b from-white via-cyan-100 to-cyan-300 bg-clip-text text-5xl font-black uppercase tracking-[0.18em] text-transparent drop-shadow-[0_0_25px_rgba(103,232,249,0.7)]">
            {islandName}
          </h1>
        </div>
      </div>

      {/* Botones laterales */}
      <footer className="fixed left-[6%] top-1/2 z-50 flex -translate-y-1/2 flex-col items-center gap-5">
        <button
          onClick={() => setActiveTab("misiones")}
          className={`rounded-2xl border-2 p-5 shadow-2xl backdrop-blur-md transition-all duration-300 ${
            activeTab === "misiones"
              ? "scale-110 border-white bg-[#d4af37] text-black"
              : "border-[#d4af37] bg-[#1a120c]/90 text-[#d4af37]"
          }`}
        >
          <Swords size={30} />
        </button>

        <button
          onClick={() => setActiveTab("tareas")}
          className={`rounded-2xl border-2 p-5 shadow-2xl backdrop-blur-md transition-all duration-300 ${
            activeTab === "tareas"
              ? "scale-110 border-white bg-[#d4af37] text-black"
              : "border-[#d4af37] bg-[#1a120c]/90 text-[#d4af37]"
          }`}
        >
          <Scroll size={30} />
        </button>

        <button
          onClick={() => router.back()}
          className="rounded-full border-2 border-[#8b5a2b] bg-[#2d1f16]/95 p-5 text-[#d4af37] shadow-2xl backdrop-blur-md transition hover:scale-105 active:scale-95"
        >
          <ChevronLeft size={30} />
        </button>
      </footer>
    </main>
  );
}