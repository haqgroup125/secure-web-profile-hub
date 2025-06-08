
import { useState } from 'react';
import { Header } from '@/components/portfolio/Header';
import { Hero } from '@/components/portfolio/Hero';
import { About } from '@/components/portfolio/About';
import { Skills } from '@/components/portfolio/Skills';
import { Projects } from '@/components/portfolio/Projects';
import { Contact } from '@/components/portfolio/Contact';
import { PhotoUpload } from '@/components/portfolio/PhotoUpload';

const Index = () => {
  const [profileImage, setProfileImage] = useState<string>('/placeholder.svg');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Hero profileImage={profileImage} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <PhotoUpload onImageUpload={setProfileImage} />
    </div>
  );
};

export default Index;
