// app/page.jsx
"use client";

import { useState } from "react";
import DekstopCover from "@/components/layout/DekstopCover";
import Header from "@/components/layout/Header";
import VideoBackground from "@/components/layout/VideoBackground";
import Hero from "@/components/sections/Hero";
import Profile from "@/components/sections/Profile";
import OurStory from "@/components/sections/OurStory";
import TimeLocation from "@/components/sections/TimeLocation";
import Gallery from "@/components/sections/Gallery";
import Rsvp from "@/components/sections/Rsvp";
import WeddingGift from "@/components/sections/WeddingGift";
import Wishes from "@/components/sections/Wishes";
import ThankYou from "@/components/sections/ThankYou";
import Opening from "@/components/popup/Opening";

export default function Home() {
  const [start, setStart] = useState(false);

  return (
    <div className="desktop-layout">
      <Opening setStart={setStart} namaTamu="Sela" />

      <aside className="cover-panel">
        <DekstopCover />
      </aside>

      <main className="sections-panel relative">
        <Header />

        {/*
          VIDEO LAYER — sticky, tidak mendorong konten
          -mb-[100vh] membuat elemen berikutnya overlap di atas video
        */}
        <VideoBackground start={start} />

        {/* ── HERO: teks di atas video, h-screen ── */}
        <Hero />

        {/* ── PROFILE: bg solid → video tertutup ── */}
        <Profile />

        {/* ── VIDEO SECTIONS: bg transparan → video terlihat ── */}
        <OurStory />
        <TimeLocation />
                <Rsvp />

        <Gallery />

        {/* ── SOLID SECTIONS: bg sendiri → video tertutup ── */}
        <WeddingGift />
        <Wishes />
        <ThankYou />
      </main>
    </div>
  );
}