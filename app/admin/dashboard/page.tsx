'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();
  const [tab, setTab] = useState<'partidos' | 'resultados'>('partidos');
  const [personas, setPersonas] = useState([0]);


  return (
    <main className="min-h-screen bg-[#eef2f6]">
      <aside className="fixed left-0 top-0 z-30 hidden h-full w-72 border-r border-[#162d50]/30 bg-[#0a1a2f] p-6 lg:block">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-white">
            VotaSecure
          </h1>
          <p className="mt-1 text-sm text-[#6f95cc]">Panel administrador</p>
        </div>

        <nav className="mt-10 space-y-1.5">
          <button
            onClick={() => setTab('partidos')}
            className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
              tab === 'partidos'
                ? 'bg-[#162d50] text-white shadow-sm shadow-black/20'
                : 'text-[#a3bde0] hover:bg-[#0f2440] hover:text-white'
            }`}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
            </svg>
            Partidos / Listas
          </button>

          <button
            onClick={() => setTab('resultados')}
            className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
              tab === 'resultados'
                ? 'bg-[#162d50] text-white shadow-sm shadow-black/20'
                : 'text-[#a3bde0] hover:bg-[#0f2440] hover:text-white'
            }`}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
            Resultados
          </button>
        </nav>

        <button
          onClick={() => router.push('/admin/login')}
          className="absolute bottom-6 left-6 right-6 flex items-center justify-center gap-2 rounded-xl bg-[#b53b43]/10 px-4 py-3 text-sm font-semibold text-[#d96c73] transition hover:bg-[#b53b43]/20 hover:text-[#e8848a]"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0118 3h-1.5A2.25 2.25 0 0014.25 5.25V9m0 0h4.5m0 0l-2.25 2.25M18.75 9l-2.25-2.25" />
          </svg>
          Salir
        </button>
      </aside>

      <section className="lg:ml-72">
        <header className="border-b border-[#d3dce6]/80 bg-white px-6 py-5 shadow-[0_1px_4px_rgba(22,45,80,0.04)]">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-[#162d50]">
                Administración
              </h2>
              <p className="mt-1 text-sm text-[#5a6f84]">
                Gestión del proceso electoral.
              </p>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-6 py-8">
          {tab === 'resultados' ? (
            <div className="flex min-h-[60vh] items-center justify-center rounded-2xl border border-[#d3dce6]/80 bg-white p-6 shadow-sm">
              <p className="text-lg text-[#5a6f84]">No hay resultados disponibles.</p>
            </div>
          ) : (
          <div className="grid gap-6 xl:grid-cols-5">
            <section className="rounded-2xl border border-[#d3dce6]/80 border-t-[3px] border-t-[#162d50] bg-white p-6 shadow-sm xl:col-span-3">
              <h3 className="text-xl font-bold tracking-tight text-[#162d50]">
                Registrar partido o lista
              </h3>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-[#344658]">
                    Nombre del partido / lista
                  </label>
                  <input
                    placeholder="Nombre del partido o lista"
                    className="mt-2 w-full rounded-xl border border-[#c0cad6] px-4 py-3 text-[#0e1c2e] outline-none transition focus:border-[#162d50] focus:ring-2 focus:ring-[#162d50]"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-[#344658]">
                    Logo
                  </label>

                  <label className="mt-2 flex cursor-pointer items-center justify-center rounded-2xl border-2 border-dashed border-[#c0cad6] bg-[#f2f5f9] px-4 py-6 text-sm font-medium text-[#5a6f84] transition hover:border-[#4a78b8] hover:bg-[#eaf0f8]/50">
                    <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                    Subir logo
                    <input type="file" accept="image/*" className="hidden" />
                  </label>
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-[#344658]">
                    Descripción
                  </label>
                  <textarea
                    placeholder="Descripción del partido o lista"
                    className="mt-2 h-28 w-full rounded-xl border border-[#c0cad6] px-4 py-3 text-[#0e1c2e] outline-none transition focus:border-[#162d50] focus:ring-2 focus:ring-[#162d50]"
                  />
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-[#162d50]">
                    Integrantes / candidatos
                  </h4>

                  <button
                    onClick={() => setPersonas([...personas, personas.length])}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-[#0a1a2f]/20 bg-[#0a1a2f] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0f2440]"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Añadir persona
                  </button>
                </div>

                <div className="mt-4 space-y-4">
                  {personas.map((i) => (
                  <div key={i} className="rounded-2xl border border-[#d3dce6] bg-[#f2f5f9] p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#5a6f84]">Integrante {i + 1}</span>
                      <button
                        onClick={() => setPersonas(personas.filter((p) => p !== i))}
                        className="rounded-lg bg-[#fceeef] px-2.5 py-1.5 text-xs font-semibold text-[#b53b43] transition hover:bg-[#f8d6d9]"
                      >
                        Eliminar
                      </button>
                    </div>
                    <div className="grid gap-3 md:grid-cols-3">
                      <input
                        placeholder="Nombre completo"
                        className="rounded-xl border border-[#c0cad6] px-4 py-3 text-[#0e1c2e] outline-none transition focus:border-[#162d50] focus:ring-2 focus:ring-[#162d50]"
                      />
                      <input
                        placeholder="Cédula"
                        className="rounded-xl border border-[#c0cad6] px-4 py-3 text-[#0e1c2e] outline-none transition focus:border-[#162d50] focus:ring-2 focus:ring-[#162d50]"
                      />
                      <input
                        placeholder="Función / cargo"
                        className="rounded-xl border border-[#c0cad6] px-4 py-3 text-[#0e1c2e] outline-none transition focus:border-[#162d50] focus:ring-2 focus:ring-[#162d50]"
                      />
                    </div>
                  </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {}}
                className="mt-6 w-full rounded-2xl bg-[#0a1a2f] py-4 font-semibold text-white shadow-lg shadow-[#0a1a2f]/20 transition hover:bg-[#0f2440]"
              >
                Guardar partido / lista
              </button>

              <div className="mt-8 rounded-2xl border border-[#d3dce6] bg-[#eaf0f8]/40 p-5 shadow-sm">
                <h4 className="text-sm font-semibold text-[#162d50]">
                  Configuración
                </h4>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-[#5a6f84]">
                    Permitir voto en blanco
                  </span>

                  <button className="relative inline-flex h-7 w-12 items-center rounded-full bg-[#b3bfcc]">
                    <span className="inline-block h-5 w-5 translate-x-1 rounded-full bg-white shadow transition" />
                  </button>
                </div>
              </div>
            </section>

            <aside className="rounded-2xl border border-[#d3dce6]/80 border-t-[3px] border-t-[#162d50] bg-white p-6 shadow-sm xl:col-span-2">
              <h3 className="text-lg font-bold tracking-tight text-[#162d50]">
                Partidos registrados
              </h3>

              <div className="mt-4 space-y-3">
                <div className="flex min-h-72 items-center justify-center rounded-2xl border border-dashed border-[#c0cad6] bg-[#f2f5f9] text-center">
                  <p className="text-sm text-[#7c8fa3]">
                    No hay partidos registrados.
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    disabled
                    className="rounded-lg bg-[#eaf0f8] px-3 py-1.5 text-xs font-semibold text-[#0a1a2f] opacity-50 cursor-not-allowed"
                  >
                    Editar
                  </button>
                  <button
                    disabled
                    className="rounded-lg bg-[#fceeef] px-3 py-1.5 text-xs font-semibold text-[#b53b43] opacity-50 cursor-not-allowed"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </aside>
          </div>
          )}
        </div>
      </section>
    </main>
  );
}
