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
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-7xl md:text-8xl font-black mb-8 text-white"
  >
    BlizMarket
  </motion.h1>      

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

        <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-3">

  <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

  <span className="text-blue-300 font-semibold">

    Live on Arc Testnet • USDC Settlement • MVP

  </span>

</div>

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

    <div className="bg-white/5 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8">

  <h2 className="text-3xl font-bold text-blue-400">
    Live Market Pricing
  </h2>

  <p className="text-zinc-400 mt-4 text-lg">
    Real-time BTC, ETH, and SOL market data integrated into every prediction.
  </p>

</div>

 <div className="bg-white/5 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8">

<h2 className="text-3xl font-bold text-green-400">
  Transparent Trading
</h2>

<p className="text-zinc-400 mt-4 text-lg">
  All trades, rewards, and settlements are recorded transparently onchain.
</p>

          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8">

 <h2 className="text-3xl font-bold text-yellow-400">
  Instant Predictions
</h2>

<p className="text-zinc-400 mt-4 text-lg">
  Open prediction positions instantly and trade market direction with ease.
</p>

          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8">

  <h2 className="text-3xl font-bold text-purple-400">
  Built on Arc Network
</h2>

<p className="text-zinc-400 mt-4 text-lg">
  Fast, secure, and scalable prediction markets powered by Arc Network.
</p>
          </div>

        </motion.div>

      </section>

      <div className="h-[200px]" />

      {/* MARKET PREVIEW */}
      <section className="relative z-10 px-8 py-24">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-white/5 backdrop-blur-2xl rounded-[40px] p-10"
        >

          <div className="flex flex-col xl:flex-row xl:items-center gap-10">

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
            <div className="xl:w-1/2">
           <MarketPreview />
          </div>

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
              USDC Settlement
            </h3>

            <p className="text-zinc-400 mt-6 text-lg leading-relaxed">
              USDC is used as the core settlement asset for prediction collateral and reward payouts, providing stable-value trading on Arc Testnet.
            </p>

          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

            <h3 className="text-3xl font-bold">
              Built on Arc Network
            </h3>

            <p className="text-zinc-400 mt-6 text-lg leading-relaxed">
              BlizMarket is deployed on Arc Testnet, enabling transparent onchain prediction trading with fast confirmations and low transaction costs.
            </p>

          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

            <h3 className="text-3xl font-bold">
              Transparent Smart Contracts
            </h3>

            <p className="text-zinc-400 mt-6 text-lg leading-relaxed">
              Prediction positions, settlements, and rewards are executed through smart contracts deployed on Arc Testnet.
            </p>

          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

            <h3 className="text-3xl font-bold">
              Prediction Infrastructure
            </h3>

            <p className="text-zinc-400 mt-6 text-lg leading-relaxed">
              BlizMarket provides a complete prediction market experience including trading, portfolio tracking, treasury management, and future leaderboard analytics.
            </p>

          </div>

        </div>

      </section>

      {/* ABOUT BLIZMARKET */}
<section className="relative z-10 px-8 py-24">

  <div className="max-w-5xl mx-auto">

    <h2 className="text-5xl font-bold text-center mb-10">
      About BlizMarket
    </h2>

    <p className="text-zinc-400 text-xl leading-relaxed text-center">

      BlizMarket is a next-generation decentralized prediction market
      where traders can predict the future price movements of BTC,
      ETH, and SOL.

      Built on Arc Network, BlizMarket combines real-time market data,
      transparent smart contracts, and seamless Web3 trading to create
      a secure and rewarding prediction experience for everyone.

    </p>

    <section className="relative z-10 px-8 py-24">

<div className="max-w-6xl mx-auto">

<h2 className="text-5xl font-bold text-center mb-14">

Live Project

</h2>

<div className="grid md:grid-cols-2 gap-8">

<div className="bg-zinc-900 rounded-3xl p-8">

<h3 className="text-2xl font-bold mb-5">

Contract

</h3>

<p className="text-zinc-400 break-all">

0x084A95B785e52F859b3c737d4e4A11333dEec619

</p>

<a

href="https://testnet.arcscan.app/address/0x084A95B785e52F859b3c737d4e4A11333dEec619"

target="_blank"

className="text-blue-400 mt-5 inline-block"

>

View on ArcScan →

</a>

</div>

<div className="bg-zinc-900 rounded-3xl p-8">

<h3 className="text-2xl font-bold mb-5">

Source Code

</h3>

<p className="text-zinc-400">

Open-source frontend and smart contract.

</p>


</div>

</div>

</div>

</section>
<div className="mt-24 text-center">

<p className="text-yellow-500">

⚠ BlizMarket is currently deployed on Arc Testnet for testing and ecosystem validation.

No real-money trading is supported.

</p>

</div>


  </div>

</section>

{/* COMMUNITY */}

<section className="relative z-10 px-8 py-24">

  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-5xl font-bold mb-6">
      Join The BlizMarket Community
    </h2>

    <p className="text-zinc-400 text-xl mb-12">
      Stay updated with the latest announcements, product updates,
      and documentation.
    </p>

<div className="flex flex-col items-center gap-10">

  <a
    href="https://x.com/blizmarket01"
    target="_blank"
    rel="noopener noreferrer"
    className="
      px-10
      py-4
      rounded-2xl
      bg-blue-500
      hover:bg-blue-600
      transition
      font-bold
      text-lg
    "
  >
    Twitter
  </a>

  <a
  href="/docs"
  className="
    text-blue-400
    hover:text-blue-300
    transition
    font-bold
    text-xl
    mt-12
  "
>
  Docs
</a>

</div>

  </div>

</section>

    </main>
  )
}