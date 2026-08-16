import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Gyanmanjari Innovative University",
    period: "2023 – 2025",
    score: "CGPA: 7.689"
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Shree Swaminarayan College of Computer Science (SSCCS)",
    period: "2020 – 2023",
    score: "Percentage: 66.49%"
  }
];

function Education() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Education
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-6 items-start bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800"
            >
              <div className="p-4 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex-shrink-0">
                <GraduationCap size={32} />
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 md:mb-0">
                    {edu.degree}
                  </h3>
                  <span className="text-sm font-semibold px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full">
                    {edu.period}
                  </span>
                </div>
                <h4 className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                  {edu.institution}
                </h4>
                <p className="inline-block px-4 py-2 bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 font-medium rounded-lg shadow-sm border border-slate-100 dark:border-slate-800">
                  {edu.score}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
