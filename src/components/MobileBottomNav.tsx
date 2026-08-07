'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MOBILE_TABS } from '@/lib/data';
import { clsx } from '@/lib/clsx';

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around rounded-t-xl bg-surface-container-low px-4 pb-4 pt-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.08)] md:hidden"
    >
      {MOBILE_TABS.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            aria-current={isActive ? 'page' : undefined}
            className={clsx(
              'flex flex-col items-center justify-center rounded-full px-4 py-1.5 transition-transform duration-200 active:scale-90',
              isActive
                ? 'bg-primary-container text-on-primary-container'
                : 'text-on-surface-variant hover:bg-surface-variant/50',
            )}
          >
            <span
              className="material-symbols-outlined"
              style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
            >
              {tab.icon}
            </span>
            <span className="font-label-sm mt-0.5">{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
