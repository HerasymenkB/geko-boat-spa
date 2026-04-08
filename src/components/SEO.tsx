import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../hooks/useLanguage';

export default function SEO() {
  const { lang, t } = useLanguage();

  const isEs = lang === 'es';
  
  const title = isEs 
    ? "Restauración de barcos y yates en el sur de Florida | GEKO Boat Spa" 
    : "Boat & Yacht Restoration in South Florida | GEKO Boat Spa";
    
  const desc = isEs 
    ? "Servicio móvil profesional de detailing, reparación de gelcoat y restauración de yates en Miami, Fort Lauderdale y Hollywood." 
    : "Professional mobile boat detailing, gelcoat repair, and yacht restoration in Miami, Fort Lauderdale, and Hollywood. Premium marine services at your dock.";

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      <meta name="description" content={desc} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={isEs ? "https://your-domain.com/es" : "https://your-domain.com"} />

      {/* hreflang tags */}
      <link rel="alternate" hrefLang="en" href="https://your-domain.com" />
      <link rel="alternate" hrefLang="es" href="https://your-domain.com/es" />
      <link rel="alternate" hrefLang="x-default" href="https://your-domain.com" />
    </Helmet>
  );
}
