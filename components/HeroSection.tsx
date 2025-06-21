"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToBonuses = () => {
    document.getElementById("bonuses")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center galactic-bg stars-bg">
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 w-full">
        <div
          className={`text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-8">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="IA + Celular + Galáxia"
              width={200}
              height={200}
              className="mx-auto mb-6 rounded-full neon-glow"
            />
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block text-pink-400 mb-2">Transforme seu tempo livre</span>
            <span className="block text-4xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 pulse-neon">
              em renda extra com IA
            </span>
            <span className="block text-2xl md:text-4xl lg:text-5xl text-blue-300 mt-2">Do zero aos R$10.000</span>
          </h1>

          <div className="text-lg md:text-xl lg:text-2xl mb-8 space-y-2 text-gray-200">
            <p className="font-semibold">✨ Sem aparecer</p>
            <p className="font-semibold">✨ Sem precisar saber programar</p>
            <p className="font-semibold">✨ Só com seu celular e o guia certo</p>
          </div>

          <button
            onClick={scrollToBonuses}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg md:text-xl transition-all duration-300 transform hover:scale-105 neon-glow pulse-neon"
          >
            🚀 Quero Aprender Agora
          </button>
        </div>
      </div>
    </section>
  )
}
