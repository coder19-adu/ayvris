import { Link } from "react-router-dom";
import ProductImage from "../components/ProductImage";
import { products } from "../data/products";

const featuredProduct = products.find(
  (p) => p.category === "Dresses" || p.category === "Tops"
);

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-12 md:py-20">
        <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[0.95] text-brand md:text-8xl">
          Clothes with one idea: wear it all together.
        </h1>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2">
          <div className="aspect-[4/5] overflow-hidden bg-card">
            <img
              src="/products/mirror.jpeg"
              alt="AYVRIS collection"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 text-lg leading-relaxed">
            <p>
              AYVRIS started with a simple frustration: a wardrobe full of pieces that never quite matched. So we chose two colors, a deep blue and a soft cream, and made everything in them.
            </p>
            <p>
              Each piece is cut to be worn on its own or layered with the rest. Replace this text with your real story: who you are, where you make your clothes and what you care about.
            </p>
<div>
  <Link
    to="/catalog"
    className="inline-block rounded-full bg-brand px-6 py-3 font-semibold text-cream transition-opacity hover:opacity-90"
  >
    Shop the catalog
  </Link>
</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <h2 className="font-display text-3xl font-bold md:text-4xl">What we stand for</h2>
        <dl className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-3">
          {[
            ["Fewer colors", "A blue and a cream that match every other AYVRIS piece."],
            ["Honest fabric", "Heavyweight cotton that holds its shape wash after wash. Update with your real materials."],
            ["Made to keep", "Simple cuts that don't date, so you wear them for years instead of one season."],
          ].map(([t, d]) => (
            <div key={t} className="border-t-2 border-brand pt-4">
              <dt className="font-display text-2xl font-bold text-brand">{t}</dt>
              <dd className="mt-2 leading-relaxed">{d}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
