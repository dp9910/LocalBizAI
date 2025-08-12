
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';

export default function GetStartedPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessType: '',
    painPoints: '',
    aiExperience: '',
    goals: '',
    timeline: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Here you would typically send data to a backend or Firebase Function
    alert('Thank you for your submission!');
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Let's Get Started</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Tell us about your business to get a custom AI recommendation.
        </p>
      </div>
      <div className="mt-8 w-full max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <div>
                <Label htmlFor="businessType">What type of business do you have?</Label>
                <Input
                  id="businessType"
                  name="businessType"
                  type="text"
                  required
                  value={formData.businessType}
                  onChange={handleChange}
                  className="mt-1 block w-full"
                />
                <Button type="button" onClick={nextStep} className="mt-6 w-full">Next</Button>
              </div>
            )}

            {step === 2 && (
              <div>
                <Label htmlFor="painPoints">What are your current pain points?</Label>
                <Input
                  id="painPoints"
                  name="painPoints"
                  type="text"
                  required
                  value={formData.painPoints}
                  onChange={handleChange}
                  className="mt-1 block w-full"
                />
                <div className="flex justify-between mt-6">
                  <Button type="button" onClick={prevStep} variant="outline">Previous</Button>
                  <Button type="button" onClick={nextStep}>Next</Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <Label htmlFor="aiExperience">What is your AI experience level?</Label>
                <Input
                  id="aiExperience"
                  name="aiExperience"
                  type="text"
                  required
                  value={formData.aiExperience}
                  onChange={handleChange}
                  className="mt-1 block w-full"
                />
                <div className="flex justify-between mt-6">
                  <Button type="button" onClick={prevStep} variant="outline">Previous</Button>
                  <Button type="button" onClick={nextStep}>Next</Button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <Label htmlFor="goals">What are your main goals for using AI?</Label>
                <Input
                  id="goals"
                  name="goals"
                  type="text"
                  required
                  value={formData.goals}
                  onChange={handleChange}
                  className="mt-1 block w-full"
                />
                <div className="flex justify-between mt-6">
                  <Button type="button" onClick={prevStep} variant="outline">Previous</Button>
                  <Button type="button" onClick={nextStep}>Next</Button>
                </div>
              </div>
            )}

            {step === 5 && (
              <div>
                <Label htmlFor="timeline">What is your desired timeline for implementation?</Label>
                <Input
                  id="timeline"
                  name="timeline"
                  type="text"
                  required
                  value={formData.timeline}
                  onChange={handleChange}
                  className="mt-1 block w-full"
                />
                <div className="flex justify-between mt-6">
                  <Button type="button" onClick={prevStep} variant="outline">Previous</Button>
                  <Button type="submit">Submit</Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
