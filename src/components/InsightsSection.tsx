import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, Lightbulb, TrendingUp, Brain } from 'lucide-react';

const InsightsSection = () => {
  const insights = [
    {
      category: 'AI & Innovation',
      title: 'The Future of AI Agents in Financial Risk Management',
      excerpt: 'Exploring how intelligent agents are revolutionizing risk assessment and decision-making in global financial markets.',
      readTime: '8 min read',
      date: 'Coming Soon',
      icon: Brain,
      featured: true
    },
    {
      category: 'Cross-Border Strategy',
      title: 'Navigating Regulatory Complexity in Multi-Jurisdiction Wealth Planning',
      excerpt: 'Strategic insights on managing compliance and optimization across diverse regulatory environments.',
      readTime: '6 min read',
      date: 'Coming Soon',
      icon: TrendingUp,
      featured: false
    },
    {
      category: 'Leadership',
      title: 'Building High-Performance Teams in the Digital Age',
      excerpt: 'Lessons from scaling operations across Asia, MENA, and Africa in an increasingly connected world.',
      readTime: '5 min read',
      date: 'Coming Soon',
      icon: Lightbulb,
      featured: false
    }
  ];

  const topics = [
    'AI & Machine Learning',
    'Risk Management',
    'Digital Transformation',
    'Cross-Border Strategy',
    'Wealth Protection',
    'Leadership Excellence',
    'Regulatory Compliance',
    'Innovation Strategy'
  ];

  return (
    <section id="insights" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-32 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-gradient-secondary">Insights</span> & Thought Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing expertise and perspectives on AI, risk management, and the future of financial services
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {insights.map((insight, index) => (
            <Card 
              key={index} 
              className={`glass-effect p-8 hover-lift border-gradient group transition-all duration-500 ${
                insight.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="animate-fade-in h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:animate-glow-pulse">
                    <insight.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    {insight.category}
                  </Badge>
                </div>

                <h3 className={`font-display font-bold text-gradient-primary mb-4 ${
                  insight.featured ? 'text-2xl lg:text-3xl' : 'text-xl'
                }`}>
                  {insight.title}
                </h3>

                <p className={`text-muted-foreground leading-relaxed mb-6 flex-1 ${
                  insight.featured ? 'text-lg' : ''
                }`}>
                  {insight.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{insight.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{insight.readTime}</span>
                    </div>
                  </div>
                </div>

                <Button 
                  variant="ghost" 
                  className="w-full justify-between text-primary hover:text-primary-glow hover:bg-primary/10 transition-all duration-300"
                  disabled
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Topics of Interest */}
        <div className="animate-fade-in">
          <Card className="glass-effect p-8 border-gradient">
            <h3 className="text-2xl font-display font-bold text-gradient-primary mb-6 text-center">
              Topics of Expertise
            </h3>
            <p className="text-center text-muted-foreground mb-8">
              Areas where I share insights and thought leadership
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {topics.map((topic, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="border-primary/30 text-primary hover:bg-primary/10 px-4 py-2 text-sm transition-all duration-300 hover-lift"
                >
                  {topic}
                </Badge>
              ))}
            </div>
          </Card>
        </div>

        {/* Newsletter Signup Placeholder */}
        <div className="text-center mt-12 animate-fade-in">
          <Card className="glass-effect p-8 border-gradient max-w-2xl mx-auto">
            <h3 className="text-xl font-display font-bold text-gradient-secondary mb-4">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-6">
              Get notified when new insights and articles are published
            </p>
            <Button 
              className="bg-secondary hover:bg-secondary-glow text-secondary-foreground glow-secondary hover:shadow-glow-secondary transition-all duration-300"
              disabled
            >
              Subscribe to Updates (Coming Soon)
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;