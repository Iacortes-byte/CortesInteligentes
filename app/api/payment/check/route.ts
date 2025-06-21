import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const transactionId = searchParams.get("id")

    if (!transactionId) {
      return NextResponse.json({ success: false, error: "ID da transação é obrigatório" }, { status: 400 })
    }

    // Aqui você consultaria o status da transação no banco de dados
    // const transaction = await getTransactionById(transactionId)

    // Simulação para demo
    const status = Math.random() > 0.5 ? "approved" : "pending"

    return NextResponse.json({
      success: true,
      transactionId,
      status,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Erro ao verificar pagamento:", error)
    return NextResponse.json({ success: false, error: "Erro interno do servidor" }, { status: 500 })
  }
}
