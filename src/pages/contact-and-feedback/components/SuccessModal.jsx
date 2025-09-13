import React from 'react';
import { useLanguage } from '../../../components/ui/Header';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SuccessModal = ({ isOpen, onClose, type = 'contact' }) => {
  const { language } = useLanguage();

  const translations = {
    en: {
      contactSuccess: 'Message Sent Successfully!',
      feedbackSuccess: 'Feedback Submitted Successfully!',
      contactMessage: 'Thank you for reaching out to us. We have received your inquiry and will respond within 24 hours during business days.',
      feedbackMessage: 'Thank you for your valuable feedback. Your input helps us improve our cattle breed identification service.',
      nextSteps: 'What happens next?',
      contactSteps: [
        'Our support team will review your inquiry',
        'You will receive an acknowledgment email shortly',
        'We will respond with a detailed solution within 24 hours',
        'For urgent matters, feel free to call our support line'
      ],
      feedbackSteps: [
        'Your feedback has been recorded in our system',
        'Our development team will review your suggestions',
        'We may contact you for additional details if needed',
        'Keep an eye out for updates in future releases'
      ],
      referenceNumber: 'Reference Number',
      close: 'Close',
      backToHome: 'Back to Home'
    },
    hi: {
      contactSuccess: 'संदेश सफलतापूर्वक भेजा गया!',
      feedbackSuccess: 'प्रतिक्रिया सफलतापूर्वक सबमिट की गई!',
      contactMessage: 'हमसे संपर्क करने के लिए धन्यवाद। हमें आपकी पूछताछ प्राप्त हुई है और हम व्यावसायिक दिनों में 24 घंटे के भीतर जवाब देंगे।',
      feedbackMessage: 'आपकी मूल्यवान प्रतिक्रिया के लिए धन्यवाद। आपका इनपुट हमारी मवेशी नस्ल पहचान सेवा को बेहतर बनाने में मदद करता है।',
      nextSteps: 'आगे क्या होता है?',
      contactSteps: [
        'हमारी सहायता टीम आपकी पूछताछ की समीक्षा करेगी',
        'आपको जल्द ही एक पुष्टिकरण ईमेल प्राप्त होगा',
        'हम 24 घंटे के भीतर विस्तृत समाधान के साथ जवाब देंगे',
        'तत्काल मामलों के लिए, हमारी सहायता लाइन पर कॉल करने में संकोच न करें'
      ],
      feedbackSteps: [
        'आपकी प्रतिक्रिया हमारे सिस्टम में दर्ज कर दी गई है',
        'हमारी विकास टीम आपके सुझावों की समीक्षा करेगी',
        'यदि आवश्यक हो तो हम अतिरिक्त विवरण के लिए आपसे संपर्क कर सकते हैं',
        'भविष्य की रिलीज़ में अपडेट के लिए नज़र रखें'
      ],
      referenceNumber: 'संदर्भ संख्या',
      close: 'बंद करें',
      backToHome: 'होम पर वापस जाएं'
    }
  };

  const getText = (key) => translations?.[language]?.[key] || key;

  if (!isOpen) return null;

  const isContact = type === 'contact';
  const referenceId = `CBR-${Date.now()?.toString()?.slice(-6)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-card rounded-2xl p-8 shadow-gentle-lg border border-border max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
            <Icon name="CheckCircle" size={32} className="text-success" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-heading font-semibold text-foreground text-center mb-4">
          {isContact ? getText('contactSuccess') : getText('feedbackSuccess')}
        </h2>

        {/* Message */}
        <p className="font-body text-muted-foreground text-center mb-6">
          {isContact ? getText('contactMessage') : getText('feedbackMessage')}
        </p>

        {/* Reference Number */}
        <div className="bg-muted/30 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <span className="font-body text-sm text-muted-foreground">
              {getText('referenceNumber')}:
            </span>
            <span className="font-mono text-sm font-semibold text-foreground">
              {referenceId}
            </span>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mb-6">
          <h3 className="font-heading font-semibold text-foreground mb-3 flex items-center space-x-2">
            <Icon name="List" size={18} className="text-primary" />
            <span>{getText('nextSteps')}</span>
          </h3>
          <ul className="space-y-2">
            {(isContact ? getText('contactSteps') : getText('feedbackSteps'))?.map((step, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-primary">
                    {index + 1}
                  </span>
                </div>
                <span className="font-body text-sm text-muted-foreground">
                  {step}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1"
          >
            {getText('close')}
          </Button>
          <Button
            variant="default"
            onClick={() => {
              onClose();
              window.location.href = '/home-landing';
            }}
            iconName="Home"
            iconPosition="left"
            className="flex-1"
          >
            {getText('backToHome')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;