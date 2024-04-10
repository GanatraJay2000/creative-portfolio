import Image from "next/image";
import { useTransform, useScroll, MotionValue, motion } from "framer-motion";
import { useRef } from "react";

export default function Works() {
  const container = useRef(null);
  const { height } = useDimensions();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 1.75]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.6]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
  ];

  return (
    <div className="main mt-[5vh] bg-white">
      <div
        ref={container}
        className="gallery h-[175vh]  flex gap-[2vw] p-[2vw] box-border overflow-hidden"
      >
        <Column images={images.slice(0, 3)} y={y1} />
        <Column images={images.slice(3, 6)} y={y2} />
        <Column images={images.slice(6, 9)} y={y3} />
        <Column images={images.slice(9, 12)} y={y4} />
      </div>
    </div>
  );
}

import { motionValue } from "framer-motion";
import useDimensions from "@/lib/hooks/useDimensions";

const Column = ({
  images,
  y = motionValue(0),
}: {
  images: Array<string>;
  y?: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{ y }}
      className="column w-1/4 h-full flex flex-col gap-[2vw] relative first-of-type:top-[-45%] [&:nth-of-type(2)]:top-[-95%] [&:nth-of-type(3)]:top-[-45%] last-of-type:top-[-75%]"
    >
      {images.map((image, index) => (
        <div
          className="imageContainer w-full h-full relative rounded-xl overflow-hidden"
          key={index}
        >
          <Image
            className="object-cover"
            fill
            src={`/assets/images/works/${image}`}
            alt={image}
          />
        </div>
      ))}
    </motion.div>
  );
};
