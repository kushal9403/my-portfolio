import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="min-h-[100svh] bg-slate-50 dark:bg-slate-950 flex flex-col justify-center items-center px-6 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-indigo-100/40 dark:bg-indigo-900/10 rounded-full blur-3xl" />

      <div className="text-center z-10 max-w-4xl mx-auto mt-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm md:text-base font-medium text-blue-600 dark:text-blue-400 mb-6 tracking-wide uppercase"
        >
          Junior Full Stack Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-8"
        >
          Building scalable <br className="hidden md:block" />
          <span className="text-slate-500 dark:text-slate-400">web applications.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Hi, I'm Kushal Shah. I specialize in the MERN stack and modern frontend frameworks to build clean, responsive, and high-performance user experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium rounded-full shadow-md hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-medium rounded-full border border-slate-200 dark:border-slate-800 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;