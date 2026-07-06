'use client'

import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { CONTACT } from '@/lib/data'
import EnquiryForm from '@/components/enquiry-form'

export default function ContactPage() {
  useScrollReveal()

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3 reveal">Get In Touch</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl text-foreground mb-4 reveal text-balance">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed reveal delay-100">
            Share your forging requirement with us. Our technical team will respond within 24
            business hours with a detailed proposal.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-14">
            {/* Left — Contact Info */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div className="reveal">
                <h2 className="font-display font-bold text-2xl text-foreground mb-6">
                  Contact Information
                </h2>

                <div className="flex flex-col gap-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                        Factory Address
                      </p>
                      <p className="text-sm text-foreground leading-relaxed">{CONTACT.address}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                      <Phone size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                        Phone
                      </p>
                      {CONTACT.phone.map((p) => (
                        <a
                          key={p}
                          href={`tel:${p.replace(/\s/g, '')}`}
                          className="block text-sm text-foreground hover:text-primary transition-colors"
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                        Email
                      </p>
                      <a
                        href={`mailto:${CONTACT.email}`}
                        className="text-sm text-foreground hover:text-primary transition-colors"
                      >
                        {CONTACT.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                      <Clock size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                        Business Hours
                      </p>
                      <p className="text-sm text-foreground">{CONTACT.hours.weekdays}</p>
                      <p className="text-sm text-muted-foreground">{CONTACT.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="reveal delay-100 p-6 bg-primary/10 border border-primary/20 rounded">
                <h3 className="font-display font-bold text-base text-foreground mb-2">
                  Our Response Promise
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We respond to every serious enquiry within <strong className="text-foreground">24 business hours</strong>.
                  For urgent requirements, call us directly — our team is available 6 days a week.
                </p>
              </div>
            </div>

            {/* Right — Enquiry Form */}
            <div className="lg:col-span-3 reveal-right">
              <h2 className="font-display font-bold text-2xl text-foreground mb-6">
                Submit Your Requirement
              </h2>
              <div className="bg-card border border-border p-8 rounded">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-background pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-2xl text-foreground mb-6 reveal">
            Find Us in Howrah
          </h2>
          <div className="reveal rounded overflow-hidden border border-border h-80">
            <iframe
              src={CONTACT.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vikash Forge Location – Howrah, West Bengal"
            />
          </div>
        </div>
      </section>
    </>
  )
}
