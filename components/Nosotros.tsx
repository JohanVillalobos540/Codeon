import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faUsers, faChartLine, faTrophy } from '@fortawesome/free-solid-svg-icons';

export default function Nosotros() {
  return (
    <section id="nosotros" className="flex flex-col w-full py-24 border-t border-surface-border">
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Más que código, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">somos tu equipo</span>
          </h2>
          <p className="text-muted/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            En Codeon, creemos que la tecnología no es el fin, sino el medio para transformar industrias. Somos un grupo de ingenieros, diseñadores y estrategas obsesionados con la excelencia técnica y el impacto de negocio.
          </p>
        </div>
      </div>

      {/* Methodology Section */}
      <div className="bg-surface/30 border-y border-surface-border py-24 mb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Nuestra Metodología</h3>
            <p className="text-muted">Cómo aseguramos el éxito en cada proyecto.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <div className="group flex flex-col items-center text-center cursor-default">
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)] flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] group-hover:scale-110 transition-all duration-500">
                <FontAwesomeIcon icon={faBullseye} className="text-3xl" />
              </div>
              <h4 className="font-bold text-lg mb-2 group-hover:text-cyan-300 transition-colors">1. Descubrimiento</h4>
              <p className="text-sm text-muted">
                Entendemos tu negocio, tus usuarios y definimos KPIs claros antes de escribir una sola línea de código.
              </p>
            </div>

            <div className="group flex flex-col items-center text-center cursor-default">
              <div className="w-16 h-16 rounded-full bg-purple-500/10 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)] flex items-center justify-center mb-6 group-hover:bg-purple-500/20 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] group-hover:scale-110 transition-all duration-500">
                <FontAwesomeIcon icon={faUsers} className="text-3xl" />
              </div>
              <h4 className="font-bold text-lg mb-2 group-hover:text-purple-300 transition-colors">2. Diseño y Prototipado</h4>
              <p className="text-sm text-muted">
                Creamos interfaces inmersivas y prototipos navegables para validar la idea rápidamente.
              </p>
            </div>

            <div className="group flex flex-col items-center text-center cursor-default">
              <div className="w-16 h-16 rounded-full bg-fuchsia-500/10 text-fuchsia-400 shadow-[0_0_15px_rgba(217,70,239,0.2)] flex items-center justify-center mb-6 group-hover:bg-fuchsia-500/20 group-hover:shadow-[0_0_25px_rgba(217,70,239,0.4)] group-hover:scale-110 transition-all duration-500">
                <FontAwesomeIcon icon={faChartLine} className="text-3xl" />
              </div>
              <h4 className="font-bold text-lg mb-2 group-hover:text-fuchsia-300 transition-colors">3. Desarrollo Ágil</h4>
              <p className="text-sm text-muted">
                Entregas incrementales. Trabajamos con sprints cortos para que veas el progreso real de tu producto.
              </p>
            </div>

            <div className="group flex flex-col items-center text-center cursor-default">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)] flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] group-hover:scale-110 transition-all duration-500">
                <FontAwesomeIcon icon={faTrophy} className="text-3xl" />
              </div>
              <h4 className="font-bold text-lg mb-2 group-hover:text-emerald-300 transition-colors">4. Despliegue y QA</h4>
              <p className="text-sm text-muted">
                Pruebas rigurosas, optimización de rendimiento y lanzamiento sin estrés en infraestructuras seguras.
              </p>
            </div>
            
          </div>
        </div>
      </div>


    </section>
  );
}
