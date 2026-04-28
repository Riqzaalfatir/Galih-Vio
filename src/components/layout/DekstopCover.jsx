import React from "react";
import Image from "next/image";
import Animate from "@/components/ui/Animate";

const DesktopCover = () => {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ minHeight: "1020px", height: "100dvh" }}
    >
      <Image
        src="/images/Cover/hd.webp"
        alt="Galih & Vio Wedding Cover"
        fill
        priority
        className="object-cover object-[50%_15%]"
      />

      <div className="absolute inset-0 flex flex-col justify-end items-center text-white text-center px-10 pb-[5%] tracking-wide">

        <Animate type="fadeup">
          <p className="font-century text-[20px] text-white uppercase">
            The Wedding of
          </p>
        </Animate>

        <Animate type="fadeup">
          <h1 className="font-wavy text-[64px] uppercase">Galih & Vio</h1>
        </Animate>

        <Animate type="fadeup">
          <p className="font-century text-[20px] leading-6">
            Saturday · Sunday,
            <br />9 · 10 May 2026
          </p>
        </Animate>
      </div>
    </div>
  );
};

export default DesktopCover;
