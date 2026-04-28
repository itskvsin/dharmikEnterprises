"use client";

import Image from "next/image";
import { useState } from "react";

// Gallery data — replace src paths with real images in /public/images/
const galleryItems = [
  {
    id: 1,
    src: "/images/gallery/img1.JPG",
    alt: "Corporate Logo Embroidery on Polo Shirts",
    category: "Logo Stitching",
    colors: { bg: "#1a1208", accent: "#c98a12" },
  },
  {
    id: 2,
    src: "/images/gallery/img2.JPG",
    alt: "School Uniform Batch Embroidery",
    category: "Uniform",
    colors: { bg: "#12180a", accent: "#6ba832" },
  },
  {
    id: 3,
    src: "/images/gallery/img3.jpg",
    alt: "3D Puff Cap Embroidery",
    category: "Cap / Headwear",
    colors: { bg: "#0a1218", accent: "#3290c9" },
  },
  {
    id: 4,
    src: "/images/gallery/img4.JPG",
    alt: "Bulk Garment Stitching – 5000 Pcs",
    category: "Bulk Production",
    colors: { bg: "#180a12", accent: "#c93290" },
  },
  {
    id: 5,
    src: "/images/gallery/img5.JPG",
    alt: "Woven Patch Manufacturing",
    category: "Patches",
    colors: { bg: "#120a18", accent: "#8a32c9" },
  },
  {
    id: 6,
    src: "/images/gallery/img6.JPG",
    alt: "Hotel Staff Uniform Embroidery",
    category: "Uniform",
    colors: { bg: "#181208", accent: "#c9a032" },
  },
  {
    id: 7,
    src: "/images/gallery/img7.JPG",
    alt: "Sports Jersey Logo Stitching",
    category: "Logo Stitching",
    colors: { bg: "#081218", accent: "#32c9a0" },
  },
  {
    id: 8,
    src: "/images/gallery/img8.jpg",
    alt: "Digitizing & File Prep",
    category: "Digitizing",
    colors: { bg: "#180a0a", accent: "#c93232" },
  },
  {
    id: 9,
    src: "/images/gallery/img9.JPG",
    alt: "Custom Jacket Embroidery",
    category: "Logo Stitching",
    colors: { bg: "#101010", accent: "#ffaa00" },
  },
  {
    id: 10,
    src: "/images/gallery/img10.jpg",
    alt: "Industrial Bulk Stitching",
    category: "Bulk Production",
    colors: { bg: "#0f1418", accent: "#00c2ff" },
  },
  {
    id: 11,
    src: "/images/gallery/img11.JPG",
    alt: "Cap Branding",
    category: "Cap / Headwear",
    colors: { bg: "#140f0a", accent: "#ff6600" },
  },
  {
    id: 12,
    src: "/images/gallery/img12.jpg",
    alt: "School Logo Stitch",
    category: "Uniform",
    colors: { bg: "#0a1412", accent: "#00ffaa" },
  },
  {
    id: 13,
    src: "/images/gallery/img13.JPG",
    alt: "Patch Design Work",
    category: "Patches",
    colors: { bg: "#1a0a14", accent: "#ff00aa" },
  },
  {
    id: 14,
    src: "/images/gallery/img14.jpg",
    alt: "Corporate Branding Work",
    category: "Logo Stitching",
    colors: { bg: "#0a0f18", accent: "#3388ff" },
  },
  {
    id: 15,
    src: "/images/gallery/img15.JPG",
    alt: "Hotel Uniform Logo",
    category: "Uniform",
    colors: { bg: "#18120a", accent: "#ffaa33" },
  },
  {
    id: 16,
    src: "/images/gallery/img16.JPG",
    alt: "Sportswear Embroidery",
    category: "Logo Stitching",
    colors: { bg: "#081818", accent: "#00ffaa" },
  },
  {
    id: 17,
    src: "/images/gallery/img17.JPG",
    alt: "Thread Detail Work",
    category: "Digitizing",
    colors: { bg: "#181010", accent: "#ff4444" },
  },
  {
    id: 18,
    src: "/images/gallery/img18.JPG",
    alt: "Large Order Production",
    category: "Bulk Production",
    colors: { bg: "#101418", accent: "#00aaff" },
  },
];

