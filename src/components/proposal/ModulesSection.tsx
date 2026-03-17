import { motion } from "framer-motion";
import {
  Workflow, FileText, History, Shield, Users,
  Layers, Code2, Globe, Puzzle, Bell,
  Contact, ClipboardList, RefreshCw,
  HeadphonesIcon, MessageSquare, TicketCheck,
  Award, Search, FileCheck, FolderOpen,
} from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.5, delay },
});

const topModules = [
  {
    label: "Expediente",
    icon: FolderOpen,
    bg: "bg-sysde-red",
    leaves: [
      { label: "Ficha del Expediente", icon: ClipboardList },
      { label: "Documentos", icon: FileText },
    ],
    leafColor: "border-sysde-red/20 bg-sysde-red/5",
    leafIcon: "text-sysde-red",
  },
  {
    label: "Ciclo de Vida",
    icon: RefreshCw,
    bg: "bg-[hsl(var(--flow-purple))]",
    leaves: [
      { label: "Roles y Perfiles", icon: Shield },
      { label: "Bitácora", icon: History },
    ],
    leafColor: "border-[hsl(var(--flow-purple)/0.2)] bg-[hsl(var(--flow-purple-light))]",
    leafIcon: "text-[hsl(var(--flow-purple))]",
  },
  {
    label: "Colecciones",
    icon: Layers,
    bg: "bg-[hsl(var(--flow-orange))]",
    leaves: [
      { label: "CRM Básico", icon: Contact },
      { label: "Notificaciones", icon: Bell },
    ],
    leafColor: "border-[hsl(var(--flow-orange)/0.2)] bg-[hsl(var(--flow-orange-light))]",
    leafIcon: "text-[hsl(var(--flow-orange))]",
  },
];

const bottomModules = [
  {
    label: "Atención al Afiliado",
    icon: HeadphonesIcon,
    bg: "bg-[hsl(var(--flow-teal))]",
    leaves: [
      { label: "Solicitudes", icon: MessageSquare },
      { label: "Reclamos", icon: TicketCheck },
      { label: "Seguimiento", icon: Search },
    ],
    leafColor: "border-[hsl(var(--flow-teal)/0.2)] bg-[hsl(var(--flow-teal-light))]",
    leafIcon: "text-[hsl(var(--flow-teal))]",
  },
  {
    label: "Procesos ISO",
    icon: Award,
    bg: "bg-[hsl(var(--flow-green))]",
    leaves: [
      { label: "Auditorías", icon: FileCheck },
      { label: "No Conformidades", icon: ClipboardList },
      { label: "Control de Calidad", icon: Shield },
    ],
    leafColor: "border-[hsl(var(--flow-green)/0.2)] bg-[hsl(var(--flow-green-light))]",
    leafIcon: "text-[hsl(var(--flow-green))]",
  },
  {
    label: "Integraciones",
    icon: Puzzle,
    bg: "bg-[hsl(var(--flow-blue))]",
    leaves: [
      { label: "API REST", icon: Code2 },
      { label: "Webhooks", icon: Globe },
    ],
    leafColor: "border-[hsl(var(--flow-blue)/0.2)] bg-[hsl(var(--flow-blue-light))]",
    leafIcon: "text-[hsl(var(--flow-blue))]",
  },
];

/* Connector line (vertical) */
const VLine = ({ className = "" }: { className?: string }) => (
  <div className={`w-px h-6 md:h-8 bg-border mx-auto ${className}`} />
);

/* Connector dot */
const Dot = () => (
  <div className="w-2 h-2 rounded-full bg-sysde-red/40 mx-auto" />
);

