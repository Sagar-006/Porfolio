import Github from "@/components/svgs/Github";
import Mail from "@/components/svgs/Mail";
import X from "@/components/svgs/X";
import TwitterXIcon from '@/components/Ui/twitter-x-icon'
import MailFilledIcon from "@/components/Ui/mail-filled-icon";
import LinkedinIcon from "@/components/Ui/linkedin-icon";
import GithubIcon from "@/components/Ui/github-icon";
import DiscordIcon from "@/components/Ui/discord-icon";



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
    title: "Maestro Intellect",
    role: "Full-Stack-Intern",
    date: "Jan 25 - Apr 25",
    logo: "/Ex_logo.avif",
    description:
      "Worked on MERN stack projects involving frontend development, backend APIs, and database integration. Gained hands-on experience in building responsive web interfaces and implementing core full-stack functionalities.",
  },
];

export const projects = [
  {
    projectname: "Muzer",
    image: "/Muzer-mock6.png",
    link: "https://project-6-eight-theta.vercel.app/",
    github: "https://github.com/Sagar-006/muzer",
    description:
      "Music streaming app allowing users to add songs, vote together, and play the highest-voted song.",
    technologies: [
      "nextjs-light.svg",
      "tailwind.svg",
      "ts.svg",
      "postgresql.svg",
    ],
  },
  {
    projectname: "Excalidraw",
    image: "/Excalidraw-mock.png",
    link: "",
    github: "https://github.com/Sagar-006/excalidraw",
    description:
      "A real-time collaborative drawing app built with React and WebSockets, enabling multiple users to collaborate in shared rooms.",
    technologies: [
      "React.svg",
      "tailwind.svg",
      "ts.svg",
      "nodejs-icon.svg",
      "postgresql.svg",
    ],
  },
  {
    projectname: "Nex-Store",
    image: "/Nex-store-mock6.png",
    link: "https://nex-store-fht5.onrender.com/",
    github: "https://github.com/Sagar-006/Nex-Store-Backend",
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
    title: "SRTMUN University",
    role: "Bachelor of computer application",
    date: "July 20 - May-23",
    logo: "/SRTMUN.png",
    description:
      "During my BCA (2020–2023), I built a strong foundation in computer applications and software development. I gained hands-on experience in programming, database management, and web technologies, which sparked my interest in full-stack development and building real-world applications.",
  },
  {
    title: "SPPU University",
    role: "Master of computer application",
    date: "Aug 23 - June-25",
    logo: "/SPPU03.png",
    description:
      "During my MCA (2023–2025), I focused on advancing my technical skills through practical application development. I worked with modern web technologies, databases, and system design concepts, strengthening my ability to build scalable, real-world software solutions and full-stack applications.",
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
    logo: <GithubIcon className="w-7 h-7 text-black dark:text-white" />,
    link: "https://github.com/Sagar-006",
  },
  {
    name: "X",
    logo: <TwitterXIcon className="w-7 h-7 text-black dark:text-white" />,
    link: "https://x.com/Mr_Sagar45",
  },

  {
    name: "Linkedin",
    logo: <LinkedinIcon className="w-7 h-7 text-black dark:text-white" />,
    link: "https://www.linkedin.com/in/sagarbiradar1234/",
  },
  {
    name: "G-Mail",
    logo: (
      <MailFilledIcon className="object-cover w-7 h-7 text-black dark:text-white" />
    ),
    link: "mailto:sagarbiradar7030@gmail.com",
  },
  {
    name: "Discord",
    logo: <DiscordIcon className="w-7 h-7 text-black dark:text-white" />,
    link: "https://github.com/Sagar-006",
  },
];

export const skills = [
  {
    title: "Next.js",
  },
  {
    title: "Front-end development",
  },
  {
    title: "Typescript",
  },
  {
    title: "Full-stack development",
  },
  {
    title: "REST APIS",
  },
  {
    title: "Web animations",
  },
];

type techStackItem = {
  name:string,
  light:string,
  dark:string,
}
export const techstack: techStackItem[] = [
  {
    name: "Nextjs",
    light: "/nextjs-light.svg",
    dark: "/nextjs-light.svg",
  },
  {
    name: "Tailwind",
    light: "/tailwind.svg",
    dark: "/tailwind.svg",
  },
  {
    name: "Ts",
    light: "/ts.svg",
    dark: "/ts.svg",
  },
  {
    name: "Postgresql",
    light: "/postgresql.svg",
    dark: "/postgresql.svg",
  },
  {
    name: "figma",
    light: "/Figma-logo.svg",
    dark: "/Figma-logo.svg",
  },
  {
    name: "nodejs",
    light: "/nodejs-icon.svg",
    dark: "/nodejs-icon.svg",
  },
  {
    name: "postman",
    light: "/postman.svg",
    dark: "/postman.svg",
  },
  {
    name: "github",
    light: "/githublight.svg",
    dark: "/githubdark.svg",
  },
  {
    name: "vscode",
    light: "/vscode.svg",
    dark: "/vscode.svg",
  },
];
  
export const quotes = [
  {
    title: "Belive in Yourself!",
    author: "Don't Know.",
  },
  {
    title: "It always seems impossible until it’s done.",
    author: "Nelson Mandela",
  },
  {
    title: "In the end, we only regret the chances we didn’t take.",
    author: "Lewis Carroll",
  },
  {
    title: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House",
  },
  {
    title: "The best way to predict the future is to create it.",
    author: "Peter Drucker.",
  },
  {
    title: "First, solve the problem. Then, write the code.",
    author: "John Johnson.",
  },
  {
    title: "The magic your looking for is in the work you're avoiding!",
    author: "Chris Williamson.",
  },
  {
    title:
      "When you're winning you're not as good as you think you're,When you're loosing you're not as bad as you think you are.",
    author: "Naval",
  },
  {
    title: "The scariest moment is always just before you start.",
    author: "Stephen king.",
  },
  {
    title: "When it fills scary to jump ,That is exactly when you jump.",
    author: "Stephen king.",
  },
];