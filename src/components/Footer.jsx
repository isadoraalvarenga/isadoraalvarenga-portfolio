import { IconBrandGithub, IconBrandLinkedin, IconBrandWhatsapp, IconMail } from '@tabler/icons-react';
import { contactLinks } from '../data/links.js';
import { useLanguage } from '../context/LanguageContext.jsx';

const ICONS = {
  email: IconMail,
  whatsapp: IconBrandWhatsapp,
  linkedin: IconBrandLinkedin,
  github: IconBrandGithub,
};

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <small>© {new Date().getFullYear()} Isadora Alvarenga. {t.footer.rights}</small>
        <div className="social">
          {contactLinks.map(({ id, label, href }) => {
            const Icon = ICONS[id];
            return (
              <a key={id} href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
