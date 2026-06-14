import { MapPin, Star, Phone } from "lucide-react";

export function TopUtilityBar() {
  return (
    <div className="bg-brand-navy text-white h-10 text-sm hidden md:flex items-center justify-between px-6 lg:px-12 w-full">
      <div className="flex items-center gap-2">
        <MapPin size={16} className="text-brand-teal" />
        <span>Milton Keynes, MK3 6EB</span>
      </div>
      <div className="flex items-center gap-2">
        <Star size={16} className="text-brand-teal" fill="currentColor" />
        <span>4.9/5 Google Rating — Trusted by 21,000+ patients</span>
      </div>
      <div className="flex items-center gap-2 text-brand-teal font-medium hover:text-white transition-colors">
        <Phone size={16} />
        <a href="#book" className="hover:text-brand-teal transition-colors font-medium flex items-center gap-2">
          <span>01908 XXX XXX</span>
        </a>
      </div>
    </div>
  );
}
