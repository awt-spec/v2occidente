import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useCallback } from "react";
import {
  Workflow, FileText, Shield, Users,
  Code2, Globe, Puzzle, Bell,
  Contact, ClipboardList, RefreshCw,
  HeadphonesIcon, MessageSquare,
  Award, FileCheck, FolderOpen,
  Mail, Building2,
  Database, Send,
  Calendar, UserCheck,
  ChevronRight, ChevronDown, ArrowRight, Pencil, MousePointerClick,
  Phone, FileSpreadsheet, QrCode,
  TicketCheck, Search, Clock, CheckCircle2,
  Shield as ShieldIcon,
  Plus, X, GitBranch, Diamond, Circle, Square,
  GripVertical, Settings, Eye, ZoomIn, ZoomOut, Maximize2, Move,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

/* ══════════════════════════════════════════
   DATA
   ══════════════════════════════════════════ */

const channels = [
  { icon: Globe, label: "Sitio Web", desc: "Formularios embebidos en el sitio de AFP Occidente" },
  { icon: Mail, label: "Email", desc: "Solicitudes recibidas por correo electrónico" },
  { icon: Building2, label: "Oficinas", desc: "Atención presencial en sucursales" },
  { icon: FileSpreadsheet, label: "Importación", desc: "Carga masiva desde archivos CSV / Excel" },
  { icon: QrCode, label: "QR / Landing", desc: "Campañas con códigos QR y landing pages" },
];

const coreSteps = [
  { icon: FolderOpen, label: "Expediente", desc: "Centraliza documentos, datos personales, beneficiarios y bitácora del afiliado en un solo lugar." },
  { icon: RefreshCw, label: "Ciclo de Vida", desc: "Etapas automáticas: Recepción → Revisión → Aprobación → Registro. Configurable por flujo." },
  { icon: UserCheck, label: "Asignación", desc: "Distribución automática o manual a ejecutivos según zona, carga de trabajo o criterios operativos de AFP Occidente." },
  { icon: Bell, label: "Notificaciones", desc: "Alertas por email, plataforma y webhook en cada cambio de estado o acción requerida." },
];

/* Flow node types: start | process | decision | branch | end */
type FlowNode = {
  id: string;
  type: "start" | "process" | "decision" | "end";
  icon: React.ElementType;
  label: string;
  desc?: string;
  branches?: { label: string; to: string }[];
};

const crmFlow: FlowNode[] = [
  { id: "c1", type: "start", icon: Contact, label: "Registro de Prospecto", desc: "Ingreso del prospecto desde cualquier canal: web, oficina, call center o importación masiva." },
  { id: "c2", type: "process", icon: Search, label: "Verificación de Datos", desc: "Validación automática de duplicados y verificación de datos personales del prospecto." },
  { id: "c3", type: "process", icon: UserCheck, label: "Asignación de Ejecutivo", desc: "Distribución automática o manual al ejecutivo según zona, carga de trabajo o criterios operativos." },
  { id: "c4", type: "process", icon: Calendar, label: "Agendar Cita", desc: "Programación de cita con el prospecto, con notificación automática por email y recordatorio." },
  { id: "c5", type: "decision", icon: Diamond, label: "¿Interesado?", branches: [{ label: "Sí", to: "Seguimiento" }, { label: "No", to: "Archivo" }] },
  { id: "c6", type: "process", icon: MessageSquare, label: "Seguimiento", desc: "Registro de llamadas, emails y reuniones. Bitácora completa de interacciones con el prospecto." },
  { id: "c7", type: "decision", icon: Diamond, label: "¿Acepta Afiliación?", branches: [{ label: "Sí", to: "Documentación" }, { label: "No", to: "Reprogramar" }] },
  { id: "c8", type: "process", icon: FileCheck, label: "Documentación", desc: "Recepción y validación de documentos requeridos para la afiliación: DPI, formularios, beneficiarios." },
  { id: "c9", type: "end", icon: CheckCircle2, label: "Afiliación Exitosa", desc: "Prospecto convertido en afiliado activo de AFP Occidente. Se genera expediente digital completo." },
];

const affiliateFlow: FlowNode[] = [
  { id: "a1", type: "start", icon: MessageSquare, label: "Solicitud Recibida", desc: "El afiliado registra solicitud, reclamo o consulta por cualquier canal habilitado." },
  { id: "a2", type: "process", icon: ClipboardList, label: "Clasificación", desc: "Tipificación automática: Solicitud, Reclamo, Consulta, Queja. Asignación de prioridad y SLA." },
  { id: "a3", type: "process", icon: UserCheck, label: "Asignación de Ejecutivo", desc: "Distribución al ejecutivo responsable según tipo de caso, zona y disponibilidad." },
  { id: "a4", type: "decision", icon: Diamond, label: "¿Tipo de Caso?", branches: [{ label: "Reclamo", to: "SLA Estricto" }, { label: "Consulta", to: "Respuesta Directa" }] },
  { id: "a5", type: "process", icon: Clock, label: "Gestión con SLA", desc: "Monitoreo de tiempos de respuesta. Alertas automáticas al acercarse al vencimiento del SLA." },
  { id: "a6", type: "process", icon: FileText, label: "Documentar Gestión", desc: "Registro de acciones realizadas, evidencias adjuntas y comunicaciones con el afiliado." },
  { id: "a7", type: "decision", icon: Diamond, label: "¿Resuelto?", branches: [{ label: "Sí", to: "Cierre" }, { label: "No", to: "Escalar" }] },
  { id: "a8", type: "process", icon: Bell, label: "Escalamiento", desc: "Escalar a supervisor o área especializada. Se mantiene trazabilidad completa del caso." },
  { id: "a9", type: "end", icon: CheckCircle2, label: "Resolución y Cierre", desc: "Cierre formal con evidencia, encuesta de satisfacción y registro en bitácora del afiliado." },
];

const isoFlow: FlowNode[] = [
  { id: "i1", type: "start", icon: FileCheck, label: "Planificar Auditoría", desc: "Definición de alcance, criterios, equipo auditor y cronograma de la auditoría interna o externa." },
  { id: "i2", type: "process", icon: Search, label: "Ejecución de Auditoría", desc: "Revisión documental, entrevistas, verificación de procesos y recopilación de evidencias." },
  { id: "i3", type: "decision", icon: Diamond, label: "¿Hallazgos?", branches: [{ label: "Sí", to: "No Conformidad" }, { label: "No", to: "Informe Limpio" }] },
  { id: "i4", type: "process", icon: ClipboardList, label: "Registrar No Conformidad", desc: "Documentación del hallazgo, análisis de causa raíz y definición del plan de acción correctiva." },
  { id: "i5", type: "process", icon: ShieldIcon, label: "Implementar Corrección", desc: "Ejecución de acciones correctivas con responsables, plazos y evidencias de implementación." },
  { id: "i6", type: "decision", icon: Diamond, label: "¿Eficaz?", branches: [{ label: "Sí", to: "Cierre" }, { label: "No", to: "Re-evaluar" }] },
  { id: "i7", type: "process", icon: RefreshCw, label: "Verificación", desc: "Seguimiento para confirmar que las acciones correctivas eliminaron la causa raíz del hallazgo." },
  { id: "i8", type: "end", icon: CheckCircle2, label: "Cierre de Auditoría", desc: "Aprobación formal, informe final y registro en el sistema de gestión de calidad de AFP Occidente." },
];

const apiIntegrations = [
  {
    icon: Database,
    label: "Base de Datos",
    desc: "Conexión directa con bases de datos SQL",
    options: ["SQL Server", "PostgreSQL", "MySQL", "Oracle"],
  },
  {
    icon: Send,
    label: "Envío Masivo",
    desc: "Campañas de email marketing vía API",
    options: ["HubSpot", "Mailchimp", "SendGrid", "ActiveCampaign"],
  },
  {
    icon: Puzzle,
    label: "Sistemas Externos",
    desc: "Conexión con sistemas de AFP Occidente",
    options: ["ERP", "Sysde Pensión", "Firma Digital", "Biométricos"],
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

/* ── Node shape helpers ── */
const nodeColors: Record<FlowNode["type"], string> = {
  start: "bg-[hsl(var(--flow-green))]",
  process: "bg-[hsl(var(--flow-blue))]",
  decision: "bg-[hsl(var(--flow-purple))]",
  end: "bg-sysde-red",
};
const nodeLabels: Record<FlowNode["type"], string> = {
  start: "Inicio",
  process: "Proceso",
  decision: "Decisión",
  end: "Fin",
};

/* ── Canvas node positions — zigzag left→right→left ── */
const getNodePositions = (count: number, canvasW: number, canvasH: number) => {
  const cols = 3;
  const positions: { x: number; y: number }[] = [];
  const padX = 160;
  const padY = 100;
  const usableW = canvasW - padX * 2;
  const rows = Math.ceil(count / cols);
  const rowH = Math.min((canvasH - padY * 2) / Math.max(rows, 1), 220);
  for (let i = 0; i < count; i++) {
    const row = Math.floor(i / cols);
    const col = i % cols;
    const isReversed = row % 2 === 1;
    const actualCol = isReversed ? (cols - 1 - col) : col;
    const x = padX + (usableW / Math.max(cols - 1, 1)) * actualCol;
    const y = padY + row * rowH;
    positions.push({ x, y });
  }
  return positions;
};

/* ── Canvas Flow Node with Drag ── */
const CanvasNode = ({
  node, x, y, index, hoveredNode, setHoveredNode, onDragStart, isDragging,
}: {
  node: FlowNode; x: number; y: number; index: number;
  hoveredNode: string | null; setHoveredNode: (id: string | null) => void;
  onDragStart: (id: string, e: React.MouseEvent) => void;
  isDragging: boolean;
}) => {
  const isHovered = hoveredNode === node.id;
  const isDecision = node.type === "decision";
  const color = nodeColors[node.type];
  return (
    <motion.g initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.08, duration: 0.4 }}>
      <foreignObject x={x - 90} y={y - 60} width={180} height={210}>
        <div className="flex flex-col items-center relative" onMouseEnter={() => setHoveredNode(node.id)} onMouseLeave={() => setHoveredNode(null)}>
          <span className={`text-[9px] uppercase tracking-widest font-bold mb-1.5 ${
            node.type === "start" ? "text-[hsl(var(--flow-green))]" :
            node.type === "end" ? "text-sysde-red" :
            node.type === "decision" ? "text-[hsl(var(--flow-purple))]" :
            "text-muted-foreground"
          }`}>{nodeLabels[node.type]}</span>
          <motion.div
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.15 }}
            className={`relative flex flex-col items-center justify-center w-20 h-20 ${
              isDecision ? "rounded-2xl" : node.type === "start" || node.type === "end" ? "rounded-full" : "rounded-2xl"
            } ${color} text-primary-foreground shadow-lg ${isDragging ? "ring-2 ring-primary shadow-2xl" : isHovered ? "ring-2 ring-primary-foreground/30 shadow-xl" : ""}`}
            style={{ cursor: isDragging ? "grabbing" : "grab" }}
            onMouseDown={(e) => { e.stopPropagation(); onDragStart(node.id, e); }}
          >
            <node.icon className="h-4 w-4 mb-0.5" />
            <p className="text-[8px] font-bold leading-tight text-center px-1.5">{node.label}</p>
          </motion.div>
          <div className="flex gap-1 mt-1">
            <span className="p-0.5 rounded bg-card/80 border border-border/50 shadow-sm"><Pencil className="h-2.5 w-2.5 text-muted-foreground" /></span>
            <span className="p-0.5 rounded bg-card/80 border border-border/50 shadow-sm" style={{ cursor: "grab" }}
              onMouseDown={(e) => { e.stopPropagation(); onDragStart(node.id, e); }}
            ><GripVertical className="h-2.5 w-2.5 text-muted-foreground" /></span>
          </div>
          {isDecision && node.branches && (
            <div className="flex gap-1 mt-0.5">
              {node.branches.map((br, bi) => (
                <span key={br.label} className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[7px] font-bold border ${
                  bi === 0 ? "bg-[hsl(var(--flow-green-light))] border-[hsl(var(--flow-green)/0.3)] text-[hsl(var(--flow-green))]" : "bg-muted border-border text-muted-foreground"
                }`}><GitBranch className="h-2 w-2" />{br.label} → {br.to}</span>
              ))}
            </div>
          )}
          {isHovered && node.desc && (
            <div className="absolute top-full mt-0.5 px-2.5 py-1.5 rounded-xl bg-card border border-border shadow-2xl z-50 w-44">
              <p className="text-[9px] text-muted-foreground leading-relaxed">{node.desc}</p>
            </div>
          )}
        </div>
      </foreignObject>
    </motion.g>
  );
};

/* ── SVG connectors ── */
const CanvasConnectors = ({ positions }: { positions: { x: number; y: number }[] }) => (
  <>
    {positions.map((pos, i) => {
      if (i === positions.length - 1) return null;
      const next = positions[i + 1];
      const row = Math.floor(i / 3);
      const nextRow = Math.floor((i + 1) / 3);
      if (row === nextRow) {
        const startX = Math.min(pos.x, next.x) + 48;
        const endX = Math.max(pos.x, next.x) - 48;
        return <motion.line key={`c-${i}`} x1={startX} y1={pos.y} x2={endX} y2={pos.y} stroke="hsl(var(--border))" strokeWidth={2} strokeDasharray="6 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: i * 0.08 + 0.2, duration: 0.4 }} />;
      } else {
        return <motion.path key={`c-${i}`} d={`M ${pos.x} ${pos.y + 48} L ${pos.x} ${(pos.y + next.y) / 2} L ${next.x} ${(pos.y + next.y) / 2} L ${next.x} ${next.y - 60}`} stroke="hsl(var(--border))" strokeWidth={2} strokeDasharray="6 4" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: i * 0.08 + 0.2, duration: 0.5 }} />;
      }
    })}
  </>
);

/* ── Flow Diagram — popup canvas with drag & drop ── */
const FlowDiagram = ({ icon: Icon, label, color, lightBg, border, nodes, delay }: {
  icon: React.ElementType; label: string; color: string; lightBg: string; border: string; nodes: FlowNode[]; delay: number;
}) => {
  const [open, setOpen] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [zoom, setZoom] = useState(0.8);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const panStart = useRef({ x: 0, y: 0, panX: 0, panY: 0 });
  const canvasW = 900;
  const canvasH = Math.max(450, Math.ceil(nodes.length / 3) * 200 + 160);

  const [nodePositions, setNodePositions] = useState<{ x: number; y: number }[]>([]);
  const [draggingNode, setDraggingNode] = useState<string | null>(null);
  const dragStart = useRef({ x: 0, y: 0, nodeX: 0, nodeY: 0 });

  const initPositions = useCallback(() => {
    setNodePositions(getNodePositions(nodes.length, canvasW, canvasH));
  }, [nodes.length, canvasH]);

  const handleOpen = () => {
    setOpen(true);
    setZoom(0.8);
    setPan({ x: 0, y: 0 });
    initPositions();
  };

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (draggingNode) return;
    setIsPanning(true);
    panStart.current = { x: e.clientX, y: e.clientY, panX: pan.x, panY: pan.y };
  }, [pan, draggingNode]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (draggingNode) {
      const nodeIdx = nodes.findIndex(n => n.id === draggingNode);
      if (nodeIdx === -1) return;
      const dx = (e.clientX - dragStart.current.x) / zoom;
      const dy = (e.clientY - dragStart.current.y) / zoom;
      setNodePositions(prev => {
        const next = [...prev];
        next[nodeIdx] = { x: dragStart.current.nodeX + dx, y: dragStart.current.nodeY + dy };
        return next;
      });
      return;
    }
    if (!isPanning) return;
    setPan({ x: panStart.current.panX + (e.clientX - panStart.current.x), y: panStart.current.panY + (e.clientY - panStart.current.y) });
  }, [isPanning, draggingNode, nodes, zoom]);

  const handleMouseUp = useCallback(() => {
    setIsPanning(false);
    setDraggingNode(null);
  }, []);

  const handleNodeDragStart = useCallback((id: string, e: React.MouseEvent) => {
    const nodeIdx = nodes.findIndex(n => n.id === id);
    if (nodeIdx === -1 || !nodePositions[nodeIdx]) return;
    setDraggingNode(id);
    dragStart.current = { x: e.clientX, y: e.clientY, nodeX: nodePositions[nodeIdx].x, nodeY: nodePositions[nodeIdx].y };
  }, [nodes, nodePositions]);

  const positions = nodePositions.length === nodes.length ? nodePositions : getNodePositions(nodes.length, canvasW, canvasH);

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay, duration: 0.4 }}>
      <button
        onClick={handleOpen}
        className={`w-full text-left p-3 md:p-4 rounded-xl border ${border} ${lightBg} hover:shadow-lg transition-all duration-300`}
      >
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 md:w-10 md:h-10 rounded-xl ${color} flex items-center justify-center`}>
            <Icon className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xs md:text-sm font-bold text-foreground flex-1">{label}</span>
          <div className="flex items-center gap-1.5">
            <span className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-card border border-border text-[8px] font-medium text-muted-foreground"><MousePointerClick className="h-2.5 w-2.5" /> No-Code</span>
            <span className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-card border border-border text-[8px] font-medium text-muted-foreground"><Pencil className="h-2.5 w-2.5" /> Editable</span>
            <span className="px-2 py-0.5 rounded-full bg-card border border-border text-[8px] font-medium text-muted-foreground">{nodes.length} pasos</span>
            <Maximize2 className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[95vw] w-[95vw] h-[85vh] p-0 overflow-hidden flex flex-col bg-[hsl(var(--background))] border-border/30 shadow-2xl">
          <DialogTitle className="sr-only">{label}</DialogTitle>
          <div className="flex items-center gap-3 px-5 py-3 border-b border-border/50 bg-[hsl(var(--muted)/0.5)] backdrop-blur-md flex-shrink-0">
            <div className={`w-8 h-8 rounded-lg ${color} flex items-center justify-center shadow-md`}>
              <Icon className="h-4 w-4 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-sm font-bold text-foreground font-mono tracking-tight">{label}</h3>
              <span className="text-[8px] text-muted-foreground font-mono">Flujo editable No-Code · Arrastra y configura sin programar</span>
            </div>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[hsl(var(--flow-green-light))] border border-[hsl(var(--flow-green)/0.3)] text-[9px] font-mono font-bold text-[hsl(var(--flow-green))]"><Code2 className="h-2.5 w-2.5" /> NO-CODE</span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[hsl(var(--flow-purple-light))] border border-[hsl(var(--flow-purple)/0.3)] text-[9px] font-mono font-bold text-[hsl(var(--flow-purple))]"><Pencil className="h-2.5 w-2.5" /> EDITABLE</span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-muted border border-border text-[9px] font-mono font-bold text-muted-foreground"><GitBranch className="h-2.5 w-2.5" /> {nodes.length} nodos</span>
            <div className="flex-1" />
            <div className="flex items-center gap-1 bg-muted rounded-lg p-0.5 border border-border">
              <button onClick={() => setZoom(z => Math.max(0.4, z - 0.1))} className="p-1.5 rounded hover:bg-card transition-colors"><ZoomOut className="h-3.5 w-3.5 text-muted-foreground" /></button>
              <span className="text-[10px] font-mono text-muted-foreground w-10 text-center">{Math.round(zoom * 100)}%</span>
              <button onClick={() => setZoom(z => Math.min(2, z + 0.1))} className="p-1.5 rounded hover:bg-card transition-colors"><ZoomIn className="h-3.5 w-3.5 text-muted-foreground" /></button>
            </div>
            <button onClick={() => { setZoom(0.8); setPan({ x: 0, y: 0 }); initPositions(); }} className="p-1.5 rounded hover:bg-muted transition-colors border border-border" title="Restablecer"><Maximize2 className="h-3.5 w-3.5 text-muted-foreground" /></button>
          </div>
          <div
            className="flex-1 overflow-hidden relative select-none"
            style={{ cursor: draggingNode ? "grabbing" : isPanning ? "grabbing" : "grab", background: "hsl(var(--muted) / 0.3)" }}
            onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}
          >
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.12]">
              <defs><pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M 30 0 L 0 0 0 30" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" /></pattern></defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
            <div className="w-full h-full flex items-center justify-center" style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`, transformOrigin: "center center", transition: isPanning || draggingNode ? "none" : "transform 0.2s ease-out" }}>
              <svg width={canvasW} height={canvasH} style={{ overflow: "visible" }}>
                <CanvasConnectors positions={positions} />
                {nodes.map((node, i) => (
                  <CanvasNode
                    key={node.id} node={node} x={positions[i].x} y={positions[i].y} index={i}
                    hoveredNode={hoveredNode} setHoveredNode={setHoveredNode}
                    onDragStart={handleNodeDragStart}
                    isDragging={draggingNode === node.id}
                  />
                ))}
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-4 px-5 py-2 border-t border-border/50 bg-[hsl(var(--muted)/0.5)] backdrop-blur-md text-[9px] text-muted-foreground font-mono flex-shrink-0">
            <span className="flex items-center gap-1"><GripVertical className="h-3 w-3" /> Drag nodes</span>
            <span className="flex items-center gap-1"><Move className="h-3 w-3" /> Pan canvas</span>
            <span className="flex items-center gap-1"><ZoomIn className="h-3 w-3" /> Zoom</span>
            <div className="flex-1" />
            <span className="text-[8px] opacity-60">FileMaster Flow Engine v2.0</span>
            <span>{nodes.length} nodos · {nodes.filter(n => n.type === "decision").length} decisiones</span>
          </div>
        </DialogContent>
      </Dialog>
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
  const visibleChannels = showAllChannels ? channels : channels.slice(0, 3);

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
            FileMaster no es un CRM, pero puede funcionar como uno. Permite automatizar todos los procesos manuales que realiza AFP Occidente. Haz clic en cada flujo para explorar sus pasos.
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
                {showAllChannels ? "Menos canales" : `+${channels.length - 3} canales`}
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
              <FlowDiagram
                icon={Contact}
                label="Gestión Comercial (funcionalidad CRM)"
                color="bg-[hsl(var(--flow-orange))]"
                lightBg="bg-[hsl(var(--flow-orange-light))]"
                border="border-[hsl(var(--flow-orange)/0.25)]"
                nodes={crmFlow}
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
              <div className="flex flex-col gap-3">
                <FlowDiagram
                  icon={HeadphonesIcon}
                  label="Atención al Afiliado"
                  color="bg-[hsl(var(--flow-teal))]"
                  lightBg="bg-[hsl(var(--flow-teal-light))]"
                  border="border-[hsl(var(--flow-teal)/0.3)]"
                  nodes={affiliateFlow}
                  delay={0.35}
                />
                <FlowDiagram
                  icon={Award}
                  label="Procesos ISO"
                  color="bg-[hsl(var(--flow-green))]"
                  lightBg="bg-[hsl(var(--flow-green-light))]"
                  border="border-[hsl(var(--flow-green)/0.3)]"
                  nodes={isoFlow}
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
