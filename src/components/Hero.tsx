import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/jira-hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";

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
          {/* Profile Photo */}
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <img 
                src={profilePhoto} 
                alt="M Saranya - Jira Expert" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/20 shadow-glow"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/10 to-transparent" />
            </div>
          </div>

          {/* Greeting & Main Heading */}
          <div className="space-y-4 mb-8">
            <div className="text-2xl md:text-3xl text-primary font-medium animate-fade-in">
              Hii! 👋
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-primary font-extrabold">M Saranya</span>
              <br />
              <span className="text-foreground text-2xl md:text-4xl lg:text-5xl">Jira Expert</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Certified Jira Administrator & Agile Coach with 8+ years transforming complex workflows 
              into seamless processes. Passionate about empowering teams through innovative automation 
              and data-driven project excellence.
            </p>
          </div>

          {/* Certifications & Badges */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {['Jira Admin', 'Scrum Master', 'SAFe', 'Agile Coach', 'Confluence', 'JSM'].map((cert) => (
                <span 
                  key={cert}
                  className="px-4 py-2 bg-secondary/50 backdrop-blur-sm rounded-full text-sm font-medium border border-border/30 hover:border-primary/30 transition-all duration-300"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Projects Managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Teams Coached</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">95%</div>
              <div className="text-sm text-muted-foreground">On-Time Delivery</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg shadow-glow hover:shadow-glow-lg transition-all duration-300"
              onClick={() => scrollToSection('projects')}
            >
              View Case Studies
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 px-8 py-3 rounded-lg transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {[
              { icon: Github, href: "https://github.com/saranya182", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/saranya-m-83a1b9242/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:saranya21022004@gmail.com", label: "Email" }
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