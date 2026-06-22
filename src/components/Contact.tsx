"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="py-24 bg-brand-light" id="contact">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">Get In Touch</h2>
          <div className="w-16 h-1 bg-brand-teal mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* LEFT: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full flex flex-col"
          >
            <div className="space-y-8 flex-grow">
              <div className="flex items-start gap-4">
                <div className="bg-brand-teal/10 p-3 rounded-full text-brand-teal shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy mb-1">Address</h4>
                  <p className="text-brand-text/80">MyoSync Clinic, Milton Keynes, MK3 6EB</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-teal/10 p-3 rounded-full text-brand-teal shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy mb-1">Phone</h4>
                  <a href="tel:01908000000" className="text-brand-teal font-medium hover:underline">01908 XXX XXX</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-teal/10 p-3 rounded-full text-brand-teal shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy mb-1">Email</h4>
                  <a href="mailto:info@myosyncclinic.com" className="text-brand-text/80 hover:text-brand-teal transition-colors">info@myosyncclinic.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-teal/10 p-3 rounded-full text-brand-teal shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy mb-1">Hours</h4>
                  <ul className="text-brand-text/80 space-y-1 mt-2">
                    <li className="flex justify-between w-48"><span>Mon–Fri:</span> <span>9:00am – 6:00pm</span></li>
                    <li className="flex justify-between w-48"><span>Saturday:</span> <span>9:00am – 1:00pm</span></li>
                    <li className="flex justify-between w-48"><span>Sunday:</span> <span>Closed</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 w-full h-48 bg-gray-100 rounded-xl overflow-hidden relative border border-gray-200">
              {/* Google Maps placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-center p-4">
                <p className="text-brand-text/50 font-medium text-sm">
                  Google Maps Embed<br/>(Client to add embed code here)
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <CheckCircle2 className="text-green-500 w-16 h-16" />
                <h3 className="text-2xl font-bold text-brand-navy">Thank You!</h3>
                <p className="text-brand-text/80">We&apos;ve received your message and will reply within 1 business day.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-brand-teal font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="c-name" className="block text-sm font-medium text-brand-navy mb-2">Name</label>
                  <input required type="text" id="c-name" className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="c-email" className="block text-sm font-medium text-brand-navy mb-2">Email</label>
                  <input required type="email" id="c-email" className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="c-phone" className="block text-sm font-medium text-brand-navy mb-2">Phone</label>
                  <input required minLength={10} type="tel" id="c-phone" className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all" placeholder="07xxx xxxxxx" />
                </div>
                <div>
                  <label htmlFor="c-msg" className="block text-sm font-medium text-brand-navy mb-2">Message</label>
                  <textarea required id="c-msg" rows={4} className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-navy text-white font-bold py-4 rounded-xl hover:bg-brand-navy/90 transition-colors">
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
