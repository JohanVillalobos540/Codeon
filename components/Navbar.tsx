import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-surface-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="#inicio" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded flex items-center justify-center text-black font-bold text-xl">
            C
          </div>
          <span className="font-bold text-lg tracking-wide text-foreground">
            Codeon<span className="text-accent">.</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex gap-8">
          <Link href="#inicio" className="text-sm font-medium text-muted hover:text-accent transition-colors">
            Inicio
          </Link>
          <Link href="#servicios" className="text-sm font-medium text-muted hover:text-accent transition-colors">
            Servicios
          </Link>
          <Link href="#portafolio" className="text-sm font-medium text-muted hover:text-accent transition-colors">
            Portafolio
          </Link>
          <Link href="#nosotros" className="text-sm font-medium text-muted hover:text-accent transition-colors">
            Nosotros
          </Link>
          <Link href="#contacto" className="text-sm font-medium text-muted hover:text-accent transition-colors">
            Contacto
          </Link>
        </nav>

        <div className="hidden md:flex">
          <Link 
            href="#contacto" 
            className="px-4 py-2 text-sm font-medium bg-accent text-black rounded-md hover:bg-accent-hover transition-colors shadow-[0_0_15px_rgba(226,232,240,0.15)] hover:shadow-[0_0_20px_rgba(226,232,240,0.3)]"
          >
            Iniciar Proyecto
          </Link>
        </div>

        {/* Mobile menu button could go here */}
        <button className="md:hidden text-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>
    </header>
  );
}
