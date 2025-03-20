import Image from "next/image"
import Link from "next/link"

export default function NavBar() {
  return (
    <div className="bg-bc-1 text-bc-2">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="w-32 h-auto">
            <Image src="/svgs/wordmark.svg" alt="Beyond Boundaries Logo" width={100} height={100} className="w-full h-full" />
        </div>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link href="/care-services" className="uppercase hover:underline">
            Care Services
            </Link>
            <Link href="/what-is-hiv" className="uppercase hover:underline">
            What is HIV?
            </Link>
            <Link href="/videos" className="uppercase hover:underline">
            Videos
            </Link>
            <Link href="/about-us" className="uppercase hover:underline">
            About Us
            </Link>
            <Link
              href="#get-tested"
              className="uppercase border border-white rounded-full px-6 py-2 hover:bg-white hover:text-[#e22226] transition-colors"
            >
            Get Tested
            </Link>
        </nav>
        </div>
    </div>
  )
}

