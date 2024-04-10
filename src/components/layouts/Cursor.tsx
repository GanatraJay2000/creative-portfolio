import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor({
  stickyElement,
}: {
  stickyElement: React.RefObject<HTMLElement>;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  const size = isHovered ? 60 : 20;

  const mouseOptions = { stiffness: 200, damping: 70, mass: 1.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, mouseOptions),
    y: useSpring(mouse.y, mouseOptions),
  };

  useEffect(() => {
    const stickyCurrent = stickyElement.current;

    const manageMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } =
        stickyCurrent!.getBoundingClientRect();

      const stickyCenterX = left + width / 2;
      const stickyCenterY = top + height / 2;

      const distance = {
        x: e.clientX - stickyCenterX,
        y: e.clientY - stickyCenterY,
      };

      if (isHovered) {
        mouse.x.set(stickyCenterX - size / 2 + distance.x * 0.1);
        mouse.y.set(stickyCenterY - size / 2 + distance.y * 0.1);
      } else {
        mouse.x.set(e.clientX - size / 2);
        mouse.y.set(e.clientY - size / 2);
      }
    };

    const manageMouseEnter = () => {
      setIsHovered(true);
    };
    const manageMouseLeave = () => {
      setIsHovered(false);
    };

    stickyCurrent?.addEventListener("mouseenter", manageMouseEnter);
    stickyCurrent?.addEventListener("mouseleave", manageMouseLeave);
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      stickyCurrent?.removeEventListener("mouseenter", manageMouseEnter);
      stickyCurrent?.removeEventListener("mouseleave", manageMouseLeave);
    };
  });

  return (
    <motion.div
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
      className={`bg-black fixed rounded-full pointer-events-none`}
      animate={{ width: size, height: size }}
    ></motion.div>
  );
}
