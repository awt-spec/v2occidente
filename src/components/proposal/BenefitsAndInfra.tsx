import { motion } from "framer-motion";
import { Server, Wifi, GraduationCap, Users } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.5 },
};

const BenefitsAndInfra = () => (
  <section className="py-20 md:py-28 bg-muted/50">
    <div className="container px-6 max-w-5xl">
      <motion.div {...fade} className="text-center mb-14">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-sysde-red mb-2">Infraestructura</h2>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
          ON-CLOUD: Infraestructura Incluida
        </h3>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {[
          { icon: Server, title: "Servidor de Aplicaciones", specs: ["Microsoft Azure con CPU de 4 núcleos", "Disco duro de 512 GB", "Memoria RAM de 16 GB"] },
          { icon: Wifi, title: "Servicios de Red", specs: ["Respaldo mensual del servidor", "3 meses de retención"] },
          { icon: Users, title: "Usuarios Incluidos", specs: ["20 usuarios en la suscripción", "Acceso web sin instalación local"] },
        ].map((s) => (
          <motion.div key={s.title} {...fade} className="p-6 rounded-xl bg-card border border-border">
            <s.icon className="h-5 w-5 text-sysde-red mb-3" />
            <h4 className="font-semibold text-foreground text-sm mb-3">{s.title}</h4>
            <ul className="space-y-1.5">
              {s.specs.map((sp) => (
                <li key={sp} className="text-xs text-muted-foreground">{sp}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <motion.div {...fade} className="p-6 rounded-2xl border-2 border-border bg-card">
          <h4 className="font-bold text-foreground mb-3">Premisas</h4>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            Si es necesaria la integración con sistemas de terceros, AFP Occidente deberá plantearlos para que sean analizados por SYSDE y en común acuerdo definir dicha gestión y su precio.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Se incluye el acompañamiento por parte de un consultor que brindará respuesta a las consultas de los usuarios una vez implementada la solución.
          </p>
        </motion.div>
        <motion.div {...fade} className="p-6 rounded-2xl border-2 border-border bg-card">
          <div className="flex items-center gap-2 mb-3">
            <GraduationCap className="h-5 w-5 text-muted-foreground" />
            <h4 className="font-bold text-foreground">Capacitación</h4>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Se incluye la capacitación progresiva a los usuarios sobre el uso de los flujos descritos en la propuesta técnica y en general el uso de FileMaster.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default BenefitsAndInfra;
