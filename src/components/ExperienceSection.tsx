import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Building, Award } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      period: '2020 - Present',
      company: 'Atom Risk Advisory',
      position: 'CEO & Global Head',
      location: 'Global Operations',
      description: 'Leading strategic growth and innovation in risk advisory services, spearheading AI-driven solutions for complex insurance structuring across multiple jurisdictions.',
      achievements: [
        'Drove 300% growth in cross-border client solutions',
        'Pioneered AI-powered risk assessment tools',
        'Expanded operations across 15+ countries',
        'Built world-class advisory team'
      ],
      type: 'current'
    },
    {
      period: '2018 - 2020',
      company: 'Continental Financial Services',
      position: 'Director, Alternate Channels',
      location: 'Asia Pacific',
      description: 'Led distribution expansion and digital transformation initiatives, revolutionizing client acquisition and service delivery models.',
      achievements: [
        'Launched digital-first distribution channels',
        'Achieved 250% increase in client acquisitions',
        'Implemented advanced CRM systems',
        'Established strategic partnerships'
      ],
      type: 'past'
    },
    {
      period: '2015 - 2018',
      company: 'Zurich International Life',
      position: 'Senior Vice President',
      location: 'Middle East & Africa',
      description: 'Managed strategic business development and market expansion across MENA region, focusing on high-net-worth client solutions.',
      achievements: [
        'Established operations in 8 new markets',
        'Developed UHNW client servicing model',
        'Created regulatory compliance framework',
        'Built regional leadership team'
      ],
      type: 'past'
    },
    {
      period: '2010 - 2015',
      company: 'Asian Paints',
      position: 'Regional Business Head',
      location: 'South Asia',
      description: 'Led business transformation and market expansion across multiple countries, delivering exceptional growth and operational excellence.',
      achievements: [
        'Delivered 400% revenue growth',
        'Launched innovative product lines',
        'Established manufacturing facilities',
        'Created distribution networks'
      ],
      type: 'past'
    }
  ];

  const recognitions = [
    'Global Insurance Leader of the Year 2023',
    'Digital Innovation Excellence Award 2022',
    'Asia Pacific Business Leader 2021',
    'Cross-Border Solutions Pioneer 2020'
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Career <span className="text-gradient-primary">Highlights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three decades of transformative leadership across global markets and industries
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative animate-slide-in-left" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-2 ${
                  exp.type === 'current' 
                    ? 'bg-primary border-primary glow-primary animate-glow-pulse' 
                    : 'bg-secondary border-secondary'
                }`} />

                <div className="ml-16">
                  <Card className="glass-effect p-8 hover-lift border-gradient">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="text-primary font-medium">{exp.period}</span>
                          {exp.type === 'current' && (
                            <Badge className="bg-primary text-primary-foreground text-xs">Current</Badge>
                          )}
                        </div>
                        <h3 className="text-2xl font-display font-bold text-gradient-primary mb-2">
                          {exp.position}
                        </h3>
                        <div className="flex items-center gap-4 text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-3">
                          <Award className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition Section */}
        <div className="mt-20 animate-fade-in">
          <Card className="glass-effect p-8 border-gradient">
            <h3 className="text-2xl font-display font-bold text-gradient-secondary mb-6 text-center">
              Recognition & Awards
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {recognitions.map((recognition, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-gradient-hero">
                  <Award className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{recognition}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;