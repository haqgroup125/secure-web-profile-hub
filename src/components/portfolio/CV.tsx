
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Mail, Phone, MapPin, Github, Linkedin, Shield, Code, Award, Calendar } from 'lucide-react';

export const CV = () => {
  const handleDownload = () => {
    // Create a downloadable PDF version
    window.print();
  };

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header with download button */}
        <div className="flex justify-between items-center mb-8 no-print">
          <h1 className="text-3xl font-bold text-gray-900">Curriculum Vitae</h1>
          <Button 
            onClick={handleDownload}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>

        {/* CV Content */}
        <Card className="p-8 shadow-lg">
          {/* Personal Information */}
          <div className="border-b pb-6 mb-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Muhammad Abubakkar</h2>
            <h3 className="text-xl text-blue-600 font-semibold mb-4">Ethical Hacker & Web Developer</h3>
            
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-blue-600" />
                <span>abubakkar.work0@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Github className="w-4 h-4 mr-2 text-blue-600" />
                <span>github.com/haqgroup125</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                <span>Available Worldwide (Remote)</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-blue-600" />
                <span>Available upon request</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <User className="w-6 h-6 mr-2 text-blue-600" />
              Professional Summary
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Enthusiastic cybersecurity professional with 2.5+ years of experience in ethical hacking and web development. 
              Specialized in identifying security vulnerabilities, conducting penetration testing, and building secure web applications. 
              Passionate about protecting digital assets while creating innovative solutions using modern technologies.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Code className="w-6 h-6 mr-2 text-blue-600" />
              Technical Skills
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Cybersecurity</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Penetration Testing</li>
                  <li>• Vulnerability Assessment</li>
                  <li>• Web Application Security</li>
                  <li>• Network Security</li>
                  <li>• OWASP Top 10</li>
                  <li>• Security Auditing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Web Development</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• React.js & Next.js</li>
                  <li>• TypeScript & JavaScript</li>
                  <li>• Node.js & Express</li>
                  <li>• HTML5 & CSS3</li>
                  <li>• Tailwind CSS</li>
                  <li>• RESTful APIs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Briefcase className="w-6 h-6 mr-2 text-blue-600" />
              Professional Experience
            </h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="text-lg font-semibold text-gray-900">Freelance Security Consultant & Web Developer</h4>
                <p className="text-blue-600 font-medium">2022 - Present</p>
                <ul className="text-gray-700 mt-2 space-y-1">
                  <li>• Conducted security assessments for web applications and networks</li>
                  <li>• Developed secure web applications using modern frameworks</li>
                  <li>• Provided cybersecurity consulting for small to medium businesses</li>
                  <li>• Automated security testing processes and workflows</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="text-lg font-semibold text-gray-900">Junior Ethical Hacker</h4>
                <p className="text-blue-600 font-medium">2021 - 2022</p>
                <ul className="text-gray-700 mt-2 space-y-1">
                  <li>• Performed penetration testing on web applications</li>
                  <li>• Identified and documented security vulnerabilities</li>
                  <li>• Collaborated with development teams to implement security fixes</li>
                  <li>• Created security awareness training materials</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Award className="w-6 h-6 mr-2 text-blue-600" />
              Education & Certifications
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Cybersecurity Certifications</h4>
                <ul className="text-gray-700 mt-2 space-y-1">
                  <li>• Certified Ethical Hacker (CEH) - In Progress</li>
                  <li>• CompTIA Security+ - Pursuing</li>
                  <li>• OWASP Web Security Testing Guide Certified</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Self-Directed Learning</h4>
                <ul className="text-gray-700 mt-2 space-y-1">
                  <li>• Continuous learning through online platforms (TryHackMe, HackTheBox)</li>
                  <li>• Regular participation in CTF competitions</li>
                  <li>• Active member of cybersecurity communities</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-2 text-blue-600" />
              Key Projects
            </h3>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-gray-900">Security Assessment Platform</h4>
                <p className="text-gray-700 mt-2">
                  Developed a comprehensive web application for automated security testing and vulnerability management. 
                  Built with React.js and Node.js, featuring real-time reporting and dashboard analytics.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-gray-900">Penetration Testing Toolkit</h4>
                <p className="text-gray-700 mt-2">
                  Created a custom toolkit for web application penetration testing with automated report generation. 
                  Includes modules for SQL injection, XSS detection, and authentication bypass testing.
                </p>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Languages</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <span className="font-semibold text-gray-800">English</span>
                <p className="text-gray-700">Professional Working Proficiency</p>
              </div>
              <div>
                <span className="font-semibold text-gray-800">Urdu</span>
                <p className="text-gray-700">Native</p>
              </div>
              <div>
                <span className="font-semibold text-gray-800">Hindi</span>
                <p className="text-gray-700">Conversational</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Print Styles */}
      <style jsx>{`
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
