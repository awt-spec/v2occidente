import { motion } from "framer-motion";
import { ClipboardList, FileText, History, Shield, Users, Gavel } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.5, delay },
});

const ModulesSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container px-6 max-w-5xl">
      <motion.div {...fade()} className="text-center mb-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-sysde-red mb-2">Funcionalidades</h2>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          Trazabilidad y Control
        </h3>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Cada acción dentro del expediente queda registrada, garantizando auditoría completa y control total de los procesos.
        </p>
      </motion.div>

      {/* Bitácora y trazabilidad */}
      <motion.div {...fade()} className="mb-16">
        <div className="p-8 rounded-2xl border-2 border-sysde-red/20 bg-card">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-sysde-red/10 flex items-center justify-center">
              <ClipboardList className="h-5 w-5 text-sysde-red" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Bitácora y Trazabilidad</h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Cada acción dentro del flujo queda documentada, asegurando que los supervisores mantengan control de cada paso. La bitácora registra:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Fecha y hora de cada transacción",
              "Usuario responsable de la acción",
              "Detalle de la gestión y resultados",
              "Cambios de estado y decisiones tomadas",
              "Archivos adjuntos en todas las etapas",
              "Documentos generados (formularios, resoluciones)",
              "Historial completo del expediente",
              "Flujo dinámico parametrizable por etapa",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-sysde-red mt-0.5 font-bold">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Capacidades adicionales */}
      <div className="grid sm:grid-cols-3 gap-4 mb-16">
        {[
          { icon: FileText, title: "Gestión Documental", desc: "Carga, almacenamiento y consulta de documentos asociados a cada expediente." },
          { icon: History, title: "Historial Completo", desc: "Visualización cronológica de todas las acciones realizadas en cada caso." },
          { icon: Shield, title: "Seguridad y Permisos", desc: "Control granular de acceso por rol, garantizando que cada usuario vea solo lo que le corresponde." },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="p-5 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow"
          >
            <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center mb-3">
              <item.icon className="h-5 w-5 text-muted-foreground" />
            </div>
            <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Roles */}
      <motion.div {...fade()}>
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Roles y Perfiles de Usuario</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Shield,
              title: "Supervisor",
              desc: "Configura flujos, asigna casos, aprueba o rechaza decisiones y supervisa el avance de todos los expedientes.",
              color: "text-sysde-red",
              bg: "bg-sysde-red/10",
            },
            {
              icon: Users,
              title: "Operador",
              desc: "Ejecuta las tareas asignadas dentro del flujo, carga documentos y registra las gestiones correspondientes.",
              color: "text-muted-foreground",
              bg: "bg-muted",
            },
            {
              icon: Gavel,
              title: "Auditor",
              desc: "Acceso de lectura para revisión de expedientes, bitácoras y cumplimiento de procesos ISO.",
              color: "text-sysde-red",
              bg: "bg-sysde-red/10",
            },
          ].map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-7 rounded-2xl border border-border bg-card"
            >
              <div className={`w-10 h-10 rounded-xl ${role.bg} flex items-center justify-center mb-4`}>
                <role.icon className={`h-5 w-5 ${role.color}`} />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">{role.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{role.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ModulesSection;
