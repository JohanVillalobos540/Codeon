import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileScreen, faBolt, faShieldHalved, faMicrochip, faGlobe } from '@fortawesome/free-solid-svg-icons';

import Servicios from "@/components/Servicios";
import Portafolio from "@/components/Portafolio";
import Nosotros from "@/components/Nosotros";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <div id="inicio" className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <HeroSlider />
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-accent text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Innovación Tecnológica a tu Alcance
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl">
            Desarrollo de Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Sin Límites</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted max-w-2xl mb-10">
            Transformamos ideas audaces en plataformas digitales escalables y aplicaciones móviles de alto rendimiento. Construimos el futuro de tu negocio hoy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#contacto" 
              className="px-8 py-4 bg-accent text-black text-lg font-bold rounded-md hover:bg-accent-hover transition-all shadow-[0_0_20px_rgba(226,232,240,0.2)] hover:shadow-[0_0_30px_rgba(226,232,240,0.4)] transform hover:-translate-y-1"
            >
              Iniciar mi Proyecto
            </Link>
            <Link 
              href="#portafolio" 
              className="px-8 py-4 glass text-foreground text-lg font-bold rounded-md hover:bg-surface-hover transition-all border border-surface-border"
            >
              Ver Casos de Éxito
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof (Technologies) */}
      <section className="w-full py-16 border-b border-surface-border bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-xs md:text-sm font-medium text-muted/70 uppercase tracking-[0.3em] mb-12">
            Tecnologías de Vanguardia
          </h2>
          <div 
            className="relative w-full max-w-4xl mx-auto overflow-hidden flex py-8 opacity-60 hover:opacity-100 transition-opacity"
            style={{ 
              maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
            }}
          >
            <div className="animate-marquee flex gap-16 md:gap-32 w-max items-center">
              {[...Array(2)].map((_, groupIndex) => (
                <div key={groupIndex} className="flex gap-16 md:gap-32 items-center">
                  {[...Array(3)].map((_, i) => (
                    <div key={`${groupIndex}-${i}`} className="flex gap-16 md:gap-32 items-center">
                      <div className="flex flex-col items-center gap-3 group cursor-default">
                        <div className="transition-transform duration-300 group-hover:scale-110">
                          <Image src="/img/nodedotjs.png?v=2" alt="Node.js" width={48} height={48} className="object-contain w-12 h-12" unoptimized={true} />
                        </div>
                        <span className="text-xs font-mono group-hover:text-accent transition-colors">Node.js</span>
                      </div>
                      <div className="flex flex-col items-center gap-3 group cursor-default">
                        <div className="transition-transform duration-300 group-hover:scale-110">
                          <Image src="/img/react.png?v=2" alt="React" width={48} height={48} className="object-contain w-12 h-12" unoptimized={true} />
                        </div>
                        <span className="text-xs font-mono group-hover:text-accent transition-colors">React</span>
                      </div>
                      <div className="flex flex-col items-center gap-3 group cursor-default">
                        <div className="transition-transform duration-300 group-hover:scale-110">
                          <Image src="/img/nextdotjs.png?v=2" alt="Next.js" width={48} height={48} className="object-contain w-12 h-12" unoptimized={true} />
                        </div>
                        <span className="text-xs font-mono group-hover:text-accent transition-colors">Next.js</span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="w-full py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              ¿Por qué <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">elegirnos?</span>
            </h2>
            <p className="text-muted/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
              No solo escribimos código; construimos arquitecturas sólidas diseñadas para el crecimiento y la seguridad de tu empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group glass p-8 rounded-xl flex flex-col items-start hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.2)] transition-all duration-500 relative overflow-hidden cursor-default">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="w-12 h-12 rounded-lg bg-cyan-500/10 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)] flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 relative z-10">
                <FontAwesomeIcon icon={faBolt} className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 transition-all">Velocidad y Rendimiento</h3>
              <p className="text-muted leading-relaxed relative z-10">
                Optimizamos cada línea de código y cada asset para garantizar tiempos de carga milisegundos y una experiencia de usuario fluida.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group glass p-8 rounded-xl flex flex-col items-start hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)] transition-all duration-500 relative overflow-hidden cursor-default">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)] flex items-center justify-center mb-6 group-hover:bg-purple-500/20 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 relative z-10">
                <FontAwesomeIcon icon={faShieldHalved} className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200 transition-all">Seguridad Robusta</h3>
              <p className="text-muted leading-relaxed relative z-10">
                Implementamos las mejores prácticas de seguridad desde el día uno, protegiendo tus datos y los de tus clientes.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group glass p-8 rounded-xl flex flex-col items-start hover:-translate-y-2 hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] transition-all duration-500 relative overflow-hidden cursor-default">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)] flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 relative z-10">
                <FontAwesomeIcon icon={faGlobe} className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-emerald-200 transition-all">Escalabilidad Global</h3>
              <p className="text-muted leading-relaxed relative z-10">
                Arquitecturas basadas en la nube listas para soportar desde cientos hasta millones de usuarios sin interrupciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insertar componentes de secciones (One-Pager structure) */}
      <Servicios />
      <Portafolio />
      <Nosotros />
      <Contacto />
      <Footer />

    </div>
  );
}
