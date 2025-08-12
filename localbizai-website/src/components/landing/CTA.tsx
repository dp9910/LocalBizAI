
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Ready to Get Started?
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-6">Let's discuss how we can help your business grow with AI solutions.</p>
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
