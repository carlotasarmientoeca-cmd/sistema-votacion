"use client";

import Link from "next/link";
import {
  Menu,
  Coins,
  Gem,
  House,
  Store,
  UserCircle2,
  Trophy,
  Shield,
  Sparkles,
  Gift,
  Zap,
  Award,
  ChevronRight,
} from "lucide-react";

export default function PrincipalPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden lg:h-screen lg:overflow-hidden">
      {/* Fondo selva */}
      <img
        src="/principal2-bg.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        style={{ filter: "saturate(1.35) contrast(1.15) brightness(1.05)" }}
      />

      {/* Overlay suave — más claro en centro para dejar respirar colores */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/3 via-transparent to-black/6" />

      {/* Viñeta cinematográfica — oscurece bordes sin tocar el centro */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_45%,rgba(0,0,0,0.25)_100%)]" />

      {/* Glows cálidos centrales */}
      <div className="pointer-events-none absolute left-1/2 top-[35%] h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f4b83f]/20 blur-[160px] md:h-[750px] md:w-[750px] lg:h-[900px] lg:w-[900px]" />
      <div className="pointer-events-none absolute left-1/2 top-[38%] h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f4b83f]/25 blur-[140px] md:h-[650px] md:w-[650px] lg:h-[800px] lg:w-[800px]" />
      <div className="pointer-events-none absolute left-1/2 top-[45%] h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5d9e3f]/15 blur-[120px] md:h-[550px] md:w-[550px] lg:h-[650px] lg:w-[650px]" />
      <div className="pointer-events-none absolute left-1/2 top-[50%] h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#37e0c9]/15 blur-[110px] md:h-[450px] md:w-[450px] lg:h-[500px] lg:w-[500px]" />

      {/* Glow ambiental fantasy — respiración suave detrás de la isla */}
      <div className="pointer-events-none absolute left-1/2 top-[44%] h-[480px] w-[580px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#37e0c9]/12 via-[#5d9e3f]/8 to-[#37e0c9]/12 blur-[140px] animate-ambientGlow md:h-[620px] md:w-[720px] lg:h-[780px] lg:w-[880px]" />
      <div className="pointer-events-none absolute left-1/2 top-[48%] h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f4b83f]/8 blur-[100px] animate-softPulse md:h-[420px] md:w-[420px] lg:h-[520px] lg:w-[520px]" style={{ animationDelay: "2s" }} />

      {/* Islas decorativas */}
      <IslandSilhouette className="pointer-events-none absolute left-[6%] top-[15%] opacity-30 scale-75" />
      <IslandSilhouette className="pointer-events-none absolute right-[10%] top-[25%] opacity-25 scale-50" />
      <IslandSilhouette className="pointer-events-none absolute bottom-[20%] left-[8%] opacity-35 scale-90" />
      <IslandSilhouette className="pointer-events-none absolute bottom-[12%] right-[5%] opacity-25 scale-60" />

      {/* Luciérnagas / Partículas ambientales */}
      <div className="pointer-events-none absolute left-[20%] top-[25%] h-[3px] w-[3px] rounded-full bg-[#37e0c9] opacity-0 blur-[1.2px] animate-floatParticle" style={{ "--particle-dur": "9s" } as React.CSSProperties} />
      <div className="pointer-events-none absolute right-[22%] top-[20%] h-[2px] w-[2px] rounded-full bg-[#f4b83f] opacity-0 blur-[0.8px] animate-floatParticle" style={{ "--particle-dur": "11s", animationDelay: "1.5s" } as React.CSSProperties} />
      <div className="pointer-events-none absolute left-[35%] top-[55%] h-[4px] w-[4px] rounded-full bg-[#37e0c9] opacity-0 blur-[1.8px] animate-floatParticle" style={{ "--particle-dur": "10s", animationDelay: "3s" } as React.CSSProperties} />
      <div className="pointer-events-none absolute right-[28%] top-[60%] h-[2.5px] w-[2.5px] rounded-full bg-[#5d9e3f] opacity-0 blur-[1px] animate-floatParticle" style={{ "--particle-dur": "8.5s", animationDelay: "0.8s" } as React.CSSProperties} />
      <div className="pointer-events-none absolute left-[8%] top-[76%] h-[2px] w-[2px] rounded-full bg-[#f4b83f] opacity-0 blur-[0.6px] animate-floatParticle" style={{ "--particle-dur": "12s", animationDelay: "5s" } as React.CSSProperties} />
      <div className="pointer-events-none absolute right-[10%] top-[78%] h-[3px] w-[3px] rounded-full bg-[#37e0c9] opacity-0 blur-[1.2px] animate-floatParticle" style={{ "--particle-dur": "9.5s", animationDelay: "2.2s" } as React.CSSProperties} />
      <div className="pointer-events-none absolute left-[45%] top-[12%] h-[2px] w-[2px] rounded-full bg-white opacity-0 blur-[0.8px] animate-floatParticle" style={{ "--particle-dur": "10.5s", animationDelay: "4s" } as React.CSSProperties} />
      <div className="pointer-events-none absolute right-[35%] top-[88%] h-[2.5px] w-[2.5px] rounded-full bg-white opacity-0 blur-[0.6px] animate-floatParticle" style={{ "--particle-dur": "8s", animationDelay: "6s" } as React.CSSProperties} />

      {/* Hojas decorativas con deriva lenta */}
      <div className="pointer-events-none absolute left-[2%] top-[35%] h-[18px] w-[6px] rounded-full bg-gradient-to-b from-[#5d9e3f]/25 to-[#37e0c9]/15 blur-[1px] animate-slowDrift" style={{ "--drift-start": "15deg", "--drift-end": "25deg", "--drift-dur": "18s" } as React.CSSProperties} />
      <div className="pointer-events-none absolute right-[5%] top-[50%] h-[22px] w-[7px] rounded-full bg-gradient-to-b from-[#37e0c9]/20 to-[#5d9e3f]/10 blur-[1px] animate-slowDrift" style={{ "--drift-start": "-20deg", "--drift-end": "-10deg", "--drift-dur": "22s", animationDelay: "3s" } as React.CSSProperties} />
      <div className="pointer-events-none absolute left-[4%] bottom-[22%] h-[15px] w-[5px] rounded-full bg-gradient-to-b from-[#5d9e3f]/20 to-[#f4b83f]/8 blur-[1px] animate-slowDrift" style={{ "--drift-start": "30deg", "--drift-end": "40deg", "--drift-dur": "16s", animationDelay: "1s" } as React.CSSProperties} />

      {/* TOPBAR — absolute centrado */}
      <header className="absolute left-1/2 top-3 z-30 hidden w-[92%] max-w-[1600px] -translate-x-1/2 items-center justify-between rounded-[22px] border-2 border-[#5de4d6]/75 bg-[#fff7e6]/70 px-6 shadow-[0_2px_12px_rgba(0,0,0,0.06),0_8px_32px_rgba(0,0,0,0.12),0_24px_60px_rgba(0,0,0,0.05),0_0_40px_rgba(55,224,201,0.04)] backdrop-blur-lg lg:flex" style={{ height: "76px" }}>
        <div className="pointer-events-none absolute inset-0 rounded-[22px] bg-gradient-to-b from-white/20 via-white/5 to-transparent" />
        <div className="pointer-events-none absolute inset-0 rounded-[22px] bg-gradient-to-br from-[#37e0c9]/5 via-transparent to-transparent" />
        <div className="pointer-events-none absolute left-[12%] right-[12%] top-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        <div className="pointer-events-none absolute left-[25%] top-1 h-[2.5px] w-[5px] rounded-full bg-white/50 blur-[1px]" />
        <div className="pointer-events-none absolute right-[30%] top-1 h-[2.5px] w-[4px] rounded-full bg-[#37e0c9]/40 blur-[1px]" />
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-xl border-2 border-[#6b4f2e] bg-gradient-to-b from-[#37e0c9] to-[#0ea98e] shadow-[inset_0_2px_0_rgba(255,255,255,0.3),0_4px_8px_rgba(74,53,32,0.35),0_8px_16px_rgba(74,53,32,0.12)] transition-all duration-300 ease-out hover:scale-[1.06] hover:brightness-110 hover:shadow-[inset_0_2px_0_rgba(255,255,255,0.3),0_4px_8px_rgba(74,53,32,0.35),0_8px_16px_rgba(74,53,32,0.12),0_0_24px_rgba(55,224,201,0.35)]">
            <Shield className="text-white drop-shadow" size={20} />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <p className="text-xs font-black uppercase tracking-wider text-[#6b4f2e] drop-shadow">Nv. 0</p>
              <Zap size={14} className="text-[#f4b83f]" />
              <span className="text-xs font-bold text-[#4d443c]">0/100 XP</span>
            </div>
              <div className="mt-1 h-1.5 w-32 overflow-hidden rounded-full bg-[#b7ad9d] shadow-[inset_0_1px_3px_rgba(0,0,0,0.15)]">
              <div className="h-full w-0 rounded-full bg-gradient-to-r from-[#37e0c9] to-[#0ea98e] shadow-[0_0_8px_rgba(55,224,201,0.35),0_0_16px_rgba(55,224,201,0.15)]" />
            </div>
          </div>
        </div>

          <div className="flex items-center gap-3">
            <div className="flex cursor-pointer items-center gap-1.5 rounded-xl border-2 border-[#6b4f2e]/40 bg-[#4d443c] px-3 py-2 shadow-inner transition-all duration-300 ease-out hover:scale-[1.05] hover:brightness-110 hover:shadow-[inset_0_2px_0_rgba(255,255,255,0.08),0_0_12px_rgba(244,184,63,0.2)]">
              <Coins className="text-[#f4b83f] drop-shadow" size={16} />
              <span className="text-sm font-bold text-[#fff7e6] drop-shadow">0</span>
            </div>
            <div className="flex cursor-pointer items-center gap-1.5 rounded-xl border-2 border-[#6b4f2e]/40 bg-[#4d443c] px-3 py-2 shadow-inner transition-all duration-300 ease-out hover:scale-[1.05] hover:brightness-110 hover:shadow-[inset_0_2px_0_rgba(255,255,255,0.08),0_0_12px_rgba(55,224,201,0.2)]">
              <Gem className="text-[#37e0c9] drop-shadow" size={16} />
              <span className="text-sm font-bold text-[#fff7e6] drop-shadow">0</span>
            </div>
            <button
              type="button"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border-2 border-[#6b6258] bg-[#4d443c] shadow-inner transition-all duration-300 ease-out hover:scale-[1.05] hover:brightness-110 hover:shadow-[0_0_12px_rgba(255,255,255,0.1)] active:scale-90"
            >
              <Menu className="text-[#fff7e6] drop-shadow" size={18} />
            </button>
          </div>
      </header>

      {/* Contenedor central */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-4 py-3 md:px-6 md:py-4 lg:min-h-0 lg:h-full lg:pt-[88px] lg:pb-[84px]">

        {/* TOPBAR mobile (< lg) */}
        <header className="mb-3 flex items-center justify-between rounded-[22px] border-2 border-[#5de4d6]/75 bg-[#fff7e6]/70 px-4 py-3 shadow-[0_2px_12px_rgba(0,0,0,0.06),0_8px_32px_rgba(0,0,0,0.12),0_24px_60px_rgba(0,0,0,0.05),0_0_40px_rgba(55,224,201,0.04)] backdrop-blur-lg lg:hidden" style={{ height: "68px" }}>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-[#6b4f2e] bg-gradient-to-b from-[#37e0c9] to-[#0ea98e] shadow-[inset_0_2px_0_rgba(255,255,255,0.3),0_4px_8px_rgba(74,53,32,0.35),0_8px_16px_rgba(74,53,32,0.12)]">
              <Shield className="text-white drop-shadow" size={18} />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <p className="text-[10px] font-black uppercase tracking-wider text-[#6b4f2e] drop-shadow">Nv. 0</p>
                <Zap size={12} className="text-[#f4b83f]" />
                <span className="text-[10px] font-bold text-[#4d443c]">0/100 XP</span>
              </div>
              <div className="mt-1 h-1.5 w-28 overflow-hidden rounded-full bg-[#b7ad9d] shadow-[inset_0_1px_3px_rgba(0,0,0,0.15)]">
                <div className="h-full w-0 rounded-full bg-gradient-to-r from-[#37e0c9] to-[#0ea98e] shadow-[0_0_8px_rgba(55,224,201,0.35),0_0_16px_rgba(55,224,201,0.15)]" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-lg border-2 border-[#6b4f2e]/40 bg-[#4d443c] px-2.5 py-1.5 shadow-inner">
              <Coins className="text-[#f4b83f] drop-shadow" size={14} />
              <span className="text-xs font-bold text-[#fff7e6] drop-shadow">0</span>
            </div>
            <div className="flex items-center gap-1 rounded-lg border-2 border-[#6b4f2e]/40 bg-[#4d443c] px-2.5 py-1.5 shadow-inner">
              <Gem className="text-[#37e0c9] drop-shadow" size={14} />
              <span className="text-xs font-bold text-[#fff7e6] drop-shadow">0</span>
            </div>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-xl border-2 border-[#6b6258] bg-[#4d443c] shadow-inner transition hover:bg-[#5a5048] active:scale-90"
            >
              <Menu className="text-[#fff7e6] drop-shadow" size={16} />
            </button>
          </div>
        </header>

        {/* Grid 3 columnas */}
        <div className="flex-1 min-h-0 grid grid-cols-1 gap-4 lg:grid-cols-[260px_1fr_340px] lg:gap-6 xl:gap-8">

          {/* LEFT — Perfil */}
          <aside className="flex items-center lg:items-start lg:pt-[40px] lg:ml-8">
            <section className="group relative flex w-full items-center gap-4 rounded-2xl border-2 border-[#5de4d6]/75 bg-[#fff7e6]/65 px-4 py-3 shadow-[0_2px_12px_rgba(0,0,0,0.08),0_8px_36px_rgba(0,0,0,0.18),0_24px_60px_rgba(0,0,0,0.06),0_0_40px_rgba(55,224,201,0.06),inset_0_1px_0_rgba(255,255,255,0.5)] backdrop-blur-lg transition-all duration-500 ease-out lg:flex-col lg:items-center lg:text-center lg:px-5 lg:py-9 lg:min-h-[300px] lg:justify-center hover:shadow-[0_2px_16px_rgba(0,0,0,0.1),0_8px_48px_rgba(0,0,0,0.22),0_32px_80px_rgba(0,0,0,0.08),0_0_50px_rgba(55,224,201,0.12),inset_0_1px_0_rgba(255,255,255,0.5)] hover:brightness-[1.015] hover:scale-[1.02]">
              {/* Reflejo suave fantasy — gradiente de luz interna */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/20 via-white/5 to-transparent" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#37e0c9]/5 via-transparent to-transparent" />
              <div className="pointer-events-none absolute left-[15%] right-[15%] top-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              <div className="pointer-events-none absolute bottom-0 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-[#37e0c9]/20 to-transparent" />
              <div className="pointer-events-none absolute left-[30%] top-1 h-[3px] w-[4px] rounded-full bg-white/50 blur-[1px]" />
              <div className="pointer-events-none absolute right-[25%] top-1 h-[2px] w-[3px] rounded-full bg-[#37e0c9]/40 blur-[1px]" />
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#f4b83f]/70 bg-gradient-to-b from-[#5aeee0] via-[#37e0c9] to-[#0ea98e] shadow-[0_0_20px_rgba(55,224,201,0.35),0_0_60px_rgba(55,224,201,0.25),0_0_100px_rgba(55,224,201,0.12)] transition-all duration-500 ease-out lg:h-[88px] lg:w-[88px] group-hover:shadow-[0_0_24px_rgba(55,224,201,0.45),0_0_70px_rgba(55,224,201,0.35),0_0_120px_rgba(55,224,201,0.18),0_0_0_2px_rgba(244,184,63,0.15)]">
                <UserCircle2 className="text-white drop-shadow" size={28} />
              </div>
              <div className="min-w-0 lg:mt-3">
                <h2 className="truncate text-sm font-black text-[#201c18] drop-shadow-sm lg:text-lg">Jugador</h2>
                <hr className="mx-auto mt-1 hidden w-12 border-t border-[#f4b83f]/30 lg:block" />
                <p className="truncate text-xs text-[#4d443c] lg:mt-1.5 lg:text-sm lg:font-medium">---</p>
              </div>
              <div className="ml-auto flex shrink-0 cursor-pointer items-center gap-1.5 rounded-xl border-2 border-[#f4b83f]/60 bg-gradient-to-b from-[#f4b83f]/15 to-[#d4a44a]/10 bg-[#4d443c] px-3 py-1 shadow-[inset_0_2px_0_rgba(255,255,255,0.12),0_4px_12px_rgba(58,46,34,0.3),0_8px_24px_rgba(58,46,34,0.12),0_0_16px_rgba(244,184,63,0.08)] transition-all duration-300 ease-out lg:ml-0 lg:mt-5 lg:w-full lg:justify-center lg:py-2.5 hover:scale-[1.04] hover:brightness-110 hover:shadow-[inset_0_2px_0_rgba(255,255,255,0.12),0_4px_12px_rgba(58,46,34,0.35),0_8px_24px_rgba(58,46,34,0.15),0_0_32px_rgba(244,184,63,0.3),0_0_60px_rgba(244,184,63,0.08)]">
                <Trophy className="text-[#f4b83f] drop-shadow-[0_0_8px_rgba(244,184,63,0.3)]" size={16} />
                <div>
                  <p className="text-[10px] font-black text-[#d4a44a] drop-shadow tracking-wider">PUNTOS</p>
                  <p className="text-xs font-black text-[#fff7e6] drop-shadow">0</p>
                </div>
              </div>
            </section>
          </aside>

          {/* CENTER — solo Isla */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative flex w-full flex-col items-center justify-center">
              <div className="pointer-events-none absolute left-[15%] top-[20%] h-2 w-2 rounded-full bg-white/60 blur-[2px] animate-pulse" />
              <div className="pointer-events-none absolute right-[18%] top-[25%] h-1.5 w-1.5 rounded-full bg-white/50 blur-[2px] animate-pulse" style={{ animationDelay: "1s" }} />
              <div className="pointer-events-none absolute left-[25%] top-[65%] h-1 w-1 rounded-full bg-white/40 blur-[2px] animate-pulse" style={{ animationDelay: "0.5s" }} />
              <div className="pointer-events-none absolute right-[12%] top-[70%] h-2 w-2 rounded-full bg-white/50 blur-[2px] animate-pulse" style={{ animationDelay: "1.5s" }} />

              <div className="animate-float group relative flex w-full cursor-pointer items-center justify-center">
                <div className="absolute -inset-36 rounded-full bg-[#37e0c9]/12 blur-[160px] animate-ambientGlow md:-inset-44 md:blur-[200px] lg:-inset-52 lg:blur-[240px]" />
                <div className="absolute -inset-32 rounded-full bg-white/8 blur-[120px] transition-all duration-700 ease-out md:-inset-40 md:blur-[160px] lg:-inset-48 lg:blur-[200px] group-hover:scale-110 group-hover:opacity-100" />
                <div className="absolute -inset-24 rounded-full bg-[#37e0c9]/10 blur-[100px] transition-all duration-700 ease-out md:-inset-32 md:blur-[130px] lg:-inset-36 lg:blur-[170px] group-hover:scale-110 group-hover:opacity-100" />
                <div className="absolute -inset-16 rounded-full bg-[#f4b83f]/20 blur-[90px] transition-all duration-700 ease-out md:-inset-24 md:blur-[120px] lg:-inset-28 lg:blur-[150px] group-hover:scale-110 group-hover:opacity-100" />
                <div className="absolute -inset-8 rounded-full bg-[#37e0c9]/15 blur-[60px] transition-all duration-700 ease-out md:-inset-16 md:blur-[90px] lg:-inset-20 lg:blur-[110px] group-hover:scale-110 group-hover:opacity-100" />
                <img
                  src="/islands/isla-principal.png"
                  alt="Isla principal"
                  className="animate-float relative z-10 w-[660px] max-w-[40vw] object-contain drop-shadow-[0_45px_55px_rgba(0,0,0,0.55)] transition-all duration-700 ease-out group-hover:scale-[1.06] group-hover:brightness-110 group-hover:drop-shadow-[0_55px_70px_rgba(0,0,0,0.65)]"
                />
                <div className="pointer-events-none absolute -bottom-6 left-1/2 h-5 w-4/5 -translate-x-1/2 rounded-full bg-black/30 blur-lg md:-bottom-8 lg:-bottom-10 lg:h-6" />
              </div>
            </div>
          </div>

          {/* RIGHT — Pase, Misiones, Cofre */}
          <aside className="flex flex-col items-center justify-center gap-2 lg:gap-4 lg:justify-start lg:pt-[40px] lg:mr-8">
            {/* Pase de batalla */}
            <section className="group relative w-full rounded-2xl border-2 border-[#5de4d6]/55 bg-[#fff7e6]/65 px-4 py-6 shadow-[0_2px_12px_rgba(0,0,0,0.06),0_8px_28px_rgba(0,0,0,0.1),0_20px_56px_rgba(0,0,0,0.05),0_0_24px_rgba(55,224,201,0.03)] backdrop-blur-lg transition-all duration-500 ease-out hover:shadow-[0_2px_16px_rgba(0,0,0,0.08),0_8px_36px_rgba(0,0,0,0.14),0_24px_64px_rgba(0,0,0,0.06),0_0_60px_rgba(55,224,201,0.12)] hover:brightness-[1.015] hover:scale-[1.02]">
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/20 via-white/5 to-transparent" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#37e0c9]/5 via-transparent to-transparent" />
              <div className="pointer-events-none absolute left-[15%] right-[15%] top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              <div className="pointer-events-none absolute bottom-0 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-[#37e0c9]/15 to-transparent" />
              <div className="pointer-events-none absolute left-[25%] top-1 h-[2px] w-[3px] rounded-full bg-white/40 blur-[1px]" />
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-xl border-2 border-[#6b4f2e]/40 bg-gradient-to-b from-[#37e0c9] to-[#0ea98e] shadow-[inset_0_2px_0_rgba(255,255,255,0.3),0_3px_8px_rgba(74,53,32,0.3),0_6px_16px_rgba(74,53,32,0.1)] transition-all duration-500 ease-out group-hover:shadow-[inset_0_2px_0_rgba(255,255,255,0.3),0_3px_8px_rgba(74,53,32,0.3),0_6px_16px_rgba(74,53,32,0.1),0_0_18px_rgba(55,224,201,0.3)]">
                  <Award className="text-white drop-shadow" size={14} />
                </div>
                <p className="text-xs font-black text-[#6b4f2e] drop-shadow">PASE DE BATALLA</p>
              </div>
              <div className="mb-1.5 h-2 overflow-hidden rounded-full bg-[#b7ad9d] shadow-inner">
                <div className="h-full w-0 rounded-full bg-gradient-to-r from-[#37e0c9] to-[#0ea98e] shadow-[0_0_8px_rgba(55,224,201,0.4)]" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-[#4d443c]">Nivel 0</span>
                <span className="text-xs font-bold text-[#0ea98e]">0/100</span>
              </div>
              <button
                type="button"
                className="mt-3 flex w-full cursor-pointer items-center justify-center gap-1 rounded-xl border-2 border-[#6b4f2e]/30 bg-[#4d443c] px-2 py-2 text-xs font-bold text-[#fff7e6] shadow-[inset_0_2px_0_rgba(255,255,255,0.08),0_2px_8px_rgba(0,0,0,0.1)] transition-all duration-300 ease-out hover:scale-[1.03] hover:brightness-110 hover:shadow-[inset_0_2px_0_rgba(255,255,255,0.08),0_2px_8px_rgba(0,0,0,0.1),0_0_20px_rgba(55,224,201,0.2)] active:scale-95"
              >
                VER RECOMPENSAS
                <ChevronRight size={12} />
              </button>
            </section>

            {/* Misiones */}
            <section className="group relative w-full rounded-2xl border-2 border-[#5de4d6]/45 bg-[#fff7e6]/60 px-4 py-6 shadow-[0_2px_10px_rgba(0,0,0,0.05),0_8px_28px_rgba(0,0,0,0.08),0_20px_56px_rgba(0,0,0,0.04)] backdrop-blur-lg transition-all duration-500 ease-out hover:shadow-[0_2px_14px_rgba(0,0,0,0.07),0_8px_36px_rgba(0,0,0,0.12),0_24px_64px_rgba(0,0,0,0.05),0_0_50px_rgba(55,224,201,0.1)] hover:brightness-[1.015] hover:scale-[1.02]">
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/20 via-white/5 to-transparent" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#37e0c9]/5 via-transparent to-transparent" />
              <div className="pointer-events-none absolute left-[15%] right-[15%] top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              <div className="pointer-events-none absolute bottom-0 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-[#37e0c9]/15 to-transparent" />
              <p className="mb-3 text-xs font-black text-[#6b4f2e] drop-shadow">MISIONES</p>
              <div className="space-y-3">
                {[
                  { task: "Visitar 3 islas", prog: "0/3", pct: 0 },
                  { task: "Ganar 100 monedas", prog: "0/100", pct: 0 },
                ].map((m, i) => (
                  <div key={i}>
                    <div className="mb-0.5 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#302a26]">{m.task}</span>
                      <span className="text-[10px] font-medium text-[#4d443c]">{m.prog}</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-[#b7ad9d] shadow-[inset_0_1px_3px_rgba(0,0,0,0.12)]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#37e0c9] to-[#2fbf71] shadow-[0_0_8px_rgba(55,224,201,0.25),0_0_16px_rgba(55,224,201,0.1)]"
                        style={{ width: `${m.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </aside>
        </div>

        {/* FOOTER mobile (< lg) */}
        <footer className="mt-3 flex items-center justify-evenly rounded-[22px] border-2 border-[#5de4d6]/65 bg-[#fff7e6]/70 px-2 py-2 shadow-[0_-2px_12px_rgba(0,0,0,0.05),0_-8px_28px_rgba(0,0,0,0.08),0_-20px_56px_rgba(0,0,0,0.04)] backdrop-blur-lg lg:hidden" style={{ height: "68px" }}>
         {[
  { icon: House, label: "Inicio", active: true },
  { icon: Store, label: "Tienda", href: "/tienda" },
  { icon: UserCircle2, label: "Perfil" },
  { icon: Trophy, label: "Ranking" },
].map((item) => {
  const Icon = item.icon;

  return (
            <Link
  href={item.href || "#"}
              key={item.label}
              type="button"
              className={`flex flex-col items-center gap-0.5 rounded-xl px-3 py-1 transition hover:bg-[#b7ad9d]/30 md:flex-row md:gap-2 md:px-6 md:py-1.5 ${
                item.active ? "text-[#0ea98e]" : "text-[#6b6258]"
              }`}
            >
              <Icon
                size={18}
                className={`${item.active ? "drop-shadow-[0_0_8px_rgba(14,169,142,0.3)]" : ""}`}
              />
              <span className={`text-[9px] font-bold ${item.active ? "drop-shadow" : ""}`}>
                {item.label}
              </span>
            </Link>
          );
})}
        </footer>
      </div>

      {/* TEXTO + EMPEZAR — flotan sobre el footer */}
      <div className="absolute left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-8 lg:flex" style={{ bottom: "130px" }}>
        <p className="text-center text-[22px] font-black tracking-[0.4em] uppercase text-[#d4a44a]/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] [text-shadow:0_0_12px_rgba(212,164,74,0.25)]">
          MUNDO DE LAS ISLAS
        </p>

        <Link
          href="/mundo"
          className="group relative inline-flex items-center gap-3 rounded-2xl border-4 border-[#f4b83f] bg-gradient-to-b from-[#5aeee0] via-[#37e0c9] to-[#0ea98e] px-14 py-4 text-2xl font-black tracking-widest text-white shadow-[inset_0_4px_0_rgba(255,255,255,0.55),0_8px_20px_rgba(107,79,46,0.4),0_16px_40px_rgba(107,79,46,0.15),0_0_50px_rgba(55,224,201,0.35),0_0_100px_rgba(55,224,201,0.15),0_25px_60px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out hover:scale-[1.06] hover:brightness-125 hover:shadow-[inset_0_4px_0_rgba(255,255,255,0.55),0_8px_24px_rgba(107,79,46,0.45),0_20px_48px_rgba(107,79,46,0.18),0_0_60px_rgba(55,224,201,0.5),0_0_120px_rgba(55,224,201,0.25),0_25px_60px_rgba(0,0,0,0.4)] active:translate-y-1.5 active:shadow-[inset_0_4px_0_rgba(255,255,255,0.55),0_4px_12px_rgba(107,79,46,0.35),0_12px_30px_rgba(107,79,46,0.12),0_0_40px_rgba(55,224,201,0.3),0_15px_40px_rgba(0,0,0,0.35)] lg:px-20 lg:py-5 lg:text-3xl lg:gap-4"
        >
          <Sparkles className="text-yellow-200 drop-shadow" size={24} />
          EMPEZAR
          <Sparkles className="text-yellow-200 drop-shadow" size={24} />
        </Link>
      </div>

      {/* FOOTER — absolute centrado */}
      <footer className="absolute bottom-4 left-1/2 z-30 hidden w-[92%] max-w-[1600px] -translate-x-1/2 items-center justify-evenly rounded-[22px] border-2 border-[#5de4d6]/65 bg-[#fff7e6]/70 px-2 shadow-[0_-2px_12px_rgba(0,0,0,0.05),0_-8px_28px_rgba(0,0,0,0.08),0_-20px_56px_rgba(0,0,0,0.04)] backdrop-blur-lg lg:flex" style={{ height: "64px" }}>
        {[
          { icon: House, label: "Inicio", active: true },
          { icon: Store, label: "Tienda", href: "/tienda" },
          { icon: UserCircle2, label: "Perfil" },
          { icon: Trophy, label: "Ranking" },
        ].map((item) => {
  const Icon = item.icon;

  return (
         <Link
  href={item.href || "#"}
            key={item.label}
            type="button"
            className={`flex cursor-pointer flex-col items-center gap-0.5 rounded-xl px-4 py-1 transition-all duration-300 ease-out md:flex-row md:gap-2 md:px-8 md:py-1.5 lg:gap-2 lg:px-10 ${
              item.active ? "text-[#0ea98e]" : "text-[#6b6258]"
            } hover:scale-[1.04] hover:brightness-105 hover:shadow-[0_0_20px_rgba(55,224,201,0.08)]`}
          >
            <Icon
              size={18}
              className={`lg:h-5 lg:w-5 ${item.active ? "drop-shadow-[0_0_8px_rgba(14,169,142,0.3)]" : ""}`}
            />
            <span className={`text-[9px] font-bold md:text-xs ${item.active ? "drop-shadow" : ""}`}>
              {item.label}
            </span>
          </Link>
          );
})}
      </footer>
    </main>
  );
}

function IslandSilhouette({ className }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="h-3 w-8 rounded-t-full bg-gradient-to-b from-emerald-400 to-emerald-600" />
      <div
        className="-mt-0.5 h-4 w-6 bg-gradient-to-b from-stone-500 to-stone-700"
        style={{
          clipPath: "polygon(20% 0%, 80% 0%, 65% 100%, 35% 100%)",
          borderRadius: "0 0 20px 20px",
        }}
      />
    </div>
  );
}
