'use client'

import { motion } from 'framer-motion'

import MarketPreview from '@/components/home/MarketPreview'

export default function HomePage() {

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/20 blur-[180px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[180px] rounded-full" />

      {/* HERO */}
      <section className="relative z-10 py-32 px-8 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl md:text-8xl font-bold max-w-6xl mx-auto leading-tight"
        >

          The Future Of
          <br />

          Crypto Prediction Trading

        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-zinc-400 text-2xl mt-10 max-w-4xl mx-auto leading-relaxed"
        >

          BlizMarket combines live candlestick charts,
          decentralized prediction markets, and professional trading tools
          into one seamless Web3 trading experience.

        </motion.p>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="grid md:grid-cols-4 gap-6 mt-20 max-w-6xl mx-auto"
        >

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

            <h2 className="text-5xl font-bold text-blue-400">
              $2.4M
            </h2>

            <p className="text-zinc-400 mt-4 text-lg">
              Trading Volume
            </p>

          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

            <h2 className="text-5xl font-bold text-green-400">
              12.8K
            </h2>

            <p className="text-zinc-400 mt-4 text-lg">
              Active Traders
            </p>

          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

            <h2 className="text-5xl font-bold text-yellow-400">
              92%
            </h2>

            <p className="text-zinc-400 mt-4 text-lg">
              Prediction Accuracy
            </p>

          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

            <h2 className="text-5xl font-bold text-purple-400">
              24/7
            </h2>

            <p className="text-zinc-400 mt-4 text-lg">
              Live Markets
            </p>

          </div>

        </motion.div>

      </section>

      {/* MARKET PREVIEW */}
      <section className="relative z-10 px-8 py-24">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-10"
        >

          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-10">

            {/* LEFT */}
            <div className="max-w-2xl">

              <h2 className="text-6xl font-bold leading-tight">

                Professional
                <br />

                Trading Experience

              </h2>

              <p className="text-zinc-400 text-xl mt-8 leading-relaxed">

                Analyze live crypto markets using advanced candlestick charts,
                execute UP/DOWN predictions instantly,
                and trade with professional-grade Web3 interfaces.

              </p>

            </div>

            {/* RIGHT */}
            <MarketPreview />

          </div>

        </motion.div>

      </section>

      {/* FEATURES */}
      <section className="relative z-10 px-8 py-24">

        <h2 className="text-6xl font-bold text-center mb-20">
          Why BlizMarket
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

            <h3 className="text-3xl font-bold">
              Real-Time Markets
            </h3>

            <p className="text-zinc-400 mt-6 text-lg leading-relaxed">
              Live crypto prediction trading powered by real-time global market data.
            </p>

          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

            <h3 className="text-3xl font-bold">
              Advanced Charts
            </h3>

            <p className="text-zinc-400 mt-6 text-lg leading-relaxed">
              Professional candlestick charting for accurate market analysis.
            </p>

          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

            <h3 className="text-3xl font-bold">
              Decentralized Trading
            </h3>

            <p className="text-zinc-400 mt-6 text-lg leading-relaxed">
              Transparent onchain prediction trading secured by blockchain technology.
            </p>

          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

            <h3 className="text-3xl font-bold">
              Professional Interface
            </h3>

            <p className="text-zinc-400 mt-6 text-lg leading-relaxed">
              Premium trading experience inspired by global crypto exchanges.
            </p>

          </div>

        </div>

      </section>

    </main>
  )
}