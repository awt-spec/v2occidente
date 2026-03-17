import { motion } from "framer-motion";
import { FileText, GitBranch, Settings, Contact } from "lucide-react";

const ExecutiveLetter = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-sysde-red mb-2">
            Plataforma
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Automatización de Procesos de AFP Occidente
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mb-12">
            FileMaster es la plataforma central para automatizar cualquier proceso que AFP Occidente requiera digitalizar. Cada flujo se adapta ágilmente a las reglas de negocio específicas e incluye configuración, implementación y capacitación.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: FileText,
                title: "Flujo de Afiliación",
                desc: "Digitalización completa del proceso de afiliación, desde la recepción de documentos hasta la aprobación y registro del afiliado.",
              },
              {
                icon: Settings,
                title: "Procesos ISO",
                desc: "Flujos que cumplen con los estándares ISO requeridos, garantizando trazabilidad y control documental.",
              },
              {
                icon: Contact,
                title: "CRM Básico",
                desc: "Gestión de agendas, expedientes y calendarios de vendedores integrada en FileMaster. Para campañas masivas se evalúa integración con CRM especializado.",
              },
              {
                icon: GitBranch,
                title: "Flujos Adicionales",
                desc: "Cualquier proceso que AFP Occidente requiera digitalizar puede ser moldeado e implementado, adaptándose a las reglas de negocio específicas.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-7 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-sysde-red/10 flex items-center justify-center mb-4">
                  <item.icon className="h-5 w-5 text-sysde-red" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="p-6 rounded-xl bg-muted/50 border border-border"
          >
            <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider text-sysde-red">Primer Flujo: Implementación por SYSDE</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              SYSDE realizará la implementación del primer flujo digital (estimado en 80 horas). Este flujo será configurado, personalizado y puesto en producción por el equipo de consultores de SYSDE, incluyendo migración de datos y capacitación del equipo de AFP Occidente.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExecutiveLetter;
