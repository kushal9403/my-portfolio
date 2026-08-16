import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="bg-slate-900 text-white py-20 px-6" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-cyan-400 mb-6"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-300 mb-10"
        >
          Have a project idea or want to work together? Feel free to contact me.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid gap-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-lg bg-slate-800 border border-slate-700 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-lg bg-slate-800 border border-slate-700 outline-none"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="p-4 rounded-lg bg-slate-800 border border-slate-700 outline-none"
          ></textarea>

          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 py-3 rounded-lg font-semibold transition duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>  
  );
}

export default Contact;