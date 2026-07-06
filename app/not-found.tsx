import Link from 'next/link'
import { ArrowLeft, Hammer } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center">
      <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
        <Hammer size={28} className="text-primary" />
      </div>

      <p className="section-label mb-3">404 Error</p>

      <h1 className="font-display font-bold text-5xl lg:text-6xl text-foreground mb-4">
        Page Not Found
      </h1>

      <p className="text-muted-foreground leading-relaxed max-w-md mb-10">
        The page you are looking for does not exist or has been moved. Return to our homepage
        to explore our products and capabilities.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-display font-semibold text-sm uppercase tracking-wider rounded hover:bg-primary/90 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-muted-foreground font-display font-semibold text-sm uppercase tracking-wider rounded hover:border-primary hover:text-primary transition-colors"
        >
          View Products
        </Link>
      </div>
    </div>
  )
}
