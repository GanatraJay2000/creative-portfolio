import { motion } from "framer-motion";
import { anim } from "@/lib/utils";

export default function Stairs({ children }: { children: React.ReactNode }) {
  const expand = {
    initial: { top: 0 },
    enter: (idx: number) => ({
      top: "100%",
      transition: { duration: 0.4, delay: 0.05 * idx },
      transitionEnd: { top: "-100%" },
    }),
    exit: (idx: number) => ({
      top: "0%",
      transition: { duration: 0.4, delay: 0.05 * idx },
    }),
  };

  const overlay = {
    initial: { opacity: 0.4 },
    enter: { opacity: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0.4, transition: { duration: 0.4, delay: 0.3 } },
  };

  return (
    <div>
      <div className="banners">
        {[...Array(12)].map((_, idx) => {
          return (
            <motion.div
              {...anim(expand, 12 - idx)}
              key={idx}
              id={`banner-${idx + 1}`}
              className={`pointer-events-none banner min-h-screen bg-[303030] bg-black z-10 fixed top-0 w-[8.334%]`}
              style={{ left: `${8.3333333333 * idx}%` }}
            ></motion.div>
          );
        })}
      </div>
      <motion.div
        {...anim(overlay)}
        className="h-dvh w-dvw fixed top-0 left-0 pointer-events-none bg-black"
      ></motion.div>
      <div className="content-grid">{children}</div>
    </div>
  );
}
