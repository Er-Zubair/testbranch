'use client';

import Image from 'next/image';
import { useState, type FormEvent } from 'react';
import { DEFAULT_ORDER_STAGES } from '@/lib/data';
import { OrderProgressTracker } from '@/components/OrderProgressTracker';
import { trackOrderSchema, getFieldErrors } from '@/lib/validation';
import { Button } from '@/components/ui/Button';

type LookupState = 'idle' | 'loading' | 'success' | 'not-found';

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState('#KD-84729');
  const [error, setError] = useState<string | undefined>();
  const [lookupState, setLookupState] = useState<LookupState>('success');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const errors = getFieldErrors(trackOrderSchema, { orderId });
    if (errors.orderId) {
      setError(errors.orderId);
      setLookupState('idle');
      return;
    }
    setError(undefined);
    setLookupState('loading');

    // Simulated lookup — in production this calls GET /api/orders/:id.
    window.setTimeout(() => {
      const found = orderId.trim().toUpperCase() === '#KD-84729' || /^#?KD-\d{5}$/i.test(orderId.trim());
      setLookupState(found ? 'success' : 'not-found');
    }, 700);
  }

  return (
    <main className="mx-auto w-full max-w-container-max flex-grow px-margin-mobile pt-stack-md md:px-margin-desktop md:pt-8">
      <div className="mb-stack-lg text-center md:text-left">
        <h1 className="font-display text-display-lg-mobile text-on-background md:text-display-lg">
          Track Your Order
        </h1>
        <p className="font-body-md text-on-surface-variant">Real-time updates, right here</p>
      </div>

      <div className="relative flex flex-col items-center gap-stack-lg overflow-hidden rounded-xl bg-white p-stack-md shadow-lg md:flex-row md:p-stack-lg">
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-primary-container opacity-20 blur-3xl" />

        <div className="z-10 flex w-full flex-col gap-stack-md md:w-1/2">
          <form onSubmit={handleSubmit} noValidate>
            <div className="flex w-full max-w-md gap-2">
              <div className="flex-1">
                <label htmlFor="orderId" className="sr-only">
                  Order ID
                </label>
                <input
                  id="orderId"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="Enter Your Order ID"
                  type="text"
                  aria-invalid={Boolean(error)}
                  className="font-body-md w-full rounded-lg border border-outline-variant bg-surface px-4 py-3 text-on-surface transition-colors focus:border-primary-container focus:outline-none focus:ring-1 focus:ring-primary-container"
                />
              </div>
              <Button type="submit" size="md" className="!rounded-lg !py-3" isLoading={lookupState === 'loading'}>
                Track Order
              </Button>
            </div>
            {error && (
              <p className="mt-2 text-sm text-error" role="alert">
                {error}
              </p>
            )}
          </form>

          {lookupState === 'not-found' && (
            <div className="flex items-start gap-3 rounded-lg bg-error-container p-4">
              <span className="material-symbols-outlined mt-0.5 text-on-error-container">error</span>
              <p className="font-body-md text-on-error-container">
                We couldn&apos;t find an order with that ID. Double-check it and try again, or contact support.
              </p>
            </div>
          )}

          {lookupState === 'success' && (
            <>
              <OrderProgressTracker stages={DEFAULT_ORDER_STAGES} />
              <div className="mt-8 flex items-start gap-4 rounded-lg bg-surface-container-low p-4">
                <span className="material-symbols-outlined mt-1 text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                  info
                </span>
                <div>
                  <p className="font-label-bold text-on-surface">Estimated Arrival</p>
                  <p className="font-display text-headline-sm text-primary">15 - 20 mins</p>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="relative z-10 mt-stack-md flex w-full items-center justify-center md:mt-0 md:w-1/2">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf3JqlUtypI8H2zyY_b1WtzCExtRqONQsaATyPG2afty3Nfr8BhQ2OcpSGgK-HvA6xfH3WG-FKdn9EgrqWVFkkCt0jxgOi_mHlgJ7r5TIi5JVQ6Tr9lLU96CvDmB2eaAqYXLrJc-34MbW44As-JflSTW2BHfl_et4uZMD4kTzFNd2uC5Bf-vjskWLbA0_r89m_wSJhdacSCjA8d3JkEBpHnCYLE81a0Cj0vk-p6fCVS9YGP_ksn3SkFA"
            alt="Isometric illustration of a King's Dine delivery bag"
            width={400}
            height={300}
            className="h-auto max-h-[300px] w-full max-w-full object-contain drop-shadow-2xl transition-transform duration-500 ease-out hover:scale-105"
          />
        </div>
      </div>
    </main>
  );
}
