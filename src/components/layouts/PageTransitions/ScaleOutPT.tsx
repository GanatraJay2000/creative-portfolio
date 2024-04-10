import { motion } from "framer-motion";
import Header from "@/components/layouts/Header";
import { anim } from "@/lib/utils";

export default function ScaleOutPT({
  children,
}: {
  children: React.ReactNode;
}) {
  const opacity = {
    initial: { opacity: 0 },
    enter: { opacity: 1 },
  };

  const slide = {
    initial: { top: "100vh" },
    enter: { top: "100vh" },
    exit: { top: "0", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } },
  };

  const perspective = {
    initial: { y: 0, scale: 1, opacity: 1 },
    enter: { y: 0, scale: 1, opacity: 1 },
    exit: {
      y: -200,
      scale: 0.9,
      opacity: 0.5,
      transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <div className="bg-[#1c1d20]">
      <motion.div
        {...anim(slide)}
        className="fixed top-0 left-0 bg-white h-dvh w-dvw z-10"
      ></motion.div>
      <motion.div {...anim(perspective)} className="bg-white">
        <motion.div {...anim(opacity)} className="content-grid">
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
