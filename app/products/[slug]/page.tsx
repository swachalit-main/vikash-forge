'use client'

import { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { PRODUCTS } from '@/lib/data'
import EnquiryForm from '@/components/enquiry-form'

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const product = PRODUCTS.find((p) => p.slug === slug)

  if (!product) notFound()

  const otherProducts = PRODUCTS.filter((p) => p.slug !== slug)

  function ProductDetailContent() {
    useScrollReveal()

    return (
      <>
        {/* Breadcrumb */}
        <section className="pt-24 pb-6 bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-foreground transition-colors">Products</Link>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </div>
          </div>
        </section>

        {/* Product Hero */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              {/* Image */}
              <div className="reveal-left">
                <div className="relative h-96 lg:h-[480px] rounded overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Material Tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {product.materials.map((mat) => (
                    <span
                      key={mat}
                      className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-display font-bold rounded uppercase tracking-wider"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="reveal-right">
                <p className="section-label mb-3">Precision Forging</p>
                <h1 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4 text-balance">
                  {product.name}
                </h1>
                <p className="text-muted-foreground leading-relaxed mb-8 text-sm">{product.description}</p>

                {/* Applications */}
                <div className="mb-8">
                  <h3 className="font-display font-semibold text-sm uppercase tracking-widest text-muted-foreground mb-4">
                    Applications
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {product.applications.map((app) => (
                      <li key={app} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={14} className="text-primary flex-shrink-0 mt-0.5" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-display font-semibold text-sm uppercase tracking-wider rounded hover:bg-primary/90 transition-colors"
                  >
                    Send Enquiry <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 px-5 py-3.5 border border-border text-muted-foreground font-semibold text-sm rounded hover:border-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowLeft size={15} /> All Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div>
                <p className="section-label mb-3 reveal">Technical Data</p>
                <h2 className="font-display font-bold text-3xl text-foreground mb-8 reveal">
                  Specifications
                </h2>
                <div className="reveal border border-border rounded overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted border-b border-border">
                        <th className="text-left px-5 py-3 font-display font-semibold text-xs uppercase tracking-wider text-muted-foreground">
                          Parameter
                        </th>
                        <th className="text-left px-5 py-3 font-display font-semibold text-xs uppercase tracking-wider text-muted-foreground">
                          Value / Range
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.specs.map((spec, i) => (
                        <tr
                          key={spec.parameter}
                          className={`border-b border-border last:border-0 ${
                            i % 2 === 1 ? 'bg-muted/30' : ''
                          }`}
                        >
                          <td className="px-5 py-3.5 text-muted-foreground font-medium">
                            {spec.parameter}
                          </td>
                          <td className="px-5 py-3.5 text-foreground font-semibold">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  * Specifications are indicative. Custom sizes and grades available on request.
                </p>
              </div>

              {/* Enquiry Form */}
              <div className="reveal-right">
                <h2 className="font-display font-bold text-2xl text-foreground mb-6">
                  Enquire About This Product
                </h2>
                <div className="bg-background border border-border rounded p-7">
                  <EnquiryForm defaultProduct={product.name} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Products */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-2xl text-foreground mb-8 reveal">
              Other Products
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {otherProducts.map((p, i) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className={`reveal delay-${i * 100} group bg-card border border-border rounded overflow-hidden flex flex-col hover:border-primary transition-colors`}
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display font-bold text-base text-foreground mb-1">{p.name}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">{p.shortDesc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </>
    )
  }

  return <ProductDetailContent />
}
