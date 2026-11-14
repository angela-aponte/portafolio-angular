export interface Proyecto {
  nombre: string;
  descripcion: string;
  tecnologias: string[];
  caracteristicas: string[];
  repoUrl: string;
  demoUrl: string;
}

export const PERFIL = {
  nombre: 'Angela Aponte Escudero',
  titulo: 'Estudiante de Ingeniería de Sistemas · UCEVA',
  presentacion:
    'Estudiante de octavo semestre de Ingeniería de Sistemas en la Unidad Central del Valle del Cauca. Me interesa el desarrollo web con Angular, la arquitectura de software y el Internet de las Cosas. Disfruto aprender haciendo proyectos y automatizando su despliegue con herramientas de CI/CD.',
  habilidades: [
    'Arquitectura de software (SPA, SSG, microfrontends, Clean Architecture)',
    'Patrones de diseño',
    'Control de versiones con Git y GitHub',
    'CI/CD con GitHub Actions',
    'Trabajo en equipo y comunicación',
    'Resolución de problemas',
  ],
  lenguajes: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'C++ (Arduino/ESP32)'],
  tecnologias: ['Angular', 'Astro', 'Node.js', 'Docker', 'ESP32', 'GitHub Pages'],
};

const USUARIO = 'angela-aponte';

export const PROYECTOS: Proyecto[] = [
  {
    nombre: 'Portafolio Digital',
    descripcion: 'Catálogo de proyectos desarrollado en Angular.',
    tecnologias: ['Angular', 'TypeScript', 'GitHub Actions'],
    caracteristicas: ['Perfil profesional', 'Catálogo de proyectos', 'Despliegue automático'],
    repoUrl: `https://github.com/${USUARIO}/portafolio-angular`,
    demoUrl: `https://${USUARIO}.github.io/portafolio-angular/`,
  },
];