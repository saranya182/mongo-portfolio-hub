import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText, TrendingUp, Users, Zap, Building } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Enterprise Agile Transformation",
      description: "Led complete agile transformation for Fortune 500 company with 2000+ employees. Implemented scaled agile frameworks, customized Jira workflows, and achieved 40% faster delivery times.",
      icon: Building,
      client: "Fortune 500 Financial Services",
      tech: ["Jira Software", "Portfolio", "Confluence", "ScriptRunner", "SAFe"],
      features: ["Multi-level hierarchy", "Custom workflows", "Automated reporting", "Portfolio tracking"],
      metrics: "2000+ users, 40% faster delivery, 95% adoption rate",
      caseStudy: "#",
      testimonial: "Transformed our delivery capabilities completely"
    },
    {
      title: "DevOps Integration & Automation",
      description: "Designed end-to-end DevOps integration connecting Jira with CI/CD pipelines. Created automated workflows for deployment tracking, release management, and incident response.",
      icon: Zap,
      client: "Tech Startup (Series B)",
      tech: ["Jira Software", "Bitbucket", "Jenkins", "Automation", "REST APIs"],
      features: ["CI/CD integration", "Automated deployments", "Release tracking", "Incident management"],
      metrics: "50+ deployments/week, 80% manual work reduction",
      caseStudy: "#",
      testimonial: "Streamlined our entire development lifecycle"
    },
    {
      title: "Customer Service Excellence Program",
      description: "Implemented Jira Service Management for global support organization. Created SLA workflows, knowledge management system, and advanced reporting dashboards.",
      icon: Users,
      client: "Global SaaS Company",
      tech: ["Jira Service Management", "Confluence", "Automation", "SLA", "ITSM"],
      features: ["SLA management", "Knowledge base", "Multi-channel support", "Customer portals"],
      metrics: "10,000+ tickets/month, 25% faster resolution, 98% SLA compliance",
      caseStudy: "#",
      testimonial: "Exceptional customer satisfaction improvement"
    },
    {
      title: "Agile Analytics & Insights Platform",
      description: "Built comprehensive analytics platform with custom dashboards, predictive metrics, and automated reporting. Enabled data-driven decision making across 15+ development teams.",
      icon: TrendingUp,
      client: "Enterprise Software Company",
      tech: ["Advanced Roadmaps", "Analytics", "JQL", "Power BI", "Custom Fields"],
      features: ["Predictive analytics", "Custom dashboards", "Velocity tracking", "Resource planning"],
      metrics: "15+ teams, 30% improved planning accuracy, real-time insights",
      caseStudy: "#",
      testimonial: "Game-changing visibility into our delivery metrics"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Case <span className="text-primary">Studies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world Jira implementations delivering measurable business impact. 
              From agile transformations to enterprise integrations—proven results across industries.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="p-6 bg-card-gradient border-border/20 hover:border-primary/30 transition-all duration-500 hover:shadow-card-hover group">
                {/* Project Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <div className="text-sm text-primary font-medium mb-2">{project.client}</div>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-secondary/50 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Key Deliverables:</h4>
                  <div className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="mb-4 p-3 bg-code-bg rounded-lg border border-border/30">
                  <div className="text-sm font-medium text-success mb-1">Results:</div>
                  <div className="text-sm text-muted-foreground">{project.metrics}</div>
                </div>

                {/* Testimonial */}
                <div className="mb-6 p-3 bg-primary/5 rounded-lg border-l-4 border-primary/30">
                  <div className="text-sm italic text-muted-foreground">"{project.testimonial}"</div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-border/30 hover:border-primary/50 hover:bg-primary/10 flex-1"
                    onClick={() => window.open(project.caseStudy, '_blank')}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Case Study
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary/90 flex-1"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Discuss Similar Project
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Services */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-card-gradient border-border/20">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Additional Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-primary font-semibold">Jira Health Checks</div>
                  <div className="text-sm text-muted-foreground">Performance audits & optimization</div>
                </div>
                <div className="text-center">
                  <div className="text-primary font-semibold">Team Training</div>
                  <div className="text-sm text-muted-foreground">Custom workshops & certification prep</div>
                </div>
                <div className="text-center">
                  <div className="text-primary font-semibold">Migration Services</div>
                  <div className="text-sm text-muted-foreground">Cloud migrations & system upgrades</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;