'use client'

import '@rainbow-me/rainbowkit/styles.css'

import {
  RainbowKitProvider,
  darkTheme,
  connectorsForWallets,
} from '@rainbow-me/rainbowkit'

import {
  metaMaskWallet,
  rabbyWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets'

import {
  WagmiProvider,
  createConfig,
  http,
} from 'wagmi'

import { defineChain } from 'viem'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

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

/* WALLETS */

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [
        metaMaskWallet,
        rabbyWallet,
        walletConnectWallet,
      ],
    },
  ],
  {
    appName: 'BlizMarket',
    projectId: 'blizmarket',
  }
)

/* WAGMI CONFIG */

const config = createConfig({
  connectors,

  chains: [arcTestnet],

  transports: {
    [arcTestnet.id]: http(),
  },
})

/* QUERY */

const queryClient = new QueryClient()

/* PROVIDERS */

export default function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <WagmiProvider config={config}>

      <QueryClientProvider client={queryClient}>

        <RainbowKitProvider
          theme={darkTheme()}
        >

          {children}

        </RainbowKitProvider>

      </QueryClientProvider>

    </WagmiProvider>
  )
}