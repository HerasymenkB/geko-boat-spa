import { useState, useMemo, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Info, MessageCircle, ArrowRight } from 'lucide-react';

export default function PricingPage() {
  const { t, lang } = useLanguage();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Estimator State
  const [service, setService] = useState('cushion');
  const [size, setSize] = useState('small');
  const [condition, setCondition] = useState('light');
  const [panels, setPanels] = useState(1);
  const [addons, setAddons] = useState<{ diamond: boolean; embroidery: boolean }>({
    diamond: false,
    embroidery: false,
  });

  const basePrices: Record<string, { min: number; max: number }> = {
    cushion: { min: 245, max: 295 },
    bolsters: { min: 200, max: 220 },
    chairs: { min: 900, max: 1200 },
    sunpads: { min: 245, max: 450 },
    foam: { min: 75, max: 125 },
    base: { min: 75, max: 75 },
  };

  const multipliers = {
    size: { small: 1.0, medium: 1.15, large: 1.3 },
    condition: { light: 1.0, moderate: 1.25, heavy: 1.5 },
  };

  const estimatedPrice = useMemo(() => {
    const base = basePrices[service] || { min: 0, max: 0 };
    const baseAvg = (base.min + base.max) / 2;
    const sMult = multipliers.size[size as keyof typeof multipliers.size];
    const cMult = multipliers.condition[condition as keyof typeof multipliers.condition];

    let pricePerPanel = baseAvg * sMult * cMult;

    if (addons.diamond) pricePerPanel += 60;
    if (addons.embroidery) pricePerPanel += 100;

    return Math.round(pricePerPanel * panels);
  }, [service, size, condition, addons, panels]);

  const whatsappLink = "https://wa.me/17542990399?text=Hi,%20I’d%20like%20an%20exact%20quote%20for%20boat%20upholstery.%20I%20will%20send%20photos.";

  return (
    <div className="pt-24 pb-20 bg-brand-dark text-white overflow-hidden">
      {/* Hero Section */}
      <div 
        className="relative"
        style={{
          backgroundImage: "url('/images/pricing/marine-upholstery.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-brand-dark/60 z-0" />
        
        <section className="container-wide py-20 md:py-32 relative z-10 text-white">
          <div className="max-w-3xl space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              {t('pricing.hero.title')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed"
            >
              {t('pricing.hero.subtitle')}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-dark px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-brand-gray transition-all flex items-center justify-center gap-2 group"
              >
                {t('pricing.hero.btnExact')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-all text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                {t('pricing.hero.btnPhotos')}
              </a>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Pricing Table */}
      <section className="bg-white py-24 text-brand-dark">
        <div className="container-wide space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t('pricing.table.title')}</h2>
            <div className="h-1 w-20 bg-brand-accent" />
          </div>

          <div className="overflow-hidden border border-gray-200 rounded-sm shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-brand-gray">
                <tr>
                  <th className="px-6 py-4 font-bold text-sm uppercase tracking-widest text-brand-dark/40 border-b border-gray-200">
                    {t('pricing.table.service')}
                  </th>
                  <th className="px-6 py-4 font-bold text-sm uppercase tracking-widest text-brand-dark/40 border-b border-gray-200 text-right">
                    {t('pricing.table.estimate')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {Object.entries(t('pricing.table.rows') as unknown as Record<string, string>).map(([key, name]) => {
                  const price = basePrices[key] ? `$${basePrices[key].min}–$${basePrices[key].max}` : 
                               key === 'base' ? '$75' : 
                               key === 'diamond' ? '+$60 per panel' : 
                               key === 'embroidery' ? '$75–$200' : 'N/A';
                  
                  return (
                    <tr key={key} className="hover:bg-brand-gray/50 transition-colors">
                      <td className="px-6 py-5 font-medium text-lg">{name}</td>
                      <td className="px-6 py-5 text-right font-bold text-brand-accent">{price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-brand-dark/50 text-sm flex items-start gap-2 max-w-2xl italic">
            <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
            {t('pricing.table.note')}
          </p>
        </div>
      </section>

      {/* Estimator Section */}
      <section className="bg-brand-dark pt-24 pb-0">
        <div className="container-wide grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="space-y-10">
            <div className="space-y-2">
              <span className="text-brand-accent/50 text-[10px] font-bold uppercase tracking-[0.4em] block">
                {t('pricing.hero.btnExact')}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{t('pricing.calculator.title')}</h2>
            </div>
            
            <div className="space-y-8">
              {/* Service Selection */}
              <div className="space-y-4">
                <label className="text-[11px] font-bold uppercase tracking-wider text-white/30">{t('pricing.calculator.service')}</label>
                <select 
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-white/5 border border-white/5 rounded-sm px-4 py-3.5 focus:outline-none focus:border-brand-accent/50 transition-colors text-white/90 hover:bg-white/[0.08]"
                >
                  {Object.entries(t('pricing.table.rows') as unknown as Record<string, string>).slice(0, 6).map(([key, name]) => (
                    <option key={key} value={key} className="bg-brand-dark">{name}</option>
                  ))}
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {/* Size Selection */}
                <div className="space-y-4">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-white/30">{t('pricing.calculator.size')}</label>
                  <div className="flex gap-2">
                    {['small', 'medium', 'large'].map((s) => (
                      <button
                        key={s}
                        onClick={() => setSize(s)}
                        className={`flex-1 py-2.5 px-3 text-[10px] font-bold uppercase tracking-widest rounded-sm border transition-all duration-300 transform active:scale-95 ${
                          size === s ? 'bg-brand-accent/90 border-brand-accent text-brand-dark shadow-lg shadow-brand-accent/10' : 'border-white/5 text-white/40 hover:border-white/20 hover:bg-white/5 hover:text-white/60'
                        }`}
                      >
                        {t(`pricing.calculator.${s}`)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Condition Selection */}
                <div className="space-y-4">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-white/30">{t('pricing.calculator.condition')}</label>
                  <div className="flex gap-2">
                    {['light', 'moderate', 'heavy'].map((c) => (
                      <button
                        key={c}
                        onClick={() => setCondition(c)}
                        className={`flex-1 py-2.5 px-3 text-[10px] font-bold uppercase tracking-widest rounded-sm border transition-all duration-300 transform active:scale-95 ${
                          condition === c ? 'bg-brand-accent/90 border-brand-accent text-brand-dark shadow-lg shadow-brand-accent/10' : 'border-white/5 text-white/40 hover:border-white/20 hover:bg-white/5 hover:text-white/60'
                        }`}
                      >
                        {t(`pricing.calculator.${c}`)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Add-ons & Panels */}
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-white/30">{t('pricing.calculator.addons')}</label>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer group bg-white/[0.03] p-3.5 rounded-sm border border-white/5 hover:bg-white/5 transition-all">
                      <div className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-all duration-300 ${addons.diamond ? 'bg-brand-accent border-brand-accent' : 'border-white/10 group-hover:border-white/30'}`}>
                        {addons.diamond && <Check className="w-3 h-3 text-brand-dark" strokeWidth={4} />}
                      </div>
                      <input type="checkbox" className="hidden" checked={addons.diamond} onChange={(e) => setAddons({...addons, diamond: e.target.checked})} />
                      <span className={`text-xs tracking-tight transition-colors ${addons.diamond ? 'text-white' : 'text-white/50'}`}>{t('pricing.calculator.diamond')}</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group bg-white/[0.03] p-3.5 rounded-sm border border-white/5 hover:bg-white/5 transition-all">
                      <div className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-all duration-300 ${addons.embroidery ? 'bg-brand-accent border-brand-accent' : 'border-white/10 group-hover:border-white/30'}`}>
                        {addons.embroidery && <Check className="w-3 h-3 text-brand-dark" strokeWidth={4} />}
                      </div>
                      <input type="checkbox" className="hidden" checked={addons.embroidery} onChange={(e) => setAddons({...addons, embroidery: e.target.checked})} />
                      <span className={`text-xs tracking-tight transition-colors ${addons.embroidery ? 'text-white' : 'text-white/50'}`}>{t('pricing.calculator.embroidery')}</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-white/30">{t('pricing.calculator.panels')}</label>
                  <div className="flex items-center bg-white/5 border border-white/5 rounded-sm p-1">
                    <button 
                      onClick={() => setPanels(Math.max(1, panels - 1))}
                      className="w-10 h-10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-all"
                    >
                      —
                    </button>
                    <input 
                      type="number" 
                      value={panels}
                      onChange={(e) => setPanels(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                      className="flex-1 bg-transparent text-center font-bold text-sm outline-none"
                    />
                    <button 
                      onClick={() => setPanels(Math.min(10, panels + 1))}
                      className="w-10 h-10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-all"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/[0.03] border border-white/5 rounded-sm p-10 md:p-14 space-y-10 lg:mt-16 relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Info className="w-24 h-24" />
            </div>
            
            <div className="space-y-1 relative z-10">
              <span className="text-brand-accent/40 text-[10px] font-bold uppercase tracking-[0.2em]">{t('pricing.calculator.resultLabel')}</span>
              <AnimatePresence mode="wait">
                <motion.div 
                  key={estimatedPrice}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="text-6xl md:text-7xl font-bold text-white tracking-tighter"
                >
                  ${estimatedPrice}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="space-y-6 relative z-10">
              <div className="space-y-2">
                <p className="text-white/80 text-lg font-medium leading-snug">{t('pricing.calculator.cta')}</p>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-white/30 text-[11px] font-medium tracking-wide">
                    {t('pricing.calculator.trust')}
                  </div>
                  <div className="text-brand-accent/40 text-[10px] font-bold italic">
                    * {t('pricing.calculator.disclaimer')}
                  </div>
                </div>
              </div>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-brand-accent text-brand-dark px-12 py-5 rounded-sm font-bold uppercase tracking-widest text-[11px] hover:bg-[#D8C8B8] hover:shadow-[0_10px_20_rgba(200,184,168,0.15)] transition-all duration-300 items-center gap-3 w-full justify-center transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
              >
                <MessageCircle className="w-5 h-5" />
                {t('pricing.calculator.btnWhatsapp')}
              </a>
            </div>
          </div>
        </div>

        {/* Premium Ticker Divider */}
        <div className="mt-16 md:mt-24 border-y border-white/10 py-4 overflow-hidden">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              repeat: Infinity, 
              duration: 30, 
              ease: "linear" 
            }}
            className="flex whitespace-nowrap items-center gap-12 pr-12 w-fit"
          >
            {/* Ticker Content - Loop twice for seamlessness */}
            {[1, 2].map((loop) => (
              <div key={loop} className="flex items-center gap-12">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-4">
                    <Check className="w-3 h-3 text-brand-accent/30" />
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                      {t(`pricing.trust.item${i}`)}
                    </span>
                    <span className="text-white/10 ml-8">•</span>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
