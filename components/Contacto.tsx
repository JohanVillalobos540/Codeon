import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Contacto() {
  return (
    <section id="contacto" className="flex flex-col w-full py-24 bg-surface/10">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Empecemos tu próximo <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">proyecto</span>
          </h2>
          <p className="text-muted/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            ¿Tienes un reto tecnológico? Cuéntanos tu idea y nuestro equipo se pondrá en contacto contigo en menos de 24 horas.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">

          {/* Contact Info & WhatsApp */}
          <div className="w-full lg:w-5/12 flex flex-col gap-10">
            <div className="glass p-8 rounded-2xl border border-surface-border hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] transition-all duration-500">
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>

              <div className="flex flex-col gap-6">
                <div className="group flex items-start gap-4 cursor-default">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.2)] flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] group-hover:scale-110 transition-all duration-300">
                    <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted group-hover:text-cyan-300 transition-colors">Email</p>
                    <p className="font-medium">[ codeon@gmail.com]</p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 cursor-default">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 text-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.2)] flex items-center justify-center shrink-0 group-hover:bg-purple-500/20 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] group-hover:scale-110 transition-all duration-300">
                    <FontAwesomeIcon icon={faPhone} className="text-lg" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted group-hover:text-purple-300 transition-colors">Teléfono</p>
                    <p className="font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 cursor-default">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)] flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] group-hover:scale-110 transition-all duration-300">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-lg" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted group-hover:text-emerald-300 transition-colors">Oficina Principal</p>
                    <p className="font-medium text-sm">Tech Hub Building, Piso 4<br />Ciudad de México, CDMX</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="mt-10 pt-8 border-t border-surface-border">
                <p className="text-sm text-muted mb-4">¿Prefieres algo más rápido?</p>
                <a
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] hover:bg-[#1ebd5a] text-white font-bold rounded-md transition-colors"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
                  Escríbenos por WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-7/12">
            <div className="glass p-8 md:p-10 rounded-2xl border border-surface-border hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] transition-all duration-500">
              <h3 className="text-2xl font-bold mb-8">Envíanos un Mensaje</h3>

              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <label htmlFor="name" className="text-sm text-muted font-medium mb-2 block group-focus-within:text-purple-400 transition-colors">Nombre completo</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-surface border border-surface-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-purple-500 focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] focus:bg-purple-500/5 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="relative group">
                    <label htmlFor="email" className="text-sm text-muted font-medium mb-2 block group-focus-within:text-purple-400 transition-colors">Correo electrónico</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-surface border border-surface-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-purple-500 focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] focus:bg-purple-500/5 transition-all duration-300"
                      placeholder="john@empresa.com"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label htmlFor="service" className="text-sm text-muted font-medium mb-2 block group-focus-within:text-purple-400 transition-colors">Servicio de interés</label>
                  <select
                    id="service"
                    className="w-full bg-surface border border-surface-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-purple-500 focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] focus:bg-purple-500/5 transition-all duration-300 appearance-none"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="web">Desarrollo Web</option>
                    <option value="mobile">Desarrollo Móvil</option>
                    <option value="consulting">Consultoría / Arquitectura</option>
                    <option value="other">Otro</option>
                  </select>
                </div>

                <div className="relative group">
                  <label htmlFor="message" className="text-sm text-muted font-medium mb-2 block group-focus-within:text-purple-400 transition-colors">Cuéntanos sobre tu proyecto</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-surface border border-surface-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-purple-500 focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] focus:bg-purple-500/5 transition-all duration-300 resize-none"
                    placeholder="Necesito desarrollar una plataforma SaaS para..."
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="mt-2 flex items-center justify-center gap-2 w-full py-4 bg-accent hover:bg-accent-hover text-black font-bold rounded-md transition-all shadow-[0_0_15px_rgba(226,232,240,0.15)] hover:shadow-[0_0_20px_rgba(226,232,240,0.3)]"
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                  Enviar Solicitud
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
