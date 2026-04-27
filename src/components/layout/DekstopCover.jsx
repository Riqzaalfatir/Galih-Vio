import React from 'react'
import Image from 'next/image'

const DesktopCover = () => {
  return (
    <div className="relative w-full overflow-hidden"     
    style={{ minHeight: '1100px', height: '100dvh' }}

>
      
      {/* Background Image */}
      <Image
        src="/images/Cover/hd.webp"
        alt="Galih & Vio Wedding Cover"
        fill
        priority
        className="object-cover object-[50%_15%]"
      />

      {/* Teks di bawah — pakai flex agar posisi relatif terhadap container */}
      <div className="absolute inset-0 flex flex-col justify-end items-center text-white text-center px-10 pb-[5%]">
        {/* pb-[5%] → relatif terhadap lebar, tidak berubah saat zoom */}
        
        <p className="font-century text-[20px] text-white uppercase">
          The Wedding of
        </p>
        <h1 className="font-wavy text-[64px] uppercase">
          Galih & Vio
        </h1>
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