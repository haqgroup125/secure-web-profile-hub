
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const About = () => {
  const achievements = [
    "Reported multiple real-world vulnerabilities",
    "Created and deployed several live web applications",
    "2.5+ years of cybersecurity experience",
    "Specialized in OWASP Top 10 security practices"
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            👨‍💻 Who Am I?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My journey began with curiosity about how systems work — and more importantly, how to secure them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-white border-blue-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              🔐 Cybersecurity / Ethical Hacking
            </h3>
            <div className="space-y-4">
              <p className="text-slate-600 mb-4">I specialize in:</p>
              <ul className="space-y-2 text-slate-600">
                <li>• Web Application Penetration Testing</li>
                <li>• Bug Hunting & Responsible Disclosure</li>
                <li>• Vulnerability Assessment</li>
                <li>• OWASP Top 10 & Secure Coding Practices</li>
                <li>• Red Team Tools & Methodologies</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge variant="secondary">Burp Suite</Badge>
                <Badge variant="secondary">Nmap</Badge>
                <Badge variant="secondary">Metasploit</Badge>
                <Badge variant="secondary">Wireshark</Badge>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-purple-50 to-white border-purple-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              🌐 Web Development
            </h3>
            <div className="space-y-4">
              <p className="text-slate-600 mb-4">Skilled in both front-end and back-end development:</p>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-slate-700">Languages & Tech:</p>
                  <p className="text-slate-600">HTML, CSS, JavaScript, PHP, MySQL</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-700">Tools:</p>
                  <p className="text-slate-600">Bootstrap, Git/GitHub, XAMPP, VS Code</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-700">Specialties:</p>
                  <ul className="text-slate-600 space-y-1">
                    <li>• Custom dashboards (admin/teacher/student panels)</li>
                    <li>• CRUD-based web systems</li>
                    <li>• Secure login systems with hashed passwords</li>
                    <li>• Responsive UIs with modern themes</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="mt-12 p-8 bg-gradient-to-r from-green-50 to-blue-50 border-green-200 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">✅ Key Achievements</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className="text-green-500 text-xl">✅</span>
                <p className="text-slate-700">{achievement}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
