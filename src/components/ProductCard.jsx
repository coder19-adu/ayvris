import { useState } from "react";
import ProductImage from "./ProductImage";
import QuickAddModal from "./QuickAddModal";
import { formatPrice } from "../lib/format";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const [quickAddOpen, setQuickAddOpen] = useState(false);

  return (
    <>
      <article className="group flex flex-col">
        {/* Product image */}
        <Link
          to={`/product/${product.id}`}
          className="group/image relative block overflow-hidden rounded-2xl bg-card p-4 sm:p-5"
        >
          {product.isNew && (
            <span className="absolute left-3 top-3 z-10 rounded-full bg-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cream">
              New
            </span>
          )}

          <div className="mx-auto aspect-[4/5] w-[92%] transition-transform duration-500 ease-out group-hover/image:scale-105">
            <ProductImage
              type={product.type}
              image={product.image}
              color={product.color}
              label={product.name}
            />
          </div>
        </Link>

        {/* Product name, price and quick-add */}
        <div className="mt-3 flex items-start justify-between gap-3">
          <Link
            to={`/product/${product.id}`}
            className="min-w-0 flex-1"
          >
            <h3 className="font-display text-sm font-semibold leading-snug transition-opacity duration-200 group-hover:opacity-70 sm:text-base">
              {product.name}
            </h3>

            <p className="mt-1 text-sm text-brand/80">
              {formatPrice(product.price)}
            </p>
          </Link>

          <button
            type="button"
            onClick={() => setQuickAddOpen(true)}
            aria-label={`Quick add ${product.name} to cart`}
            title="Quick add"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand/30 text-brand transition-all duration-200 hover:border-brand hover:bg-brand hover:text-cream"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 5v14" />
              <path d="M5 12h14" />
            </svg>
          </button>
        </div>
      </article>

      {/* Quick-add modal */}
      {quickAddOpen && (
        <QuickAddModal
          product={product}
          onClose={() => setQuickAddOpen(false)}
        />
      )}
    </>
  );
}