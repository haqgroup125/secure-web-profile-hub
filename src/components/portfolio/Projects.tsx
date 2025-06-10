
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Star, Code, Zap } from 'lucide-react';

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
    <section id="projects" className="py-12 sm:py-16 lg:py-24 px-2 sm:px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            Real-world applications focusing on security, user experience, and modern web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto px-2 sm:px-0">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300 bg-white border border-slate-200 shadow-sm rounded-xl">
              <div className="relative h-40 sm:h-48 lg:h-56 overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60" />
              </div>
              
              <div className="p-4 sm:p-5 lg:p-6">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 mb-2 sm:mb-3 line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-sm lg:text-base text-slate-600 mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5">
                  {project.features.map((feature, idx) => (
                    <p key={idx} className="text-xs lg:text-sm text-slate-500 flex items-start leading-relaxed">
                      {feature}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="text-xs px-2 sm:px-3 py-1 bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 transition-all duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-slate-900 hover:bg-slate-800 text-white shadow-sm hover:shadow-md transition-all duration-300 rounded-lg text-xs sm:text-sm"
                    onClick={() => window.open(project.demoUrl, '_blank')}
                  >
                    <ExternalLink size={14} className="mr-1 sm:mr-2 flex-shrink-0" />
                    <span className="font-medium">View Demo</span>
                  </Button>
                  
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-slate-300 text-slate-700 hover:bg-slate-50 transition-all duration-300 rounded-lg text-xs sm:text-sm"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github size={14} className="mr-1 sm:mr-2 flex-shrink-0" />
                    <span className="font-medium">Source Code</span>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <Card className="inline-block p-6 sm:p-8 lg:p-10 bg-white border border-slate-200 shadow-sm max-w-sm sm:max-w-md mx-auto rounded-2xl">
            <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">🔮</div>
            <p className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">More Projects Coming Soon</p>
            <p className="text-sm lg:text-base text-slate-600 leading-relaxed">Always working on exciting new projects and exploring cutting-edge technologies!</p>
          </Card>
        </div>
      </div>
    </section>
  );
};
