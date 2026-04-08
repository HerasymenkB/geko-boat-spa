import { Phone } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function WhatsAppButton() {
  const { t } = useLanguage();

  return (
    <a
      href="https://wa.me/17542990399?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20my%20boat"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 md:px-5 md:py-3 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-300 hover:scale-105 active:scale-95 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] blur-[10px] animate-ripple pointer-events-none" />
      <div className="absolute inset-0 rounded-full bg-[#25D366] blur-[10px] animate-ripple pointer-events-none [animation-delay:1.5s]" />
      <Phone className="w-4 h-4 md:w-5 md:h-5 fill-current relative z-10" />
      <span className="font-medium text-sm md:text-base relative z-10">{t('whatsapp.chat')}</span>
    </a>
  );
}
