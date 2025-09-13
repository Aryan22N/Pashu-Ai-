import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const ImageUploadZone = ({ onImageUpload, isProcessing, selectedImage }) => {
  const [dragActive, setDragActive] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles?.length > 0) {
      const file = acceptedFiles?.[0];
      onImageUpload(file);
    }
  }, [onImageUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    multiple: false,
    disabled: isProcessing
  });

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 cursor-pointer
          ${isDragActive 
            ? 'border-primary bg-primary/5 scale-[1.02]' 
            : 'border-border hover:border-primary/50 hover:bg-muted/30'
          }
          ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        <input {...getInputProps()} />
        
        {selectedImage ? (
          <div className="space-y-4">
            <div className="relative mx-auto w-48 h-48 rounded-lg overflow-hidden shadow-gentle">
              <Image
                src={URL.createObjectURL(selectedImage)}
                alt="Selected cattle image"
                className="w-full h-full object-cover"
              />
              {!isProcessing && (
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <Button
                    variant="secondary"
                    size="sm"
                    iconName="RefreshCw"
                    iconPosition="left"
                  >
                    Change Image
                  </Button>
                </div>
              )}
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="font-medium">{selectedImage?.name}</p>
              <p>{(selectedImage?.size / 1024 / 1024)?.toFixed(2)} MB</p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon 
                name="Upload" 
                size={32} 
                className="text-primary"
              />
            </div>
            
            <div className="space-y-2">
              <h3 className="font-heading font-semibold text-lg text-foreground">
                Upload Cattle or Buffalo Image
              </h3>
              <p className="text-muted-foreground text-sm max-w-md mx-auto">
                Drag and drop your image here, or click to browse files. 
                For best results, use clear, well-lit photos showing the full animal.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
              <Button
                variant="default"
                iconName="Camera"
                iconPosition="left"
                disabled={isProcessing}
              >
                Choose Image
              </Button>
              <div className="text-xs text-muted-foreground">
                Supports: JPG, PNG, WEBP (Max 10MB)
              </div>
            </div>
          </div>
        )}
        
        {isDragActive && (
          <div className="absolute inset-0 bg-primary/5 border-2 border-primary border-dashed rounded-xl flex items-center justify-center">
            <div className="text-center">
              <Icon name="Download" size={48} className="text-primary mx-auto mb-2" />
              <p className="font-medium text-primary">Drop image here</p>
            </div>
          </div>
        )}
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Icon name="CheckCircle" size={16} className="text-success" />
          <span>High quality images</span>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="Sun" size={16} className="text-warning" />
          <span>Good lighting preferred</span>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="Eye" size={16} className="text-accent" />
          <span>Full animal visible</span>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadZone;