import { MessageCircle } from 'lucide-react';
import { whatsappConfig } from '../config';

export function WhatsAppButton() {
  const handleClick = () => {
    const url = `https://wa.me/${whatsappConfig.number.replace(/\+/g, '')}?text=${encodeURIComponent(whatsappConfig.message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#C8A97E] flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-[0_0_30px_rgba(200,169,126,0.4)]"
      aria-label={whatsappConfig.label}
      data-hover="true"
    >
      <MessageCircle className="w-6 h-6 text-[#0A0A0A]" />
      <span className="absolute inset-0 rounded-full bg-[#C8A97E] animate-ping opacity-20" />
    </button>
  );
}
