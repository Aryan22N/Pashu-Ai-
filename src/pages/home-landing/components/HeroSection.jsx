import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../components/ui/Header';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  const { t, language } = useLanguage();

  const heroContent = {
    en: {
      title: "AI-Powered Cattle Breed Recognition",
      subtitle: "Instantly identify Indian cattle and buffalo breeds with advanced AI technology",
      description: "Empowering farmers and agricultural professionals with accurate breed identification to make better livestock management and breeding decisions.",
      ctaText: "Try Demo Now",
      ctaSecondary: "Learn More",
      stats: [
        { number: "50+", label: "Supported Breeds" },
        { number: "95%", label: "Accuracy Rate" },
        { number: "10K+", label: "Happy Farmers" }
      ]
    },
    hi: {
      title: "एआई-संचालित पशु नस्ल पहचान",
      subtitle: "उन्नत एआई तकनीक के साथ भारतीय गाय और भैंस की नस्लों की तुरंत पहचान करें",
      description: "किसानों और कृषि पेशेवरों को बेहतर पशुधन प्रबंधन और प्रजनन निर्णय लेने के लिए सटीक नस्ल पहचान के साथ सशक्त बनाना।",
      ctaText: "डेमो आज़माएं",
      ctaSecondary: "और जानें",
      stats: [
        { number: "50+", label: "समर्थित नस्लें" },
        { number: "95%", label: "सटीकता दर" },
        { number: "10K+", label: "खुश किसान" }
      ]
    }
  };

  const content = heroContent?.[language];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-amber-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
      </div>
      <div className="relative pt-24 pb-16 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                  <Icon name="Sparkles" size={16} className="text-primary mr-2" />
                  <span className="text-sm font-medium text-primary">
                    {language === 'en' ? 'AI-Powered Technology' : 'एआई-संचालित तकनीक'}
                  </span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                  {content?.title}
                </h1>
                
                <p className="text-xl lg:text-2xl text-muted-foreground font-body leading-relaxed">
                  {content?.subtitle}
                </p>
                
                <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-2xl">
                  {content?.description}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/breed-identification-demo">
                  <Button 
                    variant="default" 
                    size="lg" 
                    iconName="Camera" 
                    iconPosition="left"
                    className="w-full sm:w-auto shadow-gentle hover:shadow-gentle-lg transition-all duration-300"
                  >
                    {content?.ctaText}
                  </Button>
                </Link>
                
                <Link to="/supported-breeds-gallery">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    iconName="Grid3X3" 
                    iconPosition="left"
                    className="w-full sm:w-auto"
                  >
                    {content?.ctaSecondary}
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
                {content?.stats?.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl lg:text-3xl font-heading font-bold text-primary">
                      {stat?.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-body mt-1">
                      {stat?.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative bg-card rounded-3xl shadow-gentle-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg"
                  alt="Indian cattle in pastoral setting"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                
                {/* Floating Cards */}
                <div className="absolute top-6 right-6 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-gentle">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                      <Icon name="CheckCircle" size={20} className="text-success" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground">
                        {language === 'en' ? 'Breed Identified' : 'नस्ल की पहचान'}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {language === 'en' ? 'Gir Cow - 94% confidence' : 'गिर गाय - 94% विश्वास'}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-gentle">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Zap" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground">
                        {language === 'en' ? 'Instant Results' : 'तत्काल परिणाम'}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {language === 'en' ? 'Analysis in 2-3 seconds' : '2-3 सेकंड में विश्लेषण'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;