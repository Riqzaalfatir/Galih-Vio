import React from 'react'
import Image from 'next/image'

const OurStory = () => {
  return (
    <div
      className="w-full flex flex-col items-center"
      style={{ minHeight: '938px' }}
    >

      {/* ── FOTO ATAS ── */}
      <div className="w-full relative" style={{ height: '220px' }}>
        <Image
          src="/images/OurStory/FotoCouplePayung.webp"
          alt="Galih & Vio"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* ── KONTEN BAWAH ── */}
      <div className="w-full flex flex-col items-center  pt-[38px] pb-[83px] z-10">

        {/* Judul */}
        <h2 className="font-wavy text-[24px] text-white">
          A Journey in Love
        </h2>

        {/* Paragraf cerita */}
        <div className="font-century text-[14px] text-white leading-relaxed  text-center space-y-[20px] pt-[29px]">
          <p>
            We met as two strangers during our clinical<br />
            rotations in Sukabumi. From different backgrounds,<br /> 
            different universities, and with contrasting spirits,<br />
            we found comfort in each other’s company in the<br />
            middle of a chaotic hospital. It started simply, just<br />
            two people going through the same long days and<br />
            routines.
          </p>
          <p>
            Somewhere along the way, we got to know each<br />
            other better. What began as small conversations<br />
            slowly turned into something we both wanted to<br />
            keep.
          </p>
          <p>
            The next few years led us down separate roads, and<br />
            we weren't always lucky enough to be in the same<br />
            place. From 2022 to 2024, we navigated long<br />
            distance more often than not. We learned to be<br />
            patient, to stay consistent, and to make time for<br />
            each other in the middle of everything else.
          </p>
          <p>
            There’s no big turning point, just a long and steady<br />
            growth as both individuals and partners that<br />
            brought us here.          
          </p>
          <p>
            Through many tears and joys, through moments of<br />
            doubt and seasons of hope, we finally choose each<br />
            other to spend our lives together.
          </p>
        </div>

      </div>
    </div>
  )
}

export default OurStory