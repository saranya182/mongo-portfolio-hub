import { Database, Github, Linkedin, Mail, Heart } from "lucide-react";

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
                MongoDB<span className="text-primary">Dev</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Full-stack MongoDB developer passionate about building scalable, 
              high-performance applications with modern web technologies.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#", label: "Email" }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-2 rounded-lg bg-secondary/30 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
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
              {['MongoDB', 'Node.js', 'React', 'TypeScript'].map((tech) => (
                <div key={tech} className="text-sm">{tech}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} MongoDB Developer. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> using MongoDB & React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;