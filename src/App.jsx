import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/ProjectsSection";
import Education from "./Components/Education";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-blue-500/30 selection:text-blue-900 dark:selection:text-blue-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;