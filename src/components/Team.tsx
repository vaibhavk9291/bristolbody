"use client";

import { motion } from "framer-motion";

export function Team() {
  const teamMembers = [
    {
      name: "Dr. Emily Chen",
      role: "Founder & Lead Physiotherapist",
      image: "https://images.unsplash.com/photo-1594824432258-f938d8ac4448?q=80&w=800&auto=format&fit=crop",
      bio: "15+ years of experience specializing in chronic pain and complex spinal conditions. Former Olympic team physiotherapist."
    },
    {
      name: "James Wilson",
      role: "Senior Physiotherapist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
      bio: "Expert in post-surgical rehabilitation and orthopedic care, ensuring safe and efficient recovery protocols."
    },
    {
      name: "Sarah Jenkins",
      role: "Sports Rehab Specialist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
      bio: "Dedicated to helping athletes return to peak performance with targeted biomechanical and strength analysis."
    }
  ];

  return (
    <section id="team" className="py-24 bg-brand-light">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Meet The Team</h2>
          <p className="text-lg text-brand-text/70 max-w-2xl mx-auto">
            Our clinic is staffed by highly qualified, evidence-based professionals dedicated to getting you back to moving pain-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-navy/5 group"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8 text-center md:text-left">
                <h3 className="text-2xl font-bold text-brand-navy mb-1">{member.name}</h3>
                <p className="text-brand-teal font-semibold text-sm uppercase tracking-wider mb-4">{member.role}</p>
                <p className="text-brand-text/70 leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
