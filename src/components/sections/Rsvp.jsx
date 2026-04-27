"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import NotifModal from '@/components/popup/NotifModal'

const Rsvp = () => {
  const [pilihan, setPilihan] = useState(null)
  const [modalType, setModalType] = useState(null)

  const handleConfirm = () => {
    if (!pilihan) {
      setModalType('incomplete_rsvp')
      return
    }
    setModalType('confirm_rsvp')
  }

  const handleFinalConfirm = () => {
    setModalType(null)
    if (pilihan === 'hadir') {
      setModalType('rsvp_confirmed_hadir')
    } else {
      setModalType('rsvp_confirmed_tidak_hadir')
    }
  }

  return (
    <>
      <div className="relative w-full bg-white" style={{ minHeight: '695px' }}>

        {/* BG Image */}
        <Image
          src="/images/Profile/BgAbu.webp"
          alt=""
          fill
          className="object-cover object-center z-0 opacity-70"
        />

        {/* Konten */}
        <div
          className="relative w-full flex flex-col items-center px-8 z-10"
          style={{
            minHeight: '695px',
            paddingTop: '80px',
            paddingBottom: '101px',
          }}
        >
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className='font-wavy text-[24px] text-[#4E4E4E]'>Rsvp</h1>
            <p className='font-century text-[12px] text-[#4E4E4E] mt-[42px]'>Dear</p>
            <p className='font-century text-[14px] text-[#4E4E4E] mt-[26px]'>Sela</p>
            <p className='font-century text-[14px] text-[#4E4E4E] mt-[24px] tracking-wide'>
              Kindly confirm your attendance before<br />16 May 2026
            </p>

            {/* TOMBOL PILIHAN */}
            <div className="flex items-center justify-center gap-[23px] mt-[31px]">
              <button
                onClick={() => setPilihan('hadir')}
                className={`h-[33px] w-[146px] flex items-center justify-center font-century text-[12px] rounded-full transition-all
                  ${pilihan === 'hadir'
                    ? 'bg-[#4E4E4E] text-[#DADAD9]'
                    : 'bg-[#4E4E4E] text-[#DADAD9]'
                  }`}
              >
                ATTEND
              </button>
              <button
                onClick={() => setPilihan('tidak_hadir')}
                className={`h-[33px] w-[148px] flex items-center justify-center font-century text-[12px] rounded-full border-[0.5px] transition-all
                  ${pilihan === 'tidak_hadir'
                    ? 'bg-[#4E4E4E] text-[#DADAD9] border-[0.5px] border-[#4E4E4E]'
                    : 'border-[#4E4E4E] text-[#4E4E4E]'
                  }`}
              >
                UNABLE TO ATTEND
              </button>
            </div>

            {/* LABEL KONFIRMASI */}
            <h3 className='font-century text-[14px] text-[#4E4E4E] mt-[36px]'>
              Confirm your selection?
            </h3>

            {/* TOMBOL CONFIRM */}
            <button
              onClick={handleConfirm}
              className='h-[33px] w-[222px] bg-[#4E4E4E] text-white uppercase font-century text-[12px] rounded-full flex items-center justify-center mt-[37px]'
            >
              {pilihan === 'hadir'
                ? 'CONFIRM ATTEND'
                : pilihan === 'tidak_hadir'
                ? 'CONFIRM UNABLE TO ATTEND'
                : 'CONFIRM'}
            </button>

            <p className='font-century text-[12px] text-[#4E4E4E] mt-[44px] tracking-wide'>
              If you need assistance with your RSVP,<br />please contact our support team.
            </p>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className='h-[33px] w-[160px] bg-[#12877B] text-white flex items-center justify-center font-century text-[12px] rounded-full gap-[8px] mt-[24px]'
            >
              <Image
                src="/images/Rsvp/LogoWa.svg"
                alt="Logo Wa"
                width={18}
                height={18}
                className="object-contain"
              />
              CHAT SUPPORT
            </a>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {modalType && (
        <NotifModal
          type={modalType}
          onClose={() => setModalType(null)}
          onConfirm={handleFinalConfirm}
          waNumber="6281234567890"
        />
      )}
    </>
  )
}

export default Rsvp