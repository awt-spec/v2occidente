import { motion } from "framer-motion";
import {
  Workflow, FileText, Shield, Users,
  Code2, Globe, Puzzle, Bell,
  Contact, ClipboardList, RefreshCw,
  HeadphonesIcon, MessageSquare,
  Award, FileCheck, FolderOpen,
  Mail, Building2, Smartphone, ArrowDown,
  Database, Send, ExternalLink,
  Calendar, UserCheck, BarChart3,
} from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.5, delay },
});

/* ── Origination channels ── */
const channels = [
  { icon: Globe, label: "Sitio Web", desc: "Formularios online" },
  { icon: Mail, label: "Email", desc: "Solicitudes por correo" },
  { icon: Building2, label: "Oficinas", desc: "Atención presencial" },
  { icon: Smartphone, label: "Móvil", desc: "App o portal responsive" },
];

/* ── FileMaster core capabilities ── */
const coreCapabilities = [
  { icon: FolderOpen, label: "Expediente Digital", desc: "Centraliza documentos, datos y estados del afiliado" },
  { icon: RefreshCw, label: "Ciclo de Vida", desc: "Etapas automáticas: recepción → revisión → aprobación → registro" },
  { icon: UserCheck, label: "Asignación", desc: "Distribución automática a ejecutivos por reglas de negocio" },
  { icon: Bell, label: "Notificaciones", desc: "Alertas por email y plataforma en cada cambio de estado" },
  { icon: ClipboardList, label: "Ficha del Afiliado", desc: "Datos personales, beneficiarios, documentos y bitácora" },
  { icon: Calendar, label: "Agenda & Seguimiento", desc: "Calendario de vendedores, tareas pendientes y recordatorios" },
];

/* ── CRM-like built-in features ── */
const crmFeatures = [
  { icon: Contact, label: "Gestión de Contactos" },
  { icon: Calendar, label: "Agenda de Vendedores" },
  { icon: BarChart3, label: "Pipeline de Afiliación" },
  { icon: MessageSquare, label: "Seguimiento de Casos" },
];

/* ── External integrations ── */
const integrations = [
  { icon: Send, label: "Envíos Masivos", desc: "Integración con plataforma de email marketing" },
  { icon: Database, label: "Base de Datos", desc: "Conexión con sistemas existentes de AFP Occidente" },
  { icon: Puzzle, label: "APIs Externas", desc: "Webhooks y REST API para sistemas de terceros" },
];

/* ── Additional flows ── */
const additionalFlows = [
  {
    icon: HeadphonesIcon,
    label: "Atención al Afiliado",
    color: "bg-[hsl(var(--flow-teal))]",
    items: ["Solicitudes", "Reclamos", "Seguimiento"],
  },
  {
    icon: Award,
    label: "Procesos ISO",
    color: "bg-[hsl(var(--flow-green))]",
    items: ["Auditorías", "No Conformidades", "Control de Calidad"],
  },
];

const ConnectorArrow = ({ className = "" }: { className?: string }) => (
  <motion.div
    {...fade(0.2)}
    className={`flex flex-col items-center ${className}`}
  >
    <div className="w-px h-6 md:h-10 bg-gradient-to-b from-border to-sysde-red/30" />
    <ArrowDown className="h-4 w-4 text-sysde-red/40 -mt-1" />
  </motion.div>
);

