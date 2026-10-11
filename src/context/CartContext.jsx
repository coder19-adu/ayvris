import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { products } from "../data/products";

const CartContext = createContext(null);
const STORAGE_KEY = "ayvris-cart";

function load() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [lines, setLines] = useState(load); // [{ id, size, qty }]
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* storage unavailable: cart still works for this session */
    }
  }, [lines]);

  const value = useMemo(() => {
    const items = lines
      .map((l) => ({ ...l, product: products.find((p) => p.id === l.id) }))
      .filter((l) => l.product);

    return {
      items,
      count: items.reduce((n, l) => n + l.qty, 0),
      total: items.reduce((sum, l) => sum + l.qty * l.product.price, 0),
      open,
      openCart: () => setOpen(true),
      closeCart: () => setOpen(false),
      add: (id, size) => {
        setLines((prev) => {
          const found = prev.find((l) => l.id === id && l.size === size);
          return found
            ? prev.map((l) => (l === found ? { ...l, qty: l.qty + 1 } : l))
            : [...prev, { id, size, qty: 1 }];
        });
        setOpen(true);
      },
      setQty: (id, size, qty) =>
        setLines((prev) =>
          qty < 1
            ? prev.filter((l) => !(l.id === id && l.size === size))
            : prev.map((l) => (l.id === id && l.size === size ? { ...l, qty } : l))
        ),
    };
  }, [lines, open]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
