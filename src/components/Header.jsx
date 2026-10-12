import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { BRAND, INSTAGRAM_URL } from "../lib/config";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/catalog", label: "Catalog" },
  { to: "/about", label: "About us" },
  { to: "/contact", label: "Contact" },
];

const linkClass = ({ isActive }) =>
  `py-1 font-medium transition-colors border-b-2 ${
    isActive
      ? "border-brand text-brand"
      : "border-transparent hover:text-brand"
  }`;

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      
setScrolled(window.scrollY > window.innerHeight * 0.75);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-brand/15 bg-page/90 backdrop-blur">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-5">

        {/* Center: AYVRIS appears when scrolling */}
        <Link
          to="/"
          onClick={() => setMenu(false)}
          aria-label="AYVRIS home"
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-2xl font-extrabold tracking-tight text-brand transition-[opacity,transform] duration-500 ease-in-out ${
            scrolled
  ? "opacity-100 scale-100"
  : "pointer-events-none opacity-0 scale-95"
          }`}
          tabIndex={scrolled ? 0 : -1}
        >
          {BRAND}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b-2 border-transparent py-1 font-medium transition-colors hover:text-brand"
          >
            Instagram
          </a>
        </nav>

        <div className="flex items-center gap-1.5">
          <button
            onClick={openCart}
            className="flex h-8 items-center gap-1.5 bg-brand px-2.5 text-sm font-semibold text-cream"
          >
            Cart
            <span className="min-w-4 bg-cream px-1 text-center text-xs font-bold text-brand">
              {count}
            </span>
          </button>

          <button
            className="h-8 border border-brand px-2 text-sm font-medium text-brand md:hidden"
            aria-expanded={menu}
            aria-controls="mobile-nav"
            onClick={() => setMenu((m) => !m)}
          >
            {menu ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {menu && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-brand/15 bg-page px-5 pb-4 md:hidden"
        >
          <ul className="divide-y divide-brand/10 font-display text-2xl font-bold">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  onClick={() => setMenu(false)}
                  className={({ isActive }) =>
                    `block py-3 ${isActive ? "text-brand" : ""}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-3"
              >
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}