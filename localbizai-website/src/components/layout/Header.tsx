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
      
      {/* Empty space for clean layout */}
      <div className="flex flex-1"></div>
    </header>
  );
}