import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full mb-10"></div>
          
          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              I am a Junior Full Stack Developer with hands-on industry experience building responsive, scalable web applications using React.js, Next.js, Node.js, Express.js, MongoDB, PHP, and MySQL. 
            </p>
            <p>
              Currently, I am contributing at Cyber Design India Pvt. Ltd., building upon the strong foundation I developed during a 4-month Full Stack Development internship at Milople Technologies.
            </p>
            <p>
              I have proven ability to design and develop REST APIs, authentication systems, CRUD operations, and database integrations. I possess a strong command of JavaScript ES6+, HTML5, CSS3, and Git, with a track record of writing clean, maintainable code.
            </p>
            <p>
              Beyond coding, I am passionate about problem-solving, collaborative development, and the continuous learning of modern web technologies to deliver impactful digital experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;