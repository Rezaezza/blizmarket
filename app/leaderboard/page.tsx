import {
  Trophy,
  Crown,
  Medal,
  TrendingUp,
} from 'lucide-react'

const traders = [
  {
    rank: 1,
    wallet: '0xA91...21',
    profit: '+12,400 USDC',
    volume: '84,000 USDC',
    accuracy: '92%',
    badge: 'Legend Trader',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
  },
  {
    rank: 2,
    wallet: '0xB22...88',
    profit: '+9,200 USDC',
    volume: '66,000 USDC',
    accuracy: '87%',
    badge: 'Elite Trader',
    color: 'text-zinc-300',
    bg: 'bg-zinc-500/10',
  },
  {
    rank: 3,
    wallet: '0xC73...11',
    profit: '+7,800 USDC',
    volume: '58,000 USDC',
    accuracy: '81%',
    badge: 'Pro Trader',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
  },
  {
    rank: 4,
    wallet: '0xD55...90',
    profit: '+5,100 USDC',
    volume: '44,000 USDC',
    accuracy: '76%',
    badge: 'Advanced',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
]

export default function LeaderboardPage() {

  return (
    <div className="min-h-screen bg-black text-white p-8">

      {/* HEADER */}
      <div className="mb-14">

        <h1 className="text-6xl font-bold">
          Global Leaderboard
        </h1>

        <p className="text-zinc-400 text-xl mt-4 max-w-3xl">
          Discover the top prediction traders with the highest profits,
          trading volume, and market accuracy.
        </p>

      </div>

      {/* TOP STATS */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        {/* TOTAL VOLUME */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">

          <div className="flex items-center justify-between">

            <h2 className="text-zinc-400 text-lg">
              Total Trading Volume
            </h2>

            <TrendingUp size={24} />

          </div>

          <h3 className="text-4xl font-bold mt-6">
            2.4M USDC
          </h3>

        </div>

        {/* TOP TRADERS */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">

          <div className="flex items-center justify-between">

            <h2 className="text-zinc-400 text-lg">
              Active Traders
            </h2>

            <Trophy size={24} />

          </div>

          <h3 className="text-4xl font-bold mt-6">
            12,840
          </h3>

        </div>

        {/* BEST ACCURACY */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">

          <div className="flex items-center justify-between">

            <h2 className="text-zinc-400 text-lg">
              Highest Accuracy
            </h2>

            <Crown size={24} />

          </div>

          <h3 className="text-4xl font-bold mt-6 text-yellow-400">
            92%
          </h3>

        </div>

      </div>

      {/* LEADERBOARD TABLE */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">

        <div className="flex items-center gap-4 mb-10">

          <Medal size={36} />

          <h2 className="text-4xl font-bold">
            Top Prediction Traders
          </h2>

        </div>

        <div className="space-y-6">

          {traders.map((trader, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 hover:border-blue-500 transition rounded-3xl p-6 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6"
            >

              {/* LEFT */}
              <div className="flex items-center gap-6">

                {/* RANK */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold ${trader.bg} ${trader.color}`}>

                  #{trader.rank}

                </div>

                {/* INFO */}
                <div>

                  <h3 className="text-3xl font-bold">
                    {trader.wallet}
                  </h3>

                  <p className="text-zinc-400 mt-2">
                    {trader.badge}
                  </p>

                </div>

              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-10">

                <div>

                  <p className="text-zinc-500">
                    Profit
                  </p>

                  <h3 className="text-2xl font-bold text-green-500 mt-2">
                    {trader.profit}
                  </h3>

                </div>

                <div>

                  <p className="text-zinc-500">
                    Volume
                  </p>

                  <h3 className="text-2xl font-bold mt-2">
                    {trader.volume}
                  </h3>

                </div>

                <div>

                  <p className="text-zinc-500">
                    Accuracy
                  </p>

                  <h3 className="text-2xl font-bold mt-2">
                    {trader.accuracy}
                  </h3>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}