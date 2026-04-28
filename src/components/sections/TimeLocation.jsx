import React from "react";
import Animate from "@/components/ui/Animate";

const TimeLocation = () => {
  return (
    <div
      id="time"
      className="w-full flex flex-col items-center bg-[#4E4E4E]"
      style={{ minHeight: "862px" }}
    >
      {/* ── CARD ── */}
      <div
        className="w-[301px] flex flex-col items-center px-4 pt-[33px] bg-[#D9D9D9] rounded-[30px] z-10"
        style={{ minHeight: "780px" }}
      >
        <Animate type="fadeup">
          <p className="font-century text-[10px] uppercase text-[#4E4E4E]">
            Save the Date
          </p>
        </Animate>

        <Animate type="fadeup">
          <h2 className="font-wavy text-[24px] text-[#4E4E4E] text-center mt-[2px]">
            Time & Location
          </h2>
        </Animate>

        <div className="flex flex-col items-center w-full">
          <Animate type="fadeup">
            <h3 className="font-century text-[20px] text-[#4E4E4E] text-center mt-[31px]">
              HOLY MATRIMONY
            </h3>
          </Animate>

          <Animate type="fadeup">
            <p className="font-century text-[14px] text-[#4E4E4E] text-center mt-[27px] tracking-wide">
              Saturday, 9 May 2026
            </p>
          </Animate>

          <Animate type="fadeup">
            <p className="font-century text-[14px] text-[#4E4E4E] text-center pt-[5px]">
              10.00 WIB
            </p>
          </Animate>

          <Animate type="fadeup">
            <p className="font-century text-[12px] text-[#4E4E4E] text-center leading-relaxed pt-[28px]">
              Gereja Kristus Cibinong (GKC)
              <span className="block pt-[5px]">
                Jl. Raya Jakarta Bogor, KM 42,5,
              </span>
              <span className="block">Cibinong, Kab Bogor</span>
            </p>
          </Animate>

          <Animate type="fadeup">
            <a
              href="https://maps.app.goo.gl/ggAaxMkds2SPAT3o6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4E4E4E] hover:bg-[#6B6B6B] active:bg-[#3A3A3A] transition-colors duration-200 font-century text-[12px] uppercase w-[160px] h-[33px] text-white flex items-center justify-center rounded-full mt-[15px]"
            >
              Google Maps
            </a>
          </Animate>
        </div>

        {/* Dot divider */}
        <Animate type="fadein">
          <div className="w-[12px] h-[12px] rounded-full bg-[#4E4E4E] mt-[61px] mb-[60px]" />
        </Animate>

        {/* ── RECEPTION ── */}
        <div className="flex flex-col items-center w-full">
          <Animate type="fadeup">
            <h3 className="font-century text-[20px] text-[#4E4E4E] text-center">
              RECEPTION
            </h3>
          </Animate>

          <Animate type="fadeup">
            <p className="font-century text-[14px] text-[#4E4E4E] text-center mt-[27px]">
              Sunday, 10 May 2026
            </p>
          </Animate>
          <Animate type="fadeup">
            <p className="font-century text-[14px] text-[#4E4E4E] text-center pt-[5px]">
              18.00 WIB
            </p>
          </Animate>

          <Animate type="fadeup">
            <p className="font-century text-[12px] text-[#4E4E4E] text-center mt-[30px] tracking-wide">
              Resinda Hotel Karawang
              <span className="block pt-[5px]">Jl. Resinda Raya no 1,</span>
              <span className="block">Karawang, Jawa Barat</span>
            </p>
          </Animate>

          <Animate type="fadeup">
            <a
              href="https://maps.app.goo.gl/2qRWLoaf2AkhJ56f8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4E4E4E] hover:bg-[#6B6B6B] active:bg-[#3A3A3A] transition-colors duration-200 font-century text-[12px] uppercase w-[160px] h-[33px] text-white flex items-center justify-center mt-[15px] rounded-full"
            >
              Google Maps
            </a>
          </Animate>
        </div>
      </div>
    </div>
  );
};

export default TimeLocation;
