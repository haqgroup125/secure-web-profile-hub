
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const Contact = () => {
  const collaborationAreas = [
    "Freelance projects (secure web apps, testing, automation)",
    "Collaboration with developers and tech teams",
    "Learning and building new things!"
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            💬 Let's Connect
          </h2>
          <p className="text-xl text-slate-600">
            Ready to collaborate on your next project
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-white to-blue-50 border-blue-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">I'm always open to:</h3>
              <div className="space-y-3">
                {collaborationAreas.map((area, index) => (
                  <div key={index} className="flex items-start justify-center space-x-3">
                    <span className="text-blue-500 text-xl">•</span>
                    <p className="text-slate-700 text-lg">{area}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">📧</div>
                <h4 className="font-semibold text-slate-900 mb-2">Email</h4>
                <p className="text-slate-600 text-sm break-all">abubakkar.work0@gmail.com</p>
                <Button className="mt-4 w-full" variant="outline" size="sm">
                  Send Email
                </Button>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🌐</div>
                <h4 className="font-semibold text-slate-900 mb-2">GitHub</h4>
                <p className="text-slate-600 text-sm">github.com/haqgroup125</p>
                <Button className="mt-4 w-full" variant="outline" size="sm">
                  View GitHub
                </Button>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">💼</div>
                <h4 className="font-semibold text-slate-900 mb-2">Portfolio</h4>
                <p className="text-slate-600 text-sm">View all my work</p>
                <Button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" size="sm">
                  Explore Work
                </Button>
              </Card>
            </div>

            <div className="text-center mt-8">
              <p className="text-slate-600 mb-4">
                Let's build something amazing together!
              </p>
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                Start a Conversation
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
