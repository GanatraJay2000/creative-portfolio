import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function Intro() {
  const container = useRef(null);
  const backgroundImage = useRef(null);
  const introImage = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "+=500px",
          scrub: 1,
        },
      });

      tl.from(backgroundImage.current, {
        clipPath: "inset(10%)",
      })
        .to(
          introImage.current,
          {
            height: "200px",
          },
          0
        )
        .to(backgroundImage.current, {
          height: "130vh",
        });
    },
    { scope: container }
  );
  return (
    <div ref={container} className="intro overflow-hidden">
      <div
        ref={backgroundImage}
        className="backgroundImage absolute top-0 h-[140vh] w-full brightness-[60%]"
      >
        <Image
          className="object-cover object-top w-full h-full"
          src="/assets/images/bg4.jpg"
          fill
          alt="background Image"
        />
      </div>

      <div className="introContainer mt-[55vh] flex items-center justify-center">
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed="0.3"
          className="introImage absolute w-[350px] h-[475px] brightness-[80%]"
        >
          <Image
            src="/assets/images/intro.jpg"
            fill
            alt="Intro Image"
            className="object-cover object-top"
          />
        </div>
        <h1
          data-scroll
          data-scroll-speed="0.7"
          className="text-7xl font-bold z-10 text-white uppercase"
        >
          Jay Ganatra
        </h1>
      </div>
    </div>
  );
}

export default Intro;
