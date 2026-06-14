import { Award, Dna, ShieldOff, Star } from "lucide-react";

export function TrustStrip() {
  const items = [
    {
      icon: <Award size={28} className="text-brand-teal" />,
      title: "42 Years Combined Expertise",
      subtitle: "Industry leading specialists"
    },
    {
      icon: <Dna size={28} className="text-brand-teal" />,
      title: "Precision Nerve System Testing",
      subtitle: "Accurate diagnostics"
    },
    {
      icon: <ShieldOff size={28} className="text-brand-teal" />,
      title: "No Surgery. No Drugs.",
      subtitle: "Natural recovery"
    },
    {
      icon: <Star size={28} className="text-brand-teal" fill="currentColor" />,
      title: "4.9 Google Rating",
      subtitle: "From verified patients"
    }
  ];

  return (
    <section id="about" className="bg-gray-50 py-12 border-y border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-gray-200">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="mb-4 bg-white p-4 rounded-full shadow-sm border border-gray-100 text-brand-teal">
                {item.icon}
              </div>
              <h3 className="font-bold text-brand-navy text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-brand-text/70">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
