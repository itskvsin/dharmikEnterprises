'use client'

import { useState } from 'react'

// Gallery data — replace src paths with real images in /public/images/
const galleryItems = [
  {
    id: 1,
    src: null, // replace with '/images/embroidery1.jpg'
    alt: 'Corporate Logo Embroidery on Polo Shirts',
    category: 'Logo Stitching',
    tag: 'Corporate',
    colors: { bg: '#1a1208', accent: '#c98a12' },
  },
  {
    id: 2,
    src: null,
    alt: 'School Uniform Batch Embroidery',
    category: 'Uniform',
    tag: 'School',
    colors: { bg: '#12180a', accent: '#6ba832' },
  },
  {
    id: 3,
    src: null,
    alt: '3D Puff Cap Embroidery',
    category: 'Cap / Headwear',
    tag: '3D Puff',
    colors: { bg: '#0a1218', accent: '#3290c9' },
  },
  {
    id: 4,
    src: null,
    alt: 'Bulk Garment Stitching – 5000 Pcs',
    category: 'Bulk Production',
    tag: 'Volume',
    colors: { bg: '#180a12', accent: '#c93290' },
  },
  {
    id: 5,
    src: null,
    alt: 'Woven Patch Manufacturing',
    category: 'Patches',
    tag: 'Woven',
    colors: { bg: '#120a18', accent: '#8a32c9' },
  },
  {
    id: 6,
    src: null,
    alt: 'Hotel Staff Uniform Embroidery',
    category: 'Uniform',
    tag: 'Hospitality',
    colors: { bg: '#181208', accent: '#c9a032' },
  },
  {
    id: 7,
    src: null,
    alt: 'Sports Jersey Logo Stitching',
    category: 'Logo Stitching',
    tag: 'Sports',
    colors: { bg: '#081218', accent: '#32c9a0' },
  },
  {
    id: 8,
    src: null,
    alt: 'Digitizing & File Prep',
    category: 'Digitizing',
    tag: 'Custom',
    colors: { bg: '#180a0a', accent: '#c93232' },
  },
]

const categories = ['All', 'Logo Stitching', 'Uniform', 'Cap / Headwear', 'Bulk Production', 'Patches', 'Digitizing']

// Placeholder SVG for when no real image is available
function PlaceholderImage({ item }: { item: typeof galleryItems[0] }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: item.colors.bg,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* decorative grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 24px,${item.colors.accent}18 24px,${item.colors.accent}18 25px),repeating-linear-gradient(90deg,transparent,transparent 24px,${item.colors.accent}18 24px,${item.colors.accent}18 25px)`,
        }}
      />
      {/* center icon — embroidery needle */}
      <svg width="52" height="52" viewBox="0 0 52 52" style={{ position: 'relative', zIndex: 1, marginBottom: '0.75rem' }}>
        <ellipse cx="26" cy="26" rx="22" ry="22" fill="none" stroke={item.colors.accent} strokeWidth="1.5" strokeDasharray="4 3" />
        <path d="M26 10 L26 42" stroke={item.colors.accent} strokeWidth="1.5" />
        <path d="M16 20 Q26 26 36 20" stroke={item.colors.accent} strokeWidth="1" fill="none" />
        <path d="M16 32 Q26 26 36 32" stroke={item.colors.accent} strokeWidth="1" fill="none" />
        <circle cx="26" cy="26" r="3" fill={item.colors.accent} />
      </svg>
      <p
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          color: item.colors.accent,
          textTransform: 'uppercase',
          position: 'relative',
          zIndex: 1,
          opacity: 0.8,
        }}
      >
        Add Photo
      </p>
    </div>
  )
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightbox, setLightbox] = useState<null | typeof galleryItems[0]>(null)

  const filtered = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter((g) => g.category === activeFilter)

  return (
    <section style={{ background: '#0a0705', padding: '6rem 0' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.65rem',
            letterSpacing: '0.35em',
            color: '#c98a12',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}
        >
          Our Work
        </p>
        <h2
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 600,
            color: '#f7f2e8',
            marginBottom: '2.5rem',
          }}
        >
          Embroidery{' '}
          <em style={{ color: '#c98a12' }}>Gallery</em>
        </h2>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.72rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '0.45rem 1rem',
                borderRadius: '2px',
                border: '1px solid',
                cursor: 'pointer',
                transition: 'all 0.2s',
                borderColor: activeFilter === cat ? '#c98a12' : 'rgba(201,138,18,0.25)',
                color: activeFilter === cat ? '#0a0705' : 'rgba(247,242,232,0.55)',
                background: activeFilter === cat ? '#c98a12' : 'transparent',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1rem',
          }}
        >
          {filtered.map((item, i) => (
            <div
              key={item.id}
              onClick={() => setLightbox(item)}
              style={{
                aspectRatio: i % 5 === 0 ? '16/10' : '4/3',
                borderRadius: '4px',
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
                border: '1px solid rgba(201,138,18,0.15)',
              }}
            >
              {item.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.src}
                  alt={item.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              ) : (
                <PlaceholderImage item={item} />
              )}

              {/* Hover overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10,7,5,0.9) 0%, rgba(10,7,5,0.2) 60%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.25rem',
                  opacity: 0,
                  transition: 'opacity 0.25s',
                }}
                className="gallery-overlay"
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.opacity = '1')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.opacity = '0')}
              >
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.6rem',
                    letterSpacing: '0.25em',
                    color: '#c98a12',
                    textTransform: 'uppercase',
                    marginBottom: '0.25rem',
                  }}
                >
                  {item.tag}
                </span>
                <span
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    color: '#f7f2e8',
                  }}
                >
                  {item.alt}
                </span>
              </div>

              {/* Always-visible category tag */}
              <div
                style={{
                  position: 'absolute',
                  top: '0.75rem',
                  left: '0.75rem',
                  background: 'rgba(10,7,5,0.75)',
                  backdropFilter: 'blur(6px)',
                  border: '1px solid rgba(201,138,18,0.3)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '2px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                    color: '#e4a820',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note to replace images */}
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.72rem',
            color: 'rgba(247,242,232,0.2)',
            textAlign: 'center',
            marginTop: '2rem',
            letterSpacing: '0.05em',
          }}
        >
          Replace placeholder images by adding photos to /public/images/ and updating the src field in Gallery.tsx
        </p>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(10,7,5,0.92)',
            backdropFilter: 'blur(8px)',
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '700px',
              width: '100%',
              border: '1px solid rgba(201,138,18,0.3)',
              borderRadius: '4px',
              overflow: 'hidden',
              background: '#0a0705',
            }}
          >
            <div style={{ aspectRatio: '16/9', position: 'relative' }}>
              {lightbox.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={lightbox.src} alt={lightbox.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <PlaceholderImage item={lightbox} />
              )}
            </div>
            <div style={{ padding: '1.5rem' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', letterSpacing: '0.2em', color: '#c98a12', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                {lightbox.category} · {lightbox.tag}
              </p>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 600, color: '#f7f2e8' }}>
                {lightbox.alt}
              </p>
            </div>
          </div>
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: 'fixed',
              top: '1.5rem',
              right: '1.5rem',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              color: 'rgba(247,242,232,0.5)',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              textTransform: 'uppercase',
            }}
          >
            ✕ Close
          </button>
        </div>
      )}
    </section>
  )
}