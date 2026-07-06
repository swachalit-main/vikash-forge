'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronRight,
  Cog,
  Factory,
  Quote,
  Star,
  Train,
  Truck,
  Wrench,
} from 'lucide-react'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { PRODUCTS, MACHINES, INDUSTRIES, TESTIMONIALS, MATERIALS } from '@/lib/data'
import EnquiryForm from '@/components/enquiry-form'

/* ── Loading Screen ── */
function LoadingScreen() {
  return (
    <div
      id="loading-screen"
      className="loading-screen fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background pointer-events-none"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
          <Wrench size={20} className="text-primary-foreground" />
        </div>
        <div>
          <p className="font-display font-bold text-base uppercase tracking-widest text-foreground">
            Vikash Forge
          </p>
          <p className="text-[10px] tracking-widest uppercase text-muted-foreground">Pvt. Ltd.</p>
        </div>
      </div>
      <div className="w-48 h-0.5 bg-border rounded-full overflow-hidden">
        <div className="h-full bg-primary rounded-full loading-bar" />
      </div>
    </div>
  )
}

/* ── Hero Section ── */
function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div ref={parallaxRef} className="absolute inset-0 scale-110">
        <Image
          src="/images/hero-bg.jpg"
          alt="Industrial forge factory"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          <p className="section-label mb-4 text-primary">Howrah, India &bull; Est. 1995</p>
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6 text-balance">
            Precision Forging.{' '}
            <span className="text-primary">Strength</span>{' '}
            You Can Trust.
          </h1>
          <p className="text-lg text-white/75 leading-relaxed mb-10 max-w-2xl">
            Vikash Forge Pvt. Ltd. has delivered precision-engineered forgings to India&apos;s
            top industrial clients since 1995. Railways, automotive, and heavy engineering — we
            forge the components that keep industries moving.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-display font-semibold text-sm uppercase tracking-wider rounded hover:bg-primary/90 transition-colors"
            >
              Enquire Now
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/30 text-white font-display font-semibold text-sm uppercase tracking-wider rounded hover:bg-white/20 transition-colors"
            >
              Explore Products
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-white/20 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-primary animate-[slideDown_1.5s_ease_infinite]" />
        </div>
      </div>
    </section>
  )
}

