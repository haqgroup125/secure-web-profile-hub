
import { useState, useEffect } from 'react';
import { Header } from '@/components/portfolio/Header';
import { Hero } from '@/components/portfolio/Hero';
import { About } from '@/components/portfolio/About';
import { Skills } from '@/components/portfolio/Skills';
import { Projects } from '@/components/portfolio/Projects';
import { Contact } from '@/components/portfolio/Contact';
import { PhotoUpload } from '@/components/portfolio/PhotoUpload';

const Index = () => {
  const [profileImage, setProfileImage] = useState<string>('/placeholder.svg');

  // Load saved profile image from localStorage on component mount
  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage && savedImage !== '/placeholder.svg') {
      setProfileImage(savedImage);
    }
  }, []);

  // Handle image upload and save to localStorage
  const handleImageUpload = (imageUrl: string) => {
    setProfileImage(imageUrl);
    localStorage.setItem('profileImage', imageUrl);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Hero profileImage={profileImage} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <PhotoUpload onImageUpload={handleImageUpload} />
    </div>
  );
};

export default Index;
