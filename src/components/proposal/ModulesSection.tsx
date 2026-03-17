import { motion } from "framer-motion";
import {
  Workflow, FileText, History, Shield, Users,
  Layers, Code2, Globe, Puzzle, Bell,
  Contact, ClipboardList, RefreshCw,
  HeadphonesIcon, MessageSquare, TicketCheck,
  Award, Search, FileCheck,
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

const additionalProcesses = [
  {
    label: "Atención al Afiliado",
    icon: HeadphonesIcon,
    bg: "bg-[hsl(var(--flow-teal))]",
    lightBg: "bg-[hsl(var(--flow-teal-light))]",
    border: "border-[hsl(var(--flow-teal)/0.3)]",
    textColor: "text-[hsl(var(--flow-teal))]",
    leaves: [
      { label: "Solicitudes", icon: MessageSquare },
      { label: "Reclamos", icon: TicketCheck },
      { label: "Seguimiento de Casos", icon: Search },
    ],
  },
  {
    label: "Procesos ISO",
    icon: Award,
    bg: "bg-[hsl(var(--flow-green))]",
    lightBg: "bg-[hsl(var(--flow-green-light))]",
    border: "border-[hsl(var(--flow-green)/0.3)]",
    textColor: "text-[hsl(var(--flow-green))]",
    leaves: [
      { label: "Auditorías", icon: FileCheck },
      { label: "No Conformidades", icon: ClipboardList },
      { label: "Control de Calidad", icon: Shield },
    ],
  },
];

const ModulesSection = () => {
  return (
    <section className="py-16 md:py-28 bg-background">
      <div className="container px-4 md:px-6 max-w-5xl">
        <motion.div {...fade()} className="text-center mb-10 md:mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-sysde-red mb-2">Funcionalidades</h2>
          <h3 className="text-2xl md:text-5xl font-bold tracking-tight text-foreground mb-3 md:mb-4">
            Plataforma FileMaster
          </h3>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Cada módulo es configurable sin código y se adapta a los procesos de afiliación, atención al afiliado, gestión ISO y operación de AFPC Occidente.
          </p>
        </motion.div>

        {/* Concentric layout — center outward */}
        <motion.div {...fade(0.1)} className="flex flex-col items-center">
          {/* Core — FileMaster */}
          <motion.div
            className="relative z-10 w-28 h-28 md:w-40 md:h-40 rounded-full bg-sysde-red text-primary-foreground flex flex-col items-center justify-center shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Workflow className="h-6 w-6 md:h-8 md:w-8 mb-1" />
            <p className="text-base md:text-lg font-bold leading-tight">FileMaster</p>
            <p className="text-[8px] md:text-[9px] opacity-80 mt-0.5">Automatización</p>
          </motion.div>

          {/* Ring 1 — Core Branches: vertical on mobile, grid on md+ */}
          <div className="relative -mt-4 md:-mt-8 z-0 w-full">
            {/* Faint ring behind — hidden on mobile */}
            <div className="absolute inset-0 hidden md:flex items-center justify-center pointer-events-none">
              <div className="w-[420px] h-[420px] rounded-full border-2 border-dashed border-border/40" />
            </div>

            <div className="flex flex-col gap-5 md:grid md:grid-cols-3 md:gap-8 pt-6 md:pt-14 max-w-2xl mx-auto px-2 md:px-0">
              {branches.map((branch, bi) => (
                <motion.div
                  key={branch.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + bi * 0.12 }}
                  className="flex flex-row md:flex-col items-center md:text-center gap-3 md:gap-0"
                >
                  <div className={`w-14 h-14 md:w-20 md:h-20 rounded-full ${branch.bg} text-primary-foreground flex flex-col items-center justify-center shadow-lg flex-shrink-0`}>
                    <branch.icon className="h-4 w-4 md:h-6 md:w-6 mb-0.5" />
                    <p className="text-[7px] md:text-[10px] font-bold leading-tight px-1">{branch.label}</p>
                  </div>

                  {/* Leaves — horizontal wrap on mobile, vertical on md+ */}
                  <div className="flex flex-wrap gap-1.5 md:mt-3 md:flex-col md:w-full">
                    {branch.leaves.map((leaf, li) => (
                      <motion.div
                        key={leaf.label}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.35 + bi * 0.1 + li * 0.06 }}
                        className={`flex items-center gap-1.5 px-2.5 py-1.5 md:px-3 md:py-2 rounded-full border ${branch.border} ${branch.lightBg} text-xs font-medium md:justify-center`}
                      >
                        <leaf.icon className={`h-3 w-3 md:h-3.5 md:w-3.5 ${branch.textColor} flex-shrink-0`} />
                        <span className="text-foreground text-[10px] md:text-[11px]">{leaf.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Ring 2 — Additional Processes */}
          <motion.div {...fade(0.3)} className="w-full mt-8 md:mt-12">
            <div className="flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-8 max-w-xl mx-auto px-2 md:px-0">
              {additionalProcesses.map((proc, pi) => (
                <motion.div
                  key={proc.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + pi * 0.12 }}
                  className="flex flex-row md:flex-col items-center md:text-center gap-3 md:gap-0"
                >
                  <div className={`w-14 h-14 md:w-20 md:h-20 rounded-full ${proc.bg} text-primary-foreground flex flex-col items-center justify-center shadow-lg flex-shrink-0`}>
                    <proc.icon className="h-4 w-4 md:h-6 md:w-6 mb-0.5" />
                    <p className="text-[7px] md:text-[10px] font-bold leading-tight px-1">{proc.label}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 md:mt-3 md:flex-col md:w-full">
                    {proc.leaves.map((leaf, li) => (
                      <motion.div
                        key={leaf.label}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + pi * 0.1 + li * 0.06 }}
                        className={`flex items-center gap-1.5 px-2.5 py-1.5 md:px-3 md:py-2 rounded-full border ${proc.border} ${proc.lightBg} text-xs font-medium md:justify-center`}
                      >
                        <leaf.icon className={`h-3 w-3 md:h-3.5 md:w-3.5 ${proc.textColor} flex-shrink-0`} />
                        <span className="text-foreground text-[10px] md:text-[11px]">{leaf.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom capabilities */}
          <motion.div
            {...fade(0.4)}
            className="flex flex-wrap justify-center gap-2 md:gap-3 mt-8 md:mt-10"
          >
            {[
              { icon: Code2, label: "API REST" },
              { icon: Globe, label: "100% Web" },
              { icon: Users, label: "20 Usuarios" },
              { icon: Shield, label: "Seguridad" },
            ].map((cap) => (
              <div
                key={cap.label}
                className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-border bg-muted/50 text-[10px] md:text-xs font-medium text-muted-foreground"
              >
                <cap.icon className="h-3 w-3 md:h-3.5 md:w-3.5" />
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
