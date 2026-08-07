import Link from 'next/link';
import { MENU_ITEMS, VALUE_PROPS } from '@/lib/data';
import { MenuItemCard } from '@/components/MenuItemCard';

export default function HomePage() {
  const popularItems = MENU_ITEMS.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-[#fbf6ef] px-margin-mobile py-stack-lg md:flex-row md:px-margin-desktop md:py-margin-desktop">
        <div className="absolute top-0 right-0 -z-10 h-full w-[150%] translate-x-1/4 rounded-l-[100%] bg-primary-container opacity-20 md:w-[60%]" />
        <div className="absolute -bottom-20 -left-20 -z-10 h-64 w-64 rounded-full bg-secondary-fixed opacity-30 blur-3xl" />

        <div className="mx-auto flex w-full max-w-container-max flex-col-reverse items-center gap-stack-lg md:flex-row">
          <div className="relative z-10 flex w-full flex-col items-start gap-stack-sm md:w-1/2 md:gap-stack-md">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 font-label-bold text-sm text-secondary shadow-sm backdrop-blur-sm">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                local_fire_department
              </span>
              Hot &amp; Fresh
            </div>
            <h1 className="font-display text-display-lg-mobile leading-tight text-on-background md:text-display-lg">
              Delicious Food,
              <br />
              <span className="text-primary-container drop-shadow-sm">Delivered</span> Fast!
            </h1>
            <p className="font-body-md max-w-md text-on-surface-variant">
              Enjoy hot, fresh and delicious food at your doorstep. Order your favorites now!
            </p>
            <div className="mt-4 flex w-full flex-wrap gap-4">
              <Link
                href="/menu"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary-container px-8 py-4 font-label-bold text-on-primary-container shadow-[0_4px_12px_rgba(242,183,5,0.3)] transition-transform hover:-translate-y-1 active:scale-95 md:flex-none"
              >
                <span className="material-symbols-outlined">shopping_bag</span>
                Order Now
              </Link>
              <Link
                href="/menu"
                className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-outline px-8 py-4 font-label-bold text-on-background transition-colors hover:bg-surface-variant/50 md:flex-none"
              >
                <span className="material-symbols-outlined">restaurant_menu</span>
                Explore Menu
              </Link>
            </div>
            <div className="mt-4 flex w-full max-w-md items-center gap-4 rounded-2xl border border-surface-variant bg-white/90 p-4 shadow-sm backdrop-blur-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-container text-lg font-bold text-on-primary-container">
                %
              </div>
              <div>
                <div className="font-label-bold text-on-background">Get 20% OFF</div>
                <div className="text-sm text-on-surface-variant">on your first order</div>
              </div>
              <div className="ml-auto border-l border-outline-variant pl-4">
                <div className="mb-1 text-xs text-on-surface-variant">Use Code:</div>
                <div className="font-bold tracking-widest text-secondary">KINGS20</div>
              </div>
            </div>
          </div>

          <div className="relative flex h-[350px] w-full items-center justify-center md:h-[500px] md:w-1/2">
            <div className="absolute h-64 w-64 animate-pulse rounded-full bg-primary-container opacity-10 md:h-96 md:w-96" />
            <div className="absolute h-[80%] w-[80%] animate-[spin_20s_linear_infinite] rounded-full border border-dashed border-primary-container/30" />
            <div className="relative z-10 flex h-full w-full items-center justify-center">
              <div
                className="h-[90%] max-h-[600px] w-[90%] max-w-[600px] rounded-full bg-cover bg-center shadow-[0_20px_50px_rgba(0,0,0,0.15)] drop-shadow-2xl md:h-[110%] md:w-[110%]"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCc1SDjtLVNkR3V_h1bQBoOymTqMdTRgPjTUhkSLXq8H1GuS2R-L9HGdOZ7HXiUKGv4YcduuwL5kWEiqKTgE-m-Yf56GyE6SCj1aJa3wJruIvKAu97kL_IgAgYVQ8DriSl-ZvKiSgWStESvraortUOgvclb-gz-9VIhkRNkYNTwUjMVfF_HAzRhRGL4vj6rSyyQ6SGToh1-9UXjzlg5Ku6cruddtzMujsR9WPtdkxELUFINJdyWv4pTkQ')",
                }}
                role="img"
                aria-label="Large pepperoni and vegetable pizza on a wooden serving board"
              />
            </div>
            <div className="absolute -left-4 top-1/4 flex animate-[bounce_3s_infinite] items-center gap-2 rounded-xl border border-surface-variant bg-white px-4 py-2 shadow-lg md:-left-8">
              <span className="material-symbols-outlined text-2xl text-primary-container">star</span>
              <div>
                <div className="font-label-bold text-xs">4.9/5 Rating</div>
                <div className="text-[10px] text-on-surface-variant">10k+ Reviews</div>
              </div>
            </div>
            <div className="absolute -right-4 bottom-1/4 flex animate-[bounce_4s_infinite] items-center gap-2 rounded-xl border border-surface-variant bg-white px-4 py-2 shadow-lg md:-right-8">
              <span className="material-symbols-outlined text-2xl text-secondary">timer</span>
              <div>
                <div className="font-label-bold text-xs">Super Fast</div>
                <div className="text-[10px] text-on-surface-variant">30 Min Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value props strip */}
      <section className="hide-scrollbar overflow-x-auto bg-inverse-surface px-margin-mobile py-6 text-on-secondary md:px-margin-desktop">
        <div className="mx-auto flex min-w-[600px] max-w-container-max items-center justify-between gap-8">
          {VALUE_PROPS.map((prop, i) => (
            <div key={prop.title} className="flex items-center gap-3">
              {i > 0 && <div className="h-8 w-px bg-outline/30" aria-hidden />}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-container/20 text-primary-container">
                <span className="material-symbols-outlined">{prop.icon}</span>
              </div>
              <div>
                <div className="font-label-bold text-sm">{prop.title}</div>
                <div className="text-xs text-outline-variant">{prop.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular items */}
      <section className="mx-auto max-w-container-max px-margin-mobile py-stack-lg md:px-margin-desktop">
        <div className="mb-stack-md flex items-end justify-between">
          <div>
            <h4 className="font-label-bold mb-1 text-sm uppercase tracking-widest text-secondary">Our Menu</h4>
            <h2 className="font-display text-headline-sm text-on-background md:text-headline-md">Popular Items</h2>
          </div>
          <Link
            href="/menu"
            className="font-label-bold hidden items-center gap-1 text-primary transition-colors hover:text-primary-container md:flex"
          >
            View Full Menu <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>

        <div className="hide-scrollbar flex snap-x snap-mandatory gap-gutter overflow-x-auto pb-8">
          {popularItems.map((item) => (
            <MenuItemCard key={item.id} item={item} className="min-w-[280px] max-w-[280px] snap-start" />
          ))}
        </div>

        <Link
          href="/menu"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-full border-2 border-outline py-3 font-label-bold text-on-background md:hidden"
        >
          View Full Menu <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </section>
    </>
  );
}
