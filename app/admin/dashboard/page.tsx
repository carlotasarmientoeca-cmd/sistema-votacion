'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Integrante {
  id: number;
  nombre: string;
  cedula: string;
  cargo: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [seccionActiva, setSeccionActiva] = useState<'partidos' | 'resultados'>('partidos');
  const [votoEnBlanco, setVotoEnBlanco] = useState(false);

  const [partidoActual, setPartidoActual] = useState<{ nombre: string; logo: string; descripcion: string; integrantes: Integrante[] }>({
    nombre: '',
    logo: '',
    descripcion: '',
    integrantes: [{ id: 1, nombre: '', cedula: '', cargo: '' }]
  });

  const agregarIntegrante = () => {
    setPartidoActual({
      ...partidoActual,
      integrantes: [
        ...partidoActual.integrantes,
        { id: Date.now(), nombre: '', cedula: '', cargo: '' }
      ]
    });
  };

  const eliminarIntegrante = (id: number) => {
    if (partidoActual.integrantes.length > 1) {
      setPartidoActual({
        ...partidoActual,
        integrantes: partidoActual.integrantes.filter(i => i.id !== id)
      });
    }
  };

  const actualizarIntegrante = (id: number, campo: keyof Integrante, valor: string) => {
    setPartidoActual({
      ...partidoActual,
      integrantes: partidoActual.integrantes.map(i =>
        i.id === id ? { ...i, [campo]: valor } : i
      )
    });
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <aside className="fixed left-0 top-0 z-30 hidden h-full w-72 border-r border-slate-200/80 bg-white p-6 lg:block">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-blue-900">
            VotaSecure
          </h1>
          <p className="mt-1 text-sm text-slate-500">Panel administrador</p>
        </div>

        <nav className="mt-10 space-y-1.5">
          <button
            onClick={() => setSeccionActiva('partidos')}
            className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
              seccionActiva === 'partidos'
                ? 'bg-blue-50 text-blue-700'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
            </svg>
            Partidos / Listas
          </button>

          <button
            onClick={() => setSeccionActiva('resultados')}
            className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
              seccionActiva === 'resultados'
                ? 'bg-blue-50 text-blue-700'
                : 'text-slate-600 hover:bg-slate-50'
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
          className="absolute bottom-6 left-6 right-6 flex items-center justify-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-100"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0118 3h-1.5A2.25 2.25 0 0014.25 5.25V9m0 0h4.5m0 0l-2.25 2.25M18.75 9l-2.25-2.25" />
          </svg>
          Salir
        </button>
      </aside>

      <section className="lg:ml-72">
        <header className="border-b border-slate-200/80 bg-white px-6 py-5">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
                Administración
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Gestión del proceso electoral.
              </p>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="mb-6 flex gap-2 overflow-x-auto rounded-xl pb-1 lg:hidden">
            <button
              onClick={() => setSeccionActiva('partidos')}
              className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                seccionActiva === 'partidos'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-slate-600 shadow-sm hover:bg-slate-50'
              }`}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
              </svg>
              Partidos / Listas
            </button>

            <button
              onClick={() => setSeccionActiva('resultados')}
              className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                seccionActiva === 'resultados'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-slate-600 shadow-sm hover:bg-slate-50'
              }`}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
              Resultados
            </button>
          </div>

          {seccionActiva === 'partidos' ? (
            <div className="grid gap-6 xl:grid-cols-5">
              <section className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm xl:col-span-3">
                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  Registrar partido o lista
                </h3>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="nombre-partido" className="text-sm font-medium text-slate-700">
                      Nombre del partido / lista
                    </label>
                    <input
                      id="nombre-partido"
                      value={partidoActual.nombre}
                      onChange={(e) => setPartidoActual({...partidoActual, nombre: e.target.value})}
                      placeholder="Nombre del partido o lista"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700">
                      Logo
                    </label>

                    <label className="mt-2 flex cursor-pointer items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-4 py-6 text-sm font-medium text-slate-500 transition hover:border-blue-400 hover:bg-blue-50/50">
                      <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                      </svg>
                      Subir logo
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                      />
                    </label>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="descripcion-partido" className="text-sm font-medium text-slate-700">
                      Descripción
                    </label>
                    <textarea
                      id="descripcion-partido"
                      value={partidoActual.descripcion}
                      onChange={(e) => setPartidoActual({...partidoActual, descripcion: e.target.value})}
                      placeholder="Descripción del partido o lista"
                      className="mt-2 h-28 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-slate-900">
                      Integrantes / candidatos
                    </h4>

                    <button
                      onClick={agregarIntegrante}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                      Añadir persona
                    </button>
                  </div>

                  <div className="mt-4 space-y-4">
                    {partidoActual.integrantes.map((integrante) => (
                      <div key={integrante.id} className="relative grid gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:grid-cols-3">
                        <input
                          value={integrante.nombre}
                          onChange={(e) => actualizarIntegrante(integrante.id, 'nombre', e.target.value)}
                          placeholder="Nombre completo"
                          className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        />

                        <input
                          value={integrante.cedula}
                          onChange={(e) => actualizarIntegrante(integrante.id, 'cedula', e.target.value)}
                          placeholder="Cédula"
                          className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        />

                        <div className="relative">
                          <input
                            value={integrante.cargo}
                            onChange={(e) => actualizarIntegrante(integrante.id, 'cargo', e.target.value)}
                            placeholder="Función / cargo"
                            className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-8 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                          />
                          {partidoActual.integrantes.length > 1 && (
                            <button
                              onClick={() => eliminarIntegrante(integrante.id)}
                              className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs text-white transition hover:bg-red-600"
                              aria-label="Eliminar integrante"
                            >
                              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  disabled
                  className="mt-6 w-full rounded-2xl bg-blue-600 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 opacity-50 cursor-not-allowed"
                >
                  Guardar partido / lista
                </button>

                <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h4 className="text-sm font-semibold text-slate-700">
                    Configuración
                  </h4>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      Permitir voto en blanco
                    </span>

                    <button
                      onClick={() => setVotoEnBlanco(!votoEnBlanco)}
                      className={`relative inline-flex h-7 w-12 items-center rounded-full transition ${
                        votoEnBlanco
                          ? 'bg-green-500'
                          : 'bg-slate-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-5 w-5 rounded-full bg-white shadow transition ${
                          votoEnBlanco ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </section>

              <aside className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm xl:col-span-2">
                <h3 className="text-lg font-bold tracking-tight text-slate-900">
                  Partidos registrados
                </h3>

                <div className="mt-4 space-y-3">
                  <div className="flex min-h-72 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-center">
                    <p className="text-sm text-slate-400">
                      No hay partidos registrados.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      disabled
                      className="rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 opacity-50 cursor-not-allowed"
                    >
                      Editar
                    </button>
                    <button
                      disabled
                      className="rounded-lg bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600 opacity-50 cursor-not-allowed"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          ) : (
            <section className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold tracking-tight text-slate-900">Resultados</h3>
              <p className="mt-4 text-sm text-slate-500">No hay resultados disponibles aún.</p>
            </section>
          )}
        </div>
      </section>
    </main>
  );
}
