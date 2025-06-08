
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface HeroProps {
  profileImage: string;
}

export const Hero = ({ profileImage }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                  MUHAMMAD
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    ABUBAKKAR
                  </span>
                </h1>
                <p className="text-xl text-blue-600 font-semibold">👨‍💻 Ethical Hacker & Web Developer</p>
              </div>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Enthusiastic cybersecurity professional with 2.5+ years of experience in ethical hacking 
                and web development. I help protect digital assets while building secure, modern web applications.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  View My Work
                </Button>
                <Button variant="outline" size="lg">
                  Download CV
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                  <img
                    src={profileImage}
                    alt="Muhammad Abubakkar"
                    className="w-full h-full rounded-full object-cover bg-white"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🔐</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
