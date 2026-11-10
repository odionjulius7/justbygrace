import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Film,
  Camera,
  X,
  Maximize2,
  Sparkles,
  Volume2,
  VolumeX,
} from 'lucide-react'
import { Badge } from './ui/Badge'

interface MediaItem {
  id: string
  type: 'photo' | 'video'
  src: string
  title: string
  tag: string
  poster?: string
}

export const MediaSlider: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'photo' | 'video'>('all')
  const [selectedPhoto, setSelectedPhoto] = useState<MediaItem | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<MediaItem | null>(null)
  const [activeVideoMuted, setActiveVideoMuted] = useState(true)

  const sliderRef = useRef<HTMLDivElement>(null)

  // Julius & Temi's actual photos from Wedding Photos folder
  const photoItems: MediaItem[] = Array.from({ length: 15 }, (_, i) => {
    const num = String(i + 1).padStart(2, '0')
    const titles = [
      'Radiant Smiles & Grace',
      'Together in Love',
      'The Look of Forever',
      'Covenant Bound in Faith',
      'Graceful Elegance',
      'Cherished Harmony',
      'Sweetest Whispers',
      'A Love Guided by Grace',
      'Moments of Pure Joy',
      'Gentle Devotion',
      'Laughter & Sunshine',
      'Walking Hand in Hand',
      'A Sacred Promise',
      'Our Blessed Beginning',
      'Joy In The Journey',
    ]
    return {
      id: `p-${num}`,
      type: 'photo',
      src: `/media/photos/photo-${num}.jpg`,
      title: titles[i] || `Julius & Temi • Moment ${i + 1}`,
      tag: 'Photo Moment',
    }
  })

  // Julius & Temi's actual videos from Wedding Photos folder
  const videoItems: MediaItem[] = Array.from({ length: 7 }, (_, i) => {
    const num = String(i + 1).padStart(2, '0')
    const titles = [
      'Capturing the Glow of Love',
      'Laughter, Life & Grace',
      'Celebration in Motion',
      'Glimpses of Forever',
      'Behind the Sweet Smiles',
      'Dancing into Our Future',
      'Unscripted Devotion',
    ]
    return {
      id: `v-${num}`,
      type: 'video',
      src: `/media/videos/video-${num}.mp4`,
      title: titles[i] || `Julius & Temi • Video Highlight ${i + 1}`,
      tag: 'Video Highlight',
    }
  })

  // Interleave or combine based on filter
  const allMedia: MediaItem[] = [
    photoItems[0],
    videoItems[0],
    photoItems[1],
    photoItems[2],
    videoItems[1],
    photoItems[3],
    videoItems[2],
    photoItems[4],
    photoItems[5],
    videoItems[3],
    photoItems[6],
    photoItems[7],
    videoItems[4],
    photoItems[8],
    videoItems[5],
    photoItems[9],
    videoItems[6],
    ...photoItems.slice(10),
  ]

  const mediaList =
    filter === 'all'
      ? allMedia
      : filter === 'photo'
      ? photoItems
      : videoItems

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="media-showcase"
      className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF8F5] via-[#F6F0E6] to-[#FAF8F5] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header & Badges */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Badge variant="gold">Our Precious Memories</Badge>
            <Badge variant="champagne">Theme: #JustByGrace</Badge>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2C2724] font-normal tracking-tight mb-4">
            Julius & Temi’s Moments & Film
          </h2>
          <p className="max-w-2xl mx-auto text-[#6D6154] text-base font-light">
            Slide through our personal photo gallery and video moments as we count down to our wedding celebration in Ijegun.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer flex items-center gap-2 ${
                filter === 'all'
                  ? 'bg-[#C5A059] text-white shadow-md'
                  : 'bg-white/85 text-[#5C5144] hover:bg-[#EDE5D5] border border-[#EBE3D3]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              All Moments ({allMedia.length})
            </button>
            <button
              onClick={() => setFilter('photo')}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer flex items-center gap-2 ${
                filter === 'photo'
                  ? 'bg-[#AA7C11] text-white shadow-md'
                  : 'bg-white/85 text-[#5C5144] hover:bg-[#EDE5D5] border border-[#EBE3D3]'
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              Photos ({photoItems.length})
            </button>
            <button
              onClick={() => setFilter('video')}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer flex items-center gap-2 ${
                filter === 'video'
                  ? 'bg-[#1B4D3E] text-white shadow-md'
                  : 'bg-white/85 text-[#5C5144] hover:bg-[#EDE5D5] border border-[#EBE3D3]'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              Videos & Film ({videoItems.length})
            </button>
          </div>
        </div>

        {/* Sliding Navigation Buttons */}
        <div className="flex items-center justify-end gap-3 mb-6 px-2">
          <button
            onClick={() => scrollSlider('left')}
            className="w-11 h-11 rounded-full bg-white/90 border border-[#E0D5C1] shadow-sm flex items-center justify-center text-[#5C5144] hover:bg-[#C5A059] hover:text-white hover:border-[#C5A059] transition-all cursor-pointer"
            aria-label="Slide Left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollSlider('right')}
            className="w-11 h-11 rounded-full bg-white/90 border border-[#E0D5C1] shadow-sm flex items-center justify-center text-[#5C5144] hover:bg-[#C5A059] hover:text-white hover:border-[#C5A059] transition-all cursor-pointer"
            aria-label="Slide Right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Horizontal Cinema Slider with generous spacing ("sliding to have space") */}
        <div
          ref={sliderRef}
          className="flex gap-7 overflow-x-auto pb-8 pt-2 px-2 scrollbar-none snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {mediaList.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 5) * 0.08 }}
              className="snap-start shrink-0 w-[300px] sm:w-[360px] md:w-[400px] h-[500px] sm:h-[540px] rounded-3xl overflow-hidden bg-[#1E1B18] shadow-lg border border-[#E8DFCF] relative group cursor-pointer"
            >
              {item.type === 'photo' ? (
                /* Photo Slide Card */
                <div
                  className="w-full h-full relative overflow-hidden"
                  onClick={() => setSelectedPhoto(item)}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-between p-6">
                    <div className="flex justify-between items-start">
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-medium tracking-wider uppercase border border-white/20">
                        {item.tag}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>

                    <div>
                      <h4 className="font-serif text-2xl text-white font-medium mb-1 drop-shadow-sm">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#E3D4BC] tracking-wider uppercase font-sans">
                        Julius & Temi • #JustByGrace
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                /* Video Slide Card */
                <div
                  className="w-full h-full relative overflow-hidden bg-black flex items-center justify-center"
                  onClick={() => setSelectedVideo(item)}
                >
                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                    onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play().catch(() => {})}
                    onMouseLeave={(e) => {
                      const v = e.currentTarget as HTMLVideoElement
                      v.pause()
                      v.currentTime = 0
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30 flex flex-col justify-between p-6 pointer-events-none">
                    <div className="flex justify-between items-start">
                      <span className="px-3 py-1 rounded-full bg-[#1B4D3E]/80 backdrop-blur-md text-white text-[11px] font-medium tracking-wider uppercase border border-white/20 flex items-center gap-1.5">
                        <Film className="w-3 h-3 text-[#DFBA73]" />
                        {item.tag}
                      </span>
                    </div>

                    {/* Central Play Badge */}
                    <div className="w-16 h-16 rounded-full bg-[#D4AF37]/90 text-white flex items-center justify-center mx-auto shadow-2xl backdrop-blur-md group-hover:scale-110 group-hover:bg-[#D4AF37] transition-all">
                      <Play className="w-7 h-7 fill-current ml-1" />
                    </div>

                    <div>
                      <h4 className="font-serif text-2xl text-white font-medium mb-1 drop-shadow-sm">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#E3D4BC] tracking-wider uppercase font-sans flex items-center gap-2">
                        <span>Click to Watch in Cinema Mode</span>
                        <span className="text-[#D4AF37]">•</span>
                        <span>Sound Available</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Sliding Indicator Hint */}
        <div className="text-center mt-6">
          <p className="text-xs text-[#8C7A68] tracking-widest uppercase flex items-center justify-center gap-2">
            <span>← Swipe or slide to explore all {mediaList.length} media items →</span>
          </p>
        </div>
      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] bg-[#1A1816] rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black/90 transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  className="max-h-[75vh] w-auto object-contain"
                />
              </div>

              <div className="p-6 bg-[#1A1816] border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-white">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-white">
                    {selectedPhoto.title}
                  </h3>
                  <span className="text-xs text-[#C5A059] tracking-wider uppercase">
                    Julius & Temi • Wedding Celebration • #JustByGrace
                  </span>
                </div>
                <div className="text-xs text-[#A89C8F]">
                  Saturday, 27th February 2027 • Ijegun, Lagos
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cinematic Video Player Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-[#1A1816] rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
            >
              <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                <button
                  onClick={() => setActiveVideoMuted(!activeVideoMuted)}
                  className="w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black/90 transition-colors cursor-pointer"
                  aria-label="Toggle Sound"
                >
                  {activeVideoMuted ? (
                    <VolumeX className="w-5 h-5 text-red-300" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-green-300" />
                  )}
                </button>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black/90 transition-colors cursor-pointer"
                  aria-label="Close Video Player"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative bg-black flex items-center justify-center aspect-video max-h-[70vh]">
                <video
                  src={selectedVideo.src}
                  controls
                  autoPlay
                  muted={activeVideoMuted}
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 bg-[#1A1816] border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-white">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-white">
                    {selectedVideo.title}
                  </h3>
                  <span className="text-xs text-[#C5A059] tracking-wider uppercase">
                    Cinematic Film Highlight • Julius & Temi • #JustByGrace
                  </span>
                </div>
                <div className="text-xs text-[#A89C8F]">
                  Theme: JustByGrace • Ijegun, Lagos
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
