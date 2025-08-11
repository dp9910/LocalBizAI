
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-20 bg-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Stop Fighting Tomorrow's War with Yesterday's Weapons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-indigo-800 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Free AI Readiness Assessment</h3>
            <p className="mb-6">Discover your business's AI potential with a personalized assessment.</p>
            <Button asChild size="lg" className="bg-white text-indigo-700 hover:bg-gray-100">
              <Link href="/assessment">Get Your Free Assessment</Link>
            </Button>
          </div>
          <div className="bg-indigo-800 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Start Your Guided Journey</h3>
            <p className="mb-6">Ready to transform your business? Sign up and let's build your AI future.</p>
            <Button asChild size="lg" className="bg-white text-indigo-700 hover:bg-gray-100">
              <Link href="/auth/signup">Sign Up Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
