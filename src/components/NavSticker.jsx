import { motion } from "framer-motion";

export default function NavSticker({
  icon,
  label,
  className,
  delay,
  rotation,
}) {
  return (
    <motion.div
      className={`
        absolute
        flex
        flex-col
        items-center
        gap-3
        cursor-pointer
        select-none
        ${className}
      `}
      initial={{
        opacity: 0,
        scale: 0.9,
        rotate: rotation,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: rotation,
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      whileHover={{
        rotate: rotation + 4,
      }}
      whileTap={{
        scale: 0.97,
      }}
    >
      <img
        src={icon}
        alt={label}
        className="
          w-24
          md:w-32
          select-none
          pointer-events-none
          block
        "
        draggable="false"
      />

      <span
        className="
          text-sm
          md:text-base
          font-semibold
          tracking-[0.15em]
          text-[#F3E8BF]
        "
      >
        {label}
      </span>
    </motion.div>
  );
}