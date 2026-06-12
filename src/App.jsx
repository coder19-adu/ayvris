import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import { products } from "./data/products";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Hero />

      <main className="px-6 py-12">
        <div className="mx-auto max-w-7xl">

          <h2 className="mb-8 text-3xl font-bold text-[#0047ab]">
            Featured Collection
          </h2>

          <ProductGrid products={products} />

        </div>
      </main>
    </div>
  );
}

export default App;