const ModuleCard = ({
  mod,
  delay,
}: {
  mod: (typeof topModules)[0];
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="flex flex-col items-center"
  >
    {/* Circle */}
    <div
      className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${mod.bg} text-primary-foreground flex flex-col items-center justify-center shadow-lg`}
    >
      <mod.icon className="h-5 w-5 md:h-6 md:w-6 mb-0.5" />
      <p className="text-[7px] md:text-[9px] font-bold leading-tight text-center px-1">
        {mod.label}
      </p>
    </div>

    {/* Connector */}
    <VLine />

    {/* Leaves */}
    <div className="flex flex-col gap-1.5 w-full">
      {mod.leaves.map((leaf) => (
        <div
          key={leaf.label}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${mod.leafColor} text-xs font-medium justify-center`}
        >
          <leaf.icon className={`h-3.5 w-3.5 ${mod.leafIcon} flex-shrink-0`} />
          <span className="text-foreground text-[11px]">{leaf.label}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

const ModulesSection = () => {
  return (
    <section className="py-16 md:py-28 bg-background">
      <div className="container px-4 md:px-6 max-w-5xl">
        {/* Header */}
        <motion.div {...fade()} className="text-center mb-10 md:mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-sysde-red mb-2">
            Funcionalidades
          </h2>
          <h3 className="text-2xl md:text-5xl font-bold tracking-tight text-foreground mb-3 md:mb-4">
            Plataforma FileMaster
          </h3>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Cada módulo es configurable sin código y se adapta a los procesos de
            AFP Occidente: afiliación, atención al afiliado, gestión ISO, CRM y
            más.
          </p>
        </motion.div>

        {/* Flow Diagram */}
        <div className="flex flex-col items-center">
          {/* Central node — Gestión de Flujos */}
          <motion.div
            className="relative z-10 w-32 h-32 md:w-40 md:h-40 rounded-full bg-sysde-red text-primary-foreground flex flex-col items-center justify-center shadow-2xl ring-4 ring-sysde-red/20"
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <Workflow className="h-7 w-7 md:h-9 md:w-9 mb-1" />
            <p className="text-sm md:text-base font-bold leading-tight text-center">
              Gestión de
            </p>
            <p className="text-sm md:text-base font-bold leading-tight text-center">
              Flujos
            </p>
            <p className="text-[8px] md:text-[10px] opacity-75 mt-0.5">
              No-Code
            </p>
          </motion.div>

          {/* Connectors from center down to top modules */}
          <motion.div
            {...fade(0.15)}
            className="flex items-center justify-center gap-0 w-full max-w-2xl"
          >
            {/* Three branches via SVG */}
            <svg
              viewBox="0 0 600 60"
              className="w-full h-10 md:h-14"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Center line */}
              <line x1="300" y1="0" x2="300" y2="60" stroke="hsl(var(--border))" strokeWidth="2" />
              {/* Left branch */}
              <line x1="300" y1="30" x2="100" y2="30" stroke="hsl(var(--border))" strokeWidth="2" />
              <line x1="100" y1="30" x2="100" y2="60" stroke="hsl(var(--border))" strokeWidth="2" />
              {/* Right branch */}
              <line x1="300" y1="30" x2="500" y2="30" stroke="hsl(var(--border))" strokeWidth="2" />
              <line x1="500" y1="30" x2="500" y2="60" stroke="hsl(var(--border))" strokeWidth="2" />
              {/* Dots */}
              <circle cx="100" cy="60" r="3" fill="hsl(var(--sysde-red))" opacity="0.4" />
              <circle cx="300" cy="60" r="3" fill="hsl(var(--sysde-red))" opacity="0.4" />
              <circle cx="500" cy="60" r="3" fill="hsl(var(--sysde-red))" opacity="0.4" />
            </svg>
          </motion.div>

          {/* Top Modules Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 w-full max-w-2xl">
            {topModules.map((mod, i) => (
              <ModuleCard key={mod.label} mod={mod} delay={0.2 + i * 0.1} />
            ))}
          </div>

          {/* Separator + label */}
          <motion.div {...fade(0.35)} className="flex flex-col items-center my-8 md:my-12">
            <div className="w-px h-8 bg-border" />
            <div className="px-4 py-1.5 rounded-full border border-border bg-muted/50 text-[10px] md:text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Flujos adicionales
            </div>
            <div className="w-px h-8 bg-border" />
          </motion.div>

          {/* Bottom connector SVG */}
          <motion.div
            {...fade(0.4)}
            className="flex items-center justify-center w-full max-w-3xl"
          >
            <svg
              viewBox="0 0 600 40"
              className="w-full h-8 md:h-10"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Three branches */}
              <line x1="300" y1="0" x2="100" y2="0" stroke="hsl(var(--border))" strokeWidth="2" />
              <line x1="300" y1="0" x2="500" y2="0" stroke="hsl(var(--border))" strokeWidth="2" />
              <line x1="100" y1="0" x2="100" y2="40" stroke="hsl(var(--border))" strokeWidth="2" />
              <line x1="300" y1="0" x2="300" y2="40" stroke="hsl(var(--border))" strokeWidth="2" />
              <line x1="500" y1="0" x2="500" y2="40" stroke="hsl(var(--border))" strokeWidth="2" />
              <circle cx="100" cy="40" r="3" fill="hsl(var(--sysde-red))" opacity="0.4" />
              <circle cx="300" cy="40" r="3" fill="hsl(var(--sysde-red))" opacity="0.4" />
              <circle cx="500" cy="40" r="3" fill="hsl(var(--sysde-red))" opacity="0.4" />
            </svg>
          </motion.div>

          {/* Bottom Modules Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 w-full max-w-3xl">
            {bottomModules.map((mod, i) => (
              <ModuleCard key={mod.label} mod={mod} delay={0.45 + i * 0.1} />
            ))}
          </div>

          {/* Bottom capabilities */}
          <motion.div
            {...fade(0.6)}
            className="flex flex-wrap justify-center gap-2 md:gap-3 mt-10 md:mt-14"
          >
            {[
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
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
