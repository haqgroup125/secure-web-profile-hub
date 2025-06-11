
import { useState } from 'react';
import { Menu, X, Share, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'About' },
    { href: '#skills', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button - Left */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>

          {/* Logo/Title - Center on mobile, Left on desktop */}
          <div className="flex-1 md:flex-none text-center md:text-left">
            <div className="text-xl sm:text-2xl font-bold text-gray-900">
              Muhammad Abubakkar
            </div>
          </div>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-base"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Icons - Right */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="p-2 hover:bg-gray-100"
              onClick={() => window.open('https://linkedin.com/in/muhammad-abubakkar', '_blank')}
            >
              <Linkedin size={20} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="p-2 hover:bg-gray-100"
            >
              <Share size={20} />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-3 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
