import Image from 'next/image';
import { JOURNEY_MILESTONES } from '@/lib/data';

const PILLARS = [
  {
    icon: 'eco',
    title: 'Quality Ingredients',
    description: 'We source only the freshest, highest-quality ingredients for our dishes.',
  },
  {
    icon: 'local_fire_department',
    title: 'Fresh & Delicious',
    description: 'Every meal is prepared fresh to order, ensuring maximum flavor.',
  },
  {
    icon: 'favorite',
    title: 'Made for You',
    description: 'We cater to your cravings, making sure every bite brings joy.',
  },
] as const;

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <section className="mx-auto max-w-container-max px-margin-mobile pt-stack-md text-center md:px-margin-desktop">
        <h1 className="font-display text-display-lg-mobile text-on-surface">About King&apos;s Dine</h1>
        <p className="font-body-lg mx-auto mt-4 max-w-2xl text-on-surface-variant">
          High-end casual dining that balances the warmth of a family kitchen with the precision of a
          professional culinary team — bringing hot, fresh food to your door, fast.
        </p>
      </section>

      <section className="relative mx-auto mt-stack-lg h-64 w-full max-w-container-max overflow-hidden md:h-80">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvHquHEoVUjx0qef1jy6CqbPIS5SdyNt4zh_j2oohdC8ONfGvL-HivQ9BTOZlUYikPwqdaYZ8axHhNfAPeQAK9bBwyyRQc7OUecftsju8VslLRnKdtGEcRC3bHqkH79iwIL409f6Wh760pTG6tK9EjLSlMxdGmBbLyBbXYrlL7K9GWuaZ_GRJdGWlFMzji6Tv9SX1CA0CbB2Prto2pTzxJS11z8VRpjLBBxjcZ-MS2GF_PjEsInrRzdA"
          alt="King's Dine kitchen and dining atmosphere"
          fill
          sizes="1280px"
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h2 className="font-display text-display-lg-mobile text-white drop-shadow-md">KING&apos;S DINE</h2>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-container-max grid-cols-1 gap-stack-md px-margin-mobile py-stack-lg md:grid-cols-3 md:px-margin-desktop">
        {PILLARS.map((pillar) => (
          <div key={pillar.title} className="rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-6 text-center shadow-sm">
            <span className="material-symbols-outlined mb-3 text-3xl text-primary">{pillar.icon}</span>
            <h3 className="font-headline-sm mb-2 text-on-surface">{pillar.title}</h3>
            <p className="font-body-md text-on-surface-variant">{pillar.description}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto w-full max-w-container-max px-margin-mobile pb-stack-lg md:px-margin-desktop">
        <h2 className="font-headline-md mb-stack-md text-center text-on-surface">Our Journey</h2>
        <div className="grid grid-cols-1 gap-stack-sm md:grid-cols-3">
          {JOURNEY_MILESTONES.map((milestone) => (
            <div key={milestone.title}>
              <h3 className="font-headline-sm mb-2 text-on-surface">{milestone.title}</h3>
              <p className="font-body-md rounded-lg border border-outline-variant/20 bg-surface-container-lowest p-4 text-on-surface-variant shadow-sm">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
