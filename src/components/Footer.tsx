import Link from "next/link"
import Image from "next/image"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Footer() {
  return (
    <footer className="w-full mt-32">
      {/* Main section with background image and red overlay */}
      <div className="relative py-16 px-6 md:px-12 overflow-hidden">
        {/* Background image with red filter */}
        <div className="absolute inset-0 z-0 opacity-93">
          <Image 
            src={`${basePath}/images/background.jpeg`} 
            alt="Background" 
            className="object-cover"
            fill 
          />
          <div className="absolute inset-0 bg-bc-1 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Left: Logo and description */}
          <div>
            <div className="mb-2">
              <Link href="/" >
                <Image
                  src={`${basePath}/svgs/wordmark.svg`}
                  alt="Beyond Boundaries"
                  width={250}
                  height={100}
                  className="text-white max-w-full h-auto"
                />
              </Link>
            </div>
            <p className="text-white/90 mt-4 text-sm italic">
              Beyond Boundaries is a capstone project for
              <br className="hidden sm:block" />
              De La Salle College of Benilde.
            </p>
          </div>
          {/* Right: Footer Columns */}
          <div className="flex flex-col sm:flex-row gap-12 w-full sm:w-auto justify-end">
            {/* Quick Access */}
            <div className="mt-8 md:mt-0 md:text-right">
              <h3 className="text-white text-base font-semibold mb-3">Quick Access</h3>
              <ul className="space-y-2 flex flex-col">
                <li>
                  <Link href="/care-services" className="text-white/90 hover:text-white font-medium transition-colors">Testing</Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-white/90 hover:text-white font-medium transition-colors">About Us</Link>
                </li>
                <li>
                  <Link href="/articles" className="text-white/90 hover:text-white font-medium transition-colors">Articles</Link>
                </li>
                <li>
                  <Link href="/videos" className="text-white/90 hover:text-white font-medium transition-colors">Videos</Link>
                </li>
              </ul>
            </div>
            {/* Articles Column */}
            <div className="mt-8 md:mt-0 md:text-right hidden md:block">
              <h3 className="text-white text-base font-semibold mb-3">Articles</h3>
              <ul className="space-y-2 flex flex-col">
                <li>
                  <Link href="/articles/what-is-hiv" className="text-white/90 hover:text-white transition-colors">What is HIV?</Link>
                </li>
                <li>
                  <Link href="/articles/hiv-history" className="text-white/90 hover:text-white transition-colors">History of HIV/AIDS</Link>
                </li>
                <li>
                  <Link href="/articles/transmission-to-treatment" className="text-white/90 hover:text-white transition-colors">Transmission to Treatment</Link>
                </li>
                <li>
                  <Link href="/articles/hiv-data" className="text-white/90 hover:text-white transition-colors">2023 Data about HIV/AIDS</Link>
                </li>
              </ul>
            </div>
            {/* Videos Column */}
            <div className="mt-8 md:mt-0 md:text-right hidden md:block">
              <h3 className="text-white text-base font-semibold mb-3">Videos</h3>
              <ul className="space-y-2 flex flex-col">
                <li>
                  <Link href="/videos/1" className="text-white/90 hover:text-white transition-colors">Gen Z's Meets PLHIV</Link>
                </li>
                <li>
                  <Link href="/videos/2" className="text-white/90 hover:text-white transition-colors">HIV Fact Talk with Gen-Zs Part 1</Link>
                </li>
                <li>
                  <Link href="/videos/3" className="text-white/90 hover:text-white transition-colors">HIV Fact Talk with Gen-Zs Part 2</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Background decorative element */}
        <div className="absolute right-0 top-0 w-auto h-full z-3 opacity-80">
          <Image
            src={`${basePath}/svgs/logo-red.svg`}
            alt="Background Logo"
            width={700}
            height={100}
            className="object-contain transform translate-x-2 translate-y-[-24%]"
          />
        </div>
      </div>

      {/* Bottom section with copyright and links - mobile responsive */}
      <div className="bg-[#f8f2e8] py-4 px-6 md:px-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm">
          <div className="text-red-600">© 2025 Beyond Boundaries. All rights reserved.</div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full sm:w-auto">
            <Link href="/terms" className="text-red-600 hover:underline">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-red-600 hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

