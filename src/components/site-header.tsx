"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const links = [
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/tecnologias", label: "Tecnologías" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Navegación principal">
        <Link className={`brand nav-brand ${pathname === "/" ? "is-active" : ""}`} href="/" aria-label="Pablo Rosa, inicio" aria-current={pathname === "/" ? "page" : undefined}>
          {pathname === "/" && <motion.span className="nav-active-circle" layoutId="active-navigation-circle" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
          <span className="brand-mark">PR<span>.</span></span>
        </Link>
        <div className="nav-links">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link className={`nav-link ${isActive ? "is-active" : ""}`} href={link.href} key={link.href} aria-current={isActive ? "page" : undefined}>
                {isActive && <motion.span className="nav-active-circle" layoutId="active-navigation-circle" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
                <span className="nav-link-label">{link.label}</span>
              </Link>
            );
          })}
        </div>
        <a className="nav-cta" href="mailto:pablo.rosa.fn@gmail.com">Contacto <ArrowUpRight size={15} /></a>
      </nav>
    </header>
  );
}
