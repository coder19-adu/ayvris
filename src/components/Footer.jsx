import { Link } from "react-router-dom";
import {
  BRAND,
  CONTACT_EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
} from "../lib/config";

export default function Footer() {
  return (
    <footer className="on-blue bg-brand text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4">
        <div>
          <p className="font-display text-3xl font-extrabold">{BRAND}</p>
          <p className="mt-3 max-w-xs text-cream/80">
            Everyday clothing in blue and cream.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="space-y-2 font-medium">
            <li>
              <Link to="/catalog" className="hover:underline">
                Catalog
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="text-cream/80">
          <p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:underline">
              {CONTACT_EMAIL}
            </a>
          </p>

          <p className="mt-1">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {INSTAGRAM_HANDLE}
            </a>
          </p>
        </div>

        {/* Stay Updated */}
        <div>
          <h2 className="font-display text-xl font-bold">
            Stay Updated
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-cream/80">
            subscribe to stay updated with exclusive deals and early access to new products.
          </p>

          <form
            className="mt-4 flex flex-col gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="footer-email" className="sr-only">
              Your email address
            </label>

            <input
              id="footer-email"
              type="email"
              placeholder="Your email address"
              required
              className="w-full border border-cream/40 bg-transparent px-3 py-3 text-sm text-cream outline-none placeholder:text-cream/60 focus:border-cream"
            />

            <button
              type="submit"
              className="border border-cream bg-cream px-4 py-3 text-sm font-semibold text-brand transition-colors hover:bg-transparent hover:text-cream"
            >
              Join the List
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-cream/20 py-4 text-center text-sm text-cream/70">
        © {new Date().getFullYear()} {BRAND}. All rights reserved.
      </div>
    </footer>
  );
}