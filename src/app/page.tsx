"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin } from "lucide-react"
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import YouTubeShort from "@/components/YouTubeShort"
import ShortVideoModal from "@/components/ShortVideoModal"
import MediaPlayer from "@/components/MediaPlayer"

const videos = [
  {
    id: 1,
    title: "Understanding HIV: The Basics",
    description:
      "Learn about what HIV is, how it affects the body, and the current state of HIV treatment and prevention.",
    youtubeId: "xS-_dClKdMM", // CDC HIV video
  },
  {
    id: 2,
    title: "Fact Check with Gen Z",
    description:
      "Young adults discuss common misconceptions about HIV and fact-check popular beliefs about the virus.",
    youtubeId: "WI5_bVH_W8k", // WHO HIV video
  }
];

// Testing centers data
const testingCenters = [
  {
    name: "City Health Department",
    address: "123 Main Street, Downtown",
    phone: "(555) 123-4567",
    hours: "Mon-Fri: 9am-5pm",
  },
  {
    name: "Community Health Clinic",
    address: "456 Park Avenue, Midtown",
    phone: "(555) 987-6543",
    hours: "Mon-Sat: 8am-8pm",
  },
  {
    name: "University Medical Center",
    address: "789 College Road, University District",
    phone: "(555) 456-7890",
    hours: "24/7 Testing Available",
  },
];

// YouTube Shorts data
const youtubeShortsData = [
  {
    title: "HIV Awareness Series",
    shorts: [
      { id: "l6QCCuhu50E", part: 1, title: "HIV Awareness - Part 1" },
      { id: "OnPJ3M5DSg4", part: 2, title: "HIV Awareness - Part 2" },
      { id: "mTwizCrg384", part: 3, title: "HIV Awareness - Part 3" },
    ],
  },
  {
    title: "Living with HIV",
    shorts: [
      { id: "_MQGqL343gs", part: 1, title: "Living with HIV - Part 1" },
      { id: "BrLiyFFqNiQ", part: 2, title: "Living with HIV - Part 2" },
      { id: "xYs_R6IiSes", part: 3, title: "Living with HIV - Part 3" },
    ],
  },
]

