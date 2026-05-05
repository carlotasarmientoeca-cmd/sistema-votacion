"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Partido = {
  id: number;
  nombre: string;
};

export default function Votacion() {
  const router = useRouter();

  // ⚠️ Vacío (backend lo llenará después)
  const partidos: Partido[] = [];

  const [partidoSeleccionado, setPartidoSeleccionado] =
    useState<Partido | null>(null);

  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      
      {/* HEADER */}
      <header className="border-b border-white/10 bg-slate-950/80 px-6 py-5 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold">VotaSecure</h1>
            <p className="text-sm text-slate-400">Papeleta digital</p>
          </div>

          <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
            Proceso activo
          </span>
        </div>
      </header>

      {/* CONTENIDO */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        
        <div className="mb-8 rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
          <p className="text-sm font-medium text-blue-300">
            Selección de voto
          </p>

          <h2 className="mt-2 text-3xl font-extrabold">
            Elige una opción
          </h2>

          <p className="mt-2 text-slate-300">
            Selecciona una lista o partido para continuar.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          
          {/* LISTA */}
          <aside className="rounded-[2rem] border border-white/10 bg-white p-6 text-slate-900 shadow-xl">
            <h3 className="text-xl font-bold">Opciones</h3>

            {partidos.length === 0 ? (
              <div className="mt-6 flex min-h-60 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-center">
                <p className="text-sm text-slate-400">
                  No hay opciones disponibles.
                </p>
              </div>
            ) : (
              <div className="mt-6 space-y-3">
                {partidos.map((partido) => (
                  <button
                    key={partido.id}
                    onClick={() => setPartidoSeleccionado(partido)}
                    className={`w-full rounded-2xl border p-4 text-left transition ${
                      partidoSeleccionado?.id === partido.id
                        ? "border-blue-500 bg-blue-50 shadow-md"
                        : "border-slate-200 bg-slate-50 hover:shadow-sm"
                    }`}
                  >
                    <h4 className="font-bold text-slate-900">
                      {partido.nombre}
                    </h4>
                  </button>
                ))}
              </div>
            )}
          </aside>

          {/* DETALLE */}
          <section className="rounded-[2rem] border border-white/10 bg-white p-8 text-slate-900 shadow-xl lg:col-span-2">
            
            <div className="flex flex-col justify-between min-h-72">

              {!partidoSeleccionado ? (
                <div className="flex flex-1 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-center">
                  <p className="text-sm text-slate-400">
                    Selecciona una opción para continuar.
                  </p>
                </div>
              ) : (
                <div>
                  <h2 className="text-3xl font-extrabold">
                    {partidoSeleccionado.nombre}
                  </h2>
                </div>
              )}

              <button
                onClick={() => setMostrarConfirmacion(true)}
                disabled={!partidoSeleccionado}
                className={`mt-6 w-full rounded-2xl py-4 font-bold text-white transition ${
                  partidoSeleccionado
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-slate-300 cursor-not-allowed"
                }`}
              >
                Votar
              </button>
            </div>
          </section>
        </div>
      </section>

      {/* MODAL CONFIRMACIÓN */}
      {mostrarConfirmacion && partidoSeleccionado && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[2rem] bg-white p-7 text-slate-900 shadow-2xl">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl text-green-700">
              ✓
            </div>

            <h3 className="mt-5 text-center text-2xl font-extrabold">
              Confirmar selección
            </h3>

            <p className="mt-4 text-center text-slate-600">
              ¿Deseas continuar con esta selección?
            </p>

            <div className="mt-7 flex gap-3">
              <button
                onClick={() => setMostrarConfirmacion(false)}
                className="flex-1 rounded-xl border border-slate-300 py-3 font-semibold text-slate-700 hover:bg-slate-100"
              >
                Cancelar
              </button>

              <button
                onClick={() => router.push("/confirmacion")}
                className="flex-1 rounded-xl bg-green-600 py-3 font-bold text-white hover:bg-green-700"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}