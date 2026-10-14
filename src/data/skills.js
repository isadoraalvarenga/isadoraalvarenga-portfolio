import { FaCss3Alt, FaDatabase, FaFigma, FaGitAlt, FaHtml5, FaJava, FaJs, FaPhp, FaPython, FaReact } from 'react-icons/fa';
import { SiArduino, SiNotion } from 'react-icons/si';

const SKILLS = [
  { name: 'HTML', icon: FaHtml5, color: '#E34F26', category: 'Front-end', link: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML' },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572B6', category: 'Front-end', link: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', category: 'Front-end', link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' },
  { name: 'React', icon: FaReact, color: '#149ECA', category: 'Front-end', link: 'https://react.dev/' },
  { name: 'Python', icon: FaPython, color: '#3776AB', category: 'Back-end', link: 'https://www.python.org/' },
  { name: 'Java', icon: FaJava, color: '#ED8B00', category: 'Back-end', link: 'https://dev.java/' },
  { name: 'PHP', icon: FaPhp, color: '#777BB4', category: 'Back-end', link: 'https://www.php.net/' },
  { name: 'Banco de dados', icon: FaDatabase, color: '#8B5CF6', category: 'Dados', link: 'https://github.com/isadoraalvarenga/DOSE' },
  { name: 'Arduino', icon: SiArduino, color: '#00979D', category: 'Hardware', link: 'https://www.arduino.cc/' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032', category: 'Ferramentas', link: 'https://git-scm.com/' },
  { name: 'Figma', icon: FaFigma, color: '#F24E1E', category: 'Ferramentas', link: 'https://www.figma.com/' },
  { name: 'Notion', icon: SiNotion, color: '#9CA3AF', category: 'Ferramentas', link: 'https://www.notion.so/' },
];

export default SKILLS;