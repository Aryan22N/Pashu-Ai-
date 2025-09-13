import React from 'react';
import { useLanguage } from '../../../components/ui/Header';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BenefitsSection = () => {
  const { t, language } = useLanguage();

  const benefitsContent = {
    en: {
      title: "Benefits for Farmers",
      subtitle: "Empowering Indian agriculture with AI-driven insights",
      mainBenefits: [
        {
          icon: "TrendingUp",
          title: "Improved Breeding Decisions",
          description: "Make informed breeding choices based on accurate breed identification and genetic characteristics.",
          impact: "30% increase in breeding success rate"
        },
        {
          icon: "DollarSign",
          title: "Better Market Value",
          description: "Accurately identify high-value breeds to get fair prices and avoid being cheated by middlemen.",
          impact: "₹15,000 average increase in cattle value"
        },
        {
          icon: "Shield",
          title: "Disease Prevention",
          description: "Understand breed-specific health risks and implement preventive measures for better livestock health.",
          impact: "40% reduction in veterinary costs"
        },
        {
          icon: "BookOpen",
          title: "Knowledge Enhancement",
          description: "Learn about your cattle breeds, their characteristics, and optimal management practices.",
          impact: "Enhanced farming expertise"
        }
      ],
      testimonials: [
        {
          name: "राम प्रसाद शर्मा",
          location: "उत्तर प्रदेश",
          image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
          quote: "This app helped me identify my Gir cow correctly. Now I get better prices at the market.",
          rating: 5
        },
        {
          name: "सुनीता देवी",
          location: "राजस्थान",
          image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
          quote: "Very useful for understanding different buffalo breeds. Easy to use even for beginners.",
          rating: 5
        }
      ]
    },
    hi: {
      title: "किसानों के लिए लाभ",
      subtitle: "एआई-संचालित अंतर्दृष्टि के साथ भारतीय कृषि को सशक्त बनाना",
      mainBenefits: [
        {
          icon: "TrendingUp",
          title: "बेहतर प्रजनन निर्णय",
          description: "सटीक नस्ल पहचान और आनुवंशिक विशेषताओं के आधार पर सूचित प्रजनन विकल्प बनाएं।",
          impact: "प्रजनन सफलता दर में 30% वृद्धि"
        },
        {
          icon: "DollarSign",
          title: "बेहतर बाजार मूल्य",
          description: "उच्च-मूल्य नस्लों की सटीक पहचान करें और उचित कीमत पाएं, बिचौलियों से धोखा न खाएं।",
          impact: "पशु मूल्य में औसतन ₹15,000 की वृद्धि"
        },
        {
          icon: "Shield",
          title: "रोग रोकथाम",
          description: "नस्ल-विशिष्ट स्वास्थ्य जोखिमों को समझें और बेहतर पशुधन स्वास्थ्य के लिए निवारक उपाय लागू करें।",
          impact: "पशु चिकित्सा लागत में 40% कमी"
        },
        {
          icon: "BookOpen",
          title: "ज्ञान संवर्धन",
          description: "अपनी पशु नस्लों, उनकी विशेषताओं और इष्टतम प्रबंधन प्रथाओं के बारे में जानें।",
          impact: "बेहतर कृषि विशेषज्ञता"
        }
      ],
      testimonials: [
        {
          name: "राम प्रसाद शर्मा",
          location: "उत्तर प्रदेश",
          image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
          quote: "इस ऐप ने मेरी गिर गाय की सही पहचान करने में मदद की। अब मुझे बाजार में बेहतर कीमत मिलती है।",
          rating: 5
        },
        {
          name: "सुनीता देवी",
          location: "राजस्थान",
          image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
          quote: "विभिन्न भैंस नस्लों को समझने के लिए बहुत उपयोगी। शुरुआती लोगों के लिए भी उपयोग करना आसान है।",
          rating: 5
        }
      ]
    }
  };

  const content = benefitsContent?.[language];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
            {content?.title}
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            {content?.subtitle}
          </p>
        </div>

        {/* Main Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {content?.mainBenefits?.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-gentle border border-border/50 hover:shadow-gentle-lg transition-all duration-300 group"
            >
              <div className="flex items-start space-x-6">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon name={benefit?.icon} size={32} className="text-primary" />
                </div>

                {/* Content */}
                <div className="space-y-4 flex-1">
                  <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {benefit?.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {benefit?.description}
                  </p>

                  {/* Impact Badge */}
                  <div className="inline-flex items-center px-4 py-2 bg-success/10 rounded-full border border-success/20">
                    <Icon name="TrendingUp" size={16} className="text-success mr-2" />
                    <span className="text-sm font-medium text-success">
                      {benefit?.impact}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
              {language === 'en' ? 'What Farmers Say' : 'किसान क्या कहते हैं'}
            </h3>
            <p className="text-muted-foreground font-body">
              {language === 'en' ? 'Real experiences from our farming community' : 'हमारे कृषि समुदाय के वास्तविक अनुभव'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {content?.testimonials?.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-gentle border border-border/50 hover:shadow-gentle-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial?.image}
                      alt={testimonial?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">
                      {testimonial?.name}
                    </h4>
                    <p className="text-sm text-muted-foreground font-body">
                      {testimonial?.location}
                    </p>
                    {/* Rating */}
                    <div className="flex items-center space-x-1 mt-2">
                      {[...Array(testimonial?.rating)]?.map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-warning fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                <blockquote className="text-muted-foreground font-body leading-relaxed italic">
                  "{testimonial?.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
              {language === 'en' ? 'Join Thousands of Smart Farmers' : 'हजारों स्मार्ट किसानों से जुड़ें'}
            </h3>
            <p className="text-muted-foreground font-body mb-6 max-w-2xl mx-auto">
              {language === 'en' ?'Start making better breeding decisions today with our AI-powered breed identification system.' :'हमारी एआई-संचालित नस्ल पहचान प्रणाली के साथ आज ही बेहतर प्रजनन निर्णय लेना शुरू करें।'
              }
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} className="text-primary" />
                <span>{language === 'en' ? '10,000+ Active Users' : '10,000+ सक्रिय उपयोगकर्ता'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Star" size={16} className="text-warning" />
                <span>{language === 'en' ? '4.8/5 Rating' : '4.8/5 रेटिंग'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;