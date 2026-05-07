"use client";

import { useRouter } from "next/navigation";

export default function Confirmacion() {
  const router = useRouter();

  const volverAlInicio = () => {
    router.push("/");
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-[#0a1a2f] px-6 py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(15,36,64,0.3),transparent_60%)]" />

      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white p-8 text-center shadow-2xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e6f4ed]">
          <svg className="h-8 w-8 text-[#1e7a50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="mt-6 text-2xl font-extrabold text-[#0e1c2e]">Proceso completado</h1>
        <p className="mt-3 text-sm text-[#5a6f84]">Tu selección ha sido registrada con éxito.</p>

        <button
          onClick={volverAlInicio}
          className="mt-8 w-full rounded-xl bg-[#162d50] py-4 font-bold text-white uppercase tracking-widest shadow-lg shadow-[#162d50]/30 transition hover:-translate-y-0.5 hover:bg-[#0f2440] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#162d50]/40"
        >
          Volver al inicio
        </button>
      </div>
    </main>
  );
}
