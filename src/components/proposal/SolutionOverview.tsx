import { motion } from "framer-motion";
import { Workflow, FolderSearch, Users, BarChart3, Globe, Code2, Puzzle } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const SolutionOverview = () => (
  <section className="py-20 md:py-28 bg-muted/50">
    <div className="container px-6 max-w-5xl">
      <motion.div {...fade} className="text-center mb-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-sysde-red mb-2">Gestión & Funcionalidades</h2>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Gestión de Flujos Digitales
        </h3>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Herramientas completas para el diseño, ejecución y supervisión de flujos de trabajo digitales adaptados a AFPC Occidente.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 mb-16">
        {[
          {
            icon: Workflow,
            title: "Diseño de Flujos",
            desc: "Modelado visual de procesos con etapas, decisiones y asignaciones automáticas. Cada flujo se adapta a las reglas de negocio de AFPC Occidente.",
          },
          {
            icon: FolderSearch,
            title: "Expediente Completo",
            desc: "Cada caso cuenta con un expediente digital que centraliza documentos, historial de acciones, responsables y estados en un solo lugar.",
          },
          {
            icon: Users,
            title: "Asignación y Roles",
            desc: "Los casos se asignan automáticamente o manualmente a los usuarios correspondientes, con perfiles y permisos definidos por rol.",
          },
          {
            icon: BarChart3,
            title: "Estados Automáticos",
            desc: "El sistema actualiza automáticamente el estado de cada expediente conforme avanza en el flujo, garantizando visibilidad en tiempo real.",
          },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-7 rounded-2xl border border-border bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center mb-4">
              <item.icon className="h-5 w-5 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Integraciones y APIs */}
      <motion.div {...fade} className="mb-16">
        <h3 className="text-2xl font-bold text-foreground mb-2 text-center">Integraciones y Conectividad</h3>
        <p className="text-sm text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          FileMaster se integra con los sistemas existentes de AFPC Occidente mediante APIs y componentes embebibles.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: Code2,
              title: "API REST",
              desc: "Endpoints seguros para conectar con sistemas externos, ERPs y bases de datos de terceros.",
              color: "from-[hsl(var(--flow-blue))] to-[hsl(var(--flow-purple))]",
            },
            {
              icon: Globe,
              title: "Embed Web",
              desc: "Embebe FileMaster directamente en el sitio web de AFP Occidente con iframes o componentes.",
              color: "from-[hsl(var(--flow-teal))] to-[hsl(var(--flow-green))]",
            },
            {
              icon: Puzzle,
              title: "Webhooks",
              desc: "Notificaciones en tiempo real a sistemas externos cuando ocurren eventos en los flujos.",
              color: "from-[hsl(var(--flow-orange))] to-[hsl(var(--sysde-red))]",
            },
            {
              icon: Globe,
              title: "100% Web",
              desc: "Funciona en cualquier navegador sin instalación. Responsive y adaptable a cualquier dispositivo.",
              color: "from-[hsl(var(--flow-purple))] to-[hsl(var(--flow-blue))]",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative p-5 rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3`}>
                <item.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Ciclo de vida */}
      <motion.div {...fade}>
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Ciclo de Vida del Expediente</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { step: "1", title: "Creación", desc: "Ingreso del caso y documentos iniciales" },
            { step: "2", title: "Procesamiento", desc: "Ejecución de etapas según el flujo definido" },
            { step: "3", title: "Revisión", desc: "Validación y aprobación por supervisores" },
            { step: "4", title: "Cierre", desc: "Resolución y archivo del expediente" },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="p-5 rounded-xl bg-card border border-border text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-full bg-sysde-red/10 flex items-center justify-center mx-auto mb-3">
                <span className="text-sysde-red font-bold text-sm">{item.step}</span>
              </div>
              <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SolutionOverview;
