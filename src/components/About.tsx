import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Server, Code, Zap } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Database",
      icon: Database,
      items: ["MongoDB", "Mongoose", "Atlas", "Compass", "Aggregation Pipeline", "Indexing"]
    },
    {
      category: "Backend",
      icon: Server,
      items: ["Node.js", "Express.js", "NestJS", "GraphQL", "REST APIs", "Microservices"]
    },
    {
      category: "Frontend",
      icon: Code,
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "React Query"]
    },
    {
      category: "Tools & Cloud",
      icon: Zap,
      items: ["Docker", "AWS", "Vercel", "Git", "Jest", "MongoDB Atlas"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate MongoDB developer with 5+ years of experience building scalable, 
              high-performance applications. I specialize in designing efficient database schemas 
              and optimizing queries for maximum performance.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skills.map(({ category, icon: Icon, items }) => (
              <Card key={category} className="p-6 bg-card-gradient border-border/20 hover:border-primary/20 transition-all duration-300 hover:shadow-card-hover group">
                <div className="text-center mb-4">
                  <div className="inline-flex p-3 rounded-full bg-primary/10 mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {items.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-secondary/50 hover:bg-secondary/70 transition-colors text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Experience Highlight */}
          <Card className="p-8 bg-card-gradient border-border/20 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10M+</div>
                <div className="text-muted-foreground">Records Processed</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;