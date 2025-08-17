
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <div className="bg-gradient-to-b from-green-50 via-white to-green-50 flex items-center justify-center py-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main heading */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight tracking-tight">
              <span className="relative">
                AI for Local Business
                <span className="absolute -bottom-2 left-0 w-full h-6 bg-green-300 -z-10 transform -skew-y-1"></span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-3xl mx-auto">
              We handle the AI chaos, so you can handle what matters.
            </p>
          </div>
          
          {/* Timeline visual */}
          <div className="pt-6">
            <Image 
              src="/timeline.jpg" 
              alt="AI Implementation Timeline" 
              width={900} 
              height={450} 
              className="object-cover rounded-2xl shadow-2xl mx-auto border-8 border-green-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
