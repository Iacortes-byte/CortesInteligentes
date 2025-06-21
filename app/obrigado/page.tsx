import Link from "next/link"
import { CheckCircle, Download, Mail } from "lucide-react"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center py-8">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl p-8 border border-green-500/30">
          <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />

          <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
            Pagamento Confirmado!
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Parabéns! Você acabou de dar o primeiro passo para transformar sua vida financeira com IA.
          </p>

          <div className="bg-slate-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">📚 Seu Guia Completo Está Pronto!</h2>

            <div className="space-y-4">
              <div className="flex items-center justify-center gap-4">
                <Mail className="w-6 h-6 text-blue-400" />
                <span>Enviamos o link de download para seu e-mail</span>
              </div>

              <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 flex items-center gap-2 mx-auto">
                <Download className="w-5 h-5" />
                Baixar Agora (PDF)
              </button>
            </div>
          </div>

          <div className="bg-purple-900/30 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">🎁 Seus Bônus Exclusivos:</h3>
            <ul className="text-left space-y-2 text-gray-300">
              <li>✅ Formação Completa em NO-CODE</li>
              <li>✅ Automações e Integrações com IA</li>
              <li>✅ Automações Inteligentes para Negócios</li>
              <li>✅ Agentes de IA No-Code Avançados</li>
              <li>✅ Agente de IA com Tecnologia OpenAI</li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-gray-400">
              📱 Siga-nos no Instagram para dicas diárias: <span className="text-purple-400">@ia.rendaextra</span>
            </p>

            <p className="text-gray-400">
              💬 Dúvidas? Entre em contato: <span className="text-purple-400">contato@iarendaextra.com</span>
            </p>

            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-all"
            >
              Voltar ao Início
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
