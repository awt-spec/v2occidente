import { motion } from "framer-motion";
import { FileText, Settings, TrendingUp } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.5, delay },
});

const flows = [
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
    icon: TrendingUp,
    title: "Flujos Adicionales",
    desc: "Cualquier proceso que AFPC Occidente requiera digitalizar puede ser modelado e implementado en FileMaster, adaptándose a las reglas de negocio específicas.",
  },
];

const ModulesSection = () => {
  return (
    <section className="py-16 md:py-28 bg-background">
      <div className="container px-4 md:px-6 max-w-5xl">
        <motion.div {...fade()} className="mb-10 md:mb-14">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-sysde-red mb-2">Plataforma</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Automatización de Procesos
          </h3>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
            SYSDE es experto en la automatización de procesos empresariales a través de su plataforma FileMaster. La solución permite diseñar, implementar y gestionar flujos de trabajo digitales adaptados a las necesidades de cada organización.
          </p>
        </motion.div>

        {/* Flow cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {flows.map((flow, i) => (
            <motion.div
              key={flow.title}
              {...fade(0.1 + i * 0.1)}
              className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow"
            >
              <flow.icon className="h-6 w-6 text-sysde-red mb-4" />
              <h4 className="text-lg font-bold text-foreground mb-2">{flow.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{flow.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Primer flujo callout */}
        <motion.div {...fade(0.3)} className="p-6 rounded-2xl border border-border bg-muted/30">
          <h4 className="text-sm font-bold uppercase tracking-wider text-sysde-red mb-3">
            Primer Flujo: Implementación por SYSDE
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            SYSDE realizará la implementación del primer flujo digital para AFPC Occidente. Este flujo será configurado, personalizado y puesto en producción por el equipo de consultores de SYSDE, asegurando la correcta adopción de la plataforma y capacitando al equipo de AFPC Occidente en el uso de FileMaster.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ModulesSection;
