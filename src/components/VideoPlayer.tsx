"use client"

import { useEffect, useRef, useState } from "react"
import { X, Play, Pause, SkipForward } from "lucide-react"

interface VideoPlayerProps {
  isOpen: boolean
  onClose: () => void
  videoSrc: string
  title?: string
  description?: string
  onNext?: () => void
}

export default function VideoPlayer({
  isOpen,
  onClose,
  videoSrc,
  title = "Video Title",
  description = "Video description goes here.",
  onNext,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovering, setIsHovering] = useState(false)

  // Handle escape key to close the modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden" // Prevent scrolling when modal is open
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "" // Restore scrolling when modal is closed
    }
  }, [isOpen, onClose])

  // Play video when modal opens
  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error playing video:", error)
        setIsPlaying(false)
      })
    }
  }, [isOpen, videoSrc])

  // Update playing state when video plays or pauses
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)

    return () => {
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("pause", handlePause)
    }
  }, [])

  const togglePlayPause = () => {
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
  }

  const handleNext = () => {
    if (onNext) {
      onNext()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Video container */}
      <div
        className="relative z-10 w-full max-w-5xl rounded-lg overflow-hidden shadow-2xl transform transition-all duration-300 scale-100"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-colors"
          aria-label="Close video"
        >
          <X size={24} />
        </button>

        {/* Custom controls - only show when playing and hovering */}
        {isPlaying && (
          <div
            className={`absolute top-4 left-4 z-20 flex items-center gap-2 transition-opacity duration-300 ${isHovering ? "opacity-100" : "opacity-0"}`}
          >
            <button
              onClick={togglePlayPause}
              className="bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>

            {onNext && (
              <button
                onClick={handleNext}
                className="bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-colors"
                aria-label="Next video"
              >
                <SkipForward size={20} />
              </button>
            )}
          </div>
        )}

        {/* Paused overlay with title and description */}
        {!isPlaying && (
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/70 via-black/40 to-black/70 flex flex-col justify-between p-8">
            <div className="max-w-2xl">
              <h2 className="text-white text-3xl font-bold mb-4">{title}</h2>
              <p className="text-white/80 text-lg">{description}</p>
            </div>

            <button
              onClick={togglePlayPause}
              className="bg-white text-[#e22226] px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors self-start"
            >
              Resume Video
            </button>
          </div>
        )}

        {/* Video player */}
        <video ref={videoRef} className="w-full aspect-video bg-black" src={videoSrc} onClick={togglePlayPause} />
      </div>
    </div>
  )
}