import Header from "@/components/layouts/Header";
import Inner from "@/components/layouts/Inner";
import { Fonts } from "@/lib/fonts";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { Ref, useEffect, useRef } from "react";

export default function Contact() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const scroll = new LocomotiveScroll();
    })();
  }, []);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <Inner>
      <div ref={container} className="h-[300vh] relative bg-teal-400">
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
        <Section3 scrollYProgress={scrollYProgress} />
      </div>
    </Inner>
  );
}

const Section3 = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const rotate = useTransform(scrollYProgress, [0.6, 1], [-5, 0]);
  const scale = useTransform(scrollYProgress, [0.6, 1], [0.8, 1]);
  return (
    <motion.section
      style={{ rotate, scale }}
      className="h-screen relative z-30 flex justify-center items-center text-justify bg-gray-500 text-white full-width"
    >
      <div className="p1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus
        dolor lectus, et aliquet ligula consectetur ut. Cras vitae ex at lacus
        consequat hendrerit in sit amet nisl. Fusce ac scelerisque nibh. Fusce
        id justo vitae sem consequat hendrerit. Sed commodo dignissim orci id
        lacinia. Proin non lorem augue. Quisque neque libero, convallis nec
        fringilla vel, viverra quis mauris. Etiam gravida congue erat nec
        semper. Maecenas sodales eros dolor, in congue nibh auctor mattis.
        Praesent at sapien mauris. Curabitur interdum ornare enim, a varius
        ligula finibus sit amet. Maecenas maximus lacus eget gravida fermentum.
        Aliquam sit amet dictum leo.
      </div>
    </motion.section>
  );
};
const Section1 = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  return (
    <motion.section
      style={{ rotate, scale }}
      className={`h-screen z-10 flex sticky top-0 justify-center items-center text-justify bg-red-500 text-white full-width ${
        scrollYProgress.get() > 0.6 ? "sticky top-0" : "relative"
      }`}
    >
      <div className="p1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus
        dolor lectus, et aliquet ligula consectetur ut. Cras vitae ex at lacus
        consequat hendrerit in sit amet nisl. Fusce ac scelerisque nibh. Fusce
        id justo vitae sem consequat hendrerit. Sed commodo dignissim orci id
        lacinia. Proin non lorem augue. Quisque neque libero, convallis nec
        fringilla vel, viverra quis mauris. Etiam gravida congue erat nec
        semper. Maecenas sodales eros dolor, in congue nibh auctor mattis.
        Praesent at sapien mauris. Curabitur interdum ornare enim, a varius
        ligula finibus sit amet. Maecenas maximus lacus eget gravida fermentum.
        Aliquam sit amet dictum leo.
      </div>
    </motion.section>
  );
};

const Section2 = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const rotate = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [5, 0, 0, 5]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [0.8, 1, 1, 0.8]
  );
  return (
    <motion.section
      style={{ rotate, scale }}
      className="h-[100vh] sticky top-0  z-20 flex items-end bg-purple-100"
    >
      <Svg1 />
      <section className="h-[10vh] flex justify-center items-center text-justify bg-slate-900 text-white full-width"></section>
    </motion.section>
  );
};

const Svg1 = () => {
  const container = useRef(null);
  const texts = useRef<(SVGTextPathElement | null)[]>([]);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const diff2 = 33.33333333333333;
  const diff1 = 40;
  const rad = 65;
  const diff = diff1;
  useEffect(() => {
    scrollYProgress.on("change", (v) => {
      texts.current.forEach((text, idx) => {
        if (text) {
          text.setAttribute(
            "startOffset",
            `${-1 * diff + idx * diff + v * diff}%`
          );
        }
      });
    });
  }, []);

  return (
    <div ref={container} className="w-full">
      <svg className="w-full mb-10" viewBox="0 0 515 249">
        {/* <path
          fill="none"
          id="curve1"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        /> */}
        <svg viewBox="0 0 515 249">
          <path
            d="M0 135.123C247.963 271.061 248.465 -100.097 515 135.123"
            fill="none"
            id="curve1"
          />
        </svg>
        ;
        <path
          d={`M 257.5, 124.5
        m ${rad}, 0
        a ${rad},${rad} 0 1,0 -${rad * 2},0
        a ${rad},${rad} 0 1,0  ${rad * 2},0
        `}
          fill="none"
          // id="curve1"
        />
        <text
          className={`text-[7px] uppercase font-medium fill-red-500 ${Fonts.lora}`}
        >
          {[...Array(3)].map((_, idx) => (
            <textPath
              ref={(ref: SVGTextPathElement | null) => {
                texts.current[idx] = ref;
              }}
              key={idx}
              href="#curve1"
              // startOffset={idx * 40 + "%"}
            >
              Jay Ganatras Portfolio is da Best
            </textPath>
          ))}
        </text>
      </svg>
    </div>
  );
};

<svg
  width="515"
  height="249"
  viewBox="0 0 515 249"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect width="515" height="249" fill="white" />
  <circle cx="257.5" cy="124.5" r="79" stroke="black" />
</svg>;

<svg viewBox="0 0 515 249">
  <path
    d="M0 135.123C247.963 271.061 248.465 -100.097 515 135.123"
    stroke="black"
  />
</svg>;
