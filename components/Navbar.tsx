'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        style={{
          background: 'rgba(10, 7, 5, 0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(201, 138, 18, 0.2)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: '#f2d88a',
                letterSpacing: '0.12em',
              }}
            >
              DHARMIK
            </span>
            <span
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.55rem',
                fontWeight: 400,
                color: 'rgba(201,138,18,0.7)',
                letterSpacing: '0.3em',
              }}
            >
              ENTERPRISE
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.8rem',
                  letterSpacing: '0.15em',
                  fontWeight: 400,
                  color: pathname === link.href ? '#e4a820' : 'rgba(247,242,232,0.65)',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s',
                  textDecoration: 'none',
                  borderBottom: pathname === link.href ? '1px solid #c98a12' : 'none',
                  paddingBottom: '2px',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                fontWeight: 500,
                color: '#0a0705',
                background: 'linear-gradient(135deg, #e4a820, #c98a12)',
                padding: '0.5rem 1.25rem',
                borderRadius: '2px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '1px',
                background: '#e4a820',
                transition: 'transform 0.2s',
                transform: menuOpen ? 'rotate(45deg) translateY(3.5px)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '1px',
                background: '#e4a820',
                opacity: menuOpen ? 0 : 1,
                transition: 'opacity 0.2s',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '1px',
                background: '#e4a820',
                transition: 'transform 0.2s',
                transform: menuOpen ? 'rotate(-45deg) translateY(-3.5px)' : 'none',
              }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            style={{
              borderTop: '1px solid rgba(201,138,18,0.15)',
              padding: '1rem 1.5rem 1.5rem',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.85rem',
                  letterSpacing: '0.15em',
                  color: pathname === link.href ? '#e4a820' : 'rgba(247,242,232,0.7)',
                  textTransform: 'uppercase',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid rgba(201,138,18,0.08)',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
