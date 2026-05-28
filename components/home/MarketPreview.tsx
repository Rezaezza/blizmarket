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

        const symbols = [
          'BTCUSDT',
          'ETHUSDT',
          'SOLUSDT',
        ]

        const results = await Promise.all(

          symbols.map(async (symbol) => {

            const res =
              await fetch(
                `https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`
              )

            const data = await res.json()

            return {
              symbol: symbol.replace('USDT', ''),
              price: Number(data.lastPrice).toLocaleString(),
              change: Number(
                data.priceChangePercent
              ).toFixed(2),
            }
          })

        )

        setCoins(results)

      } catch (error) {

        console.error(error)

      }

    }

    fetchMarkets()

    const interval =
      setInterval(fetchMarkets, 10000)

    return () => clearInterval(interval)

  }, [])

  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 w-full max-w-xl">

      {coins.map((coin, index) => {

        const positive =
          Number(coin.change) >= 0

        return (
          <div
            key={index}
            className={`flex items-center justify-between py-5 ${
              index !== coins.length - 1
                ? 'border-b border-zinc-800'
                : ''
            }`}
          >

            {/* LEFT */}
            <div>

              <h3 className="text-3xl font-bold">
                {coin.symbol} / USDC
              </h3>


            </div>

            {/* RIGHT */}
            <div className="text-right">

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