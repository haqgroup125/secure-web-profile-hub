
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export const Skills = () => {
  const cybersecuritySkills = [
    { name: "Penetration Testing", level: 90 },
    { name: "Vulnerability Assessment", level: 85 },
    { name: "OWASP Top 10", level: 95 },
    { name: "Bug Hunting", level: 80 },
    { name: "Red Team Operations", level: 75 }
  ];

  const webDevSkills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 85 },
    { name: "PHP", level: 90 },
    { name: "MySQL", level: 85 },
    { name: "Responsive Design", level: 90 }
  ];

  const tools = [
    "Burp Suite", "Nmap", "Metasploit", "Wireshark", "OWASP ZAP",
    "Git/GitHub", "Bootstrap", "XAMPP", "Visual Studio Code", "Linux"
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            🛠️ Skills & Expertise
          </h2>
          <p className="text-xl text-slate-600">
            Technical proficiencies across cybersecurity and web development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              🔐 Cybersecurity Skills
            </h3>
            <div className="space-y-6">
              {cybersecuritySkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-700">{skill.name}</span>
                    <span className="text-sm text-slate-500">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              🌐 Web Development Skills
            </h3>
            <div className="space-y-6">
              {webDevSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-700">{skill.name}</span>
                    <span className="text-sm text-slate-500">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            🔧 Tools & Technologies
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium hover:from-blue-200 hover:to-purple-200 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
