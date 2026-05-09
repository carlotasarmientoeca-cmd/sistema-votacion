"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TiendaPage() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">
    <div
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: "url('/tienda2-bg.png')" }}
/>
 {/* Saldo del usuario */}
<div className="absolute left-[3%] top-[14%] z-20 space-y-3">
  <div className="flex items-center gap-3 rounded-2xl border-2 border-[#f4c866]/70 bg-[#3b2a1e]/80 px-3 py-3 shadow-xl backdrop-blur-md">
    <span className="text-3xl">🪙</span>
    <div>
      <p className="text-xs font-black uppercase text-[#f4c866]">Monedas</p>
      <p className="text-2xl font-black text-white">0</p>
    </div>
  </div>

  <div className="flex min-h-[95px] items-center gap-1 rounded-2xl border-2 border-[#37e0c9]/70 bg-[#3b2a1e]/80 px-2 py-3 shadow-xl backdrop-blur-md">
<img
  src="/token.png"
  alt="Token"
  className="mt-1 h-[65px] w-[65px] object-contain drop-shadow-xl"
/>
    <div>
      <p className="text-xs font-black uppercase text-[#37e0c9]">Tokens</p>
      <p className="text-2xl font-black text-white">0</p>
    </div>
  </div>
</div>
      <Link
        href="/principal"
        className="absolute right-[5%] top-[4%] z-20 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/80 text-4xl font-black text-white shadow-xl transition hover:scale-110"
      >
        ×
      </Link>

      <Link
        href="/principal"
        className="absolute left-[3%] top-[4%] z-20 flex items-center gap-2 rounded-2xl bg-[#3b2a1e]/80 px-5 py-3 font-black text-white shadow-xl transition hover:scale-105"
      >
        <ArrowLeft size={22} />
        Volver
      </Link>

      <section className="absolute inset-0">
  {/* ITEM 1 */}
  <button className="group absolute left-[27.2%] top-[24%] flex flex-col items-center">
  <div className="flex h-[140px] w-[140px] items-center justify-center">
  <img
    src="/token.png"
    alt="Token"
    className="h-full w-full object-contain drop-shadow-2xl transition group-hover:scale-140"
  />
</div>

    <div className="mt-2 rounded-xl bg-[#f2dfc2] px-5 py-2 text-center shadow-xl">
      <p className="text-base font-black text-[#4f331c]">
        100 monedas
      </p>

      <p className="text-xs font-bold text-[#8a5a25]">
        1 Bitc-Beaver
      </p>
    </div>

    <div className="mt-3 rounded-xl border-2 border-[#f4c866] bg-gradient-to-b from-[#37e0c9] to-[#0ea98e] px-5 py-2 text-sm font-black text-white opacity-0 shadow-xl transition group-hover:opacity-100">
      CANJEAR
    </div>
  </button>

  {/* ITEM 2 */}
  <button className="group absolute left-[43.3%] top-[23.9%] flex flex-col items-center">
  <div className="flex h-[140px] w-[140px] items-center justify-center">
  <img
    src="/token.png"
    alt="Token"
    className="h-full w-full object-contain drop-shadow-2xl transition group-hover:scale-140"
  />
</div>

    <div className="mt-2 rounded-xl bg-[#f2dfc2] px-5 py-2 text-center shadow-xl">
      <p className="text-base font-black text-[#4f331c]">
        3'000 monedas
      </p>

      <p className="text-xs font-bold text-[#8a5a25]">
        3 Bitc-Beavers
      </p>
    </div>

    <div className="mt-3 rounded-xl border-2 border-[#f4c866] bg-gradient-to-b from-[#37e0c9] to-[#0ea98e] px-5 py-2 text-sm font-black text-white opacity-0 shadow-xl transition group-hover:opacity-100">
      CANJEAR
    </div>
  </button>

  {/* ITEM 3 */}
  <button className="group absolute left-[59.5%] top-[24.8%] flex flex-col items-center">
  <div className="flex h-[140px] w-[140px] items-center justify-center">
  <img
    src="/token.png"
    alt="Token"
    className="h-full w-full object-contain drop-shadow-2xl transition group-hover:scale-140"
  />
