
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Code, Shield, Zap, Star } from 'lucide-react';

interface HeroProps {
  profileImage: string;
}

export const Hero = ({ profileImage }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-2 sm:px-4 bg-gradient-to-br from-slate-900 via-rose-900/60 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background animations with vibrant colors */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-56 sm:w-80 h-56 sm:h-80 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 rounded-full mix-blend-multiply filter blur-xl sm:blur-2xl animate-pulse delay-1000 opacity-35"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl animate-pulse delay-2000 opacity-25"></div>
        <div className="absolute top-1/4 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-r from-lime-400 via-emerald-500 to-teal-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-3000 opacity-20"></div>
      </div>

      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-80"></div>
        <div className="absolute top-3/4 right-1/6 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-1000 opacity-90"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-2000 opacity-70"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-orange-400 rounded-full animate-ping delay-3000 opacity-80"></div>
        <div className="absolute top-1/3 left-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-4000 opacity-60"></div>
      </div>

      <div className="container mx-auto relative z-10 px-2 sm:px-4">
        <Card className="max-w-6xl mx-auto p-4 sm:p-8 md:p-12 lg:p-16 bg-gradient-to-br from-slate-800/95 via-emerald-900/70 to-slate-800/95 backdrop-blur-xl border-2 border-emerald-500/40 shadow-2xl rounded-2xl sm:rounded-3xl hover:shadow-emerald-500/30 transition-all duration-700 hover:-translate-y-1 sm:hover:-translate-y-2">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 animate-fade-in order-2 lg:order-1">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Star className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-400 animate-pulse" />
                  <span className="text-slate-300 text-base sm:text-lg lg:text-xl text-center lg:text-left">Welcome to my digital world</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight text-center lg:text-left">
                  MUHAMMAD
                  <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
                    ABUBAKKAR
                  </span>
                </h1>
                <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-lg sm:text-xl lg:text-2xl font-semibold flex-wrap">
                  <Shield className="w-6 sm:w-8 h-6 sm:h-8 text-emerald-400 animate-pulse" />
                  <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent text-center lg:text-left">
                    Ethical Hacker & Web Developer
                  </span>
                  <Code className="w-6 sm:w-8 h-6 sm:h-8 text-cyan-400 animate-pulse" />
                </div>
              </div>
              
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
                Enthusiastic cybersecurity professional with 2.5+ years of experience in ethical hacking 
                and web development. I help protect digital assets while building secure, modern web applications.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 hover:from-emerald-400 hover:via-cyan-400 hover:to-blue-500 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-2xl hover:shadow-emerald-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-1"
                >
                  <Zap className="w-5 sm:w-6 h-5 sm:h-6 mr-2" />
                  View My Work
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto border-2 border-emerald-400/60 text-emerald-200 hover:border-cyan-400/80 hover:bg-gradient-to-r hover:from-emerald-600/20 hover:to-cyan-600/20 hover:text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-500 hover:scale-105 backdrop-blur-sm hover:-translate-y-1"
                >
                  Download CV
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center animate-fade-in order-1 lg:order-2">
              <div className="relative group">
                <div className="w-64 sm:w-80 lg:w-80 xl:w-96 h-64 sm:h-80 lg:h-80 xl:h-96 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600 p-1.5 sm:p-2 animate-pulse shadow-2xl group-hover:shadow-emerald-500/50 transition-all duration-500">
                  <img
                    src={profileImage}
                    alt="Muhammad Abubakkar"
                    className="w-full h-full rounded-full object-cover bg-slate-800 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xl sm:text-2xl">🔐</span>
                </div>
                <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center shadow-xl animate-pulse group-hover:scale-110 transition-transform duration-300">
                  <Code className="text-white w-4 sm:w-6 h-4 sm:h-6" />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
