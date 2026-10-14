import { IconArrowRight, IconDownload } from '@tabler/icons-react';
import Header from './components/Header.jsx';
import { SECTIONS } from './data/sections.js';
import Footer from './components/Footer.jsx';
import Section from './components/Section.jsx';
import { useScrollSpy } from './hooks/useScrollSpy.js';
import { useLanguage } from './context/LanguageContext.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Experiences from './components/Experiences.jsx';

const SECTION_IDS = SECTIONS.map((s) => s.id);

export default function App() {
  const { t } = useLanguage();
  const activeId = useScrollSpy(SECTION_IDS);


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

        <Projects />

        <Experiences />

        <Contact />

      </main>

      <Footer />
    </>
  );
}