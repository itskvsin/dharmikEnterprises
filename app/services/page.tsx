"use client"

import Link from 'next/link'

const services = [
  {
    num: '01',
    title: 'Bulk Garment Embroidery',
    desc: 'Large-scale embroidery on t-shirts, shirts, polos, hoodies, jackets and all garment types. Our production lines handle 10,000+ pieces per week with consistent quality across every unit.',
    features: ['Min. order: 50 pieces', 'Any thread count', 'Multi-color designs', 'Chest, sleeve & back placements'],
  },
  {
    num: '02',
    title: 'Logo & Brand Stitching',
    desc: 'Precise logo replication for corporate branding, uniform programs, and retail merchandise. We match your brand colors using Pantone-guided thread selection.',
    features: ['Pantone color matching', 'High thread density logos', 'Company uniform programs', 'Retail merchandise'],
  },
  {
    num: '03',
    title: 'Cap & Headwear Embroidery',
    desc: 'Specialized flat and 3D puff embroidery for caps, hats, and headwear. Industry-grade hat frames ensure precision placement and edge-to-edge consistency.',
    features: ['Structured & unstructured caps', 'Flat embroidery & 3D puff', 'Sports caps, trucker hats', 'All cap types supported'],
  },
  {
    num: '04',
    title: 'Uniform Embroidery',
    desc: 'School uniforms, corporate workwear, hotel staff uniforms — we handle complete uniform embroidery programs with departmental colour-coding and size variation.',
    features: ['Schools & institutions', 'Corporate workwear', 'Hospitality uniforms', 'Batch-wise dispatch'],
  },
  {
    num: '05',
    title: 'Custom Digitizing',
    desc: 'Convert any artwork, logo, or design into professional stitch files. Our in-house digitizers optimize for your specific fabric type and stitch count requirements.',
    features: ['24–48 hr turnaround', 'All file formats (.DST, .PES, .EMB)', 'Fabric-specific optimization', 'One-time charge, reuse forever'],
  },
  {
    num: '06',
    title: 'Patch & Badge Manufacturing',
    desc: 'Woven and embroidered patches with iron-on, sew-on, or velcro backing. Used in uniforms, military garments, and lifestyle brands across India.',
    features: ['Embroidered & woven patches', 'Iron-on / sew-on / velcro', 'Custom shapes & sizes', 'Export-quality finishing'],
  },
]

const process = [
  { step: '01', title: 'Send Your Design', desc: 'Email your logo or artwork in any format (AI, PDF, PNG, JPEG).' },
  { step: '02', title: 'Receive Quote', desc: 'We send pricing based on your design complexity, quantity, and fabric.' },
  { step: '03', title: 'Sample Approval', desc: 'We stitch a physical sample for your approval before bulk production.' },
  { step: '04', title: 'Bulk Production', desc: 'Once approved, we schedule and complete production as per your timeline.' },
  { step: '05', title: 'QC & Dispatch', desc: 'Quality check on every piece, then packed and shipped to your location.' },
]

export default function ServicesPage() {
  return (
    <div>
      {/* Header */}
      <section style={{ background: '#0a0705', padding: '7rem 0 5rem', borderBottom: '1px solid rgba(201,138,18,0.2)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', letterSpacing: '0.35em', color: '#c98a12', textTransform: 'uppercase', marginBottom: '1rem' }}>
            What We Offer
          </p>
          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 600,
              color: '#f7f2e8',
              lineHeight: 1.1,
              maxWidth: '600px',
            }}
          >
            B2B Embroidery{' '}
            <em style={{ color: '#c98a12' }}>Services</em>
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ background: '#f7f2e8', padding: '6rem 0' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div
                key={s.num}
                style={{
                  border: '1px solid rgba(42,30,16,0.12)',
                  borderRadius: '4px',
                  padding: '2.5rem',
                  background: '#fff',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.5rem',
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '3rem',
                    fontWeight: 700,
                    color: 'rgba(201,138,18,0.12)',
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </span>
                <h3
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.6rem',
                    fontWeight: 600,
                    color: '#0a0705',
                    marginBottom: '0.75rem',
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.875rem', color: 'rgba(42,30,16,0.6)', lineHeight: '1.75', marginBottom: '1.25rem' }}>
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.features.map((f) => (
                    <span
                      key={f}
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '0.72rem',
                        letterSpacing: '0.06em',
                        color: '#86490e',
                        background: 'rgba(201,138,18,0.1)',
                        padding: '0.3rem 0.75rem',
                        borderRadius: '2px',
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: '#0a0705', padding: '6rem 0' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', letterSpacing: '0.35em', color: '#c98a12', textTransform: 'uppercase', marginBottom: '1rem' }}>
            How It Works
          </p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#f7f2e8', marginBottom: '3.5rem' }}>
            Our Order Process
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {process.map((p, i) => (
              <div key={p.step} style={{ position: 'relative' }}>
                {i < process.length - 1 && (
                  <div
                    className="hidden md:block"
                    style={{
                      position: 'absolute',
                      top: '1.1rem',
                      right: '-12%',
                      width: '24%',
                      height: '1px',
                      background: 'rgba(201,138,18,0.25)',
                    }}
                  />
                )}
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 700, color: '#c98a12', marginBottom: '0.5rem' }}>
                  {p.step}
                </p>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 600, color: '#f7f2e8', marginBottom: '0.5rem' }}>
                  {p.title}
                </h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem', color: 'rgba(247,242,232,0.4)', lineHeight: '1.65' }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #c98a12, #a96b0e)', padding: '5rem 0', textAlign: 'center' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', fontWeight: 600, color: '#0a0705', marginBottom: '1rem' }}>
            Start Your Bulk Order Today
          </h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', color: 'rgba(10,7,5,0.65)', marginBottom: '2rem' }}>
            Share your requirements and get a detailed quote within 24 hours.
          </p>
          <Link
            href="/contact"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              fontWeight: 500,
              color: '#f7f2e8',
              background: '#0a0705',
              padding: '0.9rem 2rem',
              borderRadius: '2px',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
