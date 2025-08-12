"use client";

import { Bot, CalendarCheck, TrendingUp, ShieldCheck, Scale, Settings } from "lucide-react";

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          AI Tools That Actually Help Your Business
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
            <Bot className="w-8 h-8 text-indigo-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Chat Assistant</h3>
              <p className="text-gray-600">24/7 bookings</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
            <CalendarCheck className="w-8 h-8 text-indigo-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Automated Follow-ups</h3>
              <p className="text-gray-600">reduce no-shows</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
            <TrendingUp className="w-8 h-8 text-indigo-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Financial Forecasting</h3>
              <p className="text-gray-600">predict busy seasons</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
            <ShieldCheck className="w-8 h-8 text-indigo-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Security Monitor</h3>
              <p className="text-gray-600">protect data</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
            <Scale className="w-8 h-8 text-indigo-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Compliance Assistant</h3>
              <p className="text-gray-600">navigate regulations</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
            <Settings className="w-8 h-8 text-indigo-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry-Specific Optimizers</h3>
              <p className="text-gray-600">tailored tools</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}