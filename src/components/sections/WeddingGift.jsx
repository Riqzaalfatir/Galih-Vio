"use client"

import React, { useState } from 'react'

const gifts = [
  {
    bank: 'BCA',
    number: '1234567891011',
    name: 'PROVITE',
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
    <section
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
        <h2
          className="text-[24px] font-wavy tracking-wide text-white"
        >
          Wedding Gift
        </h2>

        {/* Paragraf */}
        <p className="text-[14px] font-century text-white mt-[30px] tracking-wide">
          Your presence and prayers
          <br />
          are the greatest blessing to us.
        </p>

        <p className="text-[14px] font-century text-white tracking-wide mt-[12px]">
          Should you wish to honor us with a gift,
          <br />
          please find the details below
          <br />
          for your convenience.
        </p>

        {/* List rekening */}
        <div className="w-full max-w-[225px] flex flex-col gap-6 mt-[33px]">
          {gifts.map((gift, index) => (
            <div key={index} className="w-full">
              {/* Info bank */}
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <p className="text-[12px] font-century text-white">{gift.bank}</p>
                  <p className="text-[12px] font-century text-white">{gift.number}</p>
                  <p className="text-[12px] font-century text-white">{gift.name}</p>
                </div>
                {/* Tombol COPY */}
                <button
                  onClick={() => handleCopy(gift.number, index)}
                  className="text-[10px] font-century tracking-widest pb-[0.5px] border-b border-white transition-opacity hover:opacity-70"
                >
                  {copied === index ? 'COPIED!' : 'COPY'}
                </button>
              </div>
              {/* Garis bawah */}
              <div className="mt-3 border-b border-white" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WeddingGift