import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = { title: "Proyectos — Pablo Rosa", description: "Proyectos personales y formativos de Pablo Rosa." };

export default function ProjectsPage() {
  return (
    <main className="page-main">
      <section className="container detail-page projects-page">
        <div className="page-heading"><span className="section-number">02 / PROYECTOS PERSONALES</span><h1>Cosas que<br />he construido.</h1><p>Proyectos personales y formativos. Cada uno, una oportunidad para aprender.</p></div>
        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project-row" key={project.title}>
              <span className="project-index">0{index + 1}</span>
              <div className={`project-preview preview-${index + 1}`}>
                {project.previewImage ? (
                  <Image src={project.previewImage} alt={`Página de inicio de ${project.title}`} fill sizes="(max-width: 560px) 96px, 168px" />
                ) : (
                  <div className="project-placeholder" aria-label={`Captura pendiente para ${project.title}`}>
                    <div className="preview-browser-bar"><span /><span /><span /><small>{project.title}</small></div>
                    <div className="preview-browser-content"><span className="preview-eyebrow">PROYECTO PERSONAL</span><strong>{project.title}</strong><i /><i /><span className="preview-button" /></div>
                    <span className="preview-pending">CAPTURA PENDIENTE</span>
                  </div>
                )}
              </div>
              <div className="project-main"><h2>{project.title}</h2><p>{project.description}</p><div className="tag-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div>
              <a className="project-arrow" href={project.href} target="_blank" rel="noreferrer" aria-label={`Ver ${project.title} en GitHub`}><ArrowUpRight size={19} /></a>
            </article>
          ))}
          <a className="github-link" href="https://github.com/pablo-rosa" target="_blank" rel="noreferrer"><Github size={17} /> Más proyectos en GitHub <ArrowUpRight size={15} /></a>
        </div>
      </section>
    </main>
  );
}
