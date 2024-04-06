import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Description() {
  const phrases = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Soluta voluptatum, in ea eum similique repellendus.",
    "facilis ut rem excepturi aliquam, fugiat enim? Sed.",
  ];
  return (
    <div className="Description relative z-10 mt-[30vw] lg:ml-[20vw]">
      {phrases.map((phrase, i) => (
        <AnimatedText key={i}>{phrase}</AnimatedText>
      ))}
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
          markers: true,
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
    <p
      ref={text}
      className="relative prose lg:prose-2xl prose-slate prose-invert uppercase "
    >
      {children}
    </p>
  );
}
