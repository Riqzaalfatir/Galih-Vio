"use client";

import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);

  const linkMenu = [
    { name: "HOME", link: "#hero" },
    { name: "PROFILE", link: "#hero" },
    { name: "OUR STORY", link: "#tanggal" },
    { name: "TIME & LOCATION", link: "#rsvp" },
    { name: "RSVP", link: "#galleri" },
    { name: "GALLERY", link: "#galleri" },
    { name: "WEDDING GIFT", link: "#galleri" },
  ];

  const container = {
    hidden: {
      transition: {
        staggerChildren: 0.08,
        staggerDirection: -1,
      },
    },
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10, skewX: -10 },
    show: {
      opacity: 1,
      x: 0,
      skewX: 0,
      transition: {
        duration: 1,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
   <div
  className="fixed top-0 left-0 w-full z-50 px-4 py-3 lg:left-auto lg:right-0 lg:w-[435px] lg:px-5 lg:py-4"
  style={{ willChange: "transform", transform: "translateZ(0)" }}
>

      {/* HAMBURGER */}
      {!open && (
        <motion.button
          onClick={() => setOpen(true)}
          whileTap={{ scale: 0.92 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
          className="text-[#C3C3C3] text-[28px] lg:text-[30px]"
        >
          <FiMenu />
        </motion.button>
      )}

      {/* DROPDOWN */}
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.3 },
            }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            style={{ originX: 0, originY: 0 }}
            className="absolute top-[12px] left-[18px] lg:top-5 lg:left-5 bg-[#7B7B7B]/70 py-4 px-5 lg:py-6 lg:px-7 text-white w-[255px] lg:w-[424px]"
          >

            {/* CLOSE X */}
            <motion.button
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute top-[-12px] left-[6px] lg:top-[-2px] lg:left-[2px]"
            >
              <p className="text-[32px] lg:text-[48px] text-white font-ibm">
                x
              </p>
            </motion.button>

            {/* MENU */}
            <motion.ul
              variants={container}
              initial="hidden"
              animate="show"
              className="pt-4 lg:pt-8 pl-2 lg:pl-4 space-y-1 lg:space-y-3 text-[12px] lg:text-[14px] font-noto tracking-[0.2em] text-white font-medium flex flex-col"
            >
              {linkMenu.map((menu) => (
                <motion.a
                  key={menu.name}
                  href={menu.link}
                  variants={itemVariants}
                  onClick={() => {
                    setTimeout(() => setOpen(false), 200);
                  }}
                  className="group relative flex items-center cursor-pointer"
                >
                  {/* PANAH */}
                  <span className="absolute left-0 opacity-0 transition-all duration-500 ease-out group-hover:opacity-100">
                    →
                  </span>

                  {/* TEXT */}
                  <span className="transition-all duration-300 ease-out group-hover:translate-x-[18px] lg:group-hover:translate-x-[20px]">
                    {menu.name}
                  </span>
                </motion.a>
              ))}
            </motion.ul>

            {/* TEXT BAWAH */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
              className="pt-[17px] lg:pt-10 pl-2 lg:pl-4 text-[10px] lg:text-[12px] font-sans font-light pb-2 lg:pb-3"
            >
              Select a section above to continue
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;