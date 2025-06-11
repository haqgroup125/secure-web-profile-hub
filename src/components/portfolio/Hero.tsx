
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Mail, Github, User, Briefcase, MapPin, Phone } from 'lucide-react';

interface HeroProps {
  profileImage: string;
}

export const Hero = ({ profileImage }: HeroProps) => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv';
    link.target = '_blank';
    link.click();
  };

  const handleViewProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 bg-white">
      <div className="container mx-auto max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-6xl">
        <Card className="p-6 sm:p-8 bg-white border border-gray-100 shadow-lg rounded-xl overflow-hidden">
          {/* Mobile-First Layout */}
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Profile Image */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-1 shadow-xl">
              <img
                src={profileImage}
                alt="Muhammad Abubakkar"
                className="w-full h-full rounded-full object-cover bg-white"
              />
            </div>

            {/* Name and Title */}
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Hello,
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                I'm Muhammad Abubakkar
              </h2>
              <p className="text-lg sm:text-xl text-blue-600 font-semibold uppercase tracking-wide">
                ETHICAL HACKER & WEB DEVELOPER
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                <span>abubakkar.work0@gmail.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Github className="w-4 h-4" />
                <span>github.com/haqgroup125</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
              <Button 
                onClick={handleDownloadCV}
                className="flex-1 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-lg"
              >
                Hire Me
              </Button>
              
              <Button 
                onClick={handleDownloadCV}
                variant="outline"
                className="flex-1 border-gray-900 text-gray-900 hover:bg-gray-50 font-semibold py-3 rounded-lg"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>

            {/* About Me Section */}
            <div className="max-w-md space-y-3 pt-4">
              <h3 className="text-lg font-bold text-gray-900">About Me</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                I am an enthusiastic cybersecurity professional with 2.5+ years of experience in ethical hacking 
                and web development. I specialize in securing digital assets while building modern, 
                secure web applications using cutting-edge technologies. I really like my work, if you don't 
                I change this until you like it.
              </p>
            </div>

            {/* Skills Tags */}
            <div className="w-full max-w-md">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Other Skills:</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  "Penetration Testing", "OWASP Top 10", "Web Security", "PHP", 
                  "JavaScript", "MySQL", "HTML5", "CSS3", "React.js"
                ].map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-900 text-white text-xs font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gray-50 rounded-lg p-4 w-full max-w-md">
              <h4 className="font-bold text-gray-900 mb-2">
                If You have any Unique idea for Project in your Mind
              </h4>
              <Button 
                onClick={handleContact}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 rounded-lg"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
