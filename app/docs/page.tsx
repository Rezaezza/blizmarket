'use client'

import Link from 'next/link'

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-6xl font-black mb-6">
          BlizMarket Documentation
        </h1>

        <p className="text-zinc-400 text-xl leading-relaxed">
          BlizMarket is a decentralized prediction market built on Arc Testnet.
          Users can predict BTC, ETH, and SOL price movements using USDC as
          collateral and receive transparent onchain settlements.
        </p>

        <div className="mt-16 space-y-12">

          <section>

            <h2 className="text-4xl font-bold mb-4">
              Introduction
            </h2>

            <p className="text-zinc-400 leading-8">
              BlizMarket provides a simple prediction trading experience where
              users choose whether the market will move UP or DOWN within a
              selected duration. All positions are recorded onchain using smart
              contracts deployed on Arc Testnet.
            </p>

          </section>

          <section>

            <h2 className="text-4xl font-bold mb-4">
              Features
            </h2>

            <ul className="space-y-3 text-zinc-400">

              <li>• BTC / ETH / SOL Prediction Markets</li>

              <li>• USDC Settlement</li>

              <li>• WalletConnect / MetaMask / Rabby</li>

              <li>• Portfolio Dashboard</li>

              <li>• Leaderboard</li>

              <li>• Claim Rewards</li>

              <li>• Arc Testnet Deployment</li>

            </ul>

          </section>

          <section>

            <h2 className="text-4xl font-bold mb-4">
              Smart Contract
            </h2>

            <p className="text-zinc-400 leading-8">
              Contract Address
            </p>

            <div className="bg-zinc-900 rounded-xl p-4 mt-4 break-all">

              0x084A95B785e52F859b3c737d4e4A11333dEec619

            </div>

          </section>

          <section>

            <h2 className="text-4xl font-bold mb-4">
              Treasury Model
            </h2>

            <p className="text-zinc-400 leading-8">

              All prediction positions are settled through the BlizMarket
              treasury. Winning users receive payouts from the treasury while
              losing positions remain within the protocol treasury to support
              future settlements.

            </p>

          </section>

          <section>

            <h2 className="text-4xl font-bold mb-4">
              Why USDC
            </h2>

            <p className="text-zinc-400 leading-8">

              USDC is used as the settlement currency to provide stable-value
              collateral and predictable payouts without exposure to additional
              token volatility.

            </p>

          </section>

          <section>

            <h2 className="text-4xl font-bold mb-4">
              Arc Network
            </h2>

            <p className="text-zinc-400 leading-8">

              BlizMarket is deployed on Arc Testnet and demonstrates how
              decentralized prediction markets can leverage fast execution and
              low transaction costs while using USDC as the core settlement
              asset.

            </p>

          </section>

          <section>

            <h2 className="text-4xl font-bold mb-4">
              Roadmap
            </h2>

            <ul className="space-y-3 text-zinc-400">

              <li>✅ Prediction Market MVP</li>

              <li>✅ Arc Testnet Deployment</li>

              <li>🚀 Portfolio Analytics</li>

              <li>🚀 Leaderboard</li>

              <li>🚀 Circle CCTP Integration</li>

            </ul>

          </section>

          <section>

            <h2 className="text-4xl font-bold mb-4">
              Disclaimer
            </h2>

            <p className="text-yellow-400 leading-8">

              BlizMarket is currently running on Arc Testnet for demonstration
              and testing purposes only. No real-money trading is supported.

            </p>

          </section>

        </div>

        <div className="mt-20">

          <Link
            href="/"
            className="px-8 py-4 bg-blue-600 rounded-xl hover:bg-blue-700 transition"
          >
            ← Back to Home
          </Link>

        </div>

      </div>

    </main>
  )
}