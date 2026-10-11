import { useState } from "react";
import ProductImage from "./ProductImage";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../lib/format";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { add } = useCart();
  const [size, setSize] = useState(product.sizes.length > 1 ? "M" : product.sizes[0]);

  return (
    <article className="flex flex-col transition-transform duration-300 ease-out hover:-translate-y-1">
      <Link to={`/product/${product.id}`} className="group block">
        <div className="relative aspect-[4/5] overflow-hidden bg-card p-6">
          {product.isNew && (
            <span className="absolute left-3 top-3 z-10 bg-brand px-2 py-1 text-xs font-semibold text-cream">
              New
            </span>
          )}
          <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-105">
            <ProductImage
              type={product.type}
              image={product.image}
              color={product.color}
              label={product.name}
            />
          </div>
        </div>

        <div className="mt-3 flex items-baseline justify-between gap-3">
          <h3 className="font-display text-lg font-bold leading-tight group-hover:underline">
            {product.name}
          </h3>
          <p className="shrink-0 font-semibold text-brand">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>

      {product.sizes.length > 1 && (
        <div className="mt-3 flex gap-1.5" role="radiogroup" aria-label={`Size for ${product.name}`}>
          {product.sizes.map((s) => (
            <button
              key={s}
              role="radio"
              aria-checked={size === s}
              onClick={() => setSize(s)}
              className={`h-9 min-w-9 border px-2 text-sm font-medium transition-colors ${
                size === s ? "border-brand bg-brand text-cream" : "border-brand/30 hover:border-brand"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <button
        onClick={() => add(product.id, size)}
        className="mt-3 border border-brand py-2.5 font-semibold text-brand transition-colors hover:bg-brand hover:text-cream"
      >
        Add to cart
      </button>
    </article>
  );
}