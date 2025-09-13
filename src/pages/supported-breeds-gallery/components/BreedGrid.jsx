import React from 'react';
import BreedCard from './BreedCard';

const BreedGrid = ({ 
  breeds, 
  selectedBreeds, 
  onSelectBreed, 
  onToggleDetails, 
  language, 
  t 
}) => {
  if (breeds?.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-muted-foreground"
          >
            <path
              d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9C15 10.1 14.1 11 13 11S11 10.1 11 9V7.5L5 7V9C5 10.1 4.1 11 3 11S1 10.1 1 9V7C1 6.4 1.4 6 2 6L10 6.5C10.6 6.5 11 6.9 11 7.5V9C11 9.6 11.4 10 12 10S13 9.6 13 9V7.5C13 6.9 13.4 6.5 14 6.5L22 6C22.6 6 23 6.4 23 7V9C23 10.1 22.1 11 21 11S19 10.1 19 9ZM12 13C8.7 13 6 15.7 6 19V21C6 21.6 6.4 22 7 22H17C17.6 22 18 21.6 18 21V19C18 15.7 15.3 13 12 13Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
          {language === 'hi' ? 'कोई नस्ल नहीं मिली' : 'No breeds found'}
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          {language === 'hi' ?'आपके खोज मानदंडों से मेल खाने वाली कोई नस्ल नहीं मिली। कृपया अपने फिल्टर समायोजित करें।' :'No breeds match your search criteria. Please adjust your filters or search terms.'
          }
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {breeds?.map((breed) => (
        <BreedCard
          key={breed?.id}
          breed={breed}
          isSelected={selectedBreeds?.includes(breed?.id)}
          onSelect={onSelectBreed}
          onToggleDetails={onToggleDetails}
          language={language}
          t={t}
        />
      ))}
    </div>
  );
};

export default BreedGrid;