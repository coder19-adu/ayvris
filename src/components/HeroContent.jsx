import { motion } from "framer-motion";
import "@fontsource/anton";
import NavSticker from "./NavSticker";

import Shop from "../assets/icons/shop.svg";
import About from "../assets/icons/about.svg";
import Contact from "../assets/icons/contact.svg";
import Cart from "../assets/icons/cart.svg";
import User from "../assets/icons/user.svg";

export default function HeroContent({ stage }) {
  return (
    <div className="absolute inset-0 z-20">
      {/* LEFT SIDE */}

      <NavSticker
        icon={Shop}
        label="SHOP"
        delay={0.1}
        rotation={-8}
        className="top-[8%] left-[8%]"
      />

      <NavSticker
        icon={About}
        label="ABOUT"
        delay={0.3}
        rotation={6}
        className="top-[40%] left-[20%]"
      />

      <NavSticker
        icon={Contact}
        label="CONTACT"
        delay={0.5}
        rotation={-5}
        className="top-[70%] left-[8%]"
      />

      {/* RIGHT SIDE */}

      <NavSticker
        icon={Cart}
        label="CART"
        delay={0.7}
        rotation={8}
        className="top-[20%] right-[8%]"
      />

      <NavSticker
        icon={User}
        label="YOU"
        delay={0.9}
        rotation={-6}
        className="top-[60%] right-[12%]"
      />

      {/* CENTER CONTENT */}

      <div className="h-full flex flex-col items-center justify-center">
        {stage >= 2 && (
          <motion.h1
            className="text-4xl md:text-9xl font-black uppercase leading-none tracking-tight text-[#F3E8BF]"
            style={{ fontFamily: "Anton, sans-serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            AYVRIS
          </motion.h1>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-lg md:text-xl text-center text-[#F3E8BF]"
        >
          The Art Of Dressing Well
        </motion.p>
      </div>
    </div>
  );
}