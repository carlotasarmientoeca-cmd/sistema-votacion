"use client";

import { useRouter } from "next/navigation";

export default function Confirmacion() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 px-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl">
        
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600">
          ✓
        </div>

        <h1 className="mt-6 text-2xl font-bold text-slate-900">
          Voto registrado
        </h1>

        <p className="mt-3 text-slate-500">
          Tu selección ha sido procesada correctamente.
        </p>

        

        <button
          onClick={() => router.push("/")}
          className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Volver al inicio
        </button>

      </div>
    </main>
  );
}