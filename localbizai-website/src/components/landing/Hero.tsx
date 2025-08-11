import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <div className="flex min-h-[480px] flex-col gap-6 items-center justify-center px-4 pb-10 md:px-10 bg-gray-100">
      <div className="flex flex-col gap-2 text-center mb-8">
        <h1 className="text-gray-900 text-4xl font-bold mb-4">
          The Business Partner Every Entrepreneur Deserves
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
          Small business AI adoption jumped from 51% to 68% in just two years.
          <br />
          But nearly half still struggle with successful deployment.
          <br />
          We turn AI chaos into business growth.
        </p>
      </div>
      <div className="border-4 border-black p-2 mb-8">
        <Image 
          src="/timeline.jpg" 
          alt="Timeline" 
          width={900} 
          height={450} 
          className="object-cover"
        />
      </div>
      <div className="flex-wrap gap-3 flex">
        <Button asChild size="lg">
          <Link href="#features">Read More</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="bg-slate-50 text-slate-900">
          <Link href="/auth/signup">Get Started</Link>
        </Button>
      </div>
    </div>
  );
}