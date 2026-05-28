export default function HomePage() {

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="py-32 px-8 text-center">

        <h1 className="text-7xl font-bold max-w-5xl mx-auto leading-tight">
          BlizMarket
          <br />
          Global Crypto Prediction Market
        </h1>

        <p className="text-zinc-400 text-2xl mt-10 max-w-3xl mx-auto leading-relaxed">
          Trade real-time crypto predictions with professional candlestick charts,
          UP/DOWN positions, and decentralized prediction markets.
        </p>

 <div className="mt-14 max-w-5xl mx-auto">

  <p className="text-2xl text-zinc-300 leading-relaxed">

    BlizMarket combines real-time crypto market analysis,
    advanced trading visuals, and decentralized prediction mechanics
    into a seamless trading experience designed for the next generation
    of Web3 users and traders.

  </p>

</div>

      </section>

      {/* FEATURES */}
      <section className="px-8 py-20">

        <h2 className="text-5xl font-bold text-center mb-16">
          Why BlizMarket
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
            <h3 className="text-2xl font-bold">
              Real-Time Charts
            </h3>

            <p className="text-zinc-400 mt-4 leading-relaxed">
              Professional candlestick charts powered by live global crypto markets.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
            <h3 className="text-2xl font-bold">
              UP / DOWN Trading
            </h3>

            <p className="text-zinc-400 mt-4 leading-relaxed">
              Predict whether crypto prices will go up or down in real time.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
 <h3 className="text-2xl font-bold">
  Secure Onchain Trading
</h3>

<p className="text-zinc-400 mt-4 leading-relaxed">
  Experience transparent and decentralized prediction markets
  powered by modern blockchain technology and real-time execution.
</p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
            <h3 className="text-2xl font-bold">
              Professional UI
            </h3>

            <p className="text-zinc-400 mt-4 leading-relaxed">
              Modern trading terminal inspired by global crypto exchanges.
            </p>
          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="px-8 py-24">

        <h2 className="text-5xl font-bold text-center mb-16">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-zinc-900 rounded-3xl p-8">
            <h3 className="text-3xl font-bold">
              1
            </h3>

            <p className="text-xl mt-6">
              Choose BTC, ETH, or SOL
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8">
            <h3 className="text-3xl font-bold">
              2
            </h3>

            <p className="text-xl mt-6">
              Analyze live candlestick charts
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8">
            <h3 className="text-3xl font-bold">
              3
            </h3>

            <p className="text-xl mt-6">
              Predict UP or DOWN
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8">
            <h3 className="text-3xl font-bold">
              4
            </h3>

            <p className="text-xl mt-6">
              Earn rewards from accurate predictions
            </p>
          </div>

        </div>

      </section>

    </main>
  )
}