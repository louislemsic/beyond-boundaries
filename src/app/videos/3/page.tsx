"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { formatDistanceToNow } from "date-fns"

export default function VideoPage() {
  const params = { id: "3" };

  const router = useRouter()
  const [videoId, setVideoId] = useState<number>(1)
  const [videoTitle, setVideoTitle] = useState<string>("")
  const [videoDescription, setVideoDescription] = useState<string>("")
  const [youtubeId, setYoutubeId] = useState<string>("")
  const [comment, setComment] = useState<string>("")
  const [comments, setComments] = useState<Array<{
    id: number,
    user: string,
    content: string,
    date: Date,
    likes: number,
    avatar: string
  }>>([
    {
      id: 1,
      user: "Alex",
      content: "This video was really informative, thanks for sharing!",
      date: new Date(2025, 3, 15),
      likes: 12,
      avatar: ""
    },
    {
      id: 2,
      user: "Taylor",
      content: "I learned so much from this! Can you make more videos about prevention methods?",
      date: new Date(2025, 3, 16),
      likes: 8,
      avatar: ""
    }
  ])

  // Video data
  const videos = [
    {
      id: 1,
      title: "Understanding HIV: The Basics",
      description:
        "Learn about what HIV is, how it affects the body, and the current state of HIV treatment and prevention.",
      youtubeId: "zK5zaNA6zfg",
    },
    {
      id: 2,
      title: "HIV Fact Talk with Gen-Zs Part 1",
      description:
        "Young adults discuss common misconceptions about HIV and fact-check popular beliefs about the virus.",
      youtubeId: "K3DY34uFq2Q",
    },
    {
      id: 3,
      title: "HIV Fact Talk with Gen-Zs Part 2",
      description:
        "Young adults discuss common misconceptions about HIV and fact-check popular beliefs about the virus.",
      youtubeId: "3Xh2IWXmFzE",
    }
  ];

  useEffect(() => {
    if (params.id) {
      const id = Number.parseInt(params.id as string)
      const video = videos.find((v) => v.id === id)

      if (video) {
        setVideoId(id)
        setVideoTitle(video.title)
        setVideoDescription(video.description)
        setYoutubeId(video.youtubeId)
      } else {
        // Redirect to videos page if video not found
        router.push("/videos")
      }
    }
  }, [params.id, router])

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!comment.trim()) return

    const newComment = {
      id: comments.length + 1,
      user: "You",
      avatar: "",
      content: comment,
      date: new Date(),
      likes: 0
    }

    setComments([newComment, ...comments])
    setComment("")
  }

  const handleLike = (commentId: number) => {
    setComments(comments.map(c => 
      c.id === commentId ? { ...c, likes: c.likes + 1 } : c
    ))
  }

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#e22226] text-white">
        <NavBar />
      </header>

      {/* Video Player */}
      <div className="bg-black">
        <div className="container mx-auto px-4 py-8">
          <div className="aspect-video w-full">
            <iframe 
              src={`https://www.youtube.com/embed/${youtubeId}`}
              className="w-full h-full"
              title={videoTitle}
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Video Info */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">{videoTitle}</h1>
          <p className="text-gray-700 mb-8">{videoDescription}</p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button
              onClick={() => router.push("/videos")}
              className="bg-[#e22226] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors"
            >
              Back to Videos
            </Button>

            {/* Navigation between videos */}
            <div className="flex gap-2">
              {videoId > 1 && (
                <Button
                  onClick={() => router.push(`/videos/${videoId - 1}`)}
                  variant="outline"
                  className="border border-[#e22226] text-[#e22226] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#e22226] hover:text-white transition-colors"
                >
                  Previous Video
                </Button>
              )}

              {videoId < videos.length && (
                <Button
                  onClick={() => router.push(`/videos/${videoId + 1}`)}
                  variant="outline"
                  className="border border-[#e22226] text-[#e22226] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#e22226] hover:text-white transition-colors"
                >
                  Next Video
                </Button>
              )}
            </div>
          </div>
          
          {/* Comments Section */}
          <div className="mt-12 mb-16">
            <h2 className="text-2xl font-semibold mb-6">Comments</h2>
            
            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="mb-8">
              <Textarea 
                placeholder="Add a comment..." 
                className="w-full mb-3 resize-none"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={3}
              />
              <Button 
                type="submit"
                className="bg-[#e22226] hover:bg-[#c91c20] text-white"
              >
                Post Comment
              </Button>
            </form>
            
            {/* Comment List */}
            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="p-4 border rounded-lg">
                  <div className="flex items-center mb-2">
                    <Avatar className="h-8 w-8 bg-gray-200 mr-3">
                      <AvatarImage src={comment.avatar} />
                      <AvatarFallback>{comment.user.split(" ").slice(0, 3).map(word => word[0]).join("").toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{comment.user}</p>
                      <p className="text-xs text-gray-500">
                        {formatDistanceToNow(comment.date, { addSuffix: true })}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-2">{comment.content}</p>
                  <div className="mt-3 flex items-center">
                    <button 
                      onClick={() => handleLike(comment.id)} 
                      className="flex items-center text-sm text-gray-600 hover:text-[#e22226]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                      </svg>
                      {comment.likes}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}