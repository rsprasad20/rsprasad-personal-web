import { Card } from '@/components/ui/card';
import { Bot, Shield, Globe2, Lightbulb, Users2, BarChart3 } from 'lucide-react';

const ExpertiseSection = () => {
  const services = [
    {
      icon: Bot,
      title: 'AI Agents & Solutions',
      description: 'Pioneering AI-driven solutions for financial services, risk assessment, and client advisory services.',
      features: ['Intelligent Risk Assessment', 'Automated Advisory Systems', 'Predictive Analytics', 'AI-Powered Insights']
    },
    {
      icon: Shield,
      title: 'Risk Advisory Excellence',
      description: 'Comprehensive risk management strategies for complex financial structures and cross-border operations.',
      features: ['Strategic Risk Assessment', 'Regulatory Compliance', 'Portfolio Protection', 'Crisis Management']
    },
    {
      icon: Globe2,
      title: 'Cross-Border Solutions',
      description: 'Expert navigation of international markets with specialized solutions for global wealth management.',
      features: ['Multi-Jurisdiction Planning', 'International Tax Strategy', 'Global Asset Protection', 'Regulatory Navigation']
    },
    {
      icon: Lightbulb,
      title: 'Innovation Leadership',
      description: 'Driving digital transformation and innovative solutions in traditional financial services.',
      features: ['Digital Strategy', 'Process Innovation', 'Technology Integration', 'Change Management']
    },
    {
      icon: Users2,
      title: 'Strategic Leadership',
      description: 'Proven track record of building high-performance teams and scaling operations across diverse markets.',
      features: ['Team Development', 'Market Expansion', 'Operational Excellence', 'Stakeholder Management']
    },
    {
      icon: BarChart3,
      title: 'Wealth Protection',
      description: 'Sophisticated strategies for high-net-worth individuals and families across multiple generations.',
      features: ['Legacy Planning', 'Estate Structuring', 'Tax Optimization', 'Succession Planning']
    }
  ];

  return (
    <section id="expertise" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-gradient-secondary">Expertise</span> & Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivering cutting-edge solutions at the intersection of AI, risk management, and strategic leadership
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="glass-effect p-8 hover-lift border-gradient group transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="animate-fade-in">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:animate-glow-pulse">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-gradient-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 group-hover:glow-secondary transition-all duration-300" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combining decades of traditional financial services expertise with cutting-edge AI technology 
            to deliver unprecedented value for clients worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;