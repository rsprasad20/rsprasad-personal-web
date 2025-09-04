import { Linkedin, Globe, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-display font-bold text-gradient-primary mb-2">
              RS Prasad
            </div>
            <p className="text-muted-foreground">
              CEO & Global Head, Atom Risk Advisory
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Shaping the Future with AI & Risk Advisory
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/rs-prasad-a7186614/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-lift"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://atomriskadvisory.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-lift"
            >
              <Globe className="w-5 h-5" />
            </a>
            <div className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-lift cursor-pointer">
              <Mail className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} RS Prasad. All rights reserved. | 
            <span className="ml-1">Built with AI-powered innovation</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;