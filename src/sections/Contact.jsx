import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Gmail",
    value: "josemiguelvazquezsanchez682@gmail.com",
    href: "mailto:josemiguelvazquezsanchez682@gmail.com",
  },
  {
    icon: Phone,
    label: "Telefono",
    value: "+52 241 190 1876",
    href: "tel:+522411901876",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Xaloztoc, Tlaxcala, Mexico",
    href: "#",
  },
];

export const Contact = () => {

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Ponte en contacto
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Construyamos algo genial.
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            ¿Tienes un proyecto en mente? Me encantaría conocerlo. Envíame un mensaje
            y hablemos de cómo podemos trabajar juntos.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="font-medium">Actualmente disponible</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Actualmente estoy abierto a nuevas oportunidades y proyectos emocionantes.
              Ya sea que necesites un ingeniero tiempo completo o un consultor freelance,
              ¡hablemos!
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Información de contacto
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}