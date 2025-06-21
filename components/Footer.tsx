export default function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            IA Renda Extra
          </div>

          <div className="space-y-2 text-gray-400">
            <p>© 2025 IA Renda Extra. Todos os direitos reservados.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
              <a href="#" className="hover:text-purple-400 transition-colors">
                Política de Privacidade
              </a>
              <span className="hidden sm:inline">|</span>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>

          <div className="space-y-2 text-gray-300">
            <p>📧 Suporte: iacortesinteligentes@gmail.com</p>
          </div>

          <div className="pt-6 border-t border-gray-800">
            <p className="text-xs text-gray-500 max-w-2xl mx-auto">
              Este produto é destinado para fins educacionais. Os resultados podem variar de pessoa para pessoa. Não
              garantimos ganhos específicos, pois dependem do seu esforço e dedicação.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
