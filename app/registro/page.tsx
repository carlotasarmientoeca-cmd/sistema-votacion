"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Registro() {
  const router = useRouter();
  const [cedula, setCedula] = useState("");

  const continuar = () => {
    // Navegación visual (sin validación)
    router.push("/votacion");
  };

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <section className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        
        <h1 className="text-3xl font-bold text-slate-900">
          Acceso al proceso de votación
        </h1>

        <p className="mt-2 text-slate-500">
          Ingresa tu número de identificación para continuar.
        </p>

        <label className="mt-6 block text-sm font-medium text-slate-700">
          Número de cédula
        </label>

        <input
          type="text"
          value={cedula}
          onChange={(e) => setCedula(e.target.value)}
          placeholder="Número de identificación"
          className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={continuar}
          className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Continuar
        </button>

      </section>
    </main>
  );
}