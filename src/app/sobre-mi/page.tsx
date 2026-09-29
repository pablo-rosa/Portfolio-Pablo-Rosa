import type { Metadata } from "next";
import { BriefcaseBusiness, GraduationCap, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre mí — Pablo Rosa",
  description: "Conoce a Pablo Rosa, desarrollador Full Stack de Sevilla.",
};

export default function AboutPage() {
  return (
    <main className="page-main">
      <section className="container detail-page">
        <div className="page-heading">
          <span className="section-number">01 / SOBRE MÍ</span>
          <h1>
            Un poco
            <br />
            sobre mí.
          </h1>
          <p>Desarrollo web, sistemas y ganas de seguir creciendo.</p>
        </div>
        <div className="page-content about-content">
          <p className="lead">
            Soy Pablo, desarrollador Full Stack formado en desarrollo web y
            sistemas microinformáticos.
          </p>
          <p>
            Me especializo en crear aplicaciones web completas, desde la
            interfaz hasta la lógica que las hace funcionar. Busco una
            oportunidad para poner en práctica mi formación, aprender junto a un
            equipo y aportar compromiso, curiosidad y atención al detalle.
          </p>
          <p>
            Vivo en Sevilla y tengo disponibilidad para trabajar de forma
            telemática.
          </p>
          <div className="about-facts">
            <div>
              <GraduationCap size={18} />
              <span>
                <small>FORMACIÓN</small>
                <strong>
                  Grado Superior en Desarrollo de Aplicaciones Web
                </strong>
              </span>
            </div>
            <div>
              <GraduationCap size={18} />
              <span>
                <small>TAMBIÉN HE ESTUDIADO</small>
                <strong>
                  Grado Medio en Sistemas Microinformáticos y Redes
                </strong>
              </span>
            </div>
            <div>
              <BriefcaseBusiness size={18} />
              <span>
                <small>DISPONIBILIDAD</small>
                <strong>Oportunidades presenciales o telemáticas</strong>
              </span>
            </div>
            <div>
              <MapPin size={18} />
              <span>
                <small>UBICACIÓN</small>
                <strong>Sevilla, España</strong>
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
