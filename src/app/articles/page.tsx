import Image from "next/image"
import Link from "next/link"
import { BookOpen } from "lucide-react"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function ArticlesPage() {
  // Article data
  const articles = [
    {
      id: "what-is-hiv",
      title: "What is HIV?",
      description:
        "This article provides a comprehensive overview of HIV, explaining how the virus works, how it's transmitted, and current treatment options.",
      imageUrl: "/images/what-is-hiv.jpg",
    },
    {
      id: "hiv-data",
      title: "Latest Data about HIV",
      description:
        "An in-depth analysis of current HIV statistics worldwide, including infection rates, treatment access, and progress in prevention efforts.",
      imageUrl: "/images/hiv-data.jpg",
    }
  ]

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-[#e22226] text-white">
        <NavBar />
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Article Resources</h1>
          <p className="text-lg text-center mt-4 max-w-2xl mx-auto">
            Browse our collection of informative articles about HIV, covering essential information, research updates,
            and guidance on prevention and support.
          </p>
        </div>
      </header>

      {/* Articles Grid */}
      <div className="bg-white py-16 mb-40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-video">
                  <Image 
                    src={`${basePath}${article.imageUrl}`} 
                    alt={article.title} 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <Link href={`/articles/${article.id}`} className="absolute inset-0 flex items-center justify-center">
                    {/* <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-[#e22226]" />
                    </div> */}
                  </Link>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <Link
                    href={`/articles/${article.id}`}
                    className="bg-[#e22226] text-white px-4 py-2 rounded-full text-sm font-medium inline-block hover:bg-opacity-90 transition-colors"
                  >
                    Read Article
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}