import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Codigo seguro",
    description:
      "Escribiendo código mantenido, escalable que resiste la prueba del tiempo.",
  },
  {
    icon: Rocket,
    title: "Escalando",
    description:
      "Desarrollando soluciones que crecen con las necesidades del negocio.",
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "Trabajando en conjunto con equipos para dar vida a ideas.",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description:
      "Mejorando constantemente mis habilidades y conocimientos.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                Sobre mí
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              El trabajo en equipo
              <span className="font-serif italic font-normal text-white">
                {" "}
                es la clave del éxito.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Soy un desarrollador full-stack apasionado por crear experiencias digitales que no solo
                funcionan bien, sino que también encantan a los usuarios.Haciendo codigo limpio, eficiente
                 y fácil de mantener.
              </p>
              <p>
                Lider de equipo con las habilidades de comunicación y colaboración necesarias para guiar 
                a los equipos hacia el éxito, fomentando un ambiente de trabajo positivo y productivo.
              </p>
              <p>
                Siempre es necesario tener buena comunicacion con el equipo, para que el proyecto salga 
                adelante, y se pueda cumplir con los objetivos.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Liderando equipos hacia el éxito con comunicación, colaboración y pasión por el código. - 
                Programando el futuro, un proyecto a la vez."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
