'use client'

import { useState } from 'react'

import {
  AdvancedRealTimeChart,
} from 'react-ts-tradingview-widgets'

import {
  TrendingUp,
  TrendingDown,
  Clock3,
  DollarSign,
} from 'lucide-react'

export default function TradingTerminal() {

  const [symbol, setSymbol] =
    useState('BINANCE:BTCUSDT')

  const [amount, setAmount] =
    useState('100')

  const payout =
  (Number(amount) * 1.8).toFixed(2)

  return (
    <div className="grid xl:grid-cols-4 gap-6">

      {/* LEFT SIDE */}
      <div className="xl:col-span-3">

        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">

          {/* TOP BAR */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">

            {/* COINS */}
            <div className="flex gap-4">

              <button
                onClick={() => setSymbol('BINANCE:BTCUSDT')}
                className="bg-orange-500 hover:bg-orange-400 px-6 py-3 rounded-2xl font-bold text-xl"
              >
                BTC
              </button>

              <button
                onClick={() => setSymbol('BINANCE:ETHUSDT')}
                className="bg-blue-500 hover:bg-blue-400 px-6 py-3 rounded-2xl font-bold text-xl"
              >
                ETH
              </button>

              <button
                onClick={() => setSymbol('BINANCE:SOLUSDT')}
                className="bg-purple-500 hover:bg-purple-400 px-6 py-3 rounded-2xl font-bold text-xl"
              >
                SOL
              </button>

            </div>

            {/* LIVE STATUS */}
            <div className="flex items-center gap-3 bg-zinc-900 px-5 py-3 rounded-2xl">

              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />

              <span className="text-lg">
                Live Market
              </span>

            </div>

          </div>

          {/* CHART */}
          <div className="overflow-hidden rounded-3xl">

            <AdvancedRealTimeChart
              theme="dark"
              symbol={symbol}
              width="100%"
              height={650}
              timezone="Etc/UTC"
              locale="en"
              hide_top_toolbar={false}
              hide_legend={false}
              save_image={false}
              allow_symbol_change={false}
            />

          </div>

        </div>

      </div>

      {/* RIGHT PANEL */}
      <div className="space-y-6">

        {/* TRADE PANEL */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">

          <h2 className="text-3xl font-bold mb-8">
            Prediction Trade
          </h2>

{/* AMOUNT */}
<div className="mt-6">

  <label className="block text-white text-xl mb-4 font-semibold">
    Amount (USDC)
  </label>

  <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-5">

    <div className="flex items-center justify-between gap-4">

      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="0"
        style={{
          color: '#ffffff',
          fontSize: '36px',
          fontWeight: '700',
          background: 'transparent',
        }}
        className="w-full outline-none"
      />

      <span
        style={{
          color: '#60a5fa',
          fontSize: '28px',
          fontWeight: '700',
        }}
      >
        USDC
      </span>

    </div>

  </div>

</div>

          {/* PAYOUT */}
          <div className="bg-zinc-900 rounded-2xl p-5 mt-6">

            <p className="text-zinc-400">
              Estimated Payout
            </p>

            <h3 className="text-4xl font-bold mt-3 text-green-500">
              {payout} USDC
            </h3>

          </div>

          {/* TIMER */}
          <div className="flex items-center gap-3 bg-zinc-900 rounded-2xl px-5 py-4 mt-6">

            <Clock3 size={22} />

            <span className="text-lg">
              Expires in 5 Minutes
            </span>

          </div>

          {/* BUTTONS */}
          <div className="grid grid-cols-2 gap-4 mt-8">

            {/* UP */}
            <button className="bg-green-600 hover:bg-green-500 transition rounded-3xl py-6">

              <div className="flex items-center justify-center gap-3">

                <TrendingUp size={28} />

                <span className="text-3xl font-bold">
                  UP
                </span>

              </div>

            </button>

            {/* DOWN */}
            <button className="bg-red-600 hover:bg-red-500 transition rounded-3xl py-6">

              <div className="flex items-center justify-center gap-3">

                <TrendingDown size={28} />

                <span className="text-3xl font-bold">
                  DOWN
                </span>

              </div>

            </button>

          </div>

        </div>

        {/* ACTIVE POSITION */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">

          <h2 className="text-2xl font-bold mb-6">
            Active Positions
          </h2>

          <div className="space-y-4">

            <div className="bg-zinc-900 rounded-2xl p-4">

              <div className="flex justify-between">

                <span>BTC UP</span>

                <span className="text-green-500">
                  +82 USDC
                </span>

              </div>

            </div>

            <div className="bg-zinc-900 rounded-2xl p-4">

              <div className="flex justify-between">

                <span>ETH DOWN</span>

                <span className="text-red-500">
                  -24 USDC
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}