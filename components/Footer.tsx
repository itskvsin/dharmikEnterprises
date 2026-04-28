"use client"

import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      style={{
        background: '#0a0705',
        borderTop: '1px solid rgba(201,138,18,0.2)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.4rem',
                  fontWeight: 600,
                  color: '#f2d88a',
                  letterSpacing: '0.1em',
                  marginBottom: '2px',
                }}
              >
                DHARMIK ENTERPRISE
              </p>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.7rem',
                  color: 'rgba(201,138,18,0.6)',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                }}
              >
                B2B Embroidery Manufacturer
              </p>
            </div>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.85rem',
                color: 'rgba(247,242,232,0.45)',
                lineHeight: '1.8',
                maxWidth: '260px',
              }}
            >
              Premium bulk embroidery manufacturing for brands, wholesalers, and garment businesses across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.65rem',
                letterSpacing: '0.3em',
                color: '#c98a12',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              Quick Links
            </p>
            {['/', '/about', '/services', '/contact'].map((href, i) => {
              const labels = ['Home', 'About Us', 'Services', 'Get Quote']
              return (
                <Link
                  key={href}
                  href={href}
                  style={{
                    display: 'block',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.85rem',
                    color: 'rgba(247,242,232,0.5)',
                    textDecoration: 'none',
                    marginBottom: '0.6rem',
                    transition: 'color 0.2s',
                  }}
                >
                  {labels[i]}
                </Link>
              )
            })}
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.65rem',
                letterSpacing: '0.3em',
                color: '#c98a12',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              Contact
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Phone', value: '+91 98244 02416' },
                { label: 'Email', value: 'tirthsiroya007@gmail.com' },
                { label: 'Location', value: 'Ghatlodia, Ahmedabad, Gujarat, India' },
                { label: 'MOQ', value: '50 pieces per design' },
              ].map((item) => (
                <div key={item.label}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', color: 'rgba(201,138,18,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{item.label}</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: 'rgba(247,242,232,0.55)' }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(201,138,18,0.12)', marginBottom: '1.5rem' }} />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: 'rgba(247,242,232,0.25)', letterSpacing: '0.05em' }}>
            © {new Date().getFullYear()} Dharmik Enterprise. All rights reserved.
          </p>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: 'rgba(201,138,18,0.35)', letterSpacing: '0.1em' }}>
            BULK EMBROIDERY · Ahmedabad · INDIA
          </p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919876543210?text=Hello%20Dharmik%20Enterprise%2C%20I%20am%20interested%20in%20bulk%20embroidery%20manufacturing."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
          zIndex: 100,
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        aria-label="Chat on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </footer>
  )
}
