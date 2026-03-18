import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CreditCard, FileCheck, Calendar, Shield, Star, Workflow, ChevronDown, Users } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.5, delay },
});

const EconomicProposal = () => {
  const [annual, setAnnual] = useState(false);
  const [championsOpen, setChampionsOpen] = useState(false);
  const monthlyPrice = 1099;
  const annualTotal = Math.round(monthlyPrice * 12 * 0.9);
  const annualMonthly = Math.round(annualTotal / 12);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-6 max-w-5xl">
        <motion.div
          {...fade()}
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
        <motion.div {...fade(0.15)} className="flex items-center justify-center gap-4 mb-10">
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

        {/* Pricing Table */}
        <motion.div {...fade(0.2)} className="mb-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            {/* Header */}
            <div className="bg-sysde-red text-primary-foreground">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-4 text-center font-semibold w-[30%]">Concepto</th>
                    <th className="px-6 py-4 text-center font-semibold w-[40%]">Detalle</th>
                    <th className="px-6 py-4 text-center font-semibold w-[30%]">Precio USD</th>
                  </tr>
                </thead>
              </table>
            </div>
            {/* Body */}
            <table className="w-full">
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-6 py-5 text-foreground font-medium w-[30%] align-middle text-center">
                    {annual ? "Suscripción Anual" : "Suscripción Mensual"}
                  </td>
                  <td className="px-6 py-5 text-sm text-muted-foreground w-[40%] align-middle text-center">
                    20 usuarios + 1 flujo digital incluido
                  </td>
                  <td className="px-6 py-5 w-[30%] align-middle text-center">
                    {annual ? (
                      <div>
                        <span className="text-muted-foreground line-through text-sm block">USD ${(monthlyPrice * 12).toLocaleString()}</span>
                        <span className="text-foreground font-bold text-xl block">USD ${annualTotal.toLocaleString()}</span>
                        <p className="text-xs text-sysde-red font-medium mt-1">USD ${annualMonthly}/mes</p>
                      </div>
                    ) : (
                      <span className="text-foreground font-bold text-xl">USD ${monthlyPrice.toLocaleString()}.00</span>
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-5 text-foreground font-medium w-[30%] align-middle text-center">
                    Flujo adicional
                  </td>
                  <td className="px-6 py-5 text-sm text-muted-foreground w-[40%] align-middle text-center">
                    Cada flujo adicional creado por AFP Occidente — cobro mensual
                  </td>
                  <td className="px-6 py-5 w-[30%] align-middle text-center">
                    <span className="text-foreground font-bold text-xl">USD $99.00</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Nota de usuarios adicionales */}
          <div className="mt-3 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-muted/50 border border-border/50">
            <Users className="h-4 w-4 text-sysde-red flex-shrink-0" />
            <p className="text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">Usuarios adicionales:</span> cada usuario después de los 20 incluidos tiene un costo de <span className="font-bold text-foreground">USD $15.00/mes</span>
            </p>
          </div>
        </motion.div>

        {/* Flujos Adicionales */}
        <motion.div {...fade(0.22)} className="mb-12">
          <div className="p-6 rounded-2xl border-2 border-dashed border-[hsl(var(--flow-purple)/0.3)] bg-[hsl(var(--flow-purple-light))]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-[hsl(var(--flow-purple))] flex items-center justify-center">
                  <Workflow className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">Flujos Adicionales</h4>
                  <p className="text-sm text-muted-foreground">AFP Occidente puede crear flujos ilimitados — <span className="font-bold text-foreground">USD $99/mes</span> cada uno</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-[hsl(var(--flow-purple))] text-primary-foreground text-xs font-bold uppercase tracking-wider">Ilimitados</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Procesos ISO", "Atención al Afiliado", "RRHH", "Compras", "Legal", "Cumplimiento", "Operaciones"].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full bg-card border border-border text-xs font-medium text-foreground">
                  {tag}
                </span>
              ))}
              <span className="px-3 py-1.5 rounded-full bg-[hsl(var(--flow-purple))] text-primary-foreground text-xs font-medium">
                Tu proceso…
              </span>
            </div>
          </div>
        </motion.div>

        {/* FileMaster Champions — Toggle */}
        <motion.div {...fade(0.25)} className="mb-12">
          <button
            onClick={() => setChampionsOpen(!championsOpen)}
            className="w-full p-5 rounded-2xl border-2 border-[hsl(var(--flow-orange)/0.3)] bg-[hsl(var(--flow-orange-light))] relative overflow-hidden text-left transition-all hover:shadow-lg"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(var(--flow-orange))] to-[hsl(var(--sysde-red))]" />
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[hsl(var(--flow-orange))] flex items-center justify-center">
                <Star className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-foreground text-lg">FileMaster Champions</h4>
                <p className="text-sm text-muted-foreground">Diseña tus propios flujos con apoyo experto — <span className="font-bold text-foreground">USD $30/hora</span></p>
              </div>
              <motion.div animate={{ rotate: championsOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              </motion.div>
            </div>
          </button>
          <AnimatePresence>
            {championsOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-3 px-1">
                  <div className="p-5 rounded-xl border border-[hsl(var(--flow-orange)/0.2)] bg-card">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      AFP Occidente puede diseñar y configurar sus propios flujos digitales sin depender del equipo de SYSDE. Nuestros <strong className="text-foreground">FileMaster Champions</strong> son consultores certificados que acompañan a tu equipo en la creación de flujos personalizados.
                    </p>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-foreground">$30</p>
                        <p className="text-xs text-muted-foreground">USD / hora</p>
                      </div>
                      <div className="w-px h-10 bg-border" />
                      <div className="text-sm text-muted-foreground">
                        <p className="font-medium text-foreground mb-1">Acompañamiento por hora</p>
                        <p className="text-xs">Un Champion te guía en el diseño, configuración y puesta en marcha de cada flujo que tu equipo cree.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Payment + Terms Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Método de Pago */}
          <motion.div
            {...fade(0.25)}
            className="p-7 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-[hsl(var(--flow-blue-light))] flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-[hsl(var(--flow-blue))]" />
              </div>
              <h4 className="font-bold text-foreground text-lg">Método de Pago</h4>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
                <Calendar className="h-4 w-4 text-sysde-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Facturación mensual</p>
                  <p className="text-xs text-muted-foreground">Se factura el primer día hábil de cada mes a partir de la firma del contrato.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
                <FileCheck className="h-4 w-4 text-sysde-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Contrato mínimo</p>
                  <p className="text-xs text-muted-foreground">Mínimo doce (12) meses para la renta de FileMaster e infraestructura Azure.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
                <Shield className="h-4 w-4 text-sysde-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Moneda</p>
                  <p className="text-xs text-muted-foreground">Todos los precios en USD (dólares estadounidenses).</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Términos */}
          <motion.div
            {...fade(0.3)}
            className="p-7 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-[hsl(var(--flow-orange-light))] flex items-center justify-center">
                <FileCheck className="h-5 w-5 text-[hsl(var(--flow-orange))]" />
              </div>
              <h4 className="font-bold text-foreground text-lg">Términos y Condiciones</h4>
            </div>
            <div className="space-y-3">
              {[
                { title: "Impuestos", desc: "Los precios no incluyen impuestos, tasas ni retenciones." },
                { title: "Vigencia", desc: "Contrato mínimo de doce (12) meses para la renta de FileMaster." },
                { title: "Modificaciones", desc: "Se realizarán mediante orden de cambio con cotización independiente." },
                { title: "Viáticos", desc: "Gastos de viaje no incluidos; deben indicarse en negociación." },
                { title: "Validez", desc: "Esta propuesta anula cualquier otra entregada anteriormente." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sysde-red flex-shrink-0 mt-2" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EconomicProposal;
