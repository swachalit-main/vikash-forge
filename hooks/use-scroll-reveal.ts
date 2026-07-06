'use client'

import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    document.querySelectorAll(selectors).forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
