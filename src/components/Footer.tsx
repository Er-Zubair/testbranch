import Link from 'next/link';
import { NAV_LINKS } from '@/lib/data';

export function Footer() {
  return (
    <footer className="hidden bg-inverse-surface px-margin-desktop py-stack-lg text-inverse-on-surface md:block">
      <div className="mx-auto flex max-w-container-max flex-col gap-stack-md md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-headline-sm font-black text-primary-fixed-dim">King&apos;s Dine</p>
          <p className="font-body-md mt-2 max-w-xs text-surface-variant/80">
            High-end casual dining and lunch, delivered fast. Fresh ingredients, gold-standard with all permium 
             service.
          </p>
        </div>
        <div className="flex gap-stack-lg">
          <div className="flex flex-col gap-2">
            <p className="font-label-bold text-sm uppercase tracking-widest text-surface-variant/60">Explore</p>
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="font-body-md text-surface-variant hover:text-primary-fixed-dim">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-label-bold text-sm uppercase tracking-widest text-surface-variant/60">Account</p>
            <Link href="/login" className="font-body-md text-surface-variant hover:text-primary-fixed-dim">
              Log In
            </Link>
            <Link href="/signup" className="font-body-md text-surface-variant hover:text-primary-fixed-dim">
              Sign Up
            </Link>
            <Link href="/track-order" className="font-body-md text-surface-variant hover:text-primary-fixed-dim">
              Track Order
            </Link>
          </div>
        </div>
      </div>
      <p className="font-body-md mt-stack-lg text-center text-sm text-surface-variant/50">
        &copy; {new Date().getFullYear()} King&apos;s Dine. All rights reserved.
      </p>
    </footer>
  );
}
