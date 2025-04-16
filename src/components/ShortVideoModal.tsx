"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { X } from "lucide-react"

interface ShortVideoModalProps {
  isOpen: boolean
  onClose: () => void
  youtubeId: string
  title?: string
}

export default function ShortVideoModal({ isOpen, onClose, youtubeId, title = "YouTube Short" }: ShortVideoModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

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

  // Handle click outside to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="relative max-w-sm w-full mx-4 h-[80vh] rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-colors"
          aria-label="Close video"
        >
          <X size={24} />
        </button>

        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?rel=0&showinfo=0&autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  )
}
