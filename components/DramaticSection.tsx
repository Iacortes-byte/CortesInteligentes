"use client"

import Link from "next/link"

export default function DramaticSection() {
  return (
    <section id="dramatic" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 galactic-bg opacity-80"></div>
      <div className="absolute inset-0 bg-purple-900/50"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
          Você vai continuar assistindo
          <br />
          os outros lucrarem com IA?
        </h2>

        <div className="max-w-4xl mx-auto mb-12 space-y-6 text-lg md:text-xl text-gray-200">
          <p className="leading-relaxed">
            Enquanto você rola o TikTok & Instagram, tem gente ganhando{" "}
            <span className="text-green-400 font-bold">R$300 por semana</span> só com o celular e o conhecimento
            certo.
          </p>

          <p className="leading-relaxed">
            <span className="text-pink-400 font-semibold">Sem precisar aparecer</span>, sem depender de chefe ou
            diploma.
          </p>

          <p className="text-2xl md:text-3xl font-bold text-yellow-400 animate-pulse">
            O tempo de apenas consumir acabou — agora é hora de criar, vender, transformar.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="https://pay.kirvano.com/38f8b6c3-eede-48fe-b71c-3a3ba954b285"
            className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-6 px-12 rounded-full text-xl md:text-2xl transition-all duration-300 transform hover:scale-105 neon-glow pulse-neon"
          >
            💰 EU QUERO VIRAR O JOGO AGORA
          </Link>

          <p className="text-sm text-gray-400">⚡ Acesso imediato após o pagamento</p>
        </div>
      </div>
    </section>
  )
}
