import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { categories, products } from "../data/products";
import ProductCard from "../components/ProductCard";

const SORTS = {
  featured: { label: "Featured", fn: () => 0 },
  low: {
    label: "Price: low to high",
    fn: (a, b) => a.price - b.price,
  },
  high: {
    label: "Price: high to low",
    fn: (a, b) => b.price - a.price,
  },
};

export default function Catalog() {
  const [params, setParams] = useSearchParams();
  const [sort, setSort] = useState("featured");

  const requestedCategory = params.get("category");
  const active = categories.includes(requestedCategory)
    ? requestedCategory
    : "All";

  const visible = useMemo(
    () =>
      products
        .filter((p) => active === "All" || p.category === active)
        .slice()
        .sort(SORTS[sort].fn),
    [active, sort]
  );

  const choose = (category) => {
    setParams(category === "All" ? {} : { category });
  };

  return (
    <main className="relative isolate min-h-screen bg-brand text-cream">

      {/* Fixed stickers behind the catalogue */}
      <div
        className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/products/button.png"
          alt=""
          className="absolute right-[5%] top-[18%] w-10 rotate-12 opacity-90 md:w-16"
        />

        <img
          src="/products/stars.png"
          alt=""
          className="absolute left-[2%] top-[42%] w-12 -rotate-12 opacity-90 md:left-[4%] md:w-20"
        />

        <img
          src="/products/bug.png"
          alt=""
          className="absolute right-[3%] top-[65%] w-20 rotate-12 opacity-90 md:right-[5%] md:w-23"
        />

        <img
          src="/products/flower.png"
          alt=""
          className="absolute bottom-[8%] left-[8%] w-8 -rotate-6 opacity-90 md:w-15"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-4 py-10 md:px-8 md:py-16 lg:px-12">

        {/* Page heading */}
        <div className="flex flex-col gap-3 border-b border-cream/30 pb-8 md:pb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cream/70 md:text-sm">
            The AYVRIS collection
          </p>

          <h1 className="font-display text-5xl font-black leading-none tracking-tight md:text-7xl lg:text-8xl">
            {active === "All" ? "Shop all" : active}
            <span className="ml-3 align-top font-sans text-base font-normal text-cream/70 md:text-xl">
              ({visible.length})
            </span>
          </h1>

          <p className="max-w-md text-sm leading-relaxed text-cream/80 md:text-base">
            Pieces to wear on repeat. Find your new favourites.
          </p>
        </div>

        {/* Category filters and sorting */}
        <div className="flex flex-col gap-5 border-b border-cream/30 py-5 md:flex-row md:items-center md:justify-between">

          <div className="flex flex-wrap gap-2">
            {["All", ...categories].map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={active === category}
                onClick={() => choose(category)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  active === category
                    ? "border-cream bg-cream text-brand"
                    : "border-cream/50 text-cream hover:bg-cream/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <label className="flex items-center gap-3 text-sm">
            <span className="shrink-0 text-cream/80">
              Sort by
            </span>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="min-w-0 rounded-full border border-cream/50 bg-brand px-4 py-2.5 text-cream outline-none focus:border-cream"
            >
              {Object.entries(SORTS).map(([key, option]) => (
                <option
                  key={key}
                  value={key}
                  className="bg-brand text-cream"
                >
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Product count */}
        <div className="flex items-center justify-between py-5">
          <p
            className="text-xs uppercase tracking-[0.15em] text-cream/70 md:text-sm"
            aria-live="polite"
          >
            {visible.length} {visible.length === 1 ? "piece" : "pieces"}
          </p>

          <span className="font-display text-sm italic text-cream/70">
            Made for your everyday
          </span>
        </div>

        {/* Product grid */}
        {visible.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-3 gap-y-9 sm:gap-x-5 md:grid-cols-3 md:gap-y-12 lg:grid-cols-4 lg:gap-x-6">
            {visible.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[35vh] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-display text-2xl font-bold">
              Nothing here just yet.
            </h2>
            <button
              type="button"
              onClick={() => choose("All")}
              className="rounded-full bg-cream px-6 py-3 text-sm font-semibold text-brand transition-opacity hover:opacity-80"
            >
              View all pieces
            </button>
          </div>
        )}

        {/* Bottom note */}
        <div className="mt-16 border-t border-cream/30 py-8 text-center">
          <p className="font-display text-xl font-bold md:text-2xl">
            Find your kind of blue.
          </p>
          <p className="mt-2 text-xs tracking-widest text-cream/70">
            AYVRIS · MADE TO BE WORN TOGETHER
          </p>
        </div>

      </div>
    </main>
  );
}