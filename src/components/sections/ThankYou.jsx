import React from 'react'
import Image from "next/image";
import Animate from "@/components/ui/Animate";



const ThankYou = () => {
  return (
    <>
     <div   className="relative w-full flex items-start justify-center overflow-hidden"
      style={{ height: '945px' }}>
        {/* Background foto */}
      <img
        src="/images/ThankYou/FotoCouple.webp"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover object-[50%_60%]"
      />

       <div className="relative z-10 flex flex-col items-center text-center px-8 text-white mt-[85px] leading-none">
        <Animate type='fadeup'>
         <h1 className='font-wavy text-[40px] text-[#4E4E4E]'>Thank You</h1>
         </Animate>

         <Animate type='fadeup'>
         <p className='font-century text-[14px] text-[#4E4E4E] mt-[30px] leading-snug '>For being part of our journey.<br />
         We look forward to<br />
         celebrating love, laughter, and<br />
         happily ever after with you!
         </p>
         </Animate>
       </div>

       {/* Logo bawah */}
<div className="absolute bottom-[23px] z-10 flex items-center">
  <Animate type='fadein'>
  <Image
    src="/images/ThankYou/LogoProvite.svg"
    alt="Provite Logo"
    width={89}
    height={65}
    className="object-contain "
  />
  </Animate>
</div>
     </div>
    </>
  )
}

export default ThankYou