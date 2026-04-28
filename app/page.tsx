import Gallery from '@/components/Gallery'
import Link from 'next/link'

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '500+', label: 'Brand Clients' },
  { value: '2M+', label: 'Pieces Produced' },
  { value: '50', label: 'MOQ per Design' },
]

const advantages = [
  {
    icon: '⟡',
    title: 'High Volume Capacity',
    desc: 'Production lines capable of 10,000+ pieces per week. Built for brands that need scale without compromise.',
  },
  {
    icon: '◈',
    title: 'Precision Stitching',
    desc: '12-head computerized embroidery machines with thread-count accuracy. Every logo, every time.',
  },
  {
    icon: '◉',
    title: 'Pan-India Delivery',
    desc: 'Timely dispatch with full tracking. Serving garment factories, retail chains, and exporters nationwide.',
  },
  {
    icon: '◆',
    title: 'Custom Digitizing',
    desc: 'In-house design team converts your artwork to stitch files. One-time digitizing, reuse forever.',
  },
  {
    icon: '◇',
    title: 'All Fabric Types',
    desc: `Expertise in cotton, polyester, denim, fleece, caps & more. No substrate we haven't mastered.`,
  },
  {
    icon: '○',
    title: 'Competitive B2B Pricing',
    desc: 'Volume-based pricing with transparent invoicing. Get better margins as your order grows.',
  },
]

const clients = [
  'Uniform Manufacturers', 'Garment Exporters', 'Corporate Gifting', 
  'Sports Brands', 'Retail Chains', 'Cap Manufacturers',
]

export default function HomePage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section
        style={{
          minHeight: '92vh',
          background: '#0a0705',
          backgroundImage: `
            radial-gradient(ellipse at 10% 60%, rgba(201,138,18,0.12) 0%, transparent 55%),
            radial-gradient(ellipse at 90% 20%, rgba(201,138,18,0.06) 0%, transparent 50%),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 60px,
              rgba(201,138,18,0.025) 60px,
              rgba(201,138,18,0.025) 61px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 60px,
              rgba(201,138,18,0.025) 60px,
              rgba(201,138,18,0.025) 61px
            )
          `,
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* decorative vertical text */}
        <div
          style={{
            position: 'absolute',
            right: '3rem',
            top: '50%',
            transform: 'translateY(-50%) rotate(90deg)',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.65rem',
            letterSpacing: '0.4em',
            color: 'rgba(201,138,18,0.25)',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          Est. 2009 · Surat · Gujarat · India
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                border: '1px solid rgba(201,138,18,0.3)',
                padding: '0.35rem 0.9rem',
                borderRadius: '2px',
                marginBottom: '2.5rem',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#c98a12', display: 'inline-block' }} />
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', letterSpacing: '0.25em', color: '#c98a12', textTransform: 'uppercase' }}>
                B2B Embroidery Manufacturer
              </span>
            </div>

            <h1
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                fontWeight: 600,
                lineHeight: 1.05,
                color: '#f7f2e8',
                marginBottom: '1.5rem',
              }}
            >
              Where Brands Get Their
              <br />
              <span
                style={{
                  background: 'linear-gradient(120deg, #c98a12, #f2d88a, #c98a12)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'shimmer 3s linear infinite',
                }}
              >
                Embroidery Done.
              </span>
            </h1>

            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '1.05rem',
                color: 'rgba(247,242,232,0.55)',
                lineHeight: '1.8',
                maxWidth: '520px',
                marginBottom: '3rem',
              }}
            >
              Bulk embroidery manufacturing for garment brands, wholesalers & exporters. 
              Precision stitching at scale — from 50 to 50,000 pieces.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.8rem',
                  letterSpacing: '0.2em',
                  fontWeight: 500,
                  color: '#0a0705',
                  background: 'linear-gradient(135deg, #e4a820, #c98a12)',
                  padding: '0.85rem 2rem',
                  borderRadius: '2px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                Request Bulk Quote
              </Link>
              <Link
                href="/services"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.8rem',
                  letterSpacing: '0.2em',
                  fontWeight: 400,
                  color: 'rgba(247,242,232,0.7)',
                  border: '1px solid rgba(247,242,232,0.2)',
                  padding: '0.85rem 2rem',
                  borderRadius: '2px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: '#c98a12' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '2.4rem',
                    fontWeight: 700,
                    color: '#0a0705',
                    lineHeight: 1,
                    marginBottom: '0.25rem',
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.7rem',
                    letterSpacing: '0.2em',
                    color: 'rgba(10,7,5,0.65)',
                    textTransform: 'uppercase',
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section style={{ background: '#f7f2e8', padding: '6rem 0' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
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
            Who We Serve
          </p>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 600,
              color: '#0a0705',
              lineHeight: 1.15,
              maxWidth: '500px',
              marginBottom: '3.5rem',
            }}
          >
            Built for Businesses,{' '}
            <em style={{ fontStyle: 'italic', color: '#c98a12' }}>Not Individuals</em>
          </h2>

          <div className="flex flex-wrap gap-3 mb-10">
            {clients.map((c) => (
              <span
                key={c}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.8rem',
                  letterSpacing: '0.1em',
                  color: '#2a1e10',
                  border: '1px solid rgba(201,138,18,0.35)',
                  padding: '0.5rem 1.1rem',
                  borderRadius: '2px',
                  background: 'rgba(201,138,18,0.05)',
                }}
              >
                {c}
              </span>
            ))}
          </div>

          <Link
            href="/about"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              color: '#0a0705',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderBottom: '1px solid #c98a12',
              paddingBottom: '2px',
            }}
          >
            Learn More About Us →
          </Link>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section
        style={{
          background: '#0a0705',
          backgroundImage: 'radial-gradient(ellipse at 80% 50%, rgba(201,138,18,0.07) 0%, transparent 60%)',
          padding: '6rem 0',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
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
            Our Advantages
          </p>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 600,
              color: '#f7f2e8',
              lineHeight: 1.15,
              marginBottom: '3.5rem',
            }}
          >
            Why Brands Choose Dharmik
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv) => (
              <div
                key={adv.title}
                style={{
                  border: '1px solid rgba(201,138,18,0.18)',
                  borderRadius: '4px',
                  padding: '2rem',
                  background: 'rgba(201,138,18,0.03)',
                  transition: 'border-color 0.3s',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.8rem',
                    color: '#c98a12',
                    display: 'block',
                    marginBottom: '1rem',
                  }}
                >
                  {adv.icon}
                </span>
                <h3
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    color: '#f7f2e8',
                    marginBottom: '0.6rem',
                  }}
                >
                  {adv.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.85rem',
                    color: 'rgba(247,242,232,0.45)',
                    lineHeight: '1.7',
                  }}
                >
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #c98a12, #a96b0e)',
          padding: '5rem 0',
          textAlign: 'center',
        }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 600,
              color: '#0a0705',
              marginBottom: '1rem',
            }}
          >
            Ready to Scale Your Embroidery Production?
          </h2>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '0.95rem',
              color: 'rgba(10,7,5,0.65)',
              marginBottom: '2.5rem',
            }}
          >
            Send us your design, quantity, and timeline — we&apos;ll respond within 24 hours.
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
              padding: '1rem 2.5rem',
              borderRadius: '2px',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Request a Quote Now
          </Link>
        </div>
      </section>
    </div>
  )
}
