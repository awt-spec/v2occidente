import { motion } from "framer-motion";
import { useState } from "react";
import {
  Workflow, FileText, Shield, Users,
  Code2, Globe, Puzzle, Bell,
  Contact, ClipboardList, RefreshCw,
  HeadphonesIcon, MessageSquare,
  Award, FileCheck, FolderOpen,
  Mail, Building2, Smartphone,
  Database, Send,
  Calendar, UserCheck, BarChart3,
  ChevronRight, ArrowRight, Pencil, MousePointerClick,
} from "lucide-react";

/* ── Data ── */

const channels = [
  { icon: Globe, label: "Sitio Web" },
  { icon: Mail, label: "Email" },
  { icon: Building2, label: "Oficinas" },
  { icon: Smartphone, label: "Móvil" },
];

const coreSteps = [
  { icon: FolderOpen, label: "Expediente", desc: "Documentos, datos y ficha del afiliado" },
  { icon: RefreshCw, label: "Ciclo de Vida", desc: "Recepción → Revisión → Aprobación → Registro" },
  { icon: UserCheck, label: "Asignación", desc: "Distribución automática a ejecutivos" },
  { icon: Bell, label: "Notificaciones", desc: "Alertas en cada cambio de estado" },
];

const crmFeatures = [
  { icon: Contact, label: "Contactos" },
  { icon: Calendar, label: "Agenda" },
  { icon: BarChart3, label: "Pipeline" },
  { icon: MessageSquare, label: "Seguimiento" },
];

const otherFlows = [
  {
    icon: HeadphonesIcon,
    label: "Atención al Afiliado",
    color: "bg-[hsl(var(--flow-teal))]",
    lightBg: "bg-[hsl(var(--flow-teal-light))]",
    border: "border-[hsl(var(--flow-teal)/0.3)]",
    items: ["Solicitudes", "Reclamos", "Seguimiento"],
  },
  {
    icon: Award,
    label: "Procesos ISO",
    color: "bg-[hsl(var(--flow-green))]",
    lightBg: "bg-[hsl(var(--flow-green-light))]",
    border: "border-[hsl(var(--flow-green)/0.3)]",
    items: ["Auditorías", "No Conformidades", "Control"],
  },
];

const apiIntegrations = [
  { icon: Database, label: "Base de Datos AFP", desc: "Consulta y sincronización vía API" },
  { icon: Send, label: "Envíos Masivos", desc: "Email marketing vía API" },
  { icon: Puzzle, label: "Sistemas Externos", desc: "Webhooks y REST API" },
];

/* ── Helpers ── */

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 14 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-40px" } as const,
  transition: { duration: 0.45, delay },
});

const StepLabel = ({ num, text }: { num: string; text: string }) => (
  <div className="flex items-center gap-2 mb-3">
    <span className="w-5 h-5 rounded-md bg-sysde-red text-primary-foreground text-[9px] font-bold flex items-center justify-center">{num}</span>
    <span className="text-[11px] md:text-xs font-bold text-foreground uppercase tracking-wider">{text}</span>
  </div>
);

const HArrow = () => (
  <div className="hidden lg:flex items-center justify-center px-1 self-center">
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="origin-left flex items-center"
    >
      <div className="w-8 xl:w-12 h-0.5 bg-gradient-to-r from-sysde-red/30 to-sysde-red/60" />
      <ChevronRight className="h-4 w-4 text-sysde-red/60 -ml-1" />
    </motion.div>
  </div>
);

