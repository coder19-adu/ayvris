import { products } from "../data/products";

export default function CollectionBanner() {
  return (
    <section className="overflow-hidden rounded-3xl bg-white p-6 shadow-sm">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {products.slice(0, 4).map((product) => (
          <div
            key={product.id}
            className="
              group
              relative
              flex
              h-[420px]
              items-center
              justify-center
              overflow-hidden
              rounded-3xl
              bg-[#faf7f0]
            "
          >
            <img
              src={product.image}
              alt={product.title}
              className="
                max-h-[320px]
                w-auto
                object-contain
                transition-all
                duration-500
                group-hover:scale-110
              "
            />

            <div
              className="
                absolute
                inset-0
                flex
                flex-col
                justify-end
                bg-black/30
                p-5
                opacity-0
                transition-opacity
                duration-300
                group-hover:opacity-100
              "
            >
              <h3 className="text-lg font-medium text-white">
                {product.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}