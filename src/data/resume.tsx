import {Icons} from "@/components/icons";
import {HomeIcon, NotebookIcon} from "lucide-react";

export const DATA = {
  name: "Hasan Diab",
  initials: "HD",
  url: "https://qpmatrix.tech",
  location: "Tamra, IL",
  locationLink: "https://www.google.com/maps/place/Tamra,+IL",
  description:
      "Innovative software engineer with a proven track record in developing high-performance applications. Passionate about leveraging modern technologies and solving complex problems through continuous learning and freelance projects since 2022.",
  summary: "Freelance Software Engineer specializing in single-page applications and native app development. Proficient in front-end and back-end technologies with a focus on creating innovative SaaS products.",
  avatarUrl: "/me.png",
  skills: [
    "React.js",
    "Next.js",
    "Angular.js",
    "TypeScript",
    "Node.js",
    "Python",
    "Java",
    "Express.js",
    "Nest.js",
    "Spring Boot",
    "Flask",
    "Bun.js",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "hasan@qpmatrix.tech",
    tel: "+972524802045",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/QPMatrix",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hasantayar/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:hasan@qpmatrix.tech",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "QPMatrix",
      href: "https://qpmatrix.tech",
      badges: [],
      location: "Remote",
      title: "Freelance Software Engineer",
      logoUrl: "/qpmatrix.png",
      start: "December 2022",
      end: "Present",
      description:
          "Specialized in developing single-page applications using React. Created native applications and led the development of innovative SaaS products. Collaborated with clients to understand requirements and deliver tailored solutions. Achievements include improving client satisfaction and retention by delivering high-quality software solutions.",
    },
  ],
  education: [
    {
      school: "Technion - Israel Institute of Technology",
      href: "https://www.technion.ac.il/",
      degree: "Full Stack Pro",
      logoUrl: "/technion.png",
      start: "2024",
      end: "2025",
    },
    {
      school: "Ort Braude College",
      href: "https://www.braude.ac.il/",
      degree: "Practical Software Engineer",
      logoUrl: "/braude.jpeg",
      start: "2021",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Nerdbook",
      href: "https://nerdbook-lyart.vercel.app",
      dates: "July 2024",
      active: true,
      description: "Nerdbook is a social media app",
      technologies: ["Next.js", "Lucia Auth", "TanStack Query", "Prisma", "Stream"],
      image: '/nerdbook.png',
      links: [
        {
          type: "Website",
          href: "https://nerdbook-lyart.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/QPMatrix/Nerdbook-Next.js-social-media-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Reservation Management System (Backend)",
      href: "https://github.com/QPMatrix/NestJs-Micro",
      dates: "2023",
      active: true,
      description: "Efficient user interaction management system built with Nest.js.",
      technologies: ["Nest.js", "TypeScript", "PostgreSQL"],
      image: '/nestjs-micro.jpeg',
      links: [
        {
          type: "Source",
          href: "https://github.com/QPMatrix/NestJs-Micro",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Aether Caster",
      href: "https://aethercastr.vercel.app",
      dates: "June 2024",
      active: true,
      description: "Advanced application utilizing Next.js, Convex, Clerk, OpenAI, text-to-speech, and DALL-E 4.",
      technologies: ["Next.js", "Convex", "Clerk", "OpenAI", "DALL-E 4"],
      image: '/aethercastr.png',
      links: [
        {
          type: "Website",
          href: "https://aethercastr.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/QPMatrix/Podcast-SaaS",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "CarePulse",
      href: "https://carepulse-xi.vercel.app",
      dates: "June 2024",
      active: false,
      description: "Fake hospital management system developed with Next.js, Twilio for SMS, and Appwrite for BaaS.",
      technologies: ["Next.js", "Twilio", "Appwrite"],
      image: '/carepulse.png',
      links: [
        {
          type: "Website",
          href: "https://carepulse-xi.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/QPMatrix/health-care-system",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "QubeFlow",
      href: "https://qpmatrix.vercel.app",
      dates: "March 2024",
      active: false,
      description: "An Agency website builder SaaS",
      technologies: ["Next.js", "Bun.js", "Prisma", "Stripe", "Clerk"],
      image: '/qubeflow.png',
      links: [
        {
          type: "Website",
          href: "https://qpmatrix.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/QPMatrix/QubeFlow",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
} as const;

