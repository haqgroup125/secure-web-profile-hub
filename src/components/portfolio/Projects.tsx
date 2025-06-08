
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const Projects = () => {
  const projects = [
    {
      title: "University Attendance Management System",
      description: "Complete attendance solution with admin, teacher, and student panels. Features PDF/CSV report generation and class-wise attendance tracking.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["PHP", "MySQL", "Bootstrap", "PDF Reports"],
      features: ["📍 Admin/Teacher/Student panels", "📍 PDF/CSV reports", "📍 Class-wise attendance"]
    },
    {
      title: "Khata (Debt Ledger) Web App",
      description: "Business management tool for small businesses to track customer debts, generate balance summaries, and export financial data.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      tags: ["PHP", "MySQL", "JavaScript", "Export Features"],
      features: ["📍 For small businesses", "📍 Customer balance summaries", "📍 Export features"]
    },
    {
      title: "Skill-Swap Student Marketplace",
      description: "Platform for students to exchange skills, featuring live chat functionality, rating systems, and proximity-based matching.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      tags: ["PHP", "JavaScript", "Real-time Chat", "Rating System"],
      features: ["📍 Skill exchange between students", "📍 Live chat", "📍 Rating & proximity features"]
    },
    {
      title: "Secure ToDo List App",
      description: "Modern, mobile-friendly task management application with local storage support and security best practices.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["JavaScript", "LocalStorage", "Responsive", "Security"],
      features: ["📍 Simple & modern", "📍 Mobile-friendly", "📍 LocalStorage support"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            🚀 Featured Projects
          </h2>
          <p className="text-xl text-slate-600">
            Real-world applications focusing on security and user experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                
                <div className="space-y-2 mb-4">
                  {project.features.map((feature, idx) => (
                    <p key={idx} className="text-sm text-slate-600">{feature}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    View Demo
                  </Button>
                  <Button size="sm" variant="outline">
                    Source Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="inline-block p-6 bg-gradient-to-r from-blue-50 to-purple-50">
            <p className="text-lg font-semibold text-slate-800">More coming soon...</p>
            <p className="text-slate-600 mt-2">Always working on exciting new projects!</p>
          </Card>
        </div>
      </div>
    </section>
  );
};
