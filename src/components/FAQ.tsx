"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const faqs = [
    { q: "Do physiotherapy treatments hurt?", a: "Some techniques may cause mild discomfort, but we always work within your tolerance. We have a range of therapeutic tools to suit every patient." },
    { q: "Does it work for everyone?", a: "We have a very high success rate for musculoskeletal issues. Nothing works for absolutely everyone, but our evidence-based track record speaks for itself." },
    { q: "Is your approach backed by science?", a: "Yes. All our treatments are grounded in the latest evidence-based physiotherapy and rehabilitation research." },
    { q: "Are your staff qualified?", a: "Absolutely. All our clinical staff hold university degrees in Physiotherapy and are registered with relevant professional bodies." },
    { q: "How much does it cost?", a: "The initial consultation and assessment is currently £89. Follow-up sessions depend on your treatment plan." },
    { q: "How many sessions will I need?", a: "This depends on your condition's severity. We will always aim to minimise the sessions needed and give you a clear, honest care plan." },
    { q: "What conditions do you treat?", a: "Back pain, neck pain, sports injuries, post-surgical rehabilitation, knee/ankle pain, and postural issues. Call us if your condition isn't listed." },
    { q: "Is my consultation private?", a: "Yes. Your medical data and consultation details are strictly confidential." },
    { q: "Do I need a doctor's referral?", a: "No, you do not need a referral to see our physiotherapists. You can book directly with us." },
    { q: "What happens after the consultation?", a: "Your physiotherapist will walk you through your personalized recovery plan. There is no obligation to proceed—just honest, expert advice." },
    { q: "What should I wear?", a: "Please wear loose, comfortable clothing that allows us to assess your movement and access the area of concern." },
    { q: "Can I bring someone with me?", a: "Yes, you're welcome to bring a family member or friend to your consultation." }
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
