"use client";

import { Bot, CalendarCheck, TrendingUp, ShieldCheck, Scale, Settings, Sparkles, ArrowUpRight } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Bot,
      title: "Smart Chat Assistant",
      description: "AI-powered customer service that books appointments, answers questions, and converts leads 24/7",
      gradient: "from-blue-500 to-cyan-500",
      delay: "0"
    },
    {
      icon: CalendarCheck,
      title: "Automated Follow-ups",
      description: "Intelligent reminder system that reduces no-shows by 40% with personalized messaging",
      gradient: "from-purple-500 to-pink-500",
      delay: "100"
    },
    {
      icon: TrendingUp,
      title: "Financial Forecasting",
      description: "Predictive analytics to identify busy seasons, optimize pricing, and maximize revenue",
      gradient: "from-emerald-500 to-teal-500",
      delay: "200"
    },
    {
      icon: ShieldCheck,
      title: "Business Security Monitor",
      description: "Real-time threat detection and data protection with automated backup systems",
      gradient: "from-orange-500 to-red-500",
      delay: "300"
    },
    {
      icon: Scale,
      title: "Compliance Assistant",
      description: "Navigate complex regulations with AI guidance and automated document management",
      gradient: "from-indigo-500 to-purple-500",
      delay: "400"
    },
    {
      icon: Settings,
      title: "Industry-Specific Optimizers",
      description: "Tailored AI tools designed specifically for your industry's unique challenges and opportunities",
      gradient: "from-pink-500 to-rose-500",
      delay: "500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-green-50 via-white to-green-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-green-100 bg-grid-16 opacity-40"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Powerful AI Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            AI Tools That Actually
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Transform</span> Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop juggling dozens of disconnected tools. Our integrated AI platform delivers everything you need to scale your business intelligently.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 shadow-sm hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                      {feature.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-200 transition-all duration-300"></div>
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-r from-green-600 to-emerald-600"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}