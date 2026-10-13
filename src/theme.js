import { createTheme } from '@mantine/core';

// Tema do Mantine. As cores de fundo/superfície ficam em src/index.css (variáveis CSS),
// assim o tema claro ("Herbário") e o escuro ("Galáxia") trocam só os valores.
export const theme = createTheme({
  primaryColor: 'violet',
  fontFamily: "'Inter', system-ui, sans-serif",
  headings: { fontFamily: "'Space Grotesk', 'Inter', sans-serif" },
  fontFamilyMonospace: "'JetBrains Mono', ui-monospace, monospace",
  defaultRadius: 'md',
});
