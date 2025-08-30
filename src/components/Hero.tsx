import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-card-gradient backdrop-blur-sm border-border/20 shadow-glow-lg">
          {/* Main Heading */}
          <div className="space-y-6 mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-foreground">MongoDB</span>
              <br />
              <span className="text-primary font-extrabold">Developer</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Full-stack developer specializing in MongoDB, NoSQL databases, and modern web applications. 
              Building scalable solutions with cutting-edge technology.
            </p>
          </div>

          {/* Tech Stack Highlight */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {['MongoDB', 'Node.js', 'React', 'Express', 'TypeScript', 'GraphQL'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-secondary/50 backdrop-blur-sm rounded-full text-sm font-medium border border-border/30 hover:border-primary/30 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg shadow-glow hover:shadow-glow-lg transition-all duration-300"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 px-8 py-3 rounded-lg transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-full bg-secondary/30 backdrop-blur-sm border border-border/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 group"
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </Card>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="sm"
            className="p-2 rounded-full hover:bg-primary/10"
            onClick={() => scrollToSection('about')}
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;