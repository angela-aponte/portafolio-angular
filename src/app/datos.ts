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
  {
    nombre: 'Mini Design System',
    descripcion: 'Biblioteca de componentes reutilizables para construir interfaces consistentes.',
    tecnologias: ['Angular', 'TypeScript', 'CSS'],
    caracteristicas: ['Botones con variantes', 'Alertas', 'Insignias'],
    repoUrl: `https://github.com/${USUARIO}/design-system-angular`,
    demoUrl: `https://${USUARIO}.github.io/design-system-angular/`,
  },
  {
    nombre: 'Lista de tareas',
    descripcion: 'Aplicación para gestionar tareas pendientes y completadas.',
    tecnologias: ['Angular', 'TypeScript', 'Signals'],
    caracteristicas: ['Agregar y eliminar tareas', 'Marcar como hechas', 'Filtros'],
    repoUrl: `https://github.com/${USUARIO}/lista-tareas-angular`,
    demoUrl: `https://${USUARIO}.github.io/lista-tareas-angular/`,
  },
  {
    nombre: 'Patrones de diseño',
    descripcion: 'Demostración interactiva de los patrones Observer y Builder.',
    tecnologias: ['Angular', 'TypeScript'],
    caracteristicas: ['Observer con suscripción dinámica', 'Builder encadenado', 'Pruebas unitarias'],
    repoUrl: `https://github.com/${USUARIO}/patrones-diseno-angular`,
    demoUrl: `https://${USUARIO}.github.io/patrones-diseno-angular/`,
  },
  {
    nombre: 'Tablero Kanban',
    descripcion: 'Tablero de tres columnas para organizar tareas por estado.',
    tecnologias: ['Angular', 'TypeScript', 'Signals'],
    caracteristicas: ['Tarjetas movibles entre columnas', 'Contador por columna', 'Alta y baja de tarjetas'],
    repoUrl: `https://github.com/${USUARIO}/kanban-angular`,
    demoUrl: `https://${USUARIO}.github.io/kanban-angular/`,
  },
];