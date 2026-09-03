export type Fact = { k: string; v: string };

export type ExperienceItem = {
  mark: string;
  logo: string;
  role: string;
  company: string;
  period: string;
  place: string;
  bullets: string[];
  tech: string[];
};

export type Project = {
  id: string;
  name: string;
  meta: string;
  image: string | null;
  repo: string | null;
  url: string | null;
  summary: string;
  detail: string;
  tech: string[];
};

export type StackItem = { name: string; icon: string };

export type EducationItem = { period: string; title: string; school: string; note: string };

export type LanguageItem = { name: string; level: string };

export type ContactItem = {
  mark: string;
  label: string;
  value: string;
  href: string;
  target: "_self" | "_blank";
};

export const facts: Fact[] = [
  { k: "Location", v: "Tirana, Albania" },
  { k: "Since", v: "March 2024" },
  { k: "Now at", v: "BIZ360" },
  { k: "Focus", v: "React · React Native" },
];

export const experience: ExperienceItem[] = [
  {
    mark: "B3",
    logo: "/bizz_logo.svg",
    role: "Software Developer",
    company: "BIZ360",
    period: "Apr 2026 — Present",
    place: "Tirana, Albania",
    bullets: [
      "Web and mobile development in React.js and React Native — responsive interfaces and scalable component structures with TypeScript, Redux/Context API and React Hooks.",
      "REST and GraphQL integration with Axios/Fetch, applying best practices for authentication, error handling, caching and real-time data updates.",
    ],
    tech: ["React.js", "React Native", "TypeScript", "Redux", "Material UI", "Tailwind CSS", "GraphQL"],
  },
  {
    mark: "ATD",
    logo: "/atd_job.png",
    role: "Frontend Developer",
    company: "A-T-D Albania Technology Distribution",
    period: "Mar 2024 — Mar 2026",
    place: "Tirana, Albania",
    bullets: [
      "Built web and mobile products with React.js and React Native using TypeScript, Redux/Context API and React Hooks with Material UI and Tailwind CSS.",
      "Integrated REST and GraphQL APIs with Axios/Fetch — authentication, error handling, caching and real-time data updates.",
      "Development workflow with npm, Webpack/Vite pipelines, ESLint + Prettier, code reviews and Git branching strategies.",
      "Vue 3 and Vuetify as a secondary stack: Composition API, TypeScript, reusable components and reactive patterns.",
    ],
    tech: ["React.js", "React Native", "TypeScript", "Vue 3", "Vuetify", "Git", "Jira", "Vite"],
  },
  {
    mark: "BG",
    logo: "/balfin_logo.jpg",
    role: "IT Support Specialist, Internship",
    company: "Balfin Group",
    period: "Dec 2023 — Present",
    place: "Tirana, Albania",
    bullets: [
      "Managing IT networks and installing software and operating systems on client PCs.",
      "Troubleshooting IT-related issues and supporting end-users across the company.",
    ],
    tech: ["IT networks", "Windows", "End-user support"],
  },
  {
    mark: "VF",
    logo: "/vodafone_logo.png",
    role: "International Virtual Internship",
    company: "Vodafone",
    period: "Apr 2023 — Jun 2023",
    place: "Tirana, Albania",
    bullets: [
      "Programme covering 5G, IT infrastructure, digital architecture, cloud technologies, big data & security, and agile ways of working.",
    ],
    tech: ["5G", "Cloud", "Big data & security", "Agile"],
  },
];

