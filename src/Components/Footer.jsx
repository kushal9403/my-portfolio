import { Mail, Phone } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Let's Connect
            </h2>
            <p className="text-slate-400 max-w-md mb-8">
              I'm always open to discussing new opportunities, creative projects, or ways I can contribute to your team.
            </p>
            <div className="space-y-4">
              <a href="mailto:kushalkushal770@gmail.com" className="flex items-center text-slate-300 hover:text-blue-400 transition-colors">
                <Mail className="mr-3" size={20} />
                kushalkushal770@gmail.com
              </a>
              <a href="tel:+916353536378" className="flex items-center text-slate-300 hover:text-blue-400 transition-colors">
                <Phone className="mr-3" size={20} />
                +91 6353536378
              </a>
            </div>
          </div>
          
          <div className="flex md:justify-end space-x-6">
            <a href="https://www.linkedin.com/in/shah-kushal-637a23257" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-800 rounded-full text-slate-300 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/kushal9403" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-800 rounded-full text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-300 transform hover:-translate-y-1" aria-label="GitHub">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Kushal Shah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;