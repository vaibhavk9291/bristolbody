"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Calendar } from "lucide-react";

export function GlobalElements() {
  const [scrollY, setScrollY] = useState(0);
  const [cookieConsent, setCookieConsent] = useState(true);
  
  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setCookieConsent(false);
    else setCookieConsent(true);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setCookieConsent(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating CTA */}
      <AnimatePresence>
        {scrollY > 300 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-4"
          >
            <a 
              href="#book"
              className="bg-brand-teal text-white px-6 py-3.5 rounded-full shadow-xl shadow-brand-teal/20 font-bold flex items-center gap-2 hover:bg-brand-teal/90 transition-colors group"
            >
              <Calendar size={18} className="group-hover:scale-110 transition-transform" />
              <span>Book Now</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top */}
      <AnimatePresence>
        {scrollY > 500 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-6 left-6 z-40"
          >
            <button 
              onClick={scrollToTop}
              className="w-12 h-12 bg-white text-brand-navy shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 border border-gray-100 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Banner */}
      <AnimatePresence>
        {!cookieConsent && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 w-full bg-brand-navy text-white p-4 z-50 border-t border-white/10"
          >
            <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-white/80">
                We use cookies to ensure you get the best experience on our website.
              </p>
              <div className="flex items-center gap-3 shrink-0">
                <button className="text-sm font-medium text-white/60 hover:text-white transition-colors">
                  Manage
                </button>
                <button 
                  onClick={acceptCookies}
                  className="bg-brand-teal text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-brand-teal/90 transition-colors"
                >
                  Accept
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
