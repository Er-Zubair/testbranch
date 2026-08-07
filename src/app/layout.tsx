import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MobileBottomNav } from '@/components/MobileBottomNav';

// NOTE: We load Be Vietnam Pro / Work Sans / Material Symbols via standard
// <link> tags rather than next/font/google. next/font is generally preferred
// (self-hosted at build time, zero layout shift), but it requires build-time
// network access to fonts.googleapis.com. Some CI/CD and sandboxed build
// environments restrict egress to that host, which turns a font choice into
// a broken production build. Plain <link> tags degrade gracefully (falls
// back to system sans-serif) and keep the build hermetic. If your deploy
// target (e.g. Vercel) has unrestricted egress, swapping back to next/font
// is a straightforward, low-risk upgrade.
export const metadata: Metadata = {
  title: {
    default: "King's Dine | Delicious Food, Delivered Fast",
    template: "%s | King's Dine",
  },
  description:
    'Order hot, fresh, delicious food from King\u2019s Dine. Browse the menu, grab a deal, and track your order in real time.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- this rule targets the
            legacy Pages Router; the App Router's root layout is the correct place to load
            global fonts once for the whole app. */}
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700;800&family=Work+Sans:wght@500;600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background font-body text-on-background antialiased">
        <CartProvider>
          <Header />
          <main className="pb-24 pt-16 md:pb-0 md:pt-24">{children}</main>
          <Footer />
          <MobileBottomNav />
        </CartProvider>
      </body>
    </html>
  );
}
