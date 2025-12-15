/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **web development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */
import Github from "@/components/svgs/Github";
// import LinkedIn from "@/components/svgs/LinkedIn";
import Mail from "@/components/svgs/Mail";
import X from "@/components/svgs/X";
import { IoLogoGithub } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";





// import Bun from "@/components/technologies/Bun";
// import JavaScript from "@/components/technologies/JavaScript";
// import MongoDB from "@/components/technologies/MongoDB";
// import NextJs from "@/components/technologies/NextJs";
// import NodeJs from "@/components/technologies/NodeJs";
// import PostgreSQL from "@/components/technologies/PostgreSQL";
// import Prisma from "@/components/technologies/Prisma";
// import ReactIcon from "@/components/technologies/ReactIcon";
// Technology Components
// import TypeScript from "@/components/technologies/TypeScript";

// Component mapping for skills
// export const skillComponents = {
//   TypeScript: TypeScript,
//   ReactIcon: ReactIcon,
//   NextJs: NextJs,
//   Bun: Bun,
//   PostgreSQL: PostgreSQL,
//   NodeJs: NodeJs,
//   MongoDB: MongoDB,
//   Prisma: Prisma,
//   JavaScript: JavaScript,
// };

export const heroConfig = {
  // Personal Information
  name: "Sagar",
  title: "A Full Stack web developer.",
  avatar: "/assets/logo.png",

  // Skills Configuration
  skills: [
    {
      name: "Typescript",
      href: "https://www.typescriptlang.org/",
      component: "TypeScript",
    },
    {
      name: "React",
      href: "https://react.dev/",
      component: "ReactIcon",
    },
    {
      name: "Next.js",
      href: "https://nextjs.org/",
      component: "NextJs",
    },
    {
      name: "pnpm",
      href: "https://pnpm.sh/",
      component: "Pnpm",
    },
    {
      name: "PostgreSQL",
      href: "https://www.postgresql.org/",
      component: "PostgreSQL",
    },
  ],

  // Description Configuration
  description: {
    template:
      "I build interactive web apps using {skills:0}, {skills:1}, {skills:2}, {skills:3} and {skills:4}. With a focus on <b>UI</b> design. Enthusiastic about <b>Three.js</b>, driven by a keen eye for design.",
  },

  // Buttons Configuration
  buttons: [
    {
      variant: "outline",
      text: "Resume / CV",
      href: "/resume",
      icon: "CV",
    },
    {
      variant: "default",
      text: "Get in touch",
      href: "/contact",
      icon: "Chat",
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: "X",
    href: "https://x.com/ramxcodes",
    icon: <X />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ramxcodes/",
    icon: <X />,
  },
  {
    name: "Github",
    href: "https://github.com/ramxcodes",
    icon: <Github />,
  },
  {
    name: "Email",
    href: "mailto:ramxcodes@gmail.com",
    icon: <Mail />,
  },
];

export const experience = [
  {
    title: "Xyz",
    role: "Frontend developer",
    date: "Des-2024-Mar-25",
    logo: "React.svg",
    description:
      "Spearheaded the development of scalable web solutions, optimizing user experience for SaaS platforms. Led a team in crafting responsive, high-performing web interfaces using modern frameworks.",
  },
  {
    title: "Abc",
    role: "Frontend developer",
    date: "Des-2024-Mar-25",
    logo: "React.svg",
    description:
      "Spearheaded the development of scalable web solutions, optimizing user experience for SaaS platforms. Led a team in crafting responsive, high-performing web interfaces using modern frameworks.",
  },
];

export const projects = [
  {
    projectname: "Nex-Store",
    image: "/images/profile.avif",
    link: "https://github.com/Sagar-006",
    github: "https://github.com/Sagar-006",
    description:
      "A sleek and responsive landing page designed for modern startups to showcase their products effectively.",
    technologies: [
      "React.svg",
      "tailwind.svg",
      "ts.svg",
      "nodejs-icon.svg",
      "mongo.svg",
    ],
  },
  {
    projectname: "Nex-Store",
    image: "/images/profile.avif",
    link: "https://github.com/Sagar-006",
    github: "https://github.com/Sagar-006",
    description:
      "A sleek and responsive landing page designed for modern startups to showcase their products effectively.",
    technologies: [
      "React.svg",
      "tailwind.svg",
      "ts.svg",
      "nodejs-icon.svg",
      "mongo.svg",
    ],
  },
  {
    projectname: "Nex-Store",
    image: "/images/profile.avif",
    link: "https://github.com/Sagar-006",
    github: "https://github.com/Sagar-006",
    description:
      "A sleek and responsive landing page designed for modern startups to showcase their products effectively.",
    technologies: [
      "React.svg",
      "tailwind.svg",
      "ts.svg",
      "nodejs-icon.svg",
      "mongo.svg",
    ],
  },
  {
    projectname: "Nex-Store",
    image: "/images/profile.avif",
    link: "https://github.com/Sagar-006",
    github: "https://github.com/Sagar-006",
    description:
      "A dynamic, animation-focused landing page highlighting creative transitions and interactive elements.",
    technologies: [
      "React.svg",
      "tailwind.svg",
      "ts.svg",
      "nodejs-icon.svg",
      "mongo.svg",
    ],
  },
];

export const education = [
  {
    title: "SRTMUN",
    role: "Bachelor of computer application",
    date: "Des-2024-Mar-25",
    logo: "React.svg",
    description:
      "Spearheaded the development of scalable web solutions, optimizing user experience for SaaS platforms. Led a team in crafting responsive, high-performing web interfaces using modern frameworks.",
  },
  {
    title: "SPPU",
    role: "Master of computer application",
    date: "Des-2024-Mar-25",
    logo: "nextjs.svg",
    description:
      "Spearheaded the development of scalable web solutions, optimizing user experience for SaaS platforms. Led a team in crafting responsive, high-performing web interfaces using modern frameworks.",
  },
];

export const links = [
  {
    logo: <Mail/>,
    link: "https://github.com/Sagar-006",
  },
  {
    logo: <Mail />,
    link: "https://github.com/Sagar-006",
  },
  {
    logo: <X />,
    link: "https://github.com/Sagar-006",
  },
  {
    logo: <Github />,
    link: "https://github.com/Sagar-006",
  },
  {
    logo: <Github />,
    link: "https://github.com/Sagar-006",
  },
  {
    logo: <Github />,
    link: "https://github.com/Sagar-006",
  },
];
export const social = [
  {
    name: "Github",
    logo: <IoLogoGithub className="w-7 h-7 text-black dark:text-white" />,
    link: "https://github.com/Sagar-006",
  },
  {
    name: "X",
    logo: <FaXTwitter className="w-7 h-7 text-black dark:text-white" />,
    link: "https://github.com/Sagar-006",
  },
  {
    name: "G-Mail",
    logo: <Mail className="object-cover" />,
    link: "https://github.com",
  },
  {
    name: "Linkedin",
    logo: <IoLogoLinkedin className="w-7 h-7 text-black dark:text-white" />,
    link: "https://github.com/Sagar-006",
  },
  {
    name: "Discord",
    logo: <FaDiscord className="w-7 h-7 text-black dark:text-white" />,
    link: "https://github.com/Sagar-006",
  },
];

export const skills = [
  {
    title: "Web Design",
  },
  {
    title: "Front-end development",
  },
  {
    title: "Web Animations",
  },
  {
    title: "Full-stack development",
  },
  {
    title: "Copywriting",
  },
  {
    title: "Marketing",
  },
];

export const techstack = [
  {
    name: "React",
    src: "/nextjs.svg",
  },
  {
    name: "Tailwind",
    src: "/tailwind.svg",
  },
  {
    name: "Ts",
    src: "/TS.png",
  },
  {
    name: "Postgresql",
    src: "/postgresql.svg",
  },
  {
    name: "figma",
    src: "/Figma-logo.svg",
  },
  {
    name: "nodejs",
    src: "/nodejs-icon.svg",
  },
];
  
// <Image src="/nextjs.svg" alt="React" width={40} height={40} />
// <Image src="/tailwind.svg" alt="React" width={40} height={40} />
// <Image src="/TS.png" alt="React" width={40} height={40} />
// <Image src="/postgresql.svg" alt="React" width={40} height={40} />
// <Image src="/Figma-logo.svg" alt="React" width={25} height={25} />
// <Image src="/nodejs-icon.svg" alt="React" width={40} height={40} />