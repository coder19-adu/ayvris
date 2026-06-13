import { useEffect, useState } from "react";

import CreamBg from "../assets/papers/cream-bg.png";

import Blue1 from "../assets/papers/blue1.png";
import Blue2 from "../assets/papers/blue2.png";
import Blue3 from "../assets/papers/blue3.png";
import Blue4 from "../assets/papers/blue4.png";
import Blue5 from "../assets/papers/blue5.png";

import HeroContent from "./HeroContent";

const papers = [
  Blue1,
  Blue2,
  Blue3,
  Blue4,
  Blue5,
];

export default function LoadingHero() {
  const [stage, setStage] = useState(0);
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    // preload all images

    papers.forEach((paper) => {
      const img = new Image();
      img.src = paper;
    });

    const timers = [
      setTimeout(() => setStage(1), 300),
      setTimeout(() => setStage(2), 650),
      setTimeout(() => setStage(3), 900),
      setTimeout(() => setStage(4), 1100),

      setTimeout(() => {
        setShowHero(true);
      }, 1700),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Cream Background */}

      <img
        src={CreamBg}
        alt=""
        className="
          fixed
          inset-0
          h-screen
          w-screen
          object-cover
          select-none
          pointer-events-none
        "
      />

      {/* Paper Frames */}

      <div className="absolute inset-0">
        {papers.map((paper, index) => (
          <img
            key={index}
            src={paper}
            alt=""
            className={`
              absolute
              inset-0
              h-screen
              w-screen
              object-cover
              transition-transform
              duration-300
              select-none
              pointer-events-none
              ${
                stage === index
                  ? "opacity-100"
                  : "opacity-0"
              }
            `}
          />
        ))}
      </div>

      {showHero && <HeroContent stage={stage} />}
    </section>
  );
}