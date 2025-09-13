import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const PredictionHistoryItem = ({ prediction, onSelect }) => {
  const { id, breedName, confidence, timestamp, imageUrl } = prediction;
  const timeAgo = new Date(Date.now() - timestamp)?.toLocaleString();

  return (
    <div 
      className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted/30 transition-gentle cursor-pointer"
      onClick={() => onSelect(prediction)}
    >
      <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={imageUrl}
          alt={`${breedName} prediction`}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-sm text-foreground truncate">
            {breedName}
          </h4>
          <span className="text-xs text-muted-foreground ml-2">
            {Math.round(confidence * 100)}%
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          {timeAgo}
        </p>
      </div>
      
      <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
    </div>
  );
};

const RecentPredictions = ({ predictions, onSelectPrediction, onClearHistory }) => {
  if (!predictions || predictions?.length === 0) {
    return (
      <div className="w-full bg-card rounded-xl border border-border p-6">
        <div className="text-center space-y-3">
          <div className="mx-auto w-12 h-12 bg-muted/30 rounded-full flex items-center justify-center">
            <Icon name="History" size={24} className="text-muted-foreground" />
          </div>
          <div>
            <h3 className="font-medium text-foreground">No Recent Predictions</h3>
            <p className="text-sm text-muted-foreground">
              Your identification history will appear here
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-card rounded-xl border border-border shadow-gentle">
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="History" size={20} className="text-primary" />
            <h3 className="font-heading font-semibold text-foreground">
              Recent Predictions
            </h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            iconName="Trash2"
            onClick={onClearHistory}
          >
            Clear
          </Button>
        </div>
      </div>
      <div className="p-4 space-y-2 max-h-80 overflow-y-auto">
        {predictions?.slice(0, 5)?.map((prediction) => (
          <PredictionHistoryItem
            key={prediction?.id}
            prediction={prediction}
            onSelect={onSelectPrediction}
          />
        ))}
      </div>
      {predictions?.length > 5 && (
        <div className="p-4 border-t border-border text-center">
          <Button variant="ghost" size="sm">
            View All ({predictions?.length})
          </Button>
        </div>
      )}
    </div>
  );
};

export default RecentPredictions;