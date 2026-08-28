import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLightbulb, faCode, faRocket } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import Image from "next/image";

export default function Portafolio() {
  return (
    <section id="portafolio" className="flex flex-col w-full py-24">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Casos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Éxito</span>
          </h2>
          <p className="text-muted/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            No vendemos humo, mostramos resultados. Explora cómo hemos ayudado a empresas a escalar mediante tecnología de punta.
          </p>
        </div>

        {/* Portfolio Item Skeleton */}
        <div className="flex flex-col gap-16">
          
          {/* Case Study 1 */}
          <div className="glass rounded-2xl p-8 md:p-12 border border-surface-border">
            <div className="flex flex-col lg:flex-row gap-12">
              
              {/* Image / Mockup Area */}
              <div className="w-full lg:w-5/12">
                <div className="w-full aspect-[4/3] bg-surface rounded-xl flex items-center justify-center border border-surface-border relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
                  <p className="text-muted font-mono text-sm">[Screenshot / Mockup de la App]</p>
                </div>
              </div>

              {/* Content Area */}
              <div className="w-full lg:w-7/12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-surface text-xs font-mono rounded text-muted">Fintech</span>
                  <span className="px-3 py-1 bg-surface text-xs font-mono rounded text-muted">Web App</span>
                </div>
                
                <h3 className="text-3xl font-bold mb-8">Plataforma de Inversiones "FinScale"</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  {/* Problem */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-accent">
                      <FontAwesomeIcon icon={faLightbulb} className="text-xl" />
                      <h4 className="font-semibold text-foreground">El Problema</h4>
                    </div>
                    <p className="text-sm text-muted">
                      El cliente contaba con un sistema legacy muy lento que no soportaba más de 100 usuarios concurrentes, provocando caídas durante horas pico del mercado.
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-accent">
                      <FontAwesomeIcon icon={faCode} className="text-xl" />
                      <h4 className="font-semibold text-foreground">La Solución</h4>
                    </div>
                    <p className="text-sm text-muted">
                      Migración completa a una arquitectura serverless con Next.js y AWS, implementando WebSockets para actualización de datos financieros en tiempo real.
                    </p>
                  </div>

                  {/* Result */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-accent">
                      <FontAwesomeIcon icon={faRocket} className="text-xl" />
                      <h4 className="font-semibold text-foreground">El Resultado</h4>
                    </div>
                    <p className="text-sm text-muted">
                      Reducción del 85% en tiempos de carga y capacidad para soportar +10,000 usuarios concurrentes sin degradación del servicio.
                    </p>
                  </div>
                </div>

                <Link href="#contacto" className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold transition-colors w-fit">
                  Quiero un resultado similar <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>

            </div>
          </div>

          {/* Case Study 2 */}
          <div className="glass rounded-2xl p-8 md:p-12 border border-surface-border">
            <div className="flex flex-col lg:flex-row-reverse gap-12">
              
              {/* Image / Mockup Area */}
              <div className="w-full lg:w-5/12">
                <div className="w-full aspect-[4/3] bg-surface rounded-xl flex items-center justify-center border border-surface-border relative overflow-hidden group">
                  <Image 
                    src="/img/Route.png?v=2" 
                    alt="Mockup de RouteTrack App" 
                    fill
                    unoptimized={true}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Content Area */}
              <div className="w-full lg:w-7/12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-surface text-xs font-mono rounded text-muted">Logística</span>
                  <span className="px-3 py-1 bg-surface text-xs font-mono rounded text-muted">App Móvil</span>
                </div>
                
                <h3 className="text-3xl font-bold mb-8">App de Entregas "RouteTrack"</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-purple-400">
                      <FontAwesomeIcon icon={faLightbulb} className="text-xl" />
                      <h4 className="font-semibold text-foreground">El Problema</h4>
                    </div>
                    <p className="text-sm text-muted">
                      Los repartidores perdían conectividad en zonas remotas, impidiendo actualizar el estado de los pedidos y generando descontento en los clientes.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-purple-400">
                      <FontAwesomeIcon icon={faCode} className="text-xl" />
                      <h4 className="font-semibold text-foreground">La Solución</h4>
                    </div>
                    <p className="text-sm text-muted">
                      Desarrollo en React Native con una robusta base de datos offline-first (WatermelonDB) para sincronización automática al recuperar red.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-purple-400">
                      <FontAwesomeIcon icon={faRocket} className="text-xl" />
                      <h4 className="font-semibold text-foreground">El Resultado</h4>
                    </div>
                    <p className="text-sm text-muted">
                      0% de pérdida de datos. Aumento del 40% en entregas exitosas diarias y mejora significativa en la satisfacción del cliente final.
                    </p>
                  </div>
                </div>

                <Link href="#contacto" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors w-fit">
                  Quiero un resultado similar <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
