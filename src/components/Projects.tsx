import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Database, Users, Zap, ShoppingCart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Analytics Platform",
      description: "Built a real-time analytics dashboard processing 1M+ transactions daily. Implemented complex aggregation pipelines and optimized queries for sub-second response times.",
      icon: ShoppingCart,
      tech: ["MongoDB", "Node.js", "React", "Redis", "Chart.js"],
      features: ["Real-time dashboards", "Advanced aggregations", "Performance optimization", "Data visualization"],
      metrics: "1M+ daily transactions, 99.9% uptime",
      github: "#",
      demo: "#"
    },
    {
      title: "Social Media Data Pipeline",
      description: "Designed and implemented a scalable data pipeline for social media analytics, handling 10TB+ of unstructured data with MongoDB's flexible schema.",
      icon: Users,
      tech: ["MongoDB Atlas", "Express.js", "GraphQL", "Docker", "AWS"],
      features: ["Flexible schema design", "Horizontal scaling", "GraphQL API", "Cloud deployment"],
      metrics: "10TB+ data processed, 50k+ concurrent users",
      github: "#",
      demo: "#"
    },
    {
      title: "IoT Sensor Management System",
      description: "Developed a high-throughput IoT platform managing millions of sensor readings. Utilized MongoDB's time-series collections for optimal storage and querying.",
      icon: Database,
      tech: ["MongoDB 5.0", "Time Series", "Node.js", "MQTT", "TypeScript"],
      features: ["Time-series data", "Real-time ingestion", "Automated archiving", "Alerting system"],
      metrics: "5M+ sensor readings/hour, 1000+ devices",
      github: "#",
      demo: "#"
    },
    {
      title: "Content Management API",
      description: "Created a headless CMS with MongoDB, featuring dynamic schema validation, content versioning, and multi-tenant architecture for enterprise clients.",
      icon: Zap,
      tech: ["MongoDB", "NestJS", "JSON Schema", "Jest", "Swagger"],
      features: ["Dynamic schemas", "Content versioning", "Multi-tenancy", "API documentation"],
      metrics: "100+ content types, 99.5% API reliability",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcase of MongoDB-powered applications demonstrating scalability, 
              performance optimization, and innovative database design patterns.
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
                  <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="mb-6 p-3 bg-code-bg rounded-lg border border-border/30">
                  <div className="text-sm font-medium text-primary">{project.metrics}</div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-border/30 hover:border-primary/50 hover:bg-primary/10 flex-1"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary/90 flex-1"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;