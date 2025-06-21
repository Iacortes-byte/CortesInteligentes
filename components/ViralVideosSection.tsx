"use client"

import { useRef } from "react"
import Image from "next/image"

const viralVideos = [
  {
    views: "🎥 2,7M de views",
    timeToViral: "⏱️ Viralizou em 2 dias"
    image: "/videos/video1-thumb.jpg",
  },
  {
    views: "🎥 8M de views",
    timeToViral: "⏱️ Em 5 dias",
    image: "/videos/video2-thumb.jpg",
  },
  {
    views: "🎥 250K de views (sem aparecer)",
    timeToViral: "⏱️ Em 2 dias",
    earnings: "💸 R$490 com link na bio",
    image: "/videos/video3-thumb.jpg",
  },
  {
    views: "🎥 180K de views",
    timeToViral: "⏱️ Viralizou em 1 dia",
    earnings: "💸 R$390 em comissões",
    image: "/videos/video4-thumb.jpg",
  },
]

export default function ViralVideosSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToDramatic = () => {
    document.getElementById("dramatic")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
      <section id="viral-videos" className="py-16 bg-slate-800 overflow-visible relative">
      <div className="relative z-0 container mx-auto px-2 overflow-visible">
        <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
      💡 Veja como vídeos simples viralizaram e geraram renda com IA
        </h2>

        <div
          ref={scrollRef}
          className="relative z-50 flex gap-8 overflow-x-auto overflow-visible pb-6 px-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {viralVideos.map((video, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-80 bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl overflow-hidden border border-purple-500/30 hover:border-pink-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/25 hover:z-20 mx-2"
              style={{
                minWidth: "320px",
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <div className="relative h-48">
                <Image src={video.image || "/placeholder.svg"} alt={video.views} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              <div className="p-6 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-pink-400 transition-colors duration-300 group-hover:text-pink-300">
                  {video.views}
                </h3>
                <h4 className="text-lg font-semibold mb-2 text-purple-300 transition-colors duration-300 group-hover:text-purple-200">
                  {video.timeToViral}
                </h4>
                <p className="text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
                  {video.earnings}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={scrollToDramatic}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:-translate-y-3"
          >
            Ver Mais Detalhes ⬇️
          </button>
        </div>
      </div>
    </section>
  )
}
