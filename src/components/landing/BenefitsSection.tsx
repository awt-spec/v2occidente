import { motion } from "framer-motion";
import { Zap, Shield, Clock, Users, Settings, TrendingUp } from "lucide-react";

const benefits = [
  { icon: Clock, title: "Aprobación rápida", desc: "Respuesta en menos de 48 horas hábiles" },
  { icon: TrendingUp, title: "Tasas competitivas", desc: "Las mejores condiciones del mercado" },
  { icon: Shield, title: "Sin garantías excesivas", desc: "Requisitos accesibles y transparentes" },
  { icon: Users, title: "Asesoría personalizada", desc: "Un equipo dedicado a tu proyecto" },
  { icon: Settings, title: "Flexibilidad total", desc: "Esquemas adaptados a tu flujo de efectivo" },
  { icon: Zap, title: "Proceso 100% digital", desc: "Trámites simples desde cualquier lugar" },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/50">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Más que financiamiento, somos tu socio estratégico de crecimiento.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center mx-auto mb-5">
                <b.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
