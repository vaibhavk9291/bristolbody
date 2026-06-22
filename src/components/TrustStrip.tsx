import { Activity, Dumbbell, PersonStanding, ClipboardList } from "lucide-react";

export function TrustStrip() {
  const items = [
    {
      icon: <Activity size={32} className="text-brand-teal" />,
      title: "Pain Relief",
      subtitle: "Target the root cause, not just symptoms."
    },
    {
      icon: <Dumbbell size={32} className="text-brand-teal" />,
      title: "Sports Rehabilitation",
      subtitle: "Get back to peak performance safely."
    },
    {
      icon: <PersonStanding size={32} className="text-brand-teal" />,
      title: "Posture Correction",
      subtitle: "Improve movement and prevent recurring pain."
    },
    {
      icon: <ClipboardList size={32} className="text-brand-teal" />,
      title: "Personalized Recovery",
      subtitle: "Custom treatment plans built for you."
    }
  ];

  return (
    <section id="about" className="bg-gray-50 py-20 border-y border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold md:text-4xl text-brand-navy tracking-tight mb-4">
            Why People Choose MyoSync
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 group">
              <div className="mb-6 bg-brand-light p-5 rounded-full text-brand-teal group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-bold text-brand-navy text-xl mb-3">{item.title}</h3>
              <p className="text-base text-brand-text/70">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
