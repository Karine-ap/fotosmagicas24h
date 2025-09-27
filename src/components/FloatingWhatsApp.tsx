import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "5511921265421"; // Número editável

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // Aparece após 3 segundos

    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = () => {
    const message = "Olá! Acabei de visitar o site da Fotosmagicas24h e gostaria de saber mais sobre os serviços de melhoria de imagens com IA.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-float">
      <button
        onClick={openWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Fale conosco no WhatsApp
          <div className="absolute top-full right-4 border-4 border-transparent border-t-gray-900"></div>
        </div>

        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping"></div>
      </button>
    </div>
  );
};

export default FloatingWhatsApp;