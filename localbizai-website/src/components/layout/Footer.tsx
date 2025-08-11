
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex justify-center">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <footer className="flex flex-col gap-6 px-5 py-10 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 md:flex-row md:justify-around">
            <Link className="text-[#49739c] text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</Link>
            <Link className="text-[#49739c] text-base font-normal leading-normal min-w-40" href="#">Terms of Service</Link>
            <Link className="text-[#49739c] text-base font-normal leading-normal min-w-40" href="#">Contact Us</Link>
          </div>
          <p className="text-[#49739c] text-base font-normal leading-normal">© 2023 Innovate. All rights reserved.</p>
        </footer>
      </div>
    </footer>
  );
}
