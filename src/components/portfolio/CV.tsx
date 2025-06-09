
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Mail, Phone, MapPin, Github, Shield, Code, Award, Calendar, User, Briefcase, ArrowLeft, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CV = () => {
  const navigate = useNavigate();

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="flex justify-between items-center p-6 no-print">
        <Button 
          onClick={handleBackToHome}
          variant="outline"
          className="bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-full shadow-lg"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Button>
        
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Curriculum Vitae
        </h1>
        
        <Button 
          onClick={handleDownload}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-full shadow-lg"
        >
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </Button>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-12">
        {/* Personal Information - Hero Style */}
        <Card className="p-8 mb-8 bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl rounded-3xl">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Muhammad Abubakkar
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-slate-600 mb-6">
              Ethical Hacker & Web Developer
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-center bg-blue-50 rounded-2xl p-4">
                <Mail className="w-5 h-5 mr-3 text-blue-600" />
                <span className="text-slate-700">abubakkar.work0@gmail.com</span>
              </div>
              <div className="flex items-center justify-center bg-purple-50 rounded-2xl p-4">
                <Github className="w-5 h-5 mr-3 text-purple-600" />
                <span className="text-slate-700">github.com/haqgroup125</span>
              </div>
              <div className="flex items-center justify-center bg-emerald-50 rounded-2xl p-4">
                <MapPin className="w-5 h-5 mr-3 text-emerald-600" />
                <span className="text-slate-700">Available Worldwide (Remote)</span>
              </div>
              <div className="flex items-center justify-center bg-orange-50 rounded-2xl p-4">
                <Phone className="w-5 h-5 mr-3 text-orange-600" />
                <span className="text-slate-700">Available upon request</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Professional Summary */}
        <Card className="p-8 mb-8 bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl rounded-3xl">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center justify-center">
            <User className="w-6 h-6 mr-3 text-blue-600" />
            Professional Summary
          </h3>
          <p className="text-lg text-slate-700 leading-relaxed text-center">
            Enthusiastic cybersecurity professional with 2.5+ years of experience in ethical hacking and web development. 
            Specialized in identifying security vulnerabilities, conducting penetration testing, and building secure web applications.
          </p>
        </Card>

        {/* Skills Section - Home Page Style */}
        <Card className="p-8 mb-8 bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl rounded-3xl">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center justify-center">
            <Code className="w-6 h-6 mr-3 text-emerald-600" />
            Technical Skills
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-semibold text-blue-700 mb-4 text-center">🔐 Cybersecurity</h4>
              <div className="flex flex-wrap gap-3 justify-center">
                {cybersecuritySkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-purple-700 mb-4 text-center">🌐 Web Development</h4>
              <div className="flex flex-wrap gap-3 justify-center">
                {webDevSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-emerald-700 mb-4 text-center">🔧 Tools & Technologies</h4>
            <div className="flex flex-wrap gap-3 justify-center">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 rounded-full text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Card>

        {/* Experience */}
        <Card className="p-8 mb-8 bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl rounded-3xl">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center justify-center">
            <Briefcase className="w-6 h-6 mr-3 text-orange-600" />
            Professional Experience
          </h3>
          
          <div className="space-y-6">
            <div className="text-center">
              <h4 className="text-xl font-bold text-slate-900 mb-2">Freelance Security Consultant & Web Developer</h4>
              <p className="text-orange-600 font-semibold mb-4 flex items-center justify-center">
                <Calendar className="w-4 h-4 mr-2" />
                2022 - Present
              </p>
              <ul className="text-slate-700 space-y-2 max-w-2xl mx-auto">
                <li>• Conducted security assessments for web applications and networks</li>
                <li>• Developed secure web applications using modern frameworks</li>
                <li>• Provided cybersecurity consulting for small to medium businesses</li>
                <li>• Automated security testing processes and workflows</li>
              </ul>
            </div>
            
            <div className="text-center">
              <h4 className="text-xl font-bold text-slate-900 mb-2">Junior Ethical Hacker</h4>
              <p className="text-blue-600 font-semibold mb-4 flex items-center justify-center">
                <Calendar className="w-4 h-4 mr-2" />
                2021 - 2022
              </p>
              <ul className="text-slate-700 space-y-2 max-w-2xl mx-auto">
                <li>• Performed penetration testing on web applications</li>
                <li>• Identified and documented security vulnerabilities</li>
                <li>• Collaborated with development teams to implement security fixes</li>
                <li>• Created security awareness training materials</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Projects Section - Home Page Style */}
        <Card className="p-8 mb-8 bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl rounded-3xl">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center justify-center">
            <Star className="w-6 h-6 mr-3 text-cyan-600" />
            Featured Projects
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-200 rounded-2xl">
                <h4 className="text-lg font-bold text-slate-900 mb-3">{project.title}</h4>
                <p className="text-slate-700 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-xs font-medium"
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
        <Card className="p-8 mb-8 bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl rounded-3xl">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center justify-center">
            <Award className="w-6 h-6 mr-3 text-purple-600" />
            Education & Learning
          </h3>
          
          <div className="text-center space-y-6">
            <div>
              <h4 className="text-lg font-bold text-purple-700 mb-3">Pursuing Certifications</h4>
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-medium">
                  Certified Ethical Hacker (CEH) - In Progress
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-full text-sm font-medium">
                  CompTIA Security+ - Pursuing
                </span>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-emerald-700 mb-3">Continuous Learning</h4>
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 rounded-full text-sm font-medium">
                  Online Platforms (TryHackMe, HackTheBox)
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 rounded-full text-sm font-medium">
                  Cybersecurity Communities
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Languages */}
        <Card className="p-8 bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl rounded-3xl">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Languages</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl">
              <span className="text-lg font-bold text-indigo-700">English</span>
              <p className="text-slate-600 mt-1">Professional</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
              <span className="text-lg font-bold text-purple-700">Urdu</span>
              <p className="text-slate-600 mt-1">Native</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl">
              <span className="text-lg font-bold text-pink-700">Hindi</span>
              <p className="text-slate-600 mt-1">Conversational</p>
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
