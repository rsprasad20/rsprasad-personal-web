import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-primary mr-3 animate-glow-pulse" />
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              AI • Risk Advisory • Leadership
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            <span className="text-gradient-primary block">RS Prasad</span>
            <span className="text-foreground/90 text-3xl md:text-4xl font-medium block mt-4">
              CEO & Global Head, Atom Risk Advisory
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gradient-secondary font-semibold mb-4">
            Shaping the Future with AI & Risk Advisory
          </p>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Transforming financial services through innovative AI solutions and strategic leadership. 
            30+ years of expertise in wealth protection, legacy planning, and cross-border solutions 
            for high-net-worth clients across Asia, Middle East, and Africa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection('about')}
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4 text-lg font-semibold glow-primary hover:shadow-glow-primary transition-all duration-300 hover-lift"
            >
              Explore My Work
            </Button>
            
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 text-lg font-semibold border-gradient hover-lift"
            >
              Let's Connect
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-primary/60 hover:text-primary transition-colors duration-300"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;