import { Database, Heart } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Database className="w-6 h-6 text-primary" />
              <span className="font-bold text-xl text-foreground">
                Jira<span className="text-primary">Expert</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Certified Jira Administrator and Agile Coach passionate about optimizing 
              enterprise workflows and empowering high-performing teams.
            </p>
            <div className="flex gap-4 mb-4">
              {[
                { icon: faGithub, href: "https://github.com/saranya182", label: "GitHub", target: "_blank" },
                { icon: faLinkedin, href: "https://www.linkedin.com/in/saranya-m-83a1b9242/", label: "LinkedIn", target: "_blank" },
                { icon: faEnvelope, href: "mailto:saranya21022004@gmail.com", label: "Email" },
                { icon: faFileAlt, href: "https://drive.google.com/file/d/1xTNEIZXB6WNUNmc7tppDDQrHbKZr0isN/view?usp=sharing", label: "Resume", target: "_blank" }
              ].map(({ icon, href, label, target }) => (
                <a
                  key={label}
                  href={href}
                  target={target}
                  rel={target ? "noopener noreferrer" : undefined}
                  className="p-2 rounded-lg bg-secondary/30 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  aria-label={label}
                >
                  <FontAwesomeIcon icon={icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
            <a
              href="https://drive.google.com/uc?export=download&id=1xTNEIZXB6WNUNmc7tppDDQrHbKZr0isN"
              download
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-all duration-300 text-sm"
            >
              <FontAwesomeIcon icon={faFileAlt} className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Technologies</h3>
            <div className="space-y-2 text-muted-foreground">
              {['Jira Administration', 'Agile Coaching', 'Workflow Design', 'Team Training'].map((tech) => (
                <div key={tech} className="text-sm">{tech}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Jira Expert. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> using Jira & React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;