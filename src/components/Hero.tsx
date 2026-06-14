"use client";

import { HeroSection } from "@/components/ui/hero-section-2";

export function Hero() {
  return (
    <HeroSection
      slogan="EXPERT NMS CARE IN MILTON KEYNES"
      title={
        <>
          Reclaim Your Life <br />
          <span className="text-brand-teal">From Chronic Pain</span>
        </>
      }
      subtitle="Specialised, non-surgical treatment for back pain, sciatica, and nerve conditions. Stop managing symptoms and start fixing the root cause."
      callToAction={{
        text: "BOOK YOUR CONSULTATION",
        href: "#book",
      }}
      backgroundImage="/Screenshot 2026-06-15 023408.png"
      contactInfo={{
        website: "spinebodyhealth.co.uk",
        phone: "01908 XXX XXX",
        address: "Milton Keynes, MK3 6EB",
      }}
    />
  );
}
