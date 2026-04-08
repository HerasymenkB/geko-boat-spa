import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      id: "01",
      title: t('services.s1'),
      description: t('services.s1Desc')
    },
    {
      id: "02",
      title: t('services.s2'),
      description: t('services.s2Desc')
    },
    {
      id: "03",
      title: t('services.s3'),
      description: t('services.s3Desc')
    },
    {
      id: "04",
      title: t('services.s4'),
      description: t('services.s4Desc')
    }
  ];

  const handleServiceClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactForm = document.getElementById('contact-form-wrapper');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Add highlight classes
      contactForm.classList.add('bg-white/5', 'border-white/10', 'shadow-[0_0_30px_rgba(255,255,255,0.05)]');
      // Remove them after 1.5s
      setTimeout(() => {
        contactForm.classList.remove('bg-white/5', 'border-white/10', 'shadow-[0_0_30px_rgba(255,255,255,0.05)]');
      }, 1500);
    }
  };

  return (
    <section id="services" className="py-32 bg-white">
      <div className="container-wide space-y-24">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <span className="text-brand-accent text-xs font-bold uppercase tracking-[0.3em]">{t('services.label')}</span>
          <h2 className="text-5xl md:text-6xl font-bold text-brand-dark">{t('services.title')}</h2>
          <p className="text-brand-dark/60 leading-relaxed text-lg">
            {t('services.desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-px bg-transparent md:bg-[#C8B8A8]/25 border-0 md:border md:border-[#C8B8A8]/25">
          {services.map((service) => (
            <a 
              href="#contact"
              onClick={handleServiceClick}
              key={service.id} 
              className="relative bg-white p-8 md:p-16 space-y-6 md:space-y-8 hover:bg-brand-gray transition-all duration-300 group cursor-pointer block border border-[#C8B8A8]/30 md:border-0 rounded-sm md:rounded-none outline outline-1 outline-transparent hover:outline-[#C8B8A8]/50 hover:z-10"
            >
              <span className="text-brand-accent text-sm font-bold tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                {service.id}
              </span>
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-[26px] md:text-2xl font-[800] md:font-bold text-brand-dark leading-tight">{service.title}</h3>
                <p className="text-brand-dark/60 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
