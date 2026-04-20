import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import SEO from './SEO';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen bg-brand-dark">
      <SEO />
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
