'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Target, Eye, Shield, Users, Truck, Clock } from 'lucide-react'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { MATERIALS } from '@/lib/data'

const TIMELINE = [
  { year: '1995', event: 'Vikash Forge founded in Howrah, West Bengal with a single pneumatic hammer.' },
  { year: '2001', event: 'Expanded capacity — installed first 5-Ton Hydraulic Hammer and manipulator system.' },
  { year: '2007', event: 'Added VTL and lathe machining facility, enabling in-house finish machining.' },
  { year: '2012', event: 'Secured long-term supply agreements with major Indian Railways component OEMs.' },
  { year: '2018', event: 'Upgraded to fully automated billet heating and temperature-controlled forging process.' },
  { year: '2024', event: 'Serving 150+ clients across Railways, Automotive, and Heavy Engineering sectors.' },
  { year: '2025', event: 'Supplied more than 1,000 wheels to all SAIL units across India within a span of one year.', },
  { year: '2026', event: 'Delivered more than 1 lakh orders to our valued customers.', },
]

const WHY_US = [
  {
    icon: Shield,
    title: 'Stringent Quality Control',
    description:
      'Every forging undergoes dimensional inspection, hardness testing, and optional ultrasonic testing. Material traceability is maintained from billet to dispatch.',
  },
  {
    icon: Users,
    title: 'Skilled Workforce',
    description:
      'Our team of 80+ trained forge technicians, machinists, and quality inspectors bring decades of hands-on experience to every job.',
  },
  {
    icon: Truck,
    title: 'Reliable On-Time Delivery',
    description:
      'We understand that your production schedules cannot afford delays. Our planning team ensures dispatch commitments are met consistently.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description:
      'With in-house forging and machining, we eliminate dependency on sub-contractors, significantly reducing lead times for urgent orders.',
  },
]

export default function AboutPage() {
  useScrollReveal()

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-card overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3 reveal">Our Story</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl text-foreground mb-6 max-w-2xl reveal text-balance">
            About Vikash Forge
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl reveal delay-100">
            Three decades of forging excellence from the industrial heartland of Howrah, West Bengal.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3 reveal">Company Overview</p>
              <h2 className="font-display font-bold text-4xl text-foreground mb-6 reveal text-balance">
                Precision Engineering Since 1995
              </h2>
              <div className="flex flex-col gap-5 text-muted-foreground leading-relaxed text-sm reveal delay-100">
                <p>
                  Vikash Forge Pvt. Ltd. was established in 1995 by visionary industrialists in Howrah,
                  West Bengal — India&apos;s historic iron and steel hub. What began as a modest forge
                  shop has grown into a comprehensive precision forging facility spanning 30,000 sq.ft.
                </p>
                <p>
                  Today, we operate six heavy machines including 5-ton hydraulic hammers, 2-ton pneumatic
                  hammers, large manipulators, and a fully equipped machining centre with VTL and heavy
                  lathes. Our closed and open-die forging capabilities serve clients in Railways, Automotive,
                  Cement, Steel, and Power sectors.
                </p>
                <p>
                  With a skilled team of 80+ forge technicians and a commitment to quality at every
                  stage, we supply forgings that meet IS, DIN, and customer-specific standards with
                  full material traceability and mill test certificates.
                </p>
              </div>
            </div>
            <div className="reveal-right">
              <div className="relative h-[400px] rounded overflow-hidden">
                <Image
                  src="/images/about-factory.jpg"
                  alt="Vikash Forge factory"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="reveal p-8 bg-background border border-border rounded">
              <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-5">
                <Target size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                To deliver precision-forged components of uncompromising quality that empower India&apos;s
                industries to build stronger, safer, and more efficient machines. We achieve this through
                relentless investment in people, process, and technology.
              </p>
            </div>
            <div className="reveal delay-200 p-8 bg-background border border-border rounded">
              <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-5">
                <Eye size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                To become the most trusted forging partner for industrial clients across South Asia,
                recognised for our technical expertise, delivery reliability, and commitment to quality
                that goes beyond certification — it is embedded in our culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Why Partner With Us</p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground reveal text-balance">
              The Vikash Forge Advantage
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US.map((item, i) => (
              <div
                key={item.title}
                className={`reveal delay-${i * 100} p-7 border border-border rounded bg-card hover:border-primary transition-colors group`}
              >
                <div className="w-11 h-11 rounded bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <item.icon size={20} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display font-bold text-base text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Our Journey</p>
            <h2 className="font-display font-bold text-4xl text-foreground reveal text-balance">
              Milestones That Shaped Us
            </h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden sm:block" />
            <div className="flex flex-col gap-8">
              {TIMELINE.map((item, i) => (
                <div
                  key={item.year}
                  className={`reveal delay-${Math.min(i * 100, 400)} flex gap-6 items-start`}
                >
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center z-10 relative">
                      <span className="font-display font-bold text-xs text-primary-foreground">{item.year}</span>
                    </div>
                  </div>
                  <div className="bg-background border border-border p-5 rounded flex-1">
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section id="materials" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Material Expertise</p>
            <h2 className="font-display font-bold text-4xl text-foreground reveal text-balance">
              Steel Grades We Work In
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {MATERIALS.map((mat, i) => (
              <div
                key={mat.grade}
                className={`reveal delay-${Math.min(i * 100, 400)} p-6 bg-card border border-border rounded hover:border-primary transition-colors group`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="font-display font-bold text-2xl text-primary">{mat.grade}</span>
                  <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded font-medium">
                    {mat.type.split(' ')[0]}
                  </span>
                </div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  {mat.type}
                </p>
                <p className="text-xs text-primary font-semibold mb-3">{mat.strength}</p>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{mat.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {mat.uses.map((use) => (
                    <span key={use} className="text-xs px-2 py-0.5 bg-muted text-muted-foreground rounded">
                      {use}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl text-primary-foreground mb-4 reveal">
            Ready to Start Your Enquiry?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto reveal delay-100">
            Our technical team is available to discuss your requirements and provide a detailed proposal.
          </p>
          <Link
            href="/contact"
            className="reveal delay-200 inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-display font-bold text-sm uppercase tracking-wider rounded hover:bg-primary-foreground/90 transition-colors"
          >
            Send Your Requirement <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
