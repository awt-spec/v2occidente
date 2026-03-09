import { motion } from "framer-motion";
import { useState } from "react";
import { Server, Wifi, GraduationCap, Users, Cpu, HardDrive, MemoryStick, Shield, Cloud, RefreshCw } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.5 },
};

const infraItems = [
  {
    icon: Server,
    title: "Servidor de Aplicaciones",
    color: "from-[hsl(var(--flow-blue))] to-[hsl(var(--flow-purple))]",
    specs: [
      { icon: Cloud, label: "Microsoft Azure" },
      { icon: Cpu, label: "CPU de 4 núcleos" },
      { icon: HardDrive, label: "Disco duro de 512 GB" },
      { icon: MemoryStick, label: "Memoria RAM de 16 GB" },
    ],
  },
  {
    icon: Wifi,
    title: "Servicios de Red",
    color: "from-[hsl(var(--flow-teal))] to-[hsl(var(--flow-green))]",
    specs: [
      { icon: RefreshCw, label: "Respaldo mensual del servidor" },
      { icon: Shield, label: "3 meses de retención" },
    ],
  },
  {
    icon: Users,
    title: "Usuarios Incluidos",
    color: "from-[hsl(var(--flow-orange))] to-[hsl(var(--sysde-red))]",
    specs: [
      { icon: Users, label: "20 usuarios en la suscripción" },
      { icon: Cloud, label: "Acceso web sin instalación local" },
    ],
  },
];

const BenefitsAndInfra = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container px-6 max-w-5xl">
        <motion.div {...fade} className="text-center mb-14">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-sysde-red mb-2">Infraestructura</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            ON-CLOUD: Infraestructura Incluida
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para operar, desplegado en la nube de Microsoft Azure con respaldos y soporte incluido.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {infraItems.map((s, i) => (
            <motion.div
              key={s.title}
              {...fade}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative rounded-2xl bg-card border border-border overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${s.color} transition-all duration-500 ${hoveredCard === i ? "h-3" : ""}`} />
              <div className="p-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4 transition-transform duration-500 ${hoveredCard === i ? "scale-110 rotate-3" : ""}`}>
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="font-bold text-foreground mb-4">{s.title}</h4>
                <div className="space-y-3">
                  {s.specs.map((sp, j) => (
                    <motion.div
                      key={sp.label}
                      initial={false}
                      animate={hoveredCard === i ? { x: 0, opacity: 1 } : { x: 0, opacity: 1 }}
                      transition={{ delay: j * 0.05 }}
                      className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                    >
                      <div className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center shrink-0 group-hover:bg-muted/80 transition-colors">
                        <sp.icon className="h-3.5 w-3.5" />
                      </div>
                      {sp.label}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <motion.div {...fade} className="p-7 rounded-2xl border-2 border-border bg-card hover:shadow-lg transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-[hsl(var(--flow-blue-light))] flex items-center justify-center mb-4">
              <Shield className="h-5 w-5 text-[hsl(var(--flow-blue))]" />
            </div>
            <h4 className="font-bold text-foreground mb-3">Premisas</h4>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Si es necesaria la integración con sistemas de terceros, AFPC Occidente deberá plantearlos para que sean analizados por SYSDE y en común acuerdo definir dicha gestión y su precio.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Se incluye el acompañamiento por parte de un consultor que brindará respuesta a las consultas de los usuarios una vez implementada la solución.
            </p>
          </motion.div>
          <motion.div {...fade} className="p-7 rounded-2xl border-2 border-border bg-card hover:shadow-lg transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-[hsl(var(--flow-green-light))] flex items-center justify-center mb-4">
              <GraduationCap className="h-5 w-5 text-[hsl(var(--flow-green))]" />
            </div>
            <h4 className="font-bold text-foreground mb-3">Capacitación</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Se incluye la capacitación progresiva a los usuarios sobre el uso de los flujos descritos en la propuesta técnica y en general el uso de FileMaster.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsAndInfra;
