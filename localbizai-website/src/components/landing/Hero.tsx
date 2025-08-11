
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function Hero() {
  return (
    <div
      className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-end px-4 pb-10 md:px-10"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("/timeline.jpg")`,
      }}
    >
      <div className="flex flex-col gap-2 text-left">
        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">
          Unlock the Power of Data with Innovate
        </h1>
        <h2 className="text-white text-sm font-normal leading-normal md:text-base">
          Transform your business with our cutting-edge data analytics platform. Gain insights, make informed decisions, and drive growth.
        </h2>
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
