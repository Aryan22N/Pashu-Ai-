import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BreedDetailsModal = ({ breed, onClose, language, t }) => {
  if (!breed) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-background rounded-xl shadow-gentle-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-lg overflow-hidden">
              <Image
                src={breed?.image}
                alt={language === 'hi' ? breed?.nameHi : breed?.nameEn}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading font-semibold text-xl text-foreground">
                {language === 'hi' ? breed?.nameHi : breed?.nameEn}
              </h2>
              {language !== 'hi' && (
                <p className="text-sm text-muted-foreground font-caption">
                  {breed?.nameHi}
                </p>
              )}
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            iconName="X"
          />
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Image and Basic Info */}
            <div className="space-y-6">
              {/* Main Image */}
              <div className="aspect-video rounded-lg overflow-hidden">
                <Image
                  src={breed?.image}
                  alt={language === 'hi' ? breed?.nameHi : breed?.nameEn}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="MapPin" size={20} className="text-primary" />
                    <span className="font-medium text-foreground">
                      {language === 'hi' ? 'क्षेत्र' : 'Region'}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {language === 'hi' ? breed?.regionHi : breed?.regionEn}
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Droplets" size={20} className="text-primary" />
                    <span className="font-medium text-foreground">
                      {language === 'hi' ? 'दूध उत्पादन' : 'Milk Production'}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {breed?.milkProduction}L/day
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Thermometer" size={20} className="text-primary" />
                    <span className="font-medium text-foreground">
                      {language === 'hi' ? 'जलवायु' : 'Climate'}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {language === 'hi' ? breed?.climateHi : breed?.climateEn}
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Tag" size={20} className="text-primary" />
                    <span className="font-medium text-foreground">
                      {language === 'hi' ? 'प्रकार' : 'Type'}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {language === 'hi' ? (breed?.type === 'cattle' ? 'गाय' : 'भैंस') : breed?.type}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Detailed Information */}
            <div className="space-y-6">
              {/* Description */}
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  {language === 'hi' ? 'विवरण' : 'Description'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'hi' ? breed?.descriptionHi : breed?.descriptionEn}
                </p>
              </div>

              {/* Breeding Characteristics */}
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  {language === 'hi' ? 'प्रजनन विशेषताएं' : 'Breeding Characteristics'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'hi' ? breed?.breedingCharacteristicsHi : breed?.breedingCharacteristicsEn}
                </p>
              </div>

              {/* Geographical Distribution */}
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  {language === 'hi' ? 'भौगोलिक वितरण' : 'Geographical Distribution'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'hi' ? breed?.geographicalDistributionHi : breed?.geographicalDistributionEn}
                </p>
              </div>

              {/* Agricultural Significance */}
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  {language === 'hi' ? 'कृषि महत्व' : 'Agricultural Significance'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'hi' ? breed?.agriculturalSignificanceHi : breed?.agriculturalSignificanceEn}
                </p>
              </div>

              {/* Additional Information */}
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-medium text-foreground mb-2">
                  {language === 'hi' ? 'मुख्य विशेषताएं:' : 'Key Features:'}
                </h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={14} className="text-success" />
                    <span>
                      {language === 'hi' 
                        ? `दैनिक दूध उत्पादन: ${breed?.milkProduction}L`
                        : `Daily milk production: ${breed?.milkProduction}L`
                      }
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={14} className="text-success" />
                    <span>
                      {language === 'hi' 
                        ? `${breed?.climateHi} जलवायु के लिए उपयुक्त`
                        : `Suitable for ${breed?.climateEn} climate`
                      }
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Check" size={14} className="text-success" />
                    <span>
                      {language === 'hi' ?'स्थानीय परिस्थितियों में अच्छी अनुकूलता' :'Good adaptability to local conditions'
                      }
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end space-x-3 p-6 border-t border-border">
          <Button
            variant="outline"
            onClick={onClose}
          >
            {language === 'hi' ? 'बंद करें' : 'Close'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BreedDetailsModal;