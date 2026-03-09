const Footer = () => {
  return (
    <footer className="bg-foreground text-background/70 py-12">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-xs">P</span>
            </div>
            <span className="font-semibold text-background tracking-tight">Factoraje Pentágono</span>
          </div>
          <p className="text-sm text-center md:text-right">
            © {new Date().getFullYear()} Factoraje Pentágono. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
