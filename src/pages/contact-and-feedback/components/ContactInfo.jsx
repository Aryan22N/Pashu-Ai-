import React from 'react';
import { useLanguage } from '../../../components/ui/Header';
import Icon from '../../../components/AppIcon';

const ContactInfo = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      contactInfo: 'Contact Information',
      getInTouch: 'Get in Touch',
      contactDesc: 'Have questions or need support? We\'re here to help you with your cattle breed identification needs.',
      phone: 'Phone Support',
      phoneNumber: '+91 98765 43210',
      phoneHours: 'Mon-Fri: 9:00 AM - 6:00 PM IST',
      email: 'Email Support',
      emailAddress: 'support@cattlebreed.in',
      emailResponse: 'Response within 24 hours',
      office: 'Office Address',
      officeAddress: 'Agricultural Technology Center\nSector 12, Dwarka\nNew Delhi - 110075, India',
      emergency: 'Emergency Support',
      emergencyNumber: '+91 98765 43211',
      emergencyHours: '24/7 for critical issues',
      socialMedia: 'Follow Us',
      responseTime: 'Expected Response Time',
      responseDesc: 'We typically respond to inquiries within 24 hours during business days. For urgent technical issues, please call our phone support line.'
    },
    hi: {
      contactInfo: 'संपर्क जानकारी',
      getInTouch: 'संपर्क में रहें',
      contactDesc: 'क्या आपके पास प्रश्न हैं या सहायता की आवश्यकता है? हम आपकी मवेशी नस्ल पहचान की जरूरतों में मदद के लिए यहाँ हैं।',
      phone: 'फोन सहायता',
      phoneNumber: '+91 98765 43210',
      phoneHours: 'सोम-शुक्र: सुबह 9:00 - शाम 6:00 IST',
      email: 'ईमेल सहायता',
      emailAddress: 'support@cattlebreed.in',
      emailResponse: '24 घंटे के भीतर जवाब',
      office: 'कार्यालय का पता',
      officeAddress: 'कृषि प्रौद्योगिकी केंद्र\nसेक्टर 12, द्वारका\nनई दिल्ली - 110075, भारत',
      emergency: 'आपातकालीन सहायता',
      emergencyNumber: '+91 98765 43211',
      emergencyHours: 'गंभीर समस्याओं के लिए 24/7',
      socialMedia: 'हमें फॉलो करें',
      responseTime: 'अपेक्षित प्रतिक्रिया समय',
      responseDesc: 'हम आमतौर पर व्यावसायिक दिनों में 24 घंटे के भीतर पूछताछ का जवाब देते हैं। तत्काल तकनीकी समस्याओं के लिए, कृपया हमारी फोन सहायता लाइन पर कॉल करें।'
    }
  };

  const getText = (key) => translations?.[language]?.[key] || key;

  const contactMethods = [
    {
      icon: 'Phone',
      title: getText('phone'),
      primary: getText('phoneNumber'),
      secondary: getText('phoneHours'),
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: 'Mail',
      title: getText('email'),
      primary: getText('emailAddress'),
      secondary: getText('emailResponse'),
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: 'MapPin',
      title: getText('office'),
      primary: getText('officeAddress'),
      secondary: '',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: 'AlertCircle',
      title: getText('emergency'),
      primary: getText('emergencyNumber'),
      secondary: getText('emergencyHours'),
      color: 'text-error',
      bgColor: 'bg-error/10'
    }
  ];

  const socialLinks = [
    { icon: 'Twitter', url: '#', label: 'Twitter' },
    { icon: 'Facebook', url: '#', label: 'Facebook' },
    { icon: 'Instagram', url: '#', label: 'Instagram' },
    { icon: 'Youtube', url: '#', label: 'YouTube' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-card rounded-xl p-6 shadow-gentle border border-border">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="Phone" size={20} className="text-primary" />
          </div>
          <h2 className="text-xl font-heading font-semibold text-foreground">
            {getText('contactInfo')}
          </h2>
        </div>
        <p className="text-muted-foreground font-body">
          {getText('contactDesc')}
        </p>
      </div>
      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactMethods?.map((method, index) => (
          <div
            key={index}
            className="bg-card rounded-xl p-6 shadow-gentle border border-border hover:shadow-gentle-lg transition-gentle"
          >
            <div className="flex items-start space-x-4">
              <div className={`w-12 h-12 ${method?.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <Icon name={method?.icon} size={20} className={method?.color} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {method?.title}
                </h3>
                <p className="font-body text-sm text-foreground mb-1 break-words">
                  {method?.primary?.split('\n')?.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < method?.primary?.split('\n')?.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
                {method?.secondary && (
                  <p className="font-caption text-xs text-muted-foreground">
                    {method?.secondary}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Response Time Info */}
      <div className="bg-muted/30 rounded-xl p-6 border border-border">
        <div className="flex items-start space-x-3">
          <Icon name="Clock" size={20} className="text-primary mt-0.5" />
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-2">
              {getText('responseTime')}
            </h3>
            <p className="font-body text-sm text-muted-foreground">
              {getText('responseDesc')}
            </p>
          </div>
        </div>
      </div>
      {/* Social Media */}
      <div className="bg-card rounded-xl p-6 shadow-gentle border border-border">
        <h3 className="font-heading font-semibold text-foreground mb-4 flex items-center space-x-2">
          <Icon name="Share2" size={20} className="text-primary" />
          <span>{getText('socialMedia')}</span>
        </h3>
        <div className="flex items-center space-x-3">
          {socialLinks?.map((social, index) => (
            <a
              key={index}
              href={social?.url}
              className="w-10 h-10 bg-muted/50 hover:bg-primary/10 rounded-lg flex items-center justify-center transition-gentle hover:scale-105"
              aria-label={social?.label}
            >
              <Icon name={social?.icon} size={18} className="text-muted-foreground hover:text-primary transition-gentle" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;