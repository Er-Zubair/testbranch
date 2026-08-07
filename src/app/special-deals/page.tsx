'use client';

import Image from 'next/image';
import { useState } from 'react';
import { DEALS, LIMITED_TIME_BANNER } from '@/lib/data';

export default function SpecialDealsPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const highlightDeal = DEALS.find((deal) => deal.variant === 'highlight');
  const cardDeals = DEALS.filter((deal) => deal.variant === 'card');

  async function handleCopyCode(code: string) {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      window.setTimeout(() => setCopiedCode(null), 2000);
    } catch {
      // Clipboard API can be unavailable (e.g. insecure context) — fail silently,
      // the code is already visible on screen for manual copy.
    }
  }

  return (
    <main className="mx-auto max-w-container-max px-margin-mobile pt-stack-md md:px-margin-desktop">
      <div className="mb-stack-lg mt-4 text-center md:mt-8 md:text-left">
        <h1 className="font-display text-display-lg-mobile text-on-background md:text-display-lg">
          Special Deals
        </h1>
        <p className="font-body-lg text-on-surface-variant">More Food. More Savings.</p>
      </div>

      <div className="mb-stack-lg grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {highlightDeal && (
          <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-primary-container p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 h-32 w-32 rounded-bl-full bg-primary-fixed opacity-50" />
            <div className="relative z-10">
              <h2 className="font-display text-headline-md text-on-primary-container">{highlightDeal.title}</h2>
              <h3 className="font-body-lg mb-4 font-semibold text-on-primary-container">{highlightDeal.subtitle}</h3>
              {highlightDeal.promoCode && (
                <button
                  onClick={() => handleCopyCode(highlightDeal.promoCode!)}
                  className="mb-4 inline-flex items-center gap-2 rounded-full bg-surface/30 px-3 py-1 transition-colors hover:bg-surface/50"
                >
                  <p className="font-label-bold text-sm text-on-primary-container">
                    Use Code: <span className="font-bold text-surface-tint">{highlightDeal.promoCode}</span>
                  </p>
                  <span className="material-symbols-outlined text-sm text-on-primary-container">
                    {copiedCode === highlightDeal.promoCode ? 'check' : 'content_copy'}
                  </span>
                </button>
              )}
              <p className="font-body-md mb-6 max-w-[200px] text-on-primary-container opacity-90">
                {highlightDeal.description}
              </p>
            </div>
            <button className="w-max rounded-full bg-surface px-6 py-3 font-label-bold text-primary shadow-sm transition-colors hover:bg-surface-bright active:scale-95">
              Order Now
            </button>
          </div>
        )}

        {cardDeals.map((deal) => (
          <div
            key={deal.id}
            className="flex flex-col overflow-hidden rounded-2xl bg-surface shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
          >
            <div className="p-6 pb-2">
              <h2 className="font-headline-sm mb-1 text-on-background">{deal.title}</h2>
              <h3 className="font-body-md mb-2 font-semibold text-secondary">{deal.subtitle}</h3>
              <p className="font-body-md mb-3 text-on-surface-variant">{deal.description}</p>
              {deal.price && <p className="font-display text-headline-md mb-4 text-primary">{deal.price}</p>}
            </div>
            <div className="relative mt-auto h-40 w-full">
              {deal.imageUrl && (
                <Image
                  src={deal.imageUrl}
                  alt={deal.imageAlt ?? deal.title}
                  fill
                  sizes="400px"
                  className="object-cover object-bottom"
                />
              )}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-surface to-transparent" />
              <button className="absolute bottom-4 left-6 rounded-full bg-primary-container px-6 py-2.5 font-label-bold text-on-primary-container shadow-md transition-colors hover:bg-primary-fixed active:scale-95">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="relative mb-stack-lg flex min-h-[160px] items-center overflow-hidden rounded-2xl bg-inverse-surface p-8 shadow-[0_12px_40px_rgb(0,0,0,0.12)]">
        <div className="relative z-10 w-full md:w-1/2">
          <h2 className="font-display text-headline-md mb-2 text-inverse-on-surface">{LIMITED_TIME_BANNER.title}</h2>
          <p className="font-body-md text-surface-variant">{LIMITED_TIME_BANNER.subtitle}</p>
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-2/3 overflow-hidden rounded-r-2xl md:w-1/2">
          <div className="absolute inset-0 z-10 hidden bg-gradient-to-r from-inverse-surface via-inverse-surface/80 to-transparent md:block" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-inverse-surface via-inverse-surface/60 to-transparent md:hidden" />
          <Image
            src={LIMITED_TIME_BANNER.imageUrl}
            alt={LIMITED_TIME_BANNER.imageAlt}
            fill
            sizes="640px"
            className="scale-110 transform object-cover object-right md:object-center"
          />
        </div>
      </div>
    </main>
  );
}
