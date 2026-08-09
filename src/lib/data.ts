import { ProjectData, BlogPost, NavLink } from "@/types";
// ==========================================
// 1. SERVICES DATA (Homepage)
// ==========================================
export const SERVICES = [
  {
    title: "Websites",
    description: "Responsive websites and dashboards for your business.",
    image: "/assets/images/website-card.jpg",
  },
  {
    title: "Apps",
    description: "Designing mobile apps for iOS and Android users.",
    image: "/assets/images/apps-card.jpg",
  },
  {
    title: "Design systems",
    description:
      "Building robust and flexible design systems for easy scalability.",
    image: "/assets/images/design-card.jpg",
  },
];

// ==========================================
// 2. TECH STACK DATA (Homepage Marquee)
// ==========================================
export const TECH_STACK_TOP = [
  { name: "HTML5", icon: "/assets/icons/html5.svg", color: "#E44D26" },
  { name: "CSS", icon: "/assets/icons/css.svg", color: "#264DE4" },
  {
    name: "JavaScript",
    icon: "/assets/icons/javascript.svg",
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: "/assets/icons/typescript.svg",
    color: "#3178C6",
  },
  { name: "React", icon: "/assets/icons/react.svg", color: "#61DAFB" },
  { name: "Next.js", icon: "/assets/icons/nextdotjs.svg", color: "#FFFFFF" },
  { name: "Redux", icon: "/assets/icons/redux.svg", color: "#764ABC" },
  {
    name: "Tailwind CSS",
    icon: "/assets/icons/tailwindcss.svg",
    color: "#38BDF8",
  },
  { name: "Bootstrap", icon: "/assets/icons/bootstrap.svg", color: "#7952B3" },
  { name: "Sass", icon: "/assets/icons/sass.svg", color: "#CC6699" },
  { name: "Expo", icon: "/assets/icons/expo.svg", color: "#FFFFFF" },
];

export const TECH_STACK_BOTTOM = [
  { name: "Node.js", icon: "/assets/icons/nodedotjs.svg", color: "#339933" },
  { name: "Express", icon: "/assets/icons/express.svg", color: "#FFFFFF" },
  { name: "Python", icon: "/assets/icons/python.svg", color: "#3776AB" },
  { name: "Django", icon: "/assets/icons/django.svg", color: "#092E20" },
  {
    name: "PostgreSQL",
    icon: "/assets/icons/postgresql.svg",
    color: "#336791",
  },
  { name: "MongoDB", icon: "/assets/icons/mongodb.svg", color: "#47A248" },
  { name: "MySQL", icon: "/assets/icons/mysql.svg", color: "#00758F" },
  { name: "Firebase", icon: "/assets/icons/firebase.svg", color: "#FFCA28" },
  { name: "GraphQL", icon: "/assets/icons/graphql.svg", color: "#E10098" },
  { name: "Docker", icon: "/assets/icons/docker.svg", color: "#2496ED" },
  {
    name: "Android Studio",
    icon: "/assets/icons/androidstudio.svg",
    color: "#3DDC84",
  },
];

// ==========================================
// 3. FAQ DATA (Homepage)
// ==========================================
export const FAQS = [
  {
    q: "What is your design process like?",
    a: "I follow a clear, methodical approach that includes understanding your brand, planning, and designing with your goals in mind. The steps include research, wireframing, prototyping, and iterative feedback, ensuring the final product aligns with your vision and needs.",
  },
  {
    q: "Do you offer custom design services?",
    a: "Yes, I specialize in custom design solutions. Whether you need a tailored website, a mobile app, or a complete design system, I craft designs from scratch based on your brand's unique identity and goals.",
  },
  {
    q: "How long does it take to complete a project?",
    a: "The timeline depends on the complexity of the project. A simple website might take a few weeks, while more complex projects such as custom apps or large-scale redesigns could take longer. I provide a detailed timeline at the start of each project, with milestones and regular updates.",
  },
  {
    q: "How do you ensure my website or app will be mobile-friendly?",
    a: "I follow a mobile-first design approach, ensuring that your website or app will be fully responsive across all devices. I prioritize a seamless user experience for mobile, tablet, and desktop users, ensuring your customers will have a consistent experience no matter the device.",
  },
  {
    q: "What’s the cost of a website or app design?",
    a: "The cost varies based on the complexity and scale of the project. I provide customized quotes after understanding your requirements and the scope of work. My goal is to provide high-quality solutions that fit within your budget while exceeding expectations.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes, I offer post-launch support for bug fixes, updates, and enhancements. After the project is live, I’m available for ongoing maintenance to ensure your site or app continues to perform well and stay up to date.",
  },
  {
    q: "How can I get started with you on a project?",
    a: "To get started, simply reach out via email or contact form. We’ll schedule an initial consultation to discuss your needs, ideas, and goals. From there, I’ll draft a proposal with a timeline and cost estimate. Once everything is agreed upon, we can begin the project!",
  },
];

