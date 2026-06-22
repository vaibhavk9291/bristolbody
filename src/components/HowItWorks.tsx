"use client";

import { Stethoscope, ActivitySquare, ClipboardCheck, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export function HowItWorks() {
  const steps = [
    {
      icon: <Stethoscope size={40} className="text-brand-teal" />,
      title: "Comprehensive Assessment",
      desc: "Detailed evaluation of your medical history, pain points, and physical limitations."
    },
    {
      icon: <ActivitySquare size={40} className="text-brand-teal" />,
      title: "Movement Analysis",
      desc: "Biomechanical testing to identify compensations and root causes of your symptoms."
    },
    {
      icon: <ClipboardCheck size={40} className="text-brand-teal" />,
      title: "Personalized Treatment Plan",
      desc: "Custom hands-on therapy and exercise programming designed specifically for your body."
    },
    {
      icon: <TrendingUp size={40} className="text-brand-teal" />,
      title: "Recovery & Performance",
      desc: "Continuous tracking and progression to ensure you not only recover but thrive."
    }
  ];

  return (
    <section id="treatment" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Our Approach</h2>
          <p className="text-lg text-brand-text/70">A proven, 4-step pathway to pain-free movement and recovery.</p>
        </motion.div>

        <div className="relative flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 max-w-5xl mx-auto">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-brand-light border-t-2 border-dashed border-gray-200 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center lg:w-1/4 px-4"
            >
              {/* Connecting arrow for mobile */}
              {index > 0 && (
                <div className="lg:hidden w-px h-8 bg-gray-200 mb-4 border-l-2 border-dashed border-gray-200 relative">
                   <div className="absolute -bottom-2 -left-1.5 w-3 h-3 border-r-2 border-b-2 border-gray-300 rotate-45" />
                </div>
              )}
              
              <div className="w-24 h-24 bg-brand-light rounded-full flex items-center justify-center text-4xl shadow-sm border border-gray-100 mb-6 relative">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-teal text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-white shadow-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{step.title}</h3>
              <p className="text-brand-text/70 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
