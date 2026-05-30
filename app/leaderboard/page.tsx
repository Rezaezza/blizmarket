import {
  Trophy,
  Crown,
  Medal,
  TrendingUp,
} from 'lucide-react'


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

 <h3 className="text-4xl font-bold mt-6 text-zinc-500">
  Coming Soon
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

  <h3 className="text-4xl font-bold mt-6 text-zinc-500">
  Coming Soon
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

 <h3 className="text-4xl font-bold mt-6 text-zinc-500">
  Coming Soon
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

<div className="text-center py-20">

  <h2 className="text-5xl font-bold">
    🚀 Coming Soon
  </h2>

  <p className="text-zinc-400 text-xl mt-8 max-w-3xl mx-auto">

    The BlizMarket leaderboard is currently under development.

    Future rankings will be based on trading volume,
    profit, win rate, and prediction accuracy.

  </p>

</div>

      </div>

    </div>
  )
}