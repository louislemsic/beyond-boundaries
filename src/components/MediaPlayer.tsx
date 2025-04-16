"use client"

import { useEffect, useRef, useState } from "react"
import { X, Play, Pause, SkipForward } from "lucide-react"

interface MediaPlayerProps {
  isOpen: boolean
  onClose: () => void
  mediaSource: string
  isYouTube?: boolean
  title?: string
  description?: string
  onNext?: () => void
  autoplay?: boolean
}

export default function MediaPlayer({
  isOpen,
  onClose,
  mediaSource,
  isYouTube = false,
  title = "Media Title",
  description = "Media description goes here.",
  onNext,
  autoplay = true,
}: MediaPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(autoplay)
  const [isHovering, setIsHovering] = useState(false)
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

  // Build the YouTube embed URL with parameters
  const getYouTubeEmbedUrl = () => {
    const videoId = extractYouTubeId(mediaSource)
    const baseUrl = `https://www.youtube.com/embed/${videoId}`
    const params = new URLSearchParams({
      autoplay: autoplay ? "1" : "0",
      mute: "0", // Keep sound on
      controls: "0", // Hide default YouTube controls
      enablejsapi: "1",
      rel: "0", // Don't show related videos
      showinfo: "0", // Hide video title and uploader info
    })
    
    return `${baseUrl}?${params.toString()}`
  }

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

  // Play video when modal opens (for local videos)
  useEffect(() => {
    if (isOpen && videoRef.current && !isYouTube) {
      if (autoplay) {
        videoRef.current.play().catch((error) => {
          console.error("Error playing video:", error)
          setIsPlaying(false)
        })
      } else {
        setIsPlaying(false)
      }
    }
  }, [isOpen, mediaSource, autoplay, isYouTube])

  // Update playing state when video plays or pauses (for local videos)
  useEffect(() => {
    if (isYouTube) return; // Skip for YouTube videos
    
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleLoaded = () => setIsLoading(false)

    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)
    video.addEventListener("loadeddata", handleLoaded)

    return () => {
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("pause", handlePause)
      video.removeEventListener("loadeddata", handleLoaded)
    }
  }, [isYouTube])

  const togglePlayPause = () => {
    if (isYouTube) {
      // For YouTube videos, we need to postMessage to the iframe
      const iframe = document.querySelector('iframe') as HTMLIFrameElement;
      if (iframe && iframe.contentWindow) {
        const command = isPlaying ? 'pauseVideo' : 'playVideo';
        iframe.contentWindow.postMessage(`{"event":"command","func":"${command}","args":""}`, '*');
        setIsPlaying(!isPlaying);
      }
    } else {
      // For local videos
      if (!videoRef.current) return;
      
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
    }
  }

  const handleNext = () => {
    if (onNext) {
      onNext()
    }
  }

  // YouTube iframe API message handling
  useEffect(() => {
    if (!isYouTube) return;
    
    // Handler for YouTube iframe API events
    const handleYouTubeMessage = (event: MessageEvent) => {
      if (typeof event.data === 'string') {
        try {
          const data = JSON.parse(event.data);
          if (data.event === 'onStateChange') {
            // YouTube states: -1 (unstarted), 0 (ended), 1 (playing), 2 (paused), 3 (buffering), 5 (video cued)
            setIsPlaying(data.info === 1);
            setIsLoading(data.info === 3);
          } else if (data.event === 'onReady') {
            setIsLoading(false);
          }
        } catch (e) {
          // Not a JSON message we care about
        }
      }
    };
    
    window.addEventListener('message', handleYouTubeMessage);
    
    return () => {
      window.removeEventListener('message', handleYouTubeMessage);
    };
  }, [isYouTube]);

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Media container */}
      <div
        className="relative z-10 w-full max-w-5xl rounded-lg overflow-hidden shadow-2xl transform transition-all duration-300 scale-100"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-colors"
          aria-label="Close media"
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
                aria-label="Next media"
              >
                <SkipForward size={20} />
              </button>
            )}
          </div>
        )}

        {/* Loading indicator */}
        {isLoading && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-60">
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Paused overlay with title and description */}
        {!isPlaying && !isLoading && (
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/70 via-black/40 to-black/70 flex flex-col justify-between p-8">
            <div className="max-w-2xl">
              <h2 className="text-white text-3xl font-bold mb-4">{title}</h2>
              <p className="text-white/80 text-lg">{description}</p>
            </div>

            <button
              onClick={togglePlayPause}
              className="bg-white text-[#e22226] px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors self-start"
            >
              {isYouTube ? "Play Video" : "Resume Video"}
            </button>
          </div>
        )}

        {/* Media content */}
        {isYouTube ? (
          <iframe 
            className="w-full aspect-video bg-black"
            src={getYouTubeEmbedUrl()}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => setIsLoading(false)}
          />
        ) : (
          <video 
            ref={videoRef} 
            className="w-full aspect-video bg-black" 
            src={mediaSource} 
            onClick={togglePlayPause} 
          />
        )}
      </div>
    </div>
  )
}