const categories = [
  "All",
  "Logo Stitching",
  "Uniform",
  "Cap / Headwear",
  "Bulk Production",
  "Patches",
  "Digitizing",
];

// Placeholder SVG for when no real image is available
function PlaceholderImage({ item }: { item: (typeof galleryItems)[0] }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: item.colors.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* decorative grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 24px,${item.colors.accent}18 24px,${item.colors.accent}18 25px),repeating-linear-gradient(90deg,transparent,transparent 24px,${item.colors.accent}18 24px,${item.colors.accent}18 25px)`,
        }}
      />
      {/* center icon — embroidery needle */}
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        style={{ position: "relative", zIndex: 1, marginBottom: "0.75rem" }}
      >
        <ellipse
          cx="26"
          cy="26"
          rx="22"
          ry="22"
          fill="none"
          stroke={item.colors.accent}
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        <path d="M26 10 L26 42" stroke={item.colors.accent} strokeWidth="1.5" />
        <path
          d="M16 20 Q26 26 36 20"
          stroke={item.colors.accent}
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M16 32 Q26 26 36 32"
          stroke={item.colors.accent}
          strokeWidth="1"
          fill="none"
        />
        <circle cx="26" cy="26" r="3" fill={item.colors.accent} />
      </svg>
      <p
        style={{
          fontFamily: "DM Sans, sans-serif",
          fontSize: "0.65rem",
          letterSpacing: "0.2em",
          color: item.colors.accent,
          textTransform: "uppercase",
          position: "relative",
          zIndex: 1,
          opacity: 0.8,
        }}
      >
        Add Photo
      </p>
    </div>
  );
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState<null | (typeof galleryItems)[0]>(
    null,
  );

  return (
    <section style={{ background: "#0a0705", padding: "6rem 0" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <p
          style={{
            fontFamily: "DM Sans, sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.35em",
            color: "#c98a12",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          Our Work
        </p>
        <h2
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 600,
            color: "#f7f2e8",
            marginBottom: "2.5rem",
          }}
        >
          Embroidery <em style={{ color: "#c98a12" }}>Gallery</em>
        </h2>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1rem",
          }}
        >
          {galleryItems.map((item, i) => (
            <div
              style={{
                aspectRatio: i % 5 === 0 ? "16/10" : "4/3",
                borderRadius: "4px",
                overflow: "hidden",
                cursor: "pointer",
                position: "relative", // already there ✅
                border: "1px solid rgba(201,138,18,0.15)",
              }}
              key={i}
            >
              {item.src ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              ) : (
                <PlaceholderImage item={item} />
              )}

              {/* Hover overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(10,7,5,0.9) 0%, rgba(10,7,5,0.2) 60%, transparent 100%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "1.25rem",
                  opacity: 0,
                  transition: "opacity 0.25s",
                }}
                className="gallery-overlay"
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.opacity = "1")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.opacity = "0")
                }
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(10,7,5,0.92)",
            backdropFilter: "blur(8px)",
            zIndex: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "700px",
              width: "100%",
              border: "1px solid rgba(201,138,18,0.3)",
              borderRadius: "4px",
              overflow: "hidden",
              background: "#0a0705",
            }}
          >
            <div style={{ aspectRatio: "16/9", position: "relative" }}>
              {lightbox.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={lightbox.src}
                  alt={lightbox.alt}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <PlaceholderImage item={lightbox} />
              )}
            </div>
            <div style={{ padding: "1.5rem" }}>
              <p
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  color: "#f7f2e8",
                }}
              >
                {lightbox.alt}
              </p>
            </div>
          </div>
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "fixed",
              top: "1.5rem",
              right: "1.5rem",
              fontFamily: "DM Sans, sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              color: "rgba(247,242,232,0.5)",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              textTransform: "uppercase",
            }}
          >
            ✕ Close
          </button>
        </div>
      )}
    </section>
  );
}
