
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Mail, Github, User, Briefcase } from 'lucide-react';

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
      <div className="container mx-auto max-w-6xl">
        <Card className="p-6 sm:p-8 md:p-16 bg-white border border-gray-200 shadow-lg rounded-lg">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Profile Section */}
            <div className="flex flex-col items-center lg:items-start space-y-6 lg:space-y-8">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-2 shadow-xl">
                <img
                  src={profileImage}
                  alt="Muhammad Abubakkar"
                  className="w-full h-full rounded-full object-cover bg-white"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold text-gray-900 mb-3 lg:mb-4">
                  Muhammad Abubakkar
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-medium mb-4 lg:mb-6">
                  Ethical Hacker & Web Developer
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 lg:mb-4">A Bit About Me</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  I am an enthusiastic cybersecurity professional with 2.5+ years of experience in ethical hacking 
                  and web development. I specialize in securing digital assets while building modern, 
                  secure web applications using cutting-edge technologies.
                </p>
              </div>

              {/* Navigation Buttons */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={handleDownloadCV}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded-full shadow-lg transition-all duration-300 text-sm sm:text-base"
                  size="sm"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                  Resume
                </Button>
                
                <Button 
                  onClick={handleViewProjects}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded-full shadow-lg transition-all duration-300 text-sm sm:text-base"
                  size="sm"
                >
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                  Research
                </Button>
                
                <Button 
                  onClick={handleContact}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded-full shadow-lg transition-all duration-300 text-sm sm:text-base"
                  size="sm"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                  Outreach
                </Button>
                
                <Button 
                  variant="outline"
                  className="border-2 border-gray-400 text-gray-700 hover:bg-gray-100 font-semibold px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded-full shadow-lg transition-all duration-300 text-sm sm:text-base col-span-2 sm:col-span-1"
                  size="sm"
                >
                  <User className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                  Personal
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
