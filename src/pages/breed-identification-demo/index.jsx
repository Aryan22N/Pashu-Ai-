import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import { useLanguage } from '../../contexts/LanguageContext';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';
import ImageUploadZone from './components/ImageUploadZone';
import ProcessingLoader from './components/ProcessingLoader';
import ResultCard from './components/ResultCard';
import ErrorMessage from './components/ErrorMessage';
import RecentPredictions from './components/RecentPredictions';
import InstructionsPanel from './components/InstructionsPanel';
import { identifyBreedWithOpenAI } from '../../services/breedIdentificationService';

// Mock API function to simulate breed identification
const mockPredictAPI = async (imageFile) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 2000));
  
  // Mock breed data
  const mockBreeds = [
    {
      breedName: "Gir",
      confidence: 0.92,
      breedInfo: {
        origin: "Gujarat, India",
        type: "Dairy Cattle",
        characteristics: `The Gir breed is known for its distinctive appearance with a domed forehead, long pendulous ears, and a dewlap that extends from the chin to the navel.\nThey have a gentle temperament and are well-adapted to hot climates.`,
        primaryUse: "Milk production and draught work",
        averageWeight: "385-400 kg",
        milkYield: "1,590 kg per lactation"
      }
    },
    {
      breedName: "Sahiwal",
      confidence: 0.87,
      breedInfo: {
        origin: "Punjab, Pakistan/India",
        type: "Dairy Cattle",
        characteristics: `Sahiwal cattle are reddish brown in color with white markings on the face and legs.\nThey are known for their heat tolerance and good milk production capacity.`,
        primaryUse: "Milk production",
        averageWeight: "300-400 kg",
        milkYield: "2,270 kg per lactation"
      }
    },
    {
      breedName: "Red Sindhi",
      confidence: 0.78,
      breedInfo: {
        origin: "Sindh, Pakistan",
        type: "Dairy Cattle",
        characteristics: `Red Sindhi cattle are deep red in color with white markings.\nThey are compact, well-built animals with good heat tolerance and disease resistance.`,
        primaryUse: "Milk production",
        averageWeight: "300-350 kg",
        milkYield: "1,800 kg per lactation"
      }
    },
    {
      breedName: "Murrah Buffalo",
      confidence: 0.95,
      breedInfo: {
        origin: "Haryana, India",
        type: "Water Buffalo",
        characteristics: `Murrah buffaloes are jet black in color with tightly curled horns.\nThey are the best dairy buffalo breed in India with excellent milk production.`,
        primaryUse: "Milk production",
        averageWeight: "450-550 kg",
        milkYield: "3,000-4,000 kg per lactation"
      }
    }
  ];

  // Randomly select a breed or simulate error
  if (Math.random() < 0.1) {
    throw new Error('Unable to identify breed. Please try with a clearer image.');
  }

  const selectedBreed = mockBreeds?.[Math.floor(Math.random() * mockBreeds?.length)];
  return {
    ...selectedBreed,
    timestamp: Date.now(),
    id: Date.now()?.toString()
  };
};

