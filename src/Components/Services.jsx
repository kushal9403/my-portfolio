import { motion } from "framer-motion";

function Services() {
  const services = [
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "Responsive Design",
    "API Integration",
    "Database Design",
  ];

  return (
    <section className="bg-slate-900 text-white py-20 px-6" id="services">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-cyan-400 mb-12"
        >
          Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-cyan-300">
                {service}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;