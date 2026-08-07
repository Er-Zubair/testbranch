'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { clsx } from '@/lib/clsx';
import type { MenuItem } from '@/types';

export function MenuItemCard({ item, className }: { item: MenuItem; className?: string }) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  function handleAdd() {
    addItem(item);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1500);
  }

  return (
    <article
      className={clsx(
        'group relative flex flex-col rounded-2xl border border-surface-variant bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1',
        className,
      )}
    >
      {item.bestseller && (
        <span className="absolute top-4 left-4 z-10 rounded-full bg-primary-container px-2 py-1 text-[10px] font-bold text-on-primary-container">
          BESTSELLER
        </span>
      )}
      <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl bg-surface-container">
        <Image
          src={item.imageUrl}
          alt={item.imageAlt}
          fill
          sizes="280px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-grow flex-col">
        <h3 className="font-label-bold mb-1 text-lg text-on-background">{item.name}</h3>
        <p className="mb-4 flex-grow line-clamp-2 text-sm text-on-surface-variant">{item.description}</p>
        <div className="mt-auto flex items-center justify-between">
          <span className="font-display text-headline-sm font-black text-secondary">
            ${item.price.toFixed(2)}
          </span>
          <button
            onClick={handleAdd}
            className={clsx(
              'flex items-center gap-1 rounded-full px-4 py-2 font-label-bold text-sm shadow-sm transition-colors active:scale-95',
              justAdded
                ? 'bg-secondary text-on-secondary'
                : 'bg-primary-container text-on-primary-container hover:bg-inverse-primary',
            )}
          >
            <span className="material-symbols-outlined text-sm">
              {justAdded ? 'check' : 'add_shopping_cart'}
            </span>
            {justAdded ? 'Added' : 'Add'}
          </button>
        </div>
      </div>
    </article>
  );
}
