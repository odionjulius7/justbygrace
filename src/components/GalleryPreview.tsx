import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, Heart } from 'lucide-react'
import { Badge } from './ui/Badge'

interface PhotoItem {
  id: string
  url: string
  title: string
  category: 'engagement' | 'travels' | 'candid'
  aspect: string
}

export const GalleryPreview: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const photos: PhotoItem[] = [
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      title: 'Golden Hour at the Provence Vineyard',
      category: 'engagement',
      aspect: 'col-span-1 md:col-span-2 row-span-2',
    },
    {
      id: '2',
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
      title: 'Handcrafted Botanical Details',
      category: 'candid',
      aspect: 'col-span-1 row-span-1',
    },
    {
      id: '3',
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
      title: 'Laughter by the Lake in Annecy',
      category: 'travels',
      aspect: 'col-span-1 row-span-1',
    },
    {
      id: '4',
      url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80',
      title: 'A Quiet Whisper of Devotion',
      category: 'engagement',
      aspect: 'col-span-1 row-span-1',
    },
    {
      id: '5',
      url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80',
      title: 'Walking Hand in Hand into Tomorrow',
      category: 'travels',
      aspect: 'col-span-1 row-span-1',
    },
  ]

  const filteredPhotos =
    activeCategory === 'all'
      ? photos
      : photos.filter((p) => p.category === activeCategory)

  const categories = [
    { id: 'all', label: 'All Moments' },
    { id: 'engagement', label: 'Engagement' },
    { id: 'travels', label: 'Adventures' },
    { id: 'candid', label: 'Quiet Moments' },
  ]

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <Badge variant="champagne" className="mb-3">
          Memories
        </Badge>
        <h2 className="font-serif text-4xl sm:text-5xl text-[#2C2724] font-normal tracking-tight mb-4">
          Moments in Grace
        </h2>
        <p className="max-w-xl mx-auto text-[#6D6154] text-base font-light mb-8">
          A glimpse into the chapters we've shared together, captured through soft natural light and genuine smiles.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#C5A059] text-white shadow-sm'
                  : 'bg-white/80 text-[#5C5144] hover:bg-[#EDE5D5] border border-[#EBE3D3]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[240px]"
      >
        <AnimatePresence>
          {filteredPhotos.map((photo) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={photo.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm ${photo.aspect}`}
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-[11px] text-[#DFBA73] uppercase tracking-wider font-semibold mb-1">
                  {photo.category}
                </span>
                <p className="text-white font-serif text-lg leading-tight flex items-center justify-between">
                  <span>{photo.title}</span>
                  <ZoomIn className="w-4 h-4 text-white/80" />
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] bg-[#1E1B18] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />

              <div className="p-5 bg-[#1E1B18] text-white flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-xl">{selectedPhoto.title}</h4>
                  <span className="text-xs text-[#DFBA73] capitalize">
                    {selectedPhoto.category} collection
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#B2A494]">
                  <Heart className="w-4 h-4 text-[#DFBA73] fill-current" />
                  <span>Just By Grace</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
