import { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import pumpkinUrl from "@/assets/Pumpkin.json?url";

const pumpkinMessage = "¿Qué producto desea cotizar?";
const TYPE_SPEED = 65; // ms por letra
const FIRST_DELAY = 3400; // espera antes de la primera vez
const HOLD_TIME = 6500; // mensaje completo visible
const REPEAT_GAP = 800; // pausa antes de repetir

const phoneNumber = "573232336978"; // Número de WhatsApp de IMPULSA
const message =
  "Hola, me gustaría obtener información sobre sus productos promocionales.";
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const WhatsAppButton = () => {
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches
  );

  // Sigue los cambios de la preferencia de movimiento reducido.
  useEffect(() => {
    const mq = window.matchMedia(REDUCED_MOTION_QUERY);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Un solo efecto controla toda la animación del texto.
  useEffect(() => {
    if (reducedMotion) {
      setVisibleCharacters(pumpkinMessage.length);
      return;
    }

    const timers: number[] = [];
    const later = (fn: () => void, ms: number) => {
      timers.push(window.setTimeout(fn, ms));
    };

    const type = (onDone?: () => void) => {
      let count = 0;
      const step = () => {
        count += 1;
        setVisibleCharacters(count);
        if (count < pumpkinMessage.length) {
          later(step, TYPE_SPEED);
        } else {
          onDone?.();
        }
      };
      step();
    };

    setVisibleCharacters(0);

    if (hovered) {
      later(() => type(), 120);
    } else {
      const cycle = () => {
        type(() => {
          later(() => {
            setVisibleCharacters(0);
            later(cycle, REPEAT_GAP);
          }, HOLD_TIME);
        });
      };
      later(cycle, FIRST_DELAY);
    }

    return () => timers.forEach(window.clearTimeout);
  }, [hovered, reducedMotion]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Calabaza que habla */}
      <div
        className={`whatsapp-pumpkin-bubble rounded-2xl bg-background px-4 py-2.5 shadow-xl transition-opacity duration-300 ${
          visibleCharacters > 0 ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      >
        <span className="relative block text-sm font-bold leading-snug text-foreground">
          {/* Texto invisible que reserva el ancho final de la burbuja */}
          <span className="invisible">{pumpkinMessage}</span>
          <span className="absolute inset-0">
            {pumpkinMessage.slice(0, visibleCharacters)}
          </span>
        </span>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-pumpkin-btn"
        aria-label="Contactar por WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        <DotLottieReact
          autoplay
          loop
          src={pumpkinUrl}
          style={{ width: "64px", height: "64px" }}
          aria-hidden="true"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;