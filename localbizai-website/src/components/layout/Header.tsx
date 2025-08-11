
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf4] px-10 py-3">
      <div className="flex items-center gap-4 text-[#0d141c]">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="LocalBizAI Logo" width={48} height={48} />
          <h2 className="text-[#0d141c] text-xl font-bold leading-tight tracking-[-0.015em]">LocalBizAI</h2>
        </Link>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link className="text-[#0d141c] text-sm font-medium leading-normal" href="#features">Product</Link>
          <Link className="text-[#0d141c] text-sm font-medium leading-normal" href="/pricing">Pricing</Link>
          <Link className="text-[#0d141c] text-sm font-medium leading-normal" href="/blog">Resources</Link>
        </div>
        <Button asChild>
          <Link href="/auth/signup">Get Started</Link>
        </Button>
      </div>
    </header>
  );
}
