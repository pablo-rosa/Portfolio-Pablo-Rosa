type Project = {
  title: string;
  description: string;
  technologies: string[];
  href: string;
  previewImage?: string;
};

export const projects: Project[] = [
  {
    title: "Tu proyecto destacado",
    description: "Describe brevemente qué hace, qué problema resuelve y cuál fue tu aportación.",
    technologies: ["Next.js", "TypeScript", "CSS"],
    href: "https://github.com/pablo-rosa",
  },
  {
    title: "Una idea hecha producto",
    description: "Cuenta qué aprendiste al construirlo y qué decisiones tomaste durante el proceso.",
    technologies: ["React", "API", "Diseño responsive"],
    href: "https://github.com/pablo-rosa",
  },
  {
    title: "Pequeño proyecto, gran aprendizaje",
    description: "También puedes mostrar ejercicios, proyectos formativos o experimentos personales.",
    technologies: ["JavaScript", "HTML", "CSS"],
    href: "https://github.com/pablo-rosa",
  },
];

export const technologies = ["JavaScript", "TypeScript", "React", "Next.js", "HTML & CSS", "Git & GitHub", "Figma"];
