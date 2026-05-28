'use client'

import '@rainbow-me/rainbowkit/styles.css'

import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit'

import {
  WagmiProvider,
  http,
} from 'wagmi'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { defineChain } from 'viem'

/* ARC TESTNET */

const arcTestnet = defineChain({
  id: 5042002,

  name: 'Arc Testnet',

  nativeCurrency: {
    decimals: 6,
    name: 'USDC',
    symbol: 'USDC',
  },

  rpcUrls: {
    default: {
      http: [
        'https://rpc.testnet.arc.network',
      ],
    },
  },

  blockExplorers: {
    default: {
      name: 'ArcScan',
      url: 'https://testnet.arcscan.app',
    },
  },

  testnet: true,
})

/* WAGMI CONFIG */

const config = getDefaultConfig({
  appName: 'BlizMarket',

  projectId: 'blizmarket',

  chains: [arcTestnet],

  transports: {
    [arcTestnet.id]: http(),
  },
})

/* QUERY CLIENT */

const queryClient = new QueryClient()

/* PROVIDER */

export default function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <WagmiProvider config={config}>

      <QueryClientProvider client={queryClient}>

        <RainbowKitProvider>

          {children}

        </RainbowKitProvider>

      </QueryClientProvider>

    </WagmiProvider>
  )
}