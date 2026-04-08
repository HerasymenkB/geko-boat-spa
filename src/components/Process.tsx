import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const { t } = useLanguage();

  const steps = [
    {
      id: "01",
      title: t('process.p1'),
      description: t('process.p1Desc')
    },
    {
      id: "02",
      title: t('process.p2'),
      description: t('process.p2Desc')
    },
    {
      id: "03",
      title: t('process.p3'),
      description: t('process.p3Desc')
    },
    {
      id: "04",
      title: t('process.p4'),
      description: t('process.p4Desc')
    }
  ];

  const handleActivate = (index: number) => {
    if (index === activeStep) {
      setActiveStep(index + 1);
    }
  };

  return (
    <section id="process" className="py-32 bg-white">
      <div className="container-wide space-y-24">
        <div className="max-w-xl space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold text-brand-dark">{t('process.title')}</h2>
          <p className="text-brand-dark/60 leading-relaxed text-lg">
            {t('process.desc')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => {
            const isActive = index < activeStep;
            const isAvailable = index === activeStep;

            return (
              <div key={step.id} className="space-y-8">
                <div 
                  className="relative inline-block"
                  onMouseEnter={() => handleActivate(index)}
                  onTouchStart={() => handleActivate(index)}
                >
                  <span 
                    className={`block text-7xl font-bold transition-all duration-1000 ease-out ${
                      isActive 
                        ? 'text-brand-accent/80 scale-105'
                        : isAvailable
                        ? 'text-brand-accent/20 cursor-pointer hover:text-brand-accent/50 hover:scale-[1.02]'
                        : 'text-brand-dark/5 pointer-events-none'
                    }`}
                  >
                    {step.id}
                  </span>
                  <div 
                    className={`absolute bottom-2 left-0 h-px transition-all duration-1000 ease-out ${
                      isActive 
                        ? 'w-full bg-brand-accent/60'
                        : 'w-12 bg-brand-dark/10'
                    }`}
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-brand-dark">{step.title}</h3>
                  <p className="text-sm text-brand-dark/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