// ==========================================
// 4. ABOUT PAGE PILLARS
// ==========================================
export const ABOUT_PILLARS = [
  {
    title: "Full-Stack & Mobile Mastery",
    description:
      "From responsive Next.js web applications to cross-platform iOS and Android apps using Expo and React Native, I build scalable systems across every screen.",
  },
  {
    title: "Product-Minded Execution",
    description:
      "As the founder of ANAMDTECH Solutions, I don’t just write code—I design with business metrics, user retention, and long-term product scalability in mind.",
  },
  {
    title: "Disciplined Engineering",
    description:
      "I prioritize clean architecture, accessible UI/UX design systems, and rock-solid performance optimization so your users get a flawless experience.",
  },
];

// ==========================================
// 5. PROJECTS DATA (Work Hub & Case Studies)
// ==========================================
export const PROJECTS: ProjectData[] = [
  {
    id: "1",
    slug: "burger-bite",
    title: "Burger Bite",
    client: "Burger Bite Restaurant",
    role: "Web Designer & Developer",
    year: "2023",
    liveUrl: "https://burgerbite-ana-md.netlify.app/",
    imageUrl: "/assets/images/work-1.png", // Used for lists & hero
    overview:
      "An appetizing, conversion-focused online ordering platform and brand showcase designed for a modern gourmet burger kitchen.",
    challenges:
      "Creating a high-performance food menu that loads instantly on mobile devices while showcasing vibrant photography without layout shift.",
    solution:
      "Implemented a responsive Next.js application with optimized image caching, intuitive category filtering, and streamlined checkout UX.",
    results:
      "Delivered a seamless ordering experience that boosted mobile customer engagement and modernized the restaurant's digital presence.",
    conclusion:
      "Burger Bite proved that thoughtful UX and appetizing visual hierarchy can transform a traditional local menu into an interactive digital brand.",
    galleryImages: ["/assets/images/work-1.png", "/assets/images/work-1.png"],
  },
  {
    id: "2",
    slug: "sunchips",
    title: "SunChips",
    client: "SunChips Branding Concept",
    role: "UI/UX Designer & Web Developer",
    year: "2024",
    liveUrl: "https://sunchips-ana-md.netlify.app/",
    imageUrl: "/assets/images/work-2.png",
    overview:
      "A vibrant, nature-inspired web campaign highlighting sustainable snacking and eco-friendly packaging initiatives.",
    challenges:
      "Balancing colorful, playful brand graphics with clean typography and fast page performance across desktop and mobile.",
    solution:
      "Built a modular design system using Tailwind CSS with custom micro-interactions and accessible color contrast ratios.",
    results:
      "Produced a visually striking brand experience that educates visitors on sustainability while celebrating snack culture.",
    conclusion:
      "This project highlights my ability to merge expressive UI design with accessible front-end engineering.",
    galleryImages: ["/assets/images/work-2.png", "/assets/images/work-2.png"],
  },
  {
    id: "3",
    slug: "nike-landing-page",
    title: "Nike Landing Page",
    client: "Unofficial Nike Landing Page",
    role: "Developer",
    year: "2025",
    liveUrl: "https://nike-ana-md.netlify.app/",
    imageUrl: "/assets/images/work-3.png",
    overview:
      "A bold and dynamic landing page designed to capture the essence of Nike’s powerful brand identity. This unofficial project showcases how Nike could present new product launches or special campaigns in a visually striking and engaging way.",
    challenges:
      "The challenge was to build a landing page that encapsulates the strength and innovation of the Nike brand, all while ensuring ease of navigation and a seamless, responsive experience across devices.",
    solution:
      "To meet these challenges, I designed a sleek, high-energy landing page with dynamic visuals, clean typography, and immersive product showcases.",
    results:
      "The final landing page captures the athletic, innovative spirit of Nike with its powerful visuals and user-focused design.",
    conclusion:
      "This unofficial Nike landing page project demonstrates my ability to design impactful, user-driven experiences that align with a brand’s identity.",
    galleryImages: ["/assets/images/work-3.png", "/assets/images/work-3.png"],
  },
  {
    id: "4",
    slug: "natours-tour-page",
    title: "Natours Tour Page",
    client: "Natours Eco-Tourism",
    role: "Web Development",
    year: "2025",
    liveUrl: "https://natours-ana-md.netlify.app/",
    imageUrl: "/assets/images/work-4.png",
    overview:
      "An immersive outdoor adventure booking platform featuring interactive trail maps, tour itineraries, and real-time availability.",
    challenges:
      "Structuring complex tour packages, itineraries, and pricing tiers into an intuitive, scannable interface.",
    solution:
      "Developed a clean, card-based interface with sticky booking sidebars and responsive media galleries.",
    results:
      "Created a trustworthy, inspiring travel portal that encourages exploration and simplifies tour reservations.",
    conclusion:
      "Natours showcases my focus on clarity and structure when handling data-dense travel applications.",
    galleryImages: ["/assets/images/work-4.png", "/assets/images/work-4.png"],
  },
];

