import { HeroSection } from "@/components/HeroSection";
import { OfferSection } from "@/components/OfferSection";
import { EstateMasterplan } from "@/components/EstateMasterplan";
import { PropertiesSection } from "@/components/PropertiesSection";
import { PlanningSection } from "@/components/PlanningSection";
import { InfrastructureSection } from "@/components/InfrastructureSection";
import { LimitedOpportunitySection } from "@/components/LimitedOpportunitySection";
import { LocationSection } from "@/components/LocationSection";
import { DataRoomCTA } from "@/components/DataRoomCTA";
import { ClosingSection } from "@/components/ClosingSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <OfferSection />
      <EstateMasterplan />
      <PropertiesSection />
      <PlanningSection />
      <InfrastructureSection />
      <LimitedOpportunitySection />
      <LocationSection />
      <DataRoomCTA />
      <ClosingSection />
    </main>
  );
}
