export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export function isLocale(value: string): value is Locale {
  return value === 'en' || value === 'es';
}
export const localeCookie = 'silvina-language';
export const siteUrl = 'https://silvina-portfolio.vercel.app';
export const contact = {
  email: 'silvina.staniszewski@gmail.com',
  github: 'https://github.com/SilviStani',
  linkedin: 'https://www.linkedin.com/in/silvina-staniszewski-18493276/',
  whatsapp: 'https://wa.me/5491163632288',
};

const en = {
  meta: {
    title: 'Silvina.Dev | Senior QA Automation Engineer & Web Developer',
    description:
      'Beautiful digital experiences, built with quality at their core. Explore Silvina Staniszewski’s work in QA automation, Next.js, React, and web development.',
  },
  nav: {
    services: 'Expertise',
    work: 'Selected work',
    about: 'About me',
    contact: 'Let’s talk',
    open: 'Open menu',
    close: 'Close menu',
    label: 'Main navigation',
    language: 'Select language',
    home: 'Silvina.Dev — home',
    skip: 'Skip to content',
  },
  hero: {
    eyebrow: 'THOUGHTFULLY BUILT. THOROUGHLY TESTED.',
    before: 'Turning ideas into reliable digital ',
    highlight: 'experiences',
    after: '.',
    description:
      'I build and test modern web applications that are beautiful, functional, and reliable, for engineering teams and growing businesses.',
    primary: 'Explore My Work',
    secondary: 'Let’s Talk',
    note: 'Based in Argentina. Building beyond borders.',
    qaLabel: 'QA AUTOMATION · CAREER IMPACT',
    qaMetric: 'Smoke tests automated',
    qaDetail: '40% less regression execution time',
    desktopAlt: 'Walter Limpieza Tapizados website on a laptop',
    mobileAlt: 'Walter Limpieza Tapizados website at mobile width',
    caption: 'A real project. A thoughtful experience.',
    visualLabel: 'Web development meets quality engineering',
  },
  impact: {
    label: 'QUALITY THAT MAKES A DIFFERENCE',
    items: [
      'Smoke tests automated',
      'Less regression execution time',
      'Regression suite automated',
      'Years of QA experience',
    ],
  },
  services: {
    eyebrow: 'TWO DISCIPLINES. ONE PURPOSE.',
    title: 'Beautifully built.',
    italic: 'Made to work.',
    intro:
      'From the first idea to the final test, I bring a quality-first mindset to every digital experience.',
    qaTitle: 'Quality Engineering',
    qaDescription:
      'Confidence in every release. I help engineering teams build dependable automation, find risks early, and make quality part of the process.',
    qaItems: [
      'QA automation & test strategy',
      'Selenium C#, NUnit & Playwright',
      'API testing & CI/CD integration',
      'Automation framework development',
    ],
    devTitle: 'Web Development',
    devDescription:
      'Your business deserves a thoughtful digital presence. I build websites and applications that connect your vision with the people who need it.',
    devItems: [
      'Next.js, React & TypeScript',
      'Responsive websites & custom applications',
      'Performance & accessibility',
      'Solutions shaped around your business',
    ],
    qaCta: 'Let’s strengthen your quality',
    devCta: 'Let’s bring your idea to life',
  },
  projects: {
    eyebrow: 'A SELECTION OF MY WORK',
    title: 'Ideas brought',
    italic: 'to life.',
    intro: 'Real projects. Practical solutions. Quality woven into every detail.',
    all: 'All',
    qa: 'QA',
    development: 'Development',
    filters: 'Filter projects',
    code: 'View code',
    live: 'Visit website',
    private: 'About this repository',
    more: 'Explore all projects',
    back: 'Back to selected work',
    archiveTitle: 'The project',
    archiveItalic: 'collection.',
    archiveIntro:
      'A closer look at my work across web development, automation, and continuous learning.',
    count: 'projects shown',
    screenshot: 'Project preview:',
    inProgress: 'In development',
    featured: 'FEATURED PROJECT',
    noScreenshot: 'Project in development',
    resources: 'Sharing what I learn',
    resourcesDescription:
      'Practical resources on end-to-end testing, created to make quality knowledge easier to share.',
    brief: 'E2E testing: a brief guide',
    practices: 'E2E testing: steps & best practices',
    download: 'Download presentation',
    sourceLanguage: 'Original presentation · English',
  },
  about: {
    eyebrow: 'THE PERSON BEHIND THE WORK',
    title: 'A creative mind.',
    italic: 'An engineer’s care.',
    intro: 'Hi, I’m Silvina Staniszewski.',
    description:
      'A Senior QA Automation Engineer and Web Developer who believes the best digital experiences are as reliable as they are beautiful.',
    detail:
      'With 4+ years in QA, I bring experience in automation frameworks, Agile teams, mentoring, and full-stack development. I connect the attention to detail of quality engineering with the creativity of building for the web.',
    values: ['Quality from the start', 'Clear communication', 'Continuous improvement'],
    signature: 'Care in the details. Confidence in the result.',
    location: 'ARGENTINA · WORKING GLOBALLY',
    experience: 'QA Automation & Web Development',
  },
  contact: {
    eyebrow: 'GOOD THINGS START WITH A CONVERSATION',
    title: 'What can we create',
    italic: 'together?',
    intro:
      'A stronger engineering team or a new digital home for your business. I’d love to hear what you have in mind.',
    qaTitle: 'For engineering teams',
    qaText:
      'Let’s talk about international QA engineering opportunities, test automation, and building quality together.',
    qaCta: 'Discuss a QA opportunity',
    devTitle: 'For your business',
    devText:
      'Have an idea for a website or web application? Let’s turn it into something thoughtful, useful, and yours.',
    devCta: 'Tell me about your project',
    email: 'Prefer email?',
    qaSubject: 'QA engineering opportunity',
    devMessage: 'Hi Silvina! I’d like to talk about a web development project.',
    footer: 'Built with intention. Tested with care.',
    top: 'Back to top',
    rights: 'All rights reserved.',
  },
  private: {
    eyebrow: 'A LITTLE CONTEXT',
    title: 'This repository is private.',
    description:
      'The source code for this project is kept private to protect intellectual property. If you’d like to learn more about the project or discuss a collaboration, get in touch.',
    cta: 'Let’s talk',
    back: 'Back to projects',
  },
  error: {
    title: 'A little off the beaten path.',
    description: 'This page could not be found. Let’s get you back to something good.',
    back: 'Back to home',
  },
};
export type Dictionary = typeof en;
const es: Dictionary = {
  meta: {
    title: 'Silvina.Dev | Senior QA Automation Engineer y Desarrolladora Web',
    description:
      'Experiencias digitales diseñadas con cuidado y construidas con calidad. Conocé el trabajo de Silvina Staniszewski en automatización QA, Next.js, React y desarrollo web.',
  },
  nav: {
    services: 'Servicios',
    work: 'Proyectos',
    about: 'Sobre mí',
    contact: 'Hablemos',
    open: 'Abrir menú',
    close: 'Cerrar menú',
    label: 'Navegación principal',
    language: 'Elegir idioma',
    home: 'Silvina.Dev — inicio',
    skip: 'Ir al contenido',
  },
  hero: {
    eyebrow: 'DESARROLLO CON INTENCIÓN. CALIDAD EN CADA DETALLE.',
    before: 'Transformando ideas en ',
    highlight: 'experiencias',
    after: ' digitales confiables.',
    description:
      'Desarrollo y pruebo aplicaciones web modernas, atractivas, funcionales y confiables para equipos de ingeniería y negocios en crecimiento.',
    primary: 'Explorá mis proyectos',
    secondary: 'Hablemos',
    note: 'Desde Argentina. Más allá de las fronteras.',
    qaLabel: 'AUTOMATIZACIÓN QA · IMPACTO PROFESIONAL',
    qaMetric: 'Pruebas de humo automatizadas',
    qaDetail: '40% menos tiempo de ejecución de regresión',
    desktopAlt: 'Sitio de Walter Limpieza Tapizados en una notebook',
    mobileAlt: 'Sitio de Walter Limpieza Tapizados en su versión móvil',
    caption: 'Un proyecto real. Una experiencia cuidada.',
    visualLabel: 'Desarrollo web e ingeniería de calidad',
  },
  impact: {
    label: 'CALIDAD QUE MARCA LA DIFERENCIA',
    items: [
      'Pruebas de humo automatizadas',
      'Menos tiempo de ejecución de regresión',
      'Suite de regresión automatizada',
      'Años de experiencia en QA',
    ],
  },
  services: {
    eyebrow: 'DOS DISCIPLINAS. UN MISMO PROPÓSITO.',
    title: 'Diseño que conecta.',
    italic: 'Calidad que se nota.',
    intro:
      'Desde la primera idea hasta la última prueba, la calidad es parte de cada experiencia digital que construyo.',
    qaTitle: 'Ingeniería de Calidad',
    qaDescription:
      'Confianza en cada entrega. Ayudo a los equipos a desarrollar automatizaciones confiables, detectar riesgos a tiempo e integrar la calidad en cada etapa.',
    qaItems: [
      'Automatización QA y estrategia de pruebas',
      'Selenium C#, NUnit y Playwright',
      'Pruebas de API e integración CI/CD',
      'Desarrollo de frameworks de automatización',
    ],
    devTitle: 'Desarrollo Web',
    devDescription:
      'Tu negocio merece una presencia digital pensada con cuidado. Creo sitios y aplicaciones que conectan tu visión con las personas que la necesitan.',
    devItems: [
      'Next.js, React y TypeScript',
      'Sitios adaptables y aplicaciones a medida',
      'Rendimiento y accesibilidad',
      'Soluciones pensadas para tu negocio',
    ],
    qaCta: 'Mejoremos la calidad de tu software',
    devCta: 'Démosle vida a tu idea',
  },
  projects: {
    eyebrow: 'UNA SELECCIÓN DE MI TRABAJO',
    title: 'Ideas que cobran',
    italic: 'vida.',
    intro: 'Proyectos reales. Soluciones concretas. Calidad en cada detalle.',
    all: 'Todos',
    qa: 'QA',
    development: 'Desarrollo',
    filters: 'Filtrar proyectos',
    code: 'Ver código',
    live: 'Visitar sitio',
    private: 'Sobre este repositorio',
    more: 'Explorá todos los proyectos',
    back: 'Volver a proyectos destacados',
    archiveTitle: 'Una colección de',
    archiveItalic: 'proyectos.',
    archiveIntro: 'Conocé mi trabajo en desarrollo web, automatización y aprendizaje continuo.',
    count: 'proyectos visibles',
    screenshot: 'Vista previa del proyecto:',
    inProgress: 'En desarrollo',
    featured: 'PROYECTO DESTACADO',
    noScreenshot: 'Proyecto en desarrollo',
    resources: 'Compartir lo aprendido',
    resourcesDescription:
      'Recursos prácticos sobre pruebas de punta a punta para compartir conocimientos de calidad de software.',
    brief: 'Pruebas E2E: una guía breve',
    practices: 'Pruebas E2E: pasos y buenas prácticas',
    download: 'Descargar presentación',
    sourceLanguage: 'Presentación original · En inglés',
  },
  about: {
    eyebrow: 'LA PERSONA DETRÁS DEL TRABAJO',
    title: 'Una mirada creativa.',
    italic: 'Precisión técnica.',
    intro: 'Hola, soy Silvina Staniszewski.',
    description:
      'Senior QA Automation Engineer y Desarrolladora Web. Creo que las mejores experiencias digitales son tan confiables como atractivas.',
    detail:
      'Con más de 4 años en QA, tengo experiencia en frameworks de automatización, equipos ágiles, mentoría y desarrollo full-stack. Combino la atención al detalle de la ingeniería de calidad con la creatividad del desarrollo web.',
    values: ['Calidad desde el inicio', 'Comunicación clara', 'Mejora continua'],
    signature: 'Cuidado en los detalles. Confianza en el resultado.',
    location: 'ARGENTINA · CONEXIÓN GLOBAL',
    experience: 'Automatización QA y Desarrollo Web',
  },
  contact: {
    eyebrow: 'TODO EMPIEZA CON UNA CONVERSACIÓN',
    title: '¿Qué podemos crear',
    italic: 'juntos?',
    intro:
      'Un equipo de ingeniería más sólido o una nueva presencia digital para tu negocio. Me encantaría conocer lo que tenés en mente.',
    qaTitle: 'Para equipos de ingeniería',
    qaText:
      'Conversemos sobre oportunidades internacionales en QA, automatización de pruebas y cómo construir calidad en equipo.',
    qaCta: 'Conversemos sobre QA',
    devTitle: 'Para tu negocio',
    devText:
      '¿Tenés una idea para un sitio o una aplicación web? Transformémosla en algo útil, cuidado y con tu identidad.',
    devCta: 'Contame tu proyecto',
    email: '¿Preferís escribirme por mail?',
    qaSubject: 'Oportunidad en ingeniería QA',
    devMessage: '¡Hola Silvina! Me gustaría conversar sobre un proyecto de desarrollo web.',
    footer: 'Creado con intención. Probado con cuidado.',
    top: 'Volver arriba',
    rights: 'Todos los derechos reservados.',
  },
  private: {
    eyebrow: 'UN POCO DE CONTEXTO',
    title: 'Este repositorio es privado.',
    description:
      'El código de este proyecto es privado para proteger la propiedad intelectual. Si querés conocer más sobre el proyecto o conversar sobre una colaboración, escribime.',
    cta: 'Hablemos',
    back: 'Volver a proyectos',
  },
  error: {
    title: 'Nos desviamos un poquito.',
    description: 'No encontramos esta página. Volvamos a un lugar conocido.',
    back: 'Volver al inicio',
  },
};
export const dictionaries: Record<Locale, Dictionary> = { en, es };
