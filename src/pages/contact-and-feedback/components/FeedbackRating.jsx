import React, { useState } from 'react';
import { useLanguage } from '../../../components/ui/Header';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const StarRating = ({ rating, onRatingChange, label, disabled = false }) => {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-foreground">
        {label}
      </label>
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5]?.map((star) => (
          <button
            key={star}
            type="button"
            disabled={disabled}
            onClick={() => !disabled && onRatingChange(star)}
            onMouseEnter={() => !disabled && setHoverRating(star)}
            onMouseLeave={() => !disabled && setHoverRating(0)}
            className={`p-1 transition-gentle ${
              disabled ? 'cursor-not-allowed' : 'cursor-pointer hover:scale-110'
            }`}
          >
            <Icon
              name="Star"
              size={24}
              className={`transition-gentle ${
                star <= (hoverRating || rating)
                  ? 'text-accent fill-current' :'text-muted-foreground'
              }`}
            />
          </button>
        ))}
        <span className="ml-3 text-sm text-muted-foreground">
          {rating > 0 ? `${rating}/5` : 'Not rated'}
        </span>
      </div>
    </div>
  );
};

const FeedbackRating = ({ onSubmit, isSubmitting }) => {
  const { language } = useLanguage();
  const [ratings, setRatings] = useState({
    accuracy: 0,
    easeOfUse: 0,
    overall: 0
  });
  const [additionalFeedback, setAdditionalFeedback] = useState('');

  const translations = {
    en: {
      feedbackRating: 'Service Rating & Feedback',
      rateExperience: 'Rate Your Experience',
      accuracy: 'Breed Identification Accuracy',
      accuracyDesc: 'How accurate were the breed identification results?',
      easeOfUse: 'Ease of Use',
      easeDesc: 'How easy was it to use the application?',
      overall: 'Overall Satisfaction',
      overallDesc: 'How satisfied are you with the overall service?',
      additionalFeedback: 'Additional Feedback',
      feedbackPlaceholder: 'Share any additional thoughts, suggestions, or specific issues you encountered...',
      submitFeedback: 'Submit Feedback',
      thankYou: 'Thank you for your feedback!',
      ratingRequired: 'Please provide at least one rating before submitting'
    },
    hi: {
      feedbackRating: 'सेवा रेटिंग और प्रतिक्रिया',
      rateExperience: 'अपने अनुभव को रेट करें',
      accuracy: 'नस्ल पहचान की सटीकता',
      accuracyDesc: 'नस्ल पहचान के परिणाम कितने सटीक थे?',
      easeOfUse: 'उपयोग में आसानी',
      easeDesc: 'एप्लिकेशन का उपयोग करना कितना आसान था?',
      overall: 'समग्र संतुष्टि',
      overallDesc: 'आप समग्र सेवा से कितने संतुष्ट हैं?',
      additionalFeedback: 'अतिरिक्त प्रतिक्रिया',
      feedbackPlaceholder: 'कोई भी अतिरिक्त विचार, सुझाव, या विशिष्ट समस्याएं साझा करें जिनका आपने सामना किया...',
      submitFeedback: 'प्रतिक्रिया भेजें',
      thankYou: 'आपकी प्रतिक्रिया के लिए धन्यवाद!',
      ratingRequired: 'कृपया सबमिट करने से पहले कम से कम एक रेटिंग प्रदान करें'
    }
  };

  const getText = (key) => translations?.[language]?.[key] || key;

  const handleRatingChange = (category, rating) => {
    setRatings(prev => ({ ...prev, [category]: rating }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    
    const hasRating = Object.values(ratings)?.some(rating => rating > 0);
    if (!hasRating) {
      alert(getText('ratingRequired'));
      return;
    }

    const feedbackData = {
      ratings,
      additionalFeedback,
      timestamp: new Date()?.toISOString()
    };

    onSubmit(feedbackData);
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-gentle border border-border">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon name="Star" size={20} className="text-accent" />
        </div>
        <div>
          <h2 className="text-xl font-heading font-semibold text-foreground">
            {getText('feedbackRating')}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            {getText('rateExperience')}
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-6">
          <div className="p-4 bg-muted/30 rounded-lg">
            <StarRating
              rating={ratings?.accuracy}
              onRatingChange={(rating) => handleRatingChange('accuracy', rating)}
              label={getText('accuracy')}
              disabled={isSubmitting}
            />
            <p className="text-xs text-muted-foreground mt-2">
              {getText('accuracyDesc')}
            </p>
          </div>

          <div className="p-4 bg-muted/30 rounded-lg">
            <StarRating
              rating={ratings?.easeOfUse}
              onRatingChange={(rating) => handleRatingChange('easeOfUse', rating)}
              label={getText('easeOfUse')}
              disabled={isSubmitting}
            />
            <p className="text-xs text-muted-foreground mt-2">
              {getText('easeDesc')}
            </p>
          </div>

          <div className="p-4 bg-muted/30 rounded-lg">
            <StarRating
              rating={ratings?.overall}
              onRatingChange={(rating) => handleRatingChange('overall', rating)}
              label={getText('overall')}
              disabled={isSubmitting}
            />
            <p className="text-xs text-muted-foreground mt-2">
              {getText('overallDesc')}
            </p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            {getText('additionalFeedback')}
          </label>
          <textarea
            placeholder={getText('feedbackPlaceholder')}
            value={additionalFeedback}
            onChange={(e) => setAdditionalFeedback(e?.target?.value)}
            rows={4}
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-border rounded-lg font-body text-sm transition-gentle focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none bg-input hover:border-border/60 disabled:opacity-50"
          />
        </div>

        <Button
          type="submit"
          variant="default"
          size="lg"
          loading={isSubmitting}
          iconName="ThumbsUp"
          iconPosition="right"
          className="w-full md:w-auto"
        >
          {getText('submitFeedback')}
        </Button>
      </form>
    </div>
  );
};

export default FeedbackRating;