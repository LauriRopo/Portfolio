// Edit portfolio text and lists in this file without changing component markup.
export const skills = [
  {
    label: "Languages",
    items: ["C#", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  { label: "Backend", items: [".NET", "REST APIs"] },
  { label: "Frontend", items: ["React", "HTML", "CSS"] },
  { label: "Mobile", items: ["React Native", "Android development"] },
  { label: "Embedded", items: ["ESP8266", "Microcontrollers"] },
];

export const skillsByLanguage = {
  en: [
    {
      label: "Languages",
      items: ["C#", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
    },
    { label: "Backend", items: [".NET", "REST APIs"] },
    { label: "Frontend", items: ["React", "HTML", "CSS"] },
    { label: "Mobile", items: ["React Native", "Android development"] },
    { label: "Embedded", items: ["ESP8266", "Microcontrollers"] },
  ],
  fi: [
    {
      label: "Ohjelmointikielet",
      items: ["C#", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
    },
    { label: "Taustajärjestelmät", items: [".NET", "REST API:t"] },
    { label: "Käyttöliittymät", items: ["React", "HTML", "CSS"] },
    { label: "Mobiilisovellukset", items: ["React Native", "Android-kehitys"] },
    {
      label: "Sulautetut järjestelmät",
      items: ["ESP8266", "Mikrokontrollerit"],
    },
  ],
};

export const projects = [
  {
    number: "01",
    title: "Wireless Timing System",
    description:
      "Designed and implemented a wireless timing system using ESP8266 microcontrollers, alongside an Android application for monitoring measurement results.",
    meta: "Savonia University of Applied Sciences · Internship",
    tech: ["ESP8266", "Android", "Wireless systems"],
    visual: "timing",
  },
  {
    number: "02",
    title: "React Native Mobile Application",
    description:
      "Developed a React Native user interface for Kirppari-Kalle and implemented product information retrieval from two separate APIs.",
    meta: "Koodi-Kalle · Internship",
    tech: ["React Native", "REST APIs", "JavaScript"],
    visual: "mobile",
  },
  {
    number: "03",
    title: "Self-Service Checkout Prototype",
    description:
      "Built a React-based user interface prototype for a modern self-service checkout system.",
    meta: "Koodi-Kalle · Internship",
    tech: ["React", "JavaScript", "CSS"],
    visual: "checkout",
  },
  {
    number: "04",
    title: "FinlandDoc AI",
    description:
      "A Finnish-language document search application using BM25 ranking to find relevant passages in uploaded text documents.",
    meta: "Personal portfolio project · Python",
    tech: ["Python", "Streamlit", "BM25", "pytest"],
    visual: "finlanddoc",
    github: "https://github.com/LauriRopo/finlanddoc-ai",
  },
  {
    number: "05",
    title: "Morning Receipt",
    description:
      "A Python application that prints daily weather and NHL results on a USB thermal receipt printer. A simple way to prove that useful software can also be delightfully unnecessary.",
    meta: "Personal utility project · Python",
    tech: ["Python", "Open-Meteo", "NHL API", "USB printer"],
    visual: "printer",
    github: "https://github.com/LauriRopo/printer-daily",
  },
] as const;

export const experience = [
  {
    period: "07/2026 — 09/2026",
    role: "Summer Employee",
    company: "Piirla Oy",
    points: [
      "Warehouse management",
      "Logistics",
      "Sales and marketing support",
    ],
  },
  {
    period: "Internship",
    role: "Software Development Intern",
    company: "Savonia University of Applied Sciences",
    points: [
      "ESP8266-based wireless timing system",
      "Android application for monitoring results",
    ],
  },
  {
    period: "08/2024 — 09/2024",
    role: "Software Development Intern",
    company: "Koodi-Kalle",
    points: [
      "React Native application development",
      "API integrations",
      "React-based checkout prototype",
    ],
  },
];
