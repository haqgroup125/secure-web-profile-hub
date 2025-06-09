
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Mail, Github, User, Briefcase } from 'lucide-react';

interface HeroProps {
  profileImage: string;
}

export const Hero = ({ profileImage }: HeroProps) => {
  const handleDownloadCV = () => {
    // Create and trigger download of CV
    const link = document.createElement('a');
    link.href = '/cv'; // This will open the CV page
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
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        <Card className="p-8 md:p-16 bg-white/90 backdrop-blur-xl border border-gray-200/50 shadow-2xl rounded-3xl hover:shadow-3xl transition-all duration-700">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Section */}
            <div className="flex flex-col items-center lg:items-start space-y-8">
              <div className="relative group">
                <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-2 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  <img
                    src={profileImage}
                    alt="Muhammad Abubakkar"
                    className="w-full h-full rounded-full object-cover bg-white group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8 text-center lg:text-left">
              <div>
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-4">
                  Muhammad Abubakkar
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 font-medium mb-6">
                  Ethical Hacker & Web Developer
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">A Bit About Me</h3>
                <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                  I am an enthusiastic cybersecurity professional with 2.5+ years of experience in ethical hacking 
                  and web development. I specialize in securing digital assets while building modern, 
                  secure web applications using cutting-edge technologies.
                </p>
              </div>

              {/* Navigation Buttons */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={handleDownloadCV}
                  className="bg-gradient-to-r from-lime-400 to-lime-500 hover:from-lime-500 hover:to-lime-600 text-black font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Resume
                </Button>
                
                <Button 
                  onClick={handleViewProjects}
                  className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  <Briefcase className="w-5 h-5 mr-2" />
                  Research
                </Button>
                
                <Button 
                  onClick={handleContact}
                  className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Outreach
                </Button>
                
                <Button 
                  variant="outline"
                  className="border-2 border-gray-400 text-gray-700 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  <User className="w-5 h-5 mr-2" />
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
