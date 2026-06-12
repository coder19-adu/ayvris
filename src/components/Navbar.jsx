import ShopIcon from "../assets/bag.svg";
import AboutIcon from "../assets/about.svg";
import ContactIcon from "../assets/contact.svg";
import CartIcon from "../assets/cart.svg";
import InstagramIcon from "../assets/instagram.svg";

function NavItem({ icon, label, href = "#" }) {
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
      <img
        src={icon}
        alt={label}
        className="
          h-9
          w-9
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:rotate-6
        "
      />

      <span
        className="
          mt-1
          text-[11px]
          font-medium
          uppercase
          tracking-wider
        "
      >
        {label}
      </span>
    </a>
  );
}

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0047ab] shadow-md">
      <div className="mx-auto max-w-7xl">

        <div className="flex items-center justify-between px-8 py-5">

          {/* LEFT NAVIGATION */}
          <div className="flex items-center gap-10">

            <NavItem
              icon={ShopIcon}
              label="Shop"
            />

            <NavItem
              icon={AboutIcon}
              label="About"
            />

            <NavItem
              icon={ContactIcon}
              label="Contact"
            />

          </div>

          {/* BRAND NAME */}
          <div className="flex items-center gap-3">

            <span className="text-lg">🎀</span>

            <h1
              className="
                select-none
                text-4xl
                md:text-5xl
                font-semibold
                tracking-[0.25em]
                text-[#f3e8bf]
              "
            >
              AYVRIS
            </h1>

            <span className="text-lg">✨</span>

          </div>

          {/* RIGHT NAVIGATION */}
          <div className="flex items-center gap-8">

            <NavItem
              icon={CartIcon}
              label="Cart"
            />

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
              <img
                src={InstagramIcon}
                alt="Instagram"
                className="
                  h-7
                  w-7
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:rotate-6
                "
              />

              <span
                className="
                  mt-1
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-wider
                "
              >
                Insta
              </span>
            </a>

          </div>

        </div>

      </div>
    </nav>
  );
}