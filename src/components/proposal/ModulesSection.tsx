import { motion, AnimatePresence } from "framer-motion";
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
  ChevronRight, ChevronDown, ArrowRight, Pencil, MousePointerClick,
  Phone, FileSpreadsheet, QrCode,
  TicketCheck, Search, Clock, CheckCircle2,
  Shield as ShieldIcon,
  Plus, X,
} from "lucide-react";

/* ══════════════════════════════════════════
   DATA
   ══════════════════════════════════════════ */

const channels = [
  { icon: Globe, label: "Sitio Web", desc: "Formularios embebidos en el sitio de AFP Occidente" },
  { icon: Mail, label: "Email", desc: "Solicitudes recibidas por correo electrónico" },
  { icon: Building2, label: "Oficinas", desc: "Atención presencial en sucursales" },
  { icon: Smartphone, label: "App / Móvil", desc: "Portal responsive desde cualquier dispositivo" },
  { icon: Phone, label: "Call Center", desc: "Ingreso desde llamadas telefónicas" },
  { icon: FileSpreadsheet, label: "Importación", desc: "Carga masiva desde archivos CSV / Excel" },
  { icon: QrCode, label: "QR / Landing", desc: "Campañas con códigos QR y landing pages" },
];

const coreSteps = [
  { icon: FolderOpen, label: "Expediente", desc: "Centraliza documentos, datos personales, beneficiarios y bitácora del afiliado en un solo lugar." },
  { icon: RefreshCw, label: "Ciclo de Vida", desc: "Etapas automáticas: Recepción → Revisión → Aprobación → Registro. Configurable por flujo." },
  { icon: UserCheck, label: "Asignación", desc: "Distribución automática o manual a ejecutivos según reglas de negocio, zona o carga de trabajo." },
  { icon: Bell, label: "Notificaciones", desc: "Alertas por email, plataforma y webhook en cada cambio de estado o acción requerida." },
];

const crmFlowItems = [
  { icon: Contact, label: "Gestión de Contactos", desc: "Base centralizada de prospectos y afiliados" },
  { icon: Calendar, label: "Agenda de Vendedores", desc: "Calendario de citas y seguimientos" },
  { icon: BarChart3, label: "Pipeline", desc: "Embudo de conversión visual por etapas" },
  { icon: MessageSquare, label: "Seguimiento", desc: "Historial de interacciones con cada contacto" },
];

const affiliateServiceItems = [
  { icon: MessageSquare, label: "Solicitudes", desc: "Registro y seguimiento de solicitudes de afiliados" },
  { icon: TicketCheck, label: "Reclamos", desc: "Gestión de quejas con SLA y escalamiento automático" },
  { icon: Search, label: "Consultas", desc: "Portal de autoservicio para estado de trámites" },
  { icon: Clock, label: "SLA & Tiempos", desc: "Monitoreo de tiempos de respuesta y resolución" },
  { icon: CheckCircle2, label: "Resolución", desc: "Cierre documentado con firma y evidencia" },
];

const isoItems = [
  { icon: FileCheck, label: "Auditorías", desc: "Planificación y ejecución de auditorías internas" },
  { icon: ClipboardList, label: "No Conformidades", desc: "Registro, seguimiento y cierre de hallazgos" },
  { icon: ShieldIcon, label: "Control de Calidad", desc: "Indicadores y dashboards de cumplimiento" },
];

const apiIntegrations = [
  {
    icon: Database,
    label: "Base de Datos CRM",
    desc: "Sincronización bidireccional con CRM externo",
    options: ["Salesforce", "HubSpot", "Dynamics 365", "CRM propio"],
  },
  {
    icon: Send,
    label: "Envío Masivo CRM",
    desc: "Campañas de email marketing vía API",
    options: ["Mailchimp", "SendGrid", "ActiveCampaign", "Brevo"],
  },
  {
    icon: Puzzle,
    label: "Sistemas Externos",
    desc: "Conexión con sistemas de AFP Occidente",
    options: ["ERP", "Core Bancario", "Firma Digital", "Biométricos"],
  },
];

/* ══════════════════════════════════════════
   HELPERS
   ══════════════════════════════════════════ */

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 14 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-40px" } as const,
  transition: { duration: 0.45, delay },
});

const StepLabel = ({ num, text, color = "bg-sysde-red" }: { num: string; text: string; color?: string }) => (
  <div className="flex items-center gap-2 mb-3">
    <span className={`w-5 h-5 rounded-md ${color} text-primary-foreground text-[9px] font-bold flex items-center justify-center`}>{num}</span>
    <span className="text-[11px] md:text-xs font-bold text-foreground uppercase tracking-wider">{text}</span>
  </div>
);

