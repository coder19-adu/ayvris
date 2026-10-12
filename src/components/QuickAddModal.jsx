import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductImage from "./ProductImage";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../lib/format";

export default function QuickAddModal({ product, onClose }) {
  const { add } = useCart();

  const sizes = product.sizes || [];
  const [size, setSize] = useState(
    sizes.includes("M") ? "M" : sizes[0] || ""
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  function handleAddToCart() {
    if (sizes.length > 0 && !size) return;

    for (let i = 0; i < quantity; i++) {
      add(product.id, size);
    }

    setAdded(true);
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-3 backdrop-blur-[2px] sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-label={`Quick view: ${product.name}`}
        className="relative grid max-h-[85dvh] w-full max-w-3xl grid-cols-1 overflow-y-auto rounded-2xl bg-[#FAF7F0] shadow-2xl sm:grid-cols-2 sm:overflow-hidden"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close quick view"
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#FAF7F0]/90 text-2xl text-brand transition-colors hover:bg-brand hover:text-cream"
        >
          ×
        </button>

        {/* Product image */}
        <Link
          to={`/product/${product.id}`}
          onClick={onClose}
          aria-label={`View ${product.name} product page`}
          className="group/image relative block overflow-hidden bg-card p-4 sm:min-h-0 sm:p-6"
        >
          {product.isNew && (
            <span className="absolute left-4 top-4 z-10 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-cream">
              New
            </span>
          )}

          <div className="mx-auto aspect-[4/5] w-[85%] min-h-0 transition-transform duration-500 ease-out group-hover/image:scale-[1.03] sm:w-full">
            <ProductImage
              type={product.type}
              image={product.image}
              color={product.color}
              label={product.name}
            />
          </div>
        </Link>

        {/* Product information */}
        <div className="flex flex-col justify-center p-4 sm:p-6">
          <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-brand/60">
            AYVRIS COLLECTION
          </p>

          <h2 className="pr-8 font-display text-2xl font-bold leading-tight text-brand sm:text-3xl">
            {product.name}
          </h2>

          <p className="mt-3 text-lg font-semibold text-brand">
            {formatPrice(product.price)}
          </p>

          <p className="mt-1 text-xs leading-relaxed text-brand/60">
            Shipping calculated at checkout.
          </p>

          {/* Sizes */}
          {sizes.length > 0 && (
            <div className="mt-7">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-medium text-brand">
                  Select size
                </span>

                <span className="text-xs text-brand/60">
                  {size ? `Selected: ${size}` : "Choose a size"}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      setSize(s);
                      setAdded(false);
                    }}
                    aria-pressed={size === s}
                    className={`flex h-11 min-w-11 items-center justify-center rounded-full border px-3 text-sm uppercase transition-all duration-200 ${
                      size === s
                        ? "border-brand bg-brand text-cream"
                        : "border-brand/20 text-brand hover:border-brand"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity and add to cart */}
          <div className="mt-7 flex gap-2">
            <div className="flex h-12 shrink-0 items-center rounded-full border border-brand/40">
              <button
                type="button"
                onClick={() =>
                  setQuantity((current) => Math.max(1, current - 1))
                }
                aria-label="Decrease quantity"
                className="h-full w-9 text-brand"
              >
                −
              </button>

              <span className="min-w-5 text-center text-sm text-brand">
                {quantity}
              </span>

              <button
                type="button"
                onClick={() =>
                  setQuantity((current) => Math.min(10, current + 1))
                }
                aria-label="Increase quantity"
                className="h-full w-9 text-brand"
              >
                +
              </button>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              disabled={sizes.length > 0 && !size}
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-brand px-3 text-sm font-semibold text-cream transition-all duration-200 hover:bg-brand/85 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {added ? (
                <>
                  <span aria-hidden="true">✓</span>
                  Added to cart
                </>
              ) : (
                <>
                  <svg
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
                    <path d="M5 8h14l1 12H4L5 8Z" />
                    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
                  </svg>
                  Add to cart
                </>
              )}
            </button>
          </div>

          {added && (
            <button
              type="button"
              onClick={onClose}
              className="mt-3 h-12 w-full rounded-full border border-brand/20 text-sm font-medium text-brand transition-colors hover:bg-brand/5"
            >
              Continue shopping
            </button>
          )}

          {/* Existing product page remains available */}
          <Link
            to={`/product/${product.id}`}
            onClick={onClose}
            className="mt-5 self-center text-xs text-brand/70 underline underline-offset-4 transition-colors hover:text-brand"
          >
            View full product details
          </Link>
        </div>
      </section>
    </div>
  );
}