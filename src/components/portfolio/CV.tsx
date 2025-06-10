
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Mail, Phone, MapPin, Github, Shield, Code, Award, Calendar, User, Briefcase, ArrowLeft, Star, Sparkles, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CV = () => {
  const navigate = useNavigate();
  const profileImage = '/lovable-uploads/a661e938-71ff-4e2f-b5c3-5bcbdf3e00d7.png';

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
          className="border-slate-300 text-slate-700 hover:bg-slate-50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Button>
        
        <h1 className="text-3xl font-bold text-slate-900">
          Curriculum Vitae
        </h1>
        
        <Button 
          onClick={handleDownload}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </Button>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-12">
        {/* Personal Information - Hero Style */}
        <Card className="p-8 mb-8 bg-white/90 backdrop-blur-xl border border-gray-200/50 shadow-xl rounded-3xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-60 h-60 rounded-full overflow-hidden shadow-2xl">
                <img
                  src={profileImage}
                  alt="Muhammad Abubakkar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                Muhammad Abubakkar
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-slate-600 mb-6">
                Ethical Hacker & Web Developer
              </h3>
              
              <div className="grid gap-3">
                <div className="flex items-center justify-center lg:justify-start bg-gray-50 rounded-xl p-3 border border-gray-200">
                  <Mail className="w-5 h-5 mr-3 text-blue-600" />
                  <span className="text-slate-700 text-sm">abubakkar.work0@gmail.com</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start bg-gray-50 rounded-xl p-3 border border-gray-200">
                  <Github className="w-5 h-5 mr-3 text-slate-600" />
                  <span className="text-slate-700 text-sm">github.com/haqgroup125</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start bg-gray-50 rounded-xl p-3 border border-gray-200">
                  <MapPin className="w-5 h-5 mr-3 text-green-600" />
                  <span className="text-slate-700 text-sm">Available Worldwide (Remote)</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Professional Summary */}
        <Card className="p-8 mb-8 bg-white/90 backdrop-blur-xl border border-gray-200/50 shadow-xl rounded-3xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Professional Summary
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Enthusiastic cybersecurity professional with 2.5+ years of experience in ethical hacking and web development. 
              Specialized in identifying security vulnerabilities, conducting penetration testing, and building secure web applications.
            </p>
          </div>
        </Card>

        {/* Skills Section */}
        <Card className="p-8 mb-8 bg-white/90 backdrop-blur-xl border border-gray-200/50 shadow-xl rounded-3xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              🛠️ Skills & Expertise
            </h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Technical proficiencies across cybersecurity and web development
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-slate-800 mb-4">🔐 Cybersecurity</h4>
              <div className="flex flex-wrap gap-3 justify-center">
                {cybersecuritySkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-100 text-blue-800 border border-blue-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="text-xl font-semibold text-slate-800 mb-4">🌐 Web Development</h4>
              <div className="flex flex-wrap gap-3 justify-center">
                {webDevSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-green-100 text-green-800 border border-green-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-xl font-semibold text-slate-800 mb-4">🔧 Tools & Technologies</h4>
            <div className="flex flex-wrap gap-3 justify-center">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-800 border border-gray-200 rounded-full text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Card>

        {/* Experience */}
        <Card className="p-8 mb-8 bg-white/90 backdrop-blur-xl border border-gray-200/50 shadow-xl rounded-3xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Professional Experience
            </h3>
          </div>
          
          <div className="space-y-8">
            <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <h4 className="text-xl font-bold text-slate-900 mb-2">Freelance Security Consultant & Web Developer</h4>
              <p className="text-blue-600 font-semibold mb-4 flex items-center justify-center">
                <Calendar className="w-4 h-4 mr-2" />
                2022 - Present
              </p>
              <ul className="text-slate-600 space-y-2 max-w-2xl mx-auto text-left">
                <li>• Conducted security assessments for web applications and networks</li>
                <li>• Developed secure web applications using modern frameworks</li>
                <li>• Provided cybersecurity consulting for small to medium businesses</li>
                <li>• Automated security testing processes and workflows</li>
              </ul>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <h4 className="text-xl font-bold text-slate-900 mb-2">Junior Ethical Hacker</h4>
              <p className="text-green-600 font-semibold mb-4 flex items-center justify-center">
                <Calendar className="w-4 h-4 mr-2" />
                2021 - 2022
              </p>
              <ul className="text-slate-600 space-y-2 max-w-2xl mx-auto text-left">
                <li>• Performed penetration testing on web applications</li>
                <li>• Identified and documented security vulnerabilities</li>
                <li>• Collaborated with development teams to implement security fixes</li>
                <li>• Created security awareness training materials</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Projects Section */}
        <Card className="p-8 mb-8 bg-white/90 backdrop-blur-xl border border-gray-200/50 shadow-xl rounded-3xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Featured Projects
            </h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Real-world applications focusing on security, user experience, and modern web technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 bg-gray-50 border border-gray-200 shadow-md rounded-2xl">
                <div className="flex items-start space-x-3 mb-3">
                  <Zap className="text-blue-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                  <h4 className="text-lg font-bold text-slate-900">{project.title}</h4>
                </div>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 bg-blue-100 text-blue-800 border border-blue-200 rounded-full text-xs font-medium"
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
        <Card className="p-8 mb-8 bg-white/90 backdrop-blur-xl border border-gray-200/50 shadow-xl rounded-3xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Education & Learning
            </h3>
          </div>
          
          <div className="text-center space-y-6">
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Pursuing Certifications</h4>
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="px-4 py-2 bg-purple-100 text-purple-800 border border-purple-200 rounded-full text-sm font-medium">
                  Certified Ethical Hacker (CEH) - In Progress
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 border border-blue-200 rounded-full text-sm font-medium">
                  CompTIA Security+ - Pursuing
                </span>
              </div>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Continuous Learning</h4>
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="px-4 py-2 bg-green-100 text-green-800 border border-green-200 rounded-full text-sm font-medium">
                  Online Platforms (TryHackMe, HackTheBox)
                </span>
                <span className="px-4 py-2 bg-orange-100 text-orange-800 border border-orange-200 rounded-full text-sm font-medium">
                  Cybersecurity Communities
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Contact Section */}
        <Card className="p-8 bg-white/90 backdrop-blur-xl border border-gray-200/50 shadow-xl rounded-3xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Let's Connect & Create
            </h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Ready to turn your ideas into exceptional digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Mail className="text-blue-600 w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Email</h4>
              <p className="text-slate-600 text-sm break-all">abubakkar.work0@gmail.com</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <Github className="text-slate-600 w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">GitHub</h4>
              <p className="text-slate-600 text-sm">github.com/haqgroup125</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <MapPin className="text-green-600 w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Location</h4>
              <p className="text-slate-600 text-sm">Available Worldwide</p>
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
