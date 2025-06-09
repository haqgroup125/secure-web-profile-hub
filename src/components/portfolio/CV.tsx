
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Mail, Phone, MapPin, Github, Shield, Code, Award, Calendar, User, Briefcase, ArrowLeft, Star, Sparkles, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const CV = () => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState<string>('/placeholder.svg');

  // Load saved profile image from localStorage on component mount
  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage && savedImage !== '/placeholder.svg') {
      setProfileImage(savedImage);
    }
  }, []);

  const handleDownload = () => {
    window.print();
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const cybersecuritySkills = [
    "Penetration Testing",
    "Vulnerability Assessment", 
    "Web Application Security",
    "Network Security",
    "OWASP Top 10",
    "Security Auditing"
  ];

  const webDevSkills = [
    "HTML/CSS",
    "JavaScript", 
    "PHP",
    "MySQL",
    "React.js",
    "Responsive Design"
  ];

  const tools = [
    "Burp Suite", "Nmap", "Metasploit", "Wireshark", "OWASP ZAP",
    "Git/GitHub", "Bootstrap", "XAMPP", "Visual Studio Code", "Linux"
  ];

  const projects = [
    {
      title: "University Attendance Management System",
      description: "Complete attendance solution with admin, teacher, and student panels featuring PDF/CSV report generation.",
      tags: ["PHP", "MySQL", "Bootstrap"]
    },
    {
      title: "Khata (Debt Ledger) Web App", 
      description: "Business management tool for tracking customer debts and generating financial reports.",
      tags: ["PHP", "MySQL", "JavaScript"]
    },
    {
      title: "Skill-Swap Student Marketplace",
      description: "Platform for students to exchange skills with live chat and rating systems.",
      tags: ["PHP", "JavaScript", "Real-time Chat"]
    },
    {
      title: "Lab Watch Security Network",
      description: "Security monitoring tool with real-time threat detection and network analysis.",
      tags: ["Cybersecurity", "Network Security"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900/40 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-96 h-96 bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600 rounded-full mix-blend-multiply filter blur-2xl animate-pulse opacity-30"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-1000 opacity-35"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-2000 opacity-25"></div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center p-6 no-print relative z-10">
        <Button 
          onClick={handleBackToHome}
          variant="outline"
          className="bg-gradient-to-r from-slate-800/90 to-emerald-900/70 backdrop-blur-sm border-2 border-emerald-400/50 text-emerald-200 hover:border-emerald-300/80 hover:bg-gradient-to-r hover:from-emerald-600/20 hover:to-cyan-600/20 hover:text-white px-6 py-2 rounded-full shadow-lg transition-all duration-500 hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Button>
        
        <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
          Curriculum Vitae
        </h1>
        
        <Button 
          onClick={handleDownload}
          className="bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl hover:shadow-emerald-400/50 transition-all duration-500 hover:scale-105"
        >
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </Button>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-12 relative z-10">
        {/* Personal Information - Hero Style */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-slate-800/95 via-emerald-900/80 to-slate-800/95 backdrop-blur-xl border-2 border-emerald-500/40 shadow-2xl hover:shadow-emerald-500/30 transition-all duration-700 hover:-translate-y-3 rounded-3xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="w-60 h-60 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 p-2 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  <img
                    src={profileImage}
                    alt="Muhammad Abubakkar"
                    className="w-full h-full rounded-full object-cover bg-white group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 animate-pulse">
                Muhammad Abubakkar
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-emerald-200 mb-6">
                Ethical Hacker & Web Developer
              </h3>
              
              <div className="grid gap-3">
                <div className="flex items-center justify-center lg:justify-start bg-gradient-to-r from-slate-700/90 to-emerald-800/70 rounded-2xl p-3 border border-emerald-400/40">
                  <Mail className="w-5 h-5 mr-3 text-emerald-400" />
                  <span className="text-slate-200 text-sm">abubakkar.work0@gmail.com</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start bg-gradient-to-r from-slate-700/90 to-cyan-800/70 rounded-2xl p-3 border border-cyan-400/40">
                  <Github className="w-5 h-5 mr-3 text-cyan-400" />
                  <span className="text-slate-200 text-sm">github.com/haqgroup125</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start bg-gradient-to-r from-slate-700/90 to-blue-800/70 rounded-2xl p-3 border border-blue-400/40">
                  <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                  <span className="text-slate-200 text-sm">Available Worldwide (Remote)</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Professional Summary */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-slate-800/95 via-emerald-900/80 to-slate-800/95 backdrop-blur-xl border-2 border-emerald-500/40 shadow-2xl hover:shadow-emerald-500/30 transition-all duration-700 hover:-translate-y-3 rounded-3xl">
          <div className="text-center">
            <div className="inline-block p-3 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 rounded-full mb-6 animate-pulse shadow-2xl">
              <User className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 animate-pulse">
              Professional Summary
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Enthusiastic cybersecurity professional with 2.5+ years of experience in ethical hacking and web development. 
              Specialized in identifying security vulnerabilities, conducting penetration testing, and building secure web applications.
            </p>
          </div>
        </Card>

        {/* Skills Section - Matching Home Page Style */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-slate-800/95 via-emerald-900/80 to-slate-800/95 backdrop-blur-xl border-2 border-emerald-500/40 shadow-2xl hover:shadow-emerald-500/30 transition-all duration-700 hover:-translate-y-3 rounded-3xl">
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 rounded-full mb-6 animate-pulse shadow-2xl">
              <Code className="text-white w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 animate-pulse">
              🛠️ Skills & Expertise
            </h3>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Technical proficiencies across cybersecurity and web development
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="text-center">
              <h4 className="text-xl font-semibold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent mb-4">🔐 Cybersecurity</h4>
              <div className="flex flex-wrap gap-3 justify-center">
                {cybersecuritySkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-emerald-600/60 to-cyan-600/60 text-white border border-emerald-400/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="text-xl font-semibold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-4">🌐 Web Development</h4>
              <div className="flex flex-wrap gap-3 justify-center">
                {webDevSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600/60 to-pink-600/60 text-white border border-purple-400/30 hover:border-pink-400/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-xl font-semibold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent mb-4">🔧 Tools & Technologies</h4>
            <div className="flex flex-wrap gap-3 justify-center">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600/60 to-indigo-600/60 text-white border border-blue-400/30 hover:border-indigo-400/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm rounded-full text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Card>

        {/* Experience */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-slate-800/95 via-emerald-900/80 to-slate-800/95 backdrop-blur-xl border-2 border-emerald-500/40 shadow-2xl hover:shadow-emerald-500/30 transition-all duration-700 hover:-translate-y-3 rounded-3xl">
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 rounded-full mb-6 animate-pulse shadow-2xl">
              <Briefcase className="text-white w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 animate-pulse">
              Professional Experience
            </h3>
          </div>
          
          <div className="space-y-8">
            <div className="text-center p-6 bg-gradient-to-br from-slate-700/90 to-emerald-800/70 rounded-2xl border border-emerald-400/40">
              <h4 className="text-xl font-bold text-white mb-2">Freelance Security Consultant & Web Developer</h4>
              <p className="text-emerald-300 font-semibold mb-4 flex items-center justify-center">
                <Calendar className="w-4 h-4 mr-2" />
                2022 - Present
              </p>
              <ul className="text-slate-200 space-y-2 max-w-2xl mx-auto text-left">
                <li>• Conducted security assessments for web applications and networks</li>
                <li>• Developed secure web applications using modern frameworks</li>
                <li>• Provided cybersecurity consulting for small to medium businesses</li>
                <li>• Automated security testing processes and workflows</li>
              </ul>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-slate-700/90 to-cyan-800/70 rounded-2xl border border-cyan-400/40">
              <h4 className="text-xl font-bold text-white mb-2">Junior Ethical Hacker</h4>
              <p className="text-cyan-300 font-semibold mb-4 flex items-center justify-center">
                <Calendar className="w-4 h-4 mr-2" />
                2021 - 2022
              </p>
              <ul className="text-slate-200 space-y-2 max-w-2xl mx-auto text-left">
                <li>• Performed penetration testing on web applications</li>
                <li>• Identified and documented security vulnerabilities</li>
                <li>• Collaborated with development teams to implement security fixes</li>
                <li>• Created security awareness training materials</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Projects Section - Matching Home Page Style */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-slate-800/95 via-emerald-900/80 to-slate-800/95 backdrop-blur-xl border-2 border-emerald-500/40 shadow-2xl hover:shadow-emerald-500/30 transition-all duration-700 hover:-translate-y-3 rounded-3xl">
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 rounded-full mb-6 animate-pulse shadow-2xl">
              <Star className="text-white w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 animate-pulse">
              Featured Projects
            </h3>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Real-world applications focusing on security, user experience, and modern web technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="group p-6 bg-gradient-to-br from-slate-700/90 to-emerald-800/70 border-2 border-emerald-400/40 hover:border-cyan-400/70 shadow-xl rounded-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-emerald-500/30 backdrop-blur-sm">
                <div className="flex items-start space-x-3 mb-3">
                  <Zap className="text-emerald-400 w-6 h-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-pulse flex-shrink-0 mt-0.5" />
                  <h4 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">{project.title}</h4>
                </div>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 bg-gradient-to-r from-emerald-600/60 to-cyan-600/60 text-white border border-emerald-400/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Card>

        {/* Education & Certifications */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-slate-800/95 via-emerald-900/80 to-slate-800/95 backdrop-blur-xl border-2 border-emerald-500/40 shadow-2xl hover:shadow-emerald-500/30 transition-all duration-700 hover:-translate-y-3 rounded-3xl">
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 rounded-full mb-6 animate-pulse shadow-2xl">
              <Award className="text-white w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 animate-pulse">
              Education & Learning
            </h3>
          </div>
          
          <div className="text-center space-y-6">
            <div className="p-6 bg-gradient-to-br from-slate-700/90 to-purple-800/70 rounded-2xl border border-purple-400/40">
              <h4 className="text-lg font-bold text-purple-300 mb-3">Pursuing Certifications</h4>
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="px-4 py-2 bg-gradient-to-r from-purple-600/60 to-pink-600/60 text-white border border-purple-400/30 hover:border-pink-400/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm rounded-full text-sm font-medium">
                  Certified Ethical Hacker (CEH) - In Progress
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-600/60 to-cyan-600/60 text-white border border-blue-400/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm rounded-full text-sm font-medium">
                  CompTIA Security+ - Pursuing
                </span>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-slate-700/90 to-emerald-800/70 rounded-2xl border border-emerald-400/40">
              <h4 className="text-lg font-bold text-emerald-300 mb-3">Continuous Learning</h4>
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="px-4 py-2 bg-gradient-to-r from-emerald-600/60 to-teal-600/60 text-white border border-emerald-400/30 hover:border-teal-400/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm rounded-full text-sm font-medium">
                  Online Platforms (TryHackMe, HackTheBox)
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-orange-600/60 to-red-600/60 text-white border border-orange-400/30 hover:border-red-400/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm rounded-full text-sm font-medium">
                  Cybersecurity Communities
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Contact Section - Matching Home Page Style */}
        <Card className="p-8 bg-gradient-to-br from-slate-800/95 via-emerald-900/80 to-slate-800/95 backdrop-blur-xl border-2 border-emerald-500/40 shadow-2xl hover:shadow-emerald-500/30 transition-all duration-700 hover:-translate-y-3 rounded-3xl">
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 rounded-full mb-6 animate-pulse shadow-2xl">
              <Sparkles className="text-white w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 animate-pulse">
              Let's Connect & Create
            </h3>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Ready to turn your ideas into exceptional digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-slate-700/90 to-emerald-800/70 rounded-2xl border border-emerald-400/40 hover:border-emerald-300/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl backdrop-blur-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full mb-4 shadow-2xl">
                <Mail className="text-white w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Email</h4>
              <p className="text-emerald-200 text-sm break-all">abubakkar.work0@gmail.com</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-slate-700/90 to-cyan-800/70 rounded-2xl border border-cyan-400/40 hover:border-cyan-300/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl backdrop-blur-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4 shadow-2xl">
                <Github className="text-white w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">GitHub</h4>
              <p className="text-cyan-200 text-sm">github.com/haqgroup125</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-slate-700/90 to-blue-800/70 rounded-2xl border border-blue-400/40 hover:border-blue-300/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl backdrop-blur-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4 shadow-2xl">
                <MapPin className="text-white w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Location</h4>
              <p className="text-blue-200 text-sm">Available Worldwide</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            background: white !important;
          }
        }
      `}</style>
    </div>
  );
};
