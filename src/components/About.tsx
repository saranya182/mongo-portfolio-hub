import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Settings, Users, BarChart3, Workflow, Target, CheckCircle } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Jira Administration",
      icon: Settings,
      items: ["Workflow Design", "Custom Fields", "Screens & Schemes", "User Management", "Permissions", "Integrations"]
    },
    {
      category: "Agile Coaching",
      icon: Users,
      items: ["Scrum Master", "SAFe Framework", "Kanban", "Sprint Planning", "Retrospectives", "Team Facilitation"]
    },
    {
      category: "Analytics & Reporting",
      icon: BarChart3,
      items: ["Custom Dashboards", "JQL Queries", "Velocity Reports", "Burndown Charts", "Portfolio Metrics", "KPI Tracking"]
    },
    {
      category: "Automation & Tools",
      icon: Workflow,
      items: ["Jira Automation", "Confluence", "Bitbucket", "JSM", "ScriptRunner", "API Integrations"]
    }
  ];

  const certifications = [
    { name: "Atlassian Certified Jira Administrator", status: "Active" },
    { name: "Certified Scrum Master (CSM)", status: "Active" },
    { name: "SAFe Program Consultant (SPC)", status: "Active" },
    { name: "Atlassian Certified Confluence Administrator", status: "Active" }
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
              Certified Jira Administrator and Agile Coach with 8+ years of experience optimizing 
              enterprise workflows, coaching high-performing teams, and implementing scalable 
              project management solutions across diverse industries.
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

          {/* Experience & Certifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Experience Metrics */}
            <Card className="p-8 bg-card-gradient border-border/20">
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                Impact & Results
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Projects Delivered</span>
                  <span className="text-2xl font-bold text-primary">500+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Teams Coached</span>
                  <span className="text-2xl font-bold text-primary">50+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">On-Time Delivery Rate</span>
                  <span className="text-2xl font-bold text-primary">95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Team Productivity Increase</span>
                  <span className="text-2xl font-bold text-primary">40%</span>
                </div>
              </div>
            </Card>

            {/* Certifications */}
            <Card className="p-8 bg-card-gradient border-border/20">
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.name} className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/20 transition-colors">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-foreground">{cert.name}</div>
                      <div className="text-sm text-success">Status: {cert.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Philosophy */}
          <Card className="p-8 bg-card-gradient border-border/20 text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">My Philosophy</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              "Great project management isn't about following processes—it's about empowering teams 
              to deliver exceptional results. I believe in simplifying complexity, fostering collaboration, 
              and using data-driven insights to continuously improve delivery outcomes."
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;