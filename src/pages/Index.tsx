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
      <div id="propuesta">
        <EconomicProposal />
      </div>
      <ProposalFooter />
      <ProposalChatbot />
    </div>
  );
};

export default Index;
