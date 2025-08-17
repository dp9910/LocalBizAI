
import { Search, Brain, Rocket, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Solution() {
  const steps = [
    {
      icon: Search,
      title: "Business Discovery",
      description: "We learn YOUR business first",
      details: "Deep-dive analysis of your industry, customers, and unique challenges to create a personalized AI strategy",
      position: "right"
    },
    {
      icon: Brain,
      title: "Custom Strategy",
      description: "AI creates your roadmap",
      details: "Our AI analyzes your data and creates a step-by-step implementation plan tailored to your specific needs",
      position: "left"
    },
    {
      icon: Rocket,
      title: "Guided Implementation",
      description: "No $485 repair bills",
      details: "Professional setup and testing ensure everything works perfectly from day one with ongoing support",
      position: "right"
    },
    {
      icon: TrendingUp,
      title: "Continuous Optimization",
      description: "Gets smarter every day",
      details: "Machine learning algorithms continuously improve performance and suggest new optimization opportunities",
      position: "left"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-green-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-medium mb-4">
            <CheckCircle className="w-4 h-4 mr-2" />
            The Solution
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Your Guided Journey to
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> AI Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our systematic approach to AI implementation ensures your business gets real results, not empty promises.
          </p>
        </div>

        <div className="relative">
          {/* Enhanced vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 to-blue-400 opacity-60"></div>

          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="flex items-center w-full mb-16 last:mb-0">
                {/* Left content */}
                <div className={`w-1/2 ${step.position === 'right' ? 'pr-12' : ''} ${step.position === 'right' ? 'text-right' : ''}`}>
                  {step.position === 'right' && (
                    <div className="group">
                      <div className="inline-flex items-center mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-blue-500 p-3 mr-4">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                          Step {index + 1}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-lg text-gray-600 mb-4">{step.description}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{step.details}</p>
                    </div>
                  )}
                </div>

                {/* Center circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  {/* Pulse animation */}
                  <div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-ping opacity-20"></div>
                </div>

                {/* Right content */}
                <div className={`w-1/2 ${step.position === 'left' ? 'pl-12' : ''}`}>
                  {step.position === 'left' && (
                    <div className="group">
                      <div className="inline-flex items-center mb-4">
                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full mr-4">
                          Step {index + 1}
                        </span>
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-blue-500 p-3">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-lg text-gray-600 mb-4">{step.description}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{step.details}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Ready to take the next step? Let's discuss how this approach can work for your specific business needs.
            </p>
            <Link href="/assessment" className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 cursor-pointer group">
              <span>Begin Discovery Process</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
