type Project = {
  title: string;
  description: string;
  technologies: string[];
  href: string;
  previewImage?: string;
};

export const projects: Project[] = [
  {
    title: "Job Tracker — Gestión de Candidaturas",
    description:
      "Aplicación web para gestionar procesos de selección, organizar candidaturas y consultar su evolución desde un dashboard. Proyecto enfocado en Next.js, TypeScript y gestión de datos.",
    technologies: ["Next.js", "TypeScript", "React", "PostgreSQL", "Prisma"],
    href: "https://job-tracker-pablo-rosa.vercel.app/login",
    previewImage: "/images/job-tracker-home-imagen.PNG",
  },
  {
    title: "Portfolio Personal",
    description:
      "Portfolio personal desarrollado con Next.js y TypeScript para presentar mi perfil y proyectos. Durante su desarrollo reforcé mis conocimientos en App Router, diseño responsive y arquitectura frontend.",
    technologies: ["Next.js", "TypeScript", "App Router", "CSS"],
    href: "https://portfolio-pablo-rosa.vercel.app/",
    previewImage: "/images/portfolio-home-imagen.PNG",
  },
  {
    title: "Proyecto Final de Curso — Pastrendleria",
    description:
      "Aplicación web desarrollada como proyecto final de curso. Trabajé en una API REST con Spring Boot, gestión de datos con PostgreSQL e integración dinámica mediante JSP y AJAX.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "JSP", "AJAX"],
    href: "https://pablorosadev.com/vistaPastrendleria/",
    previewImage: "/images/pastrendleria-home-imagen.PNG",
  },
];

export const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "App Router",
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "Prisma",
  "JSP",
  "AJAX",
  "HTML & CSS",
  "Git & GitHub",
  "Figma",
];
