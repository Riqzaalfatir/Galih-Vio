import React from 'react'
import { useEffect, useRef } from 'react'
import Animate from "@/components/ui/Animate";

const Hero = ({ start }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    if (!videoRef.current) return
    if (start) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
  }, [start])

  return (
    <div id='hero'
      className="relative w-full z-10 pointer-events-none"
      style={{ minHeight: '844px', height: '100dvh' }}
    >
      {/* Teks ATAS */}
      <div className="absolute top-0 left-0 right-0 px-10 pt-[100px] text-white text-center leading-none tracking-wide">
        <p className="font-century text-[14px] uppercase">The Wedding of</p>
        <h1 className="font-wavy text-[40px] uppercase mt-[13px]">Galih & Vio</h1>
        <p className="font-century text-[14px] mt-[13px] leading-5">
          Saturday - Sunday,<br />9 - 10 May 2026
        </p>
      </div>

      {/* Teks BAWAH */}
      <div className="absolute bottom-0 left-0 right-0 px-10 pb-[84px] lg:pb-[155px] text-white text-center leading-none">
        <p className="font-century text-[13px] leading-4">
          "And above all these things put on love,<br />
          which is the perfect bond of unity."
        </p>
        <p className="font-century text-[13px] mt-[25px]">Colossians 3:14</p>
      </div>
    </div>
  )
}

export default Hero