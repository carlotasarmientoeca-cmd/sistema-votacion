"use client";

export const useVoiceAssistant = () => {
  const hablar = (texto: string) => {
    if (typeof window === "undefined") return;

    if (!("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();

    const mensaje = new SpeechSynthesisUtterance(texto);

    mensaje.lang = "es-ES";
    mensaje.rate = 0.95;
    mensaje.pitch = 1;

    window.speechSynthesis.speak(mensaje);
  };

  return { hablar };
};