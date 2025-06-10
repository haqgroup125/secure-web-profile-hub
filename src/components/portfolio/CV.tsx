
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Mail, Phone, MapPin, Github, Shield, Code, Award, Calendar, User, Briefcase, ArrowLeft, Star, Sparkles, Zap, ExternalLink, Globe } from 'lucide-react';
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
    { name: "Penetration Testing", level: 90 },
    { name: "Web App Security", level: 85 },
    { name: "Network Security", level: 80 },
    { name: "OWASP Top 10", level: 95 },
    { name: "Vulnerability Assessment", level: 88 },
    { name: "Security Auditing", level: 82 }
  ];

  const webDevSkills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "PHP", level: 85 },
    { name: "MySQL", level: 80 },
    { name: "React.js", level: 78 },
    { name: "Responsive Design", level: 92 }
  ];

  const tools = [
    "Burp Suite", "Nmap", "Metasploit", "Wireshark", "OWASP ZAP",
    "Git/GitHub", "Bootstrap", "XAMPP", "Visual Studio Code", "Linux"
  ];

  const projects = [
    {
      title: "University Attendance Management System",
      company: "Academic Project",
      period: "2023",
      description: "Complete attendance solution with admin, teacher, and student panels featuring PDF/CSV report generation and class-wise attendance tracking.",
      achievements: [
        "Developed multi-role dashboard system",
        "Implemented automated report generation",
        "Created responsive user interface"
      ],
      tags: ["PHP", "MySQL", "Bootstrap"]
    },
    {
      title: "Lab Watch Security Network",
      company: "Security Research",
      period: "2023",
      description: "Security monitoring tool with real-time threat detection and network analysis capabilities for cybersecurity labs.",
      achievements: [
        "Built real-time threat detection system",
        "Implemented network traffic analysis",
        "Created security incident response workflow"
      ],
      tags: ["Cybersecurity", "Network Security", "Monitoring"]
    },
    {
      title: "Skill-Swap Student Marketplace",
      company: "Educational Platform",
      period: "2022",
      description: "Platform for students to exchange skills with live chat functionality and rating systems.",
      achievements: [
        "Developed real-time chat system",
        "Implemented user rating mechanism",
        "Created skill matching algorithm"
      ],
      tags: ["PHP", "JavaScript", "Real-time Chat"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 no-print bg-white shadow-sm">
        <Button 
          onClick={handleBackToHome}
          variant="outline"
          className="border-gray-300 text-gray-700 hover:bg-gray-50 mb-4 sm:mb-0"
          size="sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Button>
        
        <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-0">
          Professional Resume
        </h1>
        
        <Button 
          onClick={handleDownload}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          size="sm"
        >
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </Button>
      </div>

      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <Card className="p-6 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white shadow-xl">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/30 shadow-lg">
                  <img
                    src={profileImage}
                    alt="Muhammad Abubakkar"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-1">Muhammad Abubakkar</h2>
                  <p className="text-blue-100 font-medium">Ethical Hacker & Web Developer</p>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>abubakkar.work0@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Github className="w-4 h-4" />
                    <span>github.com/haqgroup125</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Globe className="w-4 h-4" />
                    <span>Available Worldwide</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Professional Skills */}
            <Card className="p-6 shadow-lg border-0 bg-white">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-blue-600" />
                Cybersecurity Skills
              </h3>
              <div className="space-y-4">
                {cybersecuritySkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-blue-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Web Development Skills */}
            <Card className="p-6 shadow-lg border-0 bg-white">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2 text-purple-600" />
                Web Development
              </h3>
              <div className="space-y-4">
                {webDevSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-purple-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Tools & Technologies */}
            <Card className="p-6 shadow-lg border-0 bg-white">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-green-600" />
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-gradient-to-r from-green-100 to-blue-100 text-gray-700 rounded-full text-xs font-medium border border-gray-200 hover:shadow-md transition-all duration-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Summary */}
            <Card className="p-6 shadow-lg border-0 bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <User className="w-5 h-5 mr-2 text-blue-600" />
                Professional Profile
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Enthusiastic cybersecurity professional with 2.5+ years of experience in ethical hacking 
                and web development. Specialized in identifying security vulnerabilities, conducting 
                penetration testing, and building secure web applications using modern technologies. 
                Passionate about protecting digital assets and creating robust security solutions.
              </p>
            </Card>

            {/* Work Experience */}
            <Card className="p-6 shadow-lg border-0 bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-purple-600" />
                Professional Experience
              </h3>
              
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-blue-200">
                  <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-2 top-1"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h4 className="text-lg font-bold text-gray-900">Freelance Security Consultant & Web Developer</h4>
                    <span className="text-sm text-blue-600 font-semibold bg-blue-50 px-2 py-1 rounded">2022 - Present</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 italic">Self-Employed</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      Conducted comprehensive security assessments for web applications and network infrastructure
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      Developed secure, responsive web applications using modern frameworks and best practices
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      Provided cybersecurity consulting services for small to medium-sized businesses
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      Automated security testing processes and created efficient workflows for vulnerability detection
                    </li>
                  </ul>
                </div>
                
                <div className="relative pl-6 border-l-2 border-purple-200">
                  <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-2 top-1"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h4 className="text-lg font-bold text-gray-900">Junior Ethical Hacker</h4>
                    <span className="text-sm text-purple-600 font-semibold bg-purple-50 px-2 py-1 rounded">2021 - 2022</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 italic">Independent Projects</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      Performed penetration testing on various web applications and identified critical vulnerabilities
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      Documented security findings and provided detailed remediation recommendations
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      Created security awareness training materials and conducted workshops
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Featured Projects */}
            <Card className="p-6 shadow-lg border-0 bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                Featured Projects
              </h3>
              
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <h4 className="text-lg font-bold text-gray-900">{project.title}</h4>
                      <span className="text-sm text-blue-600 font-semibold bg-white px-2 py-1 rounded">{project.period}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2 italic">{project.company}</p>
                    <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-3">
                      <h5 className="text-sm font-semibold text-gray-800 mb-2">Key Achievements:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {project.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="px-2 py-1 bg-white text-blue-800 rounded-full text-xs border border-blue-200 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Education & Certifications */}
            <Card className="p-6 shadow-lg border-0 bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Award className="w-5 h-5 mr-2 text-green-600" />
                Education & Continuous Learning
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Pursuing Certifications</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      Certified Ethical Hacker (CEH) - In Progress
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      CompTIA Security+ - Pursuing
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Continuous Learning</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      TryHackMe & HackTheBox Platforms
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      Cybersecurity Communities
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      Online Security Research
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
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
          .bg-gradient-to-br, .bg-gradient-to-r {
            background: white !important;
            -webkit-print-color-adjust: exact;
          }
        }
        
        @media (max-width: 640px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
