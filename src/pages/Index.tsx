
import { Header } from '@/components/portfolio/Header';
import { Hero } from '@/components/portfolio/Hero';
import { About } from '@/components/portfolio/About';
import { Skills } from '@/components/portfolio/Skills';
import { Projects } from '@/components/portfolio/Projects';
import { Contact } from '@/components/portfolio/Contact';

const Index = () => {
  const profileImage = '/lovable-uploads/a661e938-71ff-4e2f-b5c3-5bcbdf3e00d7.png';

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero profileImage={profileImage} />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
