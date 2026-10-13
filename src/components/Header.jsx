import { useState } from 'react';
import { ActionIcon, Burger, Drawer, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { SECTIONS } from '../data/sections.js';

export default function Header({ activeId }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const { setColorScheme } = useMantineColorScheme();
  const scheme = useComputedColorScheme('dark');

  const links = SECTIONS.map(({ id, key }) => (
    <a
      key={id}
      href={`#${id}`}
      aria-current={activeId === id}
      onClick={() => setMenuOpen(false)}
    >
      {t.nav[key]}
    </a>
  ));

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="logo" aria-label="Isadora Alvarenga">
          <span className="logo-mark">φ</span>
          Isadora <span>Alvarenga</span>
        </a>

        <nav className="nav" aria-label="Principal">
          {links}
        </nav>

        <div className="header-actions">
          <div className="lang-toggle" role="group" aria-label={t.a11y.language}>
            <button aria-pressed={lang === 'pt'} onClick={() => setLang('pt')}>PT</button>
            <span aria-hidden="true">/</span>
            <button aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
          </div>

          <ActionIcon
            variant="default"
            size="lg"
            radius="xl"
            aria-label={t.a11y.toggleTheme}
            onClick={() => setColorScheme(scheme === 'dark' ? 'light' : 'dark')}
          >
            {scheme === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />}
          </ActionIcon>

          <Burger
            className="burger-only"
            opened={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={t.a11y.openMenu}
            size="sm"
          />
        </div>
      </div>

      <Drawer opened={menuOpen} onClose={() => setMenuOpen(false)} position="right" size="75%" title="Menu">
        <nav className="mobile-nav" aria-label="Principal (mobile)">
          {links}
        </nav>
      </Drawer>
    </header>
  );
}
