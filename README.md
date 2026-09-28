# Portfolio junior

Plantilla de portfolio personal creada con Next.js, React, TypeScript y lucide-react.

El tema claro u oscuro se adapta automáticamente a la preferencia del dispositivo. El diseño incluye ajustes responsive para móvil, tablet y escritorio.

La navegación usa la librería Motion para deslizar el contenido entre páginas y mover el indicador redondeado del menú. La foto de perfil de la portada está en `src/images/fotoperfil.jpeg`.

## Empezar

Necesitas Node.js 20.9 o posterior.

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

`npm run dev` inicia el modo de desarrollo. Para ejecutar el servidor de producción, primero genera la compilación:

```bash
npm run build
npm start
```

## Personalizar

- Sustituye el nombre, titular y ubicación de la portada en `src/app/page.tsx`.
- Actualiza la formación y presentación en `src/app/sobre-mi/page.tsx`.
- Edita los datos centralizados de proyectos y tecnologías en `src/data/portfolio.ts`.
- Para mostrar una captura real en un proyecto, guarda la imagen en `public/images/projects/` y añade su ruta como `previewImage` en ese proyecto.
- Personaliza cada página en `src/app/sobre-mi/page.tsx`, `src/app/proyectos/page.tsx` y `src/app/tecnologias/page.tsx`.
- Cambia los enlaces de GitHub y LinkedIn y el email de contacto.
- Actualiza el título y la descripción SEO en `src/app/layout.tsx`.
- Modifica los colores y estilos responsive en `src/app/globals.css`.

## Páginas

- `/` — Portada y acceso a cada apartado.
- `/sobre-mi` — Presentación personal.
- `/proyectos` — Proyectos personales y formativos.
- `/tecnologias` — Tecnologías y herramientas.

Los proyectos siguen siendo contenido de ejemplo: sustituye sus títulos, descripciones, tecnologías y enlaces por los de tus proyectos reales. No hace falta inventar experiencia: puedes contar qué aprendiste y qué aportaste en tus proyectos personales o formativos.
