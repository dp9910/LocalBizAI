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