import React from 'react'
import Image from 'next/image'
import Animate from "@/components/ui/Animate";


const Profile = () => {
  return (
    <div id='profile' className="relative w-full z-20 bg-[#F0F0EF]" style={{ minHeight: '1256px' }}>

      {/* BG Image */}
      <Image
        src="/images/Profile/BgAbu.webp"
        alt=""
        fill
        className="object-cover object-center  "
      />

      {/* Konten */}
      <div 
        className="relative w-full flex flex-col items-center px-8 z-10"
        style={{ 
          minHeight: '1256px',
          paddingTop: '79px',
          paddingBottom: '81px', 
        }}
      >

        {/* Teks undangan atas */}
        <Animate type="fadeup">
        <p 
          className="font-century text-center text-[14px] text-[#4E4E4E] tracking-wide"
          style={{ marginBottom: '37px' }}
        >
         We request the honour of your presence<br />at the wedding of our beloved son and<br />daughter
        </p>
        </Animate>

        {/* Foto Galih */}
        <Animate type='fadein'>
        <div 
          className="relative overflow-hidden w-[200px] md:w-[204px]"
          style={{ height: '260px', marginBottom: '40px' }}
        >
          <Image
            src="/images/Profile/FotoGalihHD.webp"
            alt="Galih Yogi Handaru"
            fill
            className="object-cover object-top"
          />
        </div>
        </Animate>

        {/* Nama Galih */}
        <Animate type='fadeup'>
        <h2 
          className="font-wavy text-[32px] text-[#4E4E4E] text-center leading-9"
          style={{ marginBottom: '16px' }}
        >
          GALIH YOGI
          <br />
          HANDARU
        </h2>
        </Animate>

        {/* Keterangan Galih */}
        <Animate type='fadeup' >
        <p 
          className="font-century text-[14px] text-[#4E4E4E] text-center leading-relaxed"
          style={{ marginBottom: '40px' }}
        >
          The Son of
          <span className='text-[12px] block mt-[6px]'>MR. SINUNG NUGROHO and</span>
          <span className='text-[12px] block'>MRS. KUNTARI RETNO</span>
        </p>
        </Animate>

        {/* Foto Vio */}
        <Animate type='fadein' >
        <div 
          className="relative overflow-hidden w-[200px] md:w-[204px]"
          style={{ height: '260px', marginBottom: '40px' }}
        >
          <Image
            src="/images/Profile/FotoVioHD2.webp"
            alt="Noviola Ruth Adisty"
            fill
            className="object-cover object-top"
          />
        </div>
        </Animate>

        {/* Nama Vio */}
        <Animate type='fadeup' >
        <h2 
          className="font-wavy text-[32px] text-[#4E4E4E] text-center leading-9"
          style={{ marginBottom: '14px' }}
        >
          NOVIOLA RUTH
          <br />
          ADISTY
        </h2>
        </Animate>

        {/* Keterangan Vio */}
        <Animate type='fadeup' >
        <p 
          className="font-century text-[14px] text-[#4E4E4E] text-center leading-relaxed"
          style={{ marginBottom: '43px' }}
        >
          The Daughter of
          <span className='text-[12px] block mt-[6px]'>MR. SUMARNO and</span>
          <span className='text-[12px] block'>MRS. CINDRA ELFIE</span>
        </p>
        </Animate>

        <Animate type='fadeup'>
        <p 
          className="font-century text-center text-[14px] text-[#4E4E4E] leading-5 max-w-[260px]"
        >
          Your presence and blessings<br />
          would mean the world to us.
        </p>
        </Animate>

      </div>
    </div>
  )
}

export default Profile

// import React from 'react'
// import Image from 'next/image'

// const Profile = () => {
//   return (
//     <div 
//       className="w-full flex flex-col items-center px-8" 
//       style={{ 
//         minHeight: '1256px',
//         paddingTop: '79px',
//         paddingBottom: '81px', 
//         backgroundImage: 'url(/images/Profile/BgAbu.webp)',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat'
//       }}
//     >

//       {/* Teks undangan atas */}
//       <p 
//         className="font-century text-center text-[14px] text-[#4E4E4E] tracking-wide"
//         style={{ marginBottom: '37px' }}
//       >
//        We request the honour of your presence<br />at the wedding of our beloved son and<br />daughter
//       </p>

//       {/* Foto Galih */}
//       <div 
//         className="relative overflow-hidden"
//         style={{ width: '204px', height: '260px', marginBottom: '35px' }}
//       >
//         <Image
//           src="/images/Profile/FotoGalih.webp"
//           alt="Galih Yogi Handaru"
//           fill
//           className="object-cover object-top"
//         />
//       </div>

//       {/* Nama Galih */}
//       <h2 
//         className="font-wavy text-[32px] text-[#4E4E4E] text-center leading-9"
//         style={{ marginBottom: '11px' }}
//       >
//         GALIH YOGI
//         <br />
//         HANDARU
//       </h2>

//       {/* Keterangan Galih */}
//       <p 
//         className="font-century text-[14px] text-[#4E4E4E] text-center leading-relaxed"
//         style={{ marginBottom: '40px' }}
//       >
//         The Son of
//         <span className='text-[12px] block mt-[5px]'>MR. SINUNG NUGROHO and</span>
//         <span className='text-[12px] block'>MRS. KUNTARI RETNO</span>
//       </p>

//       {/* Foto Vio */}
//       <div 
//         className="relative overflow-hidden"
//         style={{ width: '204px', height: '260px', marginBottom: '35px' }}
//       >
//         <Image
//           src="/images/Profile/FotoVio.webp"
//           alt="Noviola Ruth Adisty"
//           fill
//           className="object-cover object-top"
//         />
//       </div>

//       {/* Nama Vio */}
//       <h2 
//         className="font-creators text-[28px] text-[#4E4E4E] text-center leading-9"
//         style={{ marginBottom: '9px' }}
//       >
//         NOVIOLA RUTH
//         <br />
//         ADISTY
//       </h2>

//       {/* Keterangan Vio */}
//       <p 
//         className="font-century text-[14px] text-[#4E4E4E] text-center leading-relaxed"
//         style={{ marginBottom: '43px' }}
//       >
//         The Daughter of
//         <span className='text-[12px] block mt-[5px]'>MR. SUMARNO and</span>
//         <span className='text-[12px] block'>MRS. CINDRA ELFIE</span>
//       </p>

//       <p 
//         className="font-century text-center text-[14px] text-[#4E4E4E] leading-relaxed max-w-[260px]"
//       >
//         Your presence and blessings
//         would mean the world to us.
//       </p>

//     </div>
//   )
// }

// export default Profile