import {
  TrendingUp,
  Wallet,
  Trophy,
  Activity,
} from 'lucide-react'

const activePositions = [
  {
    coin: 'BTC',
    side: 'UP',
    amount: '250 USDC',
    pnl: '+82 USDC',
    color: 'text-green-500',
  },
  {
    coin: 'ETH',
    side: 'DOWN',
    amount: '120 USDC',
    pnl: '-14 USDC',
    color: 'text-red-500',
  },
]

const history = [
  {
    coin: 'SOL',
    side: 'UP',
    result: 'WIN',
    payout: '+120 USDC',
  },
  {
    coin: 'BTC',
    side: 'DOWN',
    result: 'LOSE',
    payout: '-50 USDC',
  },
  {
    coin: 'ETH',
    side: 'UP',
    result: 'WIN',
    payout: '+88 USDC',
  },
]

export default function PortfolioPage() {

  return (
    <div className="min-h-screen bg-black text-white p-8">

      {/* TITLE */}
      <div className="mb-12">

        <h1 className="text-6xl font-bold">
          Portfolio Dashboard
        </h1>

        <p className="text-zinc-400 text-xl mt-4">
          Manage your prediction trades and track performance.
        </p>

      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {/* BALANCE */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">

          <div className="flex items-center justify-between">

            <h2 className="text-zinc-400 text-lg">
              Wallet Balance
            </h2>

            <Wallet size={24} />

          </div>

          <h3 className="text-4xl font-bold mt-6">
            12,450 USDC
          </h3>

        </div>

        {/* PNL */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">

          <div className="flex items-center justify-between">

            <h2 className="text-zinc-400 text-lg">
              Total PNL
            </h2>

            <TrendingUp size={24} />

          </div>

          <h3 className="text-4xl font-bold mt-6 text-green-500">
            +2,420 USDC
          </h3>

        </div>

        {/* WIN RATE */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">

          <div className="flex items-center justify-between">

            <h2 className="text-zinc-400 text-lg">
              Win Rate
            </h2>

            <Trophy size={24} />

          </div>

          <h3 className="text-4xl font-bold mt-6">
            78%
          </h3>

        </div>

        {/* TRADES */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">

          <div className="flex items-center justify-between">

            <h2 className="text-zinc-400 text-lg">
              Total Trades
            </h2>

            <Activity size={24} />

          </div>

          <h3 className="text-4xl font-bold mt-6">
            124
          </h3>

        </div>

      </div>

      {/* ACTIVE POSITIONS */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 mt-10">

        <h2 className="text-4xl font-bold mb-8">
          Active Positions
        </h2>

        <div className="space-y-5">

          {activePositions.map((position, index) => (

            <div
              key={index}
              className="bg-zinc-900 rounded-2xl p-6 flex justify-between items-center"
            >

              <div>

                <h3 className="text-2xl font-bold">
                  {position.coin} {position.side}
                </h3>

                <p className="text-zinc-400 mt-2">
                  Position Size: {position.amount}
                </p>

              </div>

              <div className={`text-2xl font-bold ${position.color}`}>
                {position.pnl}
              </div>

            </div>

          ))}

        </div>

      </div>

      {/* HISTORY */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 mt-10">

        <h2 className="text-4xl font-bold mb-8">
          Prediction History
        </h2>

        <div className="space-y-5">

          {history.map((trade, index) => (

            <div
              key={index}
              className="bg-zinc-900 rounded-2xl p-6 flex justify-between items-center"
            >

              <div>

                <h3 className="text-2xl font-bold">
                  {trade.coin} {trade.side}
                </h3>

                <p className="text-zinc-400 mt-2">
                  Result: {trade.result}
                </p>

              </div>

              <div
                className={`text-2xl font-bold ${
                  trade.result === 'WIN'
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {trade.payout}
              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}