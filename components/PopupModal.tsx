"use client"

import { useState, useEffect } from "react"
import { X, Zap, Bot, Sparkles } from "lucide-react"

const bonuses = [
  {
    icon: "💬",
    title: "50 Prompts Validados com IA",
    description: "Use em nichos como negócios, saúde, moda e serviços",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    icon: "🎥",
    title: "Guia Prático: Crie Vídeos com VEO 3",
    description: "Transforme textos em vídeos profissionais sem aparecer",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    icon: "🎁",
    title: "15 Meses de VEO 3 + Gemini Pro Grátis",
    description: "Iremos te ensinar a ter acesso gratuito às melhores IAs do mercado",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function PopupModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Abre o popup após 2 segundos
    const timer = setTimeout(() => {
      setIsOpen(true)
      setTimeout(() => setIsVisible(true), 100)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const closeModal = () => {
    setIsVisible(false)
    setTimeout(() => setIsOpen(false), 300)
  }

  const handleCheckout = () => {
    window.open("https://pay.kirvano.com/38f8b6c3-eede-48fe-b71c-3a3ba954b285", "_blank")
    closeModal()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isVisible ? "opacity-90" : "opacity-0"
        }`}
        onClick={closeModal}
      />

      {/* Modal */}
      <div
        className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900 via-purple-900/20 to-blue-900/20 rounded-2xl border border-purple-500/30 shadow-2xl transform transition-all duration-300 ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-red-500/20 hover:bg-red-500/40 rounded-full flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5 text-red-400" />
        </button>

        {/* Header with animated background */}
        <div className="relative p-8 pb-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-blue-500/10 animate-pulse" />

          {/* Floating icons */}
          <div className="absolute top-4 left-4 animate-bounce">
            <Bot className="w-6 h-6 text-blue-400" />
          </div>
          <div className="absolute top-6 right-16 animate-pulse">
            <Sparkles className="w-5 h-5 text-purple-400" />
          </div>
          <div className="absolute bottom-4 left-8 animate-bounce delay-300">
            <Zap className="w-4 h-4 text-orange-400" />
          </div>

          <div className="relative z-10 text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
              <span className="text-orange-400">🔥</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-purple-400 to-blue-400">
                Já Imaginou em transformar seu TikTok em uma fonte de renda em
              </span>{" "}
              <span className="text-blue-400 animate-pulse">apenas 30 dias usando IA?</span>
            </h1>

            <p className="text-lg text-gray-300 mb-6">
              Sem precisar aparecer, programar ou investir uma fortuna.{" "}
              <span className="text-purple-400 font-semibold">A nova era da renda passiva com IA já começou.</span>
            </p>
          </div>
        </div>

        {/* Bonuses Section */}
        <div className="px-8 pb-6">
          <h3 className="text-2xl font-bold text-center mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              🎁 BÔNUS EXCLUSIVOS INCLUSOS
            </span>
          </h3>

          <div className="grid gap-4">
            {bonuses.map((bonus, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-4 border border-green-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center border border-green-400/30">
                      <span className="text-2xl text-green-300">{bonus.icon}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-green-300 mb-1">{bonus.title}</h4>
                    <p className="text-sm text-gray-200">{bonus.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="px-8 pb-8">
          <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-xl p-6 border border-orange-500/30 text-center">
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                <span className="w-2 h-2 bg-red-400 rounded-full animate-ping"></span>
                OFERTA LIMITADA - ÚLTIMAS VAGAS
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
            >
              <span className="flex items-center justify-center gap-2">
                <Zap className="w-5 h-5" />
                QUERO COMEÇAR AGORA COM OS BÔNUS
                <Zap className="w-5 h-5" />
              </span>
            </button>

            <p className="text-xs text-gray-400 mt-3">🔒 Acesso imediato • 💳 Pagamento seguro • ⚡ Suporte 24h</p>
          </div>
        </div>

        {/* Urgency Footer */}
        <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 px-8 py-4 border-t border-red-500/20">
          <div className="text-center">
            <p className="text-sm text-red-300 font-semibold animate-pulse">
              ⏰ Esta oferta expira em breve - Não perca sua chance de transformar sua vida!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
