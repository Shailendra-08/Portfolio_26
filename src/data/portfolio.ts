import {
  react,
  redux,
  nodejs,
  expressjs,
  js,
  html,
  css,
  scss,
  tailwind,
  bootstrap,
  mui,
  git,
  github,
  java,
  spring,
  python,
  django,
  flutter,
  dart,
} from '../assets/tech-stack/tech-stack-export';

import portfolio_image from '../assets/project/portfolio_image.png';
import mess from '../assets/project/mess.png';
import chat from '../assets/project/chat.png';
import sport from '../assets/project/sport.png';
import sm from '../assets/project/summarizer.png';
import dp from '../assets/project/department.png';







export const portfolioData = {
  name: "Shailendra",
  role: "Shailendra Mahadule",
  tagline: "Full Stack developer | AI Implementation | Problem Solver ",

  home: {
    greeting: "Hi I'm Shailendra",
    name: "Mahadule",
    description: [
      "Java Fullstack Developer with hands-on experience in Spring Boot, Microservices, Angular, and React. Skilled in building scalable applications, containerization with Docker, and currently exploring Cloud technologies to deliver robust, end-to-end solutions.",
      "Actively exploring and implementing AI capabilities in full-stack systems, with a strong interest in learning and integrating AI-driven features to enhance application intelligence and user experience",
      "Let's connect for impactful collaboration"
    ],
    profileLink: "#"
  },

  about: {
    greeting: "Technical Skills!",
    description: "As a self-taught web and app developer, I have learned tools and languages such as Java, React, Python, Django, Node.js and . Additionally, I have a good understanding of Backend Technology. I am excited to connect with like-minded professionals to create stunning websites and apps.",


      techStack: [
      { name: "React", image: react },
      { name: "Redux.js", image: redux },
      { name: "JavaScript", image: js },
      { name: "HTML5", image: html },
      { name: "CSS3", image: css },
      { name: "SCSS", image: scss },
      { name: "Tailwind CSS", image: tailwind },
      { name: "Bootstrap", image: bootstrap },
      { name: "Material UI", image: mui },

      { name: "Node.js", image: nodejs },
      { name: "Express.js", image: expressjs },
      { name: "Java", image: java },
      { name: "Spring Boot", image: spring },
      { name: "Python", image: python },
      { name: "Django", image: django },
      { name: "Git", image: git },
      { name: "GitHub", image: github },
      { name: "Flutter", image: flutter },
      { name: "Dart", image: dart },
    ],



    experience: [
      {
        title: "Associate Developer",
        company: "NCS",
        location: "Pune",
        period: "July 2025 - Present",
        projects: [
          {
            name: "Order Management System",
            achievements: [
              "Completed Java Full Stack Developer training with hands-on experience in Java, Spring Boot, Microservices, Angular, SQL, Docker, and basic cloud computing concepts, with a focus on enterprise application development",
              "Contributed to the Order Management System (OMS) project by developing and supporting Java 8–based backend services, implementing business logic, and managing data using Oracle SQL",
              "Actively involved in the CI/CD pipeline, assisting with code integration, automated builds, testing, and deployments while following Agile/Scrum development practices"
            ]
          },
          // {
          //   name: "Zugo Admin Portal - React",
          //   achievements: [
          //     "Built a full-featured admin portal to manage tenants, users, and operational workflows.",
          //     "Improved data visualization and usability through interactive charts and optimized dashboard layouts.",
          //     "Worked closely with backend and product teams to translate business requirements into scalable frontend solutions."
          //   ]
          // }
        ]
      },
      {
        title: "Intern",
        company: "Siemens LTD",
        location: "Mumbai",
        period: "March 2025 – June 2025",
        projects: [
          {
            name: "EHS Data Analytics",
            achievements: [
              "Analyzed and managed Environment, Health & Safety (EHS) data to support compliance, safety monitoring, and operational decision-making.",
              "Developed dashboards and reports to track incidents, safety metrics, and performance trends using structured dataset.",
              "Collaborated with cross-functional teams to improve data accuracy, reporting efficiency, and insights for EHS stakeholders."
            ]
          },
          
        ]
      }
    ]
  },

  projects: [
    {
      id: 1,
      title: "Personal Portfolio",
      description: "A simple personal portfolio website to showcase my skills and projects",
      image: portfolio_image,
      link: "https://github.com/Shailendra-08/mess_master"
    },
    {
      id: 2,
      title: "Mess Manager",
      description: "A Mess Manager is made on Flutter",
      image: mess,
      link: "https://github.com/Shailendra-08/mess_master"
    },
    {
      id: 3,
      title: "Talisker",
      description: "An Chat Application made in MERN stack",
      image: chat,
      link: "https://github.com/Shailendra-08/Chat_app"
    },
    {
      id: 4,
      title: "Sports App",
      description: "Made using Java SpringBoot Microservices and Angular as client side",
      image: sport,
      link: "https://github.com/Shailendra-08/Sports-App"
    },
    {
      id: 5,
      title: "Smart Summarizer",
      description: "React as frontend Python - flask as a backend using META LLMA2 and google lens API",
      image: sm,
      link: "https://github.com/Shailendra-08/smart-summarizer"
    },
    {
      id: 6,
      title: "IT Department Website",
      description: "Department Website",
      image: dp,
      link: "https://department-website-ten.vercel.app/"
    }
  ],

  contact: {
    social: [
      { name: "GitHub", icon: "github", link: "https://github.com/Shailendra-08" },
      { name: "LinkedIn", icon: "linkedin", link: "https://www.linkedin.com/in/shailendra-mahadule-96955b200/" },
      {name: "Email", icon:"email", link:"mailto:smahadule08@gmail.com"},
    ]
  }
};
