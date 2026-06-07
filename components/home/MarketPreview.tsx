'use client'

import { useEffect, useState } from 'react'

type CoinData = {
  symbol: string
  price: string
  change: string
}

export default function MarketPreview() {

  const [coins, setCoins] = useState<CoinData[]>([])

useEffect(() => {

  const fetchMarkets = async () => {

    try {

      const res =
        await fetch(

          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd&include_24hr_change=true'

        )

      const data =
        await res.json()

      const results = [

        {
          symbol: 'BTC',
          price:
            Number(
              data.bitcoin.usd
            ).toLocaleString(),
          change:
            Number(
              data.bitcoin.usd_24h_change
            ).toFixed(2),
        },

        {
          symbol: 'ETH',
          price:
            Number(
              data.ethereum.usd
            ).toLocaleString(),
          change:
            Number(
              data.ethereum.usd_24h_change
            ).toFixed(2),
        },

        {
          symbol: 'SOL',
          price:
            Number(
              data.solana.usd
            ).toLocaleString(),
          change:
            Number(
              data.solana.usd_24h_change
            ).toFixed(2),
        },

      ]

      setCoins(results)

    } catch (error) {

      console.error(error)

    }

  }

  fetchMarkets()

  const interval =
    setInterval(
      fetchMarkets,
      10000
    )

  return () =>
    clearInterval(interval)

}, [])

  return (
  <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 w-full max-w-xl">

      {coins.map((coin, index) => {

        const positive =
          Number(coin.change) >= 0

        return (
   <div
  key={index}
  className={`flex items-center justify-between py-5 px-8 ${
              index !== coins.length - 1
                ? 'border-b border-zinc-800'
                : ''
            }`}
          >

            {/* LEFT */}
           <div className="pl-8">

              <h3 className="text-3xl font-bold">
                {coin.symbol} / USDC
              </h3>


            </div>

            {/* RIGHT */}
            <div className="ml-auto text-right">

              <h3
                className={`text-3xl font-bold ${
                  positive
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {positive ? '+' : ''}
                {coin.change}%
              </h3>

              <p className="text-zinc-400 mt-2">
                ${coin.price}
              </p>

            </div>

          </div>
        )
      })}

    </div>
  )
}