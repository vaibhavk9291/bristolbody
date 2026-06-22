import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-20 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1 */}
          <div className="flex flex-col gap-6">
            <div className="text-2xl font-bold text-white tracking-tight">
              Myo<span className="text-brand-blue">Sync</span> Clinic
            </div>
            <p className="text-white/70 leading-relaxed">
              Expert physiotherapy and rehabilitation services. Evidence-based. Results-focused.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-teal transition-colors" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-bold text-lg mb-6">QUICK LINKS</h4>
            <ul className="space-y-3 text-white/70">
              <li><Link href="#about" className="hover:text-brand-teal transition-colors">Why Choose Us</Link></li>
              <li><Link href="#services" className="hover:text-brand-teal transition-colors">Our Services</Link></li>
              <li><Link href="#team" className="hover:text-brand-teal transition-colors">Meet The Team</Link></li>
              <li><Link href="#gallery" className="hover:text-brand-teal transition-colors">Clinic Gallery</Link></li>
              <li><Link href="#testimonials" className="hover:text-brand-teal transition-colors">Success Stories</Link></li>
              <li><Link href="#contact" className="hover:text-brand-teal transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-bold text-lg mb-6">SERVICES</h4>
            <ul className="space-y-3 text-white/70">
              <li><Link href="#services" className="hover:text-brand-teal transition-colors">Back Pain Treatment</Link></li>
              <li><Link href="#services" className="hover:text-brand-teal transition-colors">Sports Injury Rehab</Link></li>
              <li><Link href="#services" className="hover:text-brand-teal transition-colors">Neck Pain Relief</Link></li>
              <li><Link href="#services" className="hover:text-brand-teal transition-colors">Post Surgical Rehab</Link></li>
              <li><Link href="#services" className="hover:text-brand-teal transition-colors">Posture Correction</Link></li>
              <li><Link href="#services" className="hover:text-brand-teal transition-colors">Manual Therapy</Link></li>
              <li><Link href="#services" className="hover:text-brand-teal transition-colors">Dry Needling</Link></li>
              <li><Link href="#services" className="hover:text-brand-teal transition-colors">Strength & Conditioning</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-bold text-lg mb-6">CONTACT</h4>
            <ul className="space-y-3 text-white/70 mb-8">
              <li><a href="tel:01908000000" className="text-brand-teal font-medium hover:underline">01908 XXX XXX</a></li>
              <li><a href="mailto:info@myosyncclinic.com" className="hover:text-brand-teal transition-colors">info@myosyncclinic.com</a></li>
              <li>MyoSync Clinic<br/>Milton Keynes, MK3 6EB</li>
            </ul>
            <Link href="/#book" className="inline-block border-2 border-brand-teal text-brand-teal px-6 py-2.5 rounded-full font-semibold hover:bg-brand-teal hover:text-white transition-colors">
              Book Consultation
            </Link>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
          <p>© 2025 MyoSync Clinic. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
