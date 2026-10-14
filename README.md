# 🌌 Portfólio Isadora Alvarenga

 Portfólio profissional de **Isadora Ferreira Alvarenga**, estudante de Engenharia de Software, com identidade visual inspirada em **constelações** e na **proporção áurea (Fibonacci)**. Apresenta trajetória, habilidades, projetos e contato de forma moderna, responsiva e bilíngue (PT/EN), com tema escuro "Galáxia" e tema claro "Herbário".

---

## 🚧 Status do Projeto

![Versão](https://img.shields.io/badge/Versão-v0.1.0-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.2.8-007ec6?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.3-007ec6?style=for-the-badge&logo=vite&logoColor=white)
![Mantine](https://img.shields.io/badge/Mantine-9.7.2-007ec6?style=for-the-badge&logo=mantine&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-007ec6?style=for-the-badge&logo=vercel&logoColor=white)

---

## 📚 Índice
- [Links Úteis](#-links-úteis)
- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Protótipos (Figma)](#-protótipos-figma)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura](#-arquitetura)
- [Instalação e Execução](#-instalação-e-execução)
- [Variáveis de Ambiente](#-variáveis-de-ambiente)
- [Deploy](#-deploy)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Documentações utilizadas](#-documentações-utilizadas)
- [Autora](#-autora)
- [Agradecimentos](#-agradecimentos)
- [Licença](#-licença)

---

## 🔗 Links Úteis
* 🌐 **Site publicado:** https://isadoraalvarenga.vercel.app
* 🎨 **Protótipo no Figma:** https://www.figma.com/make/zvmWb6jhZbwi3YeoZFqmrx/High-Fidelity-Portfolio-Prototype?t=wDEXBKmTG2YDGITu-20&fullscreen=1
* 💻 **Repositório:** https://github.com/isadoraalvarenga/isadoraalvarenga-portfolio

---

## 📝 Sobre o Projeto

Este portfólio nasceu como o Laboratório 01 da disciplina de **Desenvolvimento e Integração de Aplicações Web** (Engenharia de Software, PUC Minas), mas foi pensado para continuar vivo: será usado em entrevistas e apresentações profissionais, crescendo junto comigo e minha carreira.

**Conceito visual "Constelação Phi":** espaço e biologia compartilham a mesma matemática. As habilidades ficam distribuídas em um globo 3D pela espiral de Fibonacci (a mesma lógica de galáxias, girassóis e conchas), os projetos formam uma constelação em ordem cronológica e o formulário de contato é um "sinal" enviado.

**Dois temas:** *Galáxia* (escuro, principal) e *Herbário* (claro, inspirado em biologia e natureza). Novos temas personalizados poderão ser adicionados no futuro.

---

## ✨ Funcionalidades

- 🧭 **Navegação por menu fixo** com destaque da seção ativa durante o scroll.
- 🌐 **Bilíngue (PT/EN)** com alternância instantânea e preferência salva.
- 🌗 **Tema claro/escuro** com alternância no cabeçalho.
- 👩‍💻 **Sobre mim:** formação, área de atuação, interesses e objetivos profissionais.
- 🪐 **Globo de habilidades:** ícones distribuídos em uma esfera pela espiral de Fibonacci, que gira sozinha, pode ser arrastada e abre um link ao clicar.
- 🌠 **Projetos:** timeline dinâmica em constelação, do mais antigo ao mais recente, com tecnologias, link do GitHub e imagem/GIF.
- 🛰️ **Experiências:** formação, programas, estágios, freelas, open source e eventos.
- 📨 **Contato:** ícones clicáveis (e-mail, WhatsApp, LinkedIn, GitHub) e formulário com validação, proteção reCAPTCHA e envio por e-mail via EmailJS.
- 📱 **Design responsivo** com menu lateral no mobile.

---

## 🎨 Protótipos (Figma)

Protótipo criado no Figma. 🔗 [Abrir no Figma](https://www.figma.com/make/zvmWb6jhZbwi3YeoZFqmrx/High-Fidelity-Portfolio-Prototype?t=wDEXBKmTG2YDGITu-20&fullscreen=1)

### Paleta e tipografia

| Tema | Fundo | Superfície | Destaque | Realce |
| :--- | :---: | :---: | :---: | :---: |
| Galáxia (escuro) | `#070713` | `#0F1024` | `#E5A82E` | `#8B5CF6` |
| Herbário (claro) | `#F4F1E8` | `#FFFFFF` | `#2F6B4F` | `#A8C3A0` |

**Fontes:** Space Grotesk (títulos), Inter (texto) e JetBrains Mono (detalhes).

---

## 🛠 Tecnologias Utilizadas

### 💻 Front-end

* **Biblioteca:** React ^19.2.8
* **Linguagem:** JavaScript (ES6+)
* **Build tool:** Vite ^8.3.0
* **UI:** Mantine (`@mantine/core`, `@mantine/hooks`)
* **Ícones:** Tabler Icons (`@tabler/icons-react`) na interface e React Icons (`react-icons`) nas tecnologias do globo
* **Globo 3D:** feito sem biblioteca de 3D, com React, CSS e `<canvas>` 2D (espiral de Fibonacci, rotação e projeção em perspectiva)
* **Estado global:** Context API (idioma) e `useMantineColorScheme` (tema)
* **Estilização:** CSS com variáveis por tema + Mantine

### 📨 Integrações

* **EmailJS** (`@emailjs/browser`): envio de e-mails direto do front-end
* **Google reCAPTCHA v2:** proteção do formulário contra robôs

### ⚙️ Infraestrutura

* **Hospedagem:** Vercel
* **Versionamento:** Git e GitHub
* **Prototipação:** Figma

### 📦 Dependências

```json
"dependencies": {
  "@emailjs/browser": "^5.0.3",
  "@mantine/core": "^9.7.2",
  "@mantine/hooks": "^9.7.2",
  "@tabler/icons-react": "^3.49.0",
  "react": "^19.2.8",
  "react-dom": "^19.2.8",
  "react-icons": "^5.7.0"
}
```

| Pacote | Uso |
| :--- | :--- |
| `react`, `react-dom` | Interface |
| `@mantine/core`, `@mantine/hooks` | Componentes, tema claro/escuro e hooks |
| `@tabler/icons-react` | Ícones da interface |
| `react-icons` | Ícones das tecnologias no globo de habilidades |
| `@emailjs/browser` | Envio do formulário por e-mail |

---

## 🏗 Arquitetura

Aplicação **SPA de página única** (React + Vite), sem back-end próprio: o envio de e-mails é feito pelo EmailJS e o site é estático.

- **Navegação:** seções com âncoras (`#sobre`, `#projetos`...) e *scroll-spy* (`IntersectionObserver`) para destacar o item ativo do menu.
- **Dados separados da interface:** projetos, experiências, habilidades, links e traduções ficam em `src/data/`. Para atualizar o portfólio basta editar esses arquivos, sem mexer nos componentes. A timeline e o globo são gerados a partir deles.
- **Globo de habilidades:** os pontos são distribuídos em uma esfera pela espiral de Fibonacci e girados a cada quadro com seno e cosseno. A projeção em perspectiva é feita com cálculo simples, sem biblioteca de 3D.
- **Internacionalização:** `LanguageContext` expõe `lang` e `t` (textos do idioma atual).
- **Temas:** o Mantine controla claro/escuro e o `index.css` define as variáveis de cor de cada tema.

---

## 🔧 Instalação e Execução

### Pré-requisitos
* **Node.js** LTS (v18 ou superior)
* **npm**

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/isadoraalvarenga/isadoraalvarenga-portfolio.git
cd isadoraalvarenga-portfolio

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente (veja a seção abaixo)
cp .env.example .env.local

# 4. Rode em modo de desenvolvimento
npm run dev
```

🎨 O site abre em **http://localhost:5173**.

### Scripts disponíveis

| Comando | O que faz |
| :--- | :--- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção na pasta `dist/` |
| `npm run preview` | Visualiza o build localmente |
| `npm run lint` | Verifica o código com ESLint |

---

## 🔑 Variáveis de Ambiente

Crie um arquivo **`.env.local`** na raiz do projeto (ele não é versionado). No Vite, as variáveis precisam do prefixo `VITE_`.

| Variável | Descrição |
| :--- | :--- |
| `VITE_EMAILJS_SERVICE_ID` | ID do serviço de e-mail no EmailJS |
| `VITE_EMAILJS_TEMPLATE_ID_FOR_ME` | Template do aviso que chega para mim |
| `VITE_EMAILJS_TEMPLATE_ID_FOR_SENDER` | Template de confirmação enviado ao visitante |
| `VITE_EMAILJS_PUBLIC_KEY` | Chave pública do EmailJS |
| `VITE_RECAPTCHA_SITE_KEY` | Chave pública (site key) do reCAPTCHA v2 |

Exemplo de `.env.local`:

```
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID_FOR_ME=seu_template_id_for_me
VITE_EMAILJS_TEMPLATE_ID_FOR_SENDER=seu_template_id_for_sender
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
VITE_RECAPTCHA_SITE_KEY=sua_site_key
```

Cada envio do formulário gera dois e-mails: a **confirmação para o visitante** e a **notificação para mim**. A *secret key* do reCAPTCHA fica apenas no EmailJS e nunca entra no código.

---

## 🚀 Deploy

O site é publicado na **Vercel**, conectada ao repositório do GitHub (a cada push na `main`, um novo deploy é feito).

1. Importe o repositório em [vercel.com](https://vercel.com) (framework detectado: Vite).
2. Em **Settings → Environment Variables**, cadastre as cinco variáveis `VITE_*` da seção anterior.
3. Faça o deploy. As variáveis `VITE_*` entram no momento do build, então, ao alterá-las, é preciso um novo deploy.

🌐 **Link do site:** https://isadoraalvarenga.vercel.app

---

## 📂 Estrutura de Pastas

```
.
├── public/                  # 📂 Arquivos estáticos (foto de perfil, favicon)
│   └── projetos/            # 🖼️ Imagens e GIFs dos projetos
├── src/
│   ├── assets/              # 🖼️ Imagens e SVGs importados via código
│   ├── components/          # 🧱 Componentes (Header, Footer, About, Projects, Experiences, Contact...)
│   │   └── SkillsGlobe/     # 🪐 Globo de habilidades (JSX + CSS)
│   ├── config/              # ⚙️ Configurações (EmailJS e reCAPTCHA)
│   ├── context/             # 🌐 LanguageContext (idioma PT/EN)
│   ├── data/                # 🗂️ Conteúdo: experiências, projetos, habilidades, links, traduções
│   ├── hooks/               # 🎣 Custom Hooks (useScrollSpy)
│   ├── lib/                 # 🛠️ Integrações (reCAPTCHA e envio de e-mails)
│   ├── App.jsx              # 📄 Composição das seções
│   ├── index.css            # 🎨 Estilos globais e variáveis dos temas
│   ├── main.jsx             # 🚪 Ponto de entrada da aplicação
│   └── theme.js             # 🎨 Tema do Mantine
├── .env.example             # 🧩 Modelo das variáveis de ambiente
├── .gitignore               # 🙈 Arquivos/pastas ignorados pelo Git
├── eslint.config.js         # 🚨 Configurações do ESLint
├── index.html               # 📄 Documento HTML principal
├── package.json             # 📦 Dependências e scripts
└── vite.config.js           # ⚡ Configuração do Vite
```

---

## 🔗 Documentações utilizadas

* 📖 [React](https://react.dev/)
* 📖 [Vite](https://vitejs.dev/guide/)
* 📖 [Mantine](https://mantine.dev/)
* 📖 [Tabler Icons](https://tabler.io/icons)
* 📖 [React Icons](https://react-icons.github.io/react-icons/)
* 📖 [EmailJS](https://www.emailjs.com/docs/)
* 📖 [Google reCAPTCHA v2](https://developers.google.com/recaptcha/docs/display)
* 📖 [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/)

---

## 👩‍💻 Autora

| 👤 Nome | GitHub | LinkedIn | E-mail |
| :--- | :---: | :---: | :---: |
| Isadora Ferreira Alvarenga | [GitHub](https://github.com/isadoraalvarenga) | [LinkedIn](https://www.linkedin.com/in/isadoraalvarenga) | [E-mail](mailto:isadoraalvarengaf@gmail.com) |

---

## 🙏 Agradecimentos

* [**Engenharia de Software PUC Minas**](https://www.instagram.com/engsoftwarepucminas/): pelo apoio institucional e estrutura acadêmica.
* [**Prof. Dr. João Paulo Aramuni**](https://github.com/joaopauloaramuni): pelos ensinamentos, pelo template de README e pelo projeto SkillsGlobe, que serviu de base para o globo de habilidades deste portfólio.

---

## 📄 Licença

Este projeto é distribuído sob a **Licença MIT**.
