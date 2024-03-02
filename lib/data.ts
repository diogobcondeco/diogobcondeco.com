import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { MdOutlineStar, MdSchool } from "react-icons/md";
import cryptoCrowdImg from "@/public/cryptocrowd2.png";
import ozdevsImg from "@/public/ozdevs-two.png";
import assetTradingImg from "@/public/asset-trading.jpg";
import euphorusImg from "@/public/euphorus-two.png";
import euphorusBackendImg from "@/public/euphorus-backend.png";
import techprowlImg from "@/public/techprowl-two.png";
import taskManagerImg from "@/public/task-manager.png";
import familyTreeImg from "@/public/bfsproject.jpg";
import binaryGameImg from "@/public//binary-game.png";
import { Experience, Link, Skill } from "./types";

export const links: Link[] = [
  {
    name: "Home",
    hash: "#home",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  // {
  //   name: "Education",
  //   hash: "#education",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const skillsData: Skill[] = [
  {
    name: "JavaScript",
    icon: "logos:javascript",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },
  {
    name: "PHP",
    icon: "logos:php",
  },
  // {
  //   name: "Laravel",
  //   icon: "logos:laravel",
  // },
  // {
  //   name: "Symfony",
  //   icon: "logos:symfony",
  // },
  {
    name: "Python",
    icon: "logos:python",
  },
  {
    name: "Java",
    icon: "logos:java",
  },
  {
    name: "HTML",
    icon: "vscode-icons:file-type-html",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
  },
  {
    name: "SCSS",
    icon: "logos:sass",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "MySQL",
    icon: "logos:mysql",
  },
  {
    name: "Linux",
    icon: "flat-color-icons:linux",
  },
  // {
  //   name: "AWS",
  //   icon: "logos:aws",
  // },
  {
    name: "Docker",
    icon: "logos:docker-icon",
  },
  {
    name: "Jenkins",
    icon: "devicon:jenkins",
  },
  // {
  //   name: "Shopify",
  //   icon: "logos:shopify",
  // },
] as const;

export const experiencesData: Experience[] = [
  {
    title: "Frontend Developer",
    location: "Mindera - Remote - Full-time",
    project: "Vodafone",
    description:
      "React.js, Redux, Jest, JavaScript, CSS, Git, Agile, Jira, Jenkins, TypeScript, Tailwind CSS, Styled Components, Vitest, Kanban, Scrum",
    icon: React.createElement(CgWorkAlt),
    date: "August 2023 - Present",
    type: "work",
  },
  {
    title: "Frontend Developer",
    location: "Innotech - Remote - Full-time",
    project: "Vodafone",
    description:
      "React.js, Redux, Jest, JavaScript, CSS, Git, Agile, Jira, Jenkins, TypeScript, Tailwind CSS, Styled Components, Vitest, Kanban, Scrum",
    icon: React.createElement(CgWorkAlt),
    date: "May 2021 - August 2023",
    type: "work",
  },
  {
    title: "Junior Frontend Developer",
    location: "Everis / NTT Data - Remote - Full-time",
    project: "EDP",
    description: "Angular 9, TypeScript, Sass, Git, Agile, Jira, Jenkins",
    icon: React.createElement(CgWorkAlt),
    date: "January 2021 - April 2021",
    type: "work",
  },
  {
    title: "Junior Frontend Developer",
    location: "Everis / NTT Data - Remote - Full-time",
    project: "Orange",
    description: "AngularJS, TypeScript, Git, Agile, Jira, Jasmine, Karma",
    icon: React.createElement(CgWorkAlt),
    date: "September 2020 - January 2021",
    type: "work",
  },
  {
    title: "Junior Frontend Developer",
    location: "Everis / NTT Data - Remote - Internship",
    project: "Orange",
    description: "AngularJS, TypeScript, Git, Agile, Jira, Jasmine, Karma",
    icon: React.createElement(CgWorkAlt),
    date: "July 2020 - August 2020",
    type: "work",
  },
  {
    title: "Bachelor’s Degree in Computer Science",
    location: "University of Debrecen - Erasmus",
    project: "",
    description: "Debrecen, Hungary",
    icon: React.createElement(MdSchool),
    date: "September 2019 - January 2020",
    type: "education",
  },
  {
    title: "Bachelor’s Degree in Informatics",
    location: "Polytechnic Institute of Santarém",
    project: "",
    description: "Santarém, Portugal",
    icon: React.createElement(MdSchool),
    date: "September 2018 - July 2020",
    type: "education",
  },
  {
    title: "Full Stack Developer",
    location: "Criactivos - On-site - Internship",
    project: "",
    description: "PHP, JavaScript, HTML, CSS, Bootstrap, jQuery, MySQL",
    icon: React.createElement(CgWorkAlt),
    date: "March 2018 - July 2018",
    type: "work",
  },
  {
    title: "Higher Professional Technical Course in Programming",
    location: "Polytechnic Institute of Santarém",
    project: "",
    description: "Santarém, Portugal",
    icon: React.createElement(MdSchool),
    date: "September 2016 - July 2018",
    type: "education",
  },
  {
    icon: React.createElement(MdOutlineStar),
    type: "end",
  },
] as const;
