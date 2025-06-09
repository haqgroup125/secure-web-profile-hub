
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github, ExternalLink, Send, MessageCircle, Sparkles, Zap, Heart } from 'lucide-react';

export const Contact = () => {
  const collaborationAreas = [
    "Freelance projects (secure web apps, testing, automation)",
    "Collaboration with developers and tech teams", 
    "Learning and building new things!"
  ];

  const handleEmailClick = () => {
    window.location.href = 'mailto:abubakkar.work0@gmail.com?subject=Let\'s Collaborate&body=Hi Muhammad,%0D%0A%0D%0AI would like to discuss a potential collaboration opportunity.%0D%0A%0D%0ABest regards,';
  };

  const handleGithubClick = () => {
    window.open('https://github.com/haqgroup125', '_blank');
  };

  const handlePortfolioClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-2 sm:px-4 bg-gradient-to-br from-slate-900 via-rose-900/50 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Animation with vibrant colors */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600 rounded-full mix-blend-multiply filter blur-xl sm:blur-2xl animate-pulse opacity-30"></div>
        <div className="absolute top-32 sm:top-40 right-4 sm:right-20 w-56 sm:w-80 h-56 sm:h-80 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 rounded-full mix-blend-multiply filter blur-xl sm:blur-2xl animate-pulse delay-1000 opacity-35"></div>
        <div className="absolute -bottom-4 sm:-bottom-8 left-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 rounded-full mix-blend-multiply filter blur-xl sm:blur-2xl animate-pulse delay-2000 opacity-25"></div>
        <div className="absolute top-1/2 left-4 sm:left-10 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-r from-lime-400 to-emerald-500 rounded-full mix-blend-multiply filter blur-lg sm:blur-xl animate-pulse delay-3000 opacity-20"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-80"></div>
        <div className="absolute top-3/4 right-1/6 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-1000 opacity-90"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-2000 opacity-70"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-block p-3 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 rounded-full mb-4 sm:mb-6 animate-pulse shadow-2xl">
            <MessageCircle className="text-white w-8 sm:w-10 h-8 sm:h-10" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 sm:mb-6 animate-pulse">
            Let's Connect & Create
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
            Ready to turn your ideas into exceptional digital experiences
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="p-4 sm:p-8 lg:p-12 bg-gradient-to-br from-slate-800/95 via-emerald-900/80 to-slate-800/95 backdrop-blur-xl border-2 border-emerald-500/40 shadow-2xl hover:shadow-emerald-500/30 transition-all duration-700 hover:-translate-y-1 sm:hover:-translate-y-3 rounded-2xl sm:rounded-3xl">
            <div className="text-center mb-8 sm:mb-12 animate-fade-in">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent mb-6 sm:mb-8 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
                <Sparkles className="w-6 sm:w-8 h-6 sm:h-8 text-emerald-400 animate-spin" />
                <span className="text-center">I'm always excited about:</span>
                <Heart className="w-6 sm:w-8 h-6 sm:h-8 text-pink-400 animate-pulse" />
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
                {collaborationAreas.map((area, index) => (
                  <div 
                    key={index} 
                    className="group p-4 sm:p-6 bg-gradient-to-br from-slate-700/90 to-emerald-800/70 rounded-xl sm:rounded-2xl border border-emerald-400/40 hover:border-cyan-400/70 transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-emerald-500/30 backdrop-blur-sm"
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <Zap className="text-emerald-400 w-5 sm:w-6 h-5 sm:h-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-pulse flex-shrink-0 mt-0.5" />
                      <p className="text-slate-200 font-medium leading-relaxed group-hover:text-white transition-colors duration-300 text-sm sm:text-base">{area}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
              {/* Email Card */}
              <Card className="group p-4 sm:p-6 lg:p-8 text-center hover:shadow-xl sm:hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-700 hover:-translate-y-2 sm:hover:-translate-y-4 bg-gradient-to-br from-slate-700/95 to-emerald-900/70 border-2 border-emerald-400/50 hover:border-emerald-300/80 relative overflow-hidden rounded-xl sm:rounded-2xl backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full mb-4 sm:mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl group-hover:shadow-emerald-400/50">
                    <Mail className="text-white w-8 sm:w-10 h-8 sm:h-10" />
                  </div>
                  <h4 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3">Email Me</h4>
                  <p className="text-emerald-200 text-xs sm:text-sm mb-4 sm:mb-6 break-all font-medium px-2">abubakkar.work0@gmail.com</p>
                  <Button 
                    onClick={handleEmailClick}
                    className="w-full bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-white shadow-xl hover:shadow-2xl hover:shadow-emerald-400/50 transition-all duration-500 group-hover:scale-110 rounded-lg sm:rounded-xl text-sm sm:text-lg py-2 sm:py-3"
                    size="lg"
                  >
                    <Send className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                    Send Email
                  </Button>
                </div>
              </Card>

              {/* GitHub Card */}
              <Card className="group p-4 sm:p-6 lg:p-8 text-center hover:shadow-xl sm:hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-700 hover:-translate-y-2 sm:hover:-translate-y-4 bg-gradient-to-br from-slate-700/95 to-cyan-900/70 border-2 border-cyan-400/50 hover:border-cyan-300/80 relative overflow-hidden rounded-xl sm:rounded-2xl backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4 sm:mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl group-hover:shadow-cyan-400/50">
                    <Github className="text-white w-8 sm:w-10 h-8 sm:h-10" />
                  </div>
                  <h4 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3">GitHub</h4>
                  <p className="text-cyan-200 text-xs sm:text-sm mb-4 sm:mb-6 font-medium">github.com/haqgroup125</p>
                  <Button 
                    onClick={handleGithubClick}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-xl hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-500 group-hover:scale-110 rounded-lg sm:rounded-xl text-sm sm:text-lg py-2 sm:py-3"
                    size="lg"
                  >
                    <ExternalLink className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                    View GitHub
                  </Button>
                </div>
              </Card>

              {/* Portfolio Card */}
              <Card className="group p-4 sm:p-6 lg:p-8 text-center hover:shadow-xl sm:hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-700 hover:-translate-y-2 sm:hover:-translate-y-4 bg-gradient-to-br from-slate-700/95 to-pink-900/70 border-2 border-pink-400/50 hover:border-pink-300/80 relative overflow-hidden rounded-xl sm:rounded-2xl backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-4 sm:mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl group-hover:shadow-pink-400/50">
                    <ExternalLink className="text-white w-8 sm:w-10 h-8 sm:h-10" />
                  </div>
                  <h4 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3">Portfolio</h4>
                  <p className="text-pink-200 text-xs sm:text-sm mb-4 sm:mb-6 font-medium">Explore all my work</p>
                  <Button 
                    onClick={handlePortfolioClick}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white shadow-xl hover:shadow-2xl hover:shadow-pink-400/50 transition-all duration-500 group-hover:scale-110 rounded-lg sm:rounded-xl text-sm sm:text-lg py-2 sm:py-3"
                    size="lg"
                  >
                    <ExternalLink className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                    Explore Work
                  </Button>
                </div>
              </Card>
            </div>

            <div className="text-center animate-fade-in">
              <div className="mb-6 sm:mb-8">
                <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent mb-4 sm:mb-6 animate-pulse">
                  Ready to Build Something Amazing?
                </h4>
                <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                  Let's collaborate and turn your vision into reality. I'm here to help bring your ideas to life with cutting-edge technology and creative solutions.
                </p>
              </div>
              
              <Button 
                onClick={handleEmailClick}
                size="lg" 
                className="group relative px-8 sm:px-12 lg:px-16 py-4 sm:py-6 lg:py-8 text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 hover:from-emerald-400 hover:via-cyan-400 hover:to-blue-500 text-white shadow-2xl hover:shadow-3xl hover:shadow-emerald-500/50 transition-all duration-700 hover:-translate-y-2 sm:hover:-translate-y-3 hover:scale-105 sm:hover:scale-110 border-0 rounded-full overflow-hidden backdrop-blur-sm w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-cyan-200/20 to-emerald-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
                <div className="relative flex items-center justify-center space-x-2 sm:space-x-4">
                  <MessageCircle className="w-6 sm:w-8 h-6 sm:h-8 group-hover:rotate-12 group-hover:scale-125 transition-transform duration-500" />
                  <span>Start a Conversation</span>
                  <Send className="w-5 sm:w-6 h-5 sm:h-6 group-hover:translate-x-2 group-hover:scale-125 transition-transform duration-500" />
                </div>
              </Button>
              
              <div className="mt-6 sm:mt-8 flex items-center justify-center space-x-3 text-slate-400">
                <div className="flex space-x-1">
                  <div className="w-2 sm:w-3 h-2 sm:h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                  <div className="w-2 sm:w-3 h-2 sm:h-3 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
                  <div className="w-2 sm:w-3 h-2 sm:h-3 bg-blue-400 rounded-full animate-pulse delay-600"></div>
                </div>
                <span className="text-base sm:text-lg font-semibold text-slate-300">Available for new projects</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
