'use client'

import { useState } from 'react'

const inputStyle = {
  width: '100%',
  background: 'rgba(247,242,232,0.04)',
  border: '1px solid rgba(201,138,18,0.25)',
  borderRadius: '2px',
  padding: '0.85rem 1rem',
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '0.875rem',
  color: '#f7f2e8',
  outline: 'none',
}

const labelStyle = {
  display: 'block',
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '0.65rem',
  letterSpacing: '0.2em',
  color: 'rgba(201,138,18,0.7)',
  textTransform: 'uppercase' as const,
  marginBottom: '0.5rem',
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    // Simulate form submission (replace with Web3Forms or API route)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div>
      {/* Header */}
      <section style={{ background: '#0a0705', padding: '7rem 0 5rem', borderBottom: '1px solid rgba(201,138,18,0.2)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', letterSpacing: '0.35em', color: '#c98a12', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Bulk Enquiries
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
            Request a{' '}
            <em style={{ color: '#c98a12' }}>Bulk Quote</em>
          </h1>
        </div>
      </section>

      <section style={{ background: '#0a0705', padding: '6rem 0' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', letterSpacing: '0.3em', color: '#c98a12', textTransform: 'uppercase', marginBottom: '2.5rem' }}>
                Direct Contact
              </p>

              {[
                {
                  label: 'Phone / WhatsApp',
                  value: '+91 98765 43210',
                  sub: 'Mon–Sat, 9am–7pm IST',
                },
                {
                  label: 'Email',
                  value: 'info@dharmikenterprise.com',
                  sub: 'Response within 24 hours',
                },
                {
                  label: 'Factory Address',
                  value: 'Ring Road, Surat – 395002',
                  sub: 'Gujarat, India',
                },
                {
                  label: 'Minimum Order',
                  value: '50 pieces per design',
                  sub: 'Bulk pricing above 500 pcs',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    borderBottom: '1px solid rgba(201,138,18,0.12)',
                    paddingBottom: '1.5rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', letterSpacing: '0.2em', color: 'rgba(201,138,18,0.5)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                    {item.label}
                  </p>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 500, color: '#f7f2e8', marginBottom: '0.2rem' }}>
                    {item.value}
                  </p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', color: 'rgba(247,242,232,0.35)' }}>
                    {item.sub}
                  </p>
                </div>
              ))}

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919876543210?text=Hello%20Dharmik%20Enterprise%2C%20I%20need%20a%20bulk%20embroidery%20quote."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  background: '#25D366',
                  color: '#fff',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.8rem',
                  letterSpacing: '0.1em',
                  padding: '0.8rem 1.5rem',
                  borderRadius: '2px',
                  textDecoration: 'none',
                  marginTop: '0.5rem',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Inquiry Form */}
            <div>
              {submitted ? (
                <div
                  style={{
                    border: '1px solid rgba(201,138,18,0.3)',
                    borderRadius: '4px',
                    padding: '3rem',
                    textAlign: 'center',
                  }}
                >
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', color: '#e4a820', marginBottom: '1rem' }}>✓</p>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', color: '#f7f2e8', marginBottom: '0.75rem' }}>
                    Enquiry Received
                  </h3>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.875rem', color: 'rgba(247,242,232,0.45)' }}>
                    Thank you for reaching out. We&apos;ll respond with a detailed quote within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label style={labelStyle}>Company Name *</label>
                      <input required style={inputStyle} type="text" placeholder="Your company" />
                    </div>
                    <div>
                      <label style={labelStyle}>Contact Person *</label>
                      <input required style={inputStyle} type="text" placeholder="Your name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label style={labelStyle}>Phone / WhatsApp *</label>
                      <input required style={inputStyle} type="tel" placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div>
                      <label style={labelStyle}>Email</label>
                      <input style={inputStyle} type="email" placeholder="business@email.com" />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Type of Embroidery *</label>
                    <select required style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="" style={{ background: '#1a1208' }}>Select service type</option>
                      <option value="garment" style={{ background: '#1a1208' }}>Bulk Garment Embroidery</option>
                      <option value="logo" style={{ background: '#1a1208' }}>Logo / Brand Stitching</option>
                      <option value="cap" style={{ background: '#1a1208' }}>Cap / Headwear</option>
                      <option value="uniform" style={{ background: '#1a1208' }}>Uniform Embroidery</option>
                      <option value="patch" style={{ background: '#1a1208' }}>Patch / Badge</option>
                      <option value="digitizing" style={{ background: '#1a1208' }}>Digitizing Only</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label style={labelStyle}>Estimated Quantity *</label>
                      <select required style={{ ...inputStyle, cursor: 'pointer' }}>
                        <option value="" style={{ background: '#1a1208' }}>Select range</option>
                        <option value="50-200" style={{ background: '#1a1208' }}>50 – 200 pieces</option>
                        <option value="200-500" style={{ background: '#1a1208' }}>200 – 500 pieces</option>
                        <option value="500-2000" style={{ background: '#1a1208' }}>500 – 2,000 pieces</option>
                        <option value="2000+" style={{ background: '#1a1208' }}>2,000+ pieces</option>
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Timeline</label>
                      <input style={inputStyle} type="text" placeholder="e.g. 3 weeks" />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Design / Requirements</label>
                    <textarea
                      style={{ ...inputStyle, minHeight: '110px', resize: 'vertical' }}
                      placeholder="Describe your design, fabric type, colors, any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '0.8rem',
                      letterSpacing: '0.2em',
                      fontWeight: 500,
                      color: '#0a0705',
                      background: loading ? '#a96b0e' : 'linear-gradient(135deg, #e4a820, #c98a12)',
                      padding: '1rem',
                      borderRadius: '2px',
                      textTransform: 'uppercase',
                      border: 'none',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      transition: 'opacity 0.2s',
                    }}
                  >
                    {loading ? 'Sending...' : 'Submit Enquiry'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