export default function Home() {
  const [isVideoPlayerOpen, setIsVideoPlayerOpen] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  // State for YouTube Shorts modal
  const [isShortModalOpen, setIsShortModalOpen] = useState(false)
  const [currentShortId, setCurrentShortId] = useState("")
  const [currentShortTitle, setCurrentShortTitle] = useState("")

  const openVideoPlayer = (index: number) => {
    setCurrentVideoIndex(index)
    setIsVideoPlayerOpen(true)
  }

  const handleNextVideo = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1)
    } else {
      // Loop back to the first video
      setCurrentVideoIndex(0)
    }
  }

  // Function to open the short video modal
  const openShortModal = (youtubeId: string, title: string) => {
    setCurrentShortId(youtubeId)
    setCurrentShortTitle(title)
    setIsShortModalOpen(true)
  }

  return (
    <main className="min-h-screen">
      {/* YouTube Video Player Modal */}
      <MediaPlayer
        isOpen={isVideoPlayerOpen}
        onClose={() => setIsVideoPlayerOpen(false)}
        mediaSource={videos[currentVideoIndex]?.youtubeId || ""}
        isYouTube={true}
        title={videos[currentVideoIndex]?.title || ""}
        description={videos[currentVideoIndex]?.description || ""}
        onNext={handleNextVideo}
        autoplay={true}
      />

      {/* YouTube Shorts Modal */}
      <ShortVideoModal
        isOpen={isShortModalOpen}
        onClose={() => setIsShortModalOpen(false)}
        youtubeId={currentShortId}
        title={currentShortTitle}
      />

      {/* Navigation Bar */}
      <NavBar />

      {/* Header Section with Video Background */}
      <header className="relative text-white">
        {/* Video Background with Red Overlay - Contained within header */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#e22226] bg-opacity-80 z-10"></div>
          <video className="absolute inset-0 w-full h-full object-cover scale-125" autoPlay muted loop playsInline>
            <source src="/videos/1.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Content on top of video */}
        <div className="relative z-20">
          {/* Hero Section */}
          <div className="container mx-auto px-4 py-20 flex justify-center items-center">
            <div className="text-center max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Let's break the stigma about HIV together</h1>
              <p className="text-lg mb-4">
                Here at Beyond Boundaries, we provide a platform to understand HIV and its support programs better.
              </p>
              <p className="text-lg mb-8">Watch our latest video about HIV by clicking the button below</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/videos"
                  className="border border-white rounded-full px-6 py-3 font-medium hover:bg-white hover:text-[#e22226] transition-colors text-center"
                >
                  Browse Videos
                </Link>
                <button
                  onClick={() => openVideoPlayer(0)}
                  className="bg-white text-[#e22226] px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
                >
                  Watch Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>


      {/* Curved White Section */}
      <div className="bg-white relative">
        {/* Curved red section */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-[#e22226] rounded-b-[50%_100%]"></div>

        {/* Beyond Boundaries Section - Added more space on top */}
        <div className="container mx-auto px-4 pt-36 pb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 mt-48">Beyond Boundaries.</h2>
          <p className="max-w-3xl mx-auto text-center mb-20">
            An academic exploration that utilized a combination of surveys, interviews, media analysis, and qualitative
            research methods to provide valuable insights into the current situation of HIV, the effectiveness of
            current HIV support initiatives, identify areas for improvement, and potentially contribute to a better
            understanding of the peoples' perspectives on HIV and its support programs.
          </p>

          {/* YouTube Shorts Section */}
          <div className="mb-20 mt-60">
            <h2 className="text-3xl font-bold text-center mb-4">Quick Insights</h2>
            <p className="max-w-3xl mx-auto text-center mb-10">
              Watch these short videos to get quick insights about HIV awareness and living with HIV.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {youtubeShortsData.map((series, seriesIndex) => (
                <div key={seriesIndex}>
                  <h3 className="text-xl font-bold mb-6 text-center">{series.title}</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {series.shorts.map((short, shortIndex) => (
                      <div key={shortIndex} className="flex flex-col items-center">
                        <YouTubeShort
                          youtubeId={short.id}
                          partNumber={short.part}
                          title={short.title}
                          onClick={() => openShortModal(short.id, short.title)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Get Tested Section */}
          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-6 text-[#e22226]">Get Tested</h2>
            <p className="text-center max-w-3xl mx-auto mb-8">
              Getting tested for HIV is quick, easy, and confidential. Knowing your status is the first step in taking
              control of your health. Below are some locations where you can get tested in your area.
            </p>

            {/* Google Maps Placeholder */}
            <div className="w-full h-[400px] bg-gray-200 rounded-lg mb-8 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-gray-300">
                <div className="text-center">
                  <MapPin size={48} className="mx-auto mb-4 text-[#e22226]" />
                  <p className="text-gray-600">Google Maps would be integrated here</p>
                  <p className="text-sm text-gray-500">Showing nearby HIV testing centers</p>
                </div>
              </div>
            </div>

            {/* Testing Centers List */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {testingCenters.map((center, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg mb-2">{center.name}</h3>
                  <p className="text-gray-600 mb-1">
                    <span className="font-medium">Address:</span> {center.address}
                  </p>
                  <p className="text-gray-600 mb-1">
                    <span className="font-medium">Phone:</span> {center.phone}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Hours:</span> {center.hours}
                  </p>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center" id="get-tested">
              <p className="mb-4">Want to learn more about the testing process and what to expect?</p>
              <Link
                href="/care-services"
                className="bg-[#e22226] text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors inline-block"
              >
                Visit Our Care Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}