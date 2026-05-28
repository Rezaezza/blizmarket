'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

import WalletButton from '@/components/wallet/WalletButton'

export default function Navbar() {

  const [open, setOpen] = useState(false)

  return (
    <>
      {/* TOP NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-5 border-b border-zinc-800 bg-black sticky top-0 z-50">

        {/* LEFT */}
        <div className="flex items-center">

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(true)}
            className="text-white"
          >
            <Menu size={34} />
          </button>

        </div>

        {/* RIGHT */}
        <div>

          <WalletButton />

        </div>

      </nav>

      {/* SIDEBAR */}
      {open && (
        <div className="fixed inset-0 z-50 flex">

          {/* MENU */}
          <div className="w-80 bg-zinc-950 border-r border-zinc-800 p-8">

            {/* HEADER */}
            <div className="flex items-center justify-between mb-12">

              <h2 className="text-3xl font-bold text-white">
                Menu
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="text-white"
              >
                <X size={34} />
              </button>

            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10">

              <Link
                href="/"
                onClick={() => setOpen(false)}
                style={{
                  color: '#ffffff',
                  fontSize: '40px',
                  fontWeight: '700',
                }}
              >
                Home
              </Link>

              <Link
                href="/markets"
                onClick={() => setOpen(false)}
                style={{
                  color: '#ffffff',
                  fontSize: '40px',
                  fontWeight: '700',
                }}
              >
                Markets
              </Link>

              <Link
                href="/portfolio"
                onClick={() => setOpen(false)}
                style={{
                  color: '#ffffff',
                  fontSize: '40px',
                  fontWeight: '700',
                }}
              >
                Portfolio
              </Link>

              <Link
                href="/leaderboard"
                onClick={() => setOpen(false)}
                style={{
                  color: '#ffffff',
                  fontSize: '40px',
                  fontWeight: '700',
                }}
              >
                Leaderboard
              </Link>

            </div>

          </div>

          {/* BACKDROP */}
          <div
            className="flex-1 bg-black/70"
            onClick={() => setOpen(false)}
          />

        </div>
      )}
    </>
  )
}