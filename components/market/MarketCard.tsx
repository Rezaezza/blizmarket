'use client'

import {
  TrendingUp,
  TrendingDown,
  Users,
} from 'lucide-react'

interface Props {
  title: string
  yesPrice: number
  noPrice: number
  volume: string
  traders: number
}

export default function MarketCard({
  title,
  yesPrice,
  noPrice,
  volume,
  traders,
}: Props) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-blue-500 transition duration-300">

      {/* TITLE */}
      <h2 className="text-2xl font-bold text-white">
        {title}
      </h2>

      {/* STATS */}
      <div className="flex items-center gap-6 mt-5 text-zinc-400">

        <div className="flex items-center gap-2">
          <Users size={18} />
          <span>{traders} Traders</span>
        </div>

        <div>
          Volume: {volume}
        </div>

      </div>

      {/* BUTTONS */}
      <div className="grid grid-cols-2 gap-4 mt-8">

        <button className="bg-green-600 hover:bg-green-500 transition rounded-2xl py-4">

          <div className="flex items-center justify-center gap-2">
            <TrendingUp size={20} />
            <span className="font-bold text-xl">
              YES {yesPrice}%
            </span>
          </div>

        </button>

        <button className="bg-red-600 hover:bg-red-500 transition rounded-2xl py-4">

          <div className="flex items-center justify-center gap-2">
            <TrendingDown size={20} />
            <span className="font-bold text-xl">
              NO {noPrice}%
            </span>
          </div>

        </button>

      </div>

    </div>
  )
}