
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "University Attendance Management System",
      description: "Complete attendance solution with admin, teacher, and student panels. Features PDF/CSV report generation and class-wise attendance tracking.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80",
      tags: ["PHP", "MySQL", "Bootstrap", "PDF Reports"],
      features: ["📍 Admin/Teacher/Student panels", "📍 PDF/CSV reports", "📍 Class-wise attendance"],
      githubUrl: "https://github.com/haqgroup125/university-attendance-system",
      demoUrl: "#"
    },
    {
      title: "Khata (Debt Ledger) Web App",
      description: "Business management tool for small businesses to track customer debts, generate balance summaries, and export financial data.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["PHP", "MySQL", "JavaScript", "Export Features"],
      features: ["📍 For small businesses", "📍 Customer balance summaries", "📍 Export features"],
      githubUrl: "https://github.com/haqgroup125/debt_khata/tree/main/debt_khata1",
      demoUrl: "#"
    },
    {
      title: "Skill-Swap Student Marketplace",
      description: "Platform for students to exchange skills, featuring live chat functionality, rating systems, and proximity-based matching.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      tags: ["PHP", "JavaScript", "Real-time Chat", "Rating System"],
      features: ["📍 Skill exchange between students", "📍 Live chat", "📍 Rating & proximity features"],
      githubUrl: "https://github.com/haqgroup125/skill_swap_working",
      demoUrl: "#"
    },
    {
      title: "Secure ToDo List App",
      description: "Modern, mobile-friendly task management application with local storage support and security best practices.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80",
      tags: ["JavaScript", "LocalStorage", "Responsive", "Security"],
      features: ["📍 Simple & modern", "📍 Mobile-friendly", "📍 LocalStorage support"],
      githubUrl: "https://github.com/haqgroup125/secure-todo-app",
      demoUrl: "#"
    },
    {
      title: "Lab Watch Security Network",
      description: "Comprehensive security monitoring and network analysis tool designed for cybersecurity labs. Features real-time threat detection, network traffic analysis, and security incident response capabilities.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80",
      tags: ["Cybersecurity", "Network Security", "Threat Detection", "Real-time Monitoring"],
      features: ["📍 Real-time threat detection", "📍 Network traffic analysis", "📍 Security incident response"],
      githubUrl: "https://github.com/haqgroup125/lab-watch-security-net",
      demoUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Real-world applications focusing on security, user experience, and modern web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white/95 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl">
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60" />
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-1 mb-4">
                  {project.features.map((feature, idx) => (
                    <p key={idx} className="text-xs text-gray-500 flex items-start leading-relaxed">
                      {feature}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="text-xs px-3 py-1 bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 transition-all duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gray-900 hover:bg-gray-800 text-white shadow-sm hover:shadow-md transition-all duration-300 rounded-full"
                    onClick={() => window.open(project.demoUrl, '_blank')}
                  >
                    <ExternalLink size={14} className="mr-2" />
                    Demo
                  </Button>
                  
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 rounded-full"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github size={14} className="mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Card className="inline-block p-8 bg-white/95 backdrop-blur-md border border-white/20 shadow-xl max-w-md mx-auto rounded-2xl">
            <div className="text-4xl mb-4">🔮</div>
            <p className="text-xl font-bold text-gray-900 mb-3">More Projects Coming Soon</p>
            <p className="text-sm text-gray-600 leading-relaxed">Always working on exciting new projects and exploring cutting-edge technologies!</p>
          </Card>
        </div>
      </div>
    </section>
  );
};
