
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
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Let's Connect & Create
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to turn your ideas into exceptional digital experiences
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="p-12 bg-white/90 backdrop-blur-xl border border-gray-200/50 shadow-xl rounded-3xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-8">
                I'm always excited about:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {collaborationAreas.map((area, index) => (
                  <div 
                    key={index} 
                    className="p-6 bg-slate-50 rounded-2xl border border-gray-200"
                  >
                    <p className="text-slate-700 font-medium leading-relaxed">{area}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Email Card */}
              <Card className="p-8 text-center bg-white shadow-lg rounded-2xl border border-gray-200">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
                  <Mail className="text-white w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-3">Email Me</h4>
                <p className="text-slate-600 text-sm mb-6 break-all font-medium">abubakkar.work0@gmail.com</p>
                <Button 
                  onClick={handleEmailClick}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300 rounded-xl text-lg py-3"
                  size="lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
              </Card>

              {/* GitHub Card */}
              <Card className="p-8 text-center bg-white shadow-lg rounded-2xl border border-gray-200">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600 rounded-full mb-6">
                  <Github className="text-white w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-3">GitHub</h4>
                <p className="text-slate-600 text-sm mb-6 font-medium">github.com/haqgroup125</p>
                <Button 
                  onClick={handleGithubClick}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg transition-all duration-300 rounded-xl text-lg py-3"
                  size="lg"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View GitHub
                </Button>
              </Card>

              {/* Portfolio Card */}
              <Card className="p-8 text-center bg-white shadow-lg rounded-2xl border border-gray-200">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-6">
                  <ExternalLink className="text-white w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-3">Portfolio</h4>
                <p className="text-slate-600 text-sm mb-6 font-medium">Explore all my work</p>
                <Button 
                  onClick={handlePortfolioClick}
                  className="w-full bg-green-600 hover:bg-green-700 text-white shadow-lg transition-all duration-300 rounded-xl text-lg py-3"
                  size="lg"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Explore Work
                </Button>
              </Card>
            </div>

            <div className="text-center">
              <h4 className="text-3xl font-bold text-slate-900 mb-6">
                Ready to Build Something Amazing?
              </h4>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's collaborate and turn your vision into reality. I'm here to help bring your ideas to life with cutting-edge technology and creative solutions.
              </p>
              
              <Button 
                onClick={handleEmailClick}
                size="lg" 
                className="px-16 py-8 text-2xl font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-xl transition-all duration-300 rounded-full"
              >
                <MessageCircle className="w-8 h-8 mr-4" />
                Start a Conversation
                <Send className="w-6 h-6 ml-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
