import React from 'react';
import Icon from '../../../components/AppIcon';

const ProcessingLoader = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="w-full bg-card rounded-xl border border-border p-8 shadow-gentle">
      <div className="text-center space-y-6">
        <div className="relative mx-auto w-20 h-20">
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon name="Brain" size={32} className="text-primary" />
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="font-heading font-semibold text-lg text-foreground">
            Analyzing Image...
          </h3>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Our AI is examining the image to identify the breed. This usually takes a few seconds.
          </p>
        </div>
        
        <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span>Processing</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse animation-delay-200"></div>
            <span>Analyzing</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse animation-delay-400"></div>
            <span>Identifying</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessingLoader;