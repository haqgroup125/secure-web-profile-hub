
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Mail, Phone, MapPin, Github, Shield, Code, Award, Calendar, User, Briefcase, ArrowLeft, Star, Sparkles, Zap, ExternalLink } from 'lucide-react';
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 no-print border-b border-gray-200">
        <Button 
          onClick={handleBackToHome}
          variant="outline"
          className="border-gray-300 text-gray-700 hover:bg-gray-50 mb-4 sm:mb-0"
          size="sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Button>
        
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-0">
          Resume
        </h1>
        
        <Button 
          onClick={handleDownload}
          className="bg-red-500 hover:bg-red-600 text-white"
          size="sm"
        >
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </Button>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
        {/* Header Section */}
        <div className="bg-red-500 text-white p-6 sm:p-8 mb-8 rounded-none sm:rounded-lg">
          <div className="grid lg:grid-cols-3 gap-6 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-lg overflow-hidden bg-white/20">
                <img
                  src={profileImage}
                  alt="Muhammad Abubakkar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name and Title */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                Muhammad Abubakkar
              </h2>
              <h3 className="text-lg sm:text-xl font-medium mb-4 text-red-100">
                Ethical Hacker & Web Developer
              </h3>
              
              <p className="text-sm sm:text-base leading-relaxed text-red-50">
                Enthusiastic cybersecurity professional with 2.5+ years of experience in ethical hacking 
                and web development. Specialized in identifying security vulnerabilities, conducting 
                penetration testing, and building secure web applications using modern technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="flex items-center text-sm">
            <Mail className="w-4 h-4 mr-2 text-red-500" />
            <span className="text-gray-700 break-all">abubakkar.work0@gmail.com</span>
          </div>
          <div className="flex items-center text-sm">
            <Github className="w-4 h-4 mr-2 text-gray-600" />
            <span className="text-gray-700">github.com/haqgroup125</span>
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="w-4 h-4 mr-2 text-green-600" />
            <span className="text-gray-700">Available Worldwide</span>
          </div>
          <div className="flex items-center text-sm">
            <ExternalLink className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-gray-700">Remote Ready</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-8">
            {/* Technical Skills */}
            <div>
              <h3 className="text-xl font-bold text-red-500 mb-4 border-b border-gray-200 pb-2">
                TECHNICAL SKILLS
              </h3>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Cybersecurity</h4>
                <div className="space-y-2">
                  {cybersecuritySkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-red-500 h-2 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Web Development</h4>
                <div className="space-y-2">
                  {webDevSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-red-500 h-2 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tools & Technologies */}
            <div>
              <h3 className="text-xl font-bold text-red-500 mb-4 border-b border-gray-200 pb-2">
                TOOLS & TECHNOLOGIES
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs border border-gray-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div>
              <h3 className="text-xl font-bold text-red-500 mb-4 border-b border-gray-200 pb-2">
                EDUCATION & LEARNING
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Pursuing Certifications</h4>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Certified Ethical Hacker (CEH) - In Progress</li>
                    <li>• CompTIA Security+ - Pursuing</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800">Continuous Learning</h4>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• TryHackMe & HackTheBox Platforms</li>
                    <li>• Cybersecurity Communities</li>
                    <li>• Online Security Research</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Work Experience */}
            <div>
              <h3 className="text-xl font-bold text-red-500 mb-4 border-b border-gray-200 pb-2">
                WORK EXPERIENCE
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h4 className="text-lg font-bold text-gray-900">Freelance Security Consultant & Web Developer</h4>
                    <span className="text-sm text-red-500 font-medium">2022 - Present</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 italic">Self-Employed</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Conducted comprehensive security assessments for web applications and network infrastructure</li>
                    <li>• Developed secure, responsive web applications using modern frameworks and best practices</li>
                    <li>• Provided cybersecurity consulting services for small to medium-sized businesses</li>
                    <li>• Automated security testing processes and created efficient workflows for vulnerability detection</li>
                    <li>• Collaborated with development teams to implement security fixes and improvements</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h4 className="text-lg font-bold text-gray-900">Junior Ethical Hacker</h4>
                    <span className="text-sm text-red-500 font-medium">2021 - 2022</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 italic">Independent Projects</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Performed penetration testing on various web applications and identified critical vulnerabilities</li>
                    <li>• Documented security findings and provided detailed remediation recommendations</li>
                    <li>• Created security awareness training materials and conducted workshops</li>
                    <li>• Researched emerging cybersecurity threats and developed countermeasures</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <div>
              <h3 className="text-xl font-bold text-red-500 mb-4 border-b border-gray-200 pb-2">
                FEATURED PROJECTS
              </h3>
              
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <div key={index} className="border-l-4 border-red-500 pl-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <h4 className="text-lg font-bold text-gray-900">{project.title}</h4>
                      <span className="text-sm text-red-500 font-medium">{project.period}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2 italic">{project.company}</p>
                    <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-3">
                      <h5 className="text-sm font-semibold text-gray-800 mb-1">Key Achievements:</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {project.achievements.map((achievement, idx) => (
                          <li key={idx}>• {achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs border border-red-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
          .bg-red-500 {
            background-color: #ef4444 !important;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
};
