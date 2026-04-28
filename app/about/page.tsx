"use client"

import Link from 'next/link'

const values = [
  { title: 'Precision', desc: 'Every stitch is a commitment. We use computerized machines calibrated for exact replication across thousands of pieces.' },
  { title: 'Reliability', desc: 'Deadlines are business-critical. Our production planning ensures your order ships on time, every time.' },
  { title: 'Partnership', desc: "We don't just take orders — we become your embroidery department. Long-term B2B relationships are our foundation." },
  { title: 'Quality First', desc: 'Each batch goes through thread-tension checks, color matching, and final visual inspection before dispatch.' },
]

const milestones = [
  { year: '2009', event: 'Founded in Surat with 2 embroidery machines' },
  { year: '2013', event: 'Expanded to 20 machines, entered B2B wholesale market' },
  { year: '2017', event: 'Partnered with 100+ garment exporters across Gujarat' },
  { year: '2021', event: 'Upgraded to 12-head computerized systems, 10K pieces/week capacity' },
  { year: '2024', event: 'Serving 500+ active brand clients pan-India' },
]

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section
        style={{
          background: '#0a0705',
          padding: '7rem 0 5rem',
          borderBottom: '1px solid rgba(201,138,18,0.2)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', letterSpacing: '0.35em', color: '#c98a12', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Our Story
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
            15 Years of Stitching{' '}
            <em style={{ color: '#c98a12' }}>India&apos;s Brands Together</em>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section style={{ background: '#f7f2e8', padding: '6rem 0' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  color: '#2a1e10',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem',
                }}
              >
                &ldquo;We started Dharmik Enterprise with a belief that bulk embroidery didn&apos;t have to mean compromised quality.&rdquo;
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', color: 'rgba(42,30,16,0.65)', lineHeight: '1.8', marginBottom: '1rem' }}>
                Founded in 2009 in Surat — India&apos;s textile capital — Dharmik Enterprise began as a small workshop with two machines and a big vision. Today, we run one of Gujarat&apos;s most reliable B2B embroidery operations.
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', color: 'rgba(42,30,16,0.65)', lineHeight: '1.8' }}>
                Our clients are garment manufacturers, uniform suppliers, cap makers, and retail brands who need consistent quality at volume. We&apos;ve built our entire operation around their requirements: fast turnaround, accurate digitizing, and transparent communication.
              </p>
            </div>

            {/* Decorative panel */}
            <div
              style={{
                background: '#0a0705',
                borderRadius: '4px',
                padding: '3rem',
                border: '1px solid rgba(201,138,18,0.2)',
              }}
            >
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', letterSpacing: '0.3em', color: '#c98a12', textTransform: 'uppercase', marginBottom: '2rem' }}>
                Company Milestones
              </p>
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  style={{
                    display: 'flex',
                    gap: '1.5rem',
                    marginBottom: i < milestones.length - 1 ? '1.5rem' : 0,
                    paddingBottom: i < milestones.length - 1 ? '1.5rem' : 0,
                    borderBottom: i < milestones.length - 1 ? '1px solid rgba(201,138,18,0.1)' : 'none',
                  }}
                >
                  <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', color: '#c98a12', minWidth: '48px', fontWeight: 600 }}>
                    {m.year}
                  </span>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: 'rgba(247,242,232,0.55)', lineHeight: '1.6' }}>
                    {m.event}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: '#0a0705', padding: '6rem 0' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', letterSpacing: '0.35em', color: '#c98a12', textTransform: 'uppercase', marginBottom: '1rem' }}>
            What We Stand For
          </p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#f7f2e8', marginBottom: '3.5rem' }}>
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                style={{
                  border: '1px solid rgba(201,138,18,0.2)',
                  borderRadius: '4px',
                  padding: '2rem',
                }}
              >
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 600, color: '#e4a820', marginBottom: '0.75rem' }}>
                  {v.title}
                </h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: 'rgba(247,242,232,0.5)', lineHeight: '1.7' }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#f7f2e8', padding: '5rem 0', textAlign: 'center' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', fontWeight: 600, color: '#0a0705', marginBottom: '1rem' }}>
            Let&apos;s Work Together
          </h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', color: 'rgba(42,30,16,0.55)', marginBottom: '2rem' }}>
            Whether you need 50 pieces or 50,000 — we&apos;re ready to discuss your requirements.
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
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
