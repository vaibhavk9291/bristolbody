"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "I spent years being told by the NHS I'd just have to manage my pain. 6 weeks with Spine, Body & Health and I can move like I'm 20 again. Absolutely life-changing.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sarah M.",
    role: "Verified Patient",
  },
  {
    text: "It's amazing — I can walk again without pain! Thanks to them I can play golf again. The team genuinely cares about getting you better, not just treating symptoms.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "James T.",
    role: "Verified Patient",
  },
  {
    text: "Professional, thorough and results-driven. Unlike any clinic I've visited before. My sciatica is gone after years of suffering. Can't recommend highly enough.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Rachel K.",
    role: "Verified Patient",
  },
  {
    text: "The nerve testing they do finds things others miss entirely. My shoulder pain was actually caused by a pelvis issue — who knew! Sorted in weeks.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    name: "David P.",
    role: "Verified Patient",
  },
  {
    text: "Friendly, welcoming, and incredibly knowledgeable. The regenerative approach makes so much more sense than just taking painkillers forever.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Emma W.",
    role: "Verified Patient",
  },
  {
    text: "The best NMS clinic in Milton Keynes by far. After a few sessions of their integration therapy, my chronic lower back pain has completely vanished.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Michael R.",
    role: "Verified Patient",
  },
  {
    text: "I was skeptical at first, but their science-backed approach works wonders. The clinical team is fantastic and they explain everything so clearly.",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    name: "Sophie L.",
    role: "Verified Patient",
  },
  {
    text: "Finally, a place that actually fixes the root cause rather than just masking it. No more constant painkillers for my neck stiffness!",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Thomas B.",
    role: "Verified Patient",
  },
  {
    text: "A truly premium experience from the moment you walk in. Worth every penny for the quality of care and the long-term results you get.",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    name: "Olivia H.",
    role: "Verified Patient",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Reviews() {
  return (
    <section id="reviews" className="bg-brand-light py-24 relative overflow-hidden">
      <div className="container z-10 mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center max-w-[600px] mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <span className="inline-block bg-white border border-brand-navy/10 text-brand-navy font-semibold px-4 py-1.5 rounded-full text-sm shadow-sm flex items-center gap-2">
              <Star className="text-yellow-400 fill-yellow-400" size={14} />
              4.9/5 Average Rating
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy mt-2">
            What Our Patients Say
          </h2>
          <p className="mt-5 text-lg text-brand-text/70">
            Based on 150+ Verified Google Reviews from patients who reclaimed their lives.
          </p>
        </motion.div>

        <div className="relative flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] h-[740px] max-h-[740px] overflow-hidden isolate">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={30} />
        </div>
      </div>
    </section>
  );
}
