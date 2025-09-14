import React from "react";
import { useLanguage } from "../../../components/ui/Header";
import Icon from "../../../components/AppIcon";

const HowItWorksSection = () => {
  const { t, language } = useLanguage();

  const howItWorksContent = {
    en: {
      title: "How It Works",
      subtitle: "Simple 3-step process to identify your cattle breed",
      steps: [
        {
          number: "01",
          icon: "Upload",
          title: "Upload Image",
          description:
            "Take a clear photo of your cattle or buffalo using your smartphone camera or upload an existing image from your gallery.",
          details: [
            "High-quality image recommended",
            "Multiple angles supported",
            "Works in various lighting conditions",
          ],
        },
        {
          number: "02",
          icon: "Brain",
          title: "AI Analysis",
          description:
            "Our advanced AI system analyzes the image using deep learning algorithms trained on thousands of Indian breed samples.",
          details: [
            "YOLO-based detection",
            "Feature extraction",
            "Pattern recognition",
          ],
        },
        {
          number: "03",
          icon: "CheckCircle",
          title: "Get Results",
          description:
            "Receive instant breed identification with confidence score, breed characteristics, and management recommendations.",
          details: [
            "95%+ accuracy rate",
            "Detailed breed information",
            "Breeding recommendations",
          ],
        },
      ],
    },
    hi: {
      title: "यह कैसे काम करता है",
      subtitle: "अपनी पशु नस्ल की पहचान के लिए सरल 3-चरणीय प्रक्रिया",
      steps: [
        {
          number: "01",
          icon: "Upload",
          title: "छवि अपलोड करें",
          description:
            "अपने स्मार्टफोन कैमरे का उपयोग करके अपने पशु या भैंस की स्पष्ट तस्वीर लें या अपनी गैलरी से मौजूदा छवि अपलोड करें।",
          details: [
            "उच्च गुणवत्ता वाली छवि की सिफारिश",
            "कई कोण समर्थित",
            "विभिन्न प्रकाश स्थितियों में काम करता है",
          ],
        },
        {
          number: "02",
          icon: "Brain",
          title: "एआई विश्लेषण",
          description:
            "हमारी उन्नत एआई प्रणाली हजारों भारतीय नस्ल के नमूनों पर प्रशिक्षित गहरी शिक्षा एल्गोरिदम का उपयोग करके छवि का विश्लेषण करती है।",
          details: ["YOLO-आधारित पहचान", "फीचर निष्कर्षण", "पैटर्न पहचान"],
        },
        {
          number: "03",
          icon: "CheckCircle",
          title: "परिणाम प्राप्त करें",
          description:
            "विश्वास स्कोर, नस्ल विशेषताओं और प्रबंधन सिफारिशों के साथ तत्काल नस्ल पहचान प्राप्त करें।",
          details: [
            "95%+ सटीकता दर",
            "विस्तृत नस्ल जानकारी",
            "प्रजनन सिफारिशें",
          ],
        },
      ],
    },
  };

  const content = howItWorksContent?.[language];

  return (
    <section className="py-3 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
            {content?.title}
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            {content?.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 transform -translate-y-1/2 z-0"></div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {content?.steps?.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-card rounded-2xl p-8 shadow-gentle border border-border/50 hover:shadow-gentle-lg transition-all duration-300 group">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-gentle">
                    <span className="text-primary-foreground font-heading font-bold text-lg">
                      {step?.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon
                      name={step?.icon}
                      size={32}
                      className="text-primary"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      {step?.title}
                    </h3>

                    <p className="text-muted-foreground font-body leading-relaxed">
                      {step?.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-2">
                      {step?.details?.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground font-body">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Arrow for mobile */}
                {index < content?.steps?.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6 mb-2">
                    <Icon
                      name="ArrowDown"
                      size={24}
                      className="text-primary/60"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-primary/5 rounded-full border border-primary/20">
            <Icon name="Clock" size={16} className="text-primary mr-2" />
            <span className="text-sm font-medium text-primary">
              {language === "en"
                ? "Average processing time: 2-3 seconds"
                : "औसत प्रसंस्करण समय: 2-3 सेकंड"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
