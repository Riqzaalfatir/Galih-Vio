"use client"

import React, { useState } from 'react'
import Animate from "@/components/ui/Animate";


const gifts = [
  {
    bank: 'BCA',
    number: '3780016361',
    name: 'Noviola Ruth Adisty',
  },
  // Tambah rekening lain di sini kalau ada
  // { bank: 'MANDIRI', number: '9876543210', name: 'PROVITE' },
]

const WeddingGift = () => {
  const [copied, setCopied] = useState(null)

  const handleCopy = (number, index) => {
    navigator.clipboard.writeText(number)
    setCopied(index)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section id='gift'
      className="relative w-full flex items-start justify-center overflow-hidden"
      style={{ height: '580px' }}
    >
      {/* Background foto */}
      <img
        src="/images/WeddingGift/Bg-WeddingGift.webp"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay hitam 44% + blur */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.44)',
          backdropFilter: 'blur(5.3px)',
          WebkitBackdropFilter: 'blur(9.3px)',
        }}
      />

      {/* Konten */}
      <div className="relative z-10 flex flex-col items-center text-center px-8 text-white mt-[146px]">
        {/* Judul */}
        <Animate type='fadeup'>
        <h2
          className="text-[24px] font-wavy tracking-wide text-white"
        >
          Wedding Gift
        </h2>
        </Animate>

        {/* Paragraf */}
        <Animate type='fadeup'>
        <p className="text-[14px] font-century text-white mt-[30px] tracking-wide">
          Your presence and prayers
          <br />
          are the greatest blessing to us.
        </p>
        </Animate>

        <Animate type='fadeup'>
        <p className="text-[14px] font-century text-white tracking-wide mt-[12px]">
          Should you wish to honor us with a gift,
          <br />
          please find the details below
          <br />
          for your convenience.
        </p>
        </Animate>

        {/* List rekening */}
        <div className="w-full max-w-[225px] flex flex-col gap-6 mt-[33px]">
          {gifts.map((gift, index) => (
            <div key={index} className="w-full">
              {/* Info bank */}
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <Animate type='fadeleft'>
                  <p className="text-[12px] font-century text-white">{gift.bank}</p>
                  </Animate>

                  <Animate type='fadeleft'>
                  <p className="text-[12px] font-century text-white">{gift.number}</p>
                  </Animate>

                  <Animate type='fadeleft'>
                  <p className="text-[12px] font-century text-white">{gift.name}</p>
                  </Animate>
                </div>

                {/* Tombol COPY */}
                <Animate type='faderight'>
                <button
                  onClick={() => handleCopy(gift.number, index)}
                  className="text-[10px] font-century tracking-widest pb-[0.5px] border-b border-white transition-opacity hover:opacity-70"
                >
                  {copied === index ? 'COPIED!' : 'COPY'}
                </button>
                </Animate>
              </div>
              {/* Garis bawah */}
              <Animate type='fadeup'>
              <div className="mt-3 border-b border-white" />
              </Animate>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WeddingGift