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

const ontology = {
  label: "FileMaster",
  desc: "Plataforma de Automatización de Procesos",
  icon: Workflow,
  branches: [
    {
      label: "Gestión de Flujos",
      desc: "Diseño visual No-Code",
      icon: Workflow,
      color: "from-[hsl(var(--flow-blue))] to-[hsl(var(--flow-blue))]",
      bg: "bg-[hsl(var(--flow-blue-light))]",
      border: "border-[hsl(var(--flow-blue)/0.3)]",
      textColor: "text-[hsl(var(--flow-blue))]",
      leaves: [
        { label: "Ficha del Expediente", desc: "Secciones y campos dinámicos", icon: ClipboardList },
        { label: "Documentos", desc: "Plantillas y generación automática", icon: FileText },
      ],
    },
    {
      label: "Ciclo de Vida",
      desc: "Etapas y estados del proceso",
      icon: RefreshCw,
      color: "from-[hsl(var(--flow-purple))] to-[hsl(var(--flow-purple))]",
      bg: "bg-[hsl(var(--flow-purple-light))]",
      border: "border-[hsl(var(--flow-purple)/0.3)]",
      textColor: "text-[hsl(var(--flow-purple))]",
      leaves: [
        { label: "Bitácora", desc: "Historial completo de cambios", icon: History },
        { label: "Roles y Perfiles", desc: "Permisos editables por usuario", icon: Shield },
      ],
    },
    {
      label: "Colecciones",
      desc: "Organización de datos",
      icon: Layers,
      color: "from-[hsl(var(--flow-orange))] to-[hsl(var(--flow-orange))]",
      bg: "bg-[hsl(var(--flow-orange-light))]",
      border: "border-[hsl(var(--flow-orange)/0.3)]",
      textColor: "text-[hsl(var(--flow-orange))]",
      leaves: [
        { label: "CRM", desc: "Gestión de relaciones", icon: Contact },
        { label: "Notificaciones", desc: "Alertas configurables", icon: Bell },
        { label: "Integraciones", desc: "APIs, webhooks y embed", icon: Puzzle },
      ],
    },
  ],
};

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

        {/* Ontology Tree */}
        <motion.div {...fade(0.1)} className="flex flex-col items-center">
          {/* Root Node */}
          <motion.div
            className="px-8 py-5 rounded-2xl bg-sysde-red text-primary-foreground text-center shadow-xl"
            whileHover={{ scale: 1.03 }}
          >
            <Workflow className="h-7 w-7 mx-auto mb-2" />
            <p className="text-xl font-bold">{ontology.label}</p>
            <p className="text-xs opacity-80 mt-1">{ontology.desc}</p>
          </motion.div>

          {/* Vertical connector from root */}
          <div className="w-px h-8 bg-border" />

          {/* Horizontal line spanning branches */}
          <div className="relative w-full max-w-3xl">
            <div className="absolute top-0 left-[16.67%] right-[16.67%] h-px bg-border" />

            {/* Branches */}
            <div className="grid grid-cols-3 gap-6">
              {ontology.branches.map((branch, bi) => (
                <motion.div
                  key={branch.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + bi * 0.1 }}
                  className="flex flex-col items-center"
                >
                  {/* Vertical connector to branch */}
                  <div className="w-px h-6 bg-border" />

                  {/* Branch node */}
                  <div className={`w-full px-4 py-4 rounded-xl bg-gradient-to-br ${branch.color} text-primary-foreground text-center shadow-md`}>
                    <branch.icon className="h-5 w-5 mx-auto mb-1.5" />
                    <p className="font-bold text-sm">{branch.label}</p>
                    <p className="text-[10px] opacity-80 mt-0.5">{branch.desc}</p>
                  </div>

                  {/* Vertical connector to leaves */}
                  <div className="w-px h-5 bg-border" />

                  {/* Leaves */}
                  <div className="w-full space-y-2">
                    {branch.leaves.map((leaf, li) => (
                      <motion.div
                        key={leaf.label}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + bi * 0.1 + li * 0.06 }}
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg border-2 ${branch.border} ${branch.bg}`}
                      >
                        <leaf.icon className={`h-4 w-4 ${branch.textColor} flex-shrink-0`} />
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-foreground truncate">{leaf.label}</p>
                          <p className="text-[10px] text-muted-foreground truncate">{leaf.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom capabilities row */}
          <div className="w-px h-8 bg-border mt-6" />
          <motion.div
            {...fade(0.35)}
            className="flex flex-wrap justify-center gap-3 mt-0"
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
