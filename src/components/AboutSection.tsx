import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Globe, Users, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: TrendingUp, label: 'Years Experience', value: '30+' },
    { icon: Globe, label: 'Global Markets', value: 'Asia, MENA, Africa' },
    { icon: Building2, label: 'Industry Focus', value: 'Financial Services' },
    { icon: Users, label: 'Client Segment', value: 'High Net Worth' }
  ];

  const expertiseAreas = [
    'AI Solutions & Strategy',
    'Risk Advisory',
    'Wealth Protection',
    'Legacy Planning',
    'Cross-border Solutions',
    'Digital Transformation',
    'Strategic Leadership',
    'Market Expansion'
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-gradient-primary">About</span> RS Prasad
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A visionary leader transforming financial services through innovative AI solutions and strategic excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="animate-slide-in-left">
            <Card className="glass-effect p-8 border-gradient hover-lift">
              <h3 className="text-2xl font-display font-bold text-gradient-secondary mb-6">
                Professional Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                RS Prasad is a seasoned business leader with over 30 years of experience across financial services and FMCG. 
                He brings deep expertise in insurance, with a focus on wealth protection, legacy planning, and cross-border 
                solutions for high-net-worth clients.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As Global Head of Risk Advisory at Atom, he drives strategic growth and complex insurance structuring 
                across multiple jurisdictions, delivering long-term value for clients and stakeholders while pioneering 
                AI-driven solutions in the financial services sector.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                His career spans leadership roles across Asia, the Middle East, and Africa, where he has consistently 
                delivered business transformation, digital innovation, and operational excellence across diverse markets 
                and regulatory environments.
              </p>
            </Card>
          </div>

          <div className="animate-slide-in-right">
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Card key={index} className="glass-effect p-6 text-center hover-lift border-gradient">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gradient-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>

            <Card className="glass-effect p-6 border-gradient">
              <h4 className="text-lg font-display font-semibold text-gradient-secondary mb-4">
                Core Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {expertiseAreas.map((area, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="border-primary/30 text-primary hover:bg-primary/10 transition-colors duration-300"
                  >
                    {area}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;