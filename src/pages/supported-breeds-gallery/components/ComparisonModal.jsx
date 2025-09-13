import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ComparisonModal = ({ breeds, onClose, language, t }) => {
  if (!breeds || breeds?.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-background rounded-xl shadow-gentle-lg max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-heading font-semibold text-xl text-foreground">
            {language === 'hi' ? 'नस्ल तुलना' : 'Breed Comparison'}
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            iconName="X"
          />
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className={`grid gap-6 ${breeds?.length === 2 ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
            {breeds?.map((breed) => (
              <div key={breed?.id} className="bg-card rounded-lg border border-border p-6">
                {/* Breed Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={breed?.image}
                      alt={language === 'hi' ? breed?.nameHi : breed?.nameEn}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                      {language === 'hi' ? breed?.nameHi : breed?.nameEn}
                    </h3>
                    {language !== 'hi' && (
                      <p className="text-sm text-muted-foreground mb-2 font-caption">
                        {breed?.nameHi}
                      </p>
                    )}
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        breed?.type === 'cattle' ?'bg-green-100 text-green-800' :'bg-blue-100 text-blue-800'
                      }`}>
                        {language === 'hi' ? (breed?.type === 'cattle' ? 'गाय' : 'भैंस') : breed?.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Comparison Details */}
                <div className="space-y-4">
                  {/* Basic Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted/30 rounded-lg p-3">
                      <div className="flex items-center space-x-2 mb-1">
                        <Icon name="MapPin" size={16} className="text-primary" />
                        <span className="text-sm font-medium text-foreground">
                          {language === 'hi' ? 'क्षेत्र' : 'Region'}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {language === 'hi' ? breed?.regionHi : breed?.regionEn}
                      </p>
                    </div>

                    <div className="bg-muted/30 rounded-lg p-3">
                      <div className="flex items-center space-x-2 mb-1">
                        <Icon name="Droplets" size={16} className="text-primary" />
                        <span className="text-sm font-medium text-foreground">
                          {language === 'hi' ? 'दूध उत्पादन' : 'Milk Production'}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {breed?.milkProduction}L/day
                      </p>
                    </div>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <Icon name="Thermometer" size={16} className="text-primary" />
                      <span className="text-sm font-medium text-foreground">
                        {language === 'hi' ? 'जलवायु अनुकूलता' : 'Climate Adaptability'}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {language === 'hi' ? breed?.climateHi : breed?.climateEn}
                    </p>
                  </div>

                  {/* Detailed Information */}
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-foreground mb-2 text-sm">
                        {language === 'hi' ? 'प्रजनन विशेषताएं:' : 'Breeding Characteristics:'}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {language === 'hi' ? breed?.breedingCharacteristicsHi : breed?.breedingCharacteristicsEn}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-foreground mb-2 text-sm">
                        {language === 'hi' ? 'भौगोलिक वितरण:' : 'Geographical Distribution:'}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {language === 'hi' ? breed?.geographicalDistributionHi : breed?.geographicalDistributionEn}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-foreground mb-2 text-sm">
                        {language === 'hi' ? 'कृषि महत्व:' : 'Agricultural Significance:'}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {language === 'hi' ? breed?.agriculturalSignificanceHi : breed?.agriculturalSignificanceEn}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

export default ComparisonModal;