const HArrow = () => (
  <div className="hidden lg:flex items-center justify-center px-1 self-start mt-16">
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="origin-left flex items-center"
    >
      <div className="w-6 xl:w-10 h-0.5 bg-gradient-to-r from-sysde-red/30 to-sysde-red/60" />
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

/* ── Expandable flow card ── */
const FlowCard = ({
  icon: Icon,
  label,
  color,
  lightBg,
  border,
  items,
  delay,
}: {
  icon: React.ElementType;
  label: string;
  color: string;
  lightBg: string;
  border: string;
  items: { icon: React.ElementType; label: string; desc: string }[];
  delay: number;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`w-full text-left p-3 rounded-xl border ${border} ${lightBg} hover:shadow-lg transition-all duration-300 ${open ? "shadow-md" : ""}`}
      >
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-lg ${color} flex items-center justify-center transition-transform duration-300 ${open ? "scale-110" : ""}`}>
            <Icon className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-[11px] font-semibold text-foreground flex-1">{label}</span>
          <div className="flex items-center gap-1">
            <span className="px-1.5 py-0.5 rounded bg-card border border-border text-[8px] font-medium text-muted-foreground">No-Code</span>
            <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
            </motion.div>
          </div>
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-2 pl-2 space-y-1.5">
              {items.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-2 p-2.5 rounded-lg bg-card border border-border/50 hover:border-border transition-colors"
                >
                  <item.icon className="h-3.5 w-3.5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] font-semibold text-foreground">{item.label}</p>
                    <p className="text-[9px] text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ── API Integration card with options ── */
const ApiCard = ({
  intg,
  delay,
}: {
  intg: (typeof apiIntegrations)[0];
  delay: number;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`w-full text-left p-3 rounded-xl border border-dashed border-[hsl(var(--flow-blue)/0.3)] bg-[hsl(var(--flow-blue-light))] hover:shadow-lg transition-all duration-300 ${open ? "shadow-md border-[hsl(var(--flow-blue)/0.5)]" : ""}`}
      >
        <div className="flex items-start gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[hsl(var(--flow-blue))] flex items-center justify-center flex-shrink-0">
            <intg.icon className="h-4 w-4 text-primary-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <p className="text-[11px] font-semibold text-foreground">{intg.label}</p>
              <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="h-3 w-3 text-muted-foreground" />
              </motion.div>
            </div>
            <p className="text-[9px] text-muted-foreground">{intg.desc}</p>
          </div>
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-2 pl-2 flex flex-wrap gap-1.5">
              {intg.options.map((opt, i) => (
                <motion.span
                  key={opt}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-2.5 py-1 rounded-full bg-card border border-[hsl(var(--flow-blue)/0.2)] text-[9px] font-medium text-foreground hover:bg-[hsl(var(--flow-blue)/0.1)] transition-colors cursor-default"
                >
                  {opt}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ══════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════ */

const ModulesSection = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [showAllChannels, setShowAllChannels] = useState(false);
  const visibleChannels = showAllChannels ? channels : channels.slice(0, 4);

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
            Cualquier proceso de AFP Occidente puede ser moldeado. Haz clic en cada módulo para explorar sus capacidades.
          </p>
        </motion.div>

        {/* ═══ HORIZONTAL FLOW ═══ */}
        <div className="flex flex-col lg:flex-row lg:items-start">

          {/* ── COL 1: Origination ── */}
          <motion.div {...fade(0.05)} className="lg:w-[190px] xl:w-[210px] flex-shrink-0">
            <StepLabel num="1" text="Originación" />
            <div className="flex flex-row flex-wrap lg:flex-col gap-2">
              <AnimatePresence mode="popLayout">
                {visibleChannels.map((ch, i) => (
                  <motion.div
                    key={ch.label}
                    layout
                    initial={{ opacity: 0, x: -20, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -10, scale: 0.9 }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                    className="group flex items-center gap-2 p-2.5 rounded-xl border border-border bg-card hover:border-sysde-red/30 hover:shadow-md transition-all duration-300 cursor-default flex-1 lg:flex-none min-w-[140px]"
                  >
                    <div className="w-8 h-8 rounded-lg bg-sysde-red/10 flex items-center justify-center flex-shrink-0 group-hover:bg-sysde-red/20 transition-colors">
                      <ch.icon className="h-4 w-4 text-sysde-red" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-semibold text-foreground block">{ch.label}</span>
                      <span className="text-[8px] text-muted-foreground hidden lg:block">{ch.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              <motion.button
                layout
                onClick={() => setShowAllChannels(!showAllChannels)}
                className="flex items-center justify-center gap-1 p-2 rounded-xl border border-dashed border-border hover:border-sysde-red/30 text-[10px] font-medium text-muted-foreground hover:text-sysde-red transition-all duration-300 lg:w-full"
              >
                {showAllChannels ? <X className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                {showAllChannels ? "Menos canales" : `+${channels.length - 4} canales`}
              </motion.button>
            </div>
          </motion.div>

          <HArrow />
          <VArrow />

          {/* ── COL 2: FileMaster Core ── */}
          <motion.div {...fade(0.15)} className="flex-1 min-w-0">
            <StepLabel num="2" text="FileMaster — Gestión de Flujos" />

            {/* Main engine */}
            <div className="rounded-2xl border-2 border-sysde-red/20 bg-gradient-to-br from-sysde-red/[0.02] to-sysde-red/[0.06] p-4 md:p-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-sysde" />

              {/* Header badges */}
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-sysde-red flex items-center justify-center shadow-md"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Workflow className="h-5 w-5 text-primary-foreground" />
                  </motion.div>
                  <p className="text-sm font-bold text-foreground">Flujo de Afiliación</p>
                </div>
                <div className="flex items-center gap-2">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[hsl(var(--flow-purple-light))] border border-[hsl(var(--flow-purple)/0.2)] text-[10px] font-bold text-[hsl(var(--flow-purple))] cursor-default"
                  >
                    <MousePointerClick className="h-3 w-3" />
                    No-Code
                  </motion.span>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[hsl(var(--flow-orange-light))] border border-[hsl(var(--flow-orange)/0.2)] text-[10px] font-bold text-[hsl(var(--flow-orange))] cursor-default"
                  >
                    <Pencil className="h-3 w-3" />
                    Editable
                  </motion.span>
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
                    whileHover={{ y: -2 }}
                    onClick={() => setActiveStep(activeStep === i ? null : i)}
                    className={`relative text-left p-3 rounded-xl border transition-all duration-300 ${
                      activeStep === i
                        ? "border-sysde-red/40 bg-sysde-red/5 shadow-lg"
                        : "border-border/50 bg-card/80 hover:border-sysde-red/20 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <motion.div animate={{ scale: activeStep === i ? 1.15 : 1 }} transition={{ duration: 0.2 }}>
                        <step.icon className={`h-4 w-4 flex-shrink-0 transition-colors duration-300 ${activeStep === i ? "text-sysde-red" : "text-muted-foreground"}`} />
                      </motion.div>
                      <span className="text-[11px] font-semibold text-foreground">{step.label}</span>
                    </div>
                    <AnimatePresence>
                      {activeStep === i && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="text-[9px] md:text-[10px] text-muted-foreground leading-relaxed overflow-hidden"
                        >
                          {step.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                    {i < coreSteps.length - 1 && (
                      <ArrowRight className="absolute -right-2.5 top-1/2 -translate-y-1/2 h-3 w-3 text-sysde-red/20 hidden lg:block" />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* CRM Flow */}
              <FlowCard
                icon={Contact}
                label="Flujo CRM"
                color="bg-[hsl(var(--flow-orange))]"
                lightBg="bg-[hsl(var(--flow-orange-light))]"
                border="border-[hsl(var(--flow-orange)/0.25)]"
                items={crmFlowItems}
                delay={0.3}
              />
            </div>

            {/* ── Other Flows ── */}
            <motion.div {...fade(0.3)} className="mt-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-px h-4 bg-border" />
                <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Otros flujos configurables</span>
                <div className="flex-1 h-px bg-border" />
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <FlowCard
                  icon={HeadphonesIcon}
                  label="Atención al Afiliado"
                  color="bg-[hsl(var(--flow-teal))]"
                  lightBg="bg-[hsl(var(--flow-teal-light))]"
                  border="border-[hsl(var(--flow-teal)/0.3)]"
                  items={affiliateServiceItems}
                  delay={0.35}
                />
                <FlowCard
                  icon={Award}
                  label="Procesos ISO"
                  color="bg-[hsl(var(--flow-green))]"
                  lightBg="bg-[hsl(var(--flow-green-light))]"
                  border="border-[hsl(var(--flow-green)/0.3)]"
                  items={isoItems}
                  delay={0.4}
                />
              </div>
            </motion.div>
          </motion.div>

          <HArrow />
          <VArrow />

          {/* ── COL 3: API Integrations ── */}
          <motion.div {...fade(0.35)} className="lg:w-[220px] xl:w-[250px] flex-shrink-0">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-5 rounded-md bg-[hsl(var(--flow-blue))] text-primary-foreground text-[9px] font-bold flex items-center justify-center">
                <Code2 className="h-3 w-3" />
              </span>
              <span className="text-[11px] md:text-xs font-bold text-foreground uppercase tracking-wider">Integraciones API</span>
            </div>
            <div className="space-y-2">
              {apiIntegrations.map((intg, i) => (
                <ApiCard key={intg.label} intg={intg} delay={0.4 + i * 0.07} />
              ))}
              <motion.p
                {...fade(0.6)}
                className="text-[9px] text-muted-foreground italic text-center pt-1"
              >
                Conexión vía REST API & Webhooks
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          {...fade(0.5)}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mt-10 md:mt-14"
        >
          {[
            { icon: Globe, label: "100% Web" },
            { icon: Users, label: "20 Usuarios" },
            { icon: Shield, label: "Seguridad" },
          ].map((cap) => (
            <motion.div
              key={cap.label}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-border bg-muted/50 text-[10px] md:text-xs font-medium text-muted-foreground cursor-default"
            >
              <cap.icon className="h-3 w-3 md:h-3.5 md:w-3.5" />
              {cap.label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ModulesSection;
