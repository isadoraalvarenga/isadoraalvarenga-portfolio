import { useState } from 'react';
import { IconBrandGithub, IconPhoto } from '@tabler/icons-react';
import Section from './Section.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import { projects } from '../data/projects.js';

const Y_POSITIONS = [65, 25, 60, 30, 70];

export default function Projects() {
    const { lang, t } = useLanguage();
    const p = t.projects;

    const sorted = [...projects].sort((a, b) => a.year - b.year);
    const [selectedId, setSelectedId] = useState(sorted[sorted.length - 1].id);
    const selected = sorted.find((item) => item.id === selectedId);

    const points = sorted.map((item, i) => ({
    ...item,
    x: ((i + 0.5) / sorted.length) * 100,
    y: Y_POSITIONS[i % Y_POSITIONS.length],
    }));

    return (
    <Section id="projetos" label={p.label} title={p.title}>
    <p className="muted projects-intro">{p.intro}</p>

    <div className="constellation">
        <svg className="constellation-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
    <polyline
            points={points.map((pt) => `${pt.x},${pt.y}`).join(' ')}
            fill="none" stroke="currentColor" strokeWidth="1.5"
            strokeDasharray="5 5" vectorEffect="non-scaling-stroke"
    />
        </svg>

        {points.map((pt) => (
    <button
            key={pt.id}
            type="button"
            className="star"
            style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
            aria-pressed={pt.id === selectedId}
            onClick={() => setSelectedId(pt.id)}
    >
            <span className="star-dot" />
            <span className="star-label">
                <span className="star-name">{pt.name}</span>
                <span className="star-year">{pt.year}</span>
            </span>
    </button>
        ))}
    </div>

    <article className="project-card" aria-live="polite">
        <div className="project-media">
            {selected.image ? (
            <img src={selected.image} alt={selected.name} loading="lazy" />
    ) : (
            <div className="project-placeholder">
                <IconPhoto size={36} />
                <span>{p.noImage}</span>
            </div>
    )}
        </div>

        <div className="project-info">
            <p className="section-label">{p.selected}</p>
            <h3>{selected.name}</h3>
            <p className="muted">{selected.description[lang]}</p>
            <div className="tags">
            {selected.technologies.map((tech) => <span className="tag" key={tech}>{tech}</span>)}
            </div>
            {selected.github ? (
            <a className="btn btn-primary" href={selected.github} target="_blank" rel="noopener noreferrer">
    <IconBrandGithub size={18} /> {p.github}
            </a>
    ) : (
            <p className="muted">{p.soonNote}</p>
    )}
        </div>
    </article>
    </Section>
    );
}