import { motion } from "framer-motion";
import {
  Workflow, FileText, History, Shield, Users,
  Layers, Code2, Globe, Puzzle, Bell,
  Contact, ClipboardList, RefreshCw,
} from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.5, delay },
});

const branches = [
  {
    label: "Gestión de Flujos",
    desc: "Diseño visual No-Code",
    icon: Workflow,
    bg: "bg-[hsl(var(--flow-blue))]",
    lightBg: "bg-[hsl(var(--flow-blue-light))]",
    border: "border-[hsl(var(--flow-blue)/0.3)]",
    textColor: "text-[hsl(var(--flow-blue))]",
    leaves: [
      { label: "Ficha del Expediente", icon: ClipboardList },
      { label: "Documentos", icon: FileText },
    ],
  },
  {
    label: "Ciclo de Vida",
    desc: "Etapas y estados",
    icon: RefreshCw,
    bg: "bg-[hsl(var(--flow-purple))]",
    lightBg: "bg-[hsl(var(--flow-purple-light))]",
    border: "border-[hsl(var(--flow-purple)/0.3)]",
    textColor: "text-[hsl(var(--flow-purple))]",
    leaves: [
      { label: "Bitácora", icon: History },
      { label: "Roles y Perfiles", icon: Shield },
    ],
  },
  {
    label: "Colecciones",
    desc: "Organización de datos",
    icon: Layers,
    bg: "bg-[hsl(var(--flow-orange))]",
    lightBg: "bg-[hsl(var(--flow-orange-light))]",
    border: "border-[hsl(var(--flow-orange)/0.3)]",
    textColor: "text-[hsl(var(--flow-orange))]",
    leaves: [
      { label: "CRM", icon: Contact },
      { label: "Notificaciones", icon: Bell },
      { label: "Integraciones", icon: Puzzle },
    ],
  },
];

const ModulesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-6 max-w-5xl">
        <motion.div {...fade()} className="text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-sysde-red mb-2">Funcionalidades</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Plataforma FileMaster
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cada módulo es configurable sin código y se adapta a los procesos de afiliación y operación de AFPC Occidente.
          </p>
        </motion.div>

        {/* Concentric layout — center outward */}
        <motion.div {...fade(0.1)} className="flex flex-col items-center">
          {/* Core — FileMaster */}
          <motion.div
            className="relative z-10 w-40 h-40 rounded-full bg-sysde-red text-primary-foreground flex flex-col items-center justify-center shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Workflow className="h-8 w-8 mb-1" />
            <p className="text-lg font-bold leading-tight">FileMaster</p>
            <p className="text-[9px] opacity-80 mt-0.5">Automatización</p>
          </motion.div>

          {/* Ring 1 — Branches */}
          <div className="relative -mt-8 z-0">
            {/* Faint ring behind */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full border-2 border-dashed border-border/40" />
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-14 max-w-2xl mx-auto">
              {branches.map((branch, bi) => (
                <motion.div
                  key={branch.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + bi * 0.12 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${branch.bg} text-primary-foreground flex flex-col items-center justify-center shadow-lg`}>
                    <branch.icon className="h-5 w-5 md:h-6 md:w-6 mb-0.5" />
                    <p className="text-[8px] md:text-[10px] font-bold leading-tight px-1">{branch.label}</p>
                  </div>

                  {/* Leaves below each branch */}
                  <div className="mt-3 space-y-1.5 w-full">
                    {branch.leaves.map((leaf, li) => (
                      <motion.div
                        key={leaf.label}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.35 + bi * 0.1 + li * 0.06 }}
                        className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-full border ${branch.border} ${branch.lightBg} text-xs font-medium`}
                      >
                        <leaf.icon className={`h-3.5 w-3.5 ${branch.textColor} flex-shrink-0`} />
                        <span className="text-foreground text-[11px]">{leaf.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom capabilities */}
          <motion.div
            {...fade(0.4)}
            className="flex flex-wrap justify-center gap-3 mt-10"
          >
            {[
              { icon: Code2, label: "API REST" },
              { icon: Globe, label: "100% Web" },
              { icon: Users, label: "20 Usuarios" },
              { icon: Shield, label: "Seguridad" },
            ].map((cap) => (
              <div
                key={cap.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 text-xs font-medium text-muted-foreground"
              >
                <cap.icon className="h-3.5 w-3.5" />
                {cap.label}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModulesSection;
