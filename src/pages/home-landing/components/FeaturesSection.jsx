import React from 'react';
import { useLanguage } from '../../../components/ui/Header';
import Icon from '../../../components/AppIcon';

const FeaturesSection = () => {
  const { t, language } = useLanguage();

  const featuresContent = {
    en: {
      title: "Advanced AI Features",
      subtitle: "Cutting-edge technology made simple for farmers",
      features: [
        {
          icon: "Target",
          title: "YOLO Transfer Learning",
          description: "Advanced object detection using You Only Look Once (YOLO) architecture, specifically fine-tuned for Indian cattle breeds.",
          benefits: ["Real-time detection", "High accuracy", "Optimized for mobile"]
        },
        {
          icon: "GitBranch",
          title: "Hierarchical Classification",
          description: "Multi-level breed classification system that identifies species, breed family, and specific breed characteristics.",
          benefits: ["Detailed classification", "Breed relationships", "Comprehensive analysis"]
        },
        {
          icon: "RotateCcw",
          title: "Data Augmentation",
          description: "Enhanced training dataset through rotation, scaling, and color adjustments to improve model robustness.",
          benefits: ["Better accuracy", "Varied conditions", "Robust performance"]
        },
        {
          icon: "Network",
          title: "Federated Learning",
          description: "Collaborative learning approach that improves model accuracy while keeping farmer data private and secure.",
          benefits: ["Privacy protection", "Continuous improvement", "Decentralized learning"]
        },
        {
          icon: "Smartphone",
          title: "Mobile Optimization",
          description: "Lightweight model architecture optimized for smartphone deployment with offline capabilities.",
          benefits: ["Works offline", "Fast processing", "Low battery usage"]
        },
        {
          icon: "Shield",
          title: "Data Security",
          description: "End-to-end encryption and privacy-first approach ensuring farmer data remains confidential.",
          benefits: ["Encrypted data", "Privacy first", "Secure processing"]
        }
      ]
    },
    hi: {
      title: "उन्नत एआई सुविधाएं",
      subtitle: "किसानों के लिए सरल बनाई गई अत्याधुनिक तकनीक",
      features: [
        {
          icon: "Target",
          title: "YOLO ट्रांसफर लर्निंग",
          description: "You Only Look Once (YOLO) आर्किटेक्चर का उपयोग करके उन्नत ऑब्जेक्ट डिटेक्शन, विशेष रूप से भारतीय पशु नस्लों के लिए फाइन-ट्यून्ड।",
          benefits: ["रियल-टाइम डिटेक्शन", "उच्च सटीकता", "मोबाइल के लिए अनुकूलित"]
        },
        {
          icon: "GitBranch",
          title: "पदानुक्रमित वर्गीकरण",
          description: "बहु-स्तरीय नस्ल वर्गीकरण प्रणाली जो प्रजातियों, नस्ल परिवार और विशिष्ट नस्ल विशेषताओं की पहचान करती है।",
          benefits: ["विस्तृत वर्गीकरण", "नस्ल संबंध", "व्यापक विश्लेषण"]
        },
        {
          icon: "RotateCcw",
          title: "डेटा संवर्धन",
          description: "मॉडल की मजबूती में सुधार के लिए रोटेशन, स्केलिंग और रंग समायोजन के माध्यम से बेहतर प्रशिक्षण डेटासेट।",
          benefits: ["बेहतर सटीकता", "विविध स्थितियां", "मजबूत प्रदर्शन"]
        },
        {
          icon: "Network",
          title: "फेडरेटेड लर्निंग",
          description: "सहयोगी शिक्षा दृष्टिकोण जो किसान डेटा को निजी और सुरक्षित रखते हुए मॉडल सटीकता में सुधार करता है।",
          benefits: ["गोपनीयता सुरक्षा", "निरंतर सुधार", "विकेंद्रीकृत शिक्षा"]
        },
        {
          icon: "Smartphone",
          title: "मोबाइल अनुकूलन",
          description: "ऑफलाइन क्षमताओं के साथ स्मार्टफोन तैनाती के लिए अनुकूलित हल्का मॉडल आर्किटेक्चर।",
          benefits: ["ऑफलाइन काम करता है", "तेज़ प्रसंस्करण", "कम बैटरी उपयोग"]
        },
        {
          icon: "Shield",
          title: "डेटा सुरक्षा",
          description: "एंड-टू-एंड एन्क्रिप्शन और गोपनीयता-प्राथमिक दृष्टिकोण यह सुनिश्चित करता है कि किसान डेटा गोपनीय रहे।",
          benefits: ["एन्क्रिप्टेड डेटा", "गोपनीयता प्राथमिक", "सुरक्षित प्रसंस्करण"]
        }
      ]
    }
  };

  const content = featuresContent?.[language];

  return (
    <section className="py-20 bg-card">
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

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content?.features?.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-background rounded-2xl p-8 shadow-gentle-sm border border-border/50 hover:shadow-gentle-lg hover:border-primary/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Icon name={feature?.icon} size={32} className="text-primary" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature?.title}
                </h3>
                
                <p className="text-muted-foreground font-body leading-relaxed">
                  {feature?.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2">
                  {feature?.benefits?.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-success rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground font-body">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-border/50">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Sparkles" size={24} className="text-primary" />
              <h3 className="text-xl font-heading font-semibold text-foreground">
                {language === 'en' ? 'Powered by Advanced AI' : 'उन्नत एआई द्वारा संचालित'}
              </h3>
            </div>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              {language === 'en' ?'Our system combines multiple AI techniques to deliver the most accurate and reliable breed identification for Indian livestock.' :'हमारी प्रणाली भारतीय पशुधन के लिए सबसे सटीक और विश्वसनीय नस्ल पहचान प्रदान करने के लिए कई एआई तकनीकों को जोड़ती है।'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;