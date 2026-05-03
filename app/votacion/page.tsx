"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Candidato = {
  id: number;
  nombre: string;
  cargo: string;
  cedula: string;
};

type Partido = {
  id: number;
  nombre: string;
  siglas: string;
  descripcion: string;
  color: string;
  logo?: string;
  candidatos: Candidato[];
};

export default function Votacion() {
  const router = useRouter();

  const [partidos, setPartidos] = useState<Partido[]>([]);
  const [partidoSeleccionado, setPartidoSeleccionado] =
    useState<Partido | null>(null);
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const [permitirBlanco, setPermitirBlanco] = useState(false);

  useEffect(() => {
    const modo = localStorage.getItem("modoSistema") || "empresarial";

    const key =
      modo === "empresarial"
        ? "partidos_empresarial"
        : "partidos_territorial";

    const data = localStorage.getItem(key);

    if (data) {
      const partidosAdmin = JSON.parse(data);

      const adaptados: Partido[] = partidosAdmin.map((p: any) => ({
        id: p.id,
        nombre: p.nombre,
        siglas: p.nombre.substring(0, 2).toUpperCase(),
        descripcion: p.descripcion || "Sin descripción.",
        color: "bg-blue-600",
        logo: p.logo,
        candidatos: (p.integrantes || []).map((i: any, index: number) => ({
          id: index + 1,
          nombre: i.nombre,
          cargo: i.funcion || "Candidato",
          cedula: i.cedula || "",
        })),
      }));

      setPartidos(adaptados);
      setPartidoSeleccionado(adaptados[0] || null);
    } else {
      setPartidos([]);
      setPartidoSeleccionado(null);
    }
  }, []);

  useEffect(() => {
    const modo = localStorage.getItem("modoSistema") || "empresarial";

    const key =
      modo === "empresarial" ? "config_empresarial" : "config_territorial";

    const data = localStorage.getItem(key);

    if (data) {
      const config = JSON.parse(data);
      setPermitirBlanco(config.permitirBlanco || false);
    } else {
      setPermitirBlanco(false);
    }
  }, []);

  const confirmarVoto = () => {
    const cedula = localStorage.getItem("cedulaVotante");

    if (!cedula) {
      alert("No se encontró la cédula.");
      return;
    }

    const yaVoto = localStorage.getItem(`yaVoto_${cedula}`);

    if (yaVoto) {
      alert("Ya has votado anteriormente.");
      return;
    }

    if (!partidoSeleccionado) {
      alert("Selecciona una opción.");
      return;
    }

    const modo = localStorage.getItem("modoSistema") || "empresarial";

    const votosKey =
      modo === "empresarial" ? "votos_empresarial" : "votos_territorial";

    const votos = JSON.parse(localStorage.getItem(votosKey) || "{}");

    votos[partidoSeleccionado.id] =
      (votos[partidoSeleccionado.id] || 0) + 1;

    localStorage.setItem(votosKey, JSON.stringify(votos));
    localStorage.setItem(`yaVoto_${cedula}`, "true");

    router.push("/confirmacion");
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/80 px-6 py-5 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold text-white">VotaSecure</h1>
            <p className="text-sm text-slate-400">Papeleta digital segura</p>
          </div>

          <span className="rounded-full border border-green-400/30 bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-300">
            Votante verificado
          </span>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
          <p className="text-sm font-medium text-blue-300">
            Paso 2 de 3 · Selección de voto
          </p>
          <h2 className="mt-2 text-3xl font-extrabold">
            Elige la lista o partido de tu preferencia
          </h2>
          <p className="mt-2 text-slate-300">
            Revisa la información registrada antes de confirmar tu voto.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <aside className="rounded-[2rem] border border-white/10 bg-white p-6 text-slate-900 shadow-xl lg:col-span-1">
            <h3 className="text-xl font-bold">Partidos / Listas</h3>
            <p className="mt-1 text-sm text-slate-500">
              Selecciona una opción para ver sus integrantes.
            </p>

            <div className="mt-6 space-y-3">
              {partidos.map((partido) => (
                <button
                  key={partido.id}
                  onClick={() => setPartidoSeleccionado(partido)}
                  className={`w-full rounded-2xl border p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md ${
                    partidoSeleccionado?.id === partido.id
                      ? "border-blue-500 bg-blue-50 shadow-md"
                      : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {partido.logo ? (
                      <img
                        src={partido.logo}
                        alt={`Logo de ${partido.nombre}`}
                        className="h-14 w-14 rounded-xl border border-slate-200 bg-white object-contain p-1"
                      />
                    ) : (
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-xl font-bold text-white ${partido.color}`}
                      >
                        {partido.siglas}
                      </div>
                    )}

                    <div>
                      <h4 className="font-bold text-slate-900">
                        {partido.nombre}
                      </h4>
                      <p className="text-sm text-slate-500">
                        {partido.candidatos.length} candidatos
                      </p>
                    </div>
                  </div>
                </button>
              ))}

              {permitirBlanco && (
                <button
                  onClick={() =>
                    setPartidoSeleccionado({
                      id: 0,
                      nombre: "Voto en blanco",
                      siglas: "VB",
                      descripcion:
                        "Has elegido no seleccionar ningún partido.",
                      color: "bg-slate-500",
                      candidatos: [],
                    })
                  }
                  className={`w-full rounded-2xl border p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md ${
                    partidoSeleccionado?.id === 0
                      ? "border-slate-500 bg-slate-100 shadow-md"
                      : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-500 font-bold text-white">
                      VB
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900">
                        Voto en blanco
                      </h4>
                      <p className="text-sm text-slate-500">
                        No seleccionar ningún partido
                      </p>
                    </div>
                  </div>
                </button>
              )}
            </div>
          </aside>

          <section className="rounded-[2rem] border border-white/10 bg-white p-8 text-slate-900 shadow-xl lg:col-span-2">
            {partidoSeleccionado ? (
              <>
                <div className="flex flex-col gap-5 border-b border-slate-200 pb-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                      Selección actual
                    </span>

                    <h2 className="mt-3 text-4xl font-extrabold text-slate-900">
                      {partidoSeleccionado.nombre}
                    </h2>

                    <p className="mt-2 max-w-xl text-slate-500">
                      {partidoSeleccionado.descripcion}
                    </p>
                  </div>

                  {partidoSeleccionado.logo ? (
                    <img
                      src={partidoSeleccionado.logo}
                      alt={`Logo de ${partidoSeleccionado.nombre}`}
                      className="h-24 w-24 rounded-2xl border border-slate-200 bg-white object-contain p-2 shadow-sm"
                    />
                  ) : (
                    <div
                      className={`flex h-24 w-24 items-center justify-center rounded-2xl text-2xl font-bold text-white shadow-md ${partidoSeleccionado.color}`}
                    >
                      {partidoSeleccionado.siglas}
                    </div>
                  )}
                </div>

                {partidoSeleccionado.id !== 0 && (
                  <div className="mt-7">
                    <h3 className="text-lg font-bold text-slate-900">
                      Candidatos registrados
                    </h3>

                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      {partidoSeleccionado.candidatos.map((candidato) => (
                        <div
                          key={candidato.id}
                          className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                        >
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white font-bold text-blue-700 shadow-sm">
                            {candidato.nombre.charAt(0)}
                          </div>

                          <h4 className="mt-4 font-bold text-slate-900">
                            {candidato.nombre}
                          </h4>

                          <p className="text-sm text-slate-500">
                            {candidato.cargo}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-8 rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">
                    Una vez confirmado, el voto no podrá modificarse.
                  </p>
                </div>

                <button
                  onClick={() => setMostrarConfirmacion(true)}
                  className="mt-6 w-full rounded-2xl bg-green-600 py-4 font-bold text-white shadow-lg shadow-green-600/20 transition hover:-translate-y-0.5 hover:bg-green-700"
                >
                  Votar por {partidoSeleccionado.nombre}
                </button>
              </>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
                <p className="font-semibold text-slate-700">
                  No hay opciones disponibles
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  El administrador aún no ha registrado partidos para este modo.
                </p>
              </div>
            )}
          </section>
        </div>
      </section>

      {mostrarConfirmacion && partidoSeleccionado && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[2rem] bg-white p-7 text-slate-900 shadow-2xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl text-green-700">
              ✓
            </div>

            <h3 className="mt-5 text-center text-2xl font-extrabold">
              Confirmar voto
            </h3>

            <p className="mt-4 text-center text-slate-600">
              ¿Confirmas tu voto por{" "}
              <span className="font-bold text-slate-900">
                {partidoSeleccionado.nombre}
              </span>
              ?
            </p>

            <p className="mt-2 text-center text-sm text-slate-400">
              Esta acción no se puede deshacer.
            </p>

            <div className="mt-7 flex gap-3">
              <button
                onClick={() => setMostrarConfirmacion(false)}
                className="flex-1 rounded-xl border border-slate-300 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Cancelar
              </button>

              <button
                onClick={confirmarVoto}
                className="flex-1 rounded-xl bg-green-600 py-3 font-bold text-white transition hover:bg-green-700"
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