const ModulesSection = () => {
  return (
    <section className="py-16 md:py-28 bg-background overflow-hidden">
      <div className="container px-4 md:px-6 max-w-5xl">
        {/* Header */}
        <motion.div {...fade()} className="text-center mb-12 md:mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-sysde-red mb-2">
            Flujo de Afiliación
          </h2>
          <h3 className="text-2xl md:text-5xl font-bold tracking-tight text-foreground mb-3 md:mb-4">
            Plataforma FileMaster
          </h3>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Cualquier proceso de AFP Occidente puede ser moldeado e implementado. FileMaster centraliza la originación desde múltiples canales y gestiona todo el ciclo de vida del afiliado.
          </p>
        </motion.div>

        {/* ═══ STEP 1: Origination Channels ═══ */}
        <motion.div {...fade(0.05)}>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] md:text-xs font-bold text-sysde-red uppercase tracking-widest">01</span>
            <span className="text-xs md:text-sm font-semibold text-foreground">Canales de Originación</span>
            <div className="flex-1 h-px bg-border ml-2" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {channels.map((ch, i) => (
              <motion.div
                key={ch.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.07 }}
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-sysde-red/10 flex items-center justify-center flex-shrink-0">
                  <ch.icon className="h-5 w-5 text-sysde-red" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{ch.label}</p>
                  <p className="text-[10px] text-muted-foreground">{ch.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <ConnectorArrow className="my-2" />

        {/* ═══ STEP 2: FileMaster Core ═══ */}
        <motion.div {...fade(0.15)}>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] md:text-xs font-bold text-sysde-red uppercase tracking-widest">02</span>
            <span className="text-xs md:text-sm font-semibold text-foreground">FileMaster — Motor de Flujos</span>
            <div className="flex-1 h-px bg-border ml-2" />
          </div>

          <div className="rounded-2xl border-2 border-sysde-red/20 bg-gradient-to-br from-sysde-red/[0.03] to-sysde-red/[0.08] p-5 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-sysde" />

            {/* Central badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-sysde-red flex items-center justify-center shadow-md">
                <Workflow className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-lg">Gestión de Flujos</h4>
                <p className="text-xs text-muted-foreground">Diseño visual No-Code • Adaptable a reglas de negocio</p>
              </div>
            </div>

            {/* Core capabilities grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {coreCapabilities.map((cap, i) => (
                <motion.div
                  key={cap.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.05 }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-card/80 border border-border/50"
                >
                  <div className="w-8 h-8 rounded-lg bg-sysde-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <cap.icon className="h-4 w-4 text-sysde-red" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">{cap.label}</p>
                    <p className="text-[10px] text-muted-foreground leading-relaxed">{cap.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CRM Built-in strip */}
            <motion.div
              {...fade(0.35)}
              className="mt-5 p-4 rounded-xl border border-[hsl(var(--flow-orange)/0.3)] bg-[hsl(var(--flow-orange-light))]"
            >
              <div className="flex items-center gap-2 mb-3">
                <Contact className="h-4 w-4 text-[hsl(var(--flow-orange))]" />
                <span className="text-xs font-bold text-foreground uppercase tracking-wider">CRM Básico Integrado</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {crmFeatures.map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border text-[10px] md:text-[11px] font-medium text-foreground"
                  >
                    <f.icon className="h-3 w-3 text-[hsl(var(--flow-orange))]" />
                    {f.label}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Branching connector */}
        <motion.div {...fade(0.35)} className="flex items-stretch justify-center gap-0 my-2">
          <svg
            viewBox="0 0 600 50"
            className="w-full max-w-3xl h-10 md:h-12"
            preserveAspectRatio="xMidYMid meet"
          >
            <line x1="300" y1="0" x2="300" y2="25" stroke="hsl(var(--border))" strokeWidth="2" />
            <line x1="150" y1="25" x2="450" y2="25" stroke="hsl(var(--border))" strokeWidth="2" />
            <line x1="150" y1="25" x2="150" y2="50" stroke="hsl(var(--border))" strokeWidth="2" />
            <line x1="450" y1="25" x2="450" y2="50" stroke="hsl(var(--border))" strokeWidth="2" />
            {/* arrows */}
            <polygon points="150,50 146,42 154,42" fill="hsl(var(--sysde-red))" opacity="0.35" />
            <polygon points="450,50 446,42 454,42" fill="hsl(var(--sysde-red))" opacity="0.35" />
          </svg>
        </motion.div>

        {/* ═══ STEP 3: Two parallel tracks ═══ */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Additional Flows */}
          <motion.div {...fade(0.4)}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] md:text-xs font-bold text-sysde-red uppercase tracking-widest">03</span>
              <span className="text-xs md:text-sm font-semibold text-foreground">Flujos Adicionales</span>
              <div className="flex-1 h-px bg-border ml-2" />
            </div>
            <div className="space-y-3">
              {additionalFlows.map((flow, fi) => (
                <motion.div
                  key={flow.label}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.45 + fi * 0.1 }}
                  className="p-4 rounded-xl border border-border bg-card"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-9 h-9 rounded-lg ${flow.color} flex items-center justify-center`}>
                      <flow.icon className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">{flow.label}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {flow.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-full bg-muted/60 border border-border text-[10px] font-medium text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* External Integrations */}
          <motion.div {...fade(0.45)}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] md:text-xs font-bold text-[hsl(var(--flow-blue))] uppercase tracking-widest">
                <ExternalLink className="h-3 w-3 inline -mt-0.5 mr-1" />
                EXT
              </span>
              <span className="text-xs md:text-sm font-semibold text-foreground">Integraciones Externas</span>
              <div className="flex-1 h-px bg-border ml-2" />
            </div>
            <div className="space-y-3">
              {integrations.map((intg, ii) => (
                <motion.div
                  key={intg.label}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + ii * 0.08 }}
                  className="flex items-start gap-3 p-4 rounded-xl border border-dashed border-[hsl(var(--flow-blue)/0.3)] bg-[hsl(var(--flow-blue-light))]"
                >
                  <div className="w-9 h-9 rounded-lg bg-[hsl(var(--flow-blue))] flex items-center justify-center flex-shrink-0">
                    <intg.icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{intg.label}</p>
                    <p className="text-[10px] text-muted-foreground">{intg.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom capabilities */}
        <motion.div
          {...fade(0.6)}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mt-10 md:mt-14"
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
      </div>
    </section>
  );
};

export default ModulesSection;
