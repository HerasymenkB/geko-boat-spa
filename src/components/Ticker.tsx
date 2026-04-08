import { motion } from 'motion/react';
import { useLanguage } from '../hooks/useLanguage';

export default function Ticker() {
  const { t } = useLanguage();
  const items = [
    t('ticker.item1'),
    t('ticker.item2'),
    t('ticker.item1'),
    t('ticker.item2'),
    t('ticker.item1'),
    t('ticker.item2'),
    t('ticker.item1'),
    t('ticker.item2'),
  ];

  return (
    <div className="bg-brand-dark py-4 overflow-hidden border-y border-white/10">
      <motion.div 
        className="flex whitespace-nowrap gap-12 items-center"
        animate={{ x: [0, -1000] }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-12">
            <span className="text-white/40 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase">
              {item}
            </span>
            <div className="w-1 h-1 bg-white/20 rounded-full" />
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {items.map((item, index) => (
          <div key={`dup-${index}`} className="flex items-center gap-12">
            <span className="text-white/40 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase">
              {item}
            </span>
            <div className="w-1 h-1 bg-white/20 rounded-full" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
