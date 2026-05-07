'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060d1a] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(22,45,80,0.08),transparent_60%)]" />

      <section className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center rounded-full border border-[#4a78b8]/30 bg-[#2a5091]/10 px-5 py-2 text-sm font-medium text-[#6f95cc] backdrop-blur-sm">
            Plataforma de votación digital
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            Tu voto seguro, transparente y confiable
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#7c8fa3]">
            Ejerce tu derecho al voto en un entorno digital protegido, accesible y verificable.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={() => router.push('/registro')}
              className="inline-flex items-center rounded-2xl bg-white px-10 py-4 text-lg font-bold text-[#0a1a2f] shadow-xl shadow-black/15 transition hover:-translate-y-0.5 hover:bg-[#f2f5f9] hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/40"
            >
              Votar ahora
            </button>
          </div>

          <div className="mt-8">
            <button
              onClick={() => router.push('/admin/login')}
              className="cursor-pointer text-sm text-[#5a6f84] transition hover:text-[#a3bde0] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6f95cc]"
            >
              Acceso institucional
            </button>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="pointer-events-none absolute -left-16 top-10 h-48 w-48 rounded-full bg-[#162d50]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 right-10 h-56 w-56 rounded-full bg-[#1e3f6b]/15 blur-3xl" />

          <div className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
            <div className="overflow-hidden rounded-[1.5rem] bg-[#0a1a2f]/60">
              <Image
                src="/img2.png"
                alt="Ilustración de votación"
                width={500}
                height={500}
                priority
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
