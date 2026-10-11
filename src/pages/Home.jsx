import { Link } from "react-router-dom";
import { categories, products } from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductImage from "../components/ProductImage";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../lib/config";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const LETTERS = "AYVRIS".split("");
const heroProduct = products.find((p) => p.id === "mother");

export default function Home() {
  const newIn = products.filter((p) => p.isNew).slice(0, 4);

  // Hero wordmark scroll animation
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const logoScale = useTransform(scrollYProgress, [0, 0.45], [1, 0.18]);
  const logoY = useTransform(scrollYProgress, [0, 0.45], [0, -180]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 1]);

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-card"
      >
        {/* Full-screen hero image */}
        <img
          src="/products/bhavya1.jpeg"
          alt={heroProduct?.name || "AYVRIS collection"}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/15 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-8 pt-24 md:pb-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <p className="max-w-sm font-display text-xl font-bold leading-snug md:text-2xl">
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/catalog"
                className="bg-brand px-6 py-3 font-semibold text-cream transition-opacity hover:opacity-90"
              >
                Shop the catalog
              </Link>

              <Link
                to="/about"
                className="border border-brand bg-card/70 px-6 py-3 font-semibold text-brand transition-colors hover:bg-brand hover:text-cream"
              >
                About us
              </Link>
            </div>
          </div>

          {/* Responsive AYVRIS wordmark */}
          <motion.h1
            aria-label="AYVRIS"
            className="mt-8 flex w-full select-none items-center justify-between gap-1 font-display font-extrabold leading-none tracking-tighter text-brand"
            style={{
              fontSize: "clamp(2.8rem, 15vw, 13rem)",
              scale: logoScale,
              y: logoY,
              opacity: logoOpacity,
            }}
          >
            {LETTERS.map((l, i) => (
              <span
                key={i}
                aria-hidden="true"
                className="rise inline-block"
                style={{ "--i": i }}
              >
                {l}
              </span>
            ))}
          </motion.h1>
        </div>
      </section>

      {/* New in */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            New in
          </h2>
          <Link
            to="/catalog"
            className="font-semibold text-brand underline underline-offset-4"
          >
            View all products
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
          {newIn.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="on-blue bg-brand text-cream">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Shop by category
          </h2>
          <ul className="mt-8 divide-y divide-cream/25 border-y border-cream/25">
            {categories.map((c) => (
              <li key={c}>
                <Link
                  to={`/catalog?category=${encodeURIComponent(c)}`}
                  className="flex items-baseline justify-between py-5 font-display text-4xl font-extrabold transition-all hover:pl-4 md:text-7xl"
                >
                  {c}
                  <span className="font-sans text-base font-medium text-cream/80">
                    {products.filter((p) => p.category === c).length} items
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Story */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-4xl font-extrabold leading-tight text-brand md:text-5xl">
              Two colors, made to be worn together.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed">
              Every AYVRIS piece comes in blue or cream, so anything you own
              goes with anything else. Fewer choices in the morning, better
              clothes all year.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-block font-semibold text-brand underline underline-offset-4"
            >
              Read our story
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              products.find((p) => p.id === "cap-blue"),
              products.find((p) => p.id === "tote-cream"),
            ]
              .filter(Boolean)
              .map((p) => (
                <div key={p.id} className="aspect-squar bg-card p-8">
                  <ProductImage
                    type={p.type}
                    image={p.image}
                    color={p.color}
                    label={p.name}
                  />
                </div>
              ))}
          </div>
        </div>
      </section>
</>
  );
}