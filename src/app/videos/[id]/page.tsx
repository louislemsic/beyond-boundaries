"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"

export default function VideoPage() {
  const params = useParams()
  const router = useRouter()
  const [videoId, setVideoId] = useState<number>(1)
  const [videoTitle, setVideoTitle] = useState<string>("")
  const [videoDescription, setVideoDescription] = useState<string>("")

  // Video data
  const videos = [
    {
      id: 1,
      title: "Understanding HIV: The Basics",
      description:
        "Learn about what HIV is, how it affects the body, and the current state of HIV treatment and prevention.",
      videoSrc: "/videos/1.mp4",
    },
    {
      id: 2,
      title: "Fact Check with Gen Z",
      description:
        "Young adults discuss common misconceptions about HIV and fact-check popular beliefs about the virus.",
      videoSrc: "/videos/2.mp4",
    },
    {
      id: 3,
      title: "Gen-Z Meets PLHIV",
      description:
        "A powerful conversation between Gen Z individuals and people living with HIV, breaking down stigma through dialogue.",
      videoSrc: "/videos/3.mp4",
    },
    {
      id: 4,
      title: "HIV Support Services",
      description: "An overview of the support services available for people living with HIV and how to access them.",
      videoSrc: "/videos/4.mp4",
    },
    {
      id: 5,
      title: "Breaking the Stigma",
      description: "Stories from individuals who are working to break the stigma surrounding HIV in their communities.",
      videoSrc: "/videos/5.mp4",
    },
    {
      id: 6,
      title: "HIV Prevention: Modern Approaches",
      description:
        "Learn about modern HIV prevention methods including PrEP, PEP, and other strategies to reduce transmission.",
      videoSrc: "/videos/6.mp4",
    },
  ]

  useEffect(() => {
    if (params.id) {
      const id = Number.parseInt(params.id as string)
      const video = videos.find((v) => v.id === id)

      if (video) {
        setVideoId(id)
        setVideoTitle(video.title)
        setVideoDescription(video.description)
      } else {
        // Redirect to videos page if video not found
        router.push("/videos")
      }
    }
  }, [params.id, router])

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-[#e22226] text-white">
        <NavBar />
      </header>

      {/* Video Player */}
      <div className="bg-black">
        <div className="container mx-auto px-4 py-8">
          <video className="w-full aspect-video" controls autoPlay src={`/videos/${videoId}.mp4`} />
        </div>
      </div>

      {/* Video Info */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">{videoTitle}</h1>
          <p className="text-gray-700 mb-8">{videoDescription}</p>

          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => router.push("/videos")}
              className="bg-[#e22226] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors"
            >
              Back to Videos
            </button>

            {/* Navigation between videos */}
            <div className="flex gap-2">
              {videoId > 1 && (
                <button
                  onClick={() => router.push(`/videos/${videoId - 1}`)}
                  className="border border-[#e22226] text-[#e22226] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#e22226] hover:text-white transition-colors"
                >
                  Previous Video
                </button>
              )}

              {videoId < 6 && (
                <button
                  onClick={() => router.push(`/videos/${videoId + 1}`)}
                  className="border border-[#e22226] text-[#e22226] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#e22226] hover:text-white transition-colors"
                >
                  Next Video
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

