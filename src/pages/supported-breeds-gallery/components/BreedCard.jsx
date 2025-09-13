import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BreedCard = ({ breed, onSelect, isSelected, onToggleDetails, language, t }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleSelectBreed = (e) => {
    e?.stopPropagation();
    onSelect(breed?.id);
  };

  return (
    <div className="group relative h-96 perspective-1000">
      <div 
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={handleCardFlip}
      >
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="bg-card rounded-xl shadow-gentle hover:shadow-gentle-lg transition-all duration-300 h-full overflow-hidden border border-border/50 hover:border-primary/20">
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={breed?.image}
                alt={language === 'hi' ? breed?.nameHi : breed?.nameEn}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Selection Checkbox */}
              <div className="absolute top-3 right-3">
                <button
                  onClick={handleSelectBreed}
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                    isSelected 
                      ? 'bg-primary border-primary text-primary-foreground' 
                      : 'bg-background/80 border-border hover:border-primary'
                  }`}
                >
                  {isSelected && <Icon name="Check" size={16} />}
                </button>
              </div>

              {/* Breed Type Badge */}
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  breed?.type === 'cattle' ?'bg-green-100 text-green-800' :'bg-blue-100 text-blue-800'
                }`}>
                  {language === 'hi' ? (breed?.type === 'cattle' ? 'गाय' : 'भैंस') : breed?.type}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col h-48">
              <div className="flex-1">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                  {language === 'hi' ? breed?.nameHi : breed?.nameEn}
                </h3>
                
                {language !== 'hi' && (
                  <p className="text-sm text-muted-foreground mb-2 font-caption">
                    {breed?.nameHi}
                  </p>
                )}

                <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                  {language === 'hi' ? breed?.descriptionHi : breed?.descriptionEn}
                </p>

                {/* Quick Stats */}
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Icon name="MapPin" size={12} />
                    <span>{language === 'hi' ? breed?.regionHi : breed?.regionEn}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Droplets" size={12} />
                    <span>{breed?.milkProduction}L/day</span>
                  </div>
                </div>
              </div>

              {/* Flip Indicator */}
              <div className="flex items-center justify-center mt-3 pt-3 border-t border-border">
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <Icon name="RotateCw" size={12} />
                  <span>{language === 'hi' ? 'विवरण के लिए फ्लिप करें' : 'Flip for details'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="bg-card rounded-xl shadow-gentle h-full overflow-hidden border border-border/50 p-4">
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-semibold text-lg text-foreground">
                  {language === 'hi' ? 'विस्तृत जानकारी' : 'Detailed Information'}
                </h3>
                <Icon name="RotateCcw" size={16} className="text-muted-foreground" />
              </div>

              <div className="flex-1 space-y-3 text-sm">
                <div>
                  <h4 className="font-medium text-foreground mb-1">
                    {language === 'hi' ? 'प्रजनन विशेषताएं:' : 'Breeding Characteristics:'}
                  </h4>
                  <p className="text-muted-foreground">
                    {language === 'hi' ? breed?.breedingCharacteristicsHi : breed?.breedingCharacteristicsEn}
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-1">
                    {language === 'hi' ? 'भौगोलिक वितरण:' : 'Geographical Distribution:'}
                  </h4>
                  <p className="text-muted-foreground">
                    {language === 'hi' ? breed?.geographicalDistributionHi : breed?.geographicalDistributionEn}
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-1">
                    {language === 'hi' ? 'कृषि महत्व:' : 'Agricultural Significance:'}
                  </h4>
                  <p className="text-muted-foreground">
                    {language === 'hi' ? breed?.agriculturalSignificanceHi : breed?.agriculturalSignificanceEn}
                  </p>
                </div>

                {/* Climate Adaptability */}
                <div className="flex items-center space-x-2">
                  <Icon name="Thermometer" size={16} className="text-primary" />
                  <span className="text-xs font-medium">
                    {language === 'hi' ? 'जलवायु:' : 'Climate:'} {language === 'hi' ? breed?.climateHi : breed?.climateEn}
                  </span>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                fullWidth
                onClick={(e) => {
                  e?.stopPropagation();
                  onToggleDetails(breed);
                }}
                iconName="ExternalLink"
                iconPosition="right"
                className="mt-3"
              >
                {language === 'hi' ? 'पूरा विवरण देखें' : 'View Full Details'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreedCard;