# Portafolio Digital

Portafolio digital desarrollado con **Angular** que funciona como catálogo de proyectos de la carrera y del curso de Arquitectura de Software. Desde aquí se pueden consultar las características de cada proyecto, abrir su repositorio en GitHub y ver la aplicación desplegada.

🔗 **Demo:** https://angela-aponte.github.io/portafolio-angular/

## Contenido

- **Perfil profesional:** presentación, habilidades, lenguajes de programación y tecnologías.
- **Catálogo de proyectos:** nombre, descripción, tecnologías y características de cada proyecto.
- **Acceso a cada proyecto:** enlace al repositorio de GitHub y enlace a la aplicación desplegada.

## Proyectos del catálogo

| # | Proyecto | Repositorio | Demo |
|---|----------|-------------|------|
| 1 | Portafolio Digital | [Repo](https://github.com/angela-aponte/portafolio-angular) | [Ver](https://angela-aponte.github.io/portafolio-angular/) |
| 2 | Mini Design System | [Repo](https://github.com/angela-aponte/design-system-angular) | [Ver](https://angela-aponte.github.io/design-system-angular/) |
| 3 | Lista de tareas | [Repo](https://github.com/angela-aponte/lista-tareas-angular) | [Ver](https://angela-aponte.github.io/lista-tareas-angular/) |
| 4 | Patrones de diseño | [Repo](https://github.com/angela-aponte/patrones-diseno-angular) | [Ver](https://angela-aponte.github.io/patrones-diseno-angular/) |
| 5 | Tablero Kanban | [Repo](https://github.com/angela-aponte/kanban-angular) | [Ver](https://angela-aponte.github.io/kanban-angular/) |

## Tecnologías

- Angular (componentes standalone, control flow `@for`)
- TypeScript
- HTML y CSS
- GitHub Actions (CI/CD)
- GitHub Pages (publicación)

## Estructura del proyecto

```
src/app/
├── perfil/          # Presentación y habilidades
├── catalogo/        # Listado de proyectos
├── proyecto-card/   # Tarjeta individual de cada proyecto
└── datos.ts         # Datos del perfil y de los proyectos
```

Para agregar o editar un proyecto del catálogo basta con modificar el arreglo `PROYECTOS` en `src/app/datos.ts`.

## Ejecución local

Requisitos: Node.js 22 y Angular CLI.

```bash
git clone https://github.com/angela-aponte/portafolio-angular.git
cd portafolio-angular
npm install
ng serve
```

Abre http://localhost:4200 en el navegador.

## Pruebas

```bash
ng test
```

## Compilación

```bash
npm run build -- --base-href /portafolio-angular/
```

El resultado queda en `dist/portafolio-angular/browser`.

## Despliegue automático (CI/CD)

El despliegue se realiza con **GitHub Actions** (`.github/workflows/deploy.yml`) cada vez que se hace `push` a la rama `main`. El pipeline tiene tres etapas:

1. **build:** instala dependencias (`npm ci`) y compila la aplicación con el `base-href` del repositorio.
2. **deploy:** publica el resultado en **GitHub Pages**.
3. **verify:** comprueba con `curl` que el sitio publicado responde con HTTP 200.

## Convenciones de commits

El repositorio usa [Conventional Commits](https://www.conventionalcommits.org/es/):

- `feat:` nueva funcionalidad
- `fix:` corrección de errores
- `docs:` cambios en documentación
- `style:` cambios de formato o estilos
- `ci:` cambios en el pipeline

## Autora

**Angela Aponte** · Ingeniería de Sistemas, Unidad Central del Valle del Cauca (UCEVA)
Curso de Arquitectura de Software · Docente: Jesús David Mejía Vergara