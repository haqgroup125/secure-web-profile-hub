
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
    <section id="skills" className="py-12 sm:py-16 px-4 bg-white">
      <div className="container mx-auto max-w-sm sm:max-w-md md:max-w-4xl">
        {/* Services Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Services
            </h2>
          </div>

          <div className="space-y-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed text-center">
                  {service.description}
                </p>
                <div className="flex justify-center mt-4">
                  <button className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                    Read More
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Other Skills:
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-900 text-white text-xs font-medium rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Detailed Skills */}
        <div className="grid sm:grid-cols-2 gap-8">
          <Card className="p-6 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">
              🔐 Cybersecurity Skills
            </h3>
            <div className="space-y-4">
              {cybersecuritySkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">
              🌐 Web Development
            </h3>
            <div className="space-y-4">
              {webDevSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