const BreedIdentificationDemo = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [recentPredictions, setRecentPredictions] = useState([]);

  // Load recent predictions from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem('recentPredictions');
    if (saved) {
      try {
        setRecentPredictions(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load recent predictions:', e);
      }
    }
  }, []);

  // Save recent predictions to localStorage
  const saveToHistory = (prediction) => {
    const updated = [prediction, ...recentPredictions?.slice(0, 9)]; // Keep last 10
    setRecentPredictions(updated);
    localStorage.setItem('recentPredictions', JSON.stringify(updated));
  };

  const handleImageUpload = async (file) => {
    if (!file) return;

    // Validate file size (10MB limit)
    if (file?.size > 10 * 1024 * 1024) {
      setError({
        type: 'upload',
        message: 'File size too large. Please choose an image smaller than 10MB.'
      });
      return;
    }

    // Validate file type
    if (!file?.type?.startsWith('image/')) {
      setError({
        type: 'upload',
        message: 'Please select a valid image file (JPG, PNG, WEBP).'
      });
      return;
    }

    // Check if OpenAI API key is configured
    if (!import.meta.env?.VITE_OPENAI_API_KEY || import.meta.env?.VITE_OPENAI_API_KEY === 'your-openai-api-key-here') {
      setError({
        type: 'configuration',
        message: 'OpenAI API key is not configured. Please set your VITE_OPENAI_API_KEY in the environment variables to use AI-powered breed identification.'
      });
      return;
    }

    setSelectedImage(file);
    setError(null);
    setResult(null);
    setIsProcessing(true);

    try {
      const prediction = await identifyBreedWithOpenAI(file);
      setResult(prediction);
      saveToHistory({
        ...prediction,
        imageUrl: URL.createObjectURL(file)
      });
    } catch (err) {
      console.error('Breed identification error:', err);
      setError({
        type: 'processing',
        message: err?.message || 'Failed to process image. Please try again.'
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleRetry = () => {
    if (selectedImage) {
      handleImageUpload(selectedImage);
    } else {
      setError(null);
      setResult(null);
    }
  };

  const handleClearError = () => {
    setError(null);
  };

  const handleSelectPrediction = (prediction) => {
    setResult(prediction);
    setSelectedImage(null);
    setError(null);
  };

  const handleClearHistory = () => {
    setRecentPredictions([]);
    localStorage.removeItem('recentPredictions');
  };

  const handleNewIdentification = () => {
    setSelectedImage(null);
    setResult(null);
    setError(null);
    setIsProcessing(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AI-Powered Breed Identification - Cattle & Buffalo Recognition</title>
        <meta name="description" content="Upload cattle or buffalo images for instant AI-powered breed identification using OpenAI's advanced vision technology. Get detailed breed information and confidence scores." />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-12 lg:py-16">
          <div className="mx-4 lg:mx-6 max-w-7xl lg:mx-auto">
            <div className="text-center space-y-6">
              <div className="space-y-4">
                <h1 className="font-heading font-bold text-3xl lg:text-4xl text-foreground">
                  AI-Powered Breed Identification
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                  Upload an image of your cattle or buffalo and get instant breed identification 
                  powered by OpenAI's advanced vision technology with detailed breed information and analysis.
                </p>
              </div>
              
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Zap" size={16} className="text-primary" />
                  <span>OpenAI Powered</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Brain" size={16} className="text-secondary" />
                  <span>Advanced Vision AI</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size={16} className="text-success" />
                  <span>Expert Analysis</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 lg:py-16">
          <div className="mx-4 lg:mx-6 max-w-7xl lg:mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Upload and Results */}
              <div className="lg:col-span-2 space-y-8">
                {/* Upload Zone */}
                <div className="bg-card rounded-xl border border-border p-6 shadow-gentle">
                  <div className="mb-6">
                    <h2 className="font-heading font-semibold text-xl text-foreground mb-2">
                      Upload Image for AI Analysis
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      Choose a clear image of your cattle or buffalo for OpenAI-powered breed identification
                    </p>
                  </div>
                  
                  <ImageUploadZone
                    onImageUpload={handleImageUpload}
                    isProcessing={isProcessing}
                    selectedImage={selectedImage}
                  />
                </div>

                {/* Processing Loader */}
                <ProcessingLoader isVisible={isProcessing} />

                {/* Error Message */}
                <ErrorMessage
                  error={error}
                  onRetry={handleRetry}
                  onClear={handleClearError}
                />

                {/* Results */}
                {result && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="font-heading font-semibold text-xl text-foreground">
                        AI Identification Result
                      </h2>
                      <Button
                        variant="outline"
                        iconName="Plus"
                        iconPosition="left"
                        onClick={handleNewIdentification}
                      >
                        New Identification
                      </Button>
                    </div>
                    
                    <ResultCard
                      result={result}
                      onRetry={handleRetry}
                    />
                  </div>
                )}
              </div>

              {/* Right Column - Instructions and History */}
              <div className="space-y-8">
                <InstructionsPanel />
                
                <RecentPredictions
                  predictions={recentPredictions}
                  onSelectPrediction={handleSelectPrediction}
                  onClearHistory={handleClearHistory}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="mx-4 lg:mx-6 max-w-7xl lg:mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-2xl lg:text-3xl text-foreground mb-4">
                OpenAI Vision Technology
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our breed identification system leverages OpenAI's cutting-edge GPT-4o model 
                for accurate visual analysis and expert-level breed identification.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "Brain",
                  title: "GPT-4o Vision",
                  description: "Advanced multimodal AI model with superior image understanding capabilities"
                },
                {
                  icon: "Target",
                  title: "Expert Analysis",
                  description: "Professional-grade breed identification with detailed characteristics analysis"
                },
                {
                  icon: "Zap",
                  title: "Real-time Processing",
                  description: "Fast AI-powered analysis with comprehensive breed information"
                },
                {
                  icon: "Database",
                  title: "Comprehensive Knowledge",
                  description: "Trained on extensive livestock datasets covering global cattle and buffalo breeds"
                }
              ]?.map((feature, index) => (
                <div key={index} className="bg-card rounded-xl border border-border p-6 text-center shadow-gentle hover:shadow-gentle-lg transition-gentle">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature?.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    {feature?.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BreedIdentificationDemo;