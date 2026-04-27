import React from 'react'
import Image from 'next/image'

const DesktopCover = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/images/Cover/FotoCoupleMobil.webp"
        alt="Galih & Vio Wedding Cover"
        fill
        priority
        className="object-cover object-[50%_15%]"
      />

      {/* Teks di bawah */}
      <div className="absolute bottom-0 left-0 right-0 px-10 pb-12 text-white text-center">
        
        {/* Label kecil */}
        <p className="font-century text-[20px] text-white uppercase">
          The Wedding of
        </p>

        {/* Nama utama */}
        <h1 className="font-wavy text-[64px] uppercase">
          Galih & Vio
        </h1>

        {/* Tanggal */}
        <p className="font-century text-[20px]">
          Saturday · Sunday,
          <br />
          9 · 10 May 2026
        </p>

      </div>
    </div>
  )
}

export default DesktopCover