"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { MACHINES } from "@/lib/data";

export default function MachinesPage() {
  useScrollReveal();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3 reveal">Our Forge Floor</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl text-foreground mb-4 reveal text-balance">
            Our Machines
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed reveal delay-100">
            Eighteen heavy machines — from 5-ton hydraulic hammers to precision
            VTL and lathe centres — enabling us to forge and finish components
            to exacting standards.
          </p>
        </div>
      </section>

      {/* Machines Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Swapped grid for flex-wrap with justify-center to automatically center incomplete rows */}
          <div className="flex flex-wrap justify-center gap-8">
            {MACHINES.map((machine, i) => (
              <div
                key={machine.id}
                /* 
            w-full: takes full width on mobile
            md:w-[calc(50%-16px)]: takes clean half width minus the gap offset on tablet
            xl:w-[calc(33.333%-22px)]: takes clean third width minus the gap offset on desktop
          */
                className={`reveal delay-${Math.min(
                  i * 100,
                  300,
                )} w-full md:w-[calc(50%-16px)] xl:w-[calc(33.333%-22px)] bg-card border border-border rounded overflow-hidden group hover:border-primary transition-colors flex flex-col`}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden shrink-0">
                  <Image
                    src={machine.image}
                    alt={machine.name}
                    fill
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary text-primary-foreground text-xs font-display font-bold rounded uppercase tracking-wider">
                      <Zap size={11} />
                      In Service
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="font-display font-bold text-xl text-foreground mb-4">
                    {machine.name}
                  </h2>

                  {/* Capabilities */}
                  <div className="mb-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                      Capabilities
                    </p>
                    <ul className="flex flex-col gap-2">
                      {machine.capabilities.map((cap) => (
                        <li
                          key={cap}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Advantages */}
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                      Production Advantages
                    </p>
                    <ul className="flex flex-col gap-2">
                      {machine.advantages.map((adv) => (
                        <li
                          key={adv}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2
                            size={14}
                            className="text-primary flex-shrink-0 mt-0.5"
                          />
                          {adv}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capacity Statement */}
      <section className="py-20 bg-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: "500 kg", label: "Max Single Forging Weight" },
              { value: "3,500 mm", label: "Max Shaft Length" },
              { value: "1,400 mm", label: "Max VTL Swing Diameter" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display font-bold text-4xl text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-background/70 text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="section-label mb-3 reveal">Start a Project</p>
          <h2 className="font-display font-bold text-4xl text-foreground mb-4 reveal text-balance">
            Have a Forging Requirement?
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed reveal delay-100">
            Share your drawing or specifications with us. Our engineering team
            will review your requirement and confirm feasibility with a complete
            quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4 reveal delay-200">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-wider rounded hover:bg-primary/90 transition-colors"
            >
              Send Your Requirement <ArrowRight size={16} />
            </Link>
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-display font-semibold text-sm uppercase tracking-wider rounded hover:border-primary hover:text-primary transition-colors"
            >
              Download Catalog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
