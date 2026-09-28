import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Link className="brand" href="/">PR<span>.</span></Link>
        <span className="footer-copy">Pablo Rosa · Sevilla, España</span>
        <div className="social-links">
          <a href="https://github.com/pablo-rosa" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
          <a href="https://www.linkedin.com/in/pablo-rosa-fernandez/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
          <a href="mailto:pablo.rosa.fn@gmail.com" aria-label="Email"><Mail size={17} /></a>
        </div>
      </div>
    </footer>
  );
}
