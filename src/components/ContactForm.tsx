import React, { useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => setStatus('success'), 1200);
  };

  const inputClasses = "w-full bg-white/5 border border-white/10 text-white px-6 py-5 md:py-4 rounded-sm outline-none focus:bg-white/10 focus:border-white/30 transition-all font-light peer";
  const labelClasses = "absolute left-4 -top-2.5 text-[10px] text-white/60 bg-brand-dark px-2 transition-all pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-white/40 peer-focus:-top-2.5 peer-focus:text-[10px] peer-focus:bg-brand-dark peer-focus:text-white/60 peer-focus:px-2";

  return (
    <section className="bg-brand-dark pb-16 pt-4 relative overflow-hidden" id="contact">
      <div className="container-wide relative z-10">
        <div className="max-w-xl mx-auto">
          
          <div id="contact-form-wrapper" className="p-8 -mx-8 rounded-xl border border-transparent transition-all duration-1000 relative">
            <form onSubmit={handleSubmit} className="space-y-8 md:space-y-6">
              {/* Name */}
            <div className="relative">
              <input 
                type="text" 
                id="name"
                required
                placeholder=" "
                className={inputClasses}
              />
              <label htmlFor="name" className={labelClasses}>
                {t('form.name')}
              </label>
            </div>

            {/* Contact Info */}
            <div className="relative">
              <input 
                type="text" 
                id="contact-info"
                required
                placeholder=" "
                className={inputClasses}
              />
              <label htmlFor="contact-info" className={labelClasses}>
                {t('form.contact')}
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea 
                id="message"
                required
                rows={4}
                placeholder=" "
                className={`${inputClasses} resize-none`}
              ></textarea>
              <label htmlFor="message" className={labelClasses}>
                {t('form.msg')}
              </label>
            </div>

            <div className="pt-8 flex flex-col items-center space-y-6">
              <button 
                type="submit"
                disabled={status !== 'idle'}
                className="w-full bg-white text-brand-dark px-12 py-6 md:py-5 rounded-sm font-bold uppercase tracking-widest text-base md:text-sm shadow-[0_0_20px_rgba(255,255,255,0.15)] md:shadow-none hover:bg-brand-gray transition-all flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'idle' ? (
                  <>
                    {t('form.send')}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                ) : status === 'submitting' ? (
                  t('form.sending')
                ) : (
                  'Request Sent!'
                )}
              </button>
              
              <div className="space-y-6 w-full flex flex-col items-center">
                <p className="text-white/40 text-xs text-center">
                  {t('form.note')}
                </p>
                
                <div className="w-12 h-px bg-white/10" />
                
                <a 
                  href="https://wa.me/17542990399"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 opacity-80" />
                  {t('form.whatsapp')}
                </a>
              </div>
            </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
