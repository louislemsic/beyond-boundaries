"use client"

import { useState } from "react"

interface YouTubeEmbedProps {
  youtubeId: string
  title?: string
  autoplay?: boolean
  muted?: boolean
  className?: string
}

export default function YouTubeEmbed({
  youtubeId,
  title = "YouTube video player",
  autoplay = true, // Default to true for autoplay
  muted = true, // Must be true for autoplay to work in most browsers
  className = "",
}: YouTubeEmbedProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Extract YouTube ID from URL if a full URL is provided
  const extractYouTubeId = (idOrUrl: string): string => {
    // If it's already just an ID (no slashes or youtube.com), return it
    if (!idOrUrl.includes('/') && !idOrUrl.includes('youtube')) {
      return idOrUrl
    }

    // Try to extract ID from various YouTube URL formats
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i
    const match = idOrUrl.match(regex)
    
    return match?.[1] || idOrUrl
  }

  const videoId = extractYouTubeId(youtubeId)
  
  // Build the embed URL with parameters
  const getEmbedUrl = () => {
    const baseUrl = `https://www.youtube.com/embed/${videoId}`
    const params = new URLSearchParams({
      autoplay: autoplay ? "1" : "0",
      mute: muted ? "1" : "0",
    })
    
    return `${baseUrl}?${params.toString()}`
  }

  return (
    <div className={`relative w-full pt-[56.25%] ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-pulse text-gray-500">Loading video...</div>
        </div>
      )}
      <iframe
        src={getEmbedUrl()}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  )
}