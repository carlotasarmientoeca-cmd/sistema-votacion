"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type ModoSistema = "empresarial" | "territorial";
type Seccion = "resumen" | "partidos" | "resultados";

type Integrante = {
  nombre: string;
  cedula: string;
  funcion: string;
};

type Partido = {
  id: number;
  nombre: string;
  logo: string;
  descripcion: string;
  integrantes: Integrante[];
};

export default function AdminDashboard() {
  const router = useRouter();

 const [modo, setModo] = useState<ModoSistema>(() => {
  if (typeof window !== "undefined") {
    const modoGuardado = localStorage.getItem("modoSistema");

    if (modoGuardado === "empresarial" || modoGuardado === "territorial") {
      return modoGuardado;
    }
  }

  return "empresarial";
});
  const [seccion, setSeccion] = useState<Seccion>("resumen");
const partidosKey =
  modo === "empresarial"
    ? "partidos_empresarial"
    : "partidos_territorial";
    const votosKey =
  modo === "empresarial"
    ? "votos_empresarial"
    : "votos_territorial";

    const configKey =
  modo === "empresarial"
    ? "config_empresarial"
    : "config_territorial";

  const [partidos, setPartidos] = useState<Partido[]>([]);
  const [permitirBlanco, setPermitirBlanco] = useState(false);
  const [votos, setVotos] = useState<{ [key: number]: number }>({});
  const [nombrePartido, setNombrePartido] = useState("");
  const [logo, setLogo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [integrantes, setIntegrantes] = useState<Integrante[]>([
    { nombre: "", cedula: "", funcion: "" },
  ]);

  useEffect(() => {
  const data = localStorage.getItem(partidosKey);

  if (data) {
    setPartidos(JSON.parse(data));
  } else {
    setPartidos([]);
  }
}, [partidosKey]);
useEffect(() => {
  const data = localStorage.getItem(votosKey);

  if (data) {
    setVotos(JSON.parse(data));
  } else {
    setVotos({});
  }
}, [votosKey]);
useEffect(() => {
  const data = localStorage.getItem(configKey);

  if (data) {
    const config = JSON.parse(data);
    setPermitirBlanco(config.permitirBlanco ?? false);
  } else {
    setPermitirBlanco(false);
  }
}, [configKey, modo]);


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

  const guardarPartido = () => {
    if (!nombrePartido.trim()) {
      alert("Ingresa el nombre del partido o lista.");
      return;
    }

    const integrantesValidos = integrantes.filter(
      (i) => i.nombre.trim() && i.cedula.trim() && i.funcion.trim()
    );

    const nuevoPartido: Partido = {
      id: Date.now(),
      nombre: nombrePartido,
      logo,
      descripcion,
      integrantes: integrantesValidos,
    };

    const partidosActualizados = [...partidos, nuevoPartido];

    setPartidos(partidosActualizados);
   localStorage.setItem(partidosKey, JSON.stringify(partidosActualizados));

    setNombrePartido("");
    setLogo("");
    setDescripcion("");
    setIntegrantes([{ nombre: "", cedula: "", funcion: "" }]);
  };

  const eliminarPartido = (id: number) => {
    const confirmar = confirm("¿Seguro que deseas eliminar este partido?");

    if (!confirmar) return;

    const partidosActualizados = partidos.filter(
      (partido) => partido.id !== id
    );

    setPartidos(partidosActualizados);
   localStorage.setItem(partidosKey, JSON.stringify(partidosActualizados));
  };

  const menu = [
    { id: "resumen", label: "Resumen", icon: "📊" },
    { id: "partidos", label: "Partidos / Listas", icon: "🗳️" },
    { id: "resultados", label: "Resultados", icon: "📈" },
  ] as { id: Seccion; label: string; icon: string }[];

  const totalVotos = Object.values(votos).reduce(
  (acc, val) => acc + val,
  0
);
const partidoGanador = partidos.reduce<Partido | null>((ganador, partido) => {
  const votosPartido = votos[partido.id] || 0;
  const votosGanador = ganador ? votos[ganador.id] || 0 : -1;

  return votosPartido > votosGanador ? partido : ganador;
}, null);

const votosGanador = partidoGanador ? votos[partidoGanador.id] || 0 : 0;

const porcentajeGanador =
  totalVotos > 0 ? (votosGanador / totalVotos) * 100 : 0;

  return (
    <main className="min-h-screen bg-slate-100">
      <aside className="fixed left-0 top-0 hidden h-full w-72 border-r border-slate-200 bg-white p-6 lg:block">
        <div>
          <h1 className="text-2xl font-extrabold text-blue-900">
            VotaSecure
          </h1>
          <p className="mt-1 text-sm text-slate-500">Panel administrador</p>
        </div>

        <div className="mt-8 rounded-3xl bg-slate-50 p-3">
          <button
            onClick={() => {
  setModo("empresarial");
  localStorage.setItem("modoSistema", "empresarial");
}}
            className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
              modo === "empresarial"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "text-slate-600 hover:bg-white hover:shadow-sm"
            }`}
          >
            🏢 Empresarial
          </button>

          <button
            onClick={() => {
  setModo("territorial");
  localStorage.setItem("modoSistema", "territorial");
}}
            className={`mt-2 w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
              modo === "territorial"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "text-slate-600 hover:bg-white hover:shadow-sm"
            }`}
          >
            🌎 Territorial
          </button>
        </div>

        <nav className="mt-8 space-y-2">
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
          <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Dashboard administrativo
              </h2>
              <p className="text-sm text-slate-500">
                Configura el proceso electoral y revisa la información visual.
              </p>
            </div>

            <div className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              Modo activo:{" "}
              {modo === "empresarial" ? "Empresarial" : "Territorial"}
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="mb-6 grid gap-3 lg:hidden">
            <div className="grid grid-cols-2 gap-3">
              <button
               onClick={() => {
  setModo("empresarial");
  localStorage.setItem("modoSistema", "empresarial");
}}
                className={`rounded-2xl px-4 py-3 font-semibold transition ${
                  modo === "empresarial"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "bg-white text-slate-600 hover:shadow-sm"
                }`}
              >
                Empresarial
              </button>

              <button
                onClick={() => setModo("territorial")}
                className={`rounded-2xl px-4 py-3 font-semibold transition ${
                  modo === "territorial"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "bg-white text-slate-600 hover:shadow-sm"
                }`}
              >
                Territorial
              </button>
            </div>

            <div className="flex gap-2 overflow-x-auto">
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
          </div>

          {seccion === "resumen" && (
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Resumen</h3>

              <div
                className={`mt-6 grid gap-5 ${
                  modo === "territorial" ? "md:grid-cols-2" : "md:grid-cols-2"
                }`}
              >
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-sm text-slate-500">Tipo de proceso</p>
                  <p className="mt-2 text-2xl font-extrabold text-blue-700">
                    {modo === "empresarial" ? "Empresarial" : "Territorial"}
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-sm text-slate-500">
                    Partidos / listas registradas
                  </p>
                  <p className="mt-2 text-2xl font-extrabold text-emerald-600">
                    {partidos.length}
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
                <h4 className="text-lg font-bold text-slate-900">
                  Partidos registrados
                </h4>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {partidos.length === 0 ? (
                    <p className="text-sm text-slate-400">
                      No hay partidos registrados aún.
                    </p>
                  ) : (
                    partidos.map((p) => (
                      <div
                        key={p.id}
                        className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:scale-[1.02] hover:shadow-md"
                      >
                        {p.logo ? (
                          <img
                            src={p.logo}
                            alt={`Logo de ${p.nombre}`}
                            className="mb-3 h-16 w-16 object-contain"
                          />
                        ) : (
                          <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
                            {p.nombre.substring(0, 2).toUpperCase()}
                          </div>
                        )}

                        <p className="text-center font-semibold text-slate-800">
                          {p.nombre}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}

          {seccion === "partidos" && (
            <div className="grid gap-6 xl:grid-cols-5">
              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg xl:col-span-3">
                <h3 className="text-2xl font-bold text-slate-900">
                  Registrar partido o lista
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Aquí el administrador carga la información que luego usará el
                  backend.
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-slate-700">
                      Nombre del partido / lista
                    </label>
                    <input
                      value={nombrePartido}
                      onChange={(e) => setNombrePartido(e.target.value)}
                      placeholder="Ej: Movimiento Futuro"
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
                      placeholder="URL del logo o archivo luego"
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
                      placeholder="Describe la lista, campaña o partido político."
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
                            actualizarIntegrante(
                              index,
                              "nombre",
                              e.target.value
                            )
                          }
                          placeholder="Nombre completo"
                          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <input
                          value={integrante.cedula}
                          onChange={(e) =>
                            actualizarIntegrante(
                              index,
                              "cedula",
                              e.target.value
                            )
                          }
                          placeholder="Cédula"
                          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <input
                          value={integrante.funcion}
                          onChange={(e) =>
                            actualizarIntegrante(
                              index,
                              "funcion",
                              e.target.value
                            )
                          }
                          placeholder="Función / cargo"
                          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={guardarPartido}
                  className="mt-6 w-full rounded-2xl bg-blue-600 py-4 font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
                >
                  Guardar partido / lista
                </button>
<div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
  <h4 className="text-sm font-semibold text-slate-700">
    Configuración del proceso
  </h4>

  <div className="mt-4 flex items-center justify-between">
    <span className="text-sm text-slate-600">
      Permitir voto en blanco
    </span>

    <button
     onClick={() => {
  const nuevoValor = !permitirBlanco;

  setPermitirBlanco(nuevoValor);

  localStorage.setItem(
    configKey,
    JSON.stringify({ permitirBlanco: nuevoValor })
  );
}}
      className={`px-4 py-1 rounded-full text-sm font-semibold transition ${
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

                {partidos.length === 0 ? (
                  <p className="mt-4 text-sm text-slate-400">
                    Aún no hay partidos registrados.
                  </p>
                ) : (
                  <div className="mt-4 space-y-4">
                    {partidos.map((partido) => (
                      <div
                        key={partido.id}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                      >
                        <h4 className="font-bold text-slate-900">
                          {partido.nombre}
                        </h4>

                        <button
                          onClick={() => eliminarPartido(partido.id)}
                          className="mt-2 text-xs font-semibold text-red-500 transition hover:text-red-700 hover:underline"
                        >
                          Eliminar
                        </button>

                        <p className="mt-1 text-sm text-slate-500">
                          {partido.descripcion || "Sin descripción"}
                        </p>

                        <div className="mt-3">
                          <p className="text-xs font-bold uppercase text-slate-400">
                            Integrantes
                          </p>
                          {partido.integrantes.length === 0 ? (
                            <p className="mt-1 text-sm text-slate-400">
                              Sin integrantes completos.
                            </p>
                          ) : (
                            partido.integrantes.map((i, index) => (
                              <p
                                key={index}
                                className="mt-1 text-sm text-slate-600"
                              >
                                • {i.nombre} — {i.funcion}
                              </p>
                            ))
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </aside>
            </div>
          )}

          {seccion === "resultados" && (
            <div className="grid gap-6 xl:grid-cols-5">
              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg xl:col-span-3">
               
                <h3 className="text-2xl font-bold text-slate-900">
                  Resultados visuales
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Vista previa de resultados. Luego se conectará con datos
                  reales.
                </p>

               <div className="mt-8 space-y-6">
  {partidos.length === 0 ? (
    <p className="text-sm text-slate-400">
      Aún no hay partidos registrados.
    </p>
  ) : (
    
    (permitirBlanco
  ? [
      ...partidos,
      {
        id: 0,
        nombre: "Voto en blanco",
        logo: "",
        descripcion: "Votos emitidos sin seleccionar un partido.",
        integrantes: [],
      },
    ]
  : partidos
).map((partido, index) => {
      const votosPartido = votos[partido.id] || 0;

      const porcentaje =
        totalVotos > 0 ? (votosPartido / totalVotos) * 100 : 0;

      return (
        <div
  key={partido.id}
  className={`p-2 rounded-xl ${
    partidoGanador?.id === partido.id
      ? "bg-yellow-50 border border-yellow-300"
      : ""
  }`}
>
          <div className="mb-2 flex justify-between text-sm">
            <span className="font-semibold text-slate-700">
              {partido.nombre}
            </span>

            <span className="text-slate-500">
              {votosPartido} votos · {porcentaje.toFixed(1)}%
            </span>
          </div>

          <div className="h-5 overflow-hidden rounded-full bg-slate-100">
            <div
  className="h-full rounded-full bg-blue-600 transition-all duration-700 ease-out"
  style={{ width: `${porcentaje}%` }}
/>
          </div>
        </div>
      );
    })
  )}
</div>
              </section>

              <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg xl:col-span-2">
                <h3 className="text-xl font-bold text-slate-900">
                  Vista {modo === "empresarial" ? "empresarial" : "territorial"}
                </h3>

                {modo === "empresarial" ? (
  <div className="mt-6 rounded-3xl bg-gradient-to-br from-yellow-50 to-white p-6 text-center border border-yellow-200 shadow-md">

    <p className="text-sm font-semibold text-yellow-600">
      🏆 Ganador actual
    </p>

    <div className="mt-5 flex flex-col items-center">

      {partidoGanador?.logo ? (
        <img
          src={partidoGanador.logo}
          alt={partidoGanador.nombre}
          className="h-16 w-16 object-contain mb-3"
        />
      ) : (
        <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 text-white font-bold text-xl">
          {partidoGanador
            ? partidoGanador.nombre.substring(0, 2).toUpperCase()
            : "--"}
        </div>
      )}

      <h3 className="text-xl font-extrabold text-slate-900">
        {partidoGanador ? partidoGanador.nombre : "Sin datos"}
      </h3>

      <p className="mt-2 text-3xl font-extrabold text-yellow-600">
        {porcentajeGanador.toFixed(1)}%
      </p>

      <p className="mt-1 text-sm text-slate-500">
        Mayor intención de voto
      </p>

    </div>
  </div>
                ) : (
                  <div className="mt-6 rounded-3xl bg-slate-50 p-5">
                    <p className="mt-2 text-sm text-slate-500">
                      El mapa mostrará el porcentaje de votos según la
                      provincia, ciudad o región seleccionada.
                    </p>

                    <div className="mt-6 flex h-72 items-center justify-center rounded-3xl border-2 border-dashed border-slate-300 bg-white text-center">
                      <div>
                        <p className="text-4xl">🗺️</p>
                        <p className="mt-3 font-bold text-slate-700">
                          Espacio para cargar mapa territorial
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          Aquí se cargará el mapa real de provincias, ciudades o
                          regiones.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </aside>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}