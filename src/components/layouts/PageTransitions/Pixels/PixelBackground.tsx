import { useEffect, useState } from "react";
import { delay, motion } from "framer-motion";
import { anim } from "@/lib/utils";
import { useRouter } from "next/router";

const numColumns = 20;
const columnWidth = 100 / numColumns;
// Animation Direction - Start Animation From - End Animation From
const directions = [
  "vDD",
  "vDU",
  "vUU",
  "vUD",
  "hLL",
  "hLR",
  "hRR",
  "hRL",
] as const;

const Blocks = ({
  indexOfColumn = 0,
  direction = "vDD",
}: {
  indexOfColumn?: number;
  direction?: (typeof directions)[number];
}) => {
  const [numBlocks, setNumBlocks] = useState(11);
  const opacity = {
    initial: {
      opacity: 1,
    },
    enter: (delays: Array<number>) => ({
      opacity: 0,
      transition: {
        duration: 0,
        delay:
          0.03 *
          delays[["hLL", "vUU", "vDU", "hRL"].includes(direction) ? 0 : 1],
      },
    }),
    exit: (delays: Array<number>) => ({
      opacity: 1,
      transition: {
        duration: 0,
        delay:
          0.03 *
          delays[["hLL", "vUU", "vUD", "hLR"].includes(direction) ? 0 : 1],
      },
    }),
  };

  const shuffle = (a: Array<number>) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      const blockSize = innerWidth * (columnWidth / 100);
      const numBlocks = Math.ceil(innerHeight / blockSize);
      setNumBlocks(numBlocks);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const delays = shuffle([...Array(numBlocks)].map((_, j) => j));
  return delays.map((randomDelay, j) => {
    let delayConst = ["vUU", "vUD", "vDU", "vDD"].includes(direction)
      ? j
      : indexOfColumn;
    return (
      <motion.div
        key={j}
        {...anim(opacity, [
          delayConst + randomDelay,
          numColumns - delayConst + randomDelay,
        ])}
        className="block bg-[#1c1d20] aspect-square"
      />
    );
  });
};

function PixelBackground() {
  const router = useRouter();
  const routes: { [key: string]: string } = {
    "/": "Home",
    "/about": "About",
    "/contact": "Contact",
  };
  const opacity = {
    initial: { opacity: 1 },
    enter: { opacity: 0, transition: { duration: 0.5 } },
    exit: { opacity: 1, transition: { duration: 0.5 } },
  };
  return (
    <div className="pixelBackground fixed w-dvw top-0 left-0 z-[99999999999] flex h-dvh overflow-hidden pointer-events-none">
      <motion.div
        {...anim(opacity)}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold z-[99999999999999]"
      >
        . {routes[router.route]}
      </motion.div>
      {[...Array(numColumns)].map((_, i) => (
        <div
          key={i}
          className={`column h-full`}
          style={{ width: columnWidth + "%" }}
        >
          <Blocks indexOfColumn={i} />
        </div>
      ))}
    </div>
  );
}

export default PixelBackground;
