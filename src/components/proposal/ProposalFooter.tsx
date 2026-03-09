import { motion } from "framer-motion";
import sysdeLogoSrc from "@/assets/sysde-logo.png";

const ProposalFooter = () => (
  <footer className="bg-sysde-dark text-primary-foreground/70 py-12">
    <div className="container px-6 max-w-5xl">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-3">
          <img src={sysdeLogoSrc} alt="SYSDE" className="h-8 brightness-0 invert" />
          <div>
            <p className="font-semibold text-primary-foreground">SYSDE Inc.</p>
            <p className="text-xs opacity-60">FileMaster: Expediente Digital para AFPC Occidente</p>
          </div>
        </div>
      </motion.div>
    </div>
  </footer>
);

export default ProposalFooter;
