import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import { Fonts } from "@/lib/fonts";
import AnimSVGCurve from "@/components/AnimSVGCurve";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Description() {
  const phrases = [
    "Avid Coder, Designer, and Developer.",
    "Passionate about creating beautiful and functional websites.",
    "Looking for full-time opportunities starting May 2024.",
  ];
  return (
    <div className="Description relative z-[1] mt-[80vh] mb-[50vh] w-1/2 mx-auto">
      <AnimSVGCurve />

      <div className="">
        {phrases.map((phrase, i) => (
          <AnimatedText key={i}>{phrase}</AnimatedText>
        ))}
      </div>
    </div>
  );
}

function AnimatedText({ children }: { children: React.ReactNode }) {
  const text = useRef(null);

  useGSAP(
    () => {
      gsap.from(text.current, {
        scrollTrigger: {
          trigger: text.current,
          start: "0px bottom",
          end: "bottom+=400px bottom",
          scrub: true,
        },
        left: "-200px",
        opacity: 0,
      });
    },
    {
      scope: text,
    }
  );
  return (
    <p ref={text} className={`relative prose prose-2xl font-medium `}>
      {children}
    </p>
  );
}
