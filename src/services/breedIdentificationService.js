import openai from '../utils/openaiClient';

/**
 * Analyzes an uploaded image to identify cattle or buffalo breeds using OpenAI's vision capabilities.
 * @param {File} imageFile - The image file to analyze.
 * @returns {Promise<Object>} Breed identification results with confidence and detailed information.
 */
export async function identifyBreedWithOpenAI(imageFile) {
  try {
    // Convert file to base64 data URL for OpenAI vision API
    let imageUrl = URL.createObjectURL(imageFile);

    const response = await openai?.chat?.completions?.create({
      model: 'gpt-4o', // Use GPT-4o for multimodal capabilities
      messages: [
        {
          role: 'system',
          content: `You are an expert veterinary specialist and livestock breed identification expert. 
          Analyze the uploaded image to identify the cattle or buffalo breed with high accuracy. 
          Consider physical characteristics like body structure, color patterns, facial features, 
          horn shape, ear size, and other distinguishing features.

          Focus on identifying common Indian and international cattle breeds including:
          - Gir, Sahiwal, Red Sindhi, Tharparkar, Rathi, Hariana, Ongole
          - Holstein Friesian, Jersey, Brown Swiss, Simmental
          - Murrah Buffalo, Nili-Ravi Buffalo, Surti Buffalo

          Provide detailed analysis with confidence levels and breed characteristics.`
        },
        {
          role: 'user',
          content: [
            { type: 'text', text: 'Please identify the cattle or buffalo breed in this image and provide detailed information about it.' },
            { type: 'image_url', image_url: { url: imageUrl } },
          ],
        },
      ],
      response_format: {
        type: 'json_schema',
        json_schema: {
          name: 'breed_identification_response',
          schema: {
            type: 'object',
            properties: {
              breedName: { 
                type: 'string',
                description: 'The identified breed name'
              },
              confidence: { 
                type: 'number',
                minimum: 0,
                maximum: 1,
                description: 'Confidence level between 0 and 1'
              },
              breedInfo: {
                type: 'object',
                properties: {
                  origin: { type: 'string', description: 'Geographic origin of the breed' },
                  type: { type: 'string', description: 'Type classification (e.g., Dairy Cattle, Water Buffalo)' },
                  characteristics: { type: 'string', description: 'Physical and behavioral characteristics' },
                  primaryUse: { type: 'string', description: 'Primary use of the breed' },
                  averageWeight: { type: 'string', description: 'Average weight range' },
                  milkYield: { type: 'string', description: 'Average milk yield if applicable' }
                },
                required: ['origin', 'type', 'characteristics', 'primaryUse'],
                additionalProperties: false
              },
              analysisNotes: { 
                type: 'string',
                description: 'Additional analysis notes and reasoning for identification'
              },
              alternativePossibilities: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    breedName: { type: 'string' },
                    confidence: { type: 'number', minimum: 0, maximum: 1 }
                  },
                  required: ['breedName', 'confidence']
                },
                description: 'Other possible breed identifications with lower confidence'
              }
            },
            required: ['breedName', 'confidence', 'breedInfo', 'analysisNotes'],
            additionalProperties: false,
          },
        },
      },
    });

    const result = JSON.parse(response?.choices?.[0]?.message?.content);
    
    // Clean up the temporary object URL
    URL.revokeObjectURL(imageUrl);

    return {
      ...result,
      timestamp: Date.now(),
      id: Date.now()?.toString()
    };
  } catch (error) {
    console.error('Error in OpenAI breed identification:', error);
    
    // Handle specific OpenAI errors
    if (error?.status === 401) {
      throw new Error('OpenAI API key is invalid. Please check your configuration.');
    } else if (error?.status === 429) {
      throw new Error('OpenAI API rate limit exceeded. Please try again later.');
    } else if (error?.status === 400) {
      throw new Error('Invalid request to OpenAI API. The image may be too large or in an unsupported format.');
    } else if (error?.message?.includes('network')) {
      throw new Error('Network error. Please check your internet connection and try again.');
    } else {
      throw new Error(error?.message || 'Failed to identify breed. Please try again with a clearer image.');
    }
  }
}

/**
 * Enhanced image analysis with specific focus areas using OpenAI GPT-4o
 * @param {File|string} image - Image file or URL to analyze
 * @param {string} analysisType - Type of analysis: 'breed', 'health', 'condition'
 * @returns {Promise<Object>} Detailed analysis results
 */
export async function analyzeImageWithGPT4o(image, analysisType = 'breed') {
  let imageUrl;
  
  if (typeof image === 'string') {
    imageUrl = image;
  } else if (image?.url) {
    imageUrl = image?.url;
  } else if (image instanceof File) {
    imageUrl = URL.createObjectURL(image);
  } else {
    throw new Error("No valid image provided");
  }

  const systemPrompts = {
    breed: 'You are an expert livestock breed identification specialist. Analyze this image to identify cattle or buffalo breeds with detailed characteristics and confidence levels.',
    health: 'You are a veterinary expert. Analyze this livestock image for visible health indicators, body condition, and any signs of wellness or concerns.',
    condition: 'You are a livestock condition assessment expert. Evaluate the animal\'s body condition score, nutritional status, and overall physical appearance.',
  };

  try {
    const response = await openai?.chat?.completions?.create({
      model: 'gpt-4o',
      messages: [
        { 
          role: 'system', 
          content: systemPrompts?.[analysisType] || systemPrompts?.breed
        },
        {
          role: 'user',
          content: [
            { type: 'text', text: `Please analyze this image with focus on: ${analysisType}` },
            { type: 'image_url', image_url: { url: imageUrl } },
          ],
        },
      ],
      max_tokens: 1000,
    });

    // Clean up if we created a temporary URL
    if (image instanceof File) {
      URL.revokeObjectURL(imageUrl);
    }

    return {
      analysis: response?.choices?.[0]?.message?.content,
      analysisType,
      imageUrl: typeof image === 'string' ? image : null,
    };
  } catch (error) {
    if (image instanceof File) {
      URL.revokeObjectURL(imageUrl);
    }
    console.error('Error analyzing image with GPT-4o:', error);
    throw error;
  }
}