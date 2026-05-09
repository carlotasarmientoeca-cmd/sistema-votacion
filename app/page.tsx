export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <section className="relative h-screen w-screen overflow-hidden bg-black">
        {/* Fondo */}
        <img
          src="/login4-bg.png"
          alt="Royal Academy"
          className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
        />

        {/* Oscurecer abajo */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />

        {/* Login */}
        <div className="absolute bottom-[10px] left-[53%] w-[460px] max-w-[82%] -translate-x-1/2 rounded-[28px] border-4 border-[#5de4d6] bg-[#b7ad9d]/90 p-5 shadow-[0_0_0_6px_rgba(36,58,63,0.8),0_25px_60px_rgba(0,0,0,0.7)]">
          <div className="space-y-4">
            {/* Usuario */}
            <div className="flex h-[62px] items-center rounded-2xl border-4 border-[#6b6258] bg-[#4d443c] p-1 shadow-inner">
              <div className="flex h-full w-[62px] items-center justify-center rounded-xl border-2 border-[#9b9185] bg-[#302a26] text-2xl">
                🦁
              </div>

              <input
                type="email"
                placeholder="Correo electrónico"
                className="h-full flex-1 bg-transparent px-5 text-xl font-bold text-white outline-none placeholder:text-white/70"
              />
            </div>

            {/* Password */}
            <div className="flex h-[62px] items-center rounded-2xl border-4 border-[#6b6258] bg-[#4d443c] p-1 shadow-inner">
              <div className="flex h-full w-[62px] items-center justify-center rounded-xl border-2 border-[#9b9185] bg-[#302a26] text-2xl">
                🔒
              </div>

              <input
                type="password"
                placeholder="Clave"
                className="h-full flex-1 bg-transparent px-5 text-xl font-bold text-white outline-none placeholder:text-white/70"
              />
            </div>

            {/* Botón */}
            <a
              href="/principal"
              className="mt-2 flex h-[68px] w-full items-center justify-center rounded-2xl border-4 border-[#6b4f2e] bg-gradient-to-b from-[#37e0c9] via-[#0ea98e] to-[#056f61] text-3xl font-black text-white shadow-[inset_0_4px_0_rgba(255,255,255,0.45),0_8px_0_#4a3520,0_15px_30px_rgba(0,0,0,0.55)] transition hover:scale-[1.03] active:translate-y-1"
            >
              INICIAR SESIÓN
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}