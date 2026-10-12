import { Link } from "react-router-dom";
import {
  CONTACT_EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
} from "../lib/config";

export default function Footer() {
  return (
    <footer className="on-blue bg-brand text-cream">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 py-12 sm:grid-cols-2 md:grid-cols-3 md:gap-8 md:px-8 md:py-14">

        {/* Links */}
        <nav aria-label="Footer" className="min-w-0">
          <h2 className="mb-4 font-display text-xl font-bold">
            Explore
          </h2>
          <ul className="space-y-3 font-medium">
            <li>
              <Link to="/catalog" className="transition-opacity hover:opacity-75">
                Catalog
              </Link>
            </li>
            <li>
              <Link to="/about" className="transition-opacity hover:opacity-75">
                About us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-opacity hover:opacity-75">
                Contact
              </Link>
            </li>
          </ul>
        </nav>


        {/* Policies */}
        <nav aria-label="Policies" className="min-w-0">
          <h2 className="mb-4 font-display text-xl font-bold">
            Policies
          </h2>
          <ul className="space-y-3 font-medium">
            <li>
              <Link
                to="/refund-policy"
                className="transition-opacity hover:opacity-75"
              >
                Refund Policy
              </Link>
            </li>
            <li>
              <Link
                to="/shipping-policy"
                className="transition-opacity hover:opacity-75"
              >
                Shipping Policy
              </Link>
            </li>
          </ul>
        </nav>

        {/* Stay Updated */}
        <div className="min-w-0">
          <h2 className="font-display text-xl font-bold">
            Stay Updated
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-cream/80">
            Subscribe to stay updated with exclusive deals and early access
            to new products.
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
              className="w-full min-w-0 rounded-full border border-cream/40 bg-transparent px-3 py-3 text-sm text-cream outline-none placeholder:text-cream/60 focus:border-cream"
            />
            <button
              type="submit"
              className="w-full rounded-full border border-cream bg-cream px-4 py-3 text-sm font-semibold text-brand transition-colors hover:bg-transparent hover:text-cream"
            >
              Join the List
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-cream/20 px-5 py-4 text-center text-sm text-cream/70">
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
}