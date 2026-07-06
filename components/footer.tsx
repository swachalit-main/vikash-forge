import Link from 'next/link'
import { Hammer, MapPin, Phone, Mail, Clock } from 'lucide-react'
import Image from 'next/image'

const PRODUCT_LINKS = [
  { label: 'Forged Round', href: '/products/round' },
  { label: 'Hook Nut', href: '/products/hook-nut' },
  { label: 'Forged Shaft', href: '/products/shaft' },
  { label: 'Forged Pinion', href: '/products/pinion' },
]

const COMPANY_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Machines', href: '/machines' },
  { label: 'Download Catalog', href: '/catalog' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded text-primary-foreground flex-shrink-0">
                {/* <Hammer size={18} strokeWidth={2.5} /> */}
                <Image
                  src="/vikash_forge.png"
                  alt="Vikash Forge Logo"
                  width={42}
                  height={42}
                />
              </div>
              <div>
                <p className="font-display font-bold text-sm uppercase tracking-wider text-foreground">
                  Vikash Forge
                </p>
                <p className="text-[10px] text-muted-foreground tracking-widest uppercase">Pvt. Ltd.</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Precision forging since 1995. Trusted by industry leaders across Railways, Automotive,
              and Heavy Engineering.
            </p>
            <p className="text-xs text-muted-foreground italic">
              &ldquo;Precision Forging. Strength You Can Trust.&rdquo;
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-widest text-foreground mb-5">
              Products
            </h3>
            <ul className="flex flex-col gap-2.5">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-widest text-foreground mb-5">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-widest text-foreground mb-5">
              Contact
            </h3>
            <ul className="flex flex-col gap-3.5">
              <li className="flex gap-3">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Plot No. 47, Industrial Area, Shibpur, Howrah – 711 102, West Bengal, India
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+91-98310-XXXXX</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">enquiry@vikashforge.com</span>
              </li>
              <li className="flex gap-3 items-start">
                <Clock size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  Mon – Sat: 9:00 AM – 6:30 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Vikash Forge Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Est. 1995 &bull; Howrah, West Bengal, India
          </p>
        </div>
      </div>
    </footer>
  )
}
