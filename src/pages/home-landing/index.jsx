import React, { useEffect } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import Header from "../../components/ui/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import HowItWorksSection from "./components/HowItWorksSection";
import FeaturesSection from "./components/FeaturesSection";
import BenefitsSection from "./components/BenefitsSection";
import ImpactSection from "./components/ImpactSection";

const HomeLanding = () => {
  const { language } = useLanguage();

  useEffect(() => {
    // Set page title based on language
    const title =
      language === "en"
        ? "Cattle Breed Recognition - AI-Powered Livestock Identification"
        : "पशु नस्ल पहचान - एआई-संचालित पशुधन पहचान";
    document.title = title;

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute(
        "content",
        language === "en"
          ? "AI-powered cattle and buffalo breed identification for Indian farmers. Instant, accurate breed recognition with 95% accuracy rate."
          : "भारतीय किसानों के लिए एआई-संचालित गाय और भैंस की नस्ल पहचान। 95% सटीकता दर के साथ तत्काल, सटीक नस्ल पहचान।"
      );
    }
  }, [language]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Impact & Future Scope Section */}
      <ImpactSection />
    </div>
  );
};

export default HomeLanding;
