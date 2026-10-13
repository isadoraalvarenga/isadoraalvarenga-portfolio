import { useState } from 'react';
import { IconBrandGithub, IconBrandLinkedin, IconBrandWhatsapp, IconMail, IconSend } from '@tabler/icons-react';
import Section from './Section.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import { contactLinks } from '../data/links.js';
import { sendContactEmail } from '../lib/sendContactEmail.js';

const ICONS = { email: IconMail, whatsapp: IconBrandWhatsapp, linkedin: IconBrandLinkedin, github: IconBrandGithub };
const LIMITS = { name: 80, email: 120, message: 1000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const EMPTY = { name: '', email: '', message: '', website: '' };

function validate(values, messages) {
    const errors = {};
    if (values.name.trim().length < 2) errors.name = messages.name;
    if (!EMAIL_RE.test(values.email.trim())) errors.email = messages.email;
    if (values.message.trim().length < 10) errors.message = messages.message;
    return errors;
}

export default function Contact() {
    const { lang, t } = useLanguage();
    const c = t.contact;
    const [values, setValues] = useState(EMPTY);
    const [touched, setTouched] = useState({});
    const [status, setStatus] = useState('idle');

    const errors = validate(values, c.errors);
    const showError = (field) => touched[field] && errors[field];

    const handleChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
    if (status !== 'sending') setStatus('idle');
    };
    const handleBlur = (e) => setTouched((t0) => ({ ...t0, [e.target.name]: true }));

    const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(errors).length > 0) return;

    if (values.website) {
        setStatus('success');
        setValues(EMPTY);
        return;
    }

    setStatus('sending');
    try {
    await sendContactEmail({
        name: values.name.trim(),
        email: values.email.trim(),
        message: values.message.trim(),
        lang,
        });
        setStatus('success');
        setValues(EMPTY);
        setTouched({});
    } catch (err) {
        console.error('Falha ao enviar e-mail:', err);
        setStatus('error');
    }
    };

    return (
    <Section id="contato" label={c.label} title={c.title}>
    <p className="muted contact-intro">{c.intro}</p>

    <div className="contact-grid">
        <ul className="contact-links">
    {contactLinks.map(({ id, label, href }) => {
            const Icon = ICONS[id];
            return (
    <li key={id}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                    <span className="contact-icon"><Icon size={22} /></span>
                    <span>{label}</span>
                </a>
    </li>
            );
    })}
        </ul>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
    <div className="field">
            <label htmlFor="c-name">{c.name}</label>
            <input
                id="c-name" name="name" type="text" autoComplete="name"
                placeholder={c.namePh} maxLength={LIMITS.name}
                value={values.name} onChange={handleChange} onBlur={handleBlur}
                aria-invalid={Boolean(showError('name'))}
                aria-describedby={showError('name') ? 'c-name-err' : undefined}
            />
            {showError('name') && <p id="c-name-err" className="field-error">{errors.name}</p>}
    </div>

    <div className="field">
            <label htmlFor="c-email">{c.email}</label>
            <input
                id="c-email" name="email" type="email" autoComplete="email"
                placeholder={c.emailPh} maxLength={LIMITS.email}
                value={values.email} onChange={handleChange} onBlur={handleBlur}
                aria-invalid={Boolean(showError('email'))}
                aria-describedby={showError('email') ? 'c-email-err' : undefined}
            />
            {showError('email') && <p id="c-email-err" className="field-error">{errors.email}</p>}
    </div>

    <div className="field">
            <label htmlFor="c-message">{c.message}</label>
            <textarea
                id="c-message" name="message" rows={5}
                placeholder={c.messagePh} maxLength={LIMITS.message}
                value={values.message} onChange={handleChange} onBlur={handleBlur}
                aria-invalid={Boolean(showError('message'))}
                aria-describedby={showError('message') ? 'c-message-err' : undefined}
            />
            <small className="muted counter">{values.message.length}/{LIMITS.message}</small>
            {showError('message') && <p id="c-message-err" className="field-error">{errors.message}</p>}
    </div>

    <input
            type="text" name="website" className="hp" tabIndex={-1} autoComplete="off"
            aria-hidden="true" value={values.website} onChange={handleChange}
    />

    <button type="submit" className="btn btn-primary btn-block" disabled={status === 'sending'}>
            {status === 'sending' ? c.sending : c.send} <IconSend size={18} />
    </button>

    <p role="status" aria-live="polite" className={`form-status ${status}`}>
            {status === 'success' && c.success}
            {status === 'error' && c.failure}
            </p>
        </form>
    </div>
    </Section>
    );
}