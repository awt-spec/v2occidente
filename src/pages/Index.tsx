import { useState, useCallback, useEffect } from "react";
import { Maximize2, Minimize2 } from "lucide-react";
import ProposalNav from "@/components/proposal/ProposalNav";
import ProposalHero from "@/components/proposal/ProposalHero";
import ExecutiveLetter from "@/components/proposal/ExecutiveLetter";
import ModulesSection from "@/components/proposal/ModulesSection";
import BenefitsAndInfra from "@/components/proposal/BenefitsAndInfra";
import EconomicProposal from "@/components/proposal/EconomicProposal";
import SupportSection from "@/components/proposal/SupportSection";
import VisionAndTimeline from "@/components/proposal/VisionAndTimeline";
import ProposalFooter from "@/components/proposal/ProposalFooter";
import ProposalChatbot from "@/components/proposal/ProposalChatbot";

const Index = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ProposalNav />
      <ProposalHero />
      <div id="presentacion">
        <ExecutiveLetter />
      </div>
      <div id="modulos">
        <ModulesSection />
      </div>
      <div id="beneficios">
        <BenefitsAndInfra />
      </div>
      <div id="vision">
        <VisionAndTimeline />
      </div>
      <SupportSection />
      <div id="propuesta">
        <EconomicProposal />
      </div>
      <ProposalFooter />
      <ProposalChatbot />

      {/* Fullscreen toggle */}
      <button
        onClick={toggleFullscreen}
        className="fixed bottom-6 left-6 z-50 p-3 rounded-full bg-card border border-border shadow-lg hover:shadow-xl transition-all hover:scale-105 text-muted-foreground hover:text-foreground"
        title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
      >
        {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
      </button>
    </div>
  );
};

export default Index;
