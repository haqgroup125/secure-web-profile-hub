
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github, ExternalLink, Send, MessageCircle } from 'lucide-react';

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
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
            <MessageCircle className="text-white w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Let's Connect & Create
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to turn your ideas into exceptional digital experiences
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="p-8 lg:p-12 bg-gradient-to-br from-white/90 via-blue-50/90 to-purple-50/90 backdrop-blur-lg border-2 border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
            <div className="text-center mb-12 animate-fade-in">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent mb-8">
                🚀 I'm always excited about:
              </h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {collaborationAreas.map((area, index) => (
                  <div 
                    key={index} 
                    className="group p-6 bg-gradient-to-br from-white to-blue-50 rounded-xl border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                  >
                    <div className="flex items-start space-x-4">
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">✨</span>
                      <p className="text-slate-700 font-medium leading-relaxed">{area}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Email Card */}
              <Card className="group p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white to-blue-50 border-2 border-blue-200 hover:border-blue-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-white w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Email Me</h4>
                  <p className="text-slate-600 text-sm mb-6 break-all font-medium">abubakkar.work0@gmail.com</p>
                  <Button 
                    onClick={handleEmailClick}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                    size="lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </div>
              </Card>

              {/* GitHub Card */}
              <Card className="group p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white to-purple-50 border-2 border-purple-200 hover:border-purple-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Github className="text-white w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">GitHub</h4>
                  <p className="text-slate-600 text-sm mb-6 font-medium">github.com/haqgroup125</p>
                  <Button 
                    onClick={handleGithubClick}
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                    size="lg"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View GitHub
                  </Button>
                </div>
              </Card>

              {/* Portfolio Card */}
              <Card className="group p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white to-indigo-50 border-2 border-indigo-200 hover:border-indigo-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <ExternalLink className="text-white w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Portfolio</h4>
                  <p className="text-slate-600 text-sm mb-6 font-medium">Explore all my work</p>
                  <Button 
                    onClick={handlePortfolioClick}
                    className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                    size="lg"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Explore Work
                  </Button>
                </div>
              </Card>
            </div>

            <div className="text-center animate-fade-in">
              <div className="mb-8">
                <h4 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-900 to-purple-800 bg-clip-text text-transparent mb-4">
                  Ready to Build Something Amazing?
                </h4>
                <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Let's collaborate and turn your vision into reality. I'm here to help bring your ideas to life with cutting-edge technology and creative solutions.
                </p>
              </div>
              
              <Button 
                onClick={handleEmailClick}
                size="lg" 
                className="group relative px-12 py-6 text-lg font-semibold bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 hover:from-green-600 hover:via-blue-600 hover:to-purple-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 border-0 rounded-full overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center space-x-3">
                  <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Start a Conversation</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Button>
              
              <div className="mt-6 flex items-center justify-center space-x-2 text-slate-500">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available for new projects</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
