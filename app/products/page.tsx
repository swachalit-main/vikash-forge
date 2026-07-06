'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { PRODUCTS, MATERIALS } from '@/lib/data'

export default function ProductsPage() {
  useScrollReveal()

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3 reveal">What We Manufacture</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl text-foreground mb-4 reveal text-balance">
            Our Products
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed reveal delay-100">
            Precision open-die forgings manufactured to your specification — rounds, hook nuts,
            shafts, and pinions in a wide range of material grades.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {PRODUCTS.map((product, i) => (
              <div
                key={product.slug}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`reveal-${i % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="relative h-72 lg:h-96 rounded overflow-hidden group">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className={`reveal-${i % 2 === 0 ? 'right' : 'left'} ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <p className="section-label mb-2">Product {String(i + 1).padStart(2, '0')}</p>
                  <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-4">
                    {product.name}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-5 text-sm">{product.description}</p>

                  {/* Materials */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.materials.map((mat) => (
                      <span
                        key={mat}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-display font-semibold rounded uppercase tracking-wider"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>

                  {/* Applications */}
                  <div className="mb-7">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                      Applications
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.slice(0, 3).map((app) => (
                        <span
                          key={app}
                          className="px-3 py-1.5 bg-muted text-muted-foreground text-xs rounded"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-display font-semibold text-sm uppercase tracking-wider rounded hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      View Details <ChevronRight size={15} />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display font-semibold text-sm uppercase tracking-wider rounded hover:bg-primary/90 transition-colors"
                    >
                      Send Enquiry <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Summary */}
      <section className="py-20 bg-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-primary text-xs uppercase tracking-widest font-semibold mb-2">
              Material Grades Available
            </p>
            <h2 className="font-display font-bold text-3xl text-background">
              We work with 7 premium steel grades
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {MATERIALS.map((mat) => (
              <div
                key={mat.grade}
                className="px-5 py-3 border border-background/20 rounded text-center min-w-24"
              >
                <p className="font-display font-bold text-xl text-primary">{mat.grade}</p>
                <p className="text-xs text-background/60 mt-1">{mat.type.split(' ')[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-4xl text-foreground mb-4 reveal text-balance">
            Don&apos;t See What You Need?
          </h2>
          <p className="text-muted-foreground mb-8 reveal delay-100">
            We manufacture custom forgings to your drawing or specification. Send us your
            requirement and we&apos;ll respond with a detailed proposal.
          </p>
          <Link
            href="/contact"
            className="reveal delay-200 inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-wider rounded hover:bg-primary/90 transition-colors"
          >
            Submit a Custom Requirement <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
