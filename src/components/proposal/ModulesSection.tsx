import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Workflow, FileText, History, Shield, Users, Gavel,
  ArrowDown, Table2, Filter, Settings2, Plus, Pencil,
  Layers, MousePointerClick, Download, Clock, Search,
  FolderOpen, CheckCircle2, ClipboardList,
  FolderSearch, BarChart3, Code2, Globe, Puzzle, MonitorSmartphone
} from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.5, delay },
});

const FlowArrow = () => (
  <div className="flex justify-center py-2">
    <ArrowDown className="h-5 w-5 text-muted-foreground/40" />
  </div>
);

const FlowCard = ({
  children,
  color = "blue",
  className = "",
}: {
  children: React.ReactNode;
  color?: "blue" | "purple" | "green" | "orange" | "teal" | "neutral";
  className?: string;
}) => {
  const colorMap = {
    blue: "border-[hsl(var(--flow-blue)/0.3)] bg-[hsl(var(--flow-blue-light))]",
    purple: "border-[hsl(var(--flow-purple)/0.3)] bg-[hsl(var(--flow-purple-light))]",
    green: "border-[hsl(var(--flow-green)/0.3)] bg-[hsl(var(--flow-green-light))]",
    orange: "border-[hsl(var(--flow-orange)/0.3)] bg-[hsl(var(--flow-orange-light))]",
    teal: "border-[hsl(var(--flow-teal)/0.3)] bg-[hsl(var(--flow-teal-light))]",
    neutral: "border-border bg-card",
  };
  return (
    <div className={`rounded-xl border-2 p-5 ${colorMap[color]} ${className}`}>
      {children}
    </div>
  );
};

