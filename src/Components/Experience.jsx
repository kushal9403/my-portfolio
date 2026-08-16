import { motion } from "framer-motion";

const experiences = [
  {
    company: "Cyber Design India Pvt.Ltd",
    role: "Junior Full Stack Developer",
    period: "September 2025 – Present",
    points: [
      "Developed and maintained responsive web applications using React.js, Node.js, Express.js, and MongoDB, improving page load efficiency and overall user experience.",
      "Designed and implemented RESTful APIs to support core application features, enabling seamless data exchange between frontend and backend systems.",
      "Implemented secure authentication and authorization workflows using JWT, protecting user data and restricting access to authorized roles.",
      "Built and optimized CRUD functionality across multiple modules, streamlining data management for end users.",
      "Optimized application performance through code refactoring and efficient database queries, reducing response times.",
    ],
  },
  {
    company: "Milople Technologies",
    role: "Full Stack Developer Intern",
    period: "March 2025 – July 2025",
    points: [
      "Built dynamic, responsive user interfaces using React.js, translating design requirements into functional components.",
      "Developed backend RESTful APIs using Node.js and Express.js to support application functionality and data processing.",
      "Worked extensively with MongoDB for database design, queries, and data modeling.",
      "Implemented CRUD operations across application modules, ensuring reliable data creation, retrieval, updates, and deletion.",
      "Identified and resolved bugs across the application stack, improving overall stability and performance.",
    ],
  },
  {
    company: "Codesoft",
    role: "Web Development Intern",
    period: "June 2024 – July 2024",
    points: [
      "Assisted in developing and testing web pages using HTML, CSS, and JavaScript under senior developer guidance.",
      "Gained hands-on exposure to web development workflows, debugging techniques, and Git version control.",
      "Supported UI improvements and resolved minor functional issues in existing web pages.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 md:gap-8 items-baseline">
                <div className="md:col-span-1 mb-2 md:mb-0">
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {exp.period}
                  </p>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {exp.role}
                  </h3>
                  <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-4">
                    {exp.company}
                  </h4>
                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start text-slate-600 dark:text-slate-300">
                        <span className="mr-3 text-blue-500 mt-1.5 flex-shrink-0">
                          <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                            <circle cx="3" cy="3" r="3" />
                          </svg>
                        </span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;