"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, Hammer, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { PRODUCTS } from "@/lib/data";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Products",
    href: "/products",
    children: [
      ...PRODUCTS.map((product) => ({
        label: product.name,
        href: `/products/${product.slug}`,
      })),
    ],
  },
  { label: "Our Machines", href: "/machines" },
  { label: "Contact Us", href: "/contact" },
  { label: "Catalog", href: "/catalog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || mobileOpen
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-16 h-16  rounded text-primary-foreground">
              {/* <Hammer size={18} strokeWidth={2.5} /> */}
              <Image
                src="/vikash_forge.png"
                alt="Vikash Forge Logo"
                width={60}
                height={60}
              />
            </div>
            <div className="leading-tight">
              <p className="font-display font-bold text-md uppercase tracking-wider text-foreground">
                Vikash Forge
              </p>
              <p className="text-sm text-muted-foreground tracking-widest uppercase hidden sm:block">
                Pvt. Ltd.
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.href} className="relative group">
                  <button
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded",
                      pathname.startsWith(link.href)
                        ? "text-primary"
                        : "text-foreground hover:text-foreground",
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className="transition-transform group-hover:rotate-180"
                    />
                  </button>
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-48">
                    <div className="bg-card border border-border rounded shadow-lg overflow-hidden">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block px-4 py-2.5 text-sm transition-colors",
                            pathname === child.href
                              ? "text-primary bg-primary/10"
                              : "text-foreground hover:text-foreground hover:bg-muted",
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors rounded",
                    pathname === link.href
                      ? "text-primary"
                      : "text-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded hover:bg-primary/90 transition-colors"
            >
              Send Enquiry
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.href}>
                  <button
                    onClick={() => setProductsOpen(!productsOpen)}
                    className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={cn(
                        "transition-transform",
                        productsOpen && "rotate-180",
                      )}
                    />
                  </button>
                  {productsOpen && (
                    <div className="ml-4 mt-1 flex flex-col gap-0.5">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2.5 text-sm font-medium rounded",
                    pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              ),
            )}
            <Link
              href="/contact"
              className="mt-3 px-4 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded text-center"
            >
              Send Enquiry
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
