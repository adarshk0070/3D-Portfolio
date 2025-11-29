import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
 
  rubixe,
  codealpha,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Data Science and AI Consultant",
    companyName: "Rubixe",
    icon: rubixe,
    iconBg: "#383E56",
    date: "Jan 2025 – Sep 2025",
    points: [
      "Improved ML model accuracy by 12% across multiple real-world datasets through feature engineering and hyperparameter tuning.",
      "Built modular and reusable ML experimentation pipelines in Python, reducing prototype development time by 30%.",
      "Created SQL-based dashboards and automated performance reports to support data-driven decisions.",
      "Collaborated with senior data scientists on POCs for healthcare, e-commerce, and finance analytics.",
    ],
  },
  {
    title: "Machine Learning Intern",
    companyName: "CodeAlpha",
    icon: codealpha,        // Replace with your actual icon
    iconBg: "#E6DEDD",
    date: "July 2025 – Aug 2025",
    points: [
      "Completed a virtual internship focused on Machine Learning with hands-on problem-solving and model building tasks.",
      "Gained deeper understanding of ML concepts through guided orientation, practical exercises, and self-driven learning.",
      "Worked on real-time machine learning assignments to strengthen analytical, coding, and evaluation skills.",
      "Demonstrated dedication and consistency, earning a Certificate of Completion for successful internship performance.",
    ],
  },
  
  
];

const projects: TProject[] = [
  {
    name: "NEUROLYTICS – AI Brain Tumor Detection",
     description:
      "AI-driven platform for MRI tumor detection using a VGG16 model, featuring secure authentication, encrypted reports, and real-time doctor–patient interaction.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "fastapi", color: "pink-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "machinelearning", color: "blue-text-gradient" },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/adarshk0070/NEUROLYTICS.git",
  },
   {
    name: "E-Commerce Platform (MERN Stack)",
    description:
      "Full-stack e-commerce system with secure JWT login, real-time cart updates, and optimized MongoDB operations for fast, scalable shopping workflows.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "jwt", color: "blue-text-gradient" },
      { name: "socket.io", color: "green-text-gradient" },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/adarshk0070/E-Commerce-Web-Application--mern-.git",
  },
  {
    name: "LOCUS – Real Estate Price Prediction",
    description:
    "An ML-driven prediction system that analyzes property features using regression models, offering visual insights through dashboards and delivering real-time price estimates via API integration.",
  tags: [
      { name: "python", color: "blue-text-gradient" },
    { name: "scikitlearn", color: "green-text-gradient" },
    { name: "streamlit", color: "pink-text-gradient" },
    { name: "fastapi", color: "blue-text-gradient" },
    { name: "postgresql", color: "green-text-gradient" },
  ],
    image: tripguide,
    sourceCodeLink: "https://github.com/adarshk0070/Locus.git",
  },
];

export { services, technologies, experiences, projects };
