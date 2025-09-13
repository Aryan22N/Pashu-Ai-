import React from 'react';
import Icon from '../../../components/AppIcon';

const InstructionStep = ({ icon, title, description, stepNumber }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0">
        <div className="relative">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
            <Icon name={icon} size={20} className="text-primary" />
          </div>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
            {stepNumber}
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const InstructionsPanel = () => {
  const instructions = [
    {
      icon: "Camera",
      title: "Take or Upload Photo",
      description: "Capture a clear image of your cattle or buffalo, or upload an existing photo from your device."
    },
    {
      icon: "Upload",
      title: "Submit for Analysis",
      description: "Our AI will process your image using advanced computer vision and machine learning algorithms."
    },
    {
      icon: "Brain",
      title: "Get Breed Identification",
      description: "Receive instant results with breed name, confidence score, and detailed breed information."
    },
    {
      icon: "BookOpen",
      title: "Learn More",
      description: "Explore comprehensive breed details including characteristics, origin, and farming recommendations."
    }
  ];

  return (
    <div className="w-full bg-card rounded-xl border border-border p-6 shadow-gentle">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Icon name="Info" size={20} className="text-primary" />
          <h3 className="font-heading font-semibold text-lg text-foreground">
            How It Works
          </h3>
        </div>
        <p className="text-sm text-muted-foreground">
          Follow these simple steps to identify your cattle or buffalo breed
        </p>
      </div>
      <div className="space-y-6">
        {instructions?.map((instruction, index) => (
          <InstructionStep
            key={index}
            icon={instruction?.icon}
            title={instruction?.title}
            description={instruction?.description}
            stepNumber={index + 1}
          />
        ))}
      </div>
      <div className="mt-6 p-4 bg-accent/5 border border-accent/20 rounded-lg">
        <div className="flex items-start gap-3">
          <Icon name="Lightbulb" size={20} className="text-accent flex-shrink-0 mt-0.5" />
          <div>
            <h5 className="font-medium text-accent mb-1">Pro Tips</h5>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Use natural lighting for better results</li>
              <li>• Ensure the animal is clearly visible</li>
              <li>• Avoid blurry or low-quality images</li>
              <li>• Include distinctive breed features</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionsPanel;