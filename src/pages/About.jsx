import { Link } from "react-router-dom";
import ProductImage from "../components/ProductImage";
import { products } from "../data/products";

const featuredProduct = products.find(
  (p) => p.category === "Dresses" || p.category === "Tops"
);

export default function About() {
  return (
    <>
      {/* About hero with polka dots and scrapbook layout */}
      <section className="relative overflow-hidden bg-cream">
        {/* Blue polka-dot background */}
       {/* Blue staggered polka-dot background */}
<div
  className="pointer-events-none absolute inset-0"
  style={{
    backgroundImage: `
      radial-gradient(circle, #0047ab 5px, transparent 5.5px),
      radial-gradient(circle, #0047ab 5px, transparent 5.5px)
    `,
    backgroundSize: "60px 60px",
    backgroundPosition: "0 0, 30px 30px",
  }}
/>
        <div className="relative mx-auto min-h-[750px] max-w-7xl px-5 py-12 md:min-h-[850px]">
          {/* Diary PNG - positioned from the left */}
          <img
            src="/products/diary.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -left-50 top-3/10 z-10 w-[145%] max-w-none -translate-y-2/4 -rotate-12 object-contain
            md:-left-85 md:w-[90%]"
          />

          {/* Mirror image layered above diary 
          <div className="absolute left-[25%] top-[19%] z-20 w-[35%] -rotate-6 md:left-[25%] md:top-[10%] md:w-[30%]">
            <div className="overflow-hidden border-[6px] border-cream bg-cream shadow-xl md:border-8">
              <img
                src="/products/mirror.jpeg"
                alt="AYVRIS collection"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div> */}

          {/* Brand story */}
          <div className="relative z-30 ml-auto mt-[500px] max-w-md rounded-2xl border-2 border-brand bg-cream/95 p-5 shadow-lg
          md:mt-0 md:max-w-sm md:translate-y-[150px]">
            <p className="text-base leading-relaxed md:text-lg">
              AYVRIS started with a simple frustration: a wardrobe full of
              pieces that never quite matched. So we chose two colors, a
              deep blue and a soft cream, and made everything in them.
            </p>

            <p className="mt-4 text-base leading-relaxed md:text-lg">
              Each piece is cut to be worn on its own or layered with the
              rest. Replace this text with your real story: who you are,
              where you make your clothes and what you care about.
            </p>

            <Link
              to="/catalog"
              className="mt-5 inline-block rounded-full bg-brand px-6 py-3 font-semibold text-cream transition-opacity hover:opacity-90"
            >
              Shop the catalog
            </Link>
          </div>
        </div>
      </section>

      {/* What we stand for */}
      <section className="relative mx-auto max-w-7xl overflow-hidden px-5 py-16">
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          What we stand for
        </h2>

        <dl className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-3">
          {[
            [
              "Fewer colors",
              "A blue and a cream that match every other AYVRIS piece.",
            ],
            [
              "Honest fabric",
              "Heavyweight cotton that holds its shape wash after wash. Update with your real materials.",
            ],
            [
              "Made to keep",
              "Simple cuts that don't date, so you wear them for years instead of one season.",
            ],
          ].map(([t, d]) => (
            <div key={t} className="border-t-2 border-brand pt-4">
              <dt className="font-display text-2xl font-bold text-brand">
                {t}
              </dt>
              <dd className="mt-2 leading-relaxed">{d}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}