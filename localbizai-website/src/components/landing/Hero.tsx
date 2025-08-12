
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <div className="bg-white flex items-center justify-center py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main heading */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight tracking-tight">
              The Business Partner
              <br />
              <span className="relative">
                Every Entrepreneur
                <span className="absolute -bottom-2 left-0 w-full h-6 bg-yellow-300 -z-10 transform -skew-y-1"></span>
              </span>
              <br />
              Deserves
            </h1>
          </div>
          
          {/* Timeline visual */}
          <div className="pt-6">
            <Image 
              src="/timeline.jpg" 
              alt="AI Implementation Timeline" 
              width={900} 
              height={450} 
              className="object-cover rounded-2xl shadow-2xl mx-auto border-8 border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
