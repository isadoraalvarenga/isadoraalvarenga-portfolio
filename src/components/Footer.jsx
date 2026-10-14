import { useLanguage } from '../context/LanguageContext.jsx';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <small>© {new Date().getFullYear()} Isadora Alvarenga. {t.footer.rights}</small>
      </div>
    </footer>
  );
}

