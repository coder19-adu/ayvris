import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { categories, products } from "../data/products";
import ProductCard from "../components/ProductCard";

const SORTS = {
  featured: { label: "Featured", fn: () => 0 },
  low: { label: "Price: low to high", fn: (a, b) => a.price - b.price },
  high: { label: "Price: high to low", fn: (a, b) => b.price - a.price },
};

export default function Catalog() {
  const [params, setParams] = useSearchParams();
  const [sort, setSort] = useState("featured");
  const active = categories.includes(params.get("category")) ? params.get("category") : "All";

  const visible = useMemo(
    () =>
      products
        .filter((p) => active === "All" || p.category === active)
        .slice()
        .sort(SORTS[sort].fn),
    [active, sort]
  );

  const choose = (c) => (c === "All" ? setParams({}) : setParams({ category: c }));

  return (
    <div className="mx-auto max-w-7xl px-5 py-12">
      <h1 className="font-display text-5xl font-extrabold text-brand md:text-7xl">
        Catalog
      </h1>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-y border-brand/15 py-4">
        <div className="flex flex-wrap gap-2">
          {["All", ...categories].map((c) => (
            <button
              key={c}
              aria-pressed={active === c}
              onClick={() => choose(c)}
              className={`rounded-full border px-4 py-2 font-medium transition-colors ${
                active === c
                  ? "border-brand bg-brand text-cream"
                  : "border-brand/30 hover:border-brand"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-2 text-sm font-medium">
          Sort by
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-full border border-brand/30 bg-card px-3 py-2"
          >
            {Object.entries(SORTS).map(([k, s]) => (
              <option key={k} value={k}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="mt-4 text-sm text-ink/70" aria-live="polite">
        {visible.length} {visible.length === 1 ? "product" : "products"}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
        {visible.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}