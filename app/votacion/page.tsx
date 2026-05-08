"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useVoiceAssistant } from "@/app/hooks/useVoiceAssistant";

export default function Votacion() {
  const router = useRouter();
  const [animating, setAnimating] = useState(false);
  const { activo, leerPagina } = useVoiceAssistant();

  useEffect(() => {
    if (!activo) return;
    const timer = setTimeout(() => leerPagina("votación"), 600);
    return () => clearTimeout(timer);
  }, [activo, leerPagina]);

  const handleClick = () => {
    setAnimating(true);
    setTimeout(() => router.push("/confirmacion"), 250);
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#060d1a]">
      <header className="border-b border-[#7c8fa3]/20 bg-[#0a1a2f]/80 px-6 py-5 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-center">
          <h1 className="text-center text-2xl font-extrabold tracking-tight text-white">
            VotaSecure
          </h1>
        </div>
      </header>

      <div className="flex flex-1 items-center justify-center px-6 py-10">
        <div className="w-full max-w-7xl overflow-hidden rounded-[2rem] border border-[#d3dce6]/20 bg-white shadow-2xl">
          <div className="border-b border-[#d3dce6]/15 px-6 py-5 sm:px-8">
            <h2 className="text-center text-xl font-extrabold tracking-tight text-[#0e1c2e]">
              Papeleta Electoral
            </h2>
          </div>

          <div className="p-6 sm:p-8">
            <div
              className="grid min-h-[260px] gap-6 rounded-xl border-2 border-dashed border-[#d3dce6]/40 bg-[#fafcfe] p-8 sm:min-h-[300px]"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              }}
              role="radiogroup"
              aria-label="Lista de partidos electorales"
            >
              <div className="col-span-full flex flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#eaf0f8]">
                  <svg className="h-7 w-7 text-[#7c8fa3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                </div>
                <p className="text-base font-semibold text-[#5a6f84]">
                  Paquetes electorales
                </p>
                <p className="mt-1 text-sm text-[#7c8fa3]">
                  Los partidos y candidatos se cargarán automáticamente desde el sistema.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#d3dce6]/15 px-6 py-6 sm:px-8">
            <div className="mx-auto max-w-sm">
              <button
                onClick={handleClick}
                className={`w-full rounded-2xl bg-[#162d50] py-5 text-xl font-bold text-white shadow-lg shadow-[#162d50]/30 transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#0f2440] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#162d50]/40 active:scale-[0.97] active:translate-y-0.5 ${animating ? "scale-[0.96] translate-y-1 shadow-md" : ""}`}
              >
                Votar
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
