import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faMobileScreen, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import Image from "next/image";

export default function Servicios() {
  return (
    <section id="servicios" className="flex flex-col w-full py-24 border-t border-surface-border bg-surface/10">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Servicios</span>
          </h2>
          <p className="text-muted/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Soluciones digitales de principio a fin. Nos especializamos en la creación de productos robustos, escalables y visualmente impresionantes.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          
          {/* Desarrollo Web */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-video rounded-2xl glass overflow-hidden flex items-center justify-center border border-surface-border group">
                <Image 
                  src="/img/desarrollo.png?v=2" 
                  alt="Desarrollo Web a Medida" 
                  fill
                  unoptimized={true}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 flex flex-col items-start">
              <div className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                Web Development
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Desarrollo Web a Medida</h3>
              <p className="text-muted text-lg mb-8 leading-relaxed">
                Creamos plataformas web modernas, desde landing pages ultrarrápidas hasta aplicaciones web progresivas (PWAs) complejas. Utilizamos arquitecturas modernas (React, Next.js) que garantizan SEO óptimo, tiempos de carga mínimos y experiencias inmersivas.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-accent mt-1 shrink-0" />
                  <span><strong>E-commerce & Plataformas B2B:</strong> Sistemas transaccionales seguros y escalables.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-accent mt-1 shrink-0" />
                  <span><strong>SaaS & Dashboards:</strong> Paneles de administración con analíticas en tiempo real.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-accent mt-1 shrink-0" />
                  <span><strong>Landing Pages Corporativas:</strong> Diseño enfocado en la conversión y la estética.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Desarrollo Móvil */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-video rounded-2xl glass overflow-hidden flex items-center justify-center border border-surface-border group">
                <Image 
                  src="/img/Dmoviljpg.jpg?v=2" 
                  alt="Desarrollo de Apps Móviles" 
                  fill
                  unoptimized={true}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 flex flex-col items-start">
              <div className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-semibold mb-6">
                Mobile Development
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Desarrollo de Apps Móviles</h3>
              <p className="text-muted text-lg mb-8 leading-relaxed">
                Llevamos tu negocio al bolsillo de tus clientes. Construimos aplicaciones nativas y multiplataforma con interfaces fluidas y rendimiento nativo, asegurando una experiencia perfecta tanto en iOS como en Android.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-purple-400 mt-1 shrink-0" />
                  <span><strong>Apps Nativas & Cross-Platform:</strong> React Native y Flutter para máxima eficiencia.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-purple-400 mt-1 shrink-0" />
                  <span><strong>Integración de Hardware:</strong> GPS, Cámara, Biometría y notificaciones push.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-purple-400 mt-1 shrink-0" />
                  <span><strong>Publicación en Tiendas:</strong> Gestión completa en App Store y Google Play.</span>
                </li>
              </ul>
              
              <Link 
                href="#contacto" 
                className="px-6 py-3 bg-surface hover:bg-surface-hover text-foreground font-semibold rounded border border-surface-border transition-colors flex items-center gap-2"
              >
                Cotizar Proyecto Móvil <FontAwesomeIcon icon={faMobileScreen} />
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
