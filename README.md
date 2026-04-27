# Dharmik Enterprise — B2B Embroidery Website

A premium 4-page Next.js 15 website for **Dharmik Enterprise**, a B2B embroidery manufacturer based in Surat, Gujarat.

## Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v3**
- **Google Fonts** — Cormorant Garamond (display) + DM Sans (body)
- No external UI libraries — fully custom design

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, stats, who-we-serve, advantages, CTA |
| About | `/about` | Story, milestones timeline, values |
| Services | `/services` | 6 service cards, order process steps |
| Contact | `/contact` | Enquiry form + direct contact info |

## Features

- ✅ Fixed navbar with active state highlighting
- ✅ WhatsApp floating button (bottom-right)
- ✅ WhatsApp direct chat link on contact page
- ✅ B2B-focused enquiry form (company, quantity, type)
- ✅ Responsive (mobile-first)
- ✅ Premium dark theme with gold accents
- ✅ Grain overlay for texture depth
- ✅ Shimmer animation on hero headline
- ✅ SEO metadata on root layout

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Customise

- **Phone / WhatsApp**: Find `+91 98765 43210` across files and replace with real number
- **Email**: Replace `info@dharmikenterprise.com`  
- **Address**: Replace `Ring Road, Surat – 395002`
- **Form submission**: Connect to [Web3Forms](https://web3forms.com) or a Next.js API route in `/app/api/contact/route.ts`
- **Images**: Add embroidery photos to `/public/images/` and use `<Image>` from `next/image`

## Form Integration (Web3Forms)

Replace the `handleSubmit` function in `app/contact/page.tsx`:

```ts
async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()
  setLoading(true)
  const formData = new FormData(e.currentTarget)
  formData.append('access_key', 'YOUR_WEB3FORMS_KEY')
  
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData,
  })
  
  const data = await res.json()
  setLoading(false)
  if (data.success) setSubmitted(true)
}
```
