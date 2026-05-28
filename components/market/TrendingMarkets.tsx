import MarketCard from './MarketCard'

const markets = [
  {
    title: 'Will BTC hit $200K in 2026?',
    yesPrice: 72,
    noPrice: 28,
    volume: '12,400 ARC',
    traders: 1240,
  },
  {
    title: 'Will Ethereum surpass Bitcoin?',
    yesPrice: 40,
    noPrice: 60,
    volume: '8,900 ARC',
    traders: 932,
  },
  {
    title: 'Will AI replace developers?',
    yesPrice: 65,
    noPrice: 35,
    volume: '15,100 ARC',
    traders: 1820,
  },
]

export default function TrendingMarkets() {
  return (
    <section className="p-6">

      <h2 className="text-4xl font-bold mb-8">
        Trending Markets
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {markets.map((market, index) => (
          <MarketCard
            key={index}
            title={market.title}
            yesPrice={market.yesPrice}
            noPrice={market.noPrice}
            volume={market.volume}
            traders={market.traders}
          />
        ))}

      </div>

    </section>
  )
}