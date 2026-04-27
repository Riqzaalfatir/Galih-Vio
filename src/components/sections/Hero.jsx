// import React from 'react'
// import { useEffect, useRef } from 'react'

// const Hero = ({ start }) => {
//   const videoRef = useRef(null)

//   useEffect(() => {
//     if (!videoRef.current) return
//     if (start) {
//       videoRef.current.play()
//     } else {
//       videoRef.current.pause()
//     }
//   }, [start])

//   return (
//     <div className="relative w-full h-screen z-10 pointer-events-none">
//       {/* Teks ATAS */}
//       <div className="absolute top-0 left-0 right-0 px-10 pt-[100px] text-white text-center leading-none">
//         <p className="font-century text-[14px] uppercase">The Wedding of</p>
//         <h1 className="font-wavy text-[40px] uppercase mt-[10px]">Galih & Vio</h1>
//         <p className="font-century text-[14px] mt-[15px] leading-4">
//           Saturday - Sunday,
//           <br />
//           9 - 10 May 2026
//         </p>
//       </div>

//       {/* Teks BAWAH */}
//       <div className="absolute bottom-0 left-0 right-0 px-10 pb-[85px] text-white text-center leading-none">
//         <p className="font-century text-[13px] leading-4">
//           "And above all these things put on love,
//           <br />
//           which is the perfect bond of unity."
//         </p>
//         <p className="font-century text-[13px] mt-[10px]">Colossians 3:14</p>
//       </div>
//     </div>
//   )
// }

// export default Hero

import React from 'react'
import { useEffect, useRef } from 'react'

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
    <div className="relative w-full h-[844px] lg:h-screen z-10 pointer-events-none">
      {/* Teks ATAS */}
      <div className="absolute top-0 left-0 right-0 px-10 pt-[100px] text-white text-center leading-none">
        <p className="font-century text-[14px] uppercase">The Wedding of</p>
        <h1 className="font-wavy text-[40px] uppercase mt-[10px]">Galih & Vio</h1>
        <p className="font-century text-[14px] mt-[15px] leading-4">
          Saturday - Sunday,
          <br />
          9 - 10 May 2026
        </p>
      </div>

      {/* Teks BAWAH */}
      <div className="absolute bottom-0 left-0 right-0 px-10 pb-[85px] lg:pb-[185px] text-white text-center leading-none">
        <p className="font-century text-[13px] leading-4">
          "And above all these things put on love,
          <br />
          which is the perfect bond of unity."
        </p>
        <p className="font-century text-[13px] mt-[10px]">Colossians 3:14</p>
      </div>
    </div>
  );
};

export default Hero



// const Hero = ({ start }) => {
//    const videoRef = useRef(null)

//   useEffect(() => {
//     if (!videoRef.current) return
//     if (start) {
//       videoRef.current.play()
//     } else {
//       videoRef.current.pause()
//     }
//   }, [start])

//   return (
//     <div className="relative w-full h-screen overflow-hidden">

//       {/* Background Video */}
//       <video
//         ref={videoRef}  
//         className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        
//         muted
//         loop
//         playsInline
//       >
//         <source src="/images/Hero/VideoGV.mp4" />
//       </video>

//       {/* Overlay gradient */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

//       {/* Teks ATAS */}
//       <div className="absolute top-0 left-0 right-0 px-10 pt-[100px] text-white text-center leading-none">
//         <p className="font-century text-[14px] uppercase">
//           The Wedding of
//         </p>
//         <h1 className="font-wavy text-[40px] uppercase mt-[10px]">
//           Galih & Vio
//         </h1>
//         <p className="font-century text-[14px] mt-[15px] leading-4">
//           Saturday - Sunday,
//           <br />
//           9 - 10 May 2026
//         </p>
//       </div>

//       {/* Teks BAWAH */}
//       <div className="absolute bottom-0 left-0 right-0 px-10 pb-[185px] text-white text-center leading-none">
//         <p className="font-century text-[13px] leading-4">
//           "And above all these things put on love,<br />
//           which is the perfect bond of unity."
//         </p>
//         <p className="font-century text-[13px] mt-[10px]">Colossians 3:14</p>
//       </div>

//     </div>
//   )
// }

// export default Hero