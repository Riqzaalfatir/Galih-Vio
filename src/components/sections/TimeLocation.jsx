import React from 'react'

const TimeLocation = () => {
  return (
    <div
      className="w-full flex flex-col items-center bg-[#4E4E4E]"
      style={{ minHeight: '862px' }}
    >

      {/* ── CARD ── */}
      <div
        className="w-[301px] flex flex-col items-center px-4 pt-[33px] bg-[#D9D9D9] rounded-[30px] z-10"
        style={{ minHeight: '780px' }}
      >

        {/* Save the Date label */}
        <p className="font-century text-[10px] uppercase text-[#4E4E4E]">
          Save the Date
        </p>

        {/* Judul */}
        <h2 className="font-wavy text-[24px] text-[#4E4E4E] text-center mt-[6px]">
          Time & Location
        </h2>

        {/* ── HOLY MATRIMONY ── */}
        <div className="flex flex-col items-center w-full">

          <h3 className="font-century text-[20px] text-[#4E4E4E] text-center mt-[31px]">
            HOLY MATRIMONY
          </h3>

          <p className="font-century text-[14px] text-[#4E4E4E] text-center mt-[27px] tracking-wide">
            Saturday, 9 May 2026
          </p>
          <p className="font-century text-[14px] text-[#4E4E4E] text-center pt-[5px]">
            10.00 WIB
          </p>

          <p className="font-century text-[12px] text-[#4E4E4E] text-center leading-relaxed pt-[38px]">
            Gereja Kristus Cibinong (GKC)
            <span className='block pt-[5px]'>Jl. Raya Jakarta Bogor, KM 42,5,</span>
            <span className='block'>Cibinong, Kab Bogor</span>
          </p>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#4E4E4E] font-century text-[12px] uppercase w-[160px] h-[33px] text-white flex items-center justify-center rounded-full mt-[10px]"
          >
            Google Maps
          </a>

        </div>

        {/* Dot divider */}
        <div className="w-[12px] h-[12px] rounded-full bg-[#4E4E4E] mt-[61px] mb-[60px]" />

        {/* ── RECEPTION ── */}
        <div className="flex flex-col items-center w-full">

          <h3 className="font-century text-[20px] text-[#4E4E4E] text-center">
            RECEPTION
          </h3>

          <p className="font-century text-[14px] text-[#4E4E4E] text-center mt-[27px]">
            Sunday, 10 May 2026
          </p>
          <p className="font-century text-[14px] text-[#4E4E4E] text-center pt-[5px]">
            18.00 WIB
          </p>

          <p className="font-century text-[12px] text-[#4E4E4E] text-center mt-[35px] tracking-wide">
            Resinda Hotel Karawang
            <span className='block pt-[5px]'>Jl. Resinda Raya no 1,</span>
            <span className='block'>Karawang, Jawa Barat</span>
          </p>

           <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#4E4E4E] font-century text-[12px] uppercase w-[160px] h-[33px] text-white flex items-center justify-center mt-[10px] rounded-full"
          >
            Google Maps
          </a>

        </div>

      </div>

    </div>
  )
}

export default TimeLocation