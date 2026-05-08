"use client";

import { useState, useCallback, useEffect } from "react";

let _activo = false;

export const useVoiceAssistant = () => {
  const [activo, setActivo] = useState(_activo);

  useEffect(() => {
    setActivo(_activo);
  }, []);

  const activar = useCallback((): boolean => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return false;
    _activo = true;
    setActivo(true);
    return true;
  }, []);

  const desactivar = useCallback(() => {
    _activo = false;
    setActivo(false);
  }, []);

  const leerTexto = useCallback((texto: string) => {
    if (!_activo || typeof window === "undefined") return;
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const mensaje = new SpeechSynthesisUtterance(texto);
    mensaje.lang = "es-ES";
    mensaje.rate = 0.95;
    mensaje.pitch = 1;
    window.speechSynthesis.speak(mensaje);
  }, []);

  const leerPagina = useCallback((nombrePagina: string) => {
    if (!_activo) return;
    let texto = "";
    const titulos = document.querySelectorAll("h1, h2, h3, h4");
    titulos.forEach((t) => {
      const c = t.textContent?.trim();
      if (c) texto += `${c}. `;
    });
    const parrafos = document.querySelectorAll("p, label, span");
    parrafos.forEach((p) => {
      const c = p.textContent?.trim();
      if (c) texto += `${c}. `;
    });
    texto += "Usa la tecla TAB para navegar entre elementos. Usa ENTER para seleccionar una opción.";
    leerTexto(`Estás en la pantalla de ${nombrePagina}. ${texto}`);
  }, [leerTexto]);

  useEffect(() => {
    if (!activo) return;
    const handleFocus = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      const customVoice = target.getAttribute("data-voice");
      if (customVoice) { leerTexto(customVoice); return; }
      const texto = target.textContent?.trim();
      if (!texto) return;
      const tag = target.tagName.toLowerCase();
      const label = target.getAttribute("aria-label") || texto;
      if (tag === "button" || tag === "a" || target.getAttribute("role") === "button") {
        leerTexto(`Estás sobre el botón ${label}. Presiona ENTER para continuar.`);
      } else if (tag === "input") {
        const lbl = document.querySelector(`label[for="${target.id}"]`);
        if (lbl) leerTexto(`Campo: ${lbl.textContent?.trim()}.`);
      }
    };
    const handleClick = (e: MouseEvent) => {
      if (!_activo) return;
      const target = e.target as HTMLElement;
      const btn = target.closest("button, a, [role='button']");
      if (btn) {
        const t = (btn as HTMLElement).textContent?.trim();
        if (t) leerTexto(`Presionaste ${t}.`);
      }
    };
    document.addEventListener("focusin", handleFocus);
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("focusin", handleFocus);
      document.removeEventListener("click", handleClick);
    };
  }, [activo, leerTexto]);

  return { activo, activar, desactivar, leerTexto, leerPagina };
};
