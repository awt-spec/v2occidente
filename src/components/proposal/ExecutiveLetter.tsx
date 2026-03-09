import { motion } from "framer-motion";
import { FileText, GitBranch, Settings } from "lucide-react";

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
            Expediente Digital de SYSDE
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mb-12">
            SYSDE es experto en la digitalización de procesos empresariales a través de su plataforma de Expediente Digital, FileMaster. La solución permite diseñar, implementar y gestionar flujos de trabajo digitales adaptados a las necesidades de cada organización.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: FileText,
                title: "Flujo de Afiliación",
                desc: "Digitalización completa del proceso de afiliación de AFPC Occidente, desde la recepción de documentos hasta la aprobación y registro del afiliado.",
              },
              {
                icon: Settings,
                title: "Procesos ISO",
                desc: "Implementación de flujos que cumplan con los estándares ISO requeridos por AFPC Occidente, garantizando trazabilidad y control documental.",
              },
              {
                icon: GitBranch,
                title: "Flujos Adicionales",
                desc: "Cualquier proceso que AFP Occidente requiera digitalizar puede ser modelado e implementado en FileMaster, adaptándose a las reglas de negocio específicas.",
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
              SYSDE realizará la implementación del primer flujo digital para AFP Occidente. Este flujo será configurado, personalizado y puesto en producción por el equipo de consultores de SYSDE, asegurando la correcta adopción de la plataforma y capacitando al equipo de AFP Occidente en el uso de FileMaster.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExecutiveLetter;
