import Link from "next/link"
import { CheckCircle } from "lucide-react"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"

export default function CareServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-[#e22226] text-white">
        <NavBar />
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center">HIV Care Services</h1>
          <p className="text-lg text-center mt-4 max-w-2xl mx-auto">
            From testing to treatment, we provide comprehensive information about HIV care services and support programs
            available to you.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          {/* Step-by-Step Guide */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Your Journey: From Testing to Treatment
            </h2>

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gray-100 rounded-full h-40 w-40 flex items-center justify-center mx-auto">
                    <span className="text-[#e22226] text-6xl font-bold">1</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-3">Get Tested</h3>
                  <p className="text-gray-700 mb-4">
                    The first step is knowing your status. HIV testing is quick, confidential, and widely available. You
                    can get tested at healthcare providers, community health centers, and even through home testing
                    kits.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="text-[#e22226] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Results are typically available in 20-30 minutes for rapid tests</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-[#e22226] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Testing is confidential and often free or low-cost</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-[#e22226] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>No appointment necessary at many locations</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gray-100 rounded-full h-40 w-40 flex items-center justify-center mx-auto">
                    <span className="text-[#e22226] text-6xl font-bold">2</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-3">Connect to Care</h3>
                  <p className="text-gray-700 mb-4">
                    If you test positive, you'll be connected to healthcare providers who specialize in HIV care. They
                    will help you understand your diagnosis and develop a treatment plan.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="text-[#e22226] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Counselors are available to provide emotional support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-[#e22226] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Case managers help navigate healthcare systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-[#e22226] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Financial assistance programs are available</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gray-100 rounded-full h-40 w-40 flex items-center justify-center mx-auto">
                    <span className="text-[#e22226] text-6xl font-bold">3</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-3">Start Treatment</h3>
                  <p className="text-gray-700 mb-4">
                    Modern HIV treatments are highly effective. Antiretroviral therapy (ART) can reduce the amount of
                    HIV in your body to undetectable levels, allowing you to live a long, healthy life.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="text-[#e22226] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>One pill once a day is common for many people</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-[#e22226] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Minimal side effects with modern medications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-[#e22226] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Undetectable = Untransmittable (U=U)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gray-100 rounded-full h-40 w-40 flex items-center justify-center mx-auto">
                    <span className="text-[#e22226] text-6xl font-bold">4</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-3">Stay Connected</h3>
                  <p className="text-gray-700 mb-4">
                    Regular healthcare visits and community support are important parts of living well with HIV. Support
                    groups, counseling, and other services can help you thrive.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="text-[#e22226] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Connect with others living with HIV</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-[#e22226] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Access mental health services</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-[#e22226] mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Learn about nutrition, exercise, and overall wellness</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-44">
            <h2 className="text-2xl font-bold mb-4">Ready to Take the First Step?</h2>
            <p className="max-w-2xl mx-auto mb-6">
              Whether you're seeking testing, treatment, or support, we're here to help you navigate your journey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/#get-tested"
                className="bg-[#e22226] text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
              >
                Find Testing Locations
              </Link>
              <Link
                href="https://www.google.com/search?q=HIV+Counselors+near+me"
                target="_blank"
                className="border border-[#e22226] text-[#e22226] px-6 py-3 rounded-full font-medium hover:bg-[#e22226] hover:text-white transition-colors"
              >
                Contact a Counselor
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

