import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  MapPin,
  UserRound,
  Wrench,
} from "lucide-react";
import profilePhoto from "@/images/fotoperfil.jpeg";

const sections = [
  {
    number: "01",
    title: "Sobre mí",
    description:
      "Mi recorrido, formación y qué busco en mi próxima oportunidad.",
    href: "/sobre-mi",
    icon: <UserRound size={19} />,
  },
  {
    number: "02",
    title: "Proyectos personales",
    description:
      "Cosas que he creado y aprendizajes que me llevo de cada proyecto.",
    href: "/proyectos",
    icon: <Code2 size={19} />,
  },
  {
    number: "03",
    title: "Tecnologías",
    description:
      "Herramientas y tecnologías con las que estoy aprendiendo y trabajando.",
    href: "/tecnologias",
    icon: <Wrench size={19} />,
  },
];

export default function Home() {
  return (
    <main>
      <section className="home-hero container" id="inicio">
        <div className="hero-content">
          <p className="kicker">
            <span className="status-dot" /> DISPONIBLE PARA OPORTUNIDADES
          </p>
          <p className="intro-label">HOLA, SOY PABLO ROSA</p>
          <h1>
            Desarrollador
            <br />
            Full Stack <span>en evolución.</span>
          </h1>
          <p className="hero-description">
            Desarrollo aplicaciones web de principio a fin. Tengo formación en
            desarrollo web y sistemas, y busco una oportunidad para seguir
            creciendo y aportar al equipo.
          </p>
          <p className="location">
            <MapPin size={15} /> Sevilla, España <span>·</span> Trabajo
            Presencial/Hibrido/Teletrabajo
          </p>
        </div>
        <div
          className="home-index"
          aria-label="Pablo Rosa, desarrollador Full Stack"
        >
          <span className="home-index-label">FULL STACK</span>
          <div className="profile-avatar">
            <Image
              src={profilePhoto}
              alt="Pablo Rosa"
              fill
              priority
              sizes="(max-width: 560px) 42px, 102px"
            />
          </div>
          <small>SEVILLA · ESPAÑA</small>
          <i />
        </div>
      </section>

      <section className="home-sections">
        <div className="container">
          <div className="home-section-heading">
            <span className="section-number">EXPLORA EL PORTFOLIO</span>
            <p>Elige un apartado para conocerme mejor.</p>
          </div>
          <div className="section-links">
            {sections.map((section) => (
              <Link
                className="section-link-card"
                href={section.href}
                key={section.number}
              >
                <span className="card-icon">{section.icon}</span>
                <span className="card-copy">
                  <strong>{section.title}</strong>
                  <small>{section.description}</small>
                </span>
                <ArrowRight className="card-arrow" size={19} />
              </Link>
            ))}
          </div>
          <a className="home-contact" href="mailto:pablo.rosa.fn@gmail.com">
            ¿Hablamos? <span>pablo.rosa.fn@gmail.com</span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      </section>
    </main>
  );
}
