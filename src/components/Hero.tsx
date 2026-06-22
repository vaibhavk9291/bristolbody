"use client";

import { CheckCircle } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative flex w-full flex-col overflow-hidden bg-brand-light text-brand-navy md:flex-row min-h-[600px]">
      <div className="flex w-full flex-col justify-between p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16 xl:p-24 animate-fade-in">
        <div>
          <header className="mb-12">
            <p className="text-xs tracking-wider text-brand-text/70 uppercase font-bold">
              PHYSIOTHERAPY & REHABILITATION SPECIALISTS
            </p>
          </header>

          <main>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-brand-navy md:text-5xl lg:text-6xl mb-8">
              Move Better. <br />
              Recover Faster. <br />
              <span className="text-brand-teal">Live Pain Free.</span>
            </h1>
            <div className="my-8 h-1 w-20 bg-brand-teal rounded-full"></div>
            <div className="mb-10">
              <p className="max-w-lg text-lg text-brand-text/70 mb-6">
                Expert Physiotherapy & Rehabilitation Programs Designed To Restore Mobility, Reduce Pain And Help You Return To Your Best.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Personalized Care",
                  "Evidence-Based Treatment",
                  "Experienced Physiotherapists",
                  "Fast Recovery Plans"
                ].map((indicator, idx) => (
                  <li key={idx} className="flex items-center text-sm font-semibold text-brand-navy">
                    <CheckCircle className="w-5 h-5 text-brand-teal mr-2" />
                    {indicator}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#book" className="inline-block px-8 py-3.5 bg-brand-navy text-white rounded-full text-sm font-bold tracking-widest transition-colors hover:bg-brand-navy/90 shadow-lg shadow-brand-navy/30">
                BOOK CONSULTATION
              </a>
              <a href="https://wa.me/447000000000" className="inline-block px-8 py-3.5 bg-white border-2 border-brand-teal text-brand-teal rounded-full text-sm font-bold tracking-widest transition-colors hover:bg-brand-teal hover:text-white">
                WHATSAPP US
              </a>
            </div>
          </main>
        </div>

        <footer className="mt-16 w-full pt-8 border-t border-brand-navy/5">
          <div className="grid grid-cols-1 gap-6 text-sm font-medium text-brand-text/80 sm:grid-cols-3">
            <div className="flex items-center">
              <span className="mr-2">🌐</span>
              <span>myosyncclinic.com</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">📞</span>
              <span>01908 XXX XXX</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">📍</span>
              <span>Milton Keynes, MK3 6EB</span>
            </div>
          </div>
        </footer>
      </div>

      <div 
        className="w-full min-h-[400px] bg-cover bg-center md:w-1/2 md:min-h-full lg:w-2/5"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
      </div>
    </section>
  );
}
