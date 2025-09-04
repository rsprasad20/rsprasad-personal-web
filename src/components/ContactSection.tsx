import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Linkedin, 
  MapPin, 
  Phone, 
  Send, 
  Globe, 
  MessageSquare,
  Calendar,
  Building2
} from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'Connect via LinkedIn',
      description: 'For business inquiries and collaborations',
      action: 'Send Message',
      primary: true
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'rs-prasad-a7186614',
      description: 'Professional networking and updates',
      action: 'Connect',
      href: 'https://www.linkedin.com/in/rs-prasad-a7186614/',
      primary: false
    },
    {
      icon: Building2,
      title: 'Atom Risk Advisory',
      value: 'Global Operations',
      description: 'Corporate headquarters and services',
      action: 'Learn More',
      primary: false
    }
  ];

  const services = [
    'AI Strategy & Implementation',
    'Risk Advisory Services',
    'Cross-Border Solutions',
    'Wealth Management',
    'Digital Transformation',
    'Strategic Leadership Consulting'
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Let's <span className="text-gradient-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to explore AI-driven solutions for your financial services needs? Let's discuss how we can transform your business together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <Card 
              key={index} 
              className={`glass-effect p-8 hover-lift border-gradient group transition-all duration-500 ${
                method.primary ? 'lg:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="animate-fade-in h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:animate-glow-pulse ${
                    method.primary ? 'bg-gradient-primary' : 'bg-gradient-secondary'
                  }`}>
                    <method.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold text-gradient-primary mb-1">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {method.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6 flex-1">
                  <p className="text-foreground font-medium mb-2">
                    {method.value}
                  </p>
                </div>

                <Button 
                  className={`w-full transition-all duration-300 ${
                    method.primary 
                      ? 'bg-primary hover:bg-primary-glow text-primary-foreground glow-primary hover:shadow-glow-primary' 
                      : 'bg-secondary hover:bg-secondary-glow text-secondary-foreground glow-secondary hover:shadow-glow-secondary'
                  }`}
                  onClick={() => {
                    if (method.href) {
                      window.open(method.href, '_blank');
                    }
                  }}
                  disabled={!method.href}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {method.action}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Services Overview */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="glass-effect p-8 border-gradient animate-slide-in-left">
            <h3 className="text-2xl font-display font-bold text-gradient-secondary mb-6">
              How I Can Help
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-hero transition-all duration-300 hover:bg-primary/10">
                  <div className="w-2 h-2 bg-primary rounded-full glow-primary" />
                  <span className="text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="glass-effect p-8 border-gradient animate-slide-in-right">
            <h3 className="text-2xl font-display font-bold text-gradient-primary mb-6">
              Let's Discuss
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Strategic Consulting</h4>
                  <p className="text-muted-foreground text-sm">AI implementation and digital transformation strategies</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Speaking Engagements</h4>
                  <p className="text-muted-foreground text-sm">Conferences, workshops, and thought leadership events</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Partnership Opportunities</h4>
                  <p className="text-muted-foreground text-sm">Collaborations in AI and financial services innovation</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Global Presence */}
        <div className="text-center animate-fade-in">
          <Card className="glass-effect p-8 border-gradient max-w-4xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-gradient-secondary mb-6">
              Global Presence
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Asia Pacific', 'Middle East', 'Africa', 'Global Markets'].map((region, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="border-primary/30 text-primary hover:bg-primary/10 px-4 py-2 text-sm flex items-center gap-2 transition-all duration-300 hover-lift"
                >
                  <MapPin className="w-3 h-3" />
                  {region}
                </Badge>
              ))}
            </div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Operating across multiple time zones to serve clients globally with 24/7 accessibility and localized expertise.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;