import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import sysdeLogoColor from "@/assets/sysde-logo-color.png";
import sysdeLogoWhite from "@/assets/sysde-logo-white.png";

const sections = [
  { label: "Plataforma", href: "#presentacion" },
  { label: "Funcionalidades", href: "#modulos" },
  { label: "Infraestructura", href: "#beneficios" },
  { label: "Visión", href: "#vision" },
  { label: "Inversión", href: "#propuesta" },
];

// Sections with red/gradient background where TOC should be white
const redSections = new Set(["#vision"]);

const ProposalNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(sections[0].href);
  const [onRedBg, setOnRedBg] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const href = `#${visible[0].target.id}`;
          setActiveSection(href);
          setOnRedBg(redSections.has(href));
        }
      },
      { root: null, rootMargin: "-30% 0px -50% 0px", threshold: [0.2, 0.4, 0.6, 0.8] },
    );
    sections.forEach(({ href }) => {
      const element = document.querySelector(href);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container px-6 h-14 flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2">
            <img src={sysdeLogoSrc} alt="SYSDE" className={`h-7 transition-all duration-300 ${scrolled ? "" : "brightness-0 invert"}`} />
          </button>
          <div className="hidden md:flex items-center gap-5">
            {sections.map((s) => (
              <button
                key={s.href}
                onClick={() => scrollTo(s.href)}
                className={`text-xs font-medium transition-colors duration-200 ${
                  scrolled ? "text-muted-foreground hover:text-foreground" : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </motion.nav>

      <aside className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40">
        <nav aria-label="Tabla de contenido" className="flex flex-col gap-2">
          {sections.map((section) => {
            const isActive = activeSection === section.href;
            return (
              <button
                key={section.href}
                onClick={() => scrollTo(section.href)}
                className={`group flex items-center justify-end gap-2 transition-all ${
                  onRedBg
                    ? isActive ? "text-primary-foreground" : "text-primary-foreground/60 hover:text-primary-foreground"
                    : isActive ? "text-sysde-red" : "text-muted-foreground hover:text-sysde-red"
                }`}
              >
                <span className={`text-[11px] tracking-wide transition-opacity ${isActive ? "opacity-100" : "opacity-60 group-hover:opacity-100"}`}>
                  {section.label}
                </span>
                <span className={`h-px transition-all ${
                  onRedBg
                    ? isActive ? "w-8 bg-primary-foreground" : "w-5 bg-primary-foreground/30 group-hover:bg-primary-foreground"
                    : isActive ? "w-8 bg-sysde-red" : "w-5 bg-border group-hover:bg-sysde-red"
                }`} />
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default ProposalNav;
