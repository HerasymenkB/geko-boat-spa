import { useLanguage } from '../hooks/useLanguage';

export default function Process() {
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
          {steps.map((step) => {
            return (
              <div key={step.id} className="space-y-8">
                <div className="relative inline-block pb-2 group cursor-default">
                  <span className="block text-7xl font-bold text-brand-accent/60 tracking-tighter transition-colors duration-300 group-hover:text-brand-accent">
                    {step.id}
                  </span>
                  <div className="absolute bottom-0 left-0 h-px w-12 bg-brand-accent/40 group-hover:w-full transition-all duration-500" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-brand-dark uppercase tracking-tight">{step.title}</h3>
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
