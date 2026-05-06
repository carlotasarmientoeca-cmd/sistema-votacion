'use client';

export default function Votacion() {
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

            <div className="mt-6 flex min-h-60 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-center">
              <p className="text-sm text-slate-400">
                No hay opciones disponibles.
              </p>
            </div>
          </aside>

          {/* DETALLE */}
          <section className="rounded-[2rem] border border-white/10 bg-white p-8 text-slate-900 shadow-xl lg:col-span-2">
            
            <div className="flex flex-col justify-between min-h-72">
              <div className="flex flex-1 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-center">
                <p className="text-sm text-slate-400">
                  Selecciona una opción para continuar.
                </p>
              </div>

              <button
                disabled
                className="mt-6 w-full rounded-2xl py-4 font-bold text-white bg-slate-300 cursor-not-allowed"
              >
                Votar
              </button>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}