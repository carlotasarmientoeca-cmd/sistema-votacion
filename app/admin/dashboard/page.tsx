"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Seccion = "partidos" | "resultados";

type Integrante = {
  nombre: string;
  cedula: string;
  funcion: string;
};

export default function AdminDashboard() {
  const router = useRouter();

  const [seccion, setSeccion] = useState<Seccion>("partidos");
  const [permitirBlanco, setPermitirBlanco] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const [nombrePartido, setNombrePartido] = useState("");
  const [logo, setLogo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [integrantes, setIntegrantes] = useState<Integrante[]>([
    { nombre: "", cedula: "", funcion: "" },
  ]);

  const actualizarIntegrante = (
    index: number,
    campo: keyof Integrante,
    valor: string
  ) => {
    const nuevos = [...integrantes];
    nuevos[index][campo] = valor;
    setIntegrantes(nuevos);
  };

  const agregarIntegrante = () => {
    setIntegrantes([...integrantes, { nombre: "", cedula: "", funcion: "" }]);
  };

  const guardarVisual = () => {
    setNombrePartido("");
    setLogo("");
    setDescripcion("");
    setIntegrantes([{ nombre: "", cedula: "", funcion: "" }]);
    setMensaje("Formulario completado.");

    setTimeout(() => {
      setMensaje("");
    }, 2500);
  };

  const menu = [
    { id: "partidos", label: "Partidos / Listas", icon: "🗳️" },
    { id: "resultados", label: "Resultados", icon: "📈" },
  ] as { id: Seccion; label: string; icon: string }[];

  return (
    <main className="min-h-screen bg-slate-100">
      <aside className="fixed left-0 top-0 hidden h-full w-72 border-r border-slate-200 bg-white p-6 lg:block">
        <div>
          <h1 className="text-2xl font-extrabold text-blue-900">
            VotaSecure
          </h1>
          <p className="mt-1 text-sm text-slate-500">Panel administrador</p>
        </div>

        <nav className="mt-10 space-y-2">
          {menu.map((item) => (
            <button
              key={item.id}
              onClick={() => setSeccion(item.id)}
              className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left font-medium transition ${
                seccion === item.id
                  ? "bg-blue-50 text-blue-700 shadow-sm"
                  : "text-slate-600 hover:bg-slate-50 hover:shadow-sm"
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => router.push("/")}
          className="absolute bottom-6 left-6 right-6 rounded-2xl bg-red-50 px-4 py-3 font-semibold text-red-600 shadow-sm transition hover:-translate-y-0.5 hover:bg-red-100 hover:shadow-md"
        >
          Salir
        </button>
      </aside>

      <section className="lg:ml-72">
        <header className="border-b bg-white px-6 py-5">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Administración
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Gestión visual del proceso electoral.
              </p>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="mb-6 flex gap-2 overflow-x-auto lg:hidden">
            {menu.map((item) => (
              <button
                key={item.id}
                onClick={() => setSeccion(item.id)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                  seccion === item.id
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "bg-white text-slate-600 hover:shadow-sm"
                }`}
              >
                {item.icon} {item.label}
              </button>
            ))}
          </div>

          {seccion === "partidos" && (
            <div className="grid gap-6 xl:grid-cols-5">
              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg xl:col-span-3">
                <h3 className="text-2xl font-bold text-slate-900">
                  Registrar partido o lista
                </h3>

                {mensaje && (
                  <div className="mt-4 rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700">
                    {mensaje}
                  </div>
                )}

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-slate-700">
                      Nombre del partido / lista
                    </label>
                    <input
                      value={nombrePartido}
                      onChange={(e) => setNombrePartido(e.target.value)}
                      placeholder="Nombre del partido o lista"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-700">
                      Logo
                    </label>
                    <input
                      value={logo}
                      onChange={(e) => setLogo(e.target.value)}
                      placeholder="URL o archivo"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-sm font-medium text-slate-700">
                      Descripción
                    </label>
                    <textarea
                      value={descripcion}
                      onChange={(e) => setDescripcion(e.target.value)}
                      placeholder="Descripción del partido o lista"
                      className="mt-2 h-28 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-slate-900">
                      Integrantes / candidatos
                    </h4>

                    <button
                      onClick={agregarIntegrante}
                      className="rounded-xl bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100 hover:shadow-sm"
                    >
                      + Añadir persona
                    </button>
                  </div>

                  <div className="mt-4 space-y-4">
                    {integrantes.map((integrante, index) => (
                      <div
                        key={index}
                        className="grid gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:grid-cols-3"
                      >
                        <input
                          value={integrante.nombre}
                          onChange={(e) =>
                            actualizarIntegrante(index, "nombre", e.target.value)
                          }
                          placeholder="Nombre completo"
                          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <input
                          value={integrante.cedula}
                          onChange={(e) =>
                            actualizarIntegrante(index, "cedula", e.target.value)
                          }
                          placeholder="Cédula"
                          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <input
                          value={integrante.funcion}
                          onChange={(e) =>
                            actualizarIntegrante(index, "funcion", e.target.value)
                          }
                          placeholder="Función / cargo"
                          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={guardarVisual}
                  className="mt-6 w-full rounded-2xl bg-blue-600 py-4 font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
                >
                  Guardar partido / lista
                </button>

                <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h4 className="text-sm font-semibold text-slate-700">
                    Configuración visual
                  </h4>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      Permitir voto en blanco
                    </span>

                    <button
                      onClick={() => setPermitirBlanco(!permitirBlanco)}
                      className={`rounded-full px-4 py-1 text-sm font-semibold transition ${
                        permitirBlanco
                          ? "bg-green-100 text-green-700"
                          : "bg-slate-200 text-slate-600"
                      }`}
                    >
                      {permitirBlanco ? "Activado" : "Desactivado"}
                    </button>
                  </div>
                </div>
              </section>

              <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg xl:col-span-2">
                <h3 className="text-xl font-bold text-slate-900">
                  Partidos registrados
                </h3>

                <div className="mt-4 flex min-h-72 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-center">
                  <p className="text-sm text-slate-400">
                    No hay partidos registrados.
                  </p>
                </div>
              </aside>
            </div>
          )}

          {seccion === "resultados" && (
            <div className="grid gap-6 xl:grid-cols-5">
              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg xl:col-span-3">
                <h3 className="text-2xl font-bold text-slate-900">
                  Resultados
                </h3>

                <div className="mt-8 flex min-h-72 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-center">
                  <p className="text-sm text-slate-400">
                    No hay resultados disponibles.
                  </p>
                </div>
              </section>

              <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg xl:col-span-2">
                <h3 className="text-xl font-bold text-slate-900">
                  Vista general
                </h3>

                <div className="mt-6 flex h-72 items-center justify-center rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 text-center">
                  <div>
                    <p className="text-4xl">📊</p>
                    <p className="mt-3 font-bold text-slate-700">
                      Espacio para visualización de resultados
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Aquí se mostrarán gráficos, mapa o estadísticas.
                    </p>
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