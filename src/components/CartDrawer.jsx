import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import ProductImage from "./ProductImage";
import { formatPrice } from "../lib/format";

export default function CartDrawer() {
  const { open, closeCart, items, total, setQty } = useCart();
  const [notice, setNotice] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && closeCart();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeCart]);

  useEffect(() => {
    if (!open) setNotice(false);
  }, [open]);

  return (
    <div className={`fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-ink/40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-page shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-brand/15 px-5 py-4">
          <h2 className="font-display text-2xl font-bold">Your cart</h2>
          <button onClick={closeCart} className="px-2 py-1 font-medium text-brand" tabIndex={open ? 0 : -1}>
            Close
          </button>
        </div>

        {items.length === 0 ? (
          <p className="px-5 py-10 text-ink/70">Your cart is empty. Add something from the catalog to get started.</p>
        ) : (
          <ul className="flex-1 divide-y divide-brand/15 overflow-y-auto px-5">
            {items.map(({ id, size, qty, product }) => (
              <li key={`${id}-${size}`} className="flex gap-4 py-4">
                <div className="h-24 w-20 shrink-0 bg-card p-2">
                  <ProductImage type={product.type} image={product.image} color={product.color} label="" />
                </div>
                <div className="flex flex-1 flex-col">
                  <p className="font-display font-bold leading-tight">{product.name}</p>
                  <p className="text-sm text-ink/70">Size: {size}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center border border-brand/30">
                      <button aria-label="Decrease quantity" className="h-8 w-8" onClick={() => setQty(id, size, qty - 1)} tabIndex={open ? 0 : -1}>
                        −
                      </button>
                      <span className="w-8 text-center text-sm">{qty}</span>
                      <button aria-label="Increase quantity" className="h-8 w-8" onClick={() => setQty(id, size, qty + 1)} tabIndex={open ? 0 : -1}>
                        +
                      </button>
                    </div>
                    <p className="font-semibold text-brand">{formatPrice(product.price * qty)}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {items.length > 0 && (
          <div className="border-t border-brand/15 px-5 py-4">
            <div className="flex justify-between text-lg font-semibold">
              <span>Subtotal</span>
              <span>{formatPrice(total)}</span>
            </div>
            <button
              onClick={() => setNotice(true)}
              className="mt-4 w-full bg-brand py-3 font-semibold text-cream transition-opacity hover:opacity-90"
              tabIndex={open ? 0 : -1}
            >
              Checkout
            </button>
            {notice && (
              <p role="status" className="mt-3 text-sm text-ink/70">
                Checkout isn't connected yet. Connect a payment provider to take orders.
              </p>
            )}
          </div>
        )}
      </aside>
    </div>
  );
}
