import { motion } from "framer-motion";
import { Car, Landmark, Receipt } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Leasing / Arrendamiento",
    description:
      "Adquiere vehículos, maquinaria y equipo sin descapitalizarte. Mantén tu flujo de efectivo mientras haces crecer tu operación.",
  },
  {
    icon: Landmark,
    title: "Préstamos Empresariales",
    description:
      "Capital de trabajo e inversión con condiciones flexibles adaptadas a las necesidades reales de tu empresa.",
  },
  {
    icon: Receipt,
    title: "Factoraje Financiero",
    description:
      "Convierte tus cuentas por cobrar en liquidez inmediata. No esperes 30, 60 o 90 días para recibir tu dinero.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-background">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Nuestros servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Tres soluciones financieras diseñadas para impulsar cada etapa de tu negocio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative p-8 md:p-10 rounded-2xl border border-border bg-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-6 group-hover:bg-accent/25 transition-colors">
                <service.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
