import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
// Import all landing page components
import { Hero } from "@/components/landing/Hero";
import { PainPoints } from "@/components/landing/PainPoints";
import { Solution } from "@/components/landing/Solution";
import { Features } from "@/components/landing/Features"; // Re-added
// import { SocialProof } from "@/components/landing/SocialProof"; // Removed
import { CTA } from "@/components/landing/CTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Top Section with Quick Links */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-end items-center">
            <div className="flex space-x-4">
              <a
                href="/slide_deck.html"
                className="bg-white hover:bg-gray-50 text-gray-900 font-semibold px-6 py-3 rounded-lg border border-gray-300 shadow-sm transition-colors duration-200 flex items-center space-x-2"
              >
                <span className="text-xl">📊</span>
                <span>View Slide Deck</span>
              </a>
              
              <a
                href="/assessment"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-6 py-3 rounded-lg shadow-sm transition-all duration-200 flex items-center space-x-2"
              >
                <span className="text-xl">🎯</span>
                <span>Get My AI Plan</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <main>
        <Hero />
        <PainPoints />
        <Solution />
        <Features />
        {/* <SocialProof /> */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
}