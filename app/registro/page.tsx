"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Registro() {
  const router = useRouter();
  const [cedula, setCedula] = useState("");
  const [activarVoz, setActivarVoz] = useState(false);

  const continuar = () => {
    router.push("/votacion");
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-[#001d3d] px-6 py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,53,102,0.3),transparent_60%)]" />

      <section className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white p-8 shadow-2xl">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#003566]/10">
          <svg className="h-7 w-7 text-[#003566]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>

        <h1 className="text-center text-2xl font-extrabold text-[#000814]">
          Acceso al proceso de votación
        </h1>

        <p className="mt-2 text-center text-sm text-[#5c677d]">
          Ingresa tu número de identificación para continuar.
        </p>

        <div className="mt-6">
          <label htmlFor="cedula" className="block text-sm font-medium text-[#000814]">
            Número de cédula
          </label>
          <input
            id="cedula"
            type="text"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
            placeholder="Número de identificación"
            className="mt-2 w-full rounded-xl border border-[#979dac] px-4 py-3 text-black outline-none transition focus:border-[#003566] focus:ring-2 focus:ring-[#003566]"
          />
        </div>

        <div className="mt-8">
          <button
            type="button"
            onClick={() => setActivarVoz(!activarVoz)}
            className={`flex w-full items-center justify-center gap-3 rounded-2xl border-2 p-4 font-bold transition-all ${
              activarVoz
                ? "border-green-500 bg-green-50 text-green-700 shadow-inner"
                : "border-[#979dac]/30 bg-gray-50 text-gray-500 hover:border-[#003566] hover:text-[#003566]"
            } focus:outline-none focus:ring-4 focus:ring-[#003566]/20`}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {activarVoz ? (
                <>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M12 18a2 2 0 01-2-2v-4a2 2 0 012-2 2 2 0 012 2v4a2 2 0 01-2 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v4l-1.5-1.5A2 2 0 0112 8V6z" />
                </>
              ) : (
                <>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </>
              )}
            </svg>
            {activarVoz ? "ASISTENCIA DE VOZ ACTIVADA" : "ACTIVAR ASISTENCIA DE VOZ"}
          </button>
        </div>

        <button
          onClick={continuar}
          className="mt-8 w-full rounded-xl bg-[#003566] py-4 font-bold text-white uppercase tracking-widest shadow-lg shadow-[#003566]/30 transition hover:-translate-y-0.5 hover:bg-[#001d3d] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#003566]/40"
        >
          Continuar
        </button>
      </section>
    </main>
  );
}
