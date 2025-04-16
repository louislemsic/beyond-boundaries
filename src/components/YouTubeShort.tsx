"use client"

import { Play } from "lucide-react"
import { useState } from "react"

interface YouTubeShortProps {
  youtubeId: string
  title?: string
  partNumber?: number
  onClick?: () => void
}

export default function YouTubeShort({ youtubeId, title = "YouTube Short", partNumber, onClick }: YouTubeShortProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative w-full cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[9/16] bg-black rounded-xl overflow-hidden">
        {/* Thumbnail image instead of iframe */}
        <img
          src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Custom play button overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${isHovered ? "opacity-100" : "opacity-80"}`}
        >
          <div
            className={`w-14 h-14 rounded-full bg-white/80 flex items-center justify-center transition-transform duration-200 ${isHovered ? "scale-110" : "scale-100"}`}
          >
            <Play className="w-7 h-7 text-[#e22226] ml-1" />
          </div>
        </div>
      </div>

      {partNumber && (
        <div className="absolute top-2 right-2 bg-[#e22226] text-white text-xs font-bold px-2 py-1 rounded-full">
          Part {partNumber}
        </div>
      )}
    </div>
  )
}
