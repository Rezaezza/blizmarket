'use client'

import { useState, useEffect } from 'react'

import dynamic from 'next/dynamic'

import {
  TrendingUp,
  TrendingDown,
  Clock3,
  DollarSign,
} from 'lucide-react'

import {
  useWriteContract,
} from 'wagmi'

import abi from '@/abi/BlizPredictionMarket.json'

import usdcAbi from '@/abi/USDC.json'

import {
  CONTRACT_ADDRESS,
} from '@/lib/contract'

import {
  useAccount,
  usePublicClient,
} from 'wagmi'

const AdvancedRealTimeChart =
  dynamic(
    () =>
      import(
        'react-ts-tradingview-widgets'
      ).then(
        (mod) =>
          mod.AdvancedRealTimeChart
      ),
    {
      ssr: false,
    }
  )

export default function TradingTerminal() {

  const [symbol, setSymbol] =
    useState('BINANCE:BTCUSDT')

  const [amount, setAmount] =
  useState('0')

  const [duration, setDuration] =
  useState(300)  

const [loading,setLoading] =
  useState(false) 

  const [positions, setPositions] =
  useState<any[]>([])

  const {
  writeContractAsync,
} = useWriteContract()

const { address } =
  useAccount()

const publicClient =
  usePublicClient()

  const payout =
  (Number(amount) * 1.8).toFixed(2)

  const loadPositions =
  async () => {

    if (
      !address ||
      !publicClient
    ) return

    try {

      const count =
        await publicClient.readContract({

          address:
            CONTRACT_ADDRESS,

          abi,

          functionName:
            'getTradesCount',

        })

       const activeTrades = []

      for (
        let i = 0;
        i < Number(count);
        i++
      ) {

        const trade =
          await publicClient.readContract({

            address:
              CONTRACT_ADDRESS,

            abi,

            functionName:
              'getTrade',

            args: [BigInt(i)],

          })

 if (

  trade[1]
    .toLowerCase() ===
  address
    .toLowerCase()

)  {


if (!trade[7]) {

  activeTrades.push({

    id:
      Number(trade[0]),

    trader:
      trade[1],

    symbol:
      trade[2],

    isUp:
      trade[3],

    amount:
      Number(trade[4]) /
      1_000_000,

      entryPrice:
  Number(trade[5]),

    expiryTime:
      Number(trade[6]),

    settled:
      trade[7],

    won:
      trade[8],

    claimed:
      trade[9],

    reward:
      Number(trade[10]) /
      1_000_000,

  })

}

        }

      }

 setPositions(
  activeTrades.reverse()
)

    } catch (err) {

      console.error(err)

    }

  }

  const getCurrentPrice =
  async (
    coin: string
  ) => {

    const symbol =
      `${coin}USDT`

    const res =
      await fetch(

        `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`

      )

    const data =
      await res.json()

    return Math.floor(
      Number(data.price) * 100
    )

  }

  const placeTrade = async (
  isUp: boolean
) => {

  setLoading(true)

  try {

    const coin =
      symbol.includes('BTC')
        ? 'BTC'
        : symbol.includes('ETH')
        ? 'ETH'
        : 'SOL'

    const amountInUSDC =
      BigInt(
        Number(amount) * 1_000_000
      )

    /*
    APPROVE USDC
    */

    await writeContractAsync({

      address:
        '0x3600000000000000000000000000000000000000',

      abi: usdcAbi,

      functionName: 'approve',

      args: [
        CONTRACT_ADDRESS,
        amountInUSDC,
      ],

    })

    /*
    PLACE PREDICTION
    */
   const entryPrice =
  await getCurrentPrice(
    coin
  )

    await writeContractAsync({

      address: CONTRACT_ADDRESS,

      abi,

      functionName:
        'placePrediction',

args: [
  coin,
  isUp,
  amountInUSDC,
  BigInt(entryPrice),
  BigInt(duration),
]

    })

    await loadPositions()

    alert(
      `${coin} ${
        isUp
          ? 'UP'
          : 'DOWN'
      } SUCCESS`
    )

  } catch (err) {

    console.error(err)

    alert(
      'Transaction Failed'
    )

  } finally {

    setLoading(false)

  }

}

useEffect(() => {

  loadPositions()

  const interval =
    setInterval(
      loadPositions,
      5000
    )

  return () =>
    clearInterval(
      interval
    )

}, [address])

const settleTrade =
  async (
    tradeId: number,
    symbol: string
  ) => {

    try {

      const finalPrice =
        await getCurrentPrice(
          symbol
        )

      await writeContractAsync({

        address:
          CONTRACT_ADDRESS,

        abi,

        functionName:
          'settleTrade',

        args: [

          BigInt(
            tradeId
          ),

          BigInt(
            finalPrice
          )

        ],

      })

      await loadPositions()

    } catch (err) {

      console.error(
        err
      )

    }

  }

  const claimReward =
  async (
    tradeId: number
  ) => {

    try {

      await writeContractAsync({

        address:
          CONTRACT_ADDRESS,

        abi,

        functionName:
          'claimReward',

        args: [

          BigInt(
            tradeId
          )

        ],

      })

      loadPositions()

    } catch (err) {

      console.error(err)

    }

  }

const getRemainingTime =
  (
    expiry: number
  ) => {

    const now =
      Math.floor(
        Date.now() / 1000
      )

    const diff =
      expiry - now

    if (
      diff <= 0
    )
      return 'EXPIRED'

    const minutes =
      Math.floor(
        diff / 60
      )

    const seconds =
      diff % 60

    return `${minutes}m ${seconds}s`
  }

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

 <div className="flex items-center justify-between mb-8">

  <h2 className="text-3xl font-bold">
    Prediction Trade
  </h2>

  <div className="flex gap-2">

    <button
      onClick={() => setDuration(60)}
      className={`px-3 py-2 rounded-xl text-sm ${
        duration === 60
          ? 'bg-blue-600'
          : 'bg-zinc-800'
      }`}
    >
      1M
    </button>

    <button
      onClick={() => setDuration(300)}
      className={`px-3 py-2 rounded-xl text-sm ${
        duration === 300
          ? 'bg-blue-600'
          : 'bg-zinc-800'
      }`}
    >
      5M
    </button>

    <button
      onClick={() => setDuration(900)}
      className={`px-3 py-2 rounded-xl text-sm ${
        duration === 900
          ? 'bg-blue-600'
          : 'bg-zinc-800'
      }`}
    >
      15M
    </button>

    <button
      onClick={() => setDuration(3600)}
      className={`px-3 py-2 rounded-xl text-sm ${
        duration === 3600
          ? 'bg-blue-600'
          : 'bg-zinc-800'
      }`}
    >
      1H
    </button>

  </div>

</div>

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
          fontSize: '24px',
          fontWeight: '600',
          background: 'transparent',
        }}
        className="w-full outline-none"
      />

