"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLogin() {
  const router = useRouter();

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const ingresar = () => {
    // Validación simple (luego backend lo manejará)
    if (!usuario.trim() || !password.trim()) {
      alert("Completa todos los campos");
      return;
    }

    // Simulación login correcto
    router.push("/admin/dashboard");
  };

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <section className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white p-8 shadow-2xl">
        
        {/* ICONO */}
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-3xl text-white">
            🛡️
          </div>

          <h1 className="mt-6 text-3xl font-extrabold text-slate-900">
            Acceso institucional
          </h1>

          <p className="mt-2 text-slate-500">
            Ingresa con tus credenciales para administrar el sistema de votación.
          </p>
        </div>

        {/* FORM */}
        <div className="mt-8 space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-700">
              Usuario
            </label>
            <input
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="admin"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
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
              placeholder="••••••••"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* BOTÓN */}
        <button
          onClick={ingresar}
          className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Ingresar al panel
        </button>

        {/* TEXTO */}
        <p className="mt-5 text-center text-xs text-slate-400">
          Acceso restringido. Integración real con backend próximamente.
        </p>
      </section>
    </main>
  );
}