// ==========================================
// 6. SELECTED PROJECTS DATA (Homepage)
// ==========================================
export const SELECTED_PROJECTS: ProjectData[] = [
  {
    id: "1",
    slug: "burger-bite",
    title: "Burger Bite",
    client: "Burger Bite Restaurant",
    role: "Web Designer & Developer",
    year: "2023",
    liveUrl: "https://burgerbite-ana-md.netlify.app/",
    imageUrl: "/assets/images/work-1.png", // Used for lists & hero
    overview:
      "An appetizing, conversion-focused online ordering platform and brand showcase designed for a modern gourmet burger kitchen.",
    challenges:
      "Creating a high-performance food menu that loads instantly on mobile devices while showcasing vibrant photography without layout shift.",
    solution:
      "Implemented a responsive Next.js application with optimized image caching, intuitive category filtering, and streamlined checkout UX.",
    results:
      "Delivered a seamless ordering experience that boosted mobile customer engagement and modernized the restaurant's digital presence.",
    conclusion:
      "Burger Bite proved that thoughtful UX and appetizing visual hierarchy can transform a traditional local menu into an interactive digital brand.",
    galleryImages: ["/assets/images/work-1.png", "/assets/images/work-1.png"],
  },
  {
    id: "2",
    slug: "sunchips",
    title: "SunChips",
    client: "SunChips Branding Concept",
    role: "UI/UX Designer & Web Developer",
    year: "2024",
    liveUrl: "https://sunchips-ana-md.netlify.app/",
    imageUrl: "/assets/images/work-2.png",
    overview:
      "A vibrant, nature-inspired web campaign highlighting sustainable snacking and eco-friendly packaging initiatives.",
    challenges:
      "Balancing colorful, playful brand graphics with clean typography and fast page performance across desktop and mobile.",
    solution:
      "Built a modular design system using Tailwind CSS with custom micro-interactions and accessible color contrast ratios.",
    results:
      "Produced a visually striking brand experience that educates visitors on sustainability while celebrating snack culture.",
    conclusion:
      "This project highlights my ability to merge expressive UI design with accessible front-end engineering.",
    galleryImages: ["/assets/images/work-2.png", "/assets/images/work-2.png"],
  },
];

