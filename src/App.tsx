import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './hooks/useLanguage';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import PricingPage from './pages/PricingPage.tsx';

export default function App() {
  return (
    <LanguageProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/es" element={<LandingPage />} />
          <Route path="/marine-upholstery-pricing" element={<PricingPage />} />
          <Route path="/es/marine-upholstery-pricing" element={<PricingPage />} />
        </Routes>
      </Layout>
    </LanguageProvider>
  );
}
