import Section from './Section.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import { skills } from '../data/skills.js';

export default function About() {
    const { t } = useLanguage();
    const a = t.about;

    return (
        <Section id="sobre" label={a.label} title={a.title}>
        <p className="about-intro">{a.intro}</p>

    <div className="about-grid">
        <article>
            <h3>{a.educationTitle}</h3>
            <p className="muted">{a.education}</p>
        </article>
        <article>
            <h3>{a.focusTitle}</h3>
            <p className="muted">{a.focus}</p>
        </article>
        <article>
            <h3>{a.interestsTitle}</h3>
            <ul className="about-list">
            {a.interests.map((item) => <li key={item}>{item}</li>)}
    </ul>
        </article>
        <article>
            <h3>{a.goalTitle}</h3>
            <p className="muted">{a.goal}</p>
        </article>
    </div>

        <h3 className="skills-title">{a.skillsTitle}</h3>
        <div className="tags">
        {skills.map((s) => <span className="tag" key={s}>{s}</span>)}
    </div>
        </Section>
    );
}