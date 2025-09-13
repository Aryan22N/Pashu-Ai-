import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const ConfidenceGauge = ({ confidence }) => {
  const percentage = Math.round(confidence * 100);
  const strokeDasharray = 2 * Math.PI * 45;
  const strokeDashoffset = strokeDasharray - (strokeDasharray * confidence);
  
  const getConfidenceColor = (conf) => {
    if (conf >= 0.8) return 'text-success';
    if (conf >= 0.6) return 'text-warning';
    return 'text-error';
  };

  return (
    <div className="relative w-24 h-24 mx-auto">
      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          className="text-muted opacity-20"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          className={`transition-all duration-1000 ease-out ${getConfidenceColor(confidence)}`}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className={`text-xl font-bold ${getConfidenceColor(confidence)}`}>
            {percentage}%
          </div>
          <div className="text-xs text-muted-foreground">
            Confidence
          </div>
        </div>
      </div>
    </div>
  );
};

const ResultCard = ({ result, onRetry }) => {
  const [showDetails, setShowDetails] = useState(false);

  if (!result) return null;

  const { breedName, confidence, breedInfo, timestamp } = result;

  return (
    <div className="w-full bg-card rounded-xl border border-border shadow-gentle overflow-hidden">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
              <Icon name="CheckCircle" size={20} className="text-success" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg text-foreground">
                Breed Identified
              </h3>
              <p className="text-xs text-muted-foreground">
                {new Date(timestamp)?.toLocaleString()}
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            iconName="RotateCcw"
            onClick={onRetry}
          >
            Try Again
          </Button>
        </div>

        {/* Result */}
        <div className="text-center space-y-4">
          <ConfidenceGauge confidence={confidence} />
          
          <div className="space-y-2">
            <h2 className="font-heading font-bold text-2xl text-primary">
              {breedName}
            </h2>
            <p className="text-muted-foreground text-sm">
              {confidence >= 0.8 ? 'High confidence match' : 
               confidence >= 0.6 ? 'Moderate confidence match': 'Low confidence - please verify'}
            </p>
          </div>
        </div>

        {/* Breed Info Preview */}
        {breedInfo && (
          <div className="bg-muted/30 rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-foreground">Breed Information</h4>
              <Button
                variant="ghost"
                size="sm"
                iconName={showDetails ? "ChevronUp" : "ChevronDown"}
                onClick={() => setShowDetails(!showDetails)}
              >
                {showDetails ? 'Less' : 'More'}
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Origin:</span>
                <span className="ml-2 font-medium">{breedInfo?.origin}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Type:</span>
                <span className="ml-2 font-medium">{breedInfo?.type}</span>
              </div>
            </div>

            {showDetails && (
              <div className="space-y-3 pt-3 border-t border-border">
                <div>
                  <h5 className="font-medium text-sm mb-1">Characteristics:</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {breedInfo?.characteristics}
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-sm mb-1">Primary Use:</h5>
                  <p className="text-xs text-muted-foreground">
                    {breedInfo?.primaryUse}
                  </p>
                </div>
                {breedInfo?.averageWeight && (
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-muted-foreground">Avg. Weight:</span>
                      <span className="ml-2 font-medium">{breedInfo?.averageWeight}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Milk Yield:</span>
                      <span className="ml-2 font-medium">{breedInfo?.milkYield || 'N/A'}</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="default"
            iconName="BookOpen"
            iconPosition="left"
            className="flex-1"
          >
            Learn More
          </Button>
          <Button
            variant="outline"
            iconName="Share2"
            iconPosition="left"
            className="flex-1"
          >
            Share Result
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;