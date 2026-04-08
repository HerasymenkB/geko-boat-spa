import BeforeAfterSlider from './BeforeAfterSlider';
import { useLanguage } from '../hooks/useLanguage';

export default function Transformations() {
  const { t, lang } = useLanguage();
  const isEs = lang === 'es';

  const transformations = [
    {
      title: t('transformations.gelcoat'),
      description: t('transformations.gelcoatDesc'),
      before: "/images/transformations/before-1.webp",
      after: "/images/transformations/after-1.webp",
      alt: t('transformations.altBeforeAfter')
    },
    {
      title: t('transformations.upholstery'),
      description: t('transformations.upholsteryDesc'),
      before: "/images/transformations/before-2.webp",
      after: "/images/transformations/after-2.webp",
      alt: t('transformations.altUpholstery')
    }
  ];

  return (
    <section id="results" className="py-24 bg-brand-gray">
      <div className="container-wide space-y-16">
        <div className="max-w-xl space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark">{t('transformations.title')}</h2>
          <p className="text-brand-dark/60 leading-relaxed">
            {t('transformations.desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-12">
          {transformations.map((item, index) => (
            <div key={index} className="space-y-6 group">
              <div className="-mx-6 md:mx-0">
                <BeforeAfterSlider beforeImage={item.before} afterImage={item.after} altText={item.alt} />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-brand-dark">{item.title}</h3>
                <p className="text-sm text-brand-dark/60 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
