import React from 'react';
import { useLanguage } from '../../../components/ui/Header';
import Icon from '../../../components/AppIcon';


const ImpactSection = () => {
  const { t, language } = useLanguage();

  const impactContent = {
    en: {
      title: "Impact & Future Scope",
      subtitle: "Building the future of Indian livestock management",
      currentImpact: {
        title: "Current Impact",
        stats: [
          { number: "10,000+", label: "Farmers Helped", icon: "Users" },
          { number: "50+", label: "Breeds Supported", icon: "Grid3X3" },
          { number: "95%", label: "Accuracy Rate", icon: "Target" },
          { number: "₹2.5Cr", label: "Value Added", icon: "TrendingUp" }
        ]
      },
      futureScope: {
        title: "Future Roadmap",
        items: [
          {
            icon: "Smartphone",
            title: "Bharat Pashudhan App Integration",
            description: "Seamless integration with the government\'s official livestock management platform for comprehensive farmer support.",
            timeline: "Q2 2024"
          },
          {
            icon: "Globe",
            title: "Multi-Regional Expansion",
            description: "Extending support to cattle breeds from neighboring countries and international markets.",
            timeline: "Q3 2024"
          },
          {
            icon: "Brain",
            title: "Advanced AI Features",
            description: "Health assessment, age estimation, and productivity prediction using computer vision.",
            timeline: "Q4 2024"
          },
          {
            icon: "Users",
            title: "Community Platform",
            description: "Farmer-to-farmer knowledge sharing, breeding marketplace, and expert consultations.",
            timeline: "Q1 2025"
          }
        ]
      },
      partnership: {
        title: "Government Partnership",
        description: "Proud to be working towards integration with Bharat Pashudhan App - the government\'s initiative for digital livestock management.",
        features: [
          "Official government endorsement",
          "Nationwide farmer reach",
          "Integrated livestock records",
          "Veterinary support network"
        ]
      }
    },
    hi: {
      title: "प्रभाव और भविष्य का दायरा",
      subtitle: "भारतीय पशुधन प्रबंधन का भविष्य निर्माण",
      currentImpact: {
        title: "वर्तमान प्रभाव",
        stats: [
          { number: "10,000+", label: "किसानों की मदद", icon: "Users" },
          { number: "50+", label: "समर्थित नस्लें", icon: "Grid3X3" },
          { number: "95%", label: "सटीकता दर", icon: "Target" },
          { number: "₹2.5Cr", label: "मूल्य संवर्धन", icon: "TrendingUp" }
        ]
      },
      futureScope: {
        title: "भविष्य की योजना",
        items: [
          {
            icon: "Smartphone",
            title: "भारत पशुधन ऐप एकीकरण",
            description: "व्यापक किसान सहायता के लिए सरकार के आधिकारिक पशुधन प्रबंधन प्लेटफॉर्म के साथ निर्बाध एकीकरण।",
            timeline: "Q2 2024"
          },
          {
            icon: "Globe",
            title: "बहु-क्षेत्रीय विस्तार",
            description: "पड़ोसी देशों और अंतर्राष्ट्रीय बाजारों की पशु नस्लों के लिए समर्थन का विस्तार।",
            timeline: "Q3 2024"
          },
          {
            icon: "Brain",
            title: "उन्नत एआई सुविधाएं",
            description: "कंप्यूटर विज़न का उपयोग करके स्वास्थ्य मूल्यांकन, आयु अनुमान और उत्पादकता भविष्यवाणी।",
            timeline: "Q4 2024"
          },
          {
            icon: "Users",
            title: "सामुदायिक मंच",
            description: "किसान-से-किसान ज्ञान साझाकरण, प्रजनन बाज़ार और विशेषज्ञ परामर्श।",
            timeline: "Q1 2025"
          }
        ]
      },
      partnership: {
        title: "सरकारी साझेदारी",
        description: "भारत पशुधन ऐप - डिजिटल पशुधन प्रबंधन के लिए सरकार की पहल के साथ एकीकरण की दिशा में काम करने पर गर्व है।",
        features: [
          "आधिकारिक सरकारी समर्थन",
          "राष्ट्रव्यापी किसान पहुंच",
          "एकीकृत पशुधन रिकॉर्ड",
          "पशु चिकित्सा सहायता नेटवर्क"
        ]
      }
    }
  };

  const content = impactContent?.[language];

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

        {/* Current Impact Stats */}
        <div className="mb-20">
          <h3 className="text-2xl font-heading font-semibold text-foreground text-center mb-12">
            {content?.currentImpact?.title}
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {content?.currentImpact?.stats?.map((stat, index) => (
              <div 
                key={index}
                className="text-center bg-background rounded-2xl p-8 shadow-gentle-sm border border-border/50 hover:shadow-gentle transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon name={stat?.icon} size={32} className="text-primary" />
                </div>
                <div className="text-3xl font-heading font-bold text-primary mb-2">
                  {stat?.number}
                </div>
                <div className="text-muted-foreground font-body">
                  {stat?.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Roadmap */}
        <div className="mb-20">
          <h3 className="text-2xl font-heading font-semibold text-foreground text-center mb-12">
            {content?.futureScope?.title}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {content?.futureScope?.items?.map((item, index) => (
              <div 
                key={index}
                className="bg-background rounded-2xl p-8 shadow-gentle-sm border border-border/50 hover:shadow-gentle hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon name={item?.icon} size={32} className="text-primary" />
                  </div>
                  
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-heading font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {item?.title}
                      </h4>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {item?.timeline}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground font-body leading-relaxed">
                      {item?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Government Partnership */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 lg:p-12 border border-border/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Award" size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-foreground">
                  {content?.partnership?.title}
                </h3>
              </div>
              
              <p className="text-lg text-muted-foreground font-body leading-relaxed">
                {content?.partnership?.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {content?.partnership?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                    <span className="text-sm text-muted-foreground font-body">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Government Logo Placeholder */}
            <div className="relative">
              <div className="bg-card rounded-2xl p-8 shadow-gentle text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Building" size={48} className="text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">
                  {language === 'en' ? 'Bharat Pashudhan App' : 'भारत पशुधन ऐप'}
                </h4>
                <p className="text-sm text-muted-foreground font-body">
                  {language === 'en' ? 'Government of India Initiative' : 'भारत सरकार की पहल'}
                </p>
                
                {/* Integration Status */}
                <div className="mt-6 inline-flex items-center px-4 py-2 bg-warning/10 rounded-full border border-warning/20">
                  <Icon name="Clock" size={16} className="text-warning mr-2" />
                  <span className="text-sm font-medium text-warning">
                    {language === 'en' ? 'Integration in Progress' : 'एकीकरण प्रगति में'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;