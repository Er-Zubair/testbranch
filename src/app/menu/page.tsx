'use client';

import { useMemo, useState } from 'react';
import { MENU_CATEGORIES, MENU_ITEMS } from '@/lib/data';
import { MenuItemCard } from '@/components/MenuItemCard';
import { CartSummaryBar } from '@/components/CartSummaryBar';
import { clsx } from '@/lib/clsx';
import type { MenuItem } from '@/types';

type CategoryFilter = 'All' | MenuItem['category'];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return MENU_ITEMS;
    return MENU_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const categories: CategoryFilter[] = ['All', ...MENU_CATEGORIES];

  return (
    <main className="mx-auto w-full max-w-container-max px-margin-mobile pt-stack-md md:px-margin-desktop">
      <section className="mb-stack-md">
        <h1 className="font-display text-headline-md font-bold text-on-background md:text-display-lg-mobile">
          Our Menu
        </h1>
        <p className="font-body-md text-on-surface-variant">Great Taste. Made Fresh. Delivered Fast.</p>
      </section>

      <section className="hide-scrollbar -mx-margin-mobile mb-stack-md overflow-x-auto px-margin-mobile md:mx-0 md:px-0">
        <div className="flex w-max gap-3" role="tablist" aria-label="Menu categories">
          {categories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={clsx(
                  'font-label-bold whitespace-nowrap rounded-full px-6 py-2 shadow-sm transition-transform hover:-translate-y-0.5',
                  isActive
                    ? 'bg-on-background text-surface'
                    : 'border border-outline-variant/50 bg-surface text-on-surface-variant hover:bg-surface-variant/50',
                )}
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>

      <section className="pb-stack-lg">
        <h2 className="font-headline-sm mb-stack-sm font-bold text-on-background">{activeCategory}</h2>

        {filteredItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-outline-variant py-16 text-center">
            <span className="material-symbols-outlined text-4xl text-outline">restaurant</span>
            <p className="font-label-bold text-on-surface">Nothing here yet</p>
            <p className="font-body-md max-w-xs text-on-surface-variant">
              We&apos;re still cooking up items for this category. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>

      <CartSummaryBar />
    </main>
  );
}
