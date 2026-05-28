import TradingTerminal from '@/components/market/TradingTerminal'

export default function MarketsPage() {

  return (
    <div className="min-h-screen bg-black text-white p-8">

      {/* TITLE */}
      <div className="mb-10">

        <h1 className="text-6xl font-bold">
          Global Prediction Market
        </h1>

        <p className="text-zinc-400 text-xl mt-4">
          Trade crypto predictions with real-time candlestick charts.
        </p>

      </div>

      {/* TERMINAL */}
      <TradingTerminal />

    </div>
  )
}