"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, Copy, CreditCard, Smartphone } from "lucide-react"
import Link from "next/link"

type PaymentMethod = "pix" | "credit" | "debit"

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("pix")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [pixCode, setPixCode] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const generatePixCode = async () => {
    setIsProcessing(true)
    try {
      const response = await fetch("/api/payment/pix", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: 97.0,
          name: formData.name,
          email: formData.email,
        }),
      })
      const data = await response.json()
      setPixCode(data.pixCode)
    } catch (error) {
      console.error("Erro ao gerar PIX:", error)
    }
    setIsProcessing(false)
  }

  const processCardPayment = async () => {
    setIsProcessing(true)
    try {
      const response = await fetch("/api/payment/card", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          amount: 97.0,
          paymentMethod,
        }),
      })
      const data = await response.json()
      if (data.success) {
        window.location.href = "/obrigado"
      }
    } catch (error) {
      console.error("Erro no pagamento:", error)
    }
    setIsProcessing(false)
  }

  const copyPixCode = () => {
    navigator.clipboard.writeText(pixCode)
    alert("Código PIX copiado!")
  }

  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar para a página inicial
          </Link>
        </div>

        <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-8 border border-purple-500/30">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Finalizar Compra
            </h1>
            <div className="bg-green-600 text-white px-6 py-3 rounded-full inline-block">
              <span className="text-2xl font-bold">R$ 97,00</span>
              <span className="text-sm ml-2">à vista</span>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-center">Escolha a forma de pagamento:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                onClick={() => setPaymentMethod("pix")}
                className={`p-4 rounded-lg border-2 transition-all ${
                  paymentMethod === "pix"
                    ? "border-green-500 bg-green-500/20"
                    : "border-gray-600 hover:border-green-400"
                }`}
              >
                <Smartphone className="w-8 h-8 mx-auto mb-2 text-green-400" />
                <div className="text-center">
                  <div className="font-semibold">PIX</div>
                  <div className="text-sm text-gray-400">Aprovação imediata</div>
                </div>
              </button>

              <button
                onClick={() => setPaymentMethod("credit")}
                className={`p-4 rounded-lg border-2 transition-all ${
                  paymentMethod === "credit"
                    ? "border-blue-500 bg-blue-500/20"
                    : "border-gray-600 hover:border-blue-400"
                }`}
              >
                <CreditCard className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                <div className="text-center">
                  <div className="font-semibold">Crédito</div>
                  <div className="text-sm text-gray-400">Até 12x sem juros</div>
                </div>
              </button>

              <button
                onClick={() => setPaymentMethod("debit")}
                className={`p-4 rounded-lg border-2 transition-all ${
                  paymentMethod === "debit"
                    ? "border-purple-500 bg-purple-500/20"
                    : "border-gray-600 hover:border-purple-400"
                }`}
              >
                <CreditCard className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                <div className="text-center">
                  <div className="font-semibold">Débito</div>
                  <div className="text-sm text-gray-400">Aprovação imediata</div>
                </div>
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 bg-slate-800 border border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Seu melhor e-mail"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 bg-slate-800 border border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none"
                required
              />
            </div>

            {paymentMethod === "pix" && (
              <div className="text-center">
                {!pixCode ? (
                  <button
                    onClick={generatePixCode}
                    disabled={isProcessing || !formData.name || !formData.email}
                    className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white font-bold py-4 px-8 rounded-lg transition-colors"
                  >
                    {isProcessing ? "Gerando PIX..." : "Gerar Código PIX"}
                  </button>
                ) : (
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="QR Code PIX"
                        width={200}
                        height={200}
                        className="mx-auto"
                      />
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <p className="text-sm text-gray-400 mb-2">Código PIX:</p>
                      <div className="flex items-center gap-2">
                        <code className="flex-1 text-xs bg-slate-700 p-2 rounded break-all">{pixCode}</code>
                        <button onClick={copyPixCode} className="bg-purple-600 hover:bg-purple-700 p-2 rounded">
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">
                      Após o pagamento, você receberá o acesso por e-mail em até 5 minutos.
                    </p>
                  </div>
                )}
              </div>
            )}

            {(paymentMethod === "credit" || paymentMethod === "debit") && (
              <div className="space-y-4">
                <input
                  type="text"
                  name="cardName"
                  placeholder="Nome no cartão"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-slate-800 border border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none"
                />
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Número do cartão"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-slate-800 border border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/AA"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-slate-800 border border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-slate-800 border border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none"
                  />
                </div>
                <button
                  onClick={processCardPayment}
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-600 text-white font-bold py-4 px-8 rounded-lg transition-all"
                >
                  {isProcessing ? "Processando..." : `Pagar R$ 97,00`}
                </button>
              </div>
            )}
          </div>

          <div className="mt-8 text-center text-sm text-gray-400">
            <p>🔒 Pagamento 100% seguro e criptografado</p>
            <p>✅ Acesso imediato após confirmação do pagamento</p>
          </div>
        </div>
      </div>
    </div>
  )
}
