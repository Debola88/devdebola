import { InfiniteSkillsCards } from "@/components/ui/infinite-skill-card";

// Frontend Skills
const frontendSkills = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: "Expert",
    description: "Building dynamic UIs"
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    level: "Advanced",
    description: "Full-stack React framework"
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    level: "Advanced",
    description: "Type-safe JavaScript"
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    level: "Expert",
    description: "Modern ES6+ features"
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    level: "Advanced",
    description: "Utility-first CSS"
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    level: "Expert",
    description: "Semantic markup"
  }
];

// Backend Skills
const backendSkills = [
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    level: "Advanced",
    description: "Server-side JavaScript"
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    level: "Intermediate",
    description: "Backend development"
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    level: "Intermediate",
    description: "NoSQL database"
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    level: "Intermediate",
    description: "Relational database"
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    level: "Advanced",
    description: "Web application framework"
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    level: "Intermediate",
    description: "Backend as a Service"
  }
];

// Tools & Other Skills
const toolsSkills = [
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    level: "Advanced",
    description: "Version control"
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    level: "Intermediate",
    description: "Containerization"
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    level: "Intermediate",
    description: "Cloud services"
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    level: "Intermediate",
    description: "UI/UX design"
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    level: "Expert",
    description: "Code editor"
  }
];

export default function SkillsSection() {
  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Frontend Skills Row */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Frontend Development
          </h3>
          <InfiniteSkillsCards
            items={frontendSkills}
            direction="right"
            speed="normal"
            pauseOnHover={true}
          />
        </div>

        {/* Backend Skills Row */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Backend Development
          </h3>
          <InfiniteSkillsCards
            items={backendSkills}
            direction="left"
            speed="slow"
            pauseOnHover={true}
          />
        </div>

        {/* Tools Skills Row */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Tools & Technologies
          </h3>
          <InfiniteSkillsCards
            items={toolsSkills}
            direction="right"
            speed="fast"
            pauseOnHover={true}
          />
        </div>
      </div>
    </section>
  );
}