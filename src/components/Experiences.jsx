import Section from './Section.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import { experiences } from '../data/experiences.js';

export default function Experiences() {
    const { lang, t } = useLanguage();
    const e = t.experiences;

    return (
    <Section id="experiencias" label={e.label} title={e.title}>
    <div className="exp-grid">
        {experiences.map((item) => (
    <article key={item.id} className="exp-card">
            <p className="exp-meta">
                <span>{item.period}</span>
                <span>{e.types[item.type]}</span>
            </p>
            <h3>{item.role[lang]}</h3>
            <p className="exp-org">{item.organization}</p>
            <p className="muted">{item.description[lang]}</p>
    </article>
        ))}
    </div>
    </Section>
    );
}