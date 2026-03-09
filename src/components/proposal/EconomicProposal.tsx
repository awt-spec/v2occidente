import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, CreditCard } from "lucide-react";

const EconomicProposal = () => {
  const [annual, setAnnual] = useState(false);
  const monthlyPrice = 999;
  const annualMonthly = Math.round(monthlyPrice * 0.9);
  const annualTotal = annualMonthly * 12;

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-sysde-red mb-2">Inversión</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Inversión Económica
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Modalidad SaaS (Software as a Service) que permite a AFP Occidente acceder a FileMaster a través de un navegador web y una conexión a Internet.
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <span className={`text-sm font-medium transition-colors ${!annual ? "text-foreground" : "text-muted-foreground"}`}>Mensual</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-14 h-7 rounded-full transition-colors ${annual ? "bg-sysde-red" : "bg-border"}`}
          >
            <span className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-primary-foreground shadow transition-transform ${annual ? "translate-x-7" : ""}`} />
          </button>
          <span className={`text-sm font-medium transition-colors ${annual ? "text-foreground" : "text-muted-foreground"}`}>
            Anual <span className="text-sysde-red font-bold">-10%</span>
          </span>
        </motion.div>

        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="grid grid-cols-2 bg-sysde-red text-primary-foreground">
              <div className="px-6 py-4 font-semibold text-center border-r border-primary-foreground/20">
                Hito
              </div>
              <div className="px-6 py-4 font-semibold text-center">
                Precio USD
              </div>
            </div>
            <div className="grid grid-cols-2 bg-card">
              <div className="px-6 py-5 text-center text-foreground font-medium border-r border-border">
                {annual ? "Suscripción Anual para 20 usuarios" : "Suscripción Mensual para 20 usuarios"}
              </div>
              <div className="px-6 py-5 text-center">
                {annual ? (
                  <div>
                    <span className="text-muted-foreground line-through text-sm mr-2">USD ${(monthlyPrice * 12).toLocaleString()}.00</span>
                    <span className="text-foreground font-bold text-xl">USD ${annualTotal.toLocaleString()}.00</span>
                    <p className="text-xs text-sysde-red font-medium mt-1">USD ${annualMonthly}/mes · Ahorro de ${(monthlyPrice * 12 - annualTotal).toLocaleString()}/año</p>
                  </div>
                ) : (
                  <span className="text-foreground font-bold text-xl">USD ${monthlyPrice.toLocaleString()}.00</span>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* What's included */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="p-8 rounded-2xl border-2 border-border bg-card relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-sysde-red" />
            <h4 className="font-bold text-foreground text-xl mb-4">Servicio Integral Incluido</h4>
            <p className="text-muted-foreground mb-4">
              La suscripción incluye un servicio integral:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Licenciamiento de FileMaster",
                "20 usuarios incluidos",
                "Capacitación progresiva",
                "Mantenimiento evolutivo",
                "Infraestructura en la nube (Azure)",
                "Consultor de acompañamiento",
                "Acceso web desde cualquier navegador",
                "Implementación del primer flujo digital",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-sysde-red mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Payment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h4 className="font-bold text-foreground text-xl mb-4 flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-sysde-red" />
            Método de Pago
          </h4>
          <p className="text-muted-foreground mb-2">
            Se facturará el primer día hábil de cada mes a partir de la firma del contrato. Contrato mínimo de tres años.
          </p>
        </motion.div>

        {/* Terms */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-xl bg-muted/60 border border-border"
        >
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-sysde-red" />
            Términos y Condiciones
          </h4>
          <div className="space-y-2">
            {[
              "Los precios están expresados en USD y no incluyen impuestos, tasas ni retenciones.",
              "Contrato mínimo de tres años para la renta de FileMaster e infraestructura Azure.",
              "Modificaciones a la funcionalidad se realizarán mediante orden de cambio con cotización independiente.",
              "Gastos de viaje de consultores no incluidos; deben indicarse en la etapa de negociación.",
              "Esta propuesta anula cualquier otra entregada anteriormente.",
            ].map((item) => (
              <p key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 flex-shrink-0 mt-1.5" />
                {item}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EconomicProposal;
