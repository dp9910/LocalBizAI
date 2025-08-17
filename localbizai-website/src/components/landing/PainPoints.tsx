
import { AlertTriangle, DollarSign, TrendingDown, HelpCircle } from "lucide-react";

export function PainPoints() {
  const painPoints = [
    {
      icon: DollarSign,
      stat: "$485",
      title: "Average Repair Costs",
      quote: "When AI code crashes your site",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: TrendingDown,
      stat: "97%",
      title: "See No Results",
      quote: "Generic tools don't understand your business",
      gradient: "from-gray-500 to-slate-600"
    },
    {
      icon: AlertTriangle,
      stat: "48%",
      title: "Can't Choose",
      quote: "Overwhelmed by endless options",
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-green-50 via-white to-green-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4 mr-2" />
            The Problem
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            The AI Tool
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Chaos</span> Killing Small Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            While big corporations have dedicated AI teams, small businesses are drowning in complexity and broken promises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${point.gradient} p-3 mb-6 mx-auto`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                
                {/* Stat */}
                <div className="text-center mb-4">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${point.gradient} bg-clip-text text-transparent mb-2`}>
                    {point.stat}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {point.title}
                  </h3>
                </div>
                
                {/* Quote */}
                <div className="text-center">
                  <p className="text-gray-600 italic text-sm">
                    "{point.quote}"
                  </p>
                </div>

                {/* Subtle hover effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gray-100 transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Tool Selection Paralysis Section */}
        <div className="human-moment" style={{marginTop: '40px', padding: '30px', background: 'linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%)', border: '2px solid #f39c12', borderRadius: '20px'}}>
          <h4 style={{textAlign: 'center', color: '#d68910', fontSize: '1.5rem', marginBottom: '20px'}}>🔍 The Real Problem: Tool Selection Paralysis</h4>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px'}}>
            <div>
              <p style={{fontSize: '1.1rem', marginBottom: '15px'}}><strong>Customer Service:</strong><br />Ada, Forethought, Intercom, Zendesk, Drift...</p>
              <p style={{fontSize: '1.1rem', marginBottom: '15px'}}><strong>Marketing:</strong><br />Jasper, Shown, Albert, Copy.ai, Shopify Magic...</p>
              <p style={{fontSize: '1.1rem', marginBottom: '0'}}><strong>Analytics:</strong><br />ThoughtSpot, Qlik, Tableau, Dataiku, Looker...</p>
            </div>
            <div>
              <p style={{fontSize: '1.1rem', marginBottom: '15px'}}><strong>Operations:</strong><br />Stock Perfect, EcoReturns, Monday.com, Zapier...</p>
              <p style={{fontSize: '1.1rem', marginBottom: '15px'}}><strong>Design:</strong><br />Midjourney, Adobe Firefly, Canva, Figma AI...</p>
              <p style={{fontSize: '1.1rem', marginBottom: '0'}}><strong>Sales:</strong><br />ReConvert, HubSpot, Salesforce Einstein, Pipedrive...</p>
            </div>
          </div>
          <p style={{textAlign: 'center', marginTop: '20px', fontSize: '1.2rem', fontWeight: '600', color: '#d68910'}}>How do you choose? How do they integrate? Who provides guidance?</p>
        </div>

      </div>
    </section>
  );
}
