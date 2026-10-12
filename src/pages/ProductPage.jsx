import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductImage from "../components/ProductImage";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../lib/format";
import ProductCard from "../components/ProductCard";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { add } = useCart();

  const sizes = product?.sizes ?? [];
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setSize(sizes.includes("M") ? "M" : sizes[0] ?? "");
    setQuantity(1);
  }, [id]);

  if (!product) {
    return (
      <section className="mx-auto max-w-7xl px-5 py-20 text-center">
        <h1 className="font-display text-3xl font-bold text-brand">
          Product not found
        </h1>
        <Link
          to="/catalog"
          className="mt-6 inline-block rounded-full bg-brand px-6 py-3 font-semibold text-cream"
        >
          Back to Shop
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-10 md:py-16">
        <Link
          to="/catalog"
          className="mb-8 inline-block rounded-full text-sm font-medium text-brand hover:underline"
        >
          ← Back to Shop
        </Link>

        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          {/* Product image */}
          <div className="aspect-[4/5] overflow-hidden bg-card p-6 md:p-10">
            <ProductImage
              type={product.type}
              image={product.image}
              color={product.color}
              label={product.name}
            />
          </div>

          {/* Product details */}
          <div className="flex flex-col items-start py-2">
            {product.isNew && (
              <span className="bg-brand px-3 py-1 text-xs font-semibold text-cream">
                New In
              </span>
            )}

            <h1 className="mt-4 font-display text-4xl font-extrabold text-brand md:text-5xl">
              {product.name}
            </h1>

            <p className="mt-4 text-xl font-semibold text-brand">
              {formatPrice(product.price)}
            </p>

            <p className="mt-6 leading-relaxed text-brand/80">
              Meet your new favourite from AYVRIS. Style it your way and make
              it part of your everyday wardrobe.
            </p>

            {/* Size selection */}
            <div className="mt-8 w-full">
              <p className="mb-3 text-sm font-semibold">Select Size</p>

              <div className="flex flex-wrap gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    aria-pressed={size === s}
                    className={`min-w-12 rounded-full border px-4 py-3 text-sm font-medium transition-colors ${
                      size === s
                        ? "border-brand bg-brand text-cream"
                        : "border-brand/30 text-brand hover:border-brand"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="mb-3 text-sm font-semibold">Quantity</p>

              <div className="flex items-center overflow-hidden rounded-full border border-brand/30">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity === 1}
                  aria-label="Decrease quantity"
                  className="px-4 py-2 disabled:opacity-40"
                >
                  −
                </button>

                <span className="min-w-10 text-center">{quantity}</span>

                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="px-4 py-2"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              disabled={!size}
              onClick={() => {
                for (let i = 0; i < quantity; i++) {
                  add(product.id, size);
                }
              }}
              className="mt-8 w-full rounded-full bg-brand px-6 py-4 font-semibold text-cream transition-all duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* Similar products */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <h2 className="font-display text-3xl font-bold text-brand md:text-4xl">
          Similar Products
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-8">
          {products
            .filter(
              (p) =>
                p.id !== product.id &&
                (p.category === "Dresses" || p.category === "Tops")
            )
            .slice(0, 4)
            .map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
        </div>
      </section>
    </>
  );
}