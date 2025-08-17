
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-green-800 to-emerald-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Ready to Get Started?
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-green-700/50 backdrop-blur-sm border border-green-600/30 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-6 text-green-100">Let's discuss how we can help your business grow with AI solutions.</p>
            <Button asChild size="lg" className="bg-white text-green-900 hover:bg-green-50 font-semibold">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
