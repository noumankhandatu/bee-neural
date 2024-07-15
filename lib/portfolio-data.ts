interface Project {
  title: string;
  link: string;
  description: string;
  image: string;
}

interface Technology {
  name: string;
  emoji: string;
}

interface NoumanData {
  projects: Project[];
  frontendTechnologies: Technology[];
  backendTechnologies: Technology[];
  databases: Technology[];
}

export const noumandata: NoumanData = {
  projects: [
    {
      title: "BeeNeural",
      link: "https://beeneural.com/",
      description:
        "This is my company's site where I develop and maintain innovative platforms. BeeNeural focuses on creating scalable solutions that merge cutting-edge AI technologies with user-centric design, setting new standards in the industry.",
      image: "/assets/portfolio/bee.png",
    },
    {
      title: "Web 3.0 Site",
      link: "https://ninfa.io/",
      description:
        "A venture into the realm of Web 3.0, demonstrating my engagement with cutting-edge technologies. Ninfa.io showcases my exploration into decentralized applications (dApps) and blockchain integration, pushing the boundaries of what's possible in today's digital landscape.",
      image: "/assets/portfolio/ninfa.png",
    },
    {
      title: "SaaS Project with AI Features",
      link: "https://www.lexi-mind.ai/",
      description:
        "A SaaS project enriched with AI capabilities, highlighting my proficiency in leveraging advanced technologies to deliver impactful solutions. Lexi-Mind.ai is dedicated to empowering businesses with AI-driven insights and automation tools.",
      image: "/assets/portfolio/leximind.png",
    },
  ],
  frontendTechnologies: [
    { name: "JavaScript (React, Next.js)", emoji: "🚀" },
    { name: "HTML & CSS", emoji: "🌐" },
    { name: "Gatsby", emoji: "⚛️" },
    { name: "Storybook", emoji: "📖" },
    { name: "Prismic", emoji: "📝" },
  ],
  backendTechnologies: [
    { name: "Node.js", emoji: "🚀" },
    { name: "Python", emoji: "🐍" },
    { name: "GraphQL", emoji: "📊" },
    { name: "Docker", emoji: "🐳" },
    { name: "AWS", emoji: "☁️" },
  ],
  databases: [
    { name: "SQL Databases", emoji: "🗄️" },
    { name: "NoSQL Databases", emoji: "🗃️" },
  ],
};
