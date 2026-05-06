'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
        <div>
          <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300">
            Plataforma de votación digital
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
            Tu voto seguro, transparente y confiable
          </h1>

          <div className="mt-10">
            <button
              onClick={() => router.push('/registro')}
              className="inline-flex rounded-2xl bg-blue-600 px-10 py-4 text-lg font-bold text-white shadow-xl shadow-blue-600/30 transition hover:-translate-y-1 hover:bg-blue-700 hover:shadow-2xl"
            >
              Votar ahora
            </button>

          <div className="mt-8">
            <button
              onClick={() => router.push('/admin/login')}
              className="text-sm text-slate-500 cursor-pointer hover:underline"
            >
              Acceso institucional
            </button>
          </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-blue-600/30 blur-3xl" />
          <div className="absolute -bottom-16 right-10 h-56 w-56 rounded-full bg-purple-600/30 blur-3xl" />

          <div className="relative h-[520px] w-full max-w-lg rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur">
            <div className="relative h-full overflow-hidden rounded-[1.6rem] bg-slate-900">
              {/* Teléfono */}
              <div className="absolute left-1/2 top-44 h-64 w-[420px] -translate-x-1/2 rotate-[-12deg] rounded-[2rem] bg-gradient-to-br from-sky-300 to-blue-700 shadow-2xl" />
              <div className="absolute left-1/2 top-[405px] h-10 w-[390px] -translate-x-1/2 rotate-[-12deg] rounded-full bg-black/30 blur-xl" />
              <div className="absolute left-[92px] top-[368px] h-7 w-28 rotate-[-12deg] rounded-full bg-slate-950/80" />
              <div className="absolute right-[80px] top-[230px] h-2 w-28 rotate-[-12deg] rounded-full bg-slate-950/80" />

              {/* Urna */}
              <div className="absolute left-1/2 top-44 h-48 w-48 -translate-x-1/2 rounded-b-3xl bg-red-600 shadow-2xl">
                <div className="absolute inset-x-0 bottom-0 h-28 rounded-b-3xl bg-red-700/70" />
                <div className="absolute -top-16 left-1/2 h-20 w-64 -translate-x-1/2 rounded-2xl bg-red-500 shadow-2xl">
                  <div className="absolute left-1/2 top-8 h-4 w-36 -translate-x-1/2 rounded-full bg-slate-950/80" />
                  <p className="absolute right-8 top-8 rotate-[-10deg] text-4xl font-extrabold tracking-wide text-white">
                    VOTE
                  </p>
                </div>
              </div>

              {/* Papeleta */}
              <div className="absolute left-1/2 z-20 h-44 w-28 -translate-x-1/2 top-12 -rotate-3 rounded-md border border-yellow-300 bg-yellow-100 opacity-100 shadow-2xl">
                <div className="p-3">
                  <div className="mb-2 h-2 w-16 rounded bg-slate-800" />
                  <div className="mb-2 h-2 w-20 rounded bg-slate-700" />
                  <div className="mb-3 h-2 w-12 rounded bg-slate-500" />

                  <div className="mb-2 flex items-center gap-2">
                    <div className="h-4 w-4 border border-slate-700" />
                    <div className="h-2 w-12 rounded bg-slate-600" />
                  </div>

                  <div className="mb-2 flex items-center gap-2">
                    <div className="flex h-4 w-4 items-center justify-center border border-slate-700 text-xs text-green-700">
                      ✓
                    </div>
                    <div className="h-2 w-12 rounded bg-slate-600" />
                  </div>

                  <div className="mb-2 flex items-center gap-2">
                    <div className="h-4 w-4 border border-slate-700" />
                    <div className="h-2 w-12 rounded bg-slate-600" />
                  </div>
                </div>
              </div>

              {/* Decoraciones */}
              <div className="absolute left-8 top-8 h-14 w-14 rounded-full bg-orange-500" />
              <div className="absolute bottom-10 right-10 h-10 w-10 rounded-full bg-blue-500" />
              <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.04),transparent)]" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}