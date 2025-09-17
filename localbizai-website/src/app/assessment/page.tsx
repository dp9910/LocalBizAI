'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';

interface AssessmentData {
  businessType: string;
  location: string;
  marketingChallenges: string[];
  customerDiscovery: string;
  techComfort: string;
  businessGoals: string[];
}

export default function AssessmentPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [assessmentResult, setAssessmentResult] = useState('');
  const [parsedResult, setParsedResult] = useState<any>(null);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState<AssessmentData>({
    businessType: '',
    location: '',
    marketingChallenges: [],
    customerDiscovery: '',
    techComfort: '',
    businessGoals: []
  });

  const businessTypes = [
    'Hair/Beauty Salon',
    'Restaurant/Food Service',
    'Retail Store',
    'Professional Services (law, accounting, etc.)',
    'Home Services (plumbing, cleaning, etc.)',
    'Healthcare/Wellness',
    'Other'
  ];

  const handleInputChange = (field: keyof AssessmentData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleMultipleChoice = (field: 'marketingChallenges' | 'businessGoals', value: string) => {
    setFormData(prev => {
      const currentValues = prev[field];
      const isSelected = currentValues.includes(value);
      
      return {
        ...prev,
        [field]: isSelected 
          ? currentValues.filter(item => item !== value)
          : [...currentValues, value]
      };
    });
  };

  const buildGeminiPrompt = (data: AssessmentData): string => {
    return `You are LocalBizAI - an intelligent AI tool trained specifically for ${data.businessType} businesses.

**LOCALBIZAI COMPANY OVERVIEW:**
LocalBizAI translates AI capabilities into business solutions you can actually use. We solve the problem where business owners get generic AI advice that doesn't understand their business context.

**THE CORE PROBLEM WE SOLVE:**
Two types of businesses struggle with AI:
1. "Know-Hows" - Aware of AI but overwhelmed by choices, costs, complexity
2. "Experimenters" - Trying AI tools without expertise, leading to expensive failures

Generic AI tools like ChatGPT provide technical answers without understanding business context, leaving owners confused.

**LOCALBIZAI METHODOLOGY:**
We create "Your AI Business Partner" by combining three intelligence sources:

🧬 **Business DNA**: Customer patterns, revenue cycles, operational workflows, growth objectives
📍 **Local Pulse**: Demographics, economic indicators, seasonal patterns, competitor activity  
🤖 **AI Foundation**: Large Language Model, pattern recognition, decision algorithms, machine learning

= **Your AI Business Partner**: A custom-trained model that thinks like you, knows your market, and optimizes your growth.

**OUR STRATEGIC FOCUS AREAS:**
1. **Customer Visibility**: Getting found online when people search for services
2. **Customer Communication**: Never missing inquiries, bookings, or interactions  
3. **Operational Efficiency**: Automating time-consuming daily tasks

**PROVEN SOLUTIONS WE OFFER:**
- QR-enabled flyers for easy digital access
- Local SEO optimization and Google Business Profile
- Social media automation and content creation
- AI chatbot for 24/7 customer service
- Automated booking and scheduling systems
- Inquiry management and response automation
- Workflow automation and scheduling optimization
- Analytics dashboards and performance monitoring

**DONE-FOR-YOU 4-WEEK PROCESS:**
- **Week 1 - Analyze**: Study your business patterns and local market
- **Week 2-3 - Build**: Create custom AI solutions for your challenges
- **Week 4 - Deploy**: Install systems and train your team
- **Ongoing - Optimize**: Monitor performance and improve results

**CASE STUDY EXAMPLE - K Hair Salon (Irving, TX):**
Challenge: Owner wanted to use AI to increase customer flow but only got generic ChatGPT suggestions
LocalBizAI Solution: Created QR-enabled flyers, redesigned marketing materials, targeted high-traffic locations
Approach: Combined Business DNA (hair/beauty discovery patterns) + Local Pulse (Irving demographics) + AI Foundation

**BUSINESS ASSESSMENT:**
Type: ${data.businessType} in ${data.location}
Challenges: ${data.marketingChallenges.join(', ')}
Customer Discovery: ${data.customerDiscovery}
Tech Comfort: ${data.techComfort}
Goals: ${data.businessGoals.join(', ')}

**RESPONSE FORMAT AND STYLE:**

Use the EXACT tone and language from the slide deck. Here's how to format each section:

## STEP 1: What We Found About Your Business
Use slide deck analysis style - direct and business-focused:
• Business DNA Analysis: [Current customer patterns and revenue reality]
• Local Market Reality: [Competition level and market opportunity]

**EXAMPLE FOR HAIR SALON:**
• Business DNA Analysis: Word-of-mouth referrals limit growth potential
• Local Market Reality: Irving market underserved for modern salon experience

## STEP 2: Your Personalized AI Plan
Use slide deck solution style - specific outcomes, not features:

• Customer Visibility: [Action + specific result]
• Customer Communication: [Action + specific result]  
• Operational Efficiency: [Action + specific result]

**EXAMPLE FOR HAIR SALON:**
• Customer Visibility: QR-enabled flyers instantly connect customers to booking
• Customer Communication: 24/7 AI booking prevents missed appointment opportunities
• Operational Efficiency: Automated scheduling saves 10+ hours weekly admin

## STEP 3: How We'll Guide You
Use slide deck 4-week format - what WE do for THEM:

• Week 1 - Analyze: [Study your specific business patterns]
• Week 2-3 - Build: [Create your custom solutions]  
• Week 4 - Deploy: [Install and train systems]
• Ongoing - Optimize: [Monitor and improve performance]

**EXAMPLE FOR HAIR SALON:**
• Week 1 - Analyze: Study Irving salon customer behaviors
• Week 2-3 - Build: Create QR flyers and booking system
• Week 4 - Deploy: Install systems and train staff
• Ongoing - Optimize: Track bookings and optimize placement

**CRITICAL FORMATTING REQUIREMENTS:**

**ANSWER STYLE:**
- Each bullet point = 1-2 sentences MAXIMUM
- No dramatic language or unrealistic promises
- Factual, straightforward, professional tone
- Numbers must be realistic and achievable
- No marketing fluff or exaggerated claims

**VISUAL FORMATTING:**
- Use bullet points (•) for clean visual appeal
- Keep lines short for mobile readability
- Bold key terms for emphasis
- Use consistent structure across all sections
- Clean spacing between sections

**CONTENT RESTRICTIONS:**
- No promises over 50% improvement unless realistic
- Use conservative estimates (10-40% range)
- Focus on process benefits, not dramatic outcomes
- Keep technical terms to minimum
- Make claims that are achievable for their business type

**TONE GUIDELINES:**
- Professional but approachable
- Confident without being boastful
- Solution-focused, not sales-heavy
- Honest about what LocalBizAI actually delivers
- "We do X for you" Done-FOR-You approach
- Reference their specific business type and location
- Total response under 120 words for mobile viewing

**VISUAL EXAMPLE OF CLEAN FORMATTING:**
• Business DNA Analysis: Word-of-mouth referrals limit growth potential
• Local Market Reality: Irving market has room for modern salon experience

• Customer Visibility: QR-enabled flyers connect customers to instant booking
• Customer Communication: 24/7 AI booking prevents missed opportunities  
• Operational Efficiency: Automated scheduling saves 8-12 hours weekly

• Week 1 - Analyze: Study Irving salon customer behaviors
• Week 2-3 - Build: Create QR flyers and booking system
• Week 4 - Deploy: Install systems and train staff
• Ongoing - Optimize: Track bookings and optimize placement

**CRITICAL REQUIREMENTS:**
- Use bullet points (•) for ALL content - NO bold formatting like **text**
- Write "Customer Visibility:" not "**Customer Visibility:**"
- Write "Week 1 - Analyze:" not "**Week 1 - Analyze:**" 
- Only provide 3 steps total (remove Step 4 completely)
- This is an assessment, not a complete implementation plan`;
  };

  const parseGeminiResponse = (response: string) => {
    const sections = {
      step1: '',
      step2: [] as string[],
      step3: ''
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
      }

      if (line.trim() && !line.startsWith('#')) {
        if (currentSection === 'step1') {
          sections.step1 += line.trim() + '\n';
        } else if (currentSection === 'step2') {
          if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
            step2Items.push(line.trim().replace(/^[•-]\s*/, ''));
          } else if (line.trim()) {
            step2Items.push(line.trim());
          }
        } else if (currentSection === 'step3') {
          sections.step3 += line.trim() + '\n';
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
    return formData.businessType && formData.location && formData.marketingChallenges.length > 0 && 
           formData.customerDiscovery && formData.techComfort && formData.businessGoals.length > 0;
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
                  Based on your answers, you're a <span className="font-bold">{formData.businessType.toLowerCase()}</span> in{' '}
                  <span className="font-bold">{formData.location}</span> with{' '}
                  <span className="font-bold">{formData.marketingChallenges.length} key challenge{formData.marketingChallenges.length !== 1 ? 's' : ''}</span> to address.
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

          {/* Clean Assessment Results */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-6">
              <h2 className="text-2xl font-bold text-white text-center">
                YOUR AI TRANSFORMATION PLAN
              </h2>
            </div>

            <div className="p-8 space-y-8">
              {/* Step 1 - Clean Analysis */}
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-xl text-white">📋</span>
                  </div>
                  <h3 className="text-xl font-bold text-green-800">
                    STEP 1: What We Found About Your Business
                  </h3>
                </div>
                <div className="ml-13 space-y-2">
                  {parsedResult.step1.split('\n').filter((line: string) => line.trim()).map((line: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="text-green-600 mt-1">•</span>
                      <p className="text-gray-700 text-base leading-relaxed">{line.replace(/^[•\-\*]\s*/, '')}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 2 - AI Plan */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-xl text-white">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-800">
                    STEP 2: Your Personalized AI Plan
                  </h3>
                </div>
                <div className="ml-13 space-y-3">
                  {parsedResult.step2.map((item: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <p className="text-gray-700 text-base leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 3 - Implementation */}
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-xl text-white">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold text-purple-800">
                    STEP 3: How We'll Guide You
                  </h3>
                </div>
                <div className="ml-13 space-y-2">
                  {parsedResult.step3.split('\n').filter((line: string) => line.trim()).map((line: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="text-purple-600 mt-1">•</span>
                      <p className="text-gray-700 text-base leading-relaxed">{line.replace(/^[•\-\*]\s*/, '')}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl border-2 border-green-200 p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 text-base font-medium mb-6 max-w-2xl mx-auto">
                Let's discuss how we can help your business grow with AI solutions.
              </p>
              <div className="space-y-4">
                <Button 
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold px-8 py-3 text-lg"
                >
                  Get in Touch
                </Button>
                <div>
                  <Button 
                    onClick={() => {
                      setCurrentStep(1);
                      setAssessmentResult('');
                      setParsedResult(null);
                      setFormData({
                        businessType: '',
                        location: '',
                        marketingChallenges: [],
                        customerDiscovery: '',
                        techComfort: '',
                        businessGoals: []
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
            <span>Quick Assessment</span>
            <span>5 Questions</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-green-600 to-emerald-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${isStepComplete() ? 100 : 20}%` }}
            ></div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Quick Business Assessment</h2>
          <div className="space-y-8">
            <div>
              <Label htmlFor="businessType" className="text-base font-bold text-gray-800">
                1. What best describes your business? *
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
              <Label htmlFor="location" className="text-base font-bold text-gray-800">
                2. Where is your business located? *
              </Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                placeholder="e.g., Irving, TX or San Francisco, CA"
                className="mt-2 text-base font-medium"
                required
              />
            </div>

            <div>
              <Label className="text-base font-bold text-gray-800 mb-3 block">
                3. What marketing challenges are you facing? (Select all that apply) *
              </Label>
              <p className="text-sm text-gray-600 mb-4">Choose multiple options that describe your current situation</p>
              <div className="space-y-3">
                {[
                  'Not enough customers know about my business',
                  'Customers can\'t easily book appointments/services',
                  'Too much time spent on repetitive customer questions',
                  'Hard to compete with larger businesses online',
                  'Don\'t know which marketing actually works'
                ].map(challenge => (
                  <label key={challenge} className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                    formData.marketingChallenges.includes(challenge) 
                      ? 'border-green-500 bg-green-50' 
                      : 'border-gray-200 hover:bg-green-50'
                  }`}>
                    <input
                      type="checkbox"
                      value={challenge}
                      checked={formData.marketingChallenges.includes(challenge)}
                      onChange={() => handleMultipleChoice('marketingChallenges', challenge)}
                      className="mr-3 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="text-base font-medium text-gray-800">{challenge}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-base font-bold text-gray-800 mb-3 block">
                4. How do most of your new customers find you? *
              </Label>
              <div className="space-y-3">
                {[
                  'Word of mouth/referrals',
                  'Walk-by foot traffic',
                  'Google search',
                  'Social media (Instagram, Facebook, TikTok)',
                  'Traditional advertising (flyers, newspaper)'
                ].map(discovery => (
                  <label key={discovery} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-green-50 cursor-pointer transition-colors">
                    <input
                      type="radio"
                      name="customerDiscovery"
                      value={discovery}
                      checked={formData.customerDiscovery === discovery}
                      onChange={(e) => handleInputChange('customerDiscovery', e.target.value)}
                      className="mr-3 w-4 h-4 text-green-600"
                    />
                    <span className="text-base font-medium text-gray-800">{discovery}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-base font-bold text-gray-800 mb-3 block">
                5. How comfortable are you with technology? *
              </Label>
              <div className="space-y-3">
                {[
                  'Very comfortable - I use multiple apps and tools',
                  'Somewhat comfortable - I use basics like smartphone apps',
                  'Limited comfort - I prefer simple solutions',
                  'Need help - I avoid complex technology'
                ].map(comfort => (
                  <label key={comfort} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-green-50 cursor-pointer transition-colors">
                    <input
                      type="radio"
                      name="techComfort"
                      value={comfort}
                      checked={formData.techComfort === comfort}
                      onChange={(e) => handleInputChange('techComfort', e.target.value)}
                      className="mr-3 w-4 h-4 text-green-600"
                    />
                    <span className="text-base font-medium text-gray-800">{comfort}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-base font-bold text-gray-800 mb-3 block">
                6. What would have the biggest impact on your business? (Select all that apply) *
              </Label>
              <p className="text-sm text-gray-600 mb-4">Choose all outcomes that would significantly help your business</p>
              <div className="space-y-3">
                {[
                  '50% more customers walking through the door',
                  'Never missing a customer call or booking request',
                  'Saving 10+ hours per week on admin tasks',
                  'Professional online presence that competes with bigger businesses'
                ].map(goal => (
                  <label key={goal} className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                    formData.businessGoals.includes(goal) 
                      ? 'border-green-500 bg-green-50' 
                      : 'border-gray-200 hover:bg-green-50'
                  }`}>
                    <input
                      type="checkbox"
                      value={goal}
                      checked={formData.businessGoals.includes(goal)}
                      onChange={() => handleMultipleChoice('businessGoals', goal)}
                      className="mr-3 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="text-base font-medium text-gray-800">{goal}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Error Display */}
          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 font-medium">{error}</p>
            </div>
          )}

          {/* Generate Button */}
          <div className="flex justify-center mt-8">
            <Button
              onClick={generateAssessment}
              disabled={!isStepComplete() || isGenerating}
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold px-12 py-4 text-lg"
            >
              {isGenerating ? 'Generating Your AI Plan...' : 'Generate My AI Plan'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}