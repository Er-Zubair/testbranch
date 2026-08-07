'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NAV_LINKS } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import { clsx } from '@/lib/clsx';

function CartButton({ className }: { className?: string }) {
  const { itemCount } = useCart();
  return (
    <Link
      href="/menu"
      aria-label={`Cart, ${itemCount} item${itemCount === 1 ? '' : 's'}`}
      className={clsx('relative rounded-full p-2 text-primary hover:bg-surface-variant/20', className)}
    >
      <span className="material-symbols-outlined">shopping_cart</span>
      {itemCount > 0 && (
        <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-on-secondary">
          {itemCount > 9 ? '9+' : itemCount}
        </span>
      )}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile top app bar */}
      <header className="fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between bg-surface px-gutter shadow-sm md:hidden">
        <button
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="rounded-full p-2 text-primary hover:bg-surface-variant/20"
        >
          <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
        <Link href="/" className="font-display text-headline-sm font-black text-secondary">
          King&apos;s Dine
        </Link>
        <CartButton />
      </header>

      {/* Mobile slide-down menu */}
      {isMenuOpen && (
        <div className="fixed inset-x-0 top-16 z-40 border-t border-outline-variant/30 bg-surface shadow-md md:hidden">
          <nav className="flex flex-col p-gutter" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={clsx(
                  'font-body-md rounded-lg px-3 py-3 font-bold',
                  pathname === link.href
                    ? 'bg-primary-container/20 text-primary'
                    : 'text-on-surface-variant hover:bg-surface-variant/20',
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-3 border-t border-outline-variant/30 pt-3">
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="flex-1 rounded-full border-2 border-outline py-2 text-center font-label-bold"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                onClick={() => setIsMenuOpen(false)}
                className="flex-1 rounded-full bg-primary-container py-2 text-center font-label-bold text-on-primary-container"
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}

      {/* Desktop nav */}
      <nav className="fixed top-0 left-0 z-50 hidden h-24 w-full items-center justify-between bg-surface px-margin-desktop shadow-sm md:flex">
        <Link href="/" className="font-display text-headline-md font-black text-secondary">
          King&apos;s Dine
        </Link>
        <div className="flex gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'font-body-md font-bold',
                pathname === link.href
                  ? 'border-b-2 border-primary text-primary'
                  : 'text-on-surface-variant hover:text-primary',
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="rounded-full px-4 py-2 font-label-bold text-on-surface-variant hover:bg-surface-variant/20"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-primary-container px-5 py-2 font-label-bold text-on-primary-container hover:bg-primary hover:text-on-primary"
          >
            Sign Up
          </Link>
          <CartButton className="ml-2" />
        </div>
      </nav>
    </>
  );
}
