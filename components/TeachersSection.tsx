import Image from "next/image"

const teachers = [
  {
    name: "💬 50 Prompts Validados com IA",
    bio: "Use imediatamente em diversos nichos como negócios, saúde, moda e serviços. Economize horas de teste e gere resultados com comandos que já funcionam.",
    avatar: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "🎥 Guia Prático: Crie Vídeos com VEO 3",
    bio: "Aprenda como transformar textos em vídeos profissionais usando IA. Ideal para apresentar produtos físicos ou digitais — sem precisar aparecer ou editar.",
    avatar: "/placeholder.svg?height=150&width=150",
  },
  {
    name: "🎁 15 Meses de VEO 3 + Gemini Pro Grátis",
    bio: "Aprenda a como conseguir acesso gratuito às ferramentas de IA mais avançadas do mercado. Economize mais de R$1.200 e use tecnologia de ponta para criar, vender e automatizar.",
    avatar: "/placeholder.svg?height=150&width=150",
  },
]


const testimonials = [
  {
    name: "Maria Santos",
    text: "Em 30 dias monetizei 2 páginas com os primeiros 1000 créditos do Veo3. Genial!!",
    result: "2 páginas monetizadas",
  },
  {
    name: "Pedro Oliveira",
    text: "Comecei ontem, aprendi rápido e já postei 4 vídeos. Vim agradecer, já bati meus primeiros 100k!",
    result: "100.000 views no 1º dia",
  },
  {
    name: "Julia Lima",
    text: "Nunca postei nada no TikTok, comprei pra ver se dava certo e agora tenho uma página viralizada kkkk. Obrigado, IA!!",
    result: "Página viralizada",
  },
]

export default function TeachersSection() {
  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          🎁 BÔNUS EXCLUSIVOS INCLUSOS
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-500/30 hover:border-pink-500/50 transition-all duration-300"
            >
              <div className="text-center mb-4">
                <Image
                  src={teacher.avatar || "/placeholder.svg"}
                  alt={teacher.name}
                  width={150}
                  height={150}
                  className="mx-auto rounded-full border-4 border-purple-500"
                />
              </div>

              <h3 className="text-xl font-bold text-center mb-4 text-pink-400">{teacher.name}</h3>

              <p className="text-gray-300 text-center leading-relaxed">{teacher.bio}</p>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-yellow-400">
            ⭐ O Que Nossos Alunos Estão Dizendo
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-500/30"
              >
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">{"⭐".repeat(5)}</div>
                  <p className="text-gray-300 italic">"{testimonial.text}"</p>
                </div>

                <div className="border-t border-gray-600 pt-4">
                  <p className="font-bold text-green-400">{testimonial.name}</p>
                  <p className="text-sm text-yellow-400 font-semibold">Resultado: {testimonial.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
