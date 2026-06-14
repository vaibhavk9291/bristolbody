"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setName(formData.get("name") as string || "Patient");
    setIsSubmitted(true);
  };

  return (
    <section className="py-24 bg-brand-light" id="book">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl shadow-brand-navy/5">
          
          {/* LEFT SIDE */}
          <motion.div 
            initial={{ opacity: 0.01, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12 bg-brand-navy p-10 lg:p-14 text-white flex flex-col justify-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="inline-block bg-white/5 border border-white/10 text-white font-medium px-4 py-1.5 rounded-full text-sm mb-6">
                Save 15% Today
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                Book Your NMS Consultation
              </h2>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Super simple to book — takes 2 minutes",
                  "£10 deposit secures your appointment",
                  "Full consultation usually £105 — now £89",
                  "Days and times to suit your schedule",
                  "No obligation — no hard sell"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-brand-teal shrink-0 mt-0.5" size={20} />
                    <span className="font-medium text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-8 border-t border-white/20">
                <p className="text-white/70 text-sm mb-1">Prefer to speak with us?</p>
                <a href="tel:01908000000" className="text-2xl font-bold hover:text-brand-teal transition-colors">
                  01908 XXX XXX
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-7/12 p-10 lg:p-14"
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6 py-10"
              >
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-green-500" size={48} />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy">Thank you, {name}!</h3>
                <p className="text-brand-text/80 leading-relaxed max-w-md">
                  Your request has been received. We&apos;ll contact you within 1 business day to confirm your appointment. Check your email (including spam) for our confirmation.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-brand-teal font-medium hover:underline"
                >
                  Book another appointment
                </button>
              </motion.div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-brand-navy mb-6">Request Your Appointment</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-brand-text/80 mb-1.5">Full Name</label>
                      <input required type="text" id="name" name="name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-brand-text/80 mb-1.5">Phone Number</label>
                      <input required type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal transition-all" placeholder="07xxx xxxxxx" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-text/80 mb-1.5">Email Address</label>
                    <input required type="email" id="email" name="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal transition-all" placeholder="john@example.com" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-brand-text/80 mb-1.5">Best Time to Call</label>
                      <select id="time" name="time" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal transition-all bg-white">
                        <option>Morning (9am - 12pm)</option>
                        <option>Afternoon (12pm - 5pm)</option>
                        <option>Evening (5pm - 7pm)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="condition" className="block text-sm font-medium text-brand-text/80 mb-1.5">Condition</label>
                      <select id="condition" name="condition" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal transition-all bg-white">
                        <option>Back Pain</option>
                        <option>Neck Pain</option>
                        <option>Sciatica</option>
                        <option>Slipped Disc</option>
                        <option>Nerve Pain</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-text/80 mb-1.5">Message (Optional)</label>
                    <textarea id="message" name="message" rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal/50 focus:border-brand-teal transition-all resize-none" placeholder="Briefly describe your symptoms..."></textarea>
                  </div>
                  
                  <div className="flex items-start gap-3 py-2">
                    <input required type="checkbox" id="privacy" className="mt-1 w-4 h-4 text-brand-teal focus:ring-brand-teal border-gray-300 rounded" />
                    <label htmlFor="privacy" className="text-sm text-brand-text/70">
                      I agree to the Privacy Policy and consent to being contacted regarding my appointment request.
                    </label>
                  </div>
                  
                  <button type="submit" className="w-full bg-brand-teal text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-teal/90 transition-colors shadow-lg shadow-brand-teal/20">
                    Book My Consultation →
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <a href="https://spinebodyhealth.neptune.practicehub.io/p/booking" target="_blank" rel="noopener noreferrer" className="text-brand-navy font-semibold hover:text-brand-teal transition-colors">
                    Prefer to book instantly online? → <span className="underline">Book Online Now</span>
                  </a>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
