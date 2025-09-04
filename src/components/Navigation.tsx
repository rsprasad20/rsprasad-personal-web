import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-display font-bold text-gradient-primary">
          RS Prasad
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {[
            { label: 'About', id: 'about' },
            { label: 'Expertise', id: 'expertise' },
            { label: 'Experience', id: 'experience' },
            { label: 'Insights', id: 'insights' },
            { label: 'Contact', id: 'contact' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"
            >
              {item.label}
            </button>
          ))}
          
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-primary hover:bg-primary-glow text-primary-foreground glow-primary hover:shadow-glow-primary transition-all duration-300"
          >
            Connect
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;