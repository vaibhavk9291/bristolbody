"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const faqs = [
    { q: "Does the treatment hurt?", a: "Yes it can, but pain-free options are available. We have a range of therapeutic tools to suit every tolerance level." },
    { q: "Does it work for everyone?", a: "88% of our patients get better — significantly higher than spinal surgery (24% success rate). Nothing works for everyone, but our track record speaks for itself." },
    { q: "Is it backed by science?", a: "Yes. Our Neuro-Sync Regenerative Integration (NSRI) approach is grounded in extensive scientific evidence. Read more on our website." },
    { q: "Are your staff qualified?", a: "All clinical staff hold healthcare degrees and multiple post-graduate certifications. Our lead practitioners are NMS Consultants." },
    { q: "How much does it cost?", a: "The consultation is currently £89 (usually £105). Long-term cost depends on your condition — we always aim to minimise the number of visits." },
    { q: "How many sessions will I need?", a: "This depends on your condition's severity and your response. We'll always minimise sessions needed and give you a clear care plan." },
    { q: "What conditions do you treat?", a: "Back pain, neck pain, sciatica, slipped discs, nerve pain, migraines, knee/ankle pain and more. Call us if your condition isn't listed." },
    { q: "Is my consultation private?", a: "Absolutely. Your data and consultation details are completely confidential." },
    { q: "Is there a contract?", a: "No. We never bind clients to contracts. You can start and stop as your life requires." },
    { q: "What happens after the consultation?", a: "Your specialist walks you through your recommended care plan. No obligation to proceed — just honest, expert advice." },
    { q: "Can I bring someone with me?", a: "Yes, you're welcome to bring a family member, friend or carer to your consultation." },
    { q: "What is NSRI?", a: "Neuro-Sync Regenerative Integration synchronises brain-body communication, removes neurological interference and allows your body to enter a natural regenerative phase." }
  ];

  const mid = Math.ceil(faqs.length / 2);
  const leftCol = faqs.slice(0, mid);
  const rightCol = faqs.slice(mid);

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Got Questions? We Have Answers.</h2>
          <p className="text-lg text-brand-text/70">Everything you need to know before booking.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col gap-4">
            {leftCol.map((faq, i) => <FAQItem key={`left-${i}`} {...faq} />)}
          </div>
          <div className="flex flex-col gap-4">
            {rightCol.map((faq, i) => <FAQItem key={`right-${i}`} {...faq} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-brand-light/50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-brand-navy pr-4">{q}</span>
        <ChevronDown 
          size={20} 
          className={`text-brand-teal transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-5 pt-0 text-brand-text/80 bg-white">
              <div className="pt-2 border-t border-gray-100 leading-relaxed">
                {a}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
