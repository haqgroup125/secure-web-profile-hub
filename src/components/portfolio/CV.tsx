
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Mail, Phone, MapPin, Github, Linkedin, Shield, Code, Award, Calendar, User, Briefcase, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CV = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    // Create a downloadable PDF version
    window.print();
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header with navigation and download button */}
        <div className="flex justify-between items-center mb-8 no-print">
          <Button 
            onClick={handleBackToHome}
            variant="outline"
            className="bg-white/80 backdrop-blur-sm border-2 border-blue-200 text-blue-700 hover:bg-blue-50 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Curriculum Vitae
          </h1>
          
          <Button 
            onClick={handleDownload}
            className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>

        {/* CV Content */}
        <Card className="p-8 md:p-12 shadow-2xl bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-3xl">
          {/* Personal Information */}
          <div className="border-b-2 border-gradient-to-r from-blue-200 to-purple-200 pb-8 mb-8">
            <div className="text-center mb-6">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Muhammad Abubakkar
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
                Ethical Hacker & Web Developer
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-blue-600" />
                  <span className="text-gray-700 font-medium">abubakkar.work0@gmail.com</span>
                </div>
              </Card>
              <Card className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                <div className="flex items-center">
                  <Github className="w-5 h-5 mr-3 text-purple-600" />
                  <span className="text-gray-700 font-medium">github.com/haqgroup125</span>
                </div>
              </Card>
              <Card className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-emerald-600" />
                  <span className="text-gray-700 font-medium">Available Worldwide (Remote)</span>
                </div>
              </Card>
              <Card className="p-4 bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-orange-600" />
                  <span className="text-gray-700 font-medium">Available upon request</span>
                </div>
              </Card>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-10">
            <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <User className="w-8 h-8 mr-3 text-blue-600" />
                Professional Summary
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Enthusiastic cybersecurity professional with 2.5+ years of experience in ethical hacking and web development. 
                Specialized in identifying security vulnerabilities, conducting penetration testing, and building secure web applications. 
                Passionate about protecting digital assets while creating innovative solutions using modern technologies.
              </p>
            </Card>
          </div>

          {/* Skills */}
          <div className="mb-10">
            <Card className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Code className="w-8 h-8 mr-3 text-emerald-600" />
                Technical Skills
              </h3>
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="p-5 bg-white/80 border-blue-200">
                  <h4 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Cybersecurity
                  </h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Penetration Testing</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Vulnerability Assessment</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Web Application Security</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Network Security</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>OWASP Top 10</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Security Auditing</li>
                  </ul>
                </Card>
                <Card className="p-5 bg-white/80 border-purple-200">
                  <h4 className="text-xl font-semibold text-purple-700 mb-4 flex items-center">
                    <Code className="w-5 h-5 mr-2" />
                    Web Development
                  </h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>React.js & Next.js</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>TypeScript & JavaScript</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Node.js & Express</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>HTML5 & CSS3</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Tailwind CSS</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>RESTful APIs</li>
                  </ul>
                </Card>
              </div>
            </Card>
          </div>

          {/* Experience */}
          <div className="mb-10">
            <Card className="p-6 bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Briefcase className="w-8 h-8 mr-3 text-orange-600" />
                Professional Experience
              </h3>
              
              <div className="space-y-6">
                <Card className="p-6 bg-white/80 border-l-4 border-orange-500">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Freelance Security Consultant & Web Developer</h4>
                  <p className="text-orange-600 font-semibold mb-4 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    2022 - Present
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>Conducted security assessments for web applications and networks</li>
                    <li className="flex items-start"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>Developed secure web applications using modern frameworks</li>
                    <li className="flex items-start"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>Provided cybersecurity consulting for small to medium businesses</li>
                    <li className="flex items-start"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>Automated security testing processes and workflows</li>
                  </ul>
                </Card>
                
                <Card className="p-6 bg-white/80 border-l-4 border-blue-500">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Junior Ethical Hacker</h4>
                  <p className="text-blue-600 font-semibold mb-4 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    2021 - 2022
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>Performed penetration testing on web applications</li>
                    <li className="flex items-start"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>Identified and documented security vulnerabilities</li>
                    <li className="flex items-start"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>Collaborated with development teams to implement security fixes</li>
                    <li className="flex items-start"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>Created security awareness training materials</li>
                  </ul>
                </Card>
              </div>
            </Card>
          </div>

          {/* Education & Certifications */}
          <div className="mb-10">
            <Card className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-8 h-8 mr-3 text-purple-600" />
                Education & Certifications
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-5 bg-white/80 border-purple-200">
                  <h4 className="text-lg font-bold text-purple-700 mb-3">Cybersecurity Certifications</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Certified Ethical Hacker (CEH) - In Progress</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>CompTIA Security+ - Pursuing</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>OWASP Web Security Testing Guide Certified</li>
                  </ul>
                </Card>
                
                <Card className="p-5 bg-white/80 border-pink-200">
                  <h4 className="text-lg font-bold text-pink-700 mb-3">Self-Directed Learning</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center"><span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>Continuous learning through online platforms (TryHackMe, HackTheBox)</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>Regular participation in CTF competitions</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>Active member of cybersecurity communities</li>
                  </ul>
                </Card>
              </div>
            </Card>
          </div>

          {/* Projects */}
          <div className="mb-10">
            <Card className="p-6 bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-8 h-8 mr-3 text-cyan-600" />
                Key Projects
              </h3>
              
              <div className="space-y-6">
                <Card className="p-6 bg-white/80 border-l-4 border-cyan-500">
                  <h4 className="text-xl font-bold text-cyan-700 mb-3">Security Assessment Platform</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Developed a comprehensive web application for automated security testing and vulnerability management. 
                    Built with React.js and Node.js, featuring real-time reporting and dashboard analytics.
                  </p>
                </Card>
                
                <Card className="p-6 bg-white/80 border-l-4 border-teal-500">
                  <h4 className="text-xl font-bold text-teal-700 mb-3">Penetration Testing Toolkit</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Created a custom toolkit for web application penetration testing with automated report generation. 
                    Includes modules for SQL injection, XSS detection, and authentication bypass testing.
                  </p>
                </Card>
              </div>
            </Card>
          </div>

          {/* Languages */}
          <Card className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Languages</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-4 bg-white/80 text-center border-indigo-200">
                <span className="text-lg font-bold text-indigo-700">English</span>
                <p className="text-gray-700 mt-2">Professional Working Proficiency</p>
              </Card>
              <Card className="p-4 bg-white/80 text-center border-purple-200">
                <span className="text-lg font-bold text-purple-700">Urdu</span>
                <p className="text-gray-700 mt-2">Native</p>
              </Card>
              <Card className="p-4 bg-white/80 text-center border-pink-200">
                <span className="text-lg font-bold text-pink-700">Hindi</span>
                <p className="text-gray-700 mt-2">Conversational</p>
              </Card>
            </div>
          </Card>
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
          .bg-gradient-to-br,
          .bg-gradient-to-r {
            background: white !important;
          }
        }
      `}</style>
    </div>
  );
};
