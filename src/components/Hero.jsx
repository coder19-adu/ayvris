import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, ArrowUp } from "lucide-react";
import CollectionBanner from "./CollectionBanner";

export default function Hero() {
  const [search, setSearch] = useState("");

  return (
    <section className="bg-[#f5f5f7]">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">

        {/* MESSAGE AREA */}
        <div className="relative mb-4 min-h-[70px]">

          {/* TYPING INDICATOR */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              delay: 1,
              duration: 0.25,
            }}
            className="absolute left-0 top-0"
          >
            <div
              className="
                flex items-center gap-2
                rounded-full
                bg-[#e9e9eb]
                px-5 py-3
              "
            >
              <span className="h-2 w-2 rounded-full bg-gray-500 animate-bounce"></span>

              <span
                className="h-2 w-2 rounded-full bg-gray-500 animate-bounce"
                style={{ animationDelay: "0.15s" }}
              ></span>

              <span
                className="h-2 w-2 rounded-full bg-gray-500 animate-bounce"
                style={{ animationDelay: "0.3s" }}
              ></span>
            </div>
          </motion.div>

          {/* MESSAGE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -60,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              delay: 1.45,
              duration: 0.55,
              type: "spring",
              stiffness: 300,
              damping: 18,
            }}
            className="absolute left-0 top-0"
          >
            <div
              className="
                max-w-fit
                rounded-[28px]
                bg-[#f3e8bf]
                px-6
                py-4
                shadow-md
              "
            >
              <p className="text-lg font-medium text-[#0047ab] md:text-xl">
                What do you want to wear today?
              </p>
            </div>

            <p className="mt-1 ml-3 text-xs text-gray-400">
              just now
            </p>
          </motion.div>

        </div>

        {/* SEARCH BAR */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 2.1,
            duration: 0.4,
          }}
          className="mb-8 flex items-center gap-4"
        >
          <button
            className="
              flex h-14 w-14 items-center justify-center
              rounded-full
              bg-[#f3e8bf]
              text-[#0047ab]
              shadow-sm
              transition
              hover:scale-105
            "
          >
            <Plus size={22} />
          </button>

          <div
            className="
              flex flex-1 items-center
              rounded-full
              border border-gray-200
              bg-white
              px-5 py-3
              shadow-sm
            "
          >
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="tell AYVRIS your vibe..."
              className="
                flex-1
                bg-transparent
                text-base
                outline-none
              "
            />

            <button
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full
                bg-[#f3e8bf]
                text-[#0047ab]
                transition
                hover:scale-105
              "
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </motion.div>

        {/* COLLECTION BANNER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 2.6,
            duration: 0.5,
          }}
        >
          <CollectionBanner />
        </motion.div>

      </div>
    </section>
  );
}