import { HeroSection } from "@/components/sections/hero";
import { CredentialsSection } from "@/components/sections/credentials";
import { AreasSection } from "@/components/sections/areas";
import { MethodSection } from "@/components/sections/method";
import { CasesSection } from "@/components/sections/cases";
import { InsightsSection } from "@/components/sections/insights";
import { AboutSection } from "@/components/sections/about";
import { ContactCTASection } from "@/components/sections/contact-cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CredentialsSection />
      <AreasSection />
      <MethodSection />
      <CasesSection />
      <InsightsSection />
      <AboutSection />
      <ContactCTASection />
    </>
  );
}
