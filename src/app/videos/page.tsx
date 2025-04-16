import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"

export default function VideosPage() {
  // Video data
  const videos = [
    {
      id: 1,
      title: "Understanding HIV: The Basics",
      description:
        "Learn about what HIV is, how it affects the body, and the current state of HIV treatment and prevention.",
      thumbnail: "/placeholder.svg?height=300&width=400",
      videoSrc: "/videos/1.mp4",
    },
    {
      id: 2,
      title: "Fact Check with Gen Z",
      description:
        "Young adults discuss common misconceptions about HIV and fact-check popular beliefs about the virus.",
      thumbnail: "/placeholder.svg?height=300&width=400",
      videoSrc: "/videos/2.mp4",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-[#e22226] text-white">
        <NavBar />
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Video Resources</h1>
          <p className="text-lg text-center mt-4 max-w-2xl mx-auto">
            Explore our collection of educational videos about HIV, featuring personal stories, expert insights, and
            important information about prevention and support.
          </p>
        </div>
      </header>

      {/* Videos Grid */}
      <div className="bg-white py-16 mb-40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-video">
                  <Image src={video.thumbnail || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
                  <Link href={`/videos/${video.id}`} className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center">
                      <Play className="w-8 h-8 text-[#e22226] ml-1" />
                    </div>
                  </Link>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                  <p className="text-gray-600 mb-4">{video.description}</p>
                  <Link
                    href={`/videos/${video.id}`}
                    className="bg-[#e22226] text-white px-4 py-2 rounded-full text-sm font-medium inline-block hover:bg-opacity-90 transition-colors"
                  >
                    Watch Video
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

