"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Opening = ({ setStart, namaTamu = "Sela" }) => {
  const [open, setOpen] = useState(true);

  // useEffect(() => {
  //   document.body.style.overflow = "hidden";
  //   window.scrollTo(0, 0); // AKTIF JIKA USER REFRESH KEMBALI KE SECTION PALING ATAS
  // }, []);

  const handleOpen = () => {
    setOpen(false);
    document.body.style.overflow = "auto";

    setTimeout(() => {
      setStart(true);
    }, 800);
  };

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex justify-center items-center px-4"
        >
          <Image
            src="/images/Cover/FotoCoupleMobil.webp"
            alt="Galih & Vio Wedding Cover"
            fill
            priority
            className="object-cover object-[50%_10%] hidden lg:block"
          />

          <div className="absolute inset-0 z-[10] bg-black/20 lg:bg-black/50 backdrop-blur-md" />

          {/* CONTENT CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 40 }}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="relative bg-[#4E4E4E] rounded-xl md:rounded-2xl overflow-hidden w-[290px] h-[440px] md:w-[416px] md:h-[540px] shadow-xl flex flex-col z-[100]"
          >
            {/* FOTO */}
            <div className="relative w-full h-[180px] md:h-[220px] overflow-hidden z-10">
              <Image
                src="/images/popup/FotoPopup.webp"
                alt="prewed"
                fill
                className="object-cover object-[50%_46%] md:object-[50%_70%] z-50"
              />
            </div>
            
            {/* KONTENT TEXT */}
            <div className="relative z-40 flex flex-col items-center text-center px-4 pt-[24px] lg:pt-[26px] flex-1 leading-none">
              <p className="text-[12px] md:text-[14px] text-[#DADAD9] font-century tracking-wide">
                THE WEDDING OF
              </p>
              <h1 className="text-[36px] lg:text-[48px] text-[#DADAD9] pt-[10px] lg:pt-[14px] font-wavy">
                GALIH & VIO
              </h1>
              <p className="text-[10px] lg:text-[14px] text-[#DADAD9] font-lora lg:font-century pt-[17px] lg:pt-[19px]">
                Dear Mr. / Mrs. / Ms.
              </p>
              <p className="text-[12px] lg:text-[18px] text-[#DADAD9] font-lora lg:font-century pt-[15px]">
                {namaTamu}
              </p>
              <p className="text-[9px] lg:text-[12px] text-[#DADAD9] font-century leading-[1.2] pt-[20px] tracking-wide">
                We sincerely apologize
                <br />
                for any misspelling of names or titles.
              </p>

              {/* BUTTON OPENING */}
              <button
                onClick={handleOpen}
                className="bg-[#DADAD9] flex items-center justify-center text-[#4E4E4E] w-[184px] h-[33px] md:w-[220px] md:h-[40px] rounded-full uppercase font-century text-[12px] lg:text-[18px] mt-[18px]"
              >
                <span className="translate-y-[0.12em]">VIEW Invitation</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Opening;