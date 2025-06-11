
import { Card } from '@/components/ui/card';

export const About = () => {
  const achievements = [
    "Reported multiple real-world vulnerabilities",
    "Created and deployed several live web applications",
    "2.5+ years of cybersecurity experience",
    "Specialized in OWASP Top 10 security practices"
  ];

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            👨‍💻 Who Am I?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            My journey began with curiosity about how systems work — and more importantly, how to secure them.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-white/95 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              🔐 Cybersecurity / Ethical Hacking
            </h3>
            <div className="space-y-4">
              <p className="text-gray-600 mb-4">I specialize in:</p>
              <ul className="space-y-2 text-gray-600">
                <li>• Web Application Penetration Testing</li>
                <li>• Bug Hunting & Responsible Disclosure</li>
                <li>• Vulnerability Assessment</li>
                <li>• OWASP Top 10 & Secure Coding Practices</li>
                <li>• Red Team Tools & Methodologies</li>
              </ul>
            </div>
          </Card>

          <Card className="p-8 bg-white/95 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              🌐 Web Development
            </h3>
            <div className="space-y-4">
              <p className="text-gray-600 mb-4">Skilled in both front-end and back-end development:</p>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-700">Languages & Tech:</p>
                  <p className="text-gray-600">HTML, CSS, JavaScript, PHP, MySQL</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Tools:</p>
                  <p className="text-gray-600">Bootstrap, Git/GitHub, XAMPP, VS Code</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Specialties:</p>
                  <ul className="text-gray-600 space-y-1">
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

        <Card className="p-8 bg-white/95 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">✅ Key Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className="text-green-500 text-xl">✅</span>
                <p className="text-gray-700 font-medium">{achievement}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
