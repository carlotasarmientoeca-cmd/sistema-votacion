"use client";

import { useRouter } from "next/navigation";

export default function Votacion() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col bg-[#000814]">
      <header className="border-b border-[#979dac]/20 bg-[#001d3d]/80 px-6 py-5 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-center">
          <h1 className="text-center text-2xl font-extrabold tracking-tight text-white">
            VotaSecure
          </h1>
        </div>
      </header>

      <div className="flex flex-1 items-center justify-center px-6 py-10">
        <div className="w-full max-w-7xl overflow-hidden rounded-[2rem] border border-[#979dac]/20 bg-white shadow-2xl">
          <div className="border-b border-[#979dac]/15 px-6 py-5 sm:px-8">
            <h2 className="text-center text-xl font-extrabold tracking-tight text-[#000814]">
              Papeleta Electoral
            </h2>
          </div>

          <div className="p-6 sm:p-8">
            <div
              className="grid gap-6"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              }}
              role="radiogroup"
              aria-label="Lista de partidos electorales"
            />
          </div>

          <div className="border-t border-[#979dac]/15 px-6 py-6 sm:px-8">
            <div className="mx-auto max-w-sm">
              <button
                onClick={() => router.push("/confirmacion")}
                className="w-full rounded-2xl bg-[#003566] py-5 text-xl font-bold text-white shadow-lg shadow-[#003566]/30 transition-all hover:-translate-y-0.5 hover:bg-[#001d3d] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#003566]/40"
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