// ==========================================
// 7. BLOG POSTS DATA (Blog Hub & Articles)
// ==========================================
export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "why-expo-react-native-for-mobile",
    title:
      "Why We Built Our Latest Mobile Applications Using Expo & React Native",
    date: "August 2026",
    readTime: "6 min read",
    category: "Mobile Dev",
    imageUrl: "/assets/images/work-1.png", // Hero and thumbnail
    excerpt:
      "An engineering breakdown of how modern Expo tooling, EAS builds, and native module integration allowed us to ship high-performance iOS and Android builds faster than ever.",
    leadParagraph:
      "In modern mobile engineering, shipping cross-platform apps without sacrificing native performance is the ultimate objective. Using Expo along with React Native has transformed how we structure, test, and deploy applications across iOS and Android.",
    content: [
      "By leveraging Expo Application Services (EAS), we automate cloud builds and over-the-air updates, drastically shortening feedback loops during active sprints. Instead of waiting hours for local Xcode or Android Studio compilations, remote builds allow us to test production APKs and iOS bundles seamlessly.",
      "Whether configuring floating navigation layouts or integrating complex analytics SDKs, the React Native ecosystem provides the flexibility needed to scale enterprise-grade applications reliably. Modern Expo tooling removes the traditional friction of React Native upgrades, allowing engineers to focus entirely on user experience and business logic.",
      "When evaluating technologies for ANAMDTECH Solutions, the ability to maintain a single TypeScript codebase across web, Android, and iOS gave us an undeniable velocity advantage without compromising UI responsiveness.",
    ],
    takeaway:
      "Expo and React Native are no longer 'just for simple apps'—they provide the tooling, speed, and native capabilities required to build serious production software at scale.",
  },
  {
    id: "2",
    slug: "disciplined-developer-deep-work-routine",
    title: "The Disciplined Developer: Structuring Deep Work Without Burnout",
    date: "July 2026",
    readTime: "5 min read",
    category: "Engineering Culture",
    imageUrl: "/assets/images/work-2.png",
    excerpt:
      "How setting strict digital boundaries, protecting deep focus blocks, and maintaining a high-intensity physical training routine elevates software engineering quality.",
    leadParagraph:
      "High-output software engineering isn't about sitting in front of a terminal for twelve hours a day. It is about cognitive clarity, structured boundaries, and consistent recovery.",
    content: [
      "Establishing strict digital cut-offs in the evening, dedicating uninterrupted morning blocks to complex system design, and maintaining physical training splits creates long-term professional resilience. When you protect your morning hours from reactive messaging, you enter a state of deep flow where your best code is written.",
      "Discipline in your personal schedule directly reflects in the cleanliness, testability, and architecture of the codebases you maintain. A chaotic schedule often yields brittle code, whereas an intentional routine fosters clear engineering decisions.",
      "By separating shallow administrative tasks from deep debugging sessions, developers can consistently ship complex features without experiencing creative burnout.",
    ],
    takeaway:
      "Your physical routine and digital boundaries are part of your engineering toolset. Master your schedule to master your codebase.",
  },
  {
    id: "3",
    slug: "scalable-ui-design-systems-tailwind-v4",
    title:
      "Designing Scalable UI Systems with Tailwind CSS v4 & Next.js App Router",
    date: "July 2026",
    readTime: "8 min read",
    category: "Frontend",
    imageUrl: "/assets/images/work-3.png",
    excerpt:
      "Practical strategies for moving away from messy stylesheets toward modular, CSS-first Tailwind design tokens that stay maintainable across large teams.",
    leadParagraph:
      "Tailwind CSS v4 introduces a CSS-first configuration architecture that eliminates cumbersome JavaScript config files and accelerates styling pipelines.",
    content: [
      "When paired with React Server Components in the Next.js App Router, modular utility classes allow developers to construct complex UI cards, glassmorphic headers, and responsive layouts with zero layout shift.",
      "Maintaining a clear visual hierarchy and predictable class structures ensures that design systems remain accessible and easy to scale across expanding engineering teams.",
      "By organizing design tokens directly inside CSS layers, Tailwind v4 allows full-stack applications to maintain consistent color palettes, typography scaling, and dark-mode themes without runtime overhead.",
    ],
    takeaway:
      "CSS-first token configuration in Tailwind v4 gives React developers the speed of utility classes with the clean organization of enterprise design systems.",
  },
  {
    id: "4",
    slug: "architecting-multi-tenant-platforms",
    title:
      "From Concept to Production: Architecting Multi-Tenant Platforms at ANAMDTECH",
    date: "June 2026",
    readTime: "7 min read",
    category: "System Architecture",
    imageUrl: "/assets/images/work-4.png",
    excerpt:
      "Key lessons learned while architecting resilient databases, handling secure user authentication, and designing conversion-focused interfaces for real-world clients.",
    leadParagraph:
      "Architecting applications for production requires looking beyond local development servers. Multi-tenant web applications demand rigorous database schema planning, robust role-based authentication, and optimized data fetching.",
    content: [
      "At ANAMDTECH Solutions, we approach every build by first mapping user journeys and identifying potential scalability bottlenecks before writing a single API endpoint. A well-planned PostgreSQL schema saves weeks of refactoring down the road.",
      "This product-minded foundation ensures that applications remain fast, secure, and intuitive from initial prototype to production launch.",
      "Whether designing custom tenant isolation tables or deploying automated edge caching, every architectural decision should directly serve the user's need for speed and reliability.",
    ],
    takeaway:
      "Great system architecture is invisible to the user—it simply feels instantaneous, secure, and effortless to navigate.",
  },
];

// ==========================================
// 7. NAVIGATION & SOCIAL LINKS
// ==========================================
export const NAV_LINKS: NavLink[] = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS: NavLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/anamdtech/" },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/ana-mohammed-78443a286/",
  },
  { label: "Github", href: "https://github.com/AnaMdTech" },
  { label: "Facebook", href: "https://web.facebook.com/anamdtech/" },
];
