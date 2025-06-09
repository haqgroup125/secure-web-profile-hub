
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
    <section id="projects" className="py-12 sm:py-16 lg:py-24 px-2 sm:px-4 bg-gradient-to-br from-slate-900 via-emerald-900/40 to-slate-900">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-block p-3 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 rounded-full mb-4 sm:mb-6 animate-pulse shadow-2xl">
            <Star className="text-white w-8 sm:w-10 h-8 sm:h-10" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 sm:mb-6 animate-pulse">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
            Real-world applications focusing on security, user experience, and modern web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto px-2 sm:px-0">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-700 transform hover:-translate-y-2 sm:hover:-translate-y-4 bg-gradient-to-br from-slate-800/95 to-emerald-900/50 border-2 border-emerald-500/40 shadow-xl rounded-xl sm:rounded-2xl backdrop-blur-sm">
              <div className="relative h-40 sm:h-48 lg:h-56 overflow-hidden rounded-t-xl sm:rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full p-1.5 sm:p-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <Code className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                </div>
              </div>
              
              <div className="p-4 sm:p-5 lg:p-6">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3 line-clamp-2 group-hover:text-emerald-300 transition-colors duration-300 flex items-center gap-2">
                  <Zap className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-400 group-hover:text-cyan-400 transition-colors duration-300 flex-shrink-0" />
                  <span className="min-w-0">{project.title}</span>
                </h3>
                
                <p className="text-sm lg:text-base text-slate-300 mb-3 sm:mb-4 line-clamp-3 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5">
                  {project.features.map((feature, idx) => (
                    <p key={idx} className="text-xs lg:text-sm text-slate-400 flex items-start group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">
                      {feature}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="text-xs px-2 sm:px-3 py-1 bg-gradient-to-r from-emerald-600/60 to-cyan-600/60 text-white border border-emerald-400/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-white shadow-lg hover:shadow-xl hover:shadow-emerald-400/30 transition-all duration-500 hover:scale-105 rounded-lg sm:rounded-xl text-xs sm:text-sm"
                    onClick={() => window.open(project.demoUrl, '_blank')}
                  >
                    <ExternalLink size={14} className="mr-1 sm:mr-2 flex-shrink-0" />
                    <span className="font-medium">View Demo</span>
                  </Button>
                  
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-emerald-400/50 text-emerald-200 hover:border-cyan-400/80 hover:bg-gradient-to-r hover:from-emerald-600/20 hover:to-cyan-600/20 hover:text-white transition-all duration-500 hover:scale-105 rounded-lg sm:rounded-xl backdrop-blur-sm text-xs sm:text-sm"
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
          <Card className="inline-block p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-slate-800/95 via-emerald-900/70 to-slate-800/95 border-2 border-emerald-500/40 shadow-2xl max-w-sm sm:max-w-md mx-auto rounded-2xl sm:rounded-3xl backdrop-blur-sm hover:shadow-emerald-500/30 transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2">
            <div className="text-4xl sm:text-6xl mb-4 sm:mb-6 animate-bounce">🔮</div>
            <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">More Projects Coming Soon</p>
            <p className="text-sm lg:text-base text-slate-300 leading-relaxed">Always working on exciting new projects and exploring cutting-edge technologies!</p>
          </Card>
        </div>
      </div>
    </section>
  );
};
