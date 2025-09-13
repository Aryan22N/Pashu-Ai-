import React, { useState } from 'react';
import { useLanguage } from '../../../components/ui/Header';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ContactForm = ({ onSubmit, isSubmitting }) => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    userType: '',
    category: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const translations = {
    en: {
      contactForm: 'Contact Form',
      fullName: 'Full Name',
      enterName: 'Enter your full name',
      emailAddress: 'Email Address',
      enterEmail: 'Enter your email address',
      phoneNumber: 'Phone Number',
      enterPhone: 'Enter your phone number',
      userType: 'User Type',
      selectUserType: 'Select your user type',
      farmer: 'Farmer',
      veterinarian: 'Veterinarian',
      researcher: 'Researcher',
      student: 'Student',
      other: 'Other',
      inquiryCategory: 'Inquiry Category',
      selectCategory: 'Select inquiry category',
      technicalSupport: 'Technical Support',
      breedInformation: 'Breed Information',
      partnership: 'Partnership Opportunities',
      feedback: 'General Feedback',
      reportIssue: 'Report Issue',
      message: 'Message',
      enterMessage: 'Please describe your inquiry or feedback in detail...',
      submitInquiry: 'Submit Inquiry',
      nameRequired: 'Name is required',
      emailRequired: 'Email is required',
      emailInvalid: 'Please enter a valid email address',
      phoneRequired: 'Phone number is required',
      phoneInvalid: 'Please enter a valid phone number',
      userTypeRequired: 'Please select your user type',
      categoryRequired: 'Please select an inquiry category',
      messageRequired: 'Message is required',
      messageMinLength: 'Message must be at least 10 characters long'
    },
    hi: {
      contactForm: 'संपर्क फॉर्म',
      fullName: 'पूरा नाम',
      enterName: 'अपना पूरा नाम दर्ज करें',
      emailAddress: 'ईमेल पता',
      enterEmail: 'अपना ईमेल पता दर्ज करें',
      phoneNumber: 'फोन नंबर',
      enterPhone: 'अपना फोन नंबर दर्ज करें',
      userType: 'उपयोगकर्ता प्रकार',
      selectUserType: 'अपना उपयोगकर्ता प्रकार चुनें',
      farmer: 'किसान',
      veterinarian: 'पशु चिकित्सक',
      researcher: 'शोधकर्ता',
      student: 'छात्र',
      other: 'अन्य',
      inquiryCategory: 'पूछताछ श्रेणी',
      selectCategory: 'पूछताछ श्रेणी चुनें',
      technicalSupport: 'तकनीकी सहायता',
      breedInformation: 'नस्ल की जानकारी',
      partnership: 'साझेदारी के अवसर',
      feedback: 'सामान्य प्रतिक्रिया',
      reportIssue: 'समस्या की रिपोर्ट करें',
      message: 'संदेश',
      enterMessage: 'कृपया अपनी पूछताछ या प्रतिक्रिया का विस्तार से वर्णन करें...',
      submitInquiry: 'पूछताछ भेजें',
      nameRequired: 'नाम आवश्यक है',
      emailRequired: 'ईमेल आवश्यक है',
      emailInvalid: 'कृपया एक वैध ईमेल पता दर्ज करें',
      phoneRequired: 'फोन नंबर आवश्यक है',
      phoneInvalid: 'कृपया एक वैध फोन नंबर दर्ज करें',
      userTypeRequired: 'कृपया अपना उपयोगकर्ता प्रकार चुनें',
      categoryRequired: 'कृपया एक पूछताछ श्रेणी चुनें',
      messageRequired: 'संदेश आवश्यक है',
      messageMinLength: 'संदेश कम से कम 10 अक्षर का होना चाहिए'
    }
  };

  const getText = (key) => translations?.[language]?.[key] || key;

  const userTypeOptions = [
    { value: 'farmer', label: getText('farmer') },
    { value: 'veterinarian', label: getText('veterinarian') },
    { value: 'researcher', label: getText('researcher') },
    { value: 'student', label: getText('student') },
    { value: 'other', label: getText('other') }
  ];

  const categoryOptions = [
    { value: 'technical', label: getText('technicalSupport') },
    { value: 'breed', label: getText('breedInformation') },
    { value: 'partnership', label: getText('partnership') },
    { value: 'feedback', label: getText('feedback') },
    { value: 'issue', label: getText('reportIssue') }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) {
      newErrors.name = getText('nameRequired');
    }

    if (!formData?.email?.trim()) {
      newErrors.email = getText('emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = getText('emailInvalid');
    }

    if (!formData?.phone?.trim()) {
      newErrors.phone = getText('phoneRequired');
    } else if (!/^[6-9]\d{9}$/?.test(formData?.phone?.replace(/\D/g, ''))) {
      newErrors.phone = getText('phoneInvalid');
    }

    if (!formData?.userType) {
      newErrors.userType = getText('userTypeRequired');
    }

    if (!formData?.category) {
      newErrors.category = getText('categoryRequired');
    }

    if (!formData?.message?.trim()) {
      newErrors.message = getText('messageRequired');
    } else if (formData?.message?.trim()?.length < 10) {
      newErrors.message = getText('messageMinLength');
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-gentle border border-border">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="MessageSquare" size={20} className="text-primary" />
        </div>
        <h2 className="text-xl font-heading font-semibold text-foreground">
          {getText('contactForm')}
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label={getText('fullName')}
            type="text"
            placeholder={getText('enterName')}
            value={formData?.name}
            onChange={(e) => handleInputChange('name', e?.target?.value)}
            error={errors?.name}
            required
          />

          <Input
            label={getText('emailAddress')}
            type="email"
            placeholder={getText('enterEmail')}
            value={formData?.email}
            onChange={(e) => handleInputChange('email', e?.target?.value)}
            error={errors?.email}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label={getText('phoneNumber')}
            type="tel"
            placeholder={getText('enterPhone')}
            value={formData?.phone}
            onChange={(e) => handleInputChange('phone', e?.target?.value)}
            error={errors?.phone}
            required
          />

          <Select
            label={getText('userType')}
            placeholder={getText('selectUserType')}
            options={userTypeOptions}
            value={formData?.userType}
            onChange={(value) => handleInputChange('userType', value)}
            error={errors?.userType}
            required
          />
        </div>

        <Select
          label={getText('inquiryCategory')}
          placeholder={getText('selectCategory')}
          options={categoryOptions}
          value={formData?.category}
          onChange={(value) => handleInputChange('category', value)}
          error={errors?.category}
          required
        />

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            {getText('message')} <span className="text-error">*</span>
          </label>
          <textarea
            placeholder={getText('enterMessage')}
            value={formData?.message}
            onChange={(e) => handleInputChange('message', e?.target?.value)}
            rows={6}
            className={`w-full px-4 py-3 border rounded-lg font-body text-sm transition-gentle focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none ${
              errors?.message 
                ? 'border-error bg-error/5' :'border-border bg-input hover:border-border/60'
            }`}
          />
          {errors?.message && (
            <p className="mt-2 text-sm text-error flex items-center space-x-1">
              <Icon name="AlertCircle" size={16} />
              <span>{errors?.message}</span>
            </p>
          )}
        </div>

        <Button
          type="submit"
          variant="default"
          size="lg"
          loading={isSubmitting}
          iconName="Send"
          iconPosition="right"
          className="w-full md:w-auto"
        >
          {getText('submitInquiry')}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;