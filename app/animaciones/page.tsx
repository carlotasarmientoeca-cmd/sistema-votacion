"use client";

export default function AnimacionesPage() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-gradient-to-b from-sky-300 via-cyan-200 to-emerald-200 relative flex items-center justify-center">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.55),transparent_45%)]" />

      {/* Contenedor principal */}
      <section className="relative w-full max-w-6xl h-[720px] flex items-center justify-center">
        {/* Isla norte */}
        <Island className="absolute top-10 left-1/2 -translate-x-1/2 scale-90" title="Isla Norte" />

        {/* Isla oeste */}
        <Island className="absolute left-12 top-1/2 -translate-y-1/2 scale-90" title="Isla Oeste" />

        {/* Isla central */}
        <Island className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-125 z-20" title="Isla Central" main />

        {/* Isla este */}
        <Island className="absolute right-12 top-1/2 -translate-y-1/2 scale-90" title="Isla Este" />

        {/* Isla sur */}
        <Island className="absolute bottom-10 left-1/2 -translate-x-1/2 scale-90" title="Isla Sur" />
      </section>
    </main>
  );
}

function Island({
  title,
  main = false,
  className = "",
}: {
  title: string;
  main?: boolean;
  className?: string;
}) {
  return (
    <div className={`animate-float ${className}`}>
      <div className="relative flex flex-col items-center">
        <p className="mb-3 rounded-full bg-white/80 px-4 py-1 text-sm font-bold text-slate-700 shadow">
          {title}
        </p>

        {/* Pasto */}
        <div
          className={`relative z-10 rounded-[50%] bg-gradient-to-br from-lime-300 via-green-400 to-emerald-600 shadow-2xl ${
            main ? "h-28 w-56" : "h-20 w-44"
          }`}
        >
          <div className="absolute left-8 top-4 h-5 w-16 rounded-full bg-white/25 blur-sm" />
          <div className="absolute right-8 bottom-4 h-4 w-12 rounded-full bg-emerald-900/20 blur-sm" />
        </div>

        {/* Roca */}
        <div
          className={`-mt-8 bg-gradient-to-b from-amber-700 to-stone-800 shadow-xl ${
            main
              ? "h-32 w-44 rounded-b-[90px]"
              : "h-24 w-34 rounded-b-[70px]"
          }`}
          style={{
            clipPath: "polygon(8% 0%, 92% 0%, 74% 100%, 28% 100%)",
          }}
        />

        {/* Sombra */}
        <div
          className={`mt-6 rounded-full bg-slate-900/25 blur-md ${
            main ? "h-6 w-48" : "h-5 w-36"
          }`}
        />
      </div>
    </div>
  );
}