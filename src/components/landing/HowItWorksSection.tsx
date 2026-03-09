import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Solicita", desc: "Llena el formulario con los datos básicos de tu empresa y necesidades." },
  { number: "02", title: "Evaluamos", desc: "Nuestro equipo analiza tu perfil y diseña la mejor solución financiera." },
  { number: "03", title: "Recibes", desc: "Obtén tu financiamiento en tiempo récord y haz crecer tu negocio." },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Así de simple
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Tres pasos para transformar el futuro financiero de tu empresa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-border" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="text-center relative"
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="text-primary-foreground font-bold text-lg">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
