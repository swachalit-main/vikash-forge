'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { cn } from '@/lib/utils'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^[+\d\s\-()]{8,15}$/, 'Enter a valid phone number'),
  email: z.string().email('Enter a valid email address'),
  product: z.string().min(1, 'Please select a product of interest'),
  message: z.string().min(10, 'Please describe your requirement (min 10 characters)'),
})

type FormData = z.infer<typeof schema>

interface EnquiryFormProps {
  compact?: boolean
  defaultProduct?: string
}

const PRODUCTS = [
  'Forged Round',
  'Hook Nut',
  'Forged Shaft',
  'Forged Pinion',
  'Multiple Products',
  'Custom / Other',
]

export default function EnquiryForm({ compact = false, defaultProduct = '' }: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { product: defaultProduct },
  })

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
        <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center">
          <CheckCircle2 className="text-primary" size={28} />
        </div>
        <div>
          <h3 className="font-display font-bold text-lg text-foreground mb-1">
            Enquiry Received!
          </h3>
          <p className="text-sm text-muted-foreground max-w-xs">
            Thank you for contacting Vikash Forge. Our team will get back to you within 24 business
            hours.
          </p>
        </div>
      </div>
    )
  }

  const inputClass = (hasError: boolean) =>
    cn(
      'w-full px-4 py-2.5 rounded border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors',
      hasError ? 'border-destructive' : 'border-input'
    )

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn('flex flex-col gap-4', compact && 'gap-3')}>
      <div className={cn('grid gap-4', compact ? 'grid-cols-1' : 'sm:grid-cols-2')}>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
            Full Name <span className="text-primary">*</span>
          </label>
          <input
            {...register('name')}
            placeholder="Rajiv Sharma"
            className={inputClass(!!errors.name)}
          />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
            Phone Number <span className="text-primary">*</span>
          </label>
          <input
            {...register('phone')}
            placeholder="+91-98XXX-XXXXX"
            className={inputClass(!!errors.phone)}
          />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>}
        </div>
      </div>

      <div className={cn('grid gap-4', compact ? 'grid-cols-1' : 'sm:grid-cols-2')}>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
            Email Address <span className="text-primary">*</span>
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="you@company.com"
            className={inputClass(!!errors.email)}
          />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
            Product Interested In <span className="text-primary">*</span>
          </label>
          <select {...register('product')} className={inputClass(!!errors.product)}>
            <option value="">Select a product…</option>
            {PRODUCTS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          {errors.product && (
            <p className="mt-1 text-xs text-destructive">{errors.product.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
          Message / Requirement <span className="text-primary">*</span>
        </label>
        <textarea
          {...register('message')}
          rows={compact ? 3 : 4}
          placeholder="Please describe your requirement, quantity, material grade, dimensions, etc."
          className={cn(inputClass(!!errors.message), 'resize-none')}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display font-semibold text-sm uppercase tracking-wider rounded hover:bg-primary/90 transition-colors disabled:opacity-70"
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Submitting…
          </>
        ) : (
          <>
            <Send size={16} />
            Submit Requirement
          </>
        )}
      </button>
    </form>
  )
}