const Badge = ({ label, color }: { label: string; color: string }) => (
  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground ${color}`}>
    <Workflow className="h-3 w-3" />
    {label}
  </span>
);

const workflows = [
  {
    id: "colecciones",
    label: "Colecciones",
    icon: Layers,
    color: "bg-[hsl(var(--flow-purple))]",
    content: () => (
      <div className="max-w-lg mx-auto">
        <h4 className="text-xl font-bold text-foreground text-center mb-1">Lista de Colecciones (FILEMASTER)</h4>
        <div className="flex items-center justify-center gap-2 mb-8">
          <Badge label="Workflow No-Code" color="bg-[hsl(var(--flow-purple))]" />
          <span className="text-xs text-muted-foreground">100% Personalizable</span>
        </div>
        <FlowCard color="blue" className="text-center">
          <Layers className="h-6 w-6 mx-auto mb-2 text-[hsl(var(--flow-blue))]" />
          <p className="text-sm font-medium text-foreground">Ingresa a Lista Colecciones</p>
        </FlowCard>
        <FlowArrow />
        <FlowCard color="neutral" className="text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Table2 className="h-4 w-4 text-[hsl(var(--flow-blue))]" />
            <span className="font-semibold text-sm text-foreground">Tabla de Colecciones</span>
            <div className="flex gap-1">
              <span className="w-5 h-5 rounded bg-[hsl(var(--flow-blue)/0.15)] flex items-center justify-center"><Plus className="h-3 w-3 text-[hsl(var(--flow-blue))]" /></span>
              <span className="w-5 h-5 rounded bg-[hsl(var(--flow-orange)/0.15)] flex items-center justify-center"><Pencil className="h-3 w-3 text-[hsl(var(--flow-orange))]" /></span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5 bg-muted/50 rounded px-2 py-1.5"><Settings2 className="h-3 w-3" />Colección</div>
            <div className="flex items-center gap-1.5 bg-muted/50 rounded px-2 py-1.5"><Settings2 className="h-3 w-3" />Cantidad</div>
            <div className="flex items-center gap-1.5 bg-muted/50 rounded px-2 py-1.5"><Settings2 className="h-3 w-3" />Descripción</div>
            <div className="flex items-center gap-1.5 bg-muted/50 rounded px-2 py-1.5"><FolderOpen className="h-3 w-3" />Documentación</div>
          </div>
        </FlowCard>
        <FlowArrow />
        <FlowCard color="purple">
          <div className="flex items-center gap-2 mb-3">
            <Settings2 className="h-4 w-4 text-[hsl(var(--flow-purple))]" />
            <span className="font-bold text-sm text-foreground">Adaptable a cada Cliente</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { icon: Plus, label: "Agregar", desc: "Nuevos campos y colecciones", color: "text-[hsl(var(--flow-orange))]" },
              { icon: Pencil, label: "Editar", desc: "Configurar flujos y reglas", color: "text-[hsl(var(--flow-blue))]" },
              { icon: Layers, label: "Organizar", desc: "Estados y transiciones", color: "text-[hsl(var(--flow-orange))]" },
            ].map((a) => (
              <div key={a.label} className="bg-card rounded-lg p-3 text-center border border-border">
                <a.icon className={`h-4 w-4 mx-auto mb-1 ${a.color}`} />
                <p className="text-xs font-semibold text-foreground">{a.label}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{a.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[hsl(var(--flow-purple))] mt-3 text-center">
            Workflow No-Code — Sin código — Diseña el workflow perfecto para tu operación
          </p>
        </FlowCard>
        <FlowArrow />
        <FlowCard color="green" className="text-center">
          <MousePointerClick className="h-6 w-6 mx-auto mb-2 text-[hsl(var(--flow-green))]" />
          <p className="text-sm font-medium text-foreground">Selecciona Colección</p>
        </FlowCard>
      </div>
    ),
  },
  {
    id: "ficha",
    label: "Ficha del Expediente",
    icon: ClipboardList,
    color: "bg-[hsl(var(--flow-blue))]",
    content: () => (
      <div className="max-w-lg mx-auto">
        <h4 className="text-xl font-bold text-foreground text-center mb-1">Ficha Básica del Expediente</h4>
        <div className="flex items-center justify-center gap-2 mb-8">
          <Badge label="Workflow No-Code" color="bg-[hsl(var(--flow-purple))]" />
          <span className="text-xs text-muted-foreground">Secciones y campos dinámicos</span>
        </div>
        <FlowCard color="neutral">
          <div className="flex items-center gap-2 mb-3">
            <ClipboardList className="h-4 w-4 text-[hsl(var(--flow-blue))]" />
            <span className="font-semibold text-sm text-foreground">Encabezado de Control</span>
            <div className="flex gap-1 ml-auto">
              <span className="w-5 h-5 rounded bg-[hsl(var(--flow-blue)/0.15)] flex items-center justify-center"><Plus className="h-3 w-3 text-[hsl(var(--flow-blue))]" /></span>
              <span className="w-5 h-5 rounded bg-[hsl(var(--flow-purple)/0.15)] flex items-center justify-center"><Pencil className="h-3 w-3 text-[hsl(var(--flow-purple))]" /></span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-3">
            {["● Estado Actual", "⏱ Vence el día", "Días en estado", "Días retraso", "Condición", "👥 Usuarios"].map((t) => (
              <span key={t} className="bg-muted/50 rounded px-2 py-1">{t}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {["Estados", "Documentación", "+ Nuevo acceso"].map((b) => (
              <span key={b} className="border border-border rounded-md px-2.5 py-1 text-xs text-foreground font-medium">{b}</span>
            ))}
          </div>
        </FlowCard>
        <p className="text-xs text-center text-muted-foreground my-3">
          📋 Secciones del Expediente <span className="text-[hsl(var(--flow-blue))]">(Configurables por cliente)</span>
        </p>
        <div className="space-y-2.5">
          {[
            { label: "Solicitud de Afiliación", desc: "Datos generales del afiliado", color: "orange" as const },
            { label: "Información del Proceso", desc: "Tipo, requisitos y condiciones", color: "blue" as const },
            { label: "Control de Aprobaciones", desc: "Tabla de aprobaciones del flujo", color: "green" as const },
            { label: "Información de Cierre", desc: "Datos de resolución final", color: "purple" as const },
          ].map((s) => (
            <FlowCard key={s.label} color={s.color} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-foreground">{s.label}</p>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </div>
              <div className="flex gap-1.5">
                <Pencil className="h-3.5 w-3.5 text-muted-foreground" />
                <CheckCircle2 className="h-3.5 w-3.5 text-muted-foreground" />
              </div>
            </FlowCard>
          ))}
        </div>
        <div className="mt-3 border-2 border-dashed border-[hsl(var(--flow-purple)/0.3)] rounded-xl p-4 text-center">
          <p className="text-sm text-[hsl(var(--flow-purple))]">+ Agregar nueva sección</p>
        </div>
      </div>
    ),
  },
  {
    id: "documentos",
    label: "Generar Documento",
    icon: FileText,
    color: "bg-[hsl(var(--flow-orange))]",
    content: () => (
      <div className="max-w-lg mx-auto">
        <h4 className="text-xl font-bold text-foreground text-center mb-1">Generar Documento</h4>
        <div className="flex items-center justify-center gap-2 mb-8">
          <Badge label="Workflow No-Code" color="bg-[hsl(var(--flow-orange))]" />
          <span className="text-xs text-muted-foreground">Plantillas personalizables</span>
        </div>
        <FlowCard color="blue" className="text-center">
          <Download className="h-6 w-6 mx-auto mb-2 text-[hsl(var(--flow-blue))]" />
          <p className="text-sm font-medium text-foreground">Presiona 'Generar Documento'</p>
        </FlowCard>
        <FlowArrow />
        <FlowCard color="neutral">
          <div className="flex items-center gap-2 mb-3">
            <FolderOpen className="h-4 w-4 text-[hsl(var(--flow-orange))]" />
            <span className="font-semibold text-sm text-foreground">Ruta de Plantillas</span>
          </div>
          <p className="text-xs text-muted-foreground bg-muted/50 rounded px-3 py-1.5 mb-3 font-mono">/plantillas/afiliacion/...</p>
          <p className="text-xs font-medium text-foreground mb-2">Plantillas Disponibles:</p>
          <div className="space-y-1.5">
            {["formulario_afiliacion.docx", "carta_aceptacion.docx", "constancia_registro.docx"].map((f, i) => (
              <div key={f} className={`flex items-center gap-2 text-xs px-2 py-1.5 rounded ${i === 1 ? "bg-[hsl(var(--flow-blue-light))] border border-[hsl(var(--flow-blue)/0.3)]" : "bg-muted/30"}`}>
                <span className={`w-3 h-3 rounded-full border-2 ${i === 1 ? "border-[hsl(var(--flow-blue))] bg-[hsl(var(--flow-blue))]" : "border-muted-foreground/30"}`} />
                <span className="text-foreground">{f}</span>
              </div>
            ))}
          </div>
          <div className="mt-2 border border-dashed border-[hsl(var(--flow-orange)/0.3)] rounded px-2 py-1.5 text-xs text-[hsl(var(--flow-orange))]">
            + Agregar nueva plantilla...
          </div>
        </FlowCard>
        <FlowArrow />
        <FlowCard color="purple">
          <div className="flex items-center gap-2 mb-2">
            <ClipboardList className="h-4 w-4 text-[hsl(var(--flow-purple))]" />
            <span className="font-semibold text-sm text-foreground">Variables Dinámicas en Plantillas</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {["{{nombre}}", "{{cedula}}", "{{fecha}}", "{{campo_custom}}"].map((v, i) => (
              <span key={v} className={`px-2 py-1 rounded text-xs font-mono ${i === 3 ? "bg-[hsl(var(--flow-green-light))] border border-[hsl(var(--flow-green)/0.3)] text-[hsl(var(--flow-green))]" : "bg-muted/50 text-foreground"}`}>{v}</span>
            ))}
          </div>
        </FlowCard>
        <FlowArrow />
        <FlowCard color="green" className="text-center">
          <Download className="h-6 w-6 mx-auto mb-2 text-[hsl(var(--flow-green))]" />
          <p className="text-sm font-bold text-foreground">Generar</p>
        </FlowCard>
      </div>
    ),
  },
  {
    id: "bitacora",
    label: "Bitácora",
    icon: History,
    color: "bg-[hsl(var(--flow-teal))]",
    content: () => (
      <div className="max-w-lg mx-auto">
        <h4 className="text-xl font-bold text-foreground text-center mb-1">Historial de Cambios (Bitácora)</h4>
        <div className="flex items-center justify-center gap-2 mb-8">
          <Badge label="Workflow No-Code" color="bg-[hsl(var(--flow-teal))]" />
          <span className="text-xs text-muted-foreground">Filtros y eventos configurables</span>
        </div>
        <FlowCard color="teal" className="text-center">
          <Clock className="h-6 w-6 mx-auto mb-2 text-[hsl(var(--flow-teal))]" />
          <p className="text-sm font-medium text-foreground">Abre Historial de Cambios</p>
        </FlowCard>
        <FlowArrow />
        <FlowCard color="neutral">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="h-4 w-4 text-[hsl(var(--flow-purple))]" />
            <span className="font-semibold text-sm text-foreground">Filtros de Consulta</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-3">
            {["Colección", "IdSolicitud", "Desde fecha", "Hasta fecha", "Usuario"].map((f) => (
              <span key={f} className="bg-muted/50 rounded px-2 py-1.5">{f}</span>
            ))}
            <span className="bg-[hsl(var(--flow-purple-light))] border border-[hsl(var(--flow-purple)/0.2)] rounded px-2 py-1.5 text-[hsl(var(--flow-purple))]">+ Filtro custom</span>
          </div>
          <div className="flex gap-2">
            <span className="flex items-center gap-1.5 border border-border rounded-md px-2.5 py-1.5 text-xs font-medium text-foreground"><Search className="h-3 w-3" />Consultar</span>
            <span className="flex items-center gap-1.5 border border-border rounded-md px-2.5 py-1.5 text-xs font-medium text-foreground"><Download className="h-3 w-3" />Exportar</span>
          </div>
        </FlowCard>
        <FlowArrow />
        <FlowCard color="neutral">
          <div className="flex items-center gap-2 mb-3">
            <Table2 className="h-4 w-4 text-[hsl(var(--flow-teal))]" />
            <span className="font-semibold text-sm text-foreground">Resultados de Bitácora</span>
          </div>
          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left px-3 py-2 font-medium text-muted-foreground">Usuario</th>
                  <th className="text-left px-3 py-2 font-medium text-muted-foreground">Descripción</th>
                  <th className="text-left px-3 py-2 font-medium text-muted-foreground">Fecha</th>
                  <th className="text-left px-3 py-2 font-medium text-muted-foreground">Hora</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { user: "admin", desc: "Cambio estado", date: "05/02", time: "14:30", bg: "bg-[hsl(var(--flow-orange-light))]" },
                  { user: "user1", desc: "Modif. expediente", date: "05/02", time: "10:15", bg: "bg-[hsl(var(--flow-blue-light))]" },
                  { user: "sistema", desc: "Ejecución regla", date: "04/02", time: "18:00", bg: "bg-[hsl(var(--flow-green-light))]" },
                ].map((r) => (
                  <tr key={r.time} className={r.bg}>
                    <td className="px-3 py-2 font-medium text-foreground">{r.user}</td>
                    <td className="px-3 py-2 text-muted-foreground">{r.desc}</td>
                    <td className="px-3 py-2 text-muted-foreground">{r.date}</td>
                    <td className="px-3 py-2 text-muted-foreground">{r.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FlowCard>
      </div>
    ),
  },
];

const ModulesSection = () => {
  const [activeTab, setActiveTab] = useState("colecciones");
  const active = workflows.find((w) => w.id === activeTab)!;

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-6 max-w-5xl">
        <motion.div {...fade()} className="text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-sysde-red mb-2">Funcionalidades</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Gestión y Workflow No-Code
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cada proceso se diseña visualmente sin código: flujos de afiliación, procesos ISO y cualquier workflow personalizado para tu operación.
          </p>
        </motion.div>

        {/* ── DIAGRAMA: Gestión de Flujos ── */}
        <motion.div {...fade()} className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-2 text-center">Gestión de Flujos Digitales</h3>
          <p className="text-sm text-muted-foreground text-center mb-8">Todo es configurable y editable sin código</p>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-10">
            <div className="max-w-xl mx-auto">
              {/* Diseño de Flujos */}
              <FlowCard color="blue">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Workflow className="h-5 w-5 text-[hsl(var(--flow-blue))]" />
                    <span className="font-bold text-sm text-foreground">Diseño de Flujos</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="w-6 h-6 rounded-lg bg-[hsl(var(--flow-blue)/0.2)] flex items-center justify-center cursor-pointer hover:bg-[hsl(var(--flow-blue)/0.3)] transition-colors"><Plus className="h-3 w-3 text-[hsl(var(--flow-blue))]" /></span>
                    <span className="w-6 h-6 rounded-lg bg-[hsl(var(--flow-orange)/0.2)] flex items-center justify-center cursor-pointer hover:bg-[hsl(var(--flow-orange)/0.3)] transition-colors"><Pencil className="h-3 w-3 text-[hsl(var(--flow-orange))]" /></span>
                    <span className="w-6 h-6 rounded-lg bg-[hsl(var(--flow-purple)/0.2)] flex items-center justify-center cursor-pointer hover:bg-[hsl(var(--flow-purple)/0.3)] transition-colors"><Settings2 className="h-3 w-3 text-[hsl(var(--flow-purple))]" /></span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {["Etapas", "Decisiones", "Asignaciones"].map((t) => (
                    <span key={t} className="bg-card border border-border rounded-lg px-2 py-1.5 text-center text-muted-foreground flex items-center justify-center gap-1">
                      <Settings2 className="h-3 w-3" />{t}
                    </span>
                  ))}
                </div>
                <p className="text-[10px] text-[hsl(var(--flow-blue))] mt-3 text-center">Editable -- Adapta cada flujo a las reglas de negocio</p>
              </FlowCard>

              <FlowArrow />

              {/* Expediente Completo */}
              <FlowCard color="purple">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FolderSearch className="h-5 w-5 text-[hsl(var(--flow-purple))]" />
                    <span className="font-bold text-sm text-foreground">Expediente Completo</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="w-6 h-6 rounded-lg bg-[hsl(var(--flow-blue)/0.2)] flex items-center justify-center"><Plus className="h-3 w-3 text-[hsl(var(--flow-blue))]" /></span>
                    <span className="w-6 h-6 rounded-lg bg-[hsl(var(--flow-orange)/0.2)] flex items-center justify-center"><Pencil className="h-3 w-3 text-[hsl(var(--flow-orange))]" /></span>
                  </div>
                </div>
                <div className="space-y-1.5">
                  {[
                    { label: "Documentos del caso", color: "orange" as const },
                    { label: "Historial de acciones", color: "blue" as const },
                    { label: "Responsables asignados", color: "green" as const },
                    { label: "Estados y resoluciones", color: "teal" as const },
                  ].map((s) => {
                    const borderColors = {
                      orange: "border-[hsl(var(--flow-orange)/0.3)] bg-[hsl(var(--flow-orange-light))]",
                      blue: "border-[hsl(var(--flow-blue)/0.3)] bg-[hsl(var(--flow-blue-light))]",
                      green: "border-[hsl(var(--flow-green)/0.3)] bg-[hsl(var(--flow-green-light))]",
                      teal: "border-[hsl(var(--flow-teal)/0.3)] bg-[hsl(var(--flow-teal-light))]",
                    };
                    return (
                      <div key={s.label} className={`flex items-center justify-between text-xs px-3 py-2 rounded-lg border ${borderColors[s.color]}`}>
                        <span className="text-foreground font-medium">{s.label}</span>
                        <div className="flex gap-1">
                          <Pencil className="h-3 w-3 text-muted-foreground" />
                          <Settings2 className="h-3 w-3 text-muted-foreground" />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p className="text-[10px] text-[hsl(var(--flow-purple))] mt-3 text-center">Configurable -- Centraliza todo en un solo lugar</p>
              </FlowCard>

              <FlowArrow />

              {/* Asignación y Roles */}
              <FlowCard color="green">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-[hsl(var(--flow-green))]" />
                    <span className="font-bold text-sm text-foreground">Asignación y Roles</span>
                  </div>
                  <span className="w-6 h-6 rounded-lg bg-[hsl(var(--flow-green)/0.2)] flex items-center justify-center"><Settings2 className="h-3 w-3 text-[hsl(var(--flow-green))]" /></span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <span className="bg-card border border-border rounded-lg px-2 py-1.5 text-center text-muted-foreground">Automática</span>
                  <span className="bg-card border border-border rounded-lg px-2 py-1.5 text-center text-muted-foreground">Manual</span>
                  <span className="col-span-2 bg-card border border-border rounded-lg px-2 py-1.5 text-center text-muted-foreground flex items-center justify-center gap-1">
                    <Shield className="h-3 w-3" /> Permisos por rol editables
                  </span>
                </div>
                <p className="text-[10px] text-[hsl(var(--flow-green))] mt-3 text-center">Editable -- Define perfiles y permisos por usuario</p>
              </FlowCard>

              <FlowArrow />

              {/* Estados Automáticos */}
              <FlowCard color="orange">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-[hsl(var(--flow-orange))]" />
                    <span className="font-bold text-sm text-foreground">Estados Automáticos</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="w-6 h-6 rounded-lg bg-[hsl(var(--flow-orange)/0.2)] flex items-center justify-center"><Plus className="h-3 w-3 text-[hsl(var(--flow-orange))]" /></span>
                    <span className="w-6 h-6 rounded-lg bg-[hsl(var(--flow-blue)/0.2)] flex items-center justify-center"><Pencil className="h-3 w-3 text-[hsl(var(--flow-blue))]" /></span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                  {["Nuevo", "En proceso", "Revisión", "Aprobado", "Cerrado"].map((s, i) => (
                    <div key={s} className="flex items-center gap-1.5 shrink-0">
                      <span className={`px-2 py-1 rounded-md text-[10px] font-medium border ${
                        i === 0 ? "border-[hsl(var(--flow-blue)/0.3)] bg-[hsl(var(--flow-blue-light))] text-[hsl(var(--flow-blue))]" :
                        i === 1 ? "border-[hsl(var(--flow-orange)/0.3)] bg-[hsl(var(--flow-orange-light))] text-[hsl(var(--flow-orange))]" :
                        i === 2 ? "border-[hsl(var(--flow-purple)/0.3)] bg-[hsl(var(--flow-purple-light))] text-[hsl(var(--flow-purple))]" :
                        i === 3 ? "border-[hsl(var(--flow-green)/0.3)] bg-[hsl(var(--flow-green-light))] text-[hsl(var(--flow-green))]" :
                        "border-[hsl(var(--flow-teal)/0.3)] bg-[hsl(var(--flow-teal-light))] text-[hsl(var(--flow-teal))]"
                      }`}>{s}</span>
                      {i < 4 && <ArrowDown className="h-3 w-3 text-muted-foreground/40 rotate-[-90deg]" />}
                    </div>
                  ))}
                </div>
                <div className="mt-2 border border-dashed border-[hsl(var(--flow-orange)/0.3)] rounded-lg px-2 py-1.5 text-[10px] text-[hsl(var(--flow-orange))] text-center">
                  + Agregar nuevo estado personalizado
                </div>
                <p className="text-[10px] text-[hsl(var(--flow-orange))] mt-2 text-center">Editable -- Crea tus propios estados y transiciones</p>
              </FlowCard>
            </div>
          </div>
        </motion.div>

        {/* ── DIAGRAMA: Ciclo de Vida del Expediente ── */}
        <motion.div {...fade()} className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-2 text-center">Ciclo de Vida del Expediente</h3>
          <p className="text-sm text-muted-foreground text-center mb-8">Cada etapa es configurable y adaptable a tus procesos</p>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-10">
            <div className="max-w-xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Badge label="Workflow No-Code" color="bg-[hsl(var(--flow-purple))]" />
                <span className="text-xs text-muted-foreground">Flujo 100% editable</span>
              </div>

              {[
                { step: "1", title: "Creación", desc: "Ingreso del caso y documentos iniciales", color: "blue" as const, icon: Plus },
                { step: "2", title: "Procesamiento", desc: "Ejecución de etapas según el flujo definido", color: "orange" as const, icon: Workflow },
                { step: "3", title: "Revisión", desc: "Validación y aprobación por supervisores", color: "purple" as const, icon: CheckCircle2 },
                { step: "4", title: "Cierre", desc: "Resolución y archivo del expediente", color: "green" as const, icon: FileText },
              ].map((item, i) => (
                <div key={item.step}>
                  <FlowCard color={item.color}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center">
                          <span className="text-xs font-bold text-foreground">{item.step}</span>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-foreground">{item.title}</p>
                          <p className="text-[11px] text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <span className="w-6 h-6 rounded-lg bg-card border border-border flex items-center justify-center cursor-pointer hover:shadow transition-shadow"><Pencil className="h-3 w-3 text-muted-foreground" /></span>
                        <span className="w-6 h-6 rounded-lg bg-card border border-border flex items-center justify-center cursor-pointer hover:shadow transition-shadow"><Settings2 className="h-3 w-3 text-muted-foreground" /></span>
                      </div>
                    </div>
                  </FlowCard>
                  {i < 3 && <FlowArrow />}
                </div>
              ))}
              <div className="mt-3 border-2 border-dashed border-[hsl(var(--flow-purple)/0.3)] rounded-xl p-4 text-center cursor-pointer hover:bg-[hsl(var(--flow-purple-light))] transition-colors">
                <p className="text-sm text-[hsl(var(--flow-purple))] font-medium">+ Agregar nueva etapa al flujo</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── DIAGRAMA: Integraciones ── */}
        <motion.div {...fade()} className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-2 text-center">Integraciones y Conectividad</h3>
          <p className="text-sm text-muted-foreground text-center mb-8">Configura las integraciones que necesites para tu operación</p>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-10">
            <div className="max-w-xl mx-auto">
              <FlowCard color="neutral" className="mb-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[hsl(var(--flow-blue))] to-[hsl(var(--flow-purple))] flex items-center justify-center">
                    <Puzzle className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="font-bold text-sm text-foreground">Centro de Integraciones</span>
                  <span className="ml-auto w-6 h-6 rounded-lg bg-[hsl(var(--flow-blue)/0.15)] flex items-center justify-center"><Settings2 className="h-3 w-3 text-[hsl(var(--flow-blue))]" /></span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Code2, title: "API REST", desc: "Endpoints seguros para ERPs y sistemas externos", color: "blue" as const, active: true },
                    { icon: Globe, title: "Embed Web", desc: "iframes y componentes para el sitio de Occidente", color: "teal" as const, active: true },
                    { icon: Puzzle, title: "Webhooks", desc: "Notificaciones en tiempo real a sistemas externos", color: "orange" as const, active: false },
                    { icon: MonitorSmartphone, title: "Multi-Plataforma", desc: "Navegador, móvil, tablet — sin instalación", color: "purple" as const, active: true },
                  ].map((item) => (
                    <FlowCard key={item.title} color={item.color} className="relative">
                      <div className="absolute top-2 right-2">
                        <div className={`w-2.5 h-2.5 rounded-full ${item.active ? "bg-[hsl(var(--flow-green))]" : "bg-muted-foreground/30"}`} />
                      </div>
                      <item.icon className="h-5 w-5 text-foreground mb-2" />
                      <p className="text-xs font-semibold text-foreground mb-0.5">{item.title}</p>
                      <p className="text-[10px] text-muted-foreground leading-tight">{item.desc}</p>
                      <div className="flex gap-1 mt-2">
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-card border border-border text-muted-foreground">Configurar</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-card border border-border text-muted-foreground">Editar</span>
                      </div>
                    </FlowCard>
                  ))}
                </div>
              </FlowCard>
              <div className="border-2 border-dashed border-[hsl(var(--flow-teal)/0.3)] rounded-xl p-3 text-center cursor-pointer hover:bg-[hsl(var(--flow-teal-light))] transition-colors">
                <p className="text-sm text-[hsl(var(--flow-teal))] font-medium">+ Agregar nueva integración</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Workflow Tabs */}
        <motion.div {...fade(0.1)} className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-2 text-center">Diagramas de Flujo Interactivos</h3>
          <p className="text-sm text-muted-foreground text-center mb-8">Explora cómo funciona cada módulo del sistema</p>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {workflows.map((w) => (
              <button
                key={w.id}
                onClick={() => setActiveTab(w.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === w.id
                    ? `${w.color} text-primary-foreground shadow-lg scale-105`
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                <w.icon className="h-4 w-4" />
                {w.label}
              </button>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-10 min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                {active.content()}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ── DIAGRAMA: Roles y Perfiles ── */}
        <motion.div {...fade()}>
          <h3 className="text-2xl font-bold text-foreground mb-2 text-center">Roles y Perfiles de Usuario</h3>
          <p className="text-sm text-muted-foreground text-center mb-8">Configura los permisos y accesos de cada rol</p>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-10">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Badge label="Workflow No-Code" color="bg-[hsl(var(--flow-green))]" />
                <span className="text-xs text-muted-foreground">Permisos editables por rol</span>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    icon: Shield, title: "Supervisor", color: "orange" as const,
                    perms: ["Configurar flujos", "Asignar casos", "Aprobar/Rechazar", "Ver todo"],
                  },
                  {
                    icon: Users, title: "Operador", color: "blue" as const,
                    perms: ["Ejecutar tareas", "Cargar documentos", "Registrar gestiones", "Ver asignados"],
                  },
                  {
                    icon: Gavel, title: "Auditor", color: "green" as const,
                    perms: ["Lectura completa", "Revisar bitácora", "Cumplimiento ISO", "Exportar datos"],
                  },
                ].map((role) => (
                  <FlowCard key={role.title} color={role.color}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <role.icon className="h-5 w-5 text-foreground" />
                        <span className="font-bold text-sm text-foreground">{role.title}</span>
                      </div>
                      <div className="flex gap-1">
                        <span className="w-5 h-5 rounded bg-card border border-border flex items-center justify-center"><Pencil className="h-2.5 w-2.5 text-muted-foreground" /></span>
                        <span className="w-5 h-5 rounded bg-card border border-border flex items-center justify-center"><Settings2 className="h-2.5 w-2.5 text-muted-foreground" /></span>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      {role.perms.map((p) => (
                        <div key={p} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="h-3 w-3 text-[hsl(var(--flow-green))]" />
                          {p}
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 border border-dashed border-border rounded px-2 py-1 text-[10px] text-muted-foreground text-center">
                      + Agregar permiso
                    </div>
                  </FlowCard>
                ))}
              </div>
              <div className="mt-4 border-2 border-dashed border-[hsl(var(--flow-green)/0.3)] rounded-xl p-3 text-center cursor-pointer hover:bg-[hsl(var(--flow-green-light))] transition-colors">
                <p className="text-sm text-[hsl(var(--flow-green))] font-medium">+ Agregar nuevo rol personalizado</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModulesSection;
