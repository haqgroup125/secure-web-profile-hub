
import { Button } from '@/components/ui/button';
import { Download, Mail, Github, Linkedin } from 'lucide-react';

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

  const handleContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:abubakkar.work0@gmail.com';
  };

  const handleGithubClick = () => {
    window.open('https://github.com/haqgroup125', '_blank');
  };

  const handleLinkedinClick = () => {
    window.open('https://linkedin.com/in/muhammad-abubakkar', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-12 border border-white/20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Profile Image */}
              <div className="flex justify-center">
                <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-2 shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Muhammad Abubakkar"
                    className="w-full h-full rounded-full object-cover bg-white"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-8">
                <div>
                  <p className="text-lg text-gray-600 mb-2">Hello, I'm</p>
                  <h1 className="text-5xl font-bold text-gray-900 mb-4">
                    Muhammad Abubakkar
                  </h1>
                  <p className="text-2xl text-gray-700 font-medium mb-6">
                    Ethical Hacker & Web Developer
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button 
                    onClick={handleDownloadCV}
                    className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-full text-lg"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                  </Button>
                  
                  <Button 
                    onClick={handleContact}
                    variant="outline"
                    className="px-8 py-4 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold rounded-full text-lg"
                  >
                    Contact Info
                  </Button>
                </div>

                {/* Social Links */}
                <div className="flex gap-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleLinkedinClick}
                    className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
                  >
                    <Linkedin className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleGithubClick}
                    className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
                  >
                    <Github className="w-6 h-6" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/20">
            <div className="flex flex-col items-center text-center space-y-6">
              {/* Profile Image */}
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-1 shadow-xl">
                <img
                  src={profileImage}
                  alt="Muhammad Abubakkar"
                  className="w-full h-full rounded-full object-cover bg-white"
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <p className="text-sm sm:text-base text-gray-600 mb-1">Hello, I'm</p>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Muhammad Abubakkar
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-700 font-medium">
                    Ethical Hacker & Web Developer
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                  <Button 
                    onClick={handleDownloadCV}
                    className="flex-1 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-full"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </Button>
                  
                  <Button 
                    onClick={handleContact}
                    variant="outline"
                    className="flex-1 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold py-3 rounded-full"
                  >
                    Contact Info
                  </Button>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleLinkedinClick}
                    className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleGithubClick}
                    className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
