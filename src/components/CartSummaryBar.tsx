'use client';

import { useCart } from '@/context/CartContext';

export function CartSummaryBar() {
  const { itemCount, subtotal, clear } = useCart();

  if (itemCount === 0) return null;

  return (
    <div className="sticky bottom-20 z-30 mx-auto flex w-full max-w-md items-center justify-between gap-4 rounded-full bg-inverse-surface px-6 py-3 text-inverse-on-surface shadow-lg md:bottom-6">
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-primary-fixed-dim">shopping_cart</span>
        <span className="font-label-bold text-sm">
          {itemCount} item{itemCount === 1 ? '' : 's'} &middot; ${subtotal.toFixed(2)}
        </span>
      </div>
      <button
        onClick={clear}
        className="font-label-bold rounded-full bg-primary-fixed-dim px-4 py-1.5 text-sm text-on-primary-fixed transition-colors hover:bg-primary-container"
      >
        Clear
      </button>
    </div>
  );
}
