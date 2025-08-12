
import { AlertTriangle, DollarSign, TrendingDown, HelpCircle } from "lucide-react";

export function PainPoints() {
  const painPoints = [
    {
      icon: HelpCircle,
      stat: "35+",
      title: "Tools in One Article",
      quote: "Just choosing takes weeks",
      gradient: "from-amber-500 to-orange-500"
    },
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
    <section className="py-24 bg-gradient-to-b from-red-50 via-white to-red-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 border border-red-200 text-red-700 text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4 mr-2" />
            The Problem
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            The AI Tool
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent"> Chaos</span> Killing Small Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            While big corporations have dedicated AI teams, small businesses are drowning in complexity and broken promises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        {/* Bottom message */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl border border-red-100">
          <p className="text-lg font-semibold text-gray-800 mb-2">
            Sound familiar?
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            You're not alone. 68% of small businesses adopted AI in the last two years, but nearly half are still struggling to see real results. 
            <span className="font-semibold text-gray-800"> That changes today.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
