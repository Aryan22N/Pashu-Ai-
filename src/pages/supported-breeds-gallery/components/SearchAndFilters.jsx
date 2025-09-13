import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const SearchAndFilters = ({ 
  searchTerm, 
  onSearchChange, 
  filters, 
  onFilterChange, 
  totalCount,
  filteredCount,
  onClearFilters,
  language,
  t 
}) => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const breedTypeOptions = [
    { value: 'all', label: language === 'hi' ? 'सभी' : 'All' },
    { value: 'cattle', label: language === 'hi' ? 'गाय' : 'Cattle' },
    { value: 'buffalo', label: language === 'hi' ? 'भैंस' : 'Buffalo' }
  ];

  const regionOptions = [
    { value: 'all', label: language === 'hi' ? 'सभी क्षेत्र' : 'All Regions' },
    { value: 'north', label: language === 'hi' ? 'उत्तर भारत' : 'North India' },
    { value: 'south', label: language === 'hi' ? 'दक्षिण भारत' : 'South India' },
    { value: 'east', label: language === 'hi' ? 'पूर्व भारत' : 'East India' },
    { value: 'west', label: language === 'hi' ? 'पश्चिम भारत' : 'West India' },
    { value: 'central', label: language === 'hi' ? 'मध्य भारत' : 'Central India' }
  ];

  const milkProductionOptions = [
    { value: 'all', label: language === 'hi' ? 'सभी' : 'All' },
    { value: 'high', label: language === 'hi' ? 'उच्च (>15L/दिन)' : 'High (>15L/day)' },
    { value: 'medium', label: language === 'hi' ? 'मध्यम (8-15L/दिन)' : 'Medium (8-15L/day)' },
    { value: 'low', label: language === 'hi' ? 'कम (<8L/दिन)' : 'Low (<8L/day)' }
  ];

  const climateOptions = [
    { value: 'all', label: language === 'hi' ? 'सभी जलवायु' : 'All Climates' },
    { value: 'tropical', label: language === 'hi' ? 'उष्णकटिबंधीय' : 'Tropical' },
    { value: 'subtropical', label: language === 'hi' ? 'उपोष्णकटिबंधीय' : 'Subtropical' },
    { value: 'temperate', label: language === 'hi' ? 'समशीतोष्ण' : 'Temperate' },
    { value: 'arid', label: language === 'hi' ? 'शुष्क' : 'Arid' }
  ];

  const toggleMobileFilters = () => {
    setShowMobileFilters(!showMobileFilters);
  };

  return (
    <div className="bg-card rounded-xl shadow-gentle p-6 mb-8">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Input
            type="search"
            placeholder={language === 'hi' ? 'नस्ल खोजें...' : 'Search breeds...'}
            value={searchTerm}
            onChange={(e) => onSearchChange(e?.target?.value)}
            className="pl-12"
          />
          <Icon 
            name="Search" 
            size={20} 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
          />
        </div>
      </div>
      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-sm text-muted-foreground">
          {language === 'hi' ? (
            <>
              <span className="font-medium text-foreground">{filteredCount}</span> में से{' '}
              <span className="font-medium text-foreground">{totalCount}</span> नस्लें दिखाई जा रही हैं
            </>
          ) : (
            <>
              Showing <span className="font-medium text-foreground">{filteredCount}</span> of{' '}
              <span className="font-medium text-foreground">{totalCount}</span> breeds
            </>
          )}
        </div>

        {/* Mobile Filter Toggle */}
        <Button
          variant="outline"
          size="sm"
          onClick={toggleMobileFilters}
          className="md:hidden"
          iconName="Filter"
          iconPosition="left"
        >
          {language === 'hi' ? 'फिल्टर' : 'Filters'}
        </Button>
      </div>
      {/* Desktop Filters */}
      <div className="hidden md:grid grid-cols-1 lg:grid-cols-4 gap-4">
        <Select
          label={language === 'hi' ? 'नस्ल का प्रकार' : 'Breed Type'}
          options={breedTypeOptions}
          value={filters?.type}
          onChange={(value) => onFilterChange('type', value)}
        />

        <Select
          label={language === 'hi' ? 'क्षेत्र' : 'Region'}
          options={regionOptions}
          value={filters?.region}
          onChange={(value) => onFilterChange('region', value)}
        />

        <Select
          label={language === 'hi' ? 'दूध उत्पादन' : 'Milk Production'}
          options={milkProductionOptions}
          value={filters?.milkProduction}
          onChange={(value) => onFilterChange('milkProduction', value)}
        />

        <Select
          label={language === 'hi' ? 'जलवायु अनुकूलता' : 'Climate Adaptability'}
          options={climateOptions}
          value={filters?.climate}
          onChange={(value) => onFilterChange('climate', value)}
        />
      </div>
      {/* Mobile Filters Slide Panel */}
      {showMobileFilters && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/50" onClick={toggleMobileFilters}>
          <div 
            className="absolute right-0 top-0 h-full w-80 max-w-[90vw] bg-background shadow-gentle-lg overflow-y-auto"
            onClick={(e) => e?.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading font-semibold text-lg">
                  {language === 'hi' ? 'फिल्टर' : 'Filters'}
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleMobileFilters}
                  iconName="X"
                />
              </div>

              <div className="space-y-4">
                <Select
                  label={language === 'hi' ? 'नस्ल का प्रकार' : 'Breed Type'}
                  options={breedTypeOptions}
                  value={filters?.type}
                  onChange={(value) => onFilterChange('type', value)}
                />

                <Select
                  label={language === 'hi' ? 'क्षेत्र' : 'Region'}
                  options={regionOptions}
                  value={filters?.region}
                  onChange={(value) => onFilterChange('region', value)}
                />

                <Select
                  label={language === 'hi' ? 'दूध उत्पादन' : 'Milk Production'}
                  options={milkProductionOptions}
                  value={filters?.milkProduction}
                  onChange={(value) => onFilterChange('milkProduction', value)}
                />

                <Select
                  label={language === 'hi' ? 'जलवायु अनुकूलता' : 'Climate Adaptability'}
                  options={climateOptions}
                  value={filters?.climate}
                  onChange={(value) => onFilterChange('climate', value)}
                />
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <Button
                  variant="outline"
                  fullWidth
                  onClick={onClearFilters}
                  iconName="RotateCcw"
                  iconPosition="left"
                >
                  {language === 'hi' ? 'फिल्टर साफ़ करें' : 'Clear Filters'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Clear Filters Button (Desktop) */}
      {(filters?.type !== 'all' || filters?.region !== 'all' || filters?.milkProduction !== 'all' || filters?.climate !== 'all') && (
        <div className="hidden md:flex justify-end mt-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            iconName="RotateCcw"
            iconPosition="left"
          >
            {language === 'hi' ? 'फिल्टर साफ़ करें' : 'Clear Filters'}
          </Button>
        </div>
      )}
    </div>
  );
};

export default SearchAndFilters;