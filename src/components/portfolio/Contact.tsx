
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
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-2xl animate-pulse opacity-20"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-1000 opacity-25"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-gradient-to-r from-rose-400 via-orange-500 to-yellow-500 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-2000 opacity-20"></div>
        <div className="absolute top-1/2 left-10 w-64 h-64 bg-gradient-to-r from-indigo-400 to-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-3000 opacity-15"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-1000 opacity-70"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping delay-2000 opacity-50"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block p-3 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full mb-6 animate-pulse shadow-2xl">
            <MessageCircle className="text-white w-10 h-10" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 animate-pulse">
            Let's Connect & Create
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to turn your ideas into exceptional digital experiences
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="p-8 lg:p-12 bg-gradient-to-br from-slate-800/90 via-purple-900/80 to-slate-800/90 backdrop-blur-xl border-2 border-purple-500/30 shadow-2xl hover:shadow-purple-500/25 transition-all duration-700 hover:-translate-y-3 rounded-3xl">
            <div className="text-center mb-12 animate-fade-in">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent mb-8 flex items-center justify-center gap-3">
                <Sparkles className="w-8 h-8 text-purple-400 animate-spin" />
                I'm always excited about:
                <Heart className="w-8 h-8 text-pink-400 animate-pulse" />
              </h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {collaborationAreas.map((area, index) => (
                  <div 
                    key={index} 
                    className="group p-6 bg-gradient-to-br from-slate-700/80 to-purple-800/60 rounded-2xl border border-cyan-400/30 hover:border-purple-400/60 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/25 backdrop-blur-sm"
                  >
                    <div className="flex items-start space-x-4">
                      <Zap className="text-cyan-400 w-6 h-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-pulse" />
                      <p className="text-slate-200 font-medium leading-relaxed group-hover:text-white transition-colors duration-300">{area}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Email Card */}
              <Card className="group p-8 text-center hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-700 hover:-translate-y-4 bg-gradient-to-br from-slate-700/90 to-cyan-900/60 border-2 border-cyan-400/40 hover:border-cyan-300/80 relative overflow-hidden rounded-2xl backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl group-hover:shadow-cyan-400/50">
                    <Mail className="text-white w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">Email Me</h4>
                  <p className="text-cyan-200 text-sm mb-6 break-all font-medium">abubakkar.work0@gmail.com</p>
                  <Button 
                    onClick={handleEmailClick}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-xl hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-500 group-hover:scale-110 rounded-xl text-lg py-3"
                    size="lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Email
                  </Button>
                </div>
              </Card>

              {/* GitHub Card */}
              <Card className="group p-8 text-center hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-700 hover:-translate-y-4 bg-gradient-to-br from-slate-700/90 to-purple-900/60 border-2 border-purple-400/40 hover:border-purple-300/80 relative overflow-hidden rounded-2xl backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl group-hover:shadow-purple-400/50">
                    <Github className="text-white w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">GitHub</h4>
                  <p className="text-purple-200 text-sm mb-6 font-medium">github.com/haqgroup125</p>
                  <Button 
                    onClick={handleGithubClick}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white shadow-xl hover:shadow-2xl hover:shadow-purple-400/50 transition-all duration-500 group-hover:scale-110 rounded-xl text-lg py-3"
                    size="lg"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View GitHub
                  </Button>
                </div>
              </Card>

              {/* Portfolio Card */}
              <Card className="group p-8 text-center hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-700 hover:-translate-y-4 bg-gradient-to-br from-slate-700/90 to-emerald-900/60 border-2 border-emerald-400/40 hover:border-emerald-300/80 relative overflow-hidden rounded-2xl backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl group-hover:shadow-emerald-400/50">
                    <ExternalLink className="text-white w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">Portfolio</h4>
                  <p className="text-emerald-200 text-sm mb-6 font-medium">Explore all my work</p>
                  <Button 
                    onClick={handlePortfolioClick}
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white shadow-xl hover:shadow-2xl hover:shadow-emerald-400/50 transition-all duration-500 group-hover:scale-110 rounded-xl text-lg py-3"
                    size="lg"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Explore Work
                  </Button>
                </div>
              </Card>
            </div>

            <div className="text-center animate-fade-in">
              <div className="mb-8">
                <h4 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mb-6 animate-pulse">
                  Ready to Build Something Amazing?
                </h4>
                <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Let's collaborate and turn your vision into reality. I'm here to help bring your ideas to life with cutting-edge technology and creative solutions.
                </p>
              </div>
              
              <Button 
                onClick={handleEmailClick}
                size="lg" 
                className="group relative px-16 py-8 text-xl font-bold bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 text-white shadow-2xl hover:shadow-3xl hover:shadow-purple-500/50 transition-all duration-700 hover:-translate-y-3 hover:scale-110 border-0 rounded-full overflow-hidden backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-purple-200/20 to-cyan-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
                <div className="relative flex items-center space-x-4">
                  <MessageCircle className="w-8 h-8 group-hover:rotate-12 group-hover:scale-125 transition-transform duration-500" />
                  <span>Start a Conversation</span>
                  <Send className="w-6 h-6 group-hover:translate-x-2 group-hover:scale-125 transition-transform duration-500" />
                </div>
              </Button>
              
              <div className="mt-8 flex items-center justify-center space-x-3 text-slate-400">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-600"></div>
                </div>
                <span className="text-lg font-semibold text-slate-300">Available for new projects</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
