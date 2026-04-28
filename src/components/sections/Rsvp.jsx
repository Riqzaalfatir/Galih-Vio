"use client";

import React, { useState } from "react";
import Image from "next/image";
import NotifModal from "@/components/popup/NotifModal";
import Animate from "@/components/ui/Animate";

const Rsvp = () => {
  const [pilihan, setPilihan] = useState(null);
  const [modalType, setModalType] = useState(null);

  const handleConfirm = () => {
    if (!pilihan) {
      setModalType("incomplete_rsvp");
      return;
    }
    setModalType("confirm_rsvp");
  };

  const handleFinalConfirm = () => {
    setModalType(null);
    if (pilihan === "hadir") {
      setModalType("rsvp_confirmed_hadir");
    } else {
      setModalType("rsvp_confirmed_tidak_hadir");
    }
  };

  return (
    <>
      <div id="rsvp" className="relative w-full bg-[#F0F0EF]">
        {/* BG Image */}
        <Image
          src="/images/Profile/BgAbu.webp"
          alt=""
          fill
          className="object-cover object-center z-0"
        />

        {/* Konten */}
        <div
          className="relative w-full flex flex-col items-center px-8 z-10"
          style={{
            minHeight: "695px",
            paddingTop: "80px",
            paddingBottom: "101px",
          }}
        >
          <div className="flex flex-col items-center justify-center text-center">
            <Animate type="fadeup">
              <h1 className="font-wavy text-[24px] text-[#4E4E4E]">Rsvp</h1>
            </Animate>

            <Animate type="fadeup">
              <p className="font-century text-[12px] text-[#4E4E4E] mt-[32px]">
                Dear
              </p>
            </Animate>

            <Animate type="fadeup">
              <p className="font-century text-[14px] text-[#4E4E4E] mt-[21px]">
                Sela
              </p>
            </Animate>

            <Animate type="fadeup">
              <p className="font-century text-[14px] text-[#4E4E4E] mt-[21px] tracking-wide">
                Kindly confirm your attendance before
                <br />
                16 May 2026
              </p>
            </Animate>

            {/* BUTTON */}
            <div className="flex items-center justify-center gap-[23px] mt-[37px]">
              <Animate type="fadeleft">
                <button
                  onClick={() => setPilihan("hadir")}
                  className={`h-[33px] w-[146px] flex items-center justify-center font-century text-[12px] rounded-full transition-all border-[0.5px]
      ${
        pilihan === "hadir" || pilihan === null
          ? "bg-[#4E4E4E] text-[#DADAD9] border-[#4E4E4E]"
          : "bg-transparent text-[#4E4E4E] border-[#4E4E4E]"
      }`}
                >
                  ATTEND
                </button>
              </Animate>

              <Animate type="faderight">
                <button
                  onClick={() => setPilihan("tidak_hadir")}
                  className={`h-[33px] w-[148px] flex items-center justify-center font-century text-[12px] rounded-full transition-all border-[0.5px]
      ${
        pilihan === "tidak_hadir"
          ? "bg-[#4E4E4E] text-[#DADAD9] border-[#4E4E4E]"
          : "bg-transparent text-[#4E4E4E] border-[#4E4E4E]"
      }`}
                >
                  UNABLE TO ATTEND
                </button>
              </Animate>
            </div>

            <Animate type="fadeup">
              <h3 className="font-century text-[14px] text-[#4E4E4E] mt-[36px]">
                Confirm your selection?
              </h3>
            </Animate>

            {/* BUTTON CONFIRM */}
            <Animate type="fadeup">
              <button
                onClick={handleConfirm}
                className="h-[33px] w-[222px] bg-[#4E4E4E] hover:bg-[#6B6B6B] active:bg-[#3A3A3A] transition-colors duration-200 text-white uppercase font-century text-[12px] rounded-full flex items-center justify-center mt-[37px]"
              >
                {pilihan === "hadir"
                  ? "CONFIRM ATTEND"
                  : pilihan === "tidak_hadir"
                    ? "CONFIRM UNABLE TO ATTEND"
                    : "CONFIRM"}
              </button>
            </Animate>

            <Animate type="fadeup">
              <p className="font-century text-[12px] text-[#4E4E4E] mt-[44px] tracking-wide">
                If you need assistance with your RSVP,
                <br />
                please contact our support team.
              </p>
            </Animate>

            <Animate type="fadeup">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="h-[33px] w-[160px] bg-[#12877B] hover:bg-[#0F6B61] active:bg-[#0A4F47] transition-colors duration-200 text-white flex items-center justify-center font-century text-[12px] rounded-full gap-[8px] mt-[24px]"
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
            </Animate>
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
  );
};

export default Rsvp;
