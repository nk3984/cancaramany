import { HeroSection } from "@/components/HeroSection";
import { StatementSection } from "@/components/StatementSection";
import { EstateMasterplan } from "@/components/EstateMasterplan";
import { PropertiesSection } from "@/components/PropertiesSection";
import { HistoricFincaSection } from "@/components/HistoricFincaSection";
import { LandscapeSection } from "@/components/LandscapeSection";
import { ResidencesSection } from "@/components/ResidencesSection";
import { InfrastructureSection } from "@/components/InfrastructureSection";
import { LocationSection } from "@/components/LocationSection";
import { DataRoomCTA } from "@/components/DataRoomCTA";
import { ClosingSection } from "@/components/ClosingSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatementSection />
      <EstateMasterplan />
      <PropertiesSection />
      <HistoricFincaSection />
      <LandscapeSection />
      <ResidencesSection />
      <InfrastructureSection />
      <LocationSection />
      <DataRoomCTA />
      <ClosingSection />
    </main>
  );
}
