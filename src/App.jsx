import ProductGrid from "./components/ProductGrid/ProductGrid";
import { products } from "./data/products";

function App() {
  return (
    <main className="min-h-screen bg-[#ffffff] px-6 py-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-bold text-[#0F4BAF]">
          Catalog
        </h1>

        <ProductGrid products={products} />
      </div>
    </main>
  );
}

export default App;