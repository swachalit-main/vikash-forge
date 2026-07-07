'use client'

import Link from 'next/link'
import { ArrowRight, BookOpen, Building2, Download, FileText, Package } from 'lucide-react'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

const DOWNLOADS = [
  {
    id: 'company-profile',
    icon: Building2,
    title: 'Company Profile',
    description:
      'Complete overview of Vikash Forge Pvt. Ltd. — our history, capabilities, machinery, quality certifications, and client references.',
    fileSize: '3.2 MB',
    pages: '16 pages',
    updated: 'January 2025',
    href: '#',
  },
  {
    id: 'product-catalog',
    icon: Package,
    title: 'Product Catalog',
    description:
      'Detailed catalog featuring all our forged products — Rounds, Hook Nuts, Shafts, and Pinions — with full specifications, material grades, and application data.',
    fileSize: '5.8 MB',
    pages: '32 pages',
    updated: 'February 2025',
    href: '#',
  },
  {
    id: 'materials-datasheet',
    icon: FileText,
    title: 'Material Grades Datasheet',
    description:
      'Technical datasheet for all steel grades we work in — EN9, EN19, EN24, DB6, EN8D, CL4, and CL2 — with composition, mechanical properties, and applications.',
    fileSize: '1.4 MB',
    pages: '8 pages',
    updated: 'March 2025',
    href: '#',
  },
  {
    id: 'quality-certifications',
    icon: BookOpen,
    title: 'Quality & Compliance Document',
    description:
      'Our quality management process, inspection procedures, testing capabilities, and compliance with IS, DIN, and customer standards.',
    fileSize: '2.1 MB',
    pages: '12 pages',
    updated: 'January 2025',
    href: '#',
  },
]

export default function CatalogPage() {
  useScrollReveal()

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3 reveal">Resources</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl text-foreground mb-4 reveal text-balance">
            Download Catalog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed reveal delay-100">
            Download our company profile, product catalog, and technical datasheets to learn more
            about our capabilities and share with your procurement team.
          </p>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {DOWNLOADS.map((doc, i) => (
              <div
                key={doc.id}
                className={`reveal delay-${i * 100} group bg-card border border-border rounded p-7 flex flex-col hover:border-primary transition-colors`}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <doc.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground">{doc.title}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-muted-foreground">{doc.pages}</span>
                      <span className="text-muted-foreground/40">·</span>
                      <span className="text-xs text-muted-foreground">{doc.fileSize}</span>
                      <span className="text-muted-foreground/40">·</span>
                      <span className="text-xs text-muted-foreground">Updated {doc.updated}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {doc.description}
                </p>

                {/* PDF Preview UI */}
                <div className="bg-muted/50 border border-border rounded p-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-14 bg-border rounded flex items-center justify-center">
                      <FileText size={18} className="text-muted-foreground" />
                    </div>
                    <div>
                      <div className="h-2 bg-border rounded w-28 mb-1.5" />
                      <div className="h-2 bg-border rounded w-20 mb-1.5" />
                      <div className="h-2 bg-border rounded w-24" />
                    </div>
                    <div className="ml-auto text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 py-1 border border-border rounded">
                      PDF
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => alert('To receive our catalog, please submit your enquiry and we will email it to you.')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-display font-semibold text-sm uppercase tracking-wider rounded hover:bg-primary/90 transition-colors"
                >
                  <Download size={16} />
                  Download {doc.title.split(' ')[0]}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Custom */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-3 reveal">Need More Information?</p>
          <h2 className="font-display font-bold text-4xl text-foreground mb-4 reveal text-balance">
            Request a Customised Technical Proposal
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto reveal delay-100">
            If you have a specific requirement — dimensions, material grade, quantity, or application
            — our team can prepare a tailored technical proposal and quotation for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4 reveal delay-200">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-wider rounded hover:bg-primary/90 transition-colors"
            >
              Send Your Requirement <ArrowRight size={16} />
            </Link>
            <a
              href="mailto:enquiry@vikashforgepvtltd.com"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-display font-semibold text-sm uppercase tracking-wider rounded hover:border-primary hover:text-primary transition-colors"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
