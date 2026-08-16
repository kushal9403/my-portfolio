import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Task Management System",
    date: "April 2025 – July 2025",
    description: "Built a full-featured, responsive task management web application enabling users to create, organize, and track tasks efficiently. Implemented secure user authentication and complete CRUD functionality.",
    tech: ["Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    links: { github: "#", live: "#" }
  },
  {
    title: "BookMyDoc – Booking System",
    date: "January 2025 – April 2025",
    description: "Developed a full-stack doctor appointment booking platform connecting patients with healthcare providers. Implemented secure role-based authentication and designed dedicated dashboards.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    links: { github: "#", live: "#" }
  },
  {
    title: "Up Gadgets – E-Commerce",
    date: "March 2025 – April 2025",
    description: "Built a full-featured e-commerce website for electronics, supporting end-to-end product browsing and purchasing. Developed product management functionality and a shopping cart checkout system.",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    links: { github: "#", live: "#" }
  },
  {
    title: "Online Food Ordering System",
    date: "December 2022 – April 2023",
    description: "Developed a complete online food ordering platform with customer authentication, menu management, and cart functionality. Implemented order tracking and designed an admin panel.",
    tech: ["PHP", "MySQL", "HTML/CSS", "Bootstrap", "JavaScript"],
    links: { github: "#", live: "#" }
  }
];

function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex space-x-3">
                    <a href={project.links.github} className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="GitHub">
                      <FaGithub size={20} />
                    </a>
                    <a href={project.links.live} className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="Live Site">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">
                  {project.date}
                </p>
                
                <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-md border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;