import { MotionValue, motion } from "framer-motion";
import Image from "next/image";
function Gallery({
  handle,
  mousePosition,
}: {
  handle: string;
  mousePosition: { x: MotionValue<any>; y: MotionValue<any> };
}) {
  const { x, y } = mousePosition ?? { x: null, y: null };
  return (
    <div
      className="h-[120vh]"
      style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)" }}
    >
      <div className="w-full h-full relative">
        <Image
          src={`/assets/images/vignette/${handle}/background.jpg`}
          alt="image"
          fill
          className="object-cover w-full"
        />
      </div>

      <motion.div
        style={{ x, y }}
        className="h-[30vw] w-[25vw] fixed top-0 [border-radius:1.5vw] overflow-hidden"
      >
        <Image
          src={`/assets/images/vignette/${handle}/1.jpg`}
          alt="image"
          fill
          className="object-cover w-full"
        />
      </motion.div>
    </div>
  );
}

export default Gallery;