/* ── Stats Strip ── */
function StatsStrip() {
  const stats = [
    { value: '30+', label: 'Years Experience', icon: Award },
    { value: '500+', label: 'Products Forged', icon: Cog },
    { value: '150+', label: 'Industrial Clients', icon: Factory },
    { value: '6', label: 'Heavy Machines', icon: Wrench },
  ]

  return (
    <section className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-primary-foreground/20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 py-4 px-6 text-primary-foreground"
            >
              <stat.icon size={20} className="opacity-70 mb-1" />
              <span className="font-display font-bold text-3xl">{stat.value}</span>
              <span className="text-xs uppercase tracking-wider opacity-80">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Products Preview ── */
function ProductsPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="section-label mb-3">What We Forge</p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground reveal text-balance">
              Our Products
            </h2>
          </div>
          <Link
            href="/products"
            className="reveal delay-200 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline underline-offset-4"
          >
            View All Products <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product, i) => (
            <div
              key={product.slug}
              className={`reveal delay-${i * 100} group bg-card border border-border rounded overflow-hidden flex flex-col`}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/0 transition-colors" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {product.shortDesc}
                </p>
                <div className="flex gap-2">
                  <Link
                    href={`/products/${product.slug}`}
                    className="flex-1 py-2 text-xs font-semibold text-center border border-border rounded hover:border-primary hover:text-primary transition-colors"
                  >
                    View Details
                  </Link>
                  <Link
                    href="/contact"
                    className="flex-1 py-2 text-xs font-semibold text-center bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
                  >
                    Send Enquiry
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── About Snippet ── */
function AboutSnippet() {
  const highlights = [
    'ISO-compliant quality control at every stage',
    'Skilled and certified forge technicians',
    'In-house testing: UT, MT, chemical analysis',
    'On-time delivery with full documentation',
  ]

  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left order-2 lg:order-1 relative">
            <div className="relative h-[420px] rounded overflow-hidden">
              <Image
                src="/images/about-factory.jpg"
                alt="Vikash Forge factory floor"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden lg:block bg-primary text-primary-foreground px-6 py-5 rounded shadow-lg">
              <p className="font-display font-bold text-4xl">1995</p>
              <p className="text-xs uppercase tracking-wider opacity-90">Est. in Howrah</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="section-label mb-3 reveal">Who We Are</p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6 reveal text-balance">
              Three Decades of Forging Excellence
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 reveal delay-100">
              Founded in 1995 in Howrah, West Bengal, Vikash Forge Pvt. Ltd. has grown from a
              small forge shop into one of the region&apos;s most trusted open-die forging
              manufacturers. Our 30,000 sq.ft. facility houses heavy hammers, manipulators, and
              precision machining equipment.
            </p>
            <ul className="flex flex-col gap-3 mb-8 reveal delay-200">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="reveal delay-300 inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-display font-semibold text-sm uppercase tracking-wider rounded hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Learn More About Us <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Machines Teaser ── */
function MachinesTeaser() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="section-label mb-3">Our Capability</p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground reveal text-balance">
              Heavy Machinery
            </h2>
          </div>
          <Link
            href="/machines"
            className="reveal delay-200 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline underline-offset-4"
          >
            See All Machines <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MACHINES.slice(0, 3).map((machine, i) => (
            <div
              key={machine.id}
              className={`reveal delay-${i * 100} group relative overflow-hidden rounded h-64 bg-card border border-border`}
            >
              <Image
                src={machine.image}
                alt={machine.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display font-bold text-lg text-white">{machine.name}</h3>
                <p className="text-sm text-white/70 mt-1">{machine.capabilities[0]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Industries ── */
function Industries() {
  const icons = [Train, Truck, Cog]

  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Industries We Serve</p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground reveal text-balance">
            Forging for Every Industry
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {INDUSTRIES.map((ind, i) => {
            const Icon = icons[i]
            return (
              <div
                key={ind.name}
                className={`reveal delay-${i * 100} p-8 bg-background border border-border rounded group hover:border-primary transition-colors`}
              >
                <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                  <Icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">{ind.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{ind.description}</p>
                <ul className="flex flex-col gap-1.5">
                  {ind.components.map((comp) => (
                    <li key={comp} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {comp}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ── Materials Strip ── */
function MaterialsStrip() {
  return (
    <section className="py-16 bg-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-primary text-xs uppercase tracking-widest font-semibold mb-2">
              Material Grades
            </p>
            <h2 className="font-display font-bold text-2xl text-background">
              We work in EN9 &bull; EN19 &bull; EN24 &bull; DB6 &bull; EN8D &bull; CL4 &bull; CL2
            </h2>
          </div>
          <Link
            href="/about#materials"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 border border-background/30 text-background font-display font-semibold text-sm uppercase tracking-wider rounded hover:bg-background/10 transition-colors"
          >
            Material Specs <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ── Testimonials ── */
function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Client Trust</p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground reveal text-balance">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`reveal delay-${i * 100} p-7 bg-card border border-border rounded flex flex-col gap-4`}
            >
              <Quote size={28} className="text-primary/30" />
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{t.text}</p>
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={12} className="fill-primary text-primary" />
                ))}
              </div>
              <div className="border-t border-border pt-4">
                <p className="font-display font-bold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.position}</p>
                <p className="text-xs text-primary font-semibold mt-0.5">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── CTA Banner ── */
function CTABanner() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="reveal-left">
            <p className="section-label mb-3">Start Your Enquiry</p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4 text-balance">
              Send Your Requirement
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Tell us what you need — material grade, dimensions, quantity, application. Our
              technical team will respond within 24 business hours with a detailed proposal.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                'Free technical consultation',
                'Competitive, transparent pricing',
                'Mill test certificates included',
                'Pan-India delivery network',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 size={15} className="text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal-right bg-background p-8 rounded border border-border">
            <h3 className="font-display font-bold text-xl text-foreground mb-6">
              Submit Your Enquiry
            </h3>
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Page ── */
export default function HomePage() {
  useScrollReveal()

  return (
    <>
      <LoadingScreen />
      <Hero />
      <StatsStrip />
      <ProductsPreview />
      <AboutSnippet />
      <MachinesTeaser />
      <Industries />
      <MaterialsStrip />
      <Testimonials />
      <CTABanner />
    </>
  )
}
