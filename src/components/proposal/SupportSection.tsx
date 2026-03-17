import { motion } from "framer-motion";
import { CheckCircle2, Shield, Infinity, Zap, HeadphonesIcon, Workflow, Users } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.5, delay },
});

const SupportSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-6 max-w-5xl">
        <motion.div {...fade()} className="text-center mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-sysde-red mb-2">Incluido</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Soporte, Capacitación y Evolución Ilimitados
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Todo incluido en tu suscripción — sin costos adicionales
          </p>
        </motion.div>

        <motion.div {...fade(0.1)}>
          <div className="p-8 rounded-2xl border-2 border-sysde-red bg-gradient-to-br from-sysde-red/5 to-sysde-red/10 relative overflow-hidden shadow-lg">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-sysde" />
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full bg-sysde-red text-primary-foreground text-xs font-bold uppercase tracking-wider animate-pulse">Incluido</span>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-sysde-red flex items-center justify-center shadow-md">
                <Infinity className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-2xl">Todo lo que necesitas, sin límites</h4>
                <p className="text-sm text-sysde-red font-medium">Acompañamiento continuo para tu equipo</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: Zap, text: "Licenciamiento de FileMaster" },
                { icon: Users, text: "20 usuarios incluidos" },
                { icon: HeadphonesIcon, text: "Capacitación progresiva ilimitada" },
                { icon: Shield, text: "Mantenimiento evolutivo ilimitado" },
                { icon: CheckCircle2, text: "Infraestructura en la nube (Azure)" },
                { icon: CheckCircle2, text: "Soporte y acompañamiento ilimitado" },
                { icon: CheckCircle2, text: "Acceso web desde cualquier navegador" },
                { icon: Workflow, text: "1 flujo digital incluido en la suscripción" },
              ].map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                >
                  <item.icon className="h-4 w-4 text-sysde-red mt-0.5 flex-shrink-0" />
                  {item.text}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportSection;
