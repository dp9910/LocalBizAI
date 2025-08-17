'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';

interface AssessmentData {
  businessType: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
  teamSize: string;
  currentAiUsage: string;
  biggestFrustration: string;
  aiProblems: string;
  overwhelmLevel: string;
  behindConcern: string;
  appealingOption: string;
}

export default function AssessmentPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [assessmentResult, setAssessmentResult] = useState('');
  const [parsedResult, setParsedResult] = useState<any>(null);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState<AssessmentData>({
    businessType: '',
    country: '',
    state: '',
    city: '',
    zipCode: '',
    teamSize: '',
    currentAiUsage: '',
    biggestFrustration: '',
    aiProblems: '',
    overwhelmLevel: '',
    behindConcern: '',
    appealingOption: ''
  });

  const businessTypes = [
    'Restaurant/Food Service',
    'Retail/Online Store',
    'Professional Services',
    'Healthcare/Medical',
    'Real Estate',
    'Construction/Home Services',
    'Beauty/Personal Care',
    'Fitness/Wellness',
    'Consulting/Freelance',
    'Other'
  ];

  const handleInputChange = (field: keyof AssessmentData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const buildGeminiPrompt = (data: AssessmentData): string => {
    const location = [data.city, data.state, data.country].filter(Boolean).join(', ');
    
    return `You are an AI business consultant. Create a simple, practical 4-step plan based on this business assessment.

BUSINESS: ${data.businessType} in ${location}
TEAM SIZE: ${data.teamSize}
AI EXPERIENCE: ${data.currentAiUsage}
MAIN FRUSTRATION: ${data.biggestFrustration}
PROBLEMS EXPERIENCED: ${data.aiProblems}
FEELING ABOUT AI OPTIONS: ${data.overwhelmLevel}
COMPETITION CONCERN: ${data.behindConcern}
PREFERRED SOLUTION: ${data.appealingOption}

Create a response with these 4 sections:

## STEP 1: What We Found About Your Business
Write 2-3 sentences about their specific situation. Be conversational and understanding.

## STEP 2: Your Personalized AI Plan
List 3 specific things they should focus on. Keep each item to 1-2 sentences. No technical jargon.

## STEP 3: How We'll Guide You
Explain in simple terms how implementation would work. 2-3 sentences maximum.

## STEP 4: What You Can Expect
Describe realistic outcomes in 30, 60, and 90 days. Keep it practical, not dramatic.

Keep the entire response under 400 words. Use simple language like you're talking to a friend. Focus on their specific frustrations and concerns. Be encouraging but realistic.`;
  };

  const parseGeminiResponse = (response: string) => {
    const sections = {
      step1: '',
      step2: [] as string[],
      step3: '',
      step4: { thirtyDays: '', sixtyDays: '', ninetyDays: '' }
    };

    const lines = response.split('\n');
    let currentSection = '';
    let step2Items: string[] = [];

    for (const line of lines) {
      if (line.includes('STEP 1:')) {
        currentSection = 'step1';
        continue;
      } else if (line.includes('STEP 2:')) {
        currentSection = 'step2';
        continue;
      } else if (line.includes('STEP 3:')) {
        currentSection = 'step3';
        continue;
      } else if (line.includes('STEP 4:')) {
        currentSection = 'step4';
        continue;
      }

      if (line.trim() && !line.startsWith('#')) {
        if (currentSection === 'step1') {
          sections.step1 += line.trim() + ' ';
        } else if (currentSection === 'step2') {
          if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
            step2Items.push(line.trim().replace(/^[•-]\s*/, ''));
          } else if (line.trim()) {
            step2Items.push(line.trim());
          }
        } else if (currentSection === 'step3') {
          sections.step3 += line.trim() + ' ';
        } else if (currentSection === 'step4') {
          if (line.includes('30 days:') || line.includes('30-day')) {
            sections.step4.thirtyDays = line.replace(/.*30\s*days?:?\s*/i, '').trim();
          } else if (line.includes('60 days:') || line.includes('60-day')) {
            sections.step4.sixtyDays = line.replace(/.*60\s*days?:?\s*/i, '').trim();
          } else if (line.includes('90 days:') || line.includes('90-day')) {
            sections.step4.ninetyDays = line.replace(/.*90\s*days?:?\s*/i, '').trim();
          }
        }
      }
    }

    sections.step2 = step2Items;
    return sections;
  };

  const generateAssessment = async () => {
    setIsGenerating(true);
    setError('');
    
    try {
      const prompt = buildGeminiPrompt(formData);
      
      const response = await fetch('https://us-central1-localbizai-65474.cloudfunctions.net/testGemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate assessment');
      }

      setAssessmentResult(data.response);
      setParsedResult(parseGeminiResponse(data.response));
      setCurrentStep(3); // Results step
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsGenerating(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      generateAssessment();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepComplete = () => {
    switch (currentStep) {
      case 1:
        return formData.businessType && formData.country && formData.teamSize;
      case 2:
        return formData.currentAiUsage && formData.biggestFrustration && formData.aiProblems && 
               formData.overwhelmLevel && formData.behindConcern && formData.appealingOption;
      default:
        return false;
    }
  };

  if (currentStep === 3 && parsedResult) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🎯 <span className="text-green-600">Your AI Transformation Plan</span>
            </h1>
            <div className="text-lg text-gray-600 font-medium">
              For your <span className="font-bold text-green-700">{formData.businessType}</span> business
            </div>
          </div>

          {/* Quick Summary Card */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white mb-8 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">YOUR SITUATION</h3>
                <p className="text-green-50 text-base font-medium leading-relaxed">
                  Based on your answers, you're a <span className="font-bold">{formData.businessType.toLowerCase()}</span> feeling{' '}
                  <span className="font-bold">{formData.overwhelmLevel.toLowerCase()}</span> about AI tools, with{' '}
                  <span className="font-bold">{formData.currentAiUsage.toLowerCase()}</span> experience.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">HERE'S WHAT WE SEE</h3>
                  <p className="text-green-50 text-base font-medium leading-relaxed">
                    This is how we'll approach your specific situation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Timeline */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-6">
              <h2 className="text-2xl font-bold text-white text-center">
                YOUR AI TRANSFORMATION JOURNEY
              </h2>
            </div>

            <div className="p-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="flex items-start space-x-6 pb-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center border-4 border-green-500">
                      <span className="text-2xl">📋</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                      <h3 className="text-xl font-bold text-green-800 mb-3">
                        STEP 1: ANALYSIS <span className="text-base font-medium text-green-600">(Day 1)</span>
                      </h3>
                      <h4 className="font-bold text-gray-900 mb-2">What We Found About Your Business</h4>
                      <p className="text-gray-700 text-base font-medium leading-relaxed">
                        {parsedResult.step1}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex justify-center mb-8">
                  <div className="w-8 h-8 text-green-500">
                    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a.75.75 0 01-.75-.75V4.66L7.3 6.76a.75.75 0 11-1.1-1.02l3.25-3.5a.75.75 0 011.1 0l3.25 3.5a.75.75 0 01-1.1 1.02L10.75 4.66v12.59A.75.75 0 0110 18z" />
                    </svg>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start space-x-6 pb-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center border-4 border-blue-500">
                      <span className="text-2xl">🎯</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                      <h3 className="text-xl font-bold text-blue-800 mb-3">
                        STEP 2: YOUR PLAN <span className="text-base font-medium text-blue-600">(Days 1-30)</span>
                      </h3>
                      <h4 className="font-bold text-gray-900 mb-3">Your Personalized AI Plan</h4>
                      <div className="space-y-3">
                        {parsedResult.step2.map((item: string, index: number) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                              <span className="text-white text-sm font-bold">✓</span>
                            </div>
                            <p className="text-gray-700 text-base font-medium">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center mb-8">
                  <div className="w-8 h-8 text-green-500">
                    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a.75.75 0 01-.75-.75V4.66L7.3 6.76a.75.75 0 11-1.1-1.02l3.25-3.5a.75.75 0 011.1 0l3.25 3.5a.75.75 0 01-1.1 1.02L10.75 4.66v12.59A.75.75 0 0110 18z" />
                    </svg>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start space-x-6 pb-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center border-4 border-purple-500">
                      <span className="text-2xl">🚀</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-500">
                      <h3 className="text-xl font-bold text-purple-800 mb-3">
                        STEP 3: GUIDED SETUP <span className="text-base font-medium text-purple-600">(Days 31-60)</span>
                      </h3>
                      <h4 className="font-bold text-gray-900 mb-2">How We'll Guide You</h4>
                      <p className="text-gray-700 text-base font-medium leading-relaxed">
                        {parsedResult.step3}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center mb-8">
                  <div className="w-8 h-8 text-green-500">
                    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a.75.75 0 01-.75-.75V4.66L7.3 6.76a.75.75 0 11-1.1-1.02l3.25-3.5a.75.75 0 011.1 0l3.25 3.5a.75.75 0 01-1.1 1.02L10.75 4.66v12.59A.75.75 0 0110 18z" />
                    </svg>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center border-4 border-emerald-500">
                      <span className="text-2xl">📈</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="bg-emerald-50 rounded-xl p-6 border-l-4 border-emerald-500">
                      <h3 className="text-xl font-bold text-emerald-800 mb-3">
                        STEP 4: RESULTS <span className="text-base font-medium text-emerald-600">(Days 61-90)</span>
                      </h3>
                      <h4 className="font-bold text-gray-900 mb-3">What You Can Expect</h4>
                      <div className="space-y-4">
                        {parsedResult.step4.thirtyDays && (
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center">
                              <span className="text-emerald-700 text-sm font-bold">30</span>
                            </div>
                            <div>
                              <p className="text-sm font-bold text-emerald-800">30 days:</p>
                              <p className="text-gray-700 text-base font-medium">{parsedResult.step4.thirtyDays}</p>
                            </div>
                          </div>
                        )}
                        {parsedResult.step4.sixtyDays && (
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-emerald-300 rounded-full flex items-center justify-center">
                              <span className="text-emerald-800 text-sm font-bold">60</span>
                            </div>
                            <div>
                              <p className="text-sm font-bold text-emerald-800">60 days:</p>
                              <p className="text-gray-700 text-base font-medium">{parsedResult.step4.sixtyDays}</p>
                            </div>
                          </div>
                        )}
                        {parsedResult.step4.ninetyDays && (
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center">
                              <span className="text-emerald-900 text-sm font-bold">90</span>
                            </div>
                            <div>
                              <p className="text-sm font-bold text-emerald-800">90 days:</p>
                              <p className="text-gray-700 text-base font-medium">{parsedResult.step4.ninetyDays}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl border-2 border-green-200 p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Interested in learning more?
              </h3>
              <p className="text-gray-600 text-base font-medium mb-6 max-w-2xl mx-auto">
                Ready to transform your business with a personalized AI implementation plan?
              </p>
              <div className="space-y-4">
                <Button 
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold px-8 py-3 text-lg"
                >
                  Get Started Today
                </Button>
                <div>
                  <Button 
                    onClick={() => {
                      setCurrentStep(1);
                      setAssessmentResult('');
                      setParsedResult(null);
                      setFormData({
                        businessType: '',
                        country: '',
                        state: '',
                        city: '',
                        zipCode: '',
                        teamSize: '',
                        currentAiUsage: '',
                        biggestFrustration: '',
                        aiProblems: '',
                        overwhelmLevel: '',
                        behindConcern: '',
                        appealingOption: ''
                      });
                    }}
                    variant="outline"
                    className="text-green-600 border-green-300 font-medium"
                  >
                    Take Assessment Again
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Are AI Tools Helping or
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Hurting Your Business?</span>
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            2-minute assessment → See what's possible
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 font-medium mb-2">
            <span>Step {currentStep} of 2</span>
            <span>{Math.round((currentStep / 2) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-green-600 to-emerald-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 2) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg p-8">
          {/* Step 1: Business Context */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Business Context</h2>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="businessType" className="text-base font-bold text-gray-800">
                    1. What type of business do you run? *
                  </Label>
                  <select
                    id="businessType"
                    value={formData.businessType}
                    onChange={(e) => handleInputChange('businessType', e.target.value)}
                    className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-base font-medium"
                    required
                  >
                    <option value="">Select your business type</option>
                    {businessTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label className="text-base font-bold text-gray-800 mb-3 block">
                    2. Where are you located?
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="country" className="text-sm font-medium text-gray-600">Country *</Label>
                      <Input
                        id="country"
                        value={formData.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        placeholder="United States"
                        className="mt-1 text-base font-medium"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="state" className="text-sm font-medium text-gray-600">State/Province</Label>
                      <Input
                        id="state"
                        value={formData.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                        placeholder="California"
                        className="mt-1 text-base font-medium"
                      />
                    </div>
                    <div>
                      <Label htmlFor="city" className="text-sm font-medium text-gray-600">City</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        placeholder="San Francisco"
                        className="mt-1 text-base font-medium"
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode" className="text-sm font-medium text-gray-600">Zip Code</Label>
                      <Input
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange('zipCode', e.target.value)}
                        placeholder="94102"
                        className="mt-1 text-base font-medium"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-base font-bold text-gray-800 mb-3 block">
                    3. How many people work in your business? *
                  </Label>
                  <div className="space-y-3">
                    {['Just me', '2-5 people', '6-20 people', '20+ people'].map(size => (
                      <label key={size} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-green-50 cursor-pointer transition-colors">
                        <input
                          type="radio"
                          name="teamSize"
                          value={size}
                          checked={formData.teamSize === size}
                          onChange={(e) => handleInputChange('teamSize', e.target.value)}
                          className="mr-3 w-4 h-4 text-green-600"
                        />
                        <span className="text-base font-medium text-gray-800">{size}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: AI Reality Check */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">AI Reality Check</h2>
              <div className="space-y-8">
                <div>
                  <Label className="text-base font-bold text-gray-800 mb-3 block">
                    4. Are you currently using any AI tools? *
                  </Label>
                  <div className="space-y-3">
                    {[
                      'No, haven\'t tried any',
                      'Yes, 1-2 tools',
                      'Yes, 3-5 tools',
                      'Yes, more than 5 tools'
                    ].map(usage => (
                      <label key={usage} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-green-50 cursor-pointer transition-colors">
                        <input
                          type="radio"
                          name="currentAiUsage"
                          value={usage}
                          checked={formData.currentAiUsage === usage}
                          onChange={(e) => handleInputChange('currentAiUsage', e.target.value)}
                          className="mr-3 w-4 h-4 text-green-600"
                        />
                        <span className="text-base font-medium text-gray-800">{usage}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-base font-bold text-gray-800 mb-3 block">
                    5. If you use AI tools, what's your biggest frustration? *
                  </Label>
                  <div className="space-y-3">
                    {[
                      'They don\'t understand my business',
                      'Too many different tools to manage',
                      'Results are generic and unhelpful',
                      'Don\'t know which tools actually work',
                      'Hard to set up and use',
                      'Not applicable - don\'t use AI yet'
                    ].map(frustration => (
                      <label key={frustration} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-green-50 cursor-pointer transition-colors">
                        <input
                          type="radio"
                          name="biggestFrustration"
                          value={frustration}
                          checked={formData.biggestFrustration === frustration}
                          onChange={(e) => handleInputChange('biggestFrustration', e.target.value)}
                          className="mr-3 w-4 h-4 text-green-600"
                        />
                        <span className="text-base font-medium text-gray-800">{frustration}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-base font-bold text-gray-800 mb-3 block">
                    6. Have AI tools ever created problems for you? *
                  </Label>
                  <div className="space-y-3">
                    {[
                      'Yes, caused errors or mistakes',
                      'Yes, wasted time with poor results',
                      'Yes, confused customers/clients',
                      'No major problems',
                      'Haven\'t used AI tools enough to know'
                    ].map(problem => (
                      <label key={problem} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-green-50 cursor-pointer transition-colors">
                        <input
                          type="radio"
                          name="aiProblems"
                          value={problem}
                          checked={formData.aiProblems === problem}
                          onChange={(e) => handleInputChange('aiProblems', e.target.value)}
                          className="mr-3 w-4 h-4 text-green-600"
                        />
                        <span className="text-base font-medium text-gray-800">{problem}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-base font-bold text-gray-800 mb-3 block">
                    7. How do you feel about the number of AI tools available? *
                  </Label>
                  <div className="space-y-3">
                    {[
                      'Excited - love having options',
                      'Overwhelmed - too many choices',
                      'Confused - don\'t know where to start',
                      'Frustrated - tried several, none work well'
                    ].map(feeling => (
                      <label key={feeling} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-green-50 cursor-pointer transition-colors">
                        <input
                          type="radio"
                          name="overwhelmLevel"
                          value={feeling}
                          checked={formData.overwhelmLevel === feeling}
                          onChange={(e) => handleInputChange('overwhelmLevel', e.target.value)}
                          className="mr-3 w-4 h-4 text-green-600"
                        />
                        <span className="text-base font-medium text-gray-800">{feeling}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-base font-bold text-gray-800 mb-3 block">
                    8. Are you worried about falling behind competitors who use AI? *
                  </Label>
                  <div className="space-y-3">
                    {[
                      'Very concerned - feels urgent',
                      'Somewhat concerned',
                      'Not really worried',
                      'Don\'t think AI matters for my business'
                    ].map(concern => (
                      <label key={concern} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-green-50 cursor-pointer transition-colors">
                        <input
                          type="radio"
                          name="behindConcern"
                          value={concern}
                          checked={formData.behindConcern === concern}
                          onChange={(e) => handleInputChange('behindConcern', e.target.value)}
                          className="mr-3 w-4 h-4 text-green-600"
                        />
                        <span className="text-base font-medium text-gray-800">{concern}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-base font-bold text-gray-800 mb-3 block">
                    9. What sounds most appealing to you? *
                  </Label>
                  <div className="space-y-3">
                    {[
                      'One platform that handles everything',
                      'Step-by-step guidance from experts',
                      'AI that learns my specific business',
                      'Just knowing which tools actually work',
                      'Having someone set it up for me'
                    ].map(option => (
                      <label key={option} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-green-50 cursor-pointer transition-colors">
                        <input
                          type="radio"
                          name="appealingOption"
                          value={option}
                          checked={formData.appealingOption === option}
                          onChange={(e) => handleInputChange('appealingOption', e.target.value)}
                          className="mr-3 w-4 h-4 text-green-600"
                        />
                        <span className="text-base font-medium text-gray-800">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Error Display */}
          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 font-medium">{error}</p>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              onClick={prevStep}
              disabled={currentStep === 1}
              variant="outline"
              className={`font-bold ${currentStep === 1 ? 'invisible' : 'text-green-600 border-green-300'}`}
            >
              Previous
            </Button>

            <Button
              onClick={nextStep}
              disabled={!isStepComplete() || isGenerating}
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold px-8 py-3"
            >
              {isGenerating ? 'Generating Your Plan...' : 
               currentStep === 2 ? 'Generate My AI Plan' : 'Next'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}