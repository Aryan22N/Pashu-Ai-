import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { LanguageProvider, useLanguage } from "../../components/ui/Header";
import ContactForm from "./components/ContactForm";
import FeedbackRating from "./components/FeedbackRating";
import ContactInfo from "./components/ContactInfo";
import SuccessModal from "./components/SuccessModal";
import Icon from "../../components/AppIcon";

const ContactAndFeedbackContent = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successType, setSuccessType] = useState("contact");

  const translations = {
    en: {
      pageTitle: "Contact & Feedback - Cattle Breed Recognition",
      pageDescription:
        "Get in touch with our support team or share your feedback about our AI-powered cattle breed identification service.",
      mainTitle: "Contact & Feedback",
      subtitle:
        "We'd love to hear from you! Get in touch with our team or share your experience.",
      contactTab: "Contact Us",
      feedbackTab: "Share Feedback",
      contactDesc: "Have questions or need support? Send us a message.",
      feedbackDesc:
        "Help us improve by sharing your experience and rating our service.",
    },
    hi: {
      pageTitle: "संपर्क और प्रतिक्रिया - मवेशी नस्ल पहचान",
      pageDescription:
        "हमारी सहायता टीम से संपर्क करें या हमारी AI-संचालित मवेशी नस्ल पहचान सेवा के बारे में अपनी प्रतिक्रिया साझा करें।",
      mainTitle: "संपर्क और प्रतिक्रिया",
      subtitle:
        "हम आपसे सुनना पसंद करेंगे! हमारी टीम से संपर्क करें या अपना अनुभव साझा करें।",
      contactTab: "हमसे संपर्क करें",
      feedbackTab: "प्रतिक्रिया साझा करें",
      contactDesc:
        "क्या आपके पास प्रश्न हैं या सहायता की आवश्यकता है? हमें एक संदेश भेजें।",
      feedbackDesc:
        "अपना अनुभव साझा करके और हमारी सेवा को रेट करके हमें बेहतर बनाने में मदद करें।",
    },
  };

  const getText = (key) => translations?.[language]?.[key] || key;

  useEffect(() => {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && savedLanguage !== language) {
      // Language will be handled by the LanguageProvider
    }
  }, [language]);

  const handleContactSubmit = async (formData) => {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Contact form submitted:", formData);

      setSuccessType("contact");
      setShowSuccessModal(true);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("There was an error submitting your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFeedbackSubmit = async (feedbackData) => {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Feedback submitted:", feedbackData);

      setSuccessType("feedback");
      setShowSuccessModal(true);
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("There was an error submitting your feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const tabs = [
    {
      id: "contact",
      label: getText("contactTab"),
      icon: "MessageSquare",
      description: getText("contactDesc"),
    },
    {
      id: "feedback",
      label: getText("feedbackTab"),
      icon: "Star",
      description: getText("feedbackDesc"),
    },
  ];

  return (
    <>
      <Helmet>
        <title>{getText("pageTitle")}</title>
        <meta name="description" content={getText("pageDescription")} />
        <meta
          name="keywords"
          content="cattle breed identification, contact support, feedback, AI agriculture, livestock management"
        />
        <meta property="og:title" content={getText("pageTitle")} />
        <meta property="og:description" content={getText("pageDescription")} />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                {getText("mainTitle")}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-body">
                {getText("subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Contact Info */}
              <div className="lg:col-span-1">
                <ContactInfo />
              </div>

              {/* Right Column - Forms */}
              <div className="lg:col-span-2">
                {/* Tab Navigation */}
                <div className="bg-card rounded-xl p-2 shadow-gentle border border-border mb-6">
                  <div className="flex space-x-1">
                    {tabs?.map((tab) => (
                      <button
                        key={tab?.id}
                        onClick={() => setActiveTab(tab?.id)}
                        className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-body font-medium text-sm transition-gentle ${
                          activeTab === tab?.id
                            ? "bg-primary text-primary-foreground shadow-gentle-sm"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`}
                      >
                        <Icon name={tab?.icon} size={18} />
                        <span className="hidden sm:inline">{tab?.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tab Description */}
                <div className="mb-6">
                  <p className="text-muted-foreground font-body text-center">
                    {tabs?.find((tab) => tab?.id === activeTab)?.description}
                  </p>
                </div>

                {/* Tab Content */}
                <div className="space-y-6">
                  {activeTab === "contact" && (
                    <ContactForm
                      onSubmit={handleContactSubmit}
                      isSubmitting={isSubmitting}
                    />
                  )}

                  {activeTab === "feedback" && (
                    <FeedbackRating
                      onSubmit={handleFeedbackSubmit}
                      isSubmitting={isSubmitting}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Modal */}
        <SuccessModal
          isOpen={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
          type={successType}
        />
      </div>
    </>
  );
};

const ContactAndFeedback = () => {
  return (
    <LanguageProvider>
      <ContactAndFeedbackContent />
    </LanguageProvider>
  );
};

export default ContactAndFeedback;
