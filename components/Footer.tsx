import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="w-full bg-black py-16 border-t border-surface-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="#inicio" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded flex items-center justify-center text-black font-bold text-xl">
                C
              </div>
              <span className="font-bold text-xl tracking-wide text-foreground">
                Codeon<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-muted text-sm max-w-sm">
              Agencia de desarrollo de software especializada en construir soluciones digitales de alto impacto. Transformamos visión en código.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Enlaces Rápidos</h3>
            <ul className="flex flex-col gap-2">
              <li><Link href="#inicio" className="text-muted hover:text-accent text-sm transition-colors">Inicio</Link></li>
              <li><Link href="#servicios" className="text-muted hover:text-accent text-sm transition-colors">Servicios</Link></li>
              <li><Link href="#portafolio" className="text-muted hover:text-accent text-sm transition-colors">Casos de Éxito</Link></li>
              <li><Link href="#nosotros" className="text-muted hover:text-accent text-sm transition-colors">Nuestro Equipo</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors font-bold text-sm">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors font-bold text-sm">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors font-bold text-sm">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors font-bold text-sm">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-surface-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Codeon Agency. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-muted hover:text-foreground transition-colors">Privacidad</a>
            <a href="#" className="text-xs text-muted hover:text-foreground transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
