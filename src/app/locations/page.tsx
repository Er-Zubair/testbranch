'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { STORE_LOCATIONS } from '@/lib/data';
import { clsx } from '@/lib/clsx';

export default function LocationsPage() {
  const [query, setQuery] = useState('');
  const [isLocating, setIsLocating] = useState(false);

  const filteredLocations = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return STORE_LOCATIONS;
    return STORE_LOCATIONS.filter((loc) =>
      [loc.name, loc.address, loc.city].some((field) => field.toLowerCase().includes(normalized)),
    );
  }, [query]);

  function handleUseCurrentLocation() {
    setIsLocating(true);
    // Simulated geolocation lookup — a production build would call
    // navigator.geolocation.getCurrentPosition and reverse-geocode the result.
    window.setTimeout(() => {
      setQuery('New York');
      setIsLocating(false);
    }, 600);
  }

  return (
    <main className="mx-auto max-w-container-max px-margin-mobile pt-stack-md md:px-margin-desktop md:pt-[120px]">
      <div className="mb-stack-md text-center md:text-left">
        <h1 className="font-headline-sm md:font-headline-md text-on-surface">Find Us Near You</h1>
        <p className="font-body-md text-on-surface-variant">
          We&apos;re always close by! Find your nearest King&apos;s Dine location.
        </p>
      </div>

      <div className="mb-stack-lg flex flex-col gap-stack-md md:flex-row">
        <div className="flex w-full flex-col gap-4 md:w-1/3">
          <div className="relative w-full overflow-hidden rounded-lg border border-outline-variant/30 shadow-sm transition-all focus-within:border-primary-container focus-within:ring-1 focus-within:ring-primary-container">
            <label htmlFor="location-search" className="sr-only">
              Search by city, address or store name
            </label>
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/60">
              location_on
            </span>
            <input
              id="location-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter your location"
              type="text"
              className="font-body-md w-full rounded-lg border-none bg-surface-container-lowest py-3 pl-12 pr-4 text-on-surface placeholder:text-on-surface-variant/50 focus:ring-0"
            />
          </div>
          <button
            onClick={handleUseCurrentLocation}
            disabled={isLocating}
            className="flex items-center justify-center gap-2 rounded-lg border border-primary/20 py-2 font-label-bold text-primary transition-colors hover:bg-surface-variant/20 disabled:opacity-60"
          >
            <span className={clsx('material-symbols-outlined', isLocating && 'animate-spin')}>
              {isLocating ? 'progress_activity' : 'my_location'}
            </span>
            {isLocating ? 'Locating…' : 'Use Current Location'}
          </button>
        </div>

        <div className="group relative h-[250px] w-full overflow-hidden rounded-xl shadow-sm md:h-[400px] md:w-2/3">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYuOI6X7fnEG9YbIecnKX0RD41C9sE3CxSivXTrlsPhUl8-I9h7zhTM7qekdxYxudoqMT8DzntL3biMw_z84f-pvZAK6wSvWlINBAs-tFOrNpsOQsV0HfWT5xF_PWUJyc3uJ4S1pJnxKjIJX2YoeaXWCeZfScOFd5jF8Duc_wmHTejBfmyyyE2DhUSnOTfiEMJMrLTyByRM610VYVIx4TUgx5jCDx5lhuxJ1QHWjgm75u966E7FizIjQ"
            alt="Stylized map showing three King's Dine locations"
            fill
            sizes="800px"
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
        </div>
      </div>

      <section className="pb-stack-lg">
        {filteredLocations.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-outline-variant py-16 text-center">
            <span className="material-symbols-outlined text-4xl text-outline">location_off</span>
            <p className="font-label-bold text-on-surface">No locations match &ldquo;{query}&rdquo;</p>
            <p className="font-body-md max-w-xs text-on-surface-variant">
              Try a different city, street, or store name.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-stack-md md:grid-cols-2 lg:grid-cols-3">
            {filteredLocations.map((location) => (
              <div
                key={location.id}
                className="flex flex-col gap-4 rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={clsx(
                        'rounded-full p-2',
                        location.isOpen ? 'bg-primary-container/20 text-primary' : 'bg-surface-variant/50 text-on-surface-variant',
                      )}
                    >
                      <span className="material-symbols-outlined">storefront</span>
                    </div>
                    <h3 className="font-headline-sm font-bold text-on-surface">{location.name}</h3>
                  </div>
                  <span
                    className={clsx(
                      'font-label-sm rounded-full px-3 py-1 font-bold',
                      location.isOpen ? 'bg-secondary-container/10 text-secondary' : 'bg-surface-variant/30 text-on-surface-variant',
                    )}
                  >
                    {location.distance}
                  </span>
                </div>
                <div className="mt-2 flex flex-col gap-2 font-body-md text-on-surface-variant">
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined mt-0.5 text-[20px] text-outline">location_on</span>
                    <p>
                      {location.address}
                      <br />
                      {location.city}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-outline">schedule</span>
                    <p>{location.hours}</p>
                  </div>
                  <div
                    className={clsx(
                      'font-label-bold mt-1 flex items-center gap-2',
                      location.isOpen ? 'text-primary' : 'text-on-surface-variant',
                    )}
                  >
                    <span className={clsx('h-2 w-2 rounded-full', location.isOpen ? 'bg-green-500' : 'bg-red-500')} />
                    {location.isOpen ? 'Open Now' : 'Closed'}
                  </div>
                </div>
                <div className="mt-auto flex gap-3 pt-4">
                  <button className="font-label-bold flex-1 rounded-lg border border-outline py-2 text-on-surface transition-colors hover:bg-surface-variant/30">
                    Details
                  </button>
                  <button
                    disabled={!location.isOpen}
                    className={clsx(
                      'font-label-bold flex-1 rounded-lg py-2 shadow-sm transition-colors',
                      location.isOpen
                        ? 'bg-primary-container text-on-primary-container hover:bg-primary-container/80'
                        : 'cursor-not-allowed bg-surface-variant text-on-surface-variant/50',
                    )}
                  >
                    Order Here
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
