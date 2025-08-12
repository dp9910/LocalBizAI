
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex justify-center bg-gray-50">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <footer className="flex flex-col gap-6 px-5 py-10 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link className="text-[#49739c] text-base font-normal leading-normal hover:text-gray-700 transition-colors" href="/contact">Contact Us</Link>
          </div>
          <div className="space-y-2">
            <p className="text-[#49739c] text-base font-normal leading-normal">© 2025 LocalBizAI. All rights reserved.</p>
            <p className="text-gray-500 text-sm">
              Website designed with assistance from Claude AI and Google Gemini
            </p>
          </div>
        </footer>
      </div>
    </footer>
  );
}
