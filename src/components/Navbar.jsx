import ShopIcon from "../assets/bag.svg";
import AboutIcon from "../assets/about.svg";
import ContactIcon from "../assets/contact.svg";
import CartIcon from "../assets/cart.svg";
import InstagramIcon from "../assets/instagram.svg";

import BowIcon from "../assets/flo.png";
import StarIcon from "../assets/star.png";

function NavItem({ icon, label, large = false, href = "#" }) {
  return (
    <a
      href={href}
      className="
        group
        flex
        flex-col
        items-center
        text-[#f3e8bf]
        transition-all
        duration-300
        hover:-translate-y-1
      "
    >
      <div className="h-7 w-7 flex items-center justify-center">
        <img
          src={icon}
          alt={label}
          className={`
            object-contain
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:rotate-6
            ${large ? "h-9 w-9" : "h-10 w-10"}
          `}
        />
      </div>

      <span className="mt-1 text-[11px] font-medium uppercase tracking-wider">
        {label}
      </span>
    </a>
  );
}

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0047ab] shadow-md">

      <div className="w-full px-16">
        
        <div className="grid grid-cols-3 items-center py-5">

          {/* LEFT NAV */}
          <div className="flex items-center gap-6 justify-start">
            <NavItem icon={ShopIcon} label="Shop" />
            <NavItem icon={AboutIcon} label="About" />
            <NavItem icon={ContactIcon} label="Contact" />
          </div>

          {/* BRAND (CENTER) */}
          <div className="flex items-center justify-center gap-15 relative">

            {/* LEFT STICKER */}
            <img
              src={BowIcon}
              alt="bow"
              className="
                absolute
                -left-21
                -top-4
                h-20 w-20
                rotate-[-30deg]
              "
            />

            <h1
              className="
                select-none
                text-4xl
                md:text-5xl
                font-extrabold
                text-[#f3e8bf]
                tracking-[-0.08em]
              "
            >
              AYVRIS
            </h1>

            {/* RIGHT STICKER */}
            <img
              src={StarIcon}
              alt="star"
              className="
                absolute
                -right-36
                -top-7
                h-28 w-28
                rotate-[45deg]
              "
            />

          </div>

          {/* RIGHT NAV */}
          <div className="flex items-center gap-6 justify-end">

            <NavItem icon={CartIcon} label="Cart" large />

            {/* Instagram */}
            <a
              href="https://www.instagram.com/wearayvris/"
              target="_blank"
              rel="noreferrer"
              className="
                group
                flex
                flex-col
                items-center
                text-[#f3e8bf]
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              <div className="h-7 w-7 flex items-center justify-center">
                <img
                  src={InstagramIcon}
                  alt="Instagram"
                  className="
                    h-6 w-6
                    object-contain
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:rotate-6
                  "
                />
              </div>

              <span className="mt-1 text-[11px] font-medium uppercase tracking-wider">
                Insta
              </span>
            </a>

          </div>

        </div>
      </div>
    </nav>
  );
}