<div className="mt-4">

  <p className="text-sm text-zinc-400 mb-2">
    Duration
  </p>

  <p className="text-sm text-green-500 mt-3">
    Selected:
    {
      duration === 60
        ? ' 1 Minute'
        : duration === 300
        ? ' 5 Minutes'
        : duration === 900
        ? ' 15 Minutes'
        : ' 1 Hour'
    }
  </p>

</div>

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


          {/* BUTTONS */}
          <div className="grid grid-cols-2 gap-4 mt-8">

            {/* UP */}
            <button
  onClick={() =>
    placeTrade(true)
  }
  className="bg-green-600 hover:bg-green-500 transition rounded-3xl py-6"
>

              <div className="flex items-center justify-center gap-3">

                <TrendingUp size={28} />

                <span className="text-3xl font-bold">
                  UP
                </span>

              </div>

            </button>

            {/* DOWN */}
            <button
  onClick={() =>
    placeTrade(false)
  }
  className="bg-red-600 hover:bg-red-500 transition rounded-3xl py-6"
>

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

    {positions.length === 0 ? (

      <div className="bg-zinc-900 rounded-2xl p-4">

        No Positions

      </div>

    ) : (

      positions.map(
        (
          trade,
          index
        ) => (

 <div
  key={index}
  className="bg-zinc-900 rounded-2xl p-4"
>

  <div className="flex justify-between">

    <div>

      <p className="font-bold">

        {trade.symbol}
        {' '}
        {trade.isUp
          ? 'UP'
          : 'DOWN'}

      </p>

      <p className="text-sm text-zinc-400">

        Position Size:
        {' '}
        {trade.amount}
        {' '}
        USDC

      </p>

      <p className="text-sm text-zinc-500">

  Entry Price:
  {' '}
  {
    trade.entryPrice
      ? (
          trade.entryPrice /
          100
        ).toLocaleString()
      : '-'
  }

</p>

    </div>

    <div className="text-right">

      {!trade.settled ? (

        <p className="text-yellow-500">

          {
            getRemainingTime(
              trade.expiryTime
            )
          }

        </p>

      ) : trade.won ? (

        <p className="text-green-500">
          WIN
        </p>

      ) : (

        <p className="text-red-500">
          LOSS
        </p>

      )}

    </div>

  </div>

  <div className="flex gap-2 mt-4">

    {
      !trade.settled &&
      Math.floor(
        Date.now() / 1000
      ) >=
      trade.expiryTime && (

        <button

 onClick={() =>
  settleTrade(
    trade.id,
    trade.symbol
  )
}

          className="
          bg-yellow-500
          text-black
          px-4
          py-2
          rounded-xl
          "

        >
          SETTLE
        </button>

      )
    }

 

  </div>

</div>

        )

      )

    )}

  </div>

</div>

      </div>

    </div>
  )
}