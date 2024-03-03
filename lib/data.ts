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

export const projectsData = [
  {
    title: "CryptoCrowd",
    description:
      "Cryptocurrency sentiment analysis on tweets. Users can see the overall sentiment (positive, negative or neutral) of different Cryptocurrencies based on what people are currently tweeting. Users can also see keywords and an average sentiment score. Stateless application that uses Elasticache and S3 on AWS. It also used EC2 and auto-scaling to manage demand.",
    tags: ["JavaScript", "React", "Express.js", "AWS"],
    icons: [
      "logos:aws",
      "logos:javascript",
      "logos:react",
      "logos:bootstrap",
      "logos:express",
    ],
    imageUrl: cryptoCrowdImg,
    githubLink: "https://github.com/ben04rogers/cab432-assignment-2",
    demoLink: "https://www.youtube.com/watch?v=uhyC0M4WIl4",
  },
  {
    title: "OzDevs",
    description:
      "Reverse Job board for companies looking to hire developers in Australia. Filter by experience, location and keyboards.  Companies can pay a monthly fee to be able to message developers on the site and view their information.",
    tags: ["PHP", "Laravel", "JavaScript", "Tailwind", "MySQL"],
    icons: [
      "logos:laravel",
      "logos:php",
      "logos:javascript",
      "devicon:tailwindcss",
      "logos:mysql",
    ],
    imageUrl: ozdevsImg,
    urlLink: "https://clownfish-app-48u2r.ondigitalocean.app/",
    githubLink: "https://github.com/ben04rogers/ozdevs-v2",
  },
  {
    title: "Company Asset Trading",
    description:
      "Client-server system written in Java for trading of virtual assets within departments of a company. Facilitated trades via a marketplace model where users can buy and sell assets. Admins of an organisation can create assets, users and modify details. Uses MariaDB as a database and Swing for the GUI.",
    tags: ["Java", "MariaDB", "Swing"],
    icons: ["logos:java", "logos:mariadb-icon"],
    imageUrl: assetTradingImg,
    githubLink: "https://github.com/ben04rogers/organisation-asset-trading",
  },
  {
    title: "Euphorus",
    description:
      "React application for viewing country happiness data collected from the World Happiness Report initiative. Users can filter by year, country and search limit. AG Grid and Chart.js were used to present the data.",
    tags: ["JavaScript", "React", "Bootstrap"],
    icons: ["logos:javascript", "logos:react", "logos:bootstrap"],
    imageUrl: euphorusImg,
    githubLink: "https://github.com/ben04rogers/cab230assignment1",
  },
  {
    title: "Country Happiness API",
    description:
      "Developed and deployed an Express API to support the front-end of the Euphorus Happiness Data web application. Routes support query parameters and authorization using JWT. Includes endpoints for countries, rankings, factors, registration, login, and profile. Tested software extensively with Jest and created Swagger documentation for the API as well.      ",
    tags: ["JavaScript", "Node.js", "Express.js", "Swagger", "MySQL"],
    icons: ["logos:javascript", "logos:express", "logos:swagger", "cib:mysql"],
    imageUrl: euphorusBackendImg,
    githubLink: "https://github.com/ben04rogers/cab230assignment2",
  },
  {
    title: "Techprowl Computer Auction",
    description:
      "Computer auction application built with Flask. The site allows users to register, bid on items, leave reviews, post new listings, manage listings, search by keyword, and keep a watch list. ",
    tags: ["Python", "Flask", "Bootstrap", "SQLite"],
    icons: ["logos:python", "logos:bootstrap", "logos:sqlite"],
    imageUrl: techprowlImg,
    githubLink: "https://github.com/ben04rogers/computer-auction",
    urlLink: "https://techprowl.herokuapp.com",
  },
  {
    title: "Task Manager Console App",
    description:
      "Console app that manages tasks in a project. Users can load projects from a file and generate a seqeuence to complete them in, based on each task's dependencies. Users can also find earliest possible commencement time of each task, add new tasks, update tasks, remove tasks, and save the results to a text file.",
    tags: ["C#"],
    icons: ["devicon:csharp"],
    imageUrl: taskManagerImg,
    githubLink: "https://github.com/ben04rogers/task-manager",
  },
  {
    title: "Family Tree Shortest Path",
    description:
      "Python program that implements a breadth-first search algorithm to generate a minimal spanning tree. Problem was to calculate a shortest path from a starting vertex in a graph to each other vertex. The vertices represent people and each person is related to every other person through parent-child relationships. A person can see how they are related to each other person in the tree",
    tags: ["Python"],
    icons: ["logos:python"],
    imageUrl: familyTreeImg,
    githubLink: "https://github.com/ben04rogers/breadth-first-search",
    demoLink: "https://www.youtube.com/watch?v=VXCZKsqupxA",
  },
  {
    title: "Arduino Binary Game",
    description:
      "Binary game written in C that runs on an Arduino Uno using Tinkercad. The game aims to help users learn binary by challenging them to input different integers in their binary form within a time limit.",
    tags: ["C"],
    icons: ["devicon:c"],
    imageUrl: binaryGameImg,
    githubLink: "https://github.com/ben04rogers/binary-game-microcontroller",
    demoLink: "https://www.youtube.com/watch?v=A6n6XDk4Unw&feature=youtu.be",
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
  // {
  //   name: "Vue",
  //   icon: "logos:vue",
  // },
  // {
  //   name: "Angular",
  //   icon: "vscode-icons:file-type-angular",
  // },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },
  // {
  //   name: "PHP",
  //   icon: "logos:php",
  // },
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
  // {
  //   name: "Java",
  //   icon: "logos:java",
  // },
  // {
  //   name: "Swift",
  //   icon: "logos:swift",
  // },
  // {
  //   name: "HTML",
  //   icon: "vscode-icons:file-type-html",
  // },
  // {
  //   name: "CSS",
  //   icon: "vscode-icons:file-type-css",
  // },
  {
    name: "Sass",
    icon: "logos:sass",
  },
  {
    name: "Tailwind CSS",
    icon: "logos:tailwindcss-icon",
  },
  // {
  //   name: "Styled Components",
  //   icon: "file-icons:styledcomponents",
  // },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "GitHub",
    icon: "mdi:github",
  },
  {
    name: "Next.js",
    icon: "devicon-plain:nextjs",
  },
  // {
  //   name: "Nuxt.js",
  //   icon: "vscode-icons:file-type-nuxt",
  // },
  {
    name: "Express.js",
    icon: "simple-icons:express",
  },
  {
    name: "Django",
    icon: "logos:django-icon",
  },
  // {
  //   name: "Flask",
  //   icon: "simple-icons:flask",
  // },
  {
    name: "MySQL",
    icon: "logos:mysql",
  },
  {
    name: "MongoDB",
    icon: "devicon:mongodb",
  },
  {
    name: "PostgreSQL",
    icon: "logos:postgresql",
  },
  {
    name: "SQLite",
    icon: "devicon:sqlite",
  },
  {
    name: "Prisma",
    icon: "simple-icons:prisma",
  },
  // {
  //   name: "Firebase",
  //   icon: "logos:firebase",
  // },
  {
    name: "Linux",
    icon: "flat-color-icons:linux",
  },
  // {
  //   name: "MacOS",
  //   icon: "wpf:macos",
  // },
  // {
  //   name: "AWS",
  //   icon: "logos:aws",
  // },
  {
    name: "Docker",
    icon: "logos:docker-icon",
  },
  {
    name: "Kubernetes",
    icon: "devicon:kubernetes",
  },
  {
    name: "Nginx",
    icon: "logos:nginx",
  },
  {
    name: "Jenkins",
    icon: "devicon:jenkins",
  },
  {
    name: "Vercel",
    icon: "ion:logo-vercel",
  },
  // {
  //   name: "Webpack",
  //   icon: "logos:webpack",
  // },
  // {
  //   name: "Vite",
  //   icon: "logos:vitejs",
  // },
  {
    name: "Jest",
    icon: "logos:jest",
  },
  // {
  //   name: "Vitest",
  //   icon: "logos:vitest",
  // },
  // {
  //   name: "Jira",
  //   icon: "logos:jira",
  // },
  {
    name: "Redux",
    icon: "logos:redux",
  },
  // {
  //   name: "Socket.io",
  //   icon: "logos:socket-io",
  // },
  {
    name: "GraphQL",
    icon: "logos:graphql",
  },
  {
    name: "Postman",
    icon: "devicon:postman",
  },
  // {
  //   name: "Jupyter",
  //   icon: "logos:jupyter",
  // },
  // {
  //   name: "VS Code",
  //   icon: "devicon:vscode",
  // },
  // {
  //   name: "Vim",
  //   icon: "logos:vim",
  // },
  // {
  //   name: "Xcode",
  //   icon: "logos:xcode",
  // },
  // {
  //   name: "NumPy",
  //   icon: "logos:numpy",
  // },
  // {
  //   name: "Seaborn",
  //   icon: "logos:seaborn-icon",
  // },
  // {
  //   name: "Pandas",
  //   icon: "simple-icons:pandas",
  // },
  // {
  //   name: "Matplotlib",
  //   icon: "devicon-plain:matplotlib",
  // },
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
