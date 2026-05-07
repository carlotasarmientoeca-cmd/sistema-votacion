"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLogin() {
  const router = useRouter();

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const ingresar = () => {
    router.push("/admin/dashboard");
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-[#0a1a2f] px-6 py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(15,36,64,0.3),transparent_60%)]" />

      <section className="relative w-full max-w-md rounded-[2rem] border border-white/10 bg-white p-8 shadow-2xl">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#162d50]">
          <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-extrabold text-[#0e1c2e]">
            Acceso institucional
          </h1>
          <p className="mt-2 text-sm text-[#5a6f84]">
            Accede al panel administrativo.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <div>
            <label htmlFor="usuario" className="text-sm font-medium text-[#0e1c2e]">
              Usuario
            </label>
            <input
              id="usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Usuario"
              className="mt-2 w-full rounded-xl border border-[#b3bfcc] px-4 py-3 text-[#0e1c2e] outline-none transition focus:border-[#162d50] focus:ring-2 focus:ring-[#162d50]"
            />
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium text-[#0e1c2e]">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              className="mt-2 w-full rounded-xl border border-[#b3bfcc] px-4 py-3 text-[#0e1c2e] outline-none transition focus:border-[#162d50] focus:ring-2 focus:ring-[#162d50]"
            />
          </div>
        </div>

        <button
          onClick={ingresar}
          className="mt-8 w-full rounded-xl bg-[#162d50] py-4 font-bold text-white uppercase tracking-widest shadow-lg shadow-[#162d50]/30 transition hover:-translate-y-0.5 hover:bg-[#0f2440] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#162d50]/40"
        >
          Ingresar al panel
        </button>
      </section>
    </main>
  );
}
