import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Conditions } from "@/components/Conditions";
import { HowItWorks } from "@/components/HowItWorks";
import { Statistics } from "@/components/Statistics";
import { Reviews } from "@/components/Reviews";
import { Team } from "@/components/Team";
import { Gallery } from "@/components/Gallery";
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
      <Conditions />
      <HowItWorks />
      <Statistics />
      <Reviews />
      <Team />
      <Gallery />
      <Booking />
      <FAQ />
      <Contact />
      <Footer />
      <GlobalElements />
    </div>
  );
}
