import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import { products } from "./data/products";

function App() {
  return (
    <div className="min-h-screen bg-white">

      {/* GLOBAL NAVBAR (always visible) */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="px-6 py-8">

        <div className="mx-auto max-w-7xl">

          {/* PAGE TITLE */}
          <h1 className="mb-8 text-4xl font-bold text-[#0F4BAF]">
            Catalog
          </h1>

          {/* PRODUCT GRID */}
          <ProductGrid products={products} />

        </div>

      </main>

    </div>
  );
}

export default App;