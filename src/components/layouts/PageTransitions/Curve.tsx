import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { anim } from "@/lib/utils";

export default function Curve({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const routes: { [key: string]: string } = {
    "/": "Home",
    "/about": "About",
    "/contact": "Contact",
  };

  useEffect(() => {
    const resize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    resize();

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const text = {
    initial: { opacity: 1 },
    enter: {
      opacity: 0,
      top: -100,
      transitionEnd: { top: "70%", opacity: 0 },
      transition: { duration: 0.75, delay: 0.3, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      opacity: 1,
      top: "40%",
      transition: { duration: 0.4, delay: 0.7, ease: [0.33, 1, 0.68, 1] },
    },
  };

  return (
    <div className="">
      {dimensions.width > 0 ? (
        <SVG {...dimensions} />
      ) : (
        <div className="w-dvw h-[calc(100dvh+600px)] -top-[300px] left-0 fixed pointer-events-none" />
      )}
      <motion.p
        {...anim(text)}
        className="absolute top-[40%] left-1/2 text-white -translate-x-1/2 text-5xl  z-50"
      >
        . {routes[router.route]}
      </motion.p>
      <div className="">{children}</div>
    </div>
  );
}

const SVG = ({ width, height }: { width: number; height: number }) => {
  const initialPath = `
      M 0 300
      Q ${width / 2} 0 ${width} 300
      L ${width} ${height + 300}
      Q ${width / 2} ${height + 600} 0 ${height + 300}
      L 0 300
      `;

  const targetPath = `
      M 0 300
      Q ${width / 2} 0 ${width} 300
      L ${width} ${height}
      Q ${width / 2} ${height} 0 ${height}
      L 0 300
      `;

  const curve = {
    initial: { d: initialPath },
    enter: { d: targetPath },
    exit: { d: initialPath },
    transition: { duration: 0.75, delay: 0.3, ease: [0.76, 0, 0.24, 1] },
  };

  const slide = {
    initial: { top: "-300px" },
    enter: {
      top: "-100vh",
      transitionEnd: { top: "100vh" },
    },
    exit: { top: "-300px" },
    transition: { duration: 0.75, delay: 0.3, ease: [0.76, 0, 0.24, 1] },
  };

  return (
    <motion.svg
      style={{ fill: "black" }}
      {...anim(slide)}
      className=" w-dvw h-[calc(100dvh+600px)] -top-[300px] left-0 fixed pointer-events-none z-40"
    >
      <motion.path {...anim(curve)}></motion.path>
    </motion.svg>
  );
};
