import type { Metadata } from "next";
import { technologies } from "@/data/portfolio";

export const metadata: Metadata = { title: "Tecnologías — Pablo Rosa", description: "Tecnologías y herramientas de Pablo Rosa, desarrollador Full Stack." };

export default function TechnologiesPage() {
  return (
    <main className="page-main">
      <section className="container detail-page technologies-page">
        <div className="page-heading"><span className="section-number">03 / TECNOLOGÍAS</span><h1>Con qué<br />trabajo.</h1><p>Herramientas que conozco y sigo practicando.</p></div>
        <div className="technology-list">{technologies.map((technology, index) => <div className="technology-item" key={technology}><span>0{index + 1}</span><strong>{technology}</strong></div>)}</div>
      </section>
    </main>
  );
}
