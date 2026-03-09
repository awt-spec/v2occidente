import { motion } from "framer-motion";
import sysdeLogoSrc from "@/assets/sysde-logo.png";

const ProposalHero = () => (
  <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-sysde text-primary-foreground overflow-hidden">
    <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-background" style={{ clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)" }} />

    <motion.div
      className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full border border-primary-foreground/5"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    />
    <motion.div
      className="absolute top-1/3 right-1/3 w-[300px] h-[300px] rounded-full border border-primary-foreground/5"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
    />

    <div className="container relative z-10 px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <motion.img
          src={sysdeLogoSrc}
          alt="SYSDE Logo"
          className="h-10 md:h-12 mb-12 brightness-0 invert"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        />

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight leading-[0.95] mb-2"
          >
            FILEMASTER
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[0.95] mb-10"
          >
            EXPEDIENTE DIGITAL
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-8 mb-16"
        >
          <div>
            <span className="text-sm opacity-70 block mb-1">Preparado por:</span>
            <span className="font-bold text-lg">SYSDE</span>
          </div>
          <div className="w-px bg-primary-foreground/20 hidden sm:block" />
          <div>
            <span className="text-sm opacity-70 block mb-1">Preparado para:</span>
            <span className="font-bold text-lg">AFP OCCIDENTE</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-sm"
        >
          <p className="opacity-80 max-w-2xl leading-relaxed">
            Desarrollo e implementación de flujos digitales para AFP Occidente: Afiliación, procesos ISO y más.
          </p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default ProposalHero;
