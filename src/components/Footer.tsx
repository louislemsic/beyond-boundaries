import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full mt-32">
      {/* Main section with background image and red overlay */}
      <div className="relative py-16 px-6 md:px-12 overflow-hidden">
        {/* Background image with red filter */}
        <div className="absolute inset-0 z-0 opacity-93">
          <Image 
            src="/images/background.jpeg" 
            alt="Background" 
            className="object-cover"
            fill 
          />
          <div className="absolute inset-0 bg-bc-1 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10">
          {/* Using the wordmark SVG instead of text */}
          <div className="mb-2">
            <Link href="/" >
              <Image
                src="/svgs/wordmark.svg"
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

        {/* Background decorative element */}
        <div className="absolute right-0 top-0 w-auto h-full z-3 opacity-80">
          <Image
            src="/svgs/logo-red.svg"
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

