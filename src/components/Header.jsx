import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { BRAND, INSTAGRAM_URL } from "../lib/config";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/catalog", label: "Catalog" },
  { to: "/about", label: "About us" },
  { to: "/contact", label: "Contact" },
];

const linkClass = ({ isActive }) =>
  `rounded-full px-3 py-2 font-medium transition-colors duration-200 ${
    isActive
      ? "bg-brand/10 text-brand"
      : "text-brand/80 hover:bg-brand/5 hover:text-brand"
  }`;

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count, openCart } = useCart();
  const { pathname } = useLocation();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.75);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showBrand = !isHomePage || scrolled;

  return (
    <header className="sticky top-0 z-40 border-b border-brand/15 bg-page/90 backdrop-blur">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-3 sm:px-5">
        {/* Center: animated on Home, always visible on other pages */}
        <Link
          to="/"
          onClick={() => setMenu(false)}
          aria-label="AYVRIS home"
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-display text-lg font-extrabold tracking-tight text-brand transition-[opacity,transform] duration-500 ease-in-out sm:text-2xl ${
            showBrand
              ? "scale-100 opacity-100"
              : "pointer-events-none scale-95 opacity-0"
          }`}
          tabIndex={showBrand ? 0 : -1}
        >
          {BRAND}
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main"
          className="hidden items-center gap-3 md:flex"
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={linkClass}
            >
              {l.label}
            </NavLink>
          ))}

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-3 py-2 font-medium text-brand/80 transition-colors duration-200 hover:bg-brand/5 hover:text-brand"
          >
            Instagram
          </a>
        </nav>

        {/* Cart and Mobile Menu */}
        <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={openCart}
            aria-label={`Open cart, ${count} items`}
            className="flex h-8 items-center gap-1.5 rounded-full bg-brand px-2.5 text-xs font-semibold text-cream transition-all duration-200 hover:bg-brand/85 sm:h-10 sm:gap-2 sm:px-4 sm:text-sm"
          >
            Cart

            <span className="flex min-h-4 min-w-4 items-center justify-center rounded-full bg-cream px-1 text-[10px] font-bold text-brand sm:min-h-5 sm:min-w-5 sm:text-xs">
              {count}
            </span>
          </button>

          <button
            type="button"
            className="flex h-8 items-center justify-center rounded-full border border-brand/30 px-2.5 text-xs font-medium text-brand transition-all duration-200 hover:bg-brand hover:text-cream sm:h-10 sm:px-4 sm:text-sm md:hidden"
            aria-expanded={menu}
            aria-controls="mobile-nav"
            onClick={() => setMenu((m) => !m)}
          >
            {menu ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menu && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-brand/15 bg-page px-5 pb-4 md:hidden"
        >
          <ul className="space-y-1 pt-3 font-display text-xl font-bold">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  onClick={() => setMenu(false)}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 transition-colors duration-200 ${
                      isActive
                        ? "bg-brand/10 text-brand"
                        : "hover:bg-brand/5"
                    }`
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
                className="block rounded-xl px-4 py-3 transition-colors duration-200 hover:bg-brand/5"
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