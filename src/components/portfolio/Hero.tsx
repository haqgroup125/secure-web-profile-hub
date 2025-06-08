
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Code, Shield, Zap, Star } from 'lucide-react';

interface HeroProps {
  profileImage: string;
}

export const Hero = ({ profileImage }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-1000 opacity-25"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-rose-400 via-orange-500 to-yellow-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000 opacity-15"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-1000 opacity-70"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping delay-2000 opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-3000 opacity-60"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <Card className="max-w-5xl mx-auto p-8 md:p-16 bg-gradient-to-br from-slate-800/90 via-purple-900/60 to-slate-800/90 backdrop-blur-xl border-2 border-purple-500/30 shadow-2xl rounded-3xl hover:shadow-purple-500/25 transition-all duration-700 hover:-translate-y-2">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-8 h-8 text-yellow-400 animate-pulse" />
                  <span className="text-slate-300 text-lg">Welcome to my digital world</span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  MUHAMMAD
                  <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                    ABUBAKKAR
                  </span>
                </h1>
                <div className="flex items-center gap-3 text-xl md:text-2xl font-semibold">
                  <Shield className="w-8 h-8 text-cyan-400 animate-pulse" />
                  <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                    Ethical Hacker & Web Developer
                  </span>
                  <Code className="w-8 h-8 text-purple-400 animate-pulse" />
                </div>
              </div>
              
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                Enthusiastic cybersecurity professional with 2.5+ years of experience in ethical hacking 
                and web development. I help protect digital assets while building secure, modern web applications.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 text-white text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-1"
                >
                  <Zap className="w-6 h-6 mr-2" />
                  View My Work
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-purple-400/60 text-purple-200 hover:border-cyan-400/80 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-cyan-600/20 hover:text-white text-lg px-8 py-4 rounded-full transition-all duration-500 hover:scale-105 backdrop-blur-sm hover:-translate-y-1"
                >
                  Download CV
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center animate-fade-in">
              <div className="relative group">
                <div className="w-80 h-80 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-2 animate-pulse shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-500">
                  <img
                    src={profileImage}
                    alt="Muhammad Abubakkar"
                    className="w-full h-full rounded-full object-cover bg-slate-800 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">🔐</span>
                </div>
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl animate-pulse group-hover:scale-110 transition-transform duration-300">
                  <Code className="text-white w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
