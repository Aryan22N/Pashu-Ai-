import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ErrorMessage = ({ error, onRetry, onClear }) => {
  if (!error) return null;

  const getErrorIcon = (errorType) => {
    switch (errorType) {
      case 'upload': return 'Upload';
      case 'network': return 'Wifi';
      case 'processing': return 'AlertCircle';
      default: return 'AlertTriangle';
    }
  };

  const getErrorTitle = (errorType) => {
    switch (errorType) {
      case 'upload': return 'Upload Failed';
      case 'network': return 'Connection Error';
      case 'processing': return 'Processing Error';
      default: return 'Something Went Wrong';
    }
  };

  return (
    <div className="w-full bg-error/5 border border-error/20 rounded-xl p-6">
      <div className="text-center space-y-4">
        <div className="mx-auto w-12 h-12 bg-error/10 rounded-full flex items-center justify-center">
          <Icon 
            name={getErrorIcon(error?.type)} 
            size={24} 
            className="text-error" 
          />
        </div>
        
        <div className="space-y-2">
          <h3 className="font-heading font-semibold text-lg text-error">
            {getErrorTitle(error?.type)}
          </h3>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            {error?.message}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            variant="outline"
            iconName="RefreshCw"
            iconPosition="left"
            onClick={onRetry}
          >
            Try Again
          </Button>
          <Button
            variant="ghost"
            iconName="X"
            iconPosition="left"
            onClick={onClear}
          >
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;