import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Reviews } from "@/components/Reviews";
import { Conditions } from "@/components/Conditions";
import { HowItWorks } from "@/components/HowItWorks";
import { Booking } from "@/components/Booking";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { GlobalElements } from "@/components/GlobalElements";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <TrustStrip />
      <Reviews />
      <Conditions />
      <HowItWorks />
      <Booking />
      <FAQ />
      <Contact />
      <Footer />
      <GlobalElements />
    </div>
  );
}
