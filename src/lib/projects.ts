import { data } from '../../Components/Portfolio/data';
import type { Locale } from './i18n';

export type ProjectCategory = 'qa' | 'development';
export interface Project {
  id: string;
  title: string;
  englishTitle?: string;
  category: ProjectCategory;
  description: Record<Locale, string>;
  tags: string[];
  image: string | null;
  imageAlt?: string;
  mobileImage?: string;
  mobileImageAlt?: string;
  quality?: Record<Locale, string>;
  code: string;
  live: string;
  demoPreviews?: { label: Record<Locale, string>; href: string; screenshot: string }[];
}

const descriptions: Record<string, Record<Locale, string>> = {
  henryapp: {
    en: 'A full-stack recipe app built at Henry. Search, filter, and create recipes through an interactive React experience backed by Express and PostgreSQL.',
    es: 'Una aplicación full-stack de recetas desarrollada en Henry. Búsqueda, filtros y creación de recetas con React, Express y PostgreSQL.',
  },
  'pom-selenium': {
    en: 'A Selenium and C# practice framework built around the Page Object Model, exploring reusable page objects and maintainable browser automation.',
    es: 'Un framework de práctica con Selenium y C# basado en Page Object Model, con objetos de página reutilizables y automatización de navegador mantenible.',
  },
  walter: {
    en: 'A website for an upholstery cleaning business, presenting its services and making it easy for customers to get in touch.',
    es: 'Un sitio para un negocio de limpieza de tapizados que presenta sus servicios y facilita el contacto con sus clientes.',
  },
  vipets: {
    en: 'A collaborative full-stack pet care project with pet spa services and quick access to 24-hour clinics.',
    es: 'Un proyecto grupal full-stack de cuidado de mascotas, con servicios de spa y acceso rápido a clínicas las 24 horas.',
  },
  sauce_demo_playwright: {
    en: 'A Playwright training suite for SauceDemo with 26 tests across login, inventory, cart, checkout, logout, and end-to-end flows. Built with TypeScript and Page Object Model.',
    es: 'Una suite de práctica con Playwright para SauceDemo: 26 pruebas de inicio de sesión, inventario, carrito, compra, cierre de sesión y flujos E2E, con TypeScript y Page Object Model.',
  },
  'ai-test-case-generator': {
    en: 'An AI-assisted tool that turns requirements into structured test cases, helping organize scenarios and streamline test design.',
    es: 'Una herramienta asistida por IA que convierte requisitos en casos de prueba estructurados para organizar escenarios y agilizar el diseño de pruebas.',
  },
  portfolio: {
    en: 'My personal portfolio: an evolving space for web development, quality engineering, and everything I learn along the way.',
    es: 'Mi portfolio personal: un espacio en constante evolución para el desarrollo web, la calidad de software y todo lo que voy aprendiendo.',
  },
  'azul-profundo': {
    en: 'A website for pool cleaning, water treatment, and maintenance services, with a clear presentation of the business offering.',
    es: 'Un sitio de servicios de limpieza de piscinas, tratamiento de agua y asesoramiento para el mantenimiento.',
  },
  'body-glow': {
    en: 'A web presence for Body Glow, a beauty and body wellness center.',
    es: 'La presencia digital de Body Glow, un centro de estética y bienestar corporal.',
  },
  vistaensueno: {
    en: 'A website showcasing seasonal holiday cabins in Potrero de Garay, Argentina.',
    es: 'Un sitio para descubrir cabañas de temporada en Potrero de Garay, Argentina.',
  },
  estetica: {
    en: 'A website presenting facial and body treatments for a beauty and wellness spa.',
    es: 'Un sitio que presenta tratamientos faciales y corporales de un spa de estética y bienestar.',
  },
  silandra: {
    en: 'A digital showcase for a bridal couture house in Escobar, Buenos Aires.',
    es: 'Una vidriera digital para una casa de novias de Escobar, Buenos Aires.',
  },
  mirsu: {
    en: 'A holiday cabin website for Mirsú in Villa General Belgrano, with location information and useful travel links.',
    es: 'Un sitio de cabañas en Villa General Belgrano, con mapa de ubicación e información útil para viajeros.',
  },
  delicias: {
    en: 'A digital catalog and direct contact website for an artisan bakery in Escobar.',
    es: 'Un catálogo digital con contacto directo para una panadería artesanal de Escobar.',
  },
  'mi-terra': {
    en: 'A Next.js website currently in development. The project repository is available to explore.',
    es: 'Un sitio en Next.js actualmente en desarrollo. El repositorio está disponible para conocer el proyecto.',
  },
  cronometro: {
    en: 'A stopwatch and countdown timer built with JavaScript, Redux, and CSS.',
    es: 'Un cronómetro con cuenta regresiva desarrollado con JavaScript, Redux y CSS.',
  },
  'to-do': {
    en: 'A vacation planning to-do list built with vanilla JavaScript and CSS.',
    es: 'Una lista de tareas para planificar vacaciones, desarrollada con JavaScript puro y CSS.',
  },
};

