
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github, ExternalLink, Send, MessageCircle, Linkedin } from 'lucide-react';

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

  const handleLinkedinClick = () => {
    window.open('https://linkedin.com/in/muhammad-abubakkar', '_blank');
  };

  const handlePortfolioClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Connect & Create
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Ready to turn your ideas into exceptional digital experiences
          </p>
        </div>

        <Card className="p-8 sm:p-12 bg-white/95 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              I'm always excited about:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {collaborationAreas.map((area, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-gray-50 rounded-2xl border border-gray-200"
                >
                  <p className="text-gray-700 font-medium leading-relaxed">{area}</p>
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
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Email Me</h4>
              <p className="text-gray-600 text-sm mb-6 break-all font-medium">abubakkar.work0@gmail.com</p>
              <Button 
                onClick={handleEmailClick}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300 rounded-xl text-lg py-3"
                size="lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Email
              </Button>
            </Card>

            {/* LinkedIn Card */}
            <Card className="p-8 text-center bg-white shadow-lg rounded-2xl border border-gray-200">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-700 rounded-full mb-6">
                <Linkedin className="text-white w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">LinkedIn</h4>
              <p className="text-gray-600 text-sm mb-6 font-medium">Connect with me</p>
              <Button 
                onClick={handleLinkedinClick}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white shadow-lg transition-all duration-300 rounded-xl text-lg py-3"
                size="lg"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Connect
              </Button>
            </Card>

            {/* GitHub Card */}
            <Card className="p-8 text-center bg-white shadow-lg rounded-2xl border border-gray-200">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-900 rounded-full mb-6">
                <Github className="text-white w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">GitHub</h4>
              <p className="text-gray-600 text-sm mb-6 font-medium">github.com/haqgroup125</p>
              <Button 
                onClick={handleGithubClick}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white shadow-lg transition-all duration-300 rounded-xl text-lg py-3"
                size="lg"
              >
                <Github className="w-5 h-5 mr-2" />
                View GitHub
              </Button>
            </Card>
          </div>

          <div className="text-center">
            <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Ready to Build Something Amazing?
            </h4>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's collaborate and turn your vision into reality. I'm here to help bring your ideas to life with cutting-edge technology and creative solutions.
            </p>
            
            <Button 
              onClick={handleEmailClick}
              size="lg" 
              className="px-12 py-6 text-xl font-bold bg-gray-900 hover:bg-gray-800 text-white shadow-xl transition-all duration-300 rounded-full"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Start a Conversation
              <Send className="w-5 h-5 ml-3" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};
