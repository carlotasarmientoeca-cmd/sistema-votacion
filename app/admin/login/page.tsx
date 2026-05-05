"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLogin() {
  const router = useRouter();

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const ingresar = () => {
    if (!usuario.trim() || !password.trim()) {
      setError("Completa todos los campos.");
      return;
    }

    setError("");
    router.push("/admin/dashboard");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <section className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white p-8 shadow-2xl">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-3xl text-white">
            🛡️
          </div>

          <h1 className="mt-6 text-3xl font-extrabold text-slate-900">
            Acceso institucional
          </h1>

          <p className="mt-2 text-slate-500">
            Ingresa tus credenciales para acceder al panel administrativo.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-700">
              Usuario
            </label>
            <input
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Usuario"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {error && (
          <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
            {error}
          </div>
        )}

        <button
          onClick={ingresar}
          className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
        >
          Ingresar al panel
        </button>
      </section>
    </main>
  );
}