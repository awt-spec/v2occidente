import { motion } from "framer-motion";
import { Target, Rocket, TrendingUp } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.6 },
};

const timelineRows = [
  { stage: "0", task: "Creación de la nueva instancia", weeks: [true, false, false, false] },
  { stage: "1", task: "Implementación del primer flujo digital", weeks: [true, true, false, false] },
  { stage: "2", task: "Ajustes de personalización al flujo", weeks: [false, true, true, false] },
  { stage: "3", task: "Capacitación progresiva y técnica", weeks: [false, false, true, true] },
  { stage: "4", task: "Acompañamiento post implementación", weeks: [false, false, false, true] },
];

const VisionAndTimeline = () => (
  <section className="py-20 md:py-28 bg-gradient-sysde text-primary-foreground">
    <div className="container px-6 max-w-5xl">
      <motion.div {...fade} className="text-center mb-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider opacity-70 mb-2">Visión</h2>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Nuestra visión de la solución
        </h3>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {[
          {
            icon: Rocket,
            title: "Time to Market",
            desc: "Apoyar a AFPC Occidente a digitalizar sus procesos en muy corto plazo, con una plataforma probada que se adapta a sus necesidades específicas.",
          },
          {
            icon: Target,
            title: "Foco en el Negocio",
            desc: "Garantizar el Plan de Proyecto, permitiendo a AFPC Occidente focalizarse en sus factores clave de negocio mientras SYSDE gestiona la solución tecnológica.",
          },
          {
            icon: TrendingUp,
            title: "Crecimiento Eficiente",
            desc: "Colaborar con AFPC Occidente para soportar el crecimiento de su negocio a través de flujos digitales robustos con la flexibilidad de adaptar las reglas de negocio.",
          },
        ].map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 25, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="text-center p-6 rounded-2xl hover:bg-primary-foreground/5 transition-colors duration-300"
          >
            <motion.div
              className="w-14 h-14 rounded-2xl bg-primary-foreground/15 flex items-center justify-center mx-auto mb-5"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <v.icon className="h-6 w-6" />
            </motion.div>
            <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
            <p className="text-sm opacity-75 leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Cronograma */}
      <motion.div {...fade}>
        <h3 className="text-2xl font-bold mb-6 text-center">Cronograma de Implementación</h3>
        <div className="overflow-x-auto rounded-xl bg-primary-foreground/10 p-[2px]">
          <div className="rounded-xl bg-primary-foreground/5 backdrop-blur p-1">
            <table className="w-full min-w-[500px] text-sm">
              <thead>
                <tr className="border-b border-primary-foreground/20">
                  <th className="text-left py-3 px-4 font-semibold opacity-70">Etapa</th>
                  <th className="text-left py-3 px-4 font-semibold opacity-70">Tarea</th>
                  <th className="text-center py-3 px-2 font-semibold">S1</th>
                  <th className="text-center py-3 px-2 font-semibold">S2</th>
                  <th className="text-center py-3 px-2 font-semibold">S3</th>
                  <th className="text-center py-3 px-2 font-semibold">S4</th>
                </tr>
              </thead>
              <tbody>
                {timelineRows.map((row, i) => (
                  <motion.tr
                    key={row.stage}
                    className="border-b border-primary-foreground/10"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                  >
                    <td className="py-3 px-4 font-mono font-bold">{row.stage}</td>
                    <td className="py-3 px-4">{row.task}</td>
                    {row.weeks.map((active, wi) => (
                      <td key={wi} className="py-3 px-2 text-center">
                        {active && (
                          <motion.div
                            className={`w-6 h-2.5 rounded-full mx-auto ${i % 2 === 0 ? 'bg-primary-foreground' : 'bg-primary-foreground/50'}`}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.12 + wi * 0.08 }}
                          />
                        )}
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <motion.p
          className="text-xs text-center mt-4 opacity-60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          Implementación ON-CLOUD — 4 semanas estimadas
        </motion.p>
      </motion.div>
    </div>
  </section>
);

export default VisionAndTimeline;
