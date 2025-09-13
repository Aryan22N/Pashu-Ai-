import React from 'react';
import { useLanguage } from '../../../components/ui/Header';
import Icon from '../../../components/AppIcon';


const AboutSection = () => {
  const { t, language } = useLanguage();

  const aboutContent = {
    en: {
      title: "About Our AI-Powered Solution",
      subtitle: "Revolutionizing livestock management through advanced computer vision",
      description: "Our cutting-edge AI system uses deep learning algorithms trained specifically on Indian cattle and buffalo breeds. By analyzing key physical characteristics, coat patterns, and morphological features, we provide farmers with instant, accurate breed identification to support better breeding decisions and livestock management.",
      features: [
        {
          icon: "Brain",
          title: "Advanced AI Technology",
          description: "Deep learning models trained on thousands of breed images"
        },
        {
          icon: "Target",
          title: "High Accuracy",
          description: "95%+ accuracy rate across 50+ supported Indian breeds"
        },
        {
          icon: "Smartphone",
          title: "Mobile-First Design",
          description: "Optimized for smartphones with offline capabilities"
        },
        {
          icon: "Users",
          title: "Farmer-Centric",
          description: "Built specifically for Indian agricultural communities"
        }
      ]
    },
    hi: {
      title: "हमारे एआई-संचालित समाधान के बारे में",
      subtitle: "उन्नत कंप्यूटर विज़न के माध्यम से पशुधन प्रबंधन में क्रांति",
      description: "हमारी अत्याधुनिक एआई प्रणाली भारतीय गाय और भैंस की नस्लों पर विशेष रूप से प्रशिक्षित गहरी शिक्षा एल्गोरिदम का उपयोग करती है। मुख्य भौतिक विशेषताओं, कोट पैटर्न और आकारिक विशेषताओं का विश्लेषण करके, हम किसानों को बेहतर प्रजनन निर्णय और पशुधन प्रबंधन का समर्थन करने के लिए तत्काल, सटीक नस्ल पहचान प्रदान करते हैं।",
      features: [
        {
          icon: "Brain",
          title: "उन्नत एआई तकनीक",
          description: "हजारों नस्ल छवियों पर प्रशिक्षित गहरी शिक्षा मॉडल"
        },
        {
          icon: "Target",
          title: "उच्च सटीकता",
          description: "50+ समर्थित भारतीय नस्लों में 95%+ सटीकता दर"
        },
        {
          icon: "Smartphone",
          title: "मोबाइल-फर्स्ट डिज़ाइन",
          description: "ऑफलाइन क्षमताओं के साथ स्मार्टफोन के लिए अनुकूलित"
        },
        {
          icon: "Users",
          title: "किसान-केंद्रित",
          description: "भारतीय कृषि समुदायों के लिए विशेष रूप से निर्मित"
        }
      ]
    }
  };

  const content = aboutContent?.[language];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
                {content?.title}
              </h2>
              
              <p className="text-xl text-primary font-body font-medium">
                {content?.subtitle}
              </p>
              
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                {content?.description}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {content?.features?.map((feature, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-gentle-sm border border-border/50 hover:shadow-gentle transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={feature?.icon} size={24} className="text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading font-semibold text-foreground">
                        {feature?.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-body leading-relaxed">
                        {feature?.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 lg:p-12">
              {/* AI Brain Illustration */}
              <div className="relative">
                <div className="w-full max-w-md mx-auto">
                  <div className="relative bg-card rounded-2xl p-8 shadow-gentle">
                    {/* Central AI Icon */}
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon name="Brain" size={40} className="text-primary" />
                    </div>
                    
                    {/* Connection Lines */}
                    <div className="absolute inset-0 pointer-events-none">
                      <svg className="w-full h-full" viewBox="0 0 200 200">
                        <defs>
                          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="var(--color-secondary)" stopOpacity="0.3" />
                          </linearGradient>
                        </defs>
                        <path d="M50 100 Q100 50 150 100" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
                        <path d="M50 100 Q100 150 150 100" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
                        <path d="M100 50 Q50 100 100 150" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
                        <path d="M100 50 Q150 100 100 150" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                    
                    {/* Feature Nodes */}
                    <div className="absolute top-4 left-4 w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                      <Icon name="Eye" size={16} className="text-success" />
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-warning/10 rounded-full flex items-center justify-center">
                      <Icon name="Zap" size={16} className="text-warning" />
                    </div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Icon name="Database" size={16} className="text-secondary" />
                    </div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon name="Target" size={16} className="text-accent" />
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-secondary/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;