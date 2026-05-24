import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);
  const phoneNumber = "573232336978";
  const message = "Hola, me gustaría obtener información sobre sus productos promocionales.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="bg-white rounded-2xl shadow-xl p-4 max-w-[220px] border border-gray-100">
          <p className="text-sm font-semibold text-gray-800 mb-1">¡Hola! 👋</p>
          <p className="text-sm text-gray-600 leading-snug">¿Desea cotizar sus elementos promocionales?</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-3 block text-center bg-[#25D366] text-white text-sm font-semibold py-2 px-4 rounded-xl hover:bg-[#1ebe5d] transition-colors">
            ¡Cotizar ahora!
          </a>
        </div>
      )}
      <button onClick={() => setOpen(!open)} className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl relative" aria-label="Contactar por WhatsApp">
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <>
            <MessageCircle className="h-7 w-7 fill-current" />
            <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-red-500 border-2 border-white animate-ping" />
            <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-red-500 border-2 border-white" />
          </>
        )}
      </button>
    </div>
  );
};

export default WhatsAppButton;