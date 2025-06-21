import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { amount, name, email } = await request.json()

    // Aqui você integraria com um gateway de pagamento real como Pagar.me, Stripe, etc.
    // Por enquanto, vamos simular a geração de um código PIX

    const pixCode = `00020126580014BR.GOV.BCB.PIX013636c4b4e4-4c4e-4c4e-4c4e-4c4e4c4e4c4e5204000053039865802BR5925${name.substring(0, 25)}6009SAO PAULO62070503***6304${Math.random().toString(36).substring(2, 8).toUpperCase()}`

    // Salvar a transação no banco de dados (opcional)
    // await saveTransaction({ amount, name, email, pixCode, status: 'pending' })

    return NextResponse.json({
      success: true,
      pixCode,
      qrCode: `data:image/svg+xml;base64,${Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="white"/><text x="100" y="100" text-anchor="middle" fill="black">QR Code PIX</text></svg>`).toString("base64")}`,
      transactionId: Math.random().toString(36).substring(2, 15),
    })
  } catch (error) {
    console.error("Erro ao gerar PIX:", error)
    return NextResponse.json({ success: false, error: "Erro interno do servidor" }, { status: 500 })
  }
}
