import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend",
    skills: ["HTML5", "CSS3", "Bootstrap", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js"],
  },
  {
    category: "Backend & Databases",
    skills: ["Node.js", "Express.js", "PHP", "Python", "MongoDB", "MySQL"],
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code", "Postman", "RESTful APIs", "JWT Authentication"],
  },
  {
    category: "Core Concepts",
    skills: [
      "Full Stack Development",
      "CRUD Operations",
      "API Integration",
      "Responsive Design",
      "Auth & Authorization",
      "State Management",
      "Database Design",
      "MVC Architecture",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-800"
            >
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;