// Keep the original project URLs, technologies, and assets as the source of truth.
export const projects: Project[] = data.map((project) => ({
  id: project.id,
  title:
    project.id === 'pom-selenium'
      ? 'Selenium POM Framework'
      : project.id === 'portfolio'
        ? 'Silvina.Dev'
        : project.title,
  category:
    project.category === 'QA Automation' || project.category === 'Prompt Engineering'
      ? 'qa'
      : 'development',
  description: descriptions[project.id],
  tags: project.tags,
  image: project.id === 'mi-terra' ? null : project.image,
  mobileImage: project.id === 'walter' ? '/assets/walter-mobile.png' : undefined,
  quality:
    project.id === 'portfolio'
      ? {
          en: 'Playwright tests cover localized navigation, project filters, and accessibility.',
          es: 'Las pruebas con Playwright cubren la navegación bilingüe, los filtros y la accesibilidad.',
        }
      : undefined,
  code: project.srcGit,
  live: project.srcWeb,
}));
export const archiveProjects: Project[] = [
  {
    id: 'invitaciones-virtuales',
    title: 'Invitaciones virtuales',
    englishTitle: 'Virtual Invitations',
    category: 'development',
    description: {
      en: 'Responsive invitations for weddings and celebrations, with RSVP, maps, and photo galleries.',
      es: 'Invitaciones adaptables para bodas y celebraciones, con confirmación de asistencia, mapas y galerías de fotos.',
    },
    tags: ['Next.js', 'TypeScript', 'Responsive'],
    image: '/assets/yuliana-sebastian-desktop.jpg',
    imageAlt: 'Yuliana y Sebasti?n',
    mobileImage: '/assets/ludmi-egresados-mobile.jpg',
    mobileImageAlt: 'Ludmi ? Evento Egresados',
    quality: {
      en: 'Automated tests cover RSVP validation and duplicate submissions in Ludmi, and photo uploads in the wedding invitation.',
      es: 'Pruebas automatizadas de confirmación de asistencia y envíos duplicados en Ludmi, y de carga de fotos en la invitación de boda.',
    },
    code: '',
    live: '',
    demoPreviews: [
      {
        label: { en: 'View Demo 1', es: 'Ver demo 1' },
        href: 'https://invitation-demo-one.vercel.app/',
        screenshot: '/images/projects/invitation-demo-1.webp',
      },
      {
        label: { en: 'View Demo 2', es: 'Ver demo 2' },
        href: 'https://invitation-demo-one.vercel.app/demo2/',
        screenshot: '/images/projects/invitation-demo-2.webp',
      },
    ],
  },
  ...projects,
];
export const featuredProjects = ['henryapp', 'pom-selenium', 'walter'].map(
  (id) => projects.find((project) => project.id === id)!
);