const VArrow = () => (
  <div className="flex lg:hidden items-center justify-center py-2">
    <motion.div
      initial={{ scaleY: 0, opacity: 0 }}
      whileInView={{ scaleY: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="origin-top flex flex-col items-center"
    >
      <div className="w-0.5 h-6 bg-gradient-to-b from-sysde-red/30 to-sysde-red/60" />
      <ChevronRight className="h-4 w-4 text-sysde-red/60 rotate-90 -mt-1" />
    </motion.div>
  </div>
);

/* ── Component ── */

const ModulesSection = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-28 bg-background overflow-hidden">
      <div className="container px-4 md:px-6 max-w-7xl">
        {/* Header */}
        <motion.div {...fade()} className="text-center mb-10 md:mb-14">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-sysde-red mb-2">
            Flujo de Afiliación
          </h2>
          <h3 className="text-2xl md:text-5xl font-bold tracking-tight text-foreground mb-3">
            Plataforma FileMaster
          </h3>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Desde la originación multicanal hasta la gestión completa del expediente y las integraciones vía API.
          </p>
        </motion.div>

        {/* ═══ HORIZONTAL FLOW (3 columns) ═══ */}
        <div className="flex flex-col lg:flex-row lg:items-start">

          {/* ── COL 1: Origination ── */}
          <motion.div {...fade(0.05)} className="lg:w-[180px] xl:w-[200px] flex-shrink-0">
            <StepLabel num="1" text="Originación" />
            <div className="flex flex-row lg:flex-col gap-2">
              {channels.map((ch, i) => (
                <motion.div
                  key={ch.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="flex items-center gap-2 p-2.5 md:p-3 rounded-xl border border-border bg-card hover:border-sysde-red/30 hover:shadow-md transition-all cursor-default flex-1 lg:flex-none"
                >
                  <div className="w-8 h-8 rounded-lg bg-sysde-red/10 flex items-center justify-center flex-shrink-0">
                    <ch.icon className="h-4 w-4 text-sysde-red" />
                  </div>
                  <span className="text-[11px] md:text-xs font-semibold text-foreground">{ch.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <HArrow />
          <VArrow />

          {/* ── COL 2: FileMaster Core + Other Flows ── */}
          <motion.div {...fade(0.15)} className="flex-1 min-w-0">
            <StepLabel num="2" text="FileMaster — Gestión de Flujos" />

            {/* Main engine card */}
            <div className="rounded-2xl border-2 border-sysde-red/20 bg-gradient-to-br from-sysde-red/[0.02] to-sysde-red/[0.06] p-4 md:p-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-sysde" />

              {/* Header with No-Code badges */}
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sysde-red flex items-center justify-center shadow-md">
                    <Workflow className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <p className="text-sm font-bold text-foreground">Flujo de Afiliación</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[hsl(var(--flow-purple-light))] border border-[hsl(var(--flow-purple)/0.2)] text-[10px] font-bold text-[hsl(var(--flow-purple))]">
                    <MousePointerClick className="h-3 w-3" />
                    No-Code
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[hsl(var(--flow-orange-light))] border border-[hsl(var(--flow-orange)/0.2)] text-[10px] font-bold text-[hsl(var(--flow-orange))]">
                    <Pencil className="h-3 w-3" />
                    Editable
                  </span>
                </div>
              </div>

              {/* Interactive step cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
                {coreSteps.map((step, i) => (
                  <motion.button
                    key={step.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.06 }}
                    onClick={() => setActiveStep(activeStep === i ? null : i)}
                    className={`relative text-left p-3 rounded-xl border transition-all duration-200 ${
                      activeStep === i
                        ? "border-sysde-red/40 bg-sysde-red/5 shadow-md"
                        : "border-border/50 bg-card/80 hover:border-sysde-red/20 hover:shadow-sm"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <step.icon className={`h-4 w-4 flex-shrink-0 transition-colors ${activeStep === i ? "text-sysde-red" : "text-muted-foreground"}`} />
                      <span className="text-[11px] font-semibold text-foreground">{step.label}</span>
                    </div>
                    <motion.p
                      initial={false}
                      animate={{
                        height: activeStep === i ? "auto" : 0,
                        opacity: activeStep === i ? 1 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                      className="text-[9px] md:text-[10px] text-muted-foreground leading-relaxed overflow-hidden"
                    >
                      {step.desc}
                    </motion.p>
                    {i < coreSteps.length - 1 && (
                      <ArrowRight className="absolute -right-2.5 top-1/2 -translate-y-1/2 h-3 w-3 text-sysde-red/20 hidden lg:block" />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* CRM strip */}
              <div className="p-3 rounded-xl border border-[hsl(var(--flow-orange)/0.25)] bg-[hsl(var(--flow-orange-light))]">
                <div className="flex items-center gap-1.5 mb-2">
                  <Contact className="h-3.5 w-3.5 text-[hsl(var(--flow-orange))]" />
                  <span className="text-[10px] font-bold text-foreground uppercase tracking-wider">CRM Integrado</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {crmFeatures.map((f) => (
                    <span key={f.label} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-card border border-border text-[10px] font-medium text-foreground">
                      <f.icon className="h-3 w-3 text-[hsl(var(--flow-orange))]" />
                      {f.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Other Flows (below main engine) ── */}
            <motion.div {...fade(0.3)} className="mt-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-px h-4 bg-border" />
                <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Otros flujos configurables</span>
                <div className="flex-1 h-px bg-border" />
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {otherFlows.map((flow, fi) => (
                  <motion.div
                    key={flow.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 + fi * 0.08 }}
                    className={`p-3 rounded-xl border ${flow.border} ${flow.lightBg}`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-7 h-7 rounded-lg ${flow.color} flex items-center justify-center`}>
                        <flow.icon className="h-3.5 w-3.5 text-primary-foreground" />
                      </div>
                      <span className="text-[11px] font-semibold text-foreground">{flow.label}</span>
                      <div className="ml-auto flex gap-1">
                        <span className="px-1.5 py-0.5 rounded bg-card border border-border text-[8px] font-medium text-muted-foreground">No-Code</span>
                        <span className="px-1.5 py-0.5 rounded bg-card border border-border text-[8px] font-medium text-muted-foreground">Editable</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {flow.items.map((item) => (
                        <span key={item} className="px-2 py-0.5 rounded-full bg-card/80 border border-border/50 text-[9px] font-medium text-muted-foreground">
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <HArrow />
          <VArrow />

          {/* ── COL 3: API Integrations ── */}
          <motion.div {...fade(0.35)} className="lg:w-[220px] xl:w-[240px] flex-shrink-0">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-5 rounded-md bg-[hsl(var(--flow-blue))] text-primary-foreground text-[9px] font-bold flex items-center justify-center">
                <Code2 className="h-3 w-3" />
              </span>
              <span className="text-[11px] md:text-xs font-bold text-foreground uppercase tracking-wider">Integraciones API</span>
            </div>
            <div className="space-y-2">
              {apiIntegrations.map((intg, i) => (
                <motion.div
                  key={intg.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.07 }}
                  className="flex items-start gap-2.5 p-3 rounded-xl border border-dashed border-[hsl(var(--flow-blue)/0.3)] bg-[hsl(var(--flow-blue-light))] hover:shadow-md transition-shadow"
                >
                  <div className="w-8 h-8 rounded-lg bg-[hsl(var(--flow-blue))] flex items-center justify-center flex-shrink-0">
                    <intg.icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-foreground">{intg.label}</p>
                    <p className="text-[9px] text-muted-foreground">{intg.desc}</p>
                  </div>
                </motion.div>
              ))}
              <div className="text-center pt-2">
                <span className="text-[9px] text-muted-foreground italic">Conexión vía REST API & Webhooks</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom capabilities */}
        <motion.div
          {...fade(0.5)}
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
    </section>
  );
};

export default ModulesSection;