export const projects: Project[] = [
  {
    id: "welovealbania",
    name: "We Love Albania",
    meta: "Web · Next.js · Live",
    image: "/We%20Love%20Albania%20Showcase-selection.png",
    repo: null,
    url: "https://illustrious-cocada-99c7f4.netlify.app/",
    summary:
      "Tourism marketing platform for Albania — reservations for hotels, guesthouses and restaurants alongside curated destinations and activities.",
    detail:
      "A travel platform promoting Albania, letting visitors browse destinations, book stays at hotels and guesthouses, reserve dining experiences and book guided activities, with a property management system for hosts to manage bookings and pricing. Built with Next.js.",
    tech: ["Next.js", "React"],
  },
  {
    id: "velora",
    name: "VELORA",
    meta: "Web · React · Live",
    image: "/velora_img.png",
    repo: null,
    url: "https://steady-toffee-f7db68.netlify.app/",
    summary: "E-commerce site for VELORA, a modern European fashion and lifestyle clothing brand.",
    detail:
      "A storefront for VELORA, selling refined clothing, tailoring and lifestyle pieces. Built as a React single-page application bundled with Vite and styled with Tailwind CSS.",
    tech: ["React", "Vite", "Tailwind CSS"],
  },
  {
    id: "elbadent",
    name: "Elba Dent Clinic",
    meta: "Web · React · Live",
    image: "/Elbadent%20img.png",
    repo: null,
    url: "https://elbadent.com/",
    summary: "Marketing website for Elba Dent Clinic, a dental practice, built as a fast single-page site.",
    detail:
      "A responsive website for Elba Dent Clinic built as a React single-page application bundled with Vite, presenting the practice's services and information to visitors.",
    tech: ["React", "Vite"],
  },
  {
    id: "desktop-portfolio",
    name: "MacOS Desktop Portfolio",
    meta: "Web · Next.js · Live",
    image: "/MacOS_img.png",
    repo: null,
    url: "https://gorgeous-brigadeiros-4ca521.netlify.app/",
    summary:
      "Personal portfolio presented as an interactive macOS-style desktop, with draggable windows and playable extras.",
    detail:
      "A creative portfolio built as a macOS-style desktop experience — draggable windows for showreel, photography and music sections, plus playable extras like a calculator app and a tic-tac-toe game. Built with Next.js.",
    tech: ["Next.js", "React"],
  },
];

export const stack: StackItem[] = [
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "React Native", icon: "https://cdn.simpleicons.org/react/E8E8E8" },
  { name: "SQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
  { name: "Vite", icon: "https://cdn.simpleicons.org/vite/646CFF" },
  { name: "Vue", icon: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },
];

export const education: EducationItem[] = [
  {
    period: "Nov 2025 — Present",
    title: "MSc in Information Technology",
    school: "European University of Tirana",
    note: "Field of study: Information and Communication Technologies.",
  },
  {
    period: "Oct 2022 — June 2025",
    title: "Information Technology",
    school: "European University of Tirana · Tirana, Albania",
    note: "Undergraduate studies in information technology — uet.edu.al",
  },
  {
    period: "Remote",
    title: "Full Stack Development",
    school: "Udemy Course",
    note: "React.js, Node.js, REST API, MySQL / PostgreSQL, jQuery.",
  },
];

export const languages: LanguageItem[] = [
  { name: "Albanian", level: "Mother tongue" },
  { name: "English", level: "B2 — independent" },
  { name: "Italian", level: "B1 — independent" },
];

export const contacts: ContactItem[] = [
  {
    mark: "@",
    label: "Email",
    value: "rizartbelshaku2@gmail.com",
    href: "mailto:rizartbelshaku2@gmail.com",
    target: "_self",
  },
  {
    mark: "☎",
    label: "Phone",
    value: "(+355) 69 293 2128",
    href: "tel:+355692932128",
    target: "_self",
  },
  {
    mark: "in",
    label: "LinkedIn",
    value: "linkedin.com/in/rizart-belshaku",
    href: "https://www.linkedin.com/in/rizart-belshaku/",
    target: "_blank",
  },
  {
    mark: "</>",
    label: "GitHub",
    value: "github.com/rizartbelshaku",
    href: "https://github.com/rizartbelshaku",
    target: "_blank",
  },
  {
    mark: "◉",
    label: "Location",
    value: "Tirana, Albania",
    href: "https://maps.google.com/?q=Tirana,Albania",
    target: "_blank",
  },
];
