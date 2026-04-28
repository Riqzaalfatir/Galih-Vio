"use client"

import React, { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import Lightbox from "yet-another-react-lightbox"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import Counter from "yet-another-react-lightbox/plugins/counter"

import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/thumbnails.css"
import "yet-another-react-lightbox/plugins/counter.css"



const photos = [
  '/images/Gallery/FotoCouple1.png',
  '/images/Gallery/FotoCouple1.png',
  '/images/Gallery/FotoCouple1.png',
]

// ⏱️ Ganti angka ini untuk atur kecepatan auto-geser (dalam milidetik)
// Contoh: 3000 = 3 detik, 5000 = 5 detik
const AUTOPLAY_DELAY = 4000

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const scrollPosRef = useRef(0)

  const autoplayPlugin = useRef(
    Autoplay({ delay: AUTOPLAY_DELAY, stopOnInteraction: false })
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [autoplayPlugin.current]
  )

  const prev = useCallback(() => {
  autoplayPlugin.current.stop()
  emblaApi?.scrollPrev()
  autoplayPlugin.current.reset()
}, [emblaApi])

const next = useCallback(() => {
  autoplayPlugin.current.stop()
  emblaApi?.scrollNext()
  autoplayPlugin.current.reset()
}, [emblaApi])

  const handlePhotoClick = useCallback((index) => {
    scrollPosRef.current = window.scrollY
    setLightboxIndex(index)
    setLightboxOpen(true)
  }, [])

  const handleClose = () => {
    setLightboxOpen(false)
    setTimeout(() => {
      window.scrollTo({ top: scrollPosRef.current, behavior: 'instant' })
    }, 10)
  }

  return (
    <>
      <section id='gallery'
        // style={{ backgroundColor: '#4E4E4E' }}
        className="w-full flex items-center justify-center"
      >
        <div
          className="relative flex items-center justify-center w-full"
          style={{ paddingTop: '45px', paddingBottom: '40px' }}
        >
          {/* Tombol Prev */}

          <button
            onClick={prev}
            className="absolute left-14 md:left-60 lg:left-14 z-10 flex items-center justify-center"
            style={{ top: '45px', bottom: '40px', width: '42px' }}
            aria-label="Previous"
          >
            <img src="/images/Gallery/PanahKiri.svg" className="w-[42px] h-[52px]" />
          </button>

          {/* Embla viewport */}
          <div
            className="overflow-hidden flex-shrink-0"
            style={{ width: '348px', height: '460px' }}
            ref={emblaRef}
          >
            <div className="flex h-full">
              {photos.map((src, index) => (
                <div
                  key={index}
                  className="relative flex-none cursor-pointer"
                  style={{ width: '348px', height: '460px' }}
                  onClick={() => handlePhotoClick(index)}
                >
                  <Image
                    src={src}
                    alt={`Gallery photo ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Tombol Next */}
          <button
            onClick={next}
            className="absolute right-14 md:right-60 lg:right-14 z-10 flex items-center justify-center"
            style={{ top: '45px', bottom: '40px', width: '42px' }}
            aria-label="Next"
          >
            <img src="/images/Gallery/PanahKanan.svg" className="w-[42px] h-[52px]" />
          </button>
        </div>
      </section>

      <Lightbox
        open={lightboxOpen}
        close={handleClose}
        index={lightboxIndex}
        slides={photos.map((src) => ({ src }))}
        plugins={[Thumbnails, Zoom, Counter]}
        noScroll={{ disabled: true }}
      />
    </>
  )
}

export default Gallery