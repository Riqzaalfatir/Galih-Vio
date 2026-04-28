"use client";

import { dummyPesan } from "@/components/data/wishes";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import WishesCard from "../popup/WishesCard";

const Wishes = () => {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [pesanList, setPesanList] = useState(dummyPesan);

  const handleSubmit = () => {
    if (!nama || !pesan) {
      alert("Please fill in all fields");
      return;
    }

    const newPesan = {
      id: Date.now(),
      nama,
      pesan,
    };

    setPesanList((prev) => [newPesan, ...prev]);
    setShowPopup(true);
    setNama("");
    setPesan("");
  };

  useEffect(() => {
    const saved = localStorage.getItem("pesan");
    if (saved) {
      setPesanList(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pesan", JSON.stringify(pesanList));
  }, [pesanList]);

  return (
    <>
      <section
        className="relative w-full flex flex-col items-center px-8 bg-[#F0F0EF] z-10"
        style={{
          minHeight: "808px",
          paddingTop: "80px",
          paddingBottom: "99px",
          backgroundImage: "url(/images/Profile/BgAbu.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-[284px] mx-auto">
          <div className="flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2,
              }}
              className="font-wavy text-[24px] text-[#4E4E4E]"
            >
              Share Your Wishes
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2,
              }}
              className="w-full flex flex-col gap-[20px] mt-[25px]"
            >
              <input
                type="text"
                value={nama}
                placeholder="Desy (Tester)"
                onChange={(e) => setNama(e.target.value)}
                className="w-full text-[#4E4E4E] font-century border-[1px] text-[12px] bg-transparent  border-[#4E4E4E]/50 px-[12px] h-[33px] rounded-full outline-none placeholder:text-[#4E4E4E]/50"
              />
              <textarea
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
                className="w-full text-[#4E4E4E] font-century border-[1px] text-[12px] bg-transparent  border-[#4E4E4E]/50 px-[12px] h-[60px] rounded-xl outline-none placeholder:text-[#4E4E4E]/50 resize-none"
              />

              <button
                onClick={handleSubmit}
                className="bg-[#4E4E4E]  hover:bg-[#6B6B6B] active:bg-[#3A3A3A] transition-colors duration-200 rounded-full h-[33px] text-[12px] font-century uppercase flex items-center justify-center gap-1.5 text-[#FEFBF0]"
              >
                <Image
                  src="/images/Wishes/Panah.svg"
                  alt="Kirim"
                  width={15}
                  height={19}
                  className="object-cover w-[15px] h-[19px]"
                />
                Send
              </button>

              {/* PESAN */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2,
                }}
                className={`w-full  ${
                  showAll
                    ? "bg-transparent"
                    : "bg-[#4E4E4E] rounded-2xl h-[329px] overflow-y-auto"
                }`}
              >
                {!showAll ? (
                  <div>
                    {/* TOP PENUTUP BATAS */}
                    <div className="sticky top-0 w-full h-[18px] bg-[#4E4E4E] z-10" />

                    {/* ISI */}
                    <div className="px-[15px] py-[2px]">
                      {pesanList.slice(0, 8).map((item, index, array) => (
                        <div key={item.id}>
                          <p className="text-[#DADAD9] font-century text-[13px] mb-[3px]">
                            {item.nama}
                          </p>
                          <p className="text-[#DADAD9] font-century text-[12px] tracking-[0.5px]">
                            {item.pesan}
                          </p>
                          {index !== array.length - 1 && (
                            <div className="border-t border-[#DADAD9]/40 mt-[8px] mb-[15px]" />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* BOTTOM PENUTUP */}
                    <div className="sticky bottom-0 w-full h-[18px] bg-[#4E4E4E] z-10" />
                  </div>
                ) : (
                  <div className="w-full">
                    <motion.div
                      layout
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.1 } },
                      }}
                      className="grid grid-cols-2 gap-[2vw] lg:gap-[1vw]"
                    >
                      {/* LIST PESAN CARD */}
                      {pesanList.map((item) => (
                        <motion.div
                          key={item.id}
                          variants={{
                            hidden: { opacity: 0, y: 50, scale: 0.95 },
                            visible: { opacity: 1, y: 0, scale: 1 },
                          }}
                          transition={{
                            duration: 1.5,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          onClick={() => setSelectedMessage(item)}
                          className=" rounded-md overflow-hidden shadow-md bg-[#F4F8F5] flex flex-col cursor-pointer"
                        >
                          <div className="p-[10px] font-creators relative flex-1 flex flex-col justify-center">
                            <p className="absolute top-[8px] left-[10px] text-[22px] font-bold font-century text-slate-600 ">
                              "
                            </p>

                            <p className="font-lora text-[12px] text-[#4E4E4E] text-center mt-6 mb-2 line-clamp-4">
                              {item.pesan}
                            </p>
                          </div>

                          <div className="bg-[#4E4E4E] font-century h-[35px] flex items-center justify-center px-6]">
                            <p className="text-white text-center line-clamp-1 text-[13px]">
                              {item.nama}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                )}
              </motion.div>

              <WishesCard
                data={selectedMessage}
                onClose={() => setSelectedMessage(null)}
              />

              <motion.button
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2,
                }}
                onClick={() => setShowAll(!showAll)}
                className="bg-[#4E4E4E]  hover:bg-[#6B6B6B] active:bg-[#3A3A3A] transition-colors duration-200 rounded-full h-[33px] text-[12px] font-century uppercase flex items-center justify-center gap-1.5 text-[#FEFBF0]"
              >
                <Image
                  src="/images/Wishes/Pesan.svg"
                  alt="Kirim"
                  width={18}
                  height={20}
                  className="object-cover w-[15px] h-[19px]"
                />
                {showAll ? "BACK" : "See all message"}
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* POPUP KETIKA PESAN DIKIRIM */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
            <div className="bg-[#F7F8F2] rounded-2xl p-6 w-[340px] text-center shadow-xl border border-[#E4E7D6]">
              <h3 className="text-[22px] font-lora font-semibold text-[#4E4E4E] mb-3 tracking-wide">
                Pesan Terkirim !
              </h3>
              <div className="w-10 h-[2px] bg-[#4E4E4E] mx-auto mb-4 opacity-60" />
              <p className="text-[16px] text-[#4E4E4E] font-lora leading-relaxed mb-6">
                Terima kasih atas doa dan ucapan baik Anda. Kami sangat
                menghargai pesan yang telah diberikan.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-[#4E4E4E] transition-all text-white px-6 py-2 rounded-full text-[14px] tracking-wide font-sweetsans"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Wishes;
