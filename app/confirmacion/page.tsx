"use client";

import Link from "next/link";

export default function Confirmacion() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6 text-white">
      <section className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-white/10 p-8 text-center shadow-2xl backdrop-blur">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-500/20 text-5xl">
          ✓
        </div>

        <h1 className="mt-6 text-4xl font-extrabold">
          Voto registrado
        </h1>

        <p className="mt-4 text-slate-300">
          Tu voto ha sido enviado correctamente. En la versión final, esta
          confirmación será validada mediante backend y blockchain.
        </p>

        <div className="mt-8 rounded-3xl bg-slate-900 p-6 text-left">
          <h2 className="text-lg font-bold text-white">
            Comprobante visual
          </h2>

          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <p>
              <strong className="text-white">Estado:</strong> Confirmado
            </p>
            <p>
              <strong className="text-white">Proceso:</strong> Votación digital
            </p>
            <p>
              <strong className="text-white">Validación:</strong> Pendiente de integración
            </p>
          </div>
        </div>

        <Link
          href="/"
          className="mt-8 inline-block w-full rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          Finalizar
        </Link>
      </section>
    </main>
  );
}