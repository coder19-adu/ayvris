import { ShoppingCart } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0047ab]">
      
      <div className="flex items-center justify-between px-6 py-4">

        {/* LEFT */}
        <div className="flex gap-6 text-sm uppercase tracking-wide text-white">
          <a href="#">Shop</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        {/* CENTER */}
        <div className="text-xl font-semibold tracking-[0.3em] text-[#f3e8bf]">
          AYVRIS
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5 text-white">

          <ShoppingCart size={20} />

          <a
            href="https://www.instagram.com/wearayvris"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-70 transition"
          >
            <FaInstagram size={18} />
          </a>

        </div>

      </div>
    </nav>
  );
}