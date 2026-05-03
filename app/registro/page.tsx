"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Registro() {
  const router = useRouter();
  const [cedula, setCedula] = useState("");
   const [error, setError] = useState("");
  const verificar = () => {
  if (!/^\d{10}$/.test(cedula)) {
    alert("La cédula debe tener exactamente 10 números.");
    return;
  }

  const yaVoto = localStorage.getItem(`yaVoto_${cedula}`);

  if (yaVoto) {
    setError("Esta cédula ya ha realizado su voto.");
    return;
  }

  localStorage.setItem("cedulaVotante", cedula);

  router.push("/votacion");
};



  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <section className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-slate-900">
          Verificación de identidad
        </h1>

        <p className="mt-2 text-slate-500">
          Ingresa tu número de identificación para continuar con el proceso de votación.
        </p>

        <label className="mt-6 block text-sm font-medium text-slate-700">
          Número de cédula
        </label>

        <input
          type="text"
          value={cedula}
         onChange={(e) => {
  setCedula(e.target.value.replace(/\D/g, ""));
  setError("");
}}
          maxLength={10}
          placeholder="Ej: 0912345678"
          className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
{error && (
  <div className="mt-4 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
    ⚠ {error}
  </div>
)}
        <button
          onClick={verificar}
          className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Verificar identidad
        </button>

        <p className="mt-4 text-xs text-slate-400 text-center">
          La validación facial será integrada por el sistema de backend.
        </p>
      </section>
    </main>
  );
}