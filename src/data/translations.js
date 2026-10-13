// Todos os textos do site em PT e EN. Para adicionar um texto novo, crie a chave nos dois idiomas.
export const translations = {
  pt: {
    nav: { about: 'Sobre mim', projects: 'Projetos', experiences: 'Experiências', contact: 'Contato' },
    hero: {
      role: 'Engenharia de Software',
      tagline: 'Transformo curiosidade em código e ideias em experiências digitais que aproximam pessoas.',
      seeProjects: 'Ver projetos',
      downloadCv: 'Baixar currículo',
    },
    about: {
      label: 'Sobre mim',
      title: 'Tecnologia com raízes humanas.',
      // PREENCHER: formação, área de atuação, interesses e objetivos profissionais
      text: 'Texto de apresentação em português (formação, área de atuação, interesses e objetivos).',
    },
    projects: { label: 'Projetos', title: 'Uma constelação de ideias.', github: 'Ver no GitHub' },
    experiences: { label: 'Experiências', title: 'Trajetória em órbita.' },
    contact: { label: 'Contato', title: 'Vamos enviar um sinal?' },
    footer: { rights: 'Projetado com curiosidade e proporção áurea.' },
    a11y: { toggleTheme: 'Alternar tema claro/escuro', openMenu: 'Abrir menu', language: 'Idioma' },
  },
  en: {
    nav: { about: 'About', projects: 'Projects', experiences: 'Experience', contact: 'Contact' },
    hero: {
      role: 'Software Engineering',
      tagline: 'I turn curiosity into code and ideas into digital experiences that bring people closer.',
      seeProjects: 'View projects',
      downloadCv: 'Download résumé',
    },
    about: {
      label: 'About me',
      title: 'Technology with human roots.',
      text: 'Introduction text in English (education, field, interests and career goals).',
    },
    projects: { label: 'Projects', title: 'A constellation of ideas.', github: 'View on GitHub' },
    experiences: { label: 'Experience', title: 'A path in orbit.' },
    contact: { label: 'Contact', title: "Let's send a signal?" },
    footer: { rights: 'Designed with curiosity and the golden ratio.' },
    a11y: { toggleTheme: 'Toggle light/dark theme', openMenu: 'Open menu', language: 'Language' },
  },
};
