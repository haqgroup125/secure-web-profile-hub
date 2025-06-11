
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export const Skills = () => {
  const services = [
    {
      title: "UI/UX Designer",
      description: "User interface design or user interface engineering is the design of user interfaces for machines and software, such as computers, home appliances, mobile devices, and other electronic devices, with the focus on maximizing usability and the user experience."
    },
    {
      title: "Web Developer", 
      description: "Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development."
    }
  ];

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
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Services Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Experience
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 bg-white/95 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center mb-6">
                  {service.description}
                </p>
                <div className="flex justify-center">
                  <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                    Read More
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
              Other Skills
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/90 text-gray-900 text-sm font-medium rounded-full shadow-lg"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Detailed Skills */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-8 bg-white/95 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              🔐 Cybersecurity Skills
            </h3>
            <div className="space-y-6">
              {cybersecuritySkills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-gray-700">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-3" />
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 bg-white/95 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              🌐 Web Development
            </h3>
            <div className="space-y-6">
              {webDevSkills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-gray-700">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-3" />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
