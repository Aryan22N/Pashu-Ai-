import React from "react";
import { useLanguage } from "../../../components/ui/Header";
import Icon from "../../../components/AppIcon";
import Spline from "@splinetool/react-spline";

const AboutSection = () => {
  const { t, language } = useLanguage();

  const aboutContent = {
    en: {
      title: "About Our AI-Powered Solution",
      subtitle:
        "Revolutionizing livestock management through advanced computer vision",
      description:
        "Our cutting-edge AI system uses deep learning algorithms trained specifically on Indian cattle and buffalo breeds. By analyzing key physical characteristics, coat patterns, and morphological features, we provide farmers with instant, accurate breed identification to support better breeding decisions and livestock management.",
      features: [
        {
          icon: "Brain",
          title: "Advanced AI Technology",
          description:
            "Deep learning models trained on thousands of breed images",
        },
        {
          icon: "Target",
          title: "High Accuracy",
          description: "95%+ accuracy rate across 50+ supported Indian breeds",
        },
        {
          icon: "Smartphone",
          title: "Mobile-First Design",
          description: "Optimized for smartphones with offline capabilities",
        },
        {
          icon: "Users",
          title: "Farmer-Centric",
          description: "Built specifically for Indian agricultural communities",
        },
      ],
    },
    hi: {
      title: "हमारे एआई-संचालित समाधान के बारे में",
      subtitle: "उन्नत कंप्यूटर विज़न के माध्यम से पशुधन प्रबंधन में क्रांति",
      description:
        "हमारी अत्याधुनिक एआई प्रणाली भारतीय गाय और भैंस की नस्लों पर विशेष रूप से प्रशिक्षित गहरी शिक्षा एल्गोरिदम का उपयोग करती है। मुख्य भौतिक विशेषताओं, कोट पैटर्न और आकारिक विशेषताओं का विश्लेषण करके, हम किसानों को बेहतर प्रजनन निर्णय और पशुधन प्रबंधन का समर्थन करने के लिए तत्काल, सटीक नस्ल पहचान प्रदान करते हैं।",
      features: [
        {
          icon: "Brain",
          title: "उन्नत एआई तकनीक",
          description: "हजारों नस्ल छवियों पर प्रशिक्षित गहरी शिक्षा मॉडल",
        },
        {
          icon: "Target",
          title: "उच्च सटीकता",
          description: "50+ समर्थित भारतीय नस्लों में 95%+ सटीकता दर",
        },
        {
          icon: "Smartphone",
          title: "मोबाइल-फर्स्ट डिज़ाइन",
          description: "ऑफलाइन क्षमताओं के साथ स्मार्टफोन के लिए अनुकूलित",
        },
        {
          icon: "Users",
          title: "किसान-केंद्रित",
          description: "भारतीय कृषि समुदायों के लिए विशेष रूप से निर्मित",
        },
      ],
    },
  };

  const content = aboutContent?.[language];

  return (
    <section className="py-2 bg-background">
      <div className="max-w-7xl mx-auto px-4 flex lg:px-6">
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
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-gentle-sm border border-border/50 hover:shadow-gentle transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon
                        name={feature?.icon}
                        size={24}
                        className="text-primary"
                      />
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

          {/* Replace Illustration with Spline */}
          <div className="relative w-full h-[889px] overflow-hidden [clip-path:inset(0_0_58px_0)] hidden lg:block">
            <Spline scene="https://prod.spline.design/FhVH05g7PK8s3e-h/scene.splinecode" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