</div>

    <div className="-mt-1 rounded-xl bg-[#f2dfc2] px-5 py-2 text-center shadow-xl">
      <p className="text-base font-black text-[#4f331c]">
        7'0000 monedas
      </p>

      <p className="text-xs font-bold text-[#8a5a25]">
        7 Bitc-Beavers
      </p>
    </div>
<div className="mt-3 rounded-xl border-2 border-[#f4c866] bg-gradient-to-b from-[#37e0c9] to-[#0ea98e] px-5 py-2 text-sm font-black text-white opacity-0 shadow-xl transition group-hover:opacity-100">
  CANJEAR
</div>
   
  </button>

  {/* ITEM 4 */}
<button className="group absolute left-[27.4%] top-[53.5%] flex flex-col items-center">
  <div className="flex h-[140px] w-[140px] items-center justify-center">
  <img
    src="/token.png"
    alt="Token"
    className="h-full w-full object-contain drop-shadow-2xl transition group-hover:scale-140"
  />
</div>
  <div className="mt-2 rounded-xl bg-[#f2dfc2] px-5 py-2 text-center shadow-xl">
    <p className="text-base font-black text-[#4f331c]">
      300 monedas
    </p>

    <p className="text-xs font-bold text-[#8a5a25]">
      2 Bitc-Beavers
    </p>
  </div>

  <div className="mt-3 rounded-xl border-2 border-[#f4c866] bg-gradient-to-b from-[#37e0c9] to-[#0ea98e] px-5 py-2 text-sm font-black text-white opacity-0 shadow-xl transition group-hover:opacity-100">
    CANJEAR
  </div>
</button>

{/* ITEM 5 */}
<button className="group absolute left-[43.7%] top-[53.4%] flex flex-col items-center">
 <div className="flex h-[140px] w-[140px] items-center justify-center">
  <img
    src="/token.png"
    alt="Token"
    className="h-full w-full object-contain drop-shadow-2xl transition group-hover:scale-140"
  />
</div>

  <div className="mt-2 rounded-xl bg-[#f2dfc2] px-5 py-2 text-center shadow-xl">
    <p className="text-base font-black text-[#4f331c]">
      45 monedas
    </p>

    <p className="text-xs font-bold text-[#8a5a25]">
      5 Bitc-Beavers
    </p>
  </div>

  <div className="mt-3 rounded-xl border-2 border-[#f4c866] bg-gradient-to-b from-[#37e0c9] to-[#0ea98e] px-5 py-2 text-sm font-black text-white opacity-0 shadow-xl transition group-hover:opacity-100">
    CANJEAR
  </div>
</button>

{/* ITEM 6 */}
<button className="group absolute left-[58%] top-[53.4%] flex flex-col items-center">
 <div className="flex h-[140px] w-[140px] items-center justify-center">
  <img
    src="/token.png"
    alt="Token"
    className="h-full w-full object-contain drop-shadow-2xl transition group-hover:scale-140"
  />
</div>

  <div className="mt-2 w-[190px] rounded-xl bg-[#f2dfc2] px-5 py-2 text-center shadow-xl">
    <p className="text-base font-black text-[#4f331c]">
     10'000 monedas
    </p>

    <p className="text-xs font-bold text-[#8a5a25]">
      10 Bitc-Beavers
    </p>
  </div>

  <div className="mt-3 rounded-xl border-2 border-[#f4c866] bg-gradient-to-b from-[#37e0c9] to-[#0ea98e] px-5 py-2 text-sm font-black text-white opacity-0 shadow-xl transition group-hover:opacity-100">
    CANJEAR
  </div>
</button> 

</section>
    </main>
  );
}