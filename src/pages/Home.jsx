import { Link } from "react-router-dom";
import { categories, products } from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductImage from "../components/ProductImage";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../lib/config";
import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

const LETTERS = "AYVRIS".split("");

export default function Home() {
  const newIn = products.filter((p) => p.isNew).slice(0, 4);
  const [basketTouched, setBasketTouched] = useState(false);

  // Hero wordmark scroll animation
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Smoother scroll-linked animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    mass: 0.3,
  });

  const logoScale = useTransform(smoothProgress, [0, 0.45], [1, 0.18]);
  const logoY = useTransform(smoothProgress, [0, 0.45], [0, -180]);
  const logoOpacity = useTransform(smoothProgress, [0, 0.45], [1, 1]);

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
          alt="AYVRIS collection"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/15 to-transparent" />

{/* Shop button */}
<div className="absolute left-1/2 top-[58%] z-20 -translate-x-1/2 -translate-y-1/2">
  <Link
    to="/catalog"
    className="relative inline-block cursor-pointer rounded-full bg-brand px-6 py-3 text-sm font-semibold text-cream transition-opacity hover:opacity-90 md:px-7 md:py-3.5 md:text-base"
  >
    Shop
  </Link>
</div>

<div className="relative z-10 mx-auto w-full max-w-7xl px-3 pb-16 pt-24 md:px-5 md:pb-10">
  {/* Responsive AYVRIS wordmark */}
  <motion.h1
    aria-label="AYVRIS"
    className="mt-0 flex w-full select-none items-center justify-center whitespace-nowrap font-['League_Spartan'] font-black leading-none tracking-[-0.04em] text-brand"
    style={{
      fontSize: "clamp(6.7rem, 15vw, 12rem)",
      scale: logoScale,
      y: logoY,
      opacity: logoOpacity,
      transformOrigin: "center bottom",
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

{/* Seamless moving polka dot tape */}
<div
  aria-hidden="true"
  className="polka-tape relative z-20 w-full overflow-hidden
    border-y border-brand/15"
>
  <div className="polka-tape-track h-7 w-full md:h-9" />
</div>


{/* Full-screen interactive shopping section */}
<section className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-cream px-5 py-8 md:grid md:grid-cols-[1fr_1.5fr_1fr] md:gap-8 md:px-10">

  {/* Background */}
  <img
    src="/products/3.png"
    alt=""
    aria-hidden="true"
    className="absolute inset-0 h-full w-full object-cover object-center"
  />

  {/* Mobile heading — above basket */}
  <div className="relative z-10 mb-2 max-w-sm text-center md:hidden translate-y-3">
    <h2 className="font-display text-3xl font-black leading-tight text-cream">
      A little bit of everything you
      love.
    </h2>
  </div>

  {/* Desktop heading — left of basket */}
  <div className="hidden -translate-y-6 md:block">
    <h2 className="font-display text-4xl font-black leading-tight text-cream lg:text-5xl">
      A little bit of everything you
      <br />
      love.
    </h2>
  </div>

  {/* Basket and package — images remain inside the clickable link */}
  <Link
    to="/catalog"
    aria-label="Shop the AYVRIS collection"
    onTouchStart={() => setBasketTouched(true)}
    onTouchEnd={() => setBasketTouched(false)}
    className="group relative z-10 block aspect-square w-[90vw] max-w-[600px] md:w-full md:max-w-[760px]"
  >
     <img
      src="/products/basket.png"
      alt=""
      aria-hidden="true"
      className={`absolute -inset-0 z-10 -mt-5 h-full w-full object-contain transition-transform duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-[1.03] ${
        basketTouched ? "-translate-y-2 scale-[1.03]" : ""
      }`}
    />

<img
  src="/products/package.png"
  alt="AYVRIS shopping basket with package"
  className={`absolute left-1/2 top-[4%] z-20 w-[58%] -translate-x-1/2 rotate-[-7deg] object-contain transition-transform duration-300 ease-out group-hover:-translate-y-3 group-hover:rotate-[-3deg] ${
    basketTouched ? "-translate-y-3 rotate-[-3deg]" : ""
  }`}
/>

  </Link>

  {/* Mobile subtext — below basket */}
<div className="relative z-10 -mt-12 w-full max-w-xs px-2 text-center md:hidden">
  <h2 className="font-display text-2xl font-black leading-tight text-cream">
    Things you didn't know you needed.
  </h2>

  <p className="mt-3 text-sm leading-relaxed text-cream">
    Trendy clothes, cute accessories & thoughtfully curated hampers.
    Find something for your next outfit, your favourite person, or
    simply because you deserve it.
  </p>
</div>

  {/* Desktop subtext — right of basket */}
  <div className="hidden max-w-xs -translate-y-6 md:block">
    <h2 className="font-display text-2xl font-bold leading-snug text-cream lg:text-3xl">
      Things you didn't know you needed.
    </h2>
    <p className="mt-4 text-sm leading-relaxed text-cream/80 lg:text-base">
      Trendy clothes, cute accessories & thoughtfully curated hampers. Find something for your next outfit, your favourite person, or simply because you deserve it.
    </p>
    
  </div>

</section>

{/* Categories */}
<section className="relative overflow-hidden bg-cream">
  <div className="relative mx-auto max-w-7xl px-5 py-20 md:py-24">

    {/* Sticker 1 — Chat sticker beside Dresses */}
<img
  src="/products/chat.png"
  alt=""
  aria-hidden="true"
  className="pointer-events-none absolute -left-4 top-1 z-20
    w-34 -rotate-12 object-contain
    md:left-15 md:-top-10 md:w-70"
/>

    {/* Sticker 2 — Top right */}
    <img
      src="/products/red.png"
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute -right-10 -top-1 z-20
  w-35 rotate-45 object-contain
  md:-right-15 md:top-0 md:w-75"
    />

    {/* Sticker 3 — Bottom left */}
    <img
      src="/products/blu.png"
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute bottom-4 left-15 z-20
        w-20 -rotate-25 object-contain
        md:-bottom-1 md:right-15 md:w-50"
    />

    {/* Sticker 4 — Bottom right */}
    <img
      src="/products/ball.png"
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-4 right-15 z-20
        w-35 rotate-12 object-contain
        md:-bottom-5 md:right-15 md:w-65"
    />

    {/* Category cards */}
    <div className="mx-auto grid w-full max-w-2xl grid-cols-2 gap-4 md:gap-8">

      {/* Dresses */}
      <Link
        to={`/catalog?category=${encodeURIComponent("Dresses")}`}
        className="group relative mx-auto block w-full max-w-[240px] overflow-hidden rounded-[1.25rem] shadow-lg md:max-w-[280px] md:rounded-[1.5rem]"
      >
        <img
          src="/products/nish.jpeg"
          alt="Shop dresses"
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-cream md:bottom-6 md:left-6">
          <h3 className="font-display text-2xl font-bold md:text-4xl">
            Dresses
          </h3>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand transition-transform duration-300 group-hover:translate-x-1 md:h-11 md:w-11">
            ↗
          </span>
        </div>
      </Link>

      {/* Tops */}
      <Link
        to={`/catalog?category=${encodeURIComponent("Tops")}`}
        className="group relative mx-auto block w-full max-w-[240px] overflow-hidden rounded-[1.25rem] shadow-lg md:max-w-[280px] md:rounded-[1.5rem]"
      >
        <img
          src="/products/mirror.jpeg"
          alt="Shop tops"
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-cream md:bottom-6 md:left-6">
          <h3 className="font-display text-2xl font-bold md:text-4xl">
            Tops
          </h3>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand transition-transform duration-300 group-hover:translate-x-1 md:h-11 md:w-11">
            ↗
          </span>
        </div>
      </Link>

    </div>
  </div>
</section>


{/* AYVRIS moving fashion ticker */}
<section
  className="relative w-full overflow-hidden border-y border-cream/30 bg-brand py-4 md:py-5"
  aria-label="AYVRIS fashion highlights"
>
  <div className="flex w-max animate-ayvris-marquee motion-reduce:animate-none">
    {[0, 1].map((copy) => (
      <div
        key={copy}
        className="flex shrink-0 items-center"
        aria-hidden={copy === 1 ? "true" : undefined}
      >
        {[
          "YOUR PINTEREST BOARD, BUT WEARABLE",
          "CUTE FITS, NO PLANS",
          "YOUR NEXT OUTFIT OBSESSION",
          "A LITTLE EXTRA, ALWAYS",
        ].map((phrase) => (
          <span
            key={phrase}
            className="flex items-center gap-6 px-5 font-display text-sm font-bold uppercase tracking-[0.12em] text-cream md:gap-8 md:px-8 md:text-lg"
          >
            {phrase}
            <span className="text-xl font-normal" aria-hidden="true">
              ✳
            </span>
          </span>
        ))}
      </div>
    ))}
  </div>
</section> 

      {/* Story */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center">
  <div className="flex flex-col items-center text-center md:col-span-2">
            <h2 className="font-display text-4xl font-extrabold leading-tight text-brand md:text-5xl">
              Dress like your saved pins!
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed">
                Ayvris is where your Pinterest daydreams meet your everyday wardrobe. Because your next favourite outfit deserves to leave the moodboard. Find pieces that make getting dressed the best part of your day.
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
                <div key={p.id} className="aspect-square bg-card p-8">
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