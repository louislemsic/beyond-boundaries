import Image from "next/image"
import { notFound } from "next/navigation"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const article = {
    id: "transmission-to-treatment",
    title: "Transmission to Treatment",
    author: "Hazel",
    date: "April 22, 2025",
    imageUrl: "/images/transmission.jpg",
    source: "https://www.hiv.gov/hiv-basics/overview/about-hiv-and-aids/how-is-hiv-transmitted"
  };

export default function ArticlePage({ params }: any) {
  return (
    <main className="min-h-screen">
      <div className="bg-bc-1">
        <NavBar />
      </div>
      
      {/* Banner Image */}
      <div className="relative w-full h-64 md:h-80">
        <Image 
          src={`${basePath}${article.imageUrl}`}
          alt={article.title} 
          fill 
          className="object-cover"
          priority
        />
      </div>
      
      {/* Article Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl -mb-28">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">{article.title}</h1>
        
        <div className="flex items-center text-gray-600 mb-8">
          <span className="mr-4">By {article.author}</span>
          <span>{article.date}</span>
        </div>
        
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <p className="mb-6 text-gray-700 leading-relaxed">
            HIV can be transmitted through bodily fluids, including blood, semen ("cum"), pre-seminal fluid ("pre-cum"), vaginal fluids, rectal fluids, and breastmilk. 
            To actually be infected, fluids must come in contact with a mucous membrane or damaged tissue or be directly injected into the bloodstream (from a needle or syringe) for transmission to occur. Alcohol or drug use can increase the chances of getting or transmitting HIV.
          </p>

          {/* Blood Transmission Section */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4 text-bc-1">Blood:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span className="text-gray-700">Sharing needles or syringes (medically or not)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span className="text-gray-700">Being exposed to HIV-positive blood through accidental needle sticks</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span className="text-gray-700">Sharing personal items that may have blood (such as razors or toothbrushes)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span className="text-gray-700">Being exposed through placental exchange during pregnancy</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span className="text-gray-700">Eating pre-chewed foods (in case of open sores or bleeding gums)</span>
              </li>
            </ul>
          </div>

          {/* Sexual Fluids Section */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4 text-bc-1">Semen, Pre-Seminal Fluid, Vaginal Fluids, and Rectal Fluids:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span className="text-gray-700">Having vaginal or anal sex</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span className="text-gray-700">Having oral sex (can occur in rare cases)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span className="text-gray-700">Being exposed to vaginal fluids during childbirth</span>
              </li>
            </ul>
          </div>

          {/* Breast Milk Section */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4 text-bc-1">Breast Milk:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span className="text-gray-700">Breastfeeding</span>
              </li>
            </ul>
          </div>

          {/* Symptoms Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-bc-1">SYMPTOMS</h3>
            <p className="mb-4 text-gray-700 leading-relaxed">
              After 2 to 4 weeks of specific activities, people may have or may not experience any symptoms of HIV. But having one of the said symptoms does not mean a person is positive on HIV. The best way to know is to get checked.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span className="text-gray-700">Rash</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span className="text-gray-700">Sore throat</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span className="text-gray-700">Fever</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span className="text-gray-700">Fatigue</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span className="text-gray-700">Swollen lymph nodes</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span className="text-gray-700">Muscle aches</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span className="text-gray-700">Chills</span>
              </li>
            </ul>
          </div>

          {/* Prevention Section */}
          <div className="mb-8">
            <p className="mb-4 text-gray-700 leading-relaxed">
              Today, more tools and procedures are available to prevent HIV.
            </p>
            <h3 className="text-lg font-bold mb-4 text-bc-1">Prevention strategies include:</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span className="text-gray-700">Using condoms the right way every time you have sex.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span className="text-gray-700">Never sharing needles, syringes, or other drug injection equipment.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-3 mt-1">•</span>
                <span className="text-gray-700">Using PrEP (pre-exposure prophylaxis) and PEP (post-exposure prophylaxis).</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              But it is better to go to your nearest clinic or hospital to get checked and tested.
            </p>
          </div>

          {/* Treatment Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-bc-1">TREATMENT</h3>
            <p className="text-gray-700 leading-relaxed">
              The Department of Health intends to fight against the stigma and discrimination of AIDS and HIV in the country and this intention led to a strategic planning together with the Philippine National AIDS Council. The strategy is correlated with the 7th AIDS Medium Term Plan that has five pillars; Prevent, Treat, Protect, Strengthen, and Sustain. The goal of the 7th AIDS Medium Term Plan is to provide full protection of human rights for the PLHIV and have easy access to health services such as; Sexual and Reproductive Health Services, HIV Testings, Treatments, Care, and Support.
            </p>
          </div>
          
          {/* Source */}
          {article.source && (
            <div className="mt-12 pt-6 border-t border-gray-300">
              <p className="text-gray-600">
                <strong>Retrieved from:</strong>{" "}
                <a href={article.source} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  {article.source}
                </a>
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
} 