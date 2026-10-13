import { IconArrowRight, IconDownload } from '@tabler/icons-react';
import Header from './components/Header.jsx';
import { SECTIONS } from './data/sections.js';
import Footer from './components/Footer.jsx';
import Section from './components/Section.jsx';
import { useScrollSpy } from './hooks/useScrollSpy.js';
import { useLanguage } from './context/LanguageContext.jsx';
import { projects } from './data/projects.js';
import { experiences } from './data/experiences.js';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';

const SECTION_IDS = SECTIONS.map((s) => s.id);

export default function App() {
  const { lang, t } = useLanguage();
  const activeId = useScrollSpy(SECTION_IDS);

  const sortedProjects = [...projects].sort((a, b) => a.year - b.year);

  return (
    <>
      <Header activeId={activeId} />

      <main id="top">
        
        <div className="hero">
          <div className="container">
            <h1>
              <strong>Isadora Ferreira Alvarenga</strong>
            </h1>
            <p className="hero-role">{t.hero.role}</p>
            <p className="hero-tagline">{t.hero.tagline}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projetos">
                {t.hero.seeProjects} <IconArrowRight size={18} />
              </a>
              <a className="btn" href="/curriculo-isadora.pdf" download>
                {t.hero.downloadCv} <IconDownload size={18} />
              </a>
            </div>
          </div>
        </div>

        <About />

        <Section id="projetos" label={t.projects.label} title={t.projects.title}>
          <ul className="placeholder-list">
            {sortedProjects.map((p) => (
              <li key={p.id}>
                <h3>{p.name} <span className="muted">({p.year})</span></h3>
                <p className="muted">{p.description[lang]}</p>
                <div className="tags">
                  {p.technologies.map((tech) => <span className="tag" key={tech}>{tech}</span>)}
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="experiencias" label={t.experiences.label} title={t.experiences.title}>
          <ul className="placeholder-list">
            {experiences.map((e) => (
              <li key={e.id}>
                <h3>{e.role[lang]}</h3>
                <p className="muted">{e.organization} · {e.period}</p>
                <p>{e.description[lang]}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Contact />
      </main>

      <Footer />
    